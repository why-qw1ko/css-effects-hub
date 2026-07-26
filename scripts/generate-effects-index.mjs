/**
 * 生成动效索引文件 EFFECTS_INDEX.md
 * 用途：让 AI / 开发者快速了解站点已存在的全部动效，避免重复添加。
 * 运行：npm run gen:index（修改 effects.ts 或 advanced.astro 后请重新生成）
 */
import { build } from 'esbuild';
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const tmpFile = join(root, '.tmp-effects-index.mjs');

// 1. 用 esbuild 把 TS 数据文件打包成可直接 import 的 ESM
await build({
  entryPoints: [join(root, 'src/data/effects.ts')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: tmpFile,
  logLevel: 'silent',
});

const { effects, categories } = await import(pathToFileURL(tmpFile).href);
rmSync(tmpFile, { force: true });

// 2. 从 advanced.astro 中提取高级动效页的交互效果
const advSource = readFileSync(join(root, 'src/pages/advanced.astro'), 'utf-8');
const advRegex = /id:\s*'([^']+)',\s*cat:\s*'([^']+)',\s*tag:\s*'([^']+)'[\s\S]*?name:\s*'([^']+)',\s*nameCn:\s*'([^']+)',\s*desc:\s*'([^']+)'/g;
const advEffects = [];
let m;
while ((m = advRegex.exec(advSource)) !== null) {
  advEffects.push({ id: m[1], cat: m[2], tag: m[3], name: m[4], nameCn: m[5], desc: m[6] });
}

// 3. 生成 Markdown
const esc = (s) => String(s).replace(/\|/g, '\\|').replace(/\n/g, ' ');
const diffLabel = { easy: '入门', medium: '进阶', hard: '高级' };

const lines = [];
lines.push('# 动效索引（EFFECTS INDEX）');
lines.push('');
lines.push('> ⚠️ 本文件由脚本自动生成，请勿手动编辑。数据变更后运行 `npm run gen:index` 重新生成。');
lines.push('>');
lines.push(`> 生成时间：${new Date().toISOString().slice(0, 10)}`);
lines.push('');
lines.push('## 统计');
lines.push('');
lines.push(`- **动效库**（\`src/data/effects.ts\`）：共 ${effects.length} 个动效，${categories.length} 个分类，详情页路由 \`/effect/{id}\``);
lines.push(`- **高级动效页**（\`src/pages/advanced.astro\`）：共 ${advEffects.length} 个交互效果（页面内嵌数据，无独立详情页）`);
lines.push('');
lines.push('新增动效前请先检索下表，确认 id、名称、效果均不与已有动效重复。');
lines.push('');
lines.push('## 动效库');
lines.push('');

for (const cat of categories) {
  const items = effects.filter((e) => e.category === cat.id);
  if (!items.length) continue;
  lines.push(`### ${cat.icon} ${cat.name} ${cat.nameEn}（${items.length}）`);
  lines.push('');
  lines.push('| ID | 名称 | 英文名 | 难度 | 标签 | 描述 |');
  lines.push('| --- | --- | --- | --- | --- | --- |');
  for (const e of items) {
    lines.push(
      `| \`${e.id}\` | ${esc(e.name)} | ${esc(e.nameEn)} | ${diffLabel[e.difficulty] || e.difficulty} | ${esc(e.tags.join('、'))} | ${esc(e.description)} |`
    );
  }
  lines.push('');
}

lines.push('## 高级动效页');
lines.push('');
lines.push('| ID | 名称 | 中文名 | 分类 | 描述 |');
lines.push('| --- | --- | --- | --- | --- |');
for (const e of advEffects) {
  lines.push(`| \`${e.id}\` | ${esc(e.name)} | ${esc(e.nameCn)} | ${esc(e.tag)} | ${esc(e.desc)} |`);
}
lines.push('');

writeFileSync(join(root, 'EFFECTS_INDEX.md'), lines.join('\n'), 'utf-8');
console.log(`✅ EFFECTS_INDEX.md 已生成：动效库 ${effects.length} 个，高级动效 ${advEffects.length} 个`);

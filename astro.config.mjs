import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

const BASE = '/css-effects-hub/';

// 本地 dev/preview 访问根路径时自动跳转到 base 首页
// 注意：1) Vite 交给中间件前会剥掉 base 前缀，必须用 req.originalUrl 判断，
//        否则会把 base 首页也重定向造成死循环；
//      2) Astro 自带的 404 中间件会抢先处理根路径，需在所有中间件
//        安装完成后把重定向处理器插到栈顶（configureServer 返回回调 + unshift）
const redirectRootHandle = (req, res, next) => {
  const url = req.originalUrl ?? req.url;
  if (url === '/' || url === '/index.html') {
    res.statusCode = 302;
    res.setHeader('Location', BASE);
    res.end();
    return;
  }
  next();
};

const redirectRootToBase = {
  name: 'redirect-root-to-base',
  configureServer(server) {
    return () => {
      server.middlewares.stack.unshift({ route: '', handle: redirectRootHandle });
    };
  },
  configurePreviewServer(server) {
    return () => {
      server.middlewares.stack.unshift({ route: '', handle: redirectRootHandle });
    };
  },
};

export default defineConfig({
  site: 'https://why-qw1ko.github.io',
  base: BASE,
  integrations: [
    vue({ appEntrypoint: '/src/plugins/vue.ts' }),
    tailwind({ applyBaseStyles: false }),
    icon({ include: { lucide: ['*'] } }),
  ],
  output: 'static',
  server: { port: 3000, host: true },
  vite: { plugins: [redirectRootToBase] },
});

import { defineConfig } from 'umi';
import routes from './routes';
import proxy from './proxy';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: false,
  routes: routes,
  history: {
    type: 'browser',
  },
  proxy: proxy,
});

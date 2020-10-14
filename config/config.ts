import { defineConfig } from 'umi';
import routes from './routes';
import proxy from './proxy';
// import {} from '@umijs/plugin-initial-state';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: false,
  history: {
    type: 'browser',
  },
  routes,
  proxy,
});

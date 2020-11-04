import path from 'path';

const alias = {
  '@utils': path.resolve(__dirname, '../submodule/victor_utils_module/src'),
  '~': './src',
};

export default alias;

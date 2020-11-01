// 运行时配置
import { history } from 'umi';
import './app.less';
import { getSession } from '@utils/storage';

export function render(oldRender: () => void) {
  const token = getSession('token');

  if (token) {
    oldRender();
  } else {
    history.push('/login');
    oldRender();
  }
}

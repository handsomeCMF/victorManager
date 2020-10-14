// 运行时配置
import { history } from 'umi';

export function render(oldRender: Function) {
  fetch('/api/auth').then(auth => {
    if (auth.isLogin) {
      oldRender();
    } else {
      history.push('/login');
      oldRender();
    }
  });
}

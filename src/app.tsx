// 运行时配置
import { history } from 'umi';


export function render(oldRender: Function) {
  const userToken = 
  fetch('/api/auth').then(auth => {
    if (auth) { oldRender() }
    else { 
      history.push('/login'); 
      oldRender()
    }
  });
}
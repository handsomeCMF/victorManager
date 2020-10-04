import { IRoute } from 'umi';

const sideRoutes = [
  {
    title: '用户管理',
    path: '/user',
    component: '@/pages/users',
  },
  {
    title: '股票管理',
    path: '/shares',
    component: '@/pages/shares',
  },
  {
    title: '权限管理',
    path: '/permission',
    component: '@/pages/permission',
  },
];

const allRoutes: IRoute[] = [
  {
    title: '首页',
    path: '/',
    component: '@/pages/index',
    routes: sideRoutes,
  },
  {
    title: '登录',
    path: '/login',
    component: '@/pages/index',
  },
];

export { sideRoutes };
export default allRoutes;

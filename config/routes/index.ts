import { IBestAFSRoute } from '@umijs/plugin-layout';

const allRoutes: IBestAFSRoute[] = [
  {
    title: '登录',
    path: '/login',
    component: '@/pages/login',
  },
  {
    path: '/',
    component: '@/components/main',
    routes: [
      {
        redirect: '/Home',
        path: '/',
      },
      {
        path: '/Home',
        menu: { name: '工作台', icon: 'Home' },
        component: '@/pages/home',
      },
      {
        menu: { name: '用户管理', icon: 'User' },
        path: '/user',
        component: '@/pages/users',
      },
      {
        menu: { name: '股票管理', icon: 'Dashboard' },
        path: '/shares',
        component: '@/pages/shares',
      },
      {
        menu: { name: '权限管理', icon: 'Setting' },
        path: '/authorization',
        component: '@/pages/authorization',
      },
    ],
  },
];

export default allRoutes;

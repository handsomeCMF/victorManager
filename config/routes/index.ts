import { IBestAFSRoute } from '@umijs/plugin-layout';

const allRoutes: IBestAFSRoute[] = [
  {
    title: '登录',
    path: '/login',
    component: '@/pages/login',
  },
  {
    title: '首页',
    path: '/',
    redirect: '/Home',
    component: '@/components/main',
    routes: [
      {
        title: '工作台',
        path: '/Home',
        menu: { name: '工作台', icon: 'Home' },
        component: '@/pages/home',
      },
      {
        title: '用户管理',
        menu: { name: '用户管理', icon: 'User' },
        path: '/user',
        component: '@/pages/users',
      },
      {
        title: '股票管理',
        menu: { name: '股票管理', icon: 'Dashboard' },
        path: '/shares',
        component: '@/pages/shares',
      },
      {
        title: '权限管理',
        menu: { name: '权限管理', icon: 'Setting' },
        path: '/permission',
        component: '@/pages/permission',
      },
    ],
  },
];

export default allRoutes;

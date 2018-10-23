const routes = {
  Login: {
    path: '/',
    name: 'Login',
    meta: {title: '登录'},
    component: (component) => {
      return component;
    }
  },
  Main: {
    path: '/Main',
    name: 'Main',
    meta: {title: '主页'},
    component: (component) => {
      return component;
    }
  }
};

export default routes;

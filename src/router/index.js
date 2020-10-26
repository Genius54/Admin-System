import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Welcome from '@/components/Welcome'
import Users from '@/components/user/Users'
import Rights from '@/components/power/Rights'
import Roles from "../components/power/Roles";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect:'/welcome',
      children:[
        {
          path: '/welcome',
          component: Welcome
        },
        {
          path: '/users',
          component: Users
        },
        {
          path: '/rights',
          component: Rights
        },
        {
          path: '/roles',
          component: Roles
        },
      ]
    }
  ]
})
//挂载路由导航守卫
router.beforeEach((to,from,next)=>{
  //to：将要访问的路径
  //from：从哪个路径来
  //next：放行函数    next('/login'):表示强制跳转到'/login'路径
  if(to.path==='/login'){
    return next();
  }else{
    //获取token值
    if(!window.sessionStorage.getItem('token')){
      return next('/login');
    }else{
      return next();
    }
  }
})

export default router;

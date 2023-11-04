import {createRouter, createWebHistory} from 'vue-router'
import Ticket from '@/components/myTicket'
import Login from '@/components/myLogin'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: {
        name: 'ticket'
      }
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: Ticket,
      meta: {
        title: '彩票'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录'
      }
    }
  ]
})

router.beforeEach(to => {
  //判断目标路由是否是/login，如果是，则直接返回true
  if(to.path == '/login'){
    return true;
  }
  else{
    //否则判断用户是否已经登录，注意这里是字符串判断
    if(sessionStorage.isAuth === "true"){
      return true;
    } 
    //如果用户访问的是受保护的资源，且没有登录，则跳转到登录页面
    //并将当前路由的完整路径作为查询参数传给Login组件，以便登录成功后返回先前的页面
    else{
      return {
        path: '/login',
        query: {redirect: to.fullPath}
      }
    }
  }
})

router.afterEach(to => {
  document.title = to.meta.title;
})

export default router
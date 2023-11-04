import { createRouter, createWebHashHistory } from 'vue-router'
import myHome from '../views/myHome.vue'
import myNews from '../views/myNews.vue'
import myAbout from '../views/myAbout.vue'

import myItemComp from '../views/myItem.vue'


//配置路由，简单来说就是通过url地址找到组件，一个路径对应一个组件
const routes = [
  //项目打开默认访问的组件
  {
    path: '/',  //url路径，称为根路径
    component: myHome  //对应的组件
  },
  {
    path: '/news',  //url路径，称为根路径
    component: myNews  //对应的组件
  },
  {
    path: '/about',  //url路径，称为根路径
    component: myAbout  //对应的组件
  },
  {
    path: '/myItem/:id',
    component: myItemComp
  }
]
//创建路由实例
const router = createRouter({
  history: createWebHashHistory(), //has模式
  routes  //路由配置项，上面配置的routes
})

//默认对外提供路由，导出路由
export default router

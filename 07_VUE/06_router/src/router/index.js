// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

//引入组件
import About from '../pages/About';
import New from '../pages/New';
import Home from '../pages/Home';
import Message from '../pages/Message';
import Message2 from '../pages/Message2';
import Detail from '../pages/Detail';
import Detail2 from '../pages/Detail2';

//创建并暴露一个路由器
const router = new VueRouter(
    {
        mode:'hash', //默认
        // mode:'history',
        routes: [
            {
                name: 'guanyu',//命名路由
                path: '/about', // 一级路由
                component: About,
                meta: {
                    isAuth: false,
                },
            },
            {
                name: 'zhuye',
                path: '/home',
                component: Home,
                children: [ // 二级路由
                    {
                        name: 'abcd',
                        path: 'new',  // 
                        component: New,

                        // 独享路由

                        beforeEnter: (to, from, next) => {
                            console.log('独享路由守卫', to, from)
                            if (to.meta.isAuth) { //判断是否需要鉴权
                                if (localStorage.getItem('school') === 'hrcb') {
                                    next()
                                } else {
                                    alert('名不对，无权限查看！')
                                }
                            } else {
                                next()
                            }
                        }


                    },
                    {
                        path: 'message',
                        component: Message,
                        meta: {
                            isAuth: true,
                        },
                        children: [
                            {
                                name: 'xq',
                                path: 'detail', // 三级路由， query 参数
                                component: Detail,

                                //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
                                // props:{a:1,b:'hello'}

                                //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
                                // props:true

                                //props的第三种写法，值为函数
                                props($route) {
                                    return {
                                        id: $route.query.id,
                                        title: $route.query.title,
                                        a: 1,
                                        b: 'hello'
                                    }
                                }
                            }
                        ]
                    },
                    {
                        path: 'message2',
                        component: Message2,
                        children: [
                            {
                                name: 'xiangqing2',
                                path: 'detail/:id/:title',
                                component: Detail2,
                            }
                        ]
                    }
                ]
            }
        ]
    }
)
//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    console.log('前置路由守卫', to, from)
    if (to.meta.isAuth) { //判断是否需要鉴权
        if (localStorage.getItem('school') === 'hrcb') {
            next()
        } else {
            alert('名不对，无权限查看！')
        }
    } else {
        next()
    }
})

//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from)
    document.title = to.meta.title || 'hm-it'
})

export default router
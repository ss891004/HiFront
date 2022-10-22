import VueRouter from "vue-router";

import About from '../pages/About';
import New from '../pages/New';
import Home from '../pages/Home';
import Message from '../pages/Message';
import Detail from '../pages/Detail';


export default new VueRouter(
    {
        routes: [
            {
                path: '/about', // 一级路由
                component: About
            },
            {
                path: '/home',
                component: Home,
                children: [ // 二级路由
                    {
                        name: 'abcd',
                        path: 'new',  // 
                        component: New,
                    },
                    {
                        path: 'message',
                        component: Message,
                        children: [
                            {
                                path: 'detail', // 三级路由， query 参数
                                component: Detail,
                            }
                        ]
                    }
                ]
            }
        ]
    }
)
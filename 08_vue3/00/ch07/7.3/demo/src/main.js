import { createApp } from 'D:\\mynpmsoft\\node_modules\\vue' // Vue 3.x 引入 vue 的形式
import App from './App.vue' // 引入 APP 页面组建
 
const app = createApp(App) // 通过 createApp 初始化 app
app.mount('#root') // 将页面挂载到 root 节点

//const root = document.getElementById('root')
//root.textContent = 'hello,boy and girl'
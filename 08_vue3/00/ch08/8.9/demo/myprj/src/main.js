import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  //引入路由

const app=createApp(App)
app.use(router)
app.mount('#app')
//createApp(App).use(router).mount('#app')
 

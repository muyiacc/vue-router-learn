import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

//use(router) 将Vue Router实例注册到Vue应用中
const app = createApp(App)

app.use(router)

router.beforeEach((to, from, next) => {
    // to 即将进入的路由信息
    // from 当前即将离开的路由信息
    console.log("to", to)
    // console.log("from", from)
    // console.log("next", next)
    // next()

    if (to.path === "/admin") {
        alert("非法访问")
    } else {
        next()
    }


})

app.mount('#app')

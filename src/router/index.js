import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/", // http://localhost:5173
        // alias: "/home", // alias 定义别名
        alias: ["/home", "/index"], // alias 也可定义数组
        component: () => import("@/views/index.vue")
    },
    {
        path: "/content", // 查询参数传参 /content?id=11&name=alice
        component: () => import("@/views/content.vue")
    },
    {
        path: "/user/:id/:name", // 路径传参 /user/111/alice
        name: "user",   // 定义路由名称
        component: () => import("@/views/user.vue")
    },
    {
        path: "/vip", // /vip
        component: () => import("@/views/vip.vue"),
        children: [
            {
                path: "", 
                component: () => import("@/views/vip/default.vue")
            },
            {
                path: "order", 
                component: () => import("@/views/vip/order.vue")
            },
            {
                path: "info", 
                component: () => import("@/views/vip/info.vue")
            },
        ]
    },
    {
        path: "/svip",  
        redirect: "/vip"    // 重定向
    },
    {
        path: "/users",
        redirect: {name: "user", params: {id: "100", name: "alice"}}
    },
]

const router = createRouter({
    //使用url的#符号之后的部分模拟url路径的变化,因为不会触发页面刷新,所以不需要服务端支持
    //history: createWebHashHistory(), 
    history: createWebHistory(),
    routes
})

export default router
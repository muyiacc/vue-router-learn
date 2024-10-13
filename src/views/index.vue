<template>
    <div>
        首页 seektao.cc 
        <br>
        <router-link to="/content?id=11&name=alice">查询字符串的方式</router-link> <br>
        <router-link to="/user/110/alice">路径传参的方式</router-link> <br>

        <router-link :to="{path: '/content', query: {id: 100, name: 'alice'}}">查询字符串的方式 - 动态绑定</router-link> <br>
        <router-link :to='{path: `/user/${userId}/${userName}`}'>路径传参的方式 - 动态绑定</router-link> <br>

        <router-link :to="{name: 'user', params: {id: '100', name: 'alice'}}">查询字符串的方式 - 定义路由名称</router-link> <br>

        <button @click="goTo()">编程式导航</button>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router';

    let userId = 100
    let userName = "寻道之旅"

    const router = useRouter()
    const goTo = () => {
        // router.push("/content?id=11&name=alice")
        // router.push({path: '/content', query: {id: 100, name: 'alice'}})
        router.push({name: 'user', params: {id: '100', name: 'alice'}})

    }
</script>

<style scoped>

</style>
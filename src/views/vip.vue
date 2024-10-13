<template>
    <div>
	    <!-- 共享的Header组件 -->
	    <Header/>

	    <!-- 根据不同的子路由加载不同子页面 -->
	    <router-view />

	    <!-- 共享的Footer组件 -->
	    <Footer/>
    </div>
</template>

<script setup>
    import Header from '@/components/header.vue'
    import Footer from '@/components/footer.vue'
</script>

<style scoped>

</style>
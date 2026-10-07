<script setup lang="ts">
import router from "@/router";

const logout = ()=>{
  localStorage.removeItem("isLogin")
  router.push('/login')
}
</script>

<template>
<p>登录成功</p>
  <button @click="logout">注销</button>
</template>

<style scoped>

</style>
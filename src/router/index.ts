import { createRouter, createWebHistory } from 'vue-router'
import App from "@/App.vue";
import Home from "@/components/Home.vue";
import Login from "@/components/Login.vue";

const routes = [{
  path: "/",
  redirect: "/home",
},
  {
  path: '/home',
  component: Home,
  name: 'Home',
},
  {
    path: '/login',
    component: Login,
    name: 'Login',
  }]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})
router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && localStorage.getItem('isLogin') != 'true') {
    alert("请先登录")
    next("/login")
  }else {
    next()
  }
})


export default router

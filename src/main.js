import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home";
import Login from "@/pages/Login";

 const routes=[
     {
         path:'/',
         component:Home
     },
     {
         path:'/login',
         component:Login
     },
 ]

//routes:routes와 같은 것.
const router= createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router"; // 이건 npm i vue-router 생기는 것. scripts/router.js만들고 주석.
import Home from "@/pages/Home";
import Login from "@/pages/Login";

//밑은 scripts/router.js로 분리함. 01'25'20
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


const router= createRouter({  // <-- 첨만든후, scripts/router.js만들고 주석.
    history:createWebHistory(),
    routes     //routes:routes와 같은 것.
})

createApp(App).use(router).mount('#app');

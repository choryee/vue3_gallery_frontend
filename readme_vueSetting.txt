Vue 3 강의 - vue셋팅 법. 241027


router, store(vuex)설치후, main.js안에 임포트하고,  .user(store)식으로 걸어줘야. <-- main.js에서 사용하겠다 의미.

npm install -g @vue/cli
vue create 프로젝트명 <-- a
vue i axios 24'57
npm i vue-router   <-- 이거후, main.js에 .use(router)해줘야.
npm install vuex@next --save  <-- 이거후, main.js에 .use(store)해줘야.

--
아무 폴더에서  npm install -g @vue/cli
해당폴더로 이동후에 vue create 프로젝트명
- 여기서 vue3할지 물어봄.
------

2.프로젝트생성-프론트엔드 02'06
D:\workspace\mypersonal\vue02\vue3_gallery이 경로에서 cmd(관리자권한으로)창을 열고, 위 a부터 명령어 입력하는 것.
a이후, npm run serve하면, 3000포트에서 접속 가능.

구글에서 cdnjs bootstrap 로 검색.
public/index.html의 <div id="app"></div> 바로 밑에
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.min.js" integrity="sha512-OvBgP9A2JBgiRad/mM36mkzXSXaJE9BEIENnVEmeZdITvwT09xnxLtT4twkCa8m/loMbPHsvPl0T8lRGVBwjlQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
를 붙여 넣기.

<link rel="icon" href="<%= BASE_URL %>favicon.ico">
밑에
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css" integrity="sha512-GQGU0fMMi238uA+a/bdWJfpUGKUkBdgfFdgBm72SUQ6BeyWjoY/ton0tEjH+OSH9iP4Dfh+7HM0I9f5eR0L/4w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
넣기.
--
bootstrap 5에서 examples/album 클릭후, 오른쪽클릭/소스보기에서
 <header>,<footer>코드 가져와,
 App.vue의 <template>사이에 넘.

 위 소스보기에서 <style>부분 가져와서,   App.vue의<style>것을 대체함.

컴포넌트화 함(Header,Footer등) -- 09'13
Card.vue 컴포넌트화 -- 17'37

3. 프로젝트생성- 백엔드. 18'27

gallery에 대고, 오른쪽 클릭/new/project/Spring Initiator
Spring web만 의존성 추가해서 시작함.

vue i axios 설치함. 24'57

// '/api': { 이 주소이면, 우회해서, 서버인 8080으로 갈꺼야.
// 화면에서 호출은 http://localhost:3000/api/account/login 식으로 감.
// 근데 /api로 갈때는, 서버8080에서는 http://localhost:8080/api/account/login에서 온 것 처럼, 프록시 하라는 것. 27'00.

module.exports={
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        // changeOrigin: true,
        // pathRewrite:{
        //   '^/':''
        // }
      } } } }


4.데이터베이스 세팅. 33'16

위 이후 정리는 집에서 vue 연습.txt에 함. 241030

===============

mainOriginal.js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
-------

mainOriginal+router.js

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
-----------

main.js  <-- router설치후, store까지 포함시킨 main.js

import { createApp } from 'vue'
import App from './App.vue'
// import {createRouter, createWebHistory} from "vue-router"; // 이건 npm i vue-router 생기는 것. scripts/router.js만들고 주석.
// import Home from "@/pages/Home";
// import Login from "@/pages/Login";
import store from '@/scripts/store';
import router from "@/scripts/router";

// mainOriginal.js mainOriginal+router.js 보라.
// 이 main.js는 위 2개 main.js + store한 것임.


//밑은 scripts/router.js로 분리함. 01'25'20
 // const routes=[
 //     {
 //         path:'/',
 //         component:Home
 //     },
 //     {
 //         path:'/login',
 //         component:Login
 //     },
 // ]

// const router= createRouter({ <-- 첨 만든후, scripts/router.js만들고 주석.
//     history:createWebHistory(),
//     routes     //routes:routes와 같은 것.
// })

createApp(App).use(router).use(store).mount('#app');

===========

AppOriginal.vue

<template>
  <Header/>
  <Home/>
  <Footer/>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
export default {
  name: 'App',
  components: {
    Home,
    Footer,
    Header
  }
}
</script>

------------------------

App.vue <--router, store 추가후.

<template>
  <Header/>
  <RouterView/>
  <Footer/>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import store from "@/scripts/store";
import axios from "axios";
import {useRoute} from "vue-router";
import {watch} from "vue";

export default {
  name: 'App',
  components: {
    Footer,
    Header
  },
  setup(){
    // 013051. 로그인후, 새로고침하면 로그인 풀리는 것을 sessionStroage로 전역으로 관리. 나중에, 세션이나 쿠키로 변경 가능.
    // 11강전까지 sessionStorage에 저장한 id는 F12/Applications에서 그것을 변경가능해, 1id=0으로 해버리면 다시 로그인이 풀려버려,
    // api로해서 로그인체크 확인해야.(/api/account/check). 하단에.

    // const id = sessionStorage.getItem('id');
    // if(id){     // <v-if="! $store.state.account.id">로그인 를 계속 유지해주므로, 계속 로그인 됨.
    //   store.commit('setAccount', id);
    // }


    // if(id){ // v-if="!$store.state.account.id">로그인 를 계속 유지해주므로, 계속 로그인 됨. 밑은 계속 로그인 유지하기 위함.
    // 그것을 sessionStorage방식이 아닌, 토큰 방식으로 하려는 것.
    const check= ()=>{
      axios.get('/api/account/check').then(({data})=>{
        console.log('App.vue data >>>',  data);
        if(data){
          store.commit('setAccount', data || 0);
        }
      })
    }

    // 경로를 바꿀때마다, 로그인 상태의 값인 id=1인 값을,  체크해서 있으면 있는 값넣고 ,없으면 0을 넣음.
    const route = useRoute();
    watch(route, ()=>{ // route와 check함수를 watch함.
      check();
    })

    return {check}
  }
}
</script>
----------------------------




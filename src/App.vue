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
    // 01'30'51. 로그인후, 새로고침하면 로그인 풀리는 것을 sessionStroage로 전역으로 관리. 나중에, 세션이나 쿠키로 변경 가능.
    // 11강전까지 sessionStorage에 저장한 id는 F12/Applications에서 그것을 변경가능해, id=0으로 해버리면 다시 로그인이 풀려버려,
    // api로해서 로그인체크 확인해야.(/api/account/check). 하단에.

    // const id = sessionStorage.getItem('id');
    // if(id){ // v-if="!$store.state.account.id">로그인 를 계속 유지해주므로, 계속 로그인 됨.
    //   store.commit('setAccount', id);
    // }


    // if(id){ // v-if="!$store.state.account.id">로그인 를 계속 유지해주므로, 계속 로그인 됨. 밑은 계속 로그인 유지하기 위함.
    // 그것을 sessionStorage방식이 아닌, 토큰 방식으로 하려는 것.
    const check=()=>{
      axios.get('/api/account/check').then(({data})=>{
        console.log('App.vue check() >>>',  data);
        if(data){
          store.commit('setAccount',data || 0);
        }
      })
    }

    // 경로를 바꿀때마다, 로그인 상태의 값인 id=1인 값을,  체크해서 있으면 있는 값넣고 ,없으면 0을 넣음.
    const route=useRoute();

    watch(route, ()=>{
      check();
    })

    return {check}
  }
}
</script>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.btn-bd-primary {
  --bd-violet-bg: #712cf9;
  --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

  --bs-btn-font-weight: 600;
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: var(--bd-violet-bg);
  --bs-btn-border-color: var(--bd-violet-bg);
  --bs-btn-hover-color: var(--bs-white);
  --bs-btn-hover-bg: #6528e0;
  --bs-btn-hover-border-color: #6528e0;
  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
  --bs-btn-active-color: var(--bs-btn-hover-color);
  --bs-btn-active-bg: #5a23c8;
  --bs-btn-active-border-color: #5a23c8;
}

.bd-mode-toggle {
  z-index: 1500;
}

.bd-mode-toggle .dropdown-menu .active .bi {
  display: block !important;
}
</style>

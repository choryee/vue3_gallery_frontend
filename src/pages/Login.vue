<template>
  <div class="form-signin w-100 m-auto">

      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input type="email" class="form-control"
               id="floatingInput"
               placeholder="name@example.com"
               v-model="state.form.email"
              @keyup.enter="submit">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="state.form.password" @keyup.enter="submit">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="form-check text-start my-3">
        <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" @keyup.enter="submit">>
        <label class="form-check-label" for="flexCheckDefault">
          Remember me
        </label>
      </div>
      <button class="btn btn-primary w-100 py-2" @click="submit">Sign in</button>
      <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>

  </div>
</template>
<script>
import axios from "axios";
import {reactive} from "vue";
import store from "@/scripts/store";
import router from "@/scripts/router";

export  default {
  name:'Login',
  setup(){
    const state=reactive({
      form:{
        email:'',
        password:''
      }
    })

    const submit = ()=>{
      axios.post("/api/account/login", state.form).then(({data})=>{
        store.commit('setAccount', data);
        sessionStorage.setItem('id', data);
        console.log('login  >>>',  data);
        router.push({path:'/'});
        //아, router.push()는 배열의 push() 메서드와 다릅니다. Vue Router에서 push는 경로를 변경하는 메서드입니다. 이는 Vue Router의 Router 인스턴스에 정의된 메서드로, 배열의 push와는 완전히 다른 기능을 합니다. 아래에 이를 더 자세히 설명하겠습니다.

      }).catch(()=>{
        window.alert('로그인 실패')
      })
    }

    return {state, submit};
  }
}
</script>

<style>
.form-signin {
  max-width: 330px;
  padding: 1rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
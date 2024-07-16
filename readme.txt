Vue 3 강의 - 스프링부트 REST API를 이용하여 쇼핑몰 만들기(JPA, MariaDB, JWT)  240714

- vue3, springBoot, bootstrap5, 인텔리제이에서 db연결, JPA,
- 첨 vue설치후, 스프링 설치,
- AppOriginal.vue, mainOriginal.js보라. <-- router하면서, 수정함.

ctrl+alt+L : 코드정렬

https://github.com/africalib/studies/tree/master/vue3/gallery


아무 폴더에서  npm install -g @vue/cli
해당폴더에서 vue create 프로젝트명
- 여기서 vue3할지 물어봄.

구글에서 cdnjs bootstrap 로 검색.
bootstrap 5에서 examples/album 클릭후, 소스보기에서 코드 가져와, 컴포넌트화 함(Header,Footer등)

mutli-word로 파일명 에러 뜰때 package.json에
  "rules": {
      "vue/multi-word-component-names": 0
    }

gallery에 대고, 오른쪽 클릭/new/project/Spring Initiator
Spring web만 의존성 추가해서 시작함.

id 'org.springframework.boot' version '3.3.1'인데
강사는 2.7.1 버전인듯.

난 java, jdk모두 17로 함. 강사는 18인듯.(난 18이 안 보여서)

gallery
-backend
-frontend
상태 에서, backend에 자바 클래스만들면, spring web의존성이 적용 안돼. @RestController등이 임포트 안 됨.

그래서, 인텔리제이 프로젝트 창 2개로 열어서 작업해야 할 듯.

vue.config.js에서
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
// 위 디폴트를 지움.27'00. 그리고 아래 붙임.

// '/api': { 이 주소이면, 우회해서, 서버인 8080으로 갈꺼야.

30'00
axios.get('/api/items').then(({data})=>{
      console.log('  data>>>',  data); // ['alpha', 'beta', 'gamma']
      console.log('  data>>>',  {data}); // {data:['alpha', 'beta', 'gamma']}
      state.items = data;
    })

4. 데이터베이스 세팅.33'15
인텔리제이에서 직접 mariadb 테이블 만드기 보여줌.

7. vue router 추가. 01'00'49
npm i vue-router후
main.js에서
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
위가 원본. 밑은 추가된것.
main.js보라. <--추가된것.
그후,
 app.vue에,
 <Home>대신,  <RouterView/>

 8. 로그인 구현.01'26

example@example.com
abc0709!!
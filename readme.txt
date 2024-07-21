Vue 3 강의 - 스프링부트 REST API를 이용하여 쇼핑몰 만들기(JPA, MariaDB, JWT)  240714-270721 완강함.

- vue3, springBoot, bootstrap5, 인텔리제이에서 db연결, JPA, JWT<--이건 토큰만든것이고, 시큐리티와 다른것.
- 첨 vue설치후, 스프링 설치(및 연결), router,vuex(store) 설치,,
- AppOriginal.vue, mainOriginal.js보라. <-- router하면서, 수정함.

ctrl+alt+L : 코드정렬

https://github.com/africalib/studies/tree/master/vue3/gallery

npm run serve

벡엔드 에러시
오른쪽 Database탭 클릭
해당 테이블선택후, 스페너모양 클릭, Data Source Properties에서

에러 [S1009] RSA public key is not available client side (option serverRsaPublicKeyFile not set).
https://yooloo.tistory.com/262

App.vue에서
Header
RouterView <-- 여기에 router.js내용 들어 오는 듯.
Footer

router.js에서
{ path: '/',  component: Home },


인텔리제이에서 db사용.
오른쪽상단
Database탭 클릭/ gallery/tables에 대고 오른쪽 클릭
New/Query console하면 새창 뜨고, 전체검색은 아래처럼.
select * from items

--
10. jwt로 로그인 보완. 013030
- 여기서 jwt구현이후, 회원,item등 서버로 요청 보낼때는 서버에서 만든 토큰을 서버에서 다시 받아 확인후, 그 토큰에서
회원id를 꺼내와서 사용함.

11.로그인 체크 로직 보안 014055
- 11강전까지 sessionStorage에 저장한 id는 F12/Applications에서 그것을 변경가능해, id=0으로 해버리면 다시 로그인이 풀려버려,
api로해서 로그인체크 확인해야.(/api/account/check) <-- App.js함.

@PostMapping("/api/account/login")로 호출하면, 서버에서 토큰 만들어서, 쿠키형태(서버에서도 만들수 있음)로 호출한 곳으로 보내줘,
브라우저에 저장됨.

Claims claims = jwtService.getClaims(token); <-- 토큰만들때 secretKey형태로 id나 비번등 저장해둔 id,비번을 다시 꺼내때 쓰는 것.
claims은 그것을 가지고 있는 객체임.

@GetMapping("/api/account/check")<-- 이것은 로그인을 계속 유지하려는 것. App.vue에서 서버로 호출함. 확인하라.

12강.
자바 스트림도 사용함.
List<Integer> itemIds = carts.stream().map(Cart::getItemId).toList();


13.장바구니 기능 구현 2. 020353
 setup(){
    const addToCart=(itemId)=>{
      axios.post(`/api/cart/items/${itemId}`).then(()=>{
      }
  -----
    @PostMapping("/api/cart/items/{itemId}")
    public ResponseEntity pushCartItem(@PathVariable("itemId") int itemId, @CookieValue(value = "token", required = false) String token){


15. 주문 기능 구현. 023314
 load();
 return { state, lib, remove, load }; <-- 여기 넣는 것은, 해당 템플릿안이나, 다른 컴포넌트에서 사용하기 위해.
 즉, 해당 템플릿안에서 사용하려면, return {}안에 넣어야.
 해당 템플릿안에서 사용하는 게 아니고, 그냥 함수만 실행하려면,  load();하면됨.


------

vue에서
<template>
  BB
  v-model=""
  v-for=""
</template>

<script>
export default{
 AAA
}
</script>

-->  AAA부분의 코드(데이터등)은 export되었으므로, 다른 데서 사용할 수 있는데,
그것을 BB에서 사용도 된다. BB부분에서는 vue데이터인지를 모르므로, vue디렉티크인 v-model, v-for등을 사용해서, vue를 사용할 지 안다.
이것은 다른 프런트엔드 라이브러리에도 해당됨. 즉, BB부분에 리액트문법을 사용할 것면, 리액트 디렉티브를 사용해야.240717

------
cors오류에서
http://localhost:3000/api/account from origin http://localhost:8080 has been blocked by CORS..
에서 origin은 화면임.


이 강의에서 사용된 설치 명령어.
router, store(vuex)설치후, main.js에 임포트하고, user(store)식으로 걸어줘야. <-- main.js에서 사용하겠다 의미.

npm install -g @vue/cli
vue create 프로젝트명
vue i axios
npm i vue-router
npm install vuex@next --save

------

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
// 위 디폴트를 지움.27'00. 그리고 아래 붙임(vue.config.js를 보라.)

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

aa@naver.com
123

에러 [S1009] RSA public key is not available client side (option serverRsaPublicKeyFile not set).
https://yooloo.tistory.com/262

9.Vuex로 로그인 보안. 01'17'36
npm install vuex@next --save

로그인후 F5하면, 로그인 풀림
- 백엔드에서 세션, 프론트에서 쿠키,토큰등으로 저장해야.
그전에 sessionStorage에 저장 시도.

router.push({path:'/'});
    //아, router.push()는 배열의 push() 메서드와 다릅니다. Vue Router에서 push는 경로를 변경하는 메서드입니다.
    이는 Vue Router의 Router 인스턴스에 정의된 메서드로, 배열의 push와는 완전히 다른 기능을 합니다. 아래에 이를 더 자세히 설명하겠습니다.

10. jwt로 로그인 보완. 013030
- 여기서 jwt구현이후, 회원,item등 서버로 요청 보낼때는 서버에서 만든 토큰을 서버에서 다시 받아 확인후, 그 토큰에서
회원id를 꺼내와서 사용함.

11.로그인 체크 로직 보안 014055
- 11강전까지 sessionStorage에 저장한 id는 F12/Applications에서 그것을 변경가능해, 1id=0으로 해버리면 다시 로그인이 풀려버려,
api로해서 로그인체크 확인해야.(/api/account/check) <-- App.js함.


12.장바구니 기능 구현 1. 014852
return new ResponseEntity(carts, HttpStatus.OK);  <--ResponseEntity도 테이터를 보낼 수 있다.

********* 자바 스트림도 사용함  *********
List<Integer> itemIds = carts.stream().map(Cart::getItemId).toList();


13.장바구니 기능 구현 2. 020353
카트만들기 화면.
https://cdnjs.com/libraries/font-awesome/4.7.0

 setup(){
    const addToCart=(itemId)=>{
      axios.post(`/api/cart/items/${itemId}`).then(()=>{
      }
  -----
    @PostMapping("/api/cart/items/{itemId}")
    public ResponseEntity pushCartItem(@PathVariable("itemId") int itemId, @CookieValue(value = "token", required = false) String token){


14.장바구니 기능 구현 3. 021208
cart.vue에, computed 사용함.
const computedPrice = computed(()=>{
}

15. 주문 기능 구현. 023314
 load();
 return { state, lib, remove, load }; <-- 여기 넣는 것은, 해당 템플릿안이나, 다른 컴포넌트에서 사용하기 위해.
 즉, 해당 템플릿안에서 사용하려면, return {}안에 넣어야.
 해당 템플릿안에서 사용하는 게 아니고, 그냥 함수만 실행하려면,  load();하면됨.

 const args = JSON.parse(JSON.stringify(state.form)); <-- 깊은 복사.
 args.items = JSON.stringify(state.items);

 16.기능 보완. 025700
@keyup.enter="submit"> Enter 자판 버튼으로 submit되게.

@Transactional // 034950
@PostMapping("/api/orders")
public ResponseEntity pushOrder(){

}
orderRepository.save(newOrder );
// 주문버튼후에는, 카트 비워주기 <-- @Transactional 없으면, 서버 에러남. 바로 위에서 저장하는데, 밑에처럼 삭제를 동시에 하면 에러 나므로,Transactional해줘야, 하나의
트랜젝션이 끝난후, 다음 트랜젝션을 실행함.
cartRepository.deleteByMemberId(memberId);
}

List<Order> lists = orderRepository.findByMemberIdOrderByIdDesc(memberId);
위에서 findByMemberIdOrderByIdDesc이런 매소드도 있나?

메서드 이름 규칙
Spring Data JPA는 메서드 이름을 분석하여 쿼리를 생성합니다. 다음과 같은 규칙을 따릅니다:

접두사: find, findBy, read, query, count, get 등.
조건: By 뒤에 조건을 명시합니다.
정렬: OrderBy 뒤에 정렬할 필드와 정렬 순서를 명시합니다.
예를 들어:

findByMemberId는 memberId로 데이터를 찾습니다.
findByMemberIdOrderByIdDesc는 memberId로 데이터를 찾고, id를 기준으로 내림차순으로 정렬합니다.
Spring Data JPA의 이러한 기능을 사용하면 복잡한 쿼리를 간단한 메서드 정의로 처리할 수 있습니다. 이 기능을 사용하려면 인터페이스에 메서드를 정의하기만 하면 됩니다.
Spring Data JPA는 런타임에 이 메서드를 자동으로 구현합니다.

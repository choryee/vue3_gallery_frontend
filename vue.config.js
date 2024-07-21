// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
// 위 디폴트를 지움.27'00. 그리고 아래 붙임.

// '/api': { 이 주소이면, 우회해서, 서버인 8080으로 갈꺼야.
// 화면에서 호출은 http://localhost:3000/api/account/login 식으로 감.
// 근데 /api로 갈때는, 서버8080에서는 http://localhost:8080/api/account/login에서 온 걸로 프록시 하라는 것.

module.exports={
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        // changeOrigin: true,
        // pathRewrite:{
        //   '^/':''
        // }

      }
    }
  }
}
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
// 위 디폴트를 지움.27'00. 그리고 아래 붙임.

// '/api': { 이 주소이면, 우회해서, 서버인 8080으로 갈꺼야.

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
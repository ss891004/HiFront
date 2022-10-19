module.exports = {
  pages: {
    index: {
      //入口
      entry: 'src/main.js',
    },
  },
  lintOnSave: false, //关闭语法检查

  devServer: {
    proxy: {
      '/api': {// 匹配所有以 '/api'开头的请求路径
        target: 'http://192.168.1.112:5002',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      } 
    }
  },
}
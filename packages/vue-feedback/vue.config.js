const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

const resolve = dir => path.resolve(__dirname, dir)

const distName = 'dist' // 项目名称

module.exports = {
  publicPath: isDev ? '/' : `/`, // public path
  outputDir: resolve(`${distName}`), // 输入地址
  devServer: {
    proxy: 'https://koubei.weddingee.com',
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        data: `@import "@/styles/variables.scss";`
      }
    }
  },
  productionSourceMap: false
}

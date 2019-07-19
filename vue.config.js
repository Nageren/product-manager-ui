const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('@config', resolve('src/config'))
      .set('@axios', resolve('src/config/axios'))
      .set('@views', resolve('src/views'))
      .set('@router', resolve('src/config/router'))
      .set('@store', resolve('src/config/store'))
      .set('@store', resolve('src/config/store'))
  },
  publicPath: BASE_URL,
  // 输出文件目录
  outputDir: undefined,
  // 静态资源目录
  assetsDir: 'assets',
  // 打包时不生成.map文件
  productionSourceMap: false,
  runtimeCompiler: true,
  parallel: undefined,
  css: undefined,
  lintOnSave: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9090',
        changeOrigin: true
      }
    }
  }
}

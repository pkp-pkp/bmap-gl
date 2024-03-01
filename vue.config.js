// vue.config.js配置
const path = require('path')
module.exports = {
  // 关闭eslint
  lintOnSave: false,
  css: { extract: false },
  pages: {
    index: {
      entry: 'examples/main.js', // 因为我们改了src目录，所以对应的入口文件配置也要做修改
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
        .rule('js')
        .include.add(path.resolve(__dirname, 'packages')).end()
        .use('babel')
        .loader('babel-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        })
  }
}

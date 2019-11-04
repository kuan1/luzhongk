const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

const resolve = (...dir) => {
  return path.resolve(__dirname, '..', '..', 'packages', ...dir)
}

const alias = {
  '@luzhongk/vue-feedback': resolve('vue-feedback', 'index'),
  '@luzhongk/vue-request': resolve('vue-request', 'index'),
  '@luzhongk/vue': resolve('vue', 'index'),
  '@packages': resolve(),
  assets: path.resolve(__dirname, '..', 'assets')
}

module.exports = {
  title: 'luzhongk',
  description: 'vue组件和工具集合-卢忠宽',
  base: isDev ? '/' : '/luzhongk/',
  themeConfig: {
    sidebar: {
      // '/feedback/': ['/', '/feedback/']
    },
    nav: [
      // 导航链接
      // {
      //   text: '组件',
      //   items: [
      //     { text: '导航组件', link: '/views/menu' },
      //     { text: '转盘抽奖', link: '/views/lottery' }
      //   ]
      // },
      { text: 'Github', link: 'https://github.com/kuan1/luzhongk' }
    ]
  },
  configureWebpack: {
    resolve: {
      symlinks: false, // 使用npm link
      alias
    }
  },
  extraWatchFiles: ['../../packages'],
  less: {
    includePaths: []
  }
}

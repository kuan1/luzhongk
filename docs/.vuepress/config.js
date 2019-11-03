const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

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
      { text: 'Home ', link: '/' },
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
      alias: {
        '@packages': path.resolve(__dirname, '..', '..', 'packages'),
        assets: path.resolve(__dirname, '..', 'assets')
      }
    }
  },
  extraWatchFiles: ['../../packages'],
  less: {
    includePaths: []
  }
}

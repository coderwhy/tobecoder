import { defineConfig } from 'vitepress'
import { slideBasic } from './slide/01_basic'
import { slideSort } from './slide/03_sort'
const pkg = require('../../package.json')

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: "HTML+CSS最全最详细学习",
  description: "HTML+CSS最全最详细学习",
  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],
  markdown: {
    headers: {
      level: [0, 0]
    }
  },
  themeConfig: {
    nav: nav(),
    sidebar: {
      '/basic/': slideBasic(),
      '/sort/': slideSort()
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/coderwhy' }
    ],
    algolia: {
      appId: 'Q9SP7FM66R',
      apiKey: '168419f13544ab4c72553d37c9b7cfc9',
      indexName: 'coderwhy'
    },
  }
})

function nav() {
  return [
    { text: '最全最强最详细HTML+CSS', link: '../basic/01_intro_html_css', activeMatch: '/basic/' },
    { text: '十大排序算法', link: '../sort/01_冒泡排序.md', activeMatch: '/sort/' },
    { text: '其他技术(更新ing)', link: '../other/01_intro_others.md', activeMatch: '/other/' },
    {
      text: `当前版本${pkg.version}`,
      items: [
        {
          text: 'coderwhy疯狂更新ing',
          link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
        }
      ]
    }
  ]
}

export function slideSort() {
  return [
    {
      text: '简单排序算法',
      collapsed: false,
      items: [
        { text: '01_冒泡排序', link: '/sort/01_冒泡排序' },
        { text: '02_选择排序', link: '/sort/02_选择排序' },
        { text: '03_插入排序', link: '/sort/03_插入排序' }
      ]
    },
    {
      text: "高级排序算法",
      collapsed: false,
      items: [
        { text: '04_归并排序', link: '/sort/04_归并排序' },
        { text: '05_快速排序', link: '/sort/05_快速排序' },
        { text: '06_堆排序', link: '/sort/06_堆排序' },
        { text: '07_希尔排序', link: '/sort/07_希尔排序' }
      ]
    },
    {
      text: "其他排序算法",
      collapsed: false,
      items: [
        { text: '08_计数排序', link: '/sort/08_计数排序' },
        { text: '09_桶排序', link: '/sort/09_桶排序' },
        { text: '10_基数排序', link: '/sort/19_基数排序' },
      ]
    }
  ]
}
new Vue({
  // このelにHTMLのidを指定することで、そのidのDOMでVue.jsのインスタンスがインポートされる
  el: '#app',
  // dataは、定義されたVue.jsのインスタンスが持つ属性（値）
  data: {
    name: '横井太郎さん',
    course: 'Webエンジニアコース',
    acceptancePeriod: '2020年11月期',
    defaultLastId: 4,
    students: [
      { id: 1, name: '野呂浩良', course: '機械学習コース', acceptancePeriod: '2019年01月期' },
      { id: 2, name: '富永修司', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' },
      { id: 3, name: '斉藤一起', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' }
    ]
  },
  // methodsに、Vue.jsのインスタンスに使用させたいメソッドを記載する
  methods: {
    addStudent: function() {
      this.students.push({
        id:this.defaultLastId++,
        name: this.name,
        course: this.course,
        acceptancePeriod: this.acceptancePeriod
      })
      this.name = '横井太郎さん',
      this.course = 'Webエンジニアコース',
      this.acceptancePeriod = '2020年11月期'
    }
  }
})
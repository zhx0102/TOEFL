import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate () {
    // 将当前vm对象作为全局事件总线挂载到Vue原型对象上
    Vue.prototype.$bus = this
  },
}).$mount('#app')

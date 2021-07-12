import Vue from 'vue'
import App from './App.vue'
// import "./css/bootstrap"
Vue.config.productionTip = false

new Vue({
  beforeCreate () {
    // 将当前vm对象作为全局事件总线挂载到Vue原型对象上
    Vue.prototype.$bus = this
  },
  render: h => h(App),
}).$mount('#app')

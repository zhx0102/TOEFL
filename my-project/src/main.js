import Vue from 'vue'
import App from './App.vue'
import router from './routes'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router//注册路由器
}).$mount('#app')

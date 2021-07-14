import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,//所有组件都可以通过store得到store对象
}).$mount('#app')

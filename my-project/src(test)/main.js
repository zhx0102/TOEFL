import Vue from 'vue'
import App from './App.vue'
import "./css/base.css"
// import "./css/bootstrap"
Vue.config.productionTip = false

new Vue({
  beforeCreate(){
    Vue.prototype.$globalEventBus=this
  },
  render: h => h(App),
}).$mount('#app')

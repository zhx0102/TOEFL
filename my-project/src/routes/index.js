import Vue from "vue"
import VueRouter from "vue-router"
import routes from './routes'

Vue.use(VueRouter);

export default new VueRouter({
    mode:"history",//不带#
    //注册应用中的所有路由
    routes
})
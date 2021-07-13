
import Vue from "vue"
import VueRouter from "vue-router"
import About from "../pages/About"
import Home from "../pages/Home"

Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history', // 不带#
    // 注册应用中所有路由
    routes:[
        {
            path:'/',
            redirect:"/home"
            //redirect重定向
        },
        {
            path:"/home",
            component:Home
        },
        {
            path:"/about",
            component:About
        }
    ]
})
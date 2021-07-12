//配置路由相关信息
import VueRouter from "vue-router"
import Vue from "vue"
import Home from "../components/Home"
import About from "../components/About"
// 1.通过vue.use(插件),安装插件
Vue.use(VueRouter)

// 2.创建路由对象
const routes=[
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
const router = new VueRouter({
    //配置路由和组件之间的映射关系
    routes,
    mode:"history"
});

// 3.将router对象传入到Vue实例中
export default router
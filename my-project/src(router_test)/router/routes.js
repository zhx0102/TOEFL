import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Message from "../pages/Message"
import Detail from "../pages/Detail"

export default [{
        path: '/',
        redirect: "/home"
        //redirect重定向
    },
    {
        path: "/home",
        component: Home,
        children: [{
                path: '/',
                redirect: "/home/news"
                //redirect重定向
            },
            {
                path: "/home/news",
                component: News,
            },
            {
                path: "/home/message",
                component: Message,
                children:[
                    {
                        path:"/home/message/detail:id",
                        component:Detail,
                        // 方式一：布尔值==》直接将所有params参数数据映射与props传入=》只能是params参数
                        // props:true
                        //方法二：对象==》将对象中的所有属性映射成props传入=》只能是自定义的数据
                        // props:{id:12,name:tom}
                        // 方法三：函数==》将函数返回的对象中国的所有属性映射成props传入==》可以传递params、query、自定义的数据
                        props:route=>({id:route.params.id,title:route.query.title,name:"Tom"})
                    }
                ]
            }
        ]
    },
    {
        path: "/about",
        component: About
    }
]
//动态引入
const About = () => import('../pages/About');
const Home = () => import('../pages/Home');

import News from '../pages/News'
import Message from '../pages/Message'
import MsgItem from '../pages/MsgItem'
export default [{
        path: "/",
        redirect: "/home"
    },
    {
        name: "about",
        path: "/about",
        component: About
    },
    {
        name: "home",
        path: "/home",
        component: Home,
        children: [{
                path: "/",
                redirect: "/home/news"
            },
            {
                name: "news",
                path: "/home/news",
                component: News
            }, {
                name: "message",
                path: "/home/message",
                component: Message,
                children: [{
                    name: "msgItem",
                    path: "/home/message/msgItem:id",
                    component: MsgItem
                }]
            },
        ]
    }
]
const About = () => import('../pages/About')
const Home = () => import('../pages/Home')
const MsgItem = () => import('../pages/MsgItem')

import News from '../pages/News'
import Message from '../pages/Message'

export default [
    {
        path:"/",
        redirect:"/about"
    },
    {
        name:"about",
        path:"/about",
        component:About
    },
    {
        name:"home",
        path:"/home",
        component:Home,
        children:[
            {
                name:"news",
                path:"/home/news",
                component:News
            },
            {
                name:"message",
                path:"/home/message",
                component:Message,
                children:[
                    {
                        name:"msgItem",
                        path:"/home/message/msgItem/:id",
                        component:MsgItem,
                    }
                ]
            }
        ]
    }
]
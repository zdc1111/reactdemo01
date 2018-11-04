
import Home from '../components/Home';
import New from '../components/New';
import Home1 from '../components/Home1';
import User from '../components/User';
import Home2 from '../components/Home2';
import Todolist from '../components/Todolist';
import Todolist01 from '../components/Todolist01';
import Content from '../components/Content';
import ReactFrom from '../components/ReactFrom';

let routes = [
    {
        path:'/',
        component:Home,
        exact:true
    },
    {
        path:'/User',
        component:User,
        routes:[  /*嵌套路由*/
            {
                path:'/User/',
                component:New,
                exact:true,
            },
            {
                path:'/User/todolist',
                component:Todolist01,
            },
            {
                path:'/User/home',
                component:Home,
            },
            {
                path:'/User/Content/:aid',
                component:Content,
            }
        ]
    },
    {
        path:'/ReactFrom',
        component:ReactFrom,
    }
];
export default routes
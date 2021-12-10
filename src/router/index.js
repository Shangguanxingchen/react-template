import Home from '../views/Home';
import Login from '../views/Login';
import Regist from '../views/Regist';
import NotFound from '../views/NotFound';
import About from '../views/About';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';

const routes = [
    {
        path: ['/','/login'],
        exact: true,
        component: Login
    },
    {
        path: '/regist',
        exact: true,
        component: Regist
    },
    {
        path: ['/404',''],
        component: NotFound
    }
]

const adminRoutes = [
    {
        path: '/admin',
        exact: true,
        component: Home,
        isShow: true,
        icon: <LaptopOutlined />,
        title: '主页'
    },
    {
        path: '/admin/about',
        exact: true,
        component: About,
        isShow: true,
        icon: < UserOutlined/>,
        title: '关于我们'
    },
]

export {
    routes,
    adminRoutes
}
import { Redirect } from 'react-router-dom'
import Home from '../pages/home/index'
import List from '../pages/list/index'
import ListDetail from '../pages/list/detail'

/**
 * 路由配置参考API：https://reacttraining.com/react-router/web/example/route-config
 */
export const routes = [
  { path: '/home', component: Home },
  {
    path: '/list',
    component: List,
    exact: true
  },
  {
    path: '/list/:id',
    component: ListDetail
  }
]
export const menuList = [
  {
    title: '首页',
    path: '/home'
  },
  {
    title: '列表',
    path: '/list'
  }
]

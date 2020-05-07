import React from 'react'

import './App.scss'
import { Layout, Menu } from 'antd' //Breadcrumb

import { routes, menuList } from './router'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

const { Header, Content, Footer } = Layout
function IndexComp (props) {
  const { location, history } = props
  function navigateTo (pathname) {
    history.push({ pathname })
  }
  function RouteWithSubRoutes (routes) {
    return routes.map((route, i) => {
      return <Route key={i} {...route} />
    })
  }
  console.log(RouteWithSubRoutes(routes))
  return (
    <div className='App'>
      <Layout className='layout'>
        <Header>
          <div className='logo' />
          <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={[location.pathname]}
            style={{ lineHeight: '64px' }}
          >
            {menuList.map(menu => {
              return (
                <Menu.Item
                  key={menu.path}
                  onClick={navigateTo.bind(this, menu.path)}
                >
                  {menu.title}
                </Menu.Item>
              )
            })}
          </Menu>
        </Header>
        <Content className='wrapper'>
          {/* 面包屑需写独立组件，暂不做 */}
          {/* <Breadcrumb className="bread-box">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
          </Breadcrumb> */}
          <div className='content'>
            <Switch>
              <Route exact path='/'>
                <Redirect to='/home' />
              </Route>

              {RouteWithSubRoutes(routes)}
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }} />
      </Layout>
    </div>
  )
}

export default withRouter(IndexComp)

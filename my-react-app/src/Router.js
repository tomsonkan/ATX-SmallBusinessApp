import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router'
import Home from './containers/Home'
import HomeSecure from './containers/HomeSecure'
import Login from './components/Login'
import Restaurant from './containers/Restaurant'
import cookie from 'cookie'


const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <Route 
    {...rest}
    render={(props) => checkAuth()
    ? <Component {...props} />
    : <Redirect to="/login" />}
    />
  )
}


const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/Restaurant/:name" component={Restaurant} />
      <ProtectedRoute exact path="/HomeSecure" component={Home} />
    </Switch>
  )
}

export default Router;
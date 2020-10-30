import React, { useMemo } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from './config'

const Router = () => {
  return useMemo(() => {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map(props => (
            <Route key={Array.isArray(props.path) ? props.path[0] : props.path} {...props} />
          ))}
        </Switch>
      </BrowserRouter>
    )
  }, [])
}

export default Router

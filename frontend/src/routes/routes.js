import React from 'react'
import Test from '../components/test'
import { Route, Switch } from 'react-router-dom'

export const postRoutes = (
  <Switch>
    <Route exact={true} path="test" component={Test} />
  </Switch>
);
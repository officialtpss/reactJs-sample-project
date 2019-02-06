import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import  StorageService   from './../storage/StorageService'

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
       (StorageService.getLogin()!==null)
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

import React from 'react';
import { Route } from 'react-router';
import Home from './spotifyApi/components/home';
import LoggedIn from './spotifyApi/components/login/loggedIn';
import Login from './spotifyApi/components/login/login';

export const AppRoutes = [
    <Route key="initial" exact path='/' component={Login} />,
    <Route key="loggedin" exact path='/logged-in' component={LoggedIn} />,
    <Route key="home" exact path='/home' component={Home} />,
]
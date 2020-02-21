// Author：Kingtous
// Date：2020/2/18
// Description：

import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import IndexPage from "../page/business";
import RegisterPage from "../page/business/register";
import LoginPage from "../page/business/login";
import {CssBaseline} from "@material-ui/core";
import Paperbase from "../component/layout/Paperbase";

export default function MyRoute() {
    // 定义路由
    return (
        <Router>
            <div>
                <CssBaseline/>
                <Switch>
                    <Route exact path="/"><IndexPage/></Route>
                    <Route path="/user/login"><LoginPage/></Route>
                    <Route path="/user/register"><RegisterPage/></Route>
                    <Route path="/user/dashboard"><Paperbase/></Route>
                </Switch>
            </div>
        </Router>
    );
};

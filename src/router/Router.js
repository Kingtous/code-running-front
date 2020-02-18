// Author：Kingtous
// Date：2020/2/18
// Description：

import React, {Fragment} from "react";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import IndexPage from "../page/business";
import RegisterPage from "../page/business/register";
import LoginPage from "../page/business/login";

const MyRoute = () => {
    // 定义路由
    return (
        <Router>
            <Fragment>
                <Link to="/user/login"> 开始</Link>
            </Fragment>
            <Route exact path="/" Component={IndexPage}/>
            <Route path="/user/login" Component={LoginPage}/>
            <Route path="/user/register" Component={RegisterPage}/>
        </Router>
    );
};

export default MyRoute;
/*
 * @Author: Kingtous
 * @Date: 2020-02-18 10:38:44
 * @LastEditors: Kingtous
 * @LastEditTime: 2020-02-18 11:00:53
 * @Description: Kingtous' Code
 */
import React from 'react';
import "./css/App.css";
import MyRoute from "./router/Router.js";

export default class App extends React.Component {

    // 定义路由
    render() {
        return (
            <div className="App">
                <MyRoute/>
            </div>
        );
    };

}
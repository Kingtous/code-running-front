/*
 * @Author: Kingtous
 * @Date: 2020-02-07 12:30:36
 * @LastEditors: Kingtous
 * @LastEditTime: 2020-02-18 10:58:16
 * @Description: Kingtous' Code
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

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
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

//生成https://material.io/resources/color/#!/?view.left=1&view.right=0&primary.color=2196F3&secondary.color=7986CB
// 全局主题配置
const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#2196f3",
                light: "#6ec6ff",
                dark: "#0069c0",
                contrastText: "#ffffff"
            },
            secondary: {
                main: "#7986cb",
                light: "#aab6fe",
                dark: "#49599a",
                contrastText: "#ffffff"
            },
        },
    overrides: {
        MuiContainer: {
            root: {
                paddingLeft: "0px",
                paddingRight: "0px",
                "@media (min-width: 600px)": {
                    paddingLeft: "0px",
                    paddingRight: "0px"
                },
                flex: 1,
                backgroundSize: "cover",
            },
            maxWidthLg: {
                "@media (min-width: 1280px)": {
                    maxWidth: "100%"
                }
            },
            maxWidthXs: {
                maxWidth: "600px",
                "@media (min-width: 0px)": {
                    maxWidth: "600px"
                }
            }
        }
        }
    }
);

export default class App extends React.Component {

    // 定义路由
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <MyRoute/>
            </MuiThemeProvider>
        );
    };

}
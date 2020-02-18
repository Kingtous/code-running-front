/*
 * @Author: Kingtous
 * @Date: 2020-02-18 10:54:33
 * @LastEditors: Kingtous
 * @LastEditTime: 2020-02-18 10:54:34
 * @Description: Kingtous' Code
 */
import React from "react";
import Button from "@material-ui/core/Button";

export default class IndexPage extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <h1>
                主页
                <Button>
                    点击登录
                </Button>
            </h1>
        );
    }
}

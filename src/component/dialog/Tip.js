import {Button, Dialog, DialogActions, DialogTitle} from "@material-ui/core";
import React from "react";

/*
 * @Author: Kingtous
 * @Date: 2020-02-18 09:30:27
 * @LastEditors: Kingtous
 * @LastEditTime: 2020-02-18 10:29:25
 * @Description: Kingtous' Code
 */

class NotLoginTip extends React.Component {

    constructor(props) {
        super(props);
        this.state = {"open": true};
    }

    ok() {
        this.prop.history.push("/login");
    };

    render() {
        return (
            <Dialog open={this.state.open}>
                <DialogTitle id="title">
                    用户已退出登录，请重新登录
                </DialogTitle>
                <DialogActions>
                    <Button onClick={this.ok}>
                        确定
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

}


export {NotLoginTip};
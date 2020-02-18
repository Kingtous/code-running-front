// Author：Kingtous
// Date：2020/2/18
// Description：

import {Box, Toolbar} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import React, {Component} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Menu} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {checkIsLogin} from "../../action/LoginUtil";


export default class CodeToolBar extends Component {

    classes = makeStyles(theme => ({
        root: {
            padding: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));

    constructor(prop) {
        super(prop);
        this.state = {
            isLogined: false
        }
    }

    componentDidMount() {
        this.setState({
            isLogined: checkIsLogin()
        });
    }

    render() {
        return (
            <AppBar position={"static"} style={{top: 0, left: 0, margin: 0}}>
                <Toolbar>
                    <IconButton edge={"start"} className={this.classes.menuButton} color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6" className={this.classes.title} style={{flex: 1}}>
                        Coder Community
                    </Typography>
                    <Box justifyContent={"flex-end"}>
                        <Button color="inherit">登录</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        );
    }

}
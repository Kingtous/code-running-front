// Author：Kingtous
// Date：2020/2/18
// Description：

import {Box, Dialog, DialogActions, Drawer, ListItemIcon, ListItemText, Toolbar} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import React, {Component, Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {ContactMail, Menu, Search,} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {checkIsLogin, getUserCache} from "../../action/LoginUtil";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import {withRouter} from "react-router";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";


class CodeToolBar extends Component {

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
        divider: {
            marginTop: theme.spacing(2),
        },
        itemIcon: {
            minWidth: 'auto',
            marginRight: theme.spacing(2),
        },
        listHeader: {
            fontSize: '40px'
        },
        itemText: {},
        listItem: {}
    }));

    constructor(prop) {
        super(prop);
        this.state = {
            isLogined: false,
            username: null,
            drawer: false,
            contactAuthor: false
        }
    }

    ///
    handleProjectProfile = () => {
        window.open("https://github.com/Kingtous/code-running-front");
    };

    handleContactAuthor = () => {
        this.setState(
            {
                contactAuthor: true
            }
        );
    };

    categories = [
        {
            id: '关于本站',
            children: [
                {id: '项目地址', icon: <Search/>, active: true, op: this.handleProjectProfile},
                {id: '联系作者', icon: <ContactMail/>, active: true, op: this.handleContactAuthor},
            ],
        },
    ];

    componentDidMount() {
        if (checkIsLogin()) {
            this.setState({
                isLogined: true,
                username: getUserCache().username
            });
        }
    }

    handleMenuBtnClick = () => {
        this.setState({drawer: true});
    };
    handleMenuClose = () => {
        this.setState({drawer: false})
    };

    handleDrawerItemClick = (id) => {
        for (let i = 0; i < this.categories.length; i++) {
            for (let j = 0; i < this.categories[i].children.length; j++) {
                if (this.categories[i].children[j].id == id) {
                    this.categories[i].children[j].op();
                    return;
                }
            }
        }
    };

    handleDialogClose = (e) => {
        this.setState(
            {
                contactAuthor: false
            }
        );
    };

    render() {
        return (
            <AppBar position={"static"} style={{top: 0, left: 0, margin: 0, opacity: 0.8}}>
                <Toolbar>
                    <IconButton edge={"start"} className={this.classes.menuButton} color="inherit" aria-label="menu"
                                onClick={this.handleMenuBtnClick}
                    >
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6" className={this.classes.title} style={{flex: 1}}>
                        Coder Community
                    </Typography>
                    <Box justifyContent={"flex-end"}>
                        <Button color="inherit" href={this.state.username == null ?
                            "/user/login" : "/user/dashboard"}>
                            {this.state.username == null ? "登录" : this.state.username}
                        </Button>
                    </Box>
                </Toolbar>
                <Drawer open={this.state.drawer} onClose={this.handleMenuClose}>
                    <List disablePadding={true}>
                        {this.categories.map(({id, children}) => (
                            <Fragment key={id}>
                                <ListItem className={this.classes.listHeader}>
                                    <ListItemText className={this.classes.itemText}>
                                        {id}
                                    </ListItemText>
                                </ListItem>
                                {children.map(({id, icon, active}) => (
                                    <ListItem button={true} className={this.classes.listItem} hidden={!active}
                                              onClick={(e) => {
                                                  this.handleDrawerItemClick(id)
                                              }}
                                              key={id}>
                                        <ListItemIcon className={this.classes.itemIcon}>
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText className={this.classes.itemText}>
                                            {id}
                                        </ListItemText>
                                    </ListItem>
                                ))}
                                <Divider className={this.classes.divider}/>
                            </Fragment>
                        ))}
                    </List>
                </Drawer>
                <Dialog open={this.state.contactAuthor}>
                    <DialogTitle>
                        联系作者
                    </DialogTitle>
                    <DialogContent>
                        <p>
                            作者：Kingtous
                        </p>
                        <p>
                            邮箱：me@kingtous.cn
                        </p>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleDialogClose
                        }>
                            确定
                        </Button>
                    </DialogActions>
                </Dialog>
            </AppBar>
        );
    }

}

export default withRouter(CodeToolBar);

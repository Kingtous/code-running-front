import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Edit, Looks, OpenInBrowser, Search} from '@material-ui/icons';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import Button from "@material-ui/core/Button";
import {removeLoginState} from "../../action/LoginUtil";
import withRouter from "react-router-dom/es/withRouter";

const categories = [
  {
    id: '个人简介',
    children: [
      {id: '我的主页', icon: <EmojiPeopleIcon/>, active: true},
      {id: '我的资料', icon: <OpenInBrowser/>, active: true},
    ],
  },
  {
    id: '创作专区',
    children: [
      {id: '我的代码', icon: <Looks/>},
      {id: '编写代码', icon: <Edit/>},
    ],
  },
  {
    id: '广场',
    children: [
      {id: '最新帖子', icon: <SettingsIcon/>},
      {id: '搜索帖子', icon: <Search/>},
      {id: '发布帖子', icon: <TimerIcon/>},
    ],
  },
  {
    id: '我的活动',
    children: [
      {id: '我的帖子', icon: <TimerIcon/>},
      {id: '我的关注', icon: <PhonelinkSetupIcon/>},
    ],
  },
];

const styles = theme => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    fontSize: 'inherit',
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
});

function Navigator(props) {
  const {classes, ...other} = props;
  const username = localStorage.getItem("username");
  if (username == null) {
    props.history.replace("/");
  }
  const date = new Date();

  const sentence = () => {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 6) {
      return "夜深了";
    } else if (hours < 12) {
      return "上午好";
    } else if (hours < 18) {
      return "下午好";
    } else if (hours < 20) {
      return "晚上好"
    } else {
      return "夜深了";
    }
  };

  const logOut = () => {
    removeLoginState();
    props.history.goBack();
  };

  return (
      <Drawer variant="permanent" {...other}>
        <List disablePadding>
          <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
            "码"上社区
          </ListItem>
          <ListItem className={clsx(classes.item, classes.itemCategory)}>
            <ListItemText
                classes={{
                  primary: classes.itemPrimary,
                }}
            >
              {sentence() + "，" + username}
            </ListItemText>

            <Button onClick={
              logOut
            }>
              退出登录
            </Button>

          </ListItem>
          {categories.map(({id, children}) => (
              <React.Fragment key={id}>
                <ListItem className={classes.categoryHeader}>
                  <ListItemText
                      classes={{
                        primary: classes.categoryHeaderPrimary,
                      }}
                  >
                    {id}
                  </ListItemText>
                </ListItem>
                {children.map(({id: childId, icon, active}) => (
                    <ListItem
                        key={childId}
                        button
                        className={clsx(classes.item, active && classes.itemActiveItem)}
                    >
                      <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                      <ListItemText
                          classes={{
                            primary: classes.itemPrimary,
                          }}
                      >
                        {childId}
                      </ListItemText>
                    </ListItem>
                ))}

                <Divider className={classes.divider}/>
              </React.Fragment>
          ))}
        </List>
      </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Navigator));

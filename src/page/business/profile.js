import React from 'react';
import { Typography, Paper, makeStyles, Container, TextField, Button, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    }
    ,
    Paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column'
    },
    Text: {
        margin: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column'
    },
    ProfileTextField: {
        display: 'flex',
        justifyContent: "left",
        flexDirection: 'column'
    },
    Right: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(2)
    },
    Title: {
        fontSize: '24px'
    },
    Avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        justifyContent: 'center', display: 'flex'
    },
    AvatarContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
});

class MyProfilePage extends React.Component {

    constructor(props) {
        super();
        this.state = {
            username : localStorage.getItem("username"),
            skill : localStorage.getItem("skill")
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.Paper}>
                    <div className={classes.Title}>头像修改</div>
                    <div className={classes.AvatarContainer}>
                        <Avatar alt="src/images/main_bg.jpg" src="" placeholder="src/images/main_bg.jpg" className={classes.Avatar} />
                        <Typography className={classes.Text}>
                            {this.state.username}
                        </Typography>
                    </div>
                    <div className={classes.Right}>
                    <Button>更改头像</Button>
                    </div>
                </Paper>

                <Paper className={classes.Paper}>
                    <div className={classes.Title}>资料修改</div>
                    <div className={classes.ProfileTextField}>
                        <TextField label={"昵称"} placeholder={"nickname"} required id="standard-helperText" margin="dense" value={this.state.username}/>
                        <TextField label={"技术水平"} placeholder={"skill"} required id="standard-helperText" margin="dense" value={this.state.skill}  />
                    </div>
                    <div className={classes.Right}>
                        <Button> 提交</Button>
                    </div>
                </Paper>

                <Paper className={classes.Paper}>
                    <div className={classes.Title}>修改密码</div>
                    <div className={classes.ProfileTextField}>
                        <TextField label={"原密码"} placeholder={"prior password"} required id="standard-helperText" margin="dense"/>
                        <TextField label={"新密码"} placeholder={"new password"} required id="standard-helperText" margin="dense" />
                        <TextField label={"重复新密码"} placeholder={"repeat new password"} required id="standard-helperText" margin="dense" />
                    </div>
                    <div className={classes.Right}>
                        <Button> 提交</Button>
                    </div>
                </Paper>
            </div>

        );
    }

}


export default withStyles(styles, { withTheme: true })(MyProfilePage);
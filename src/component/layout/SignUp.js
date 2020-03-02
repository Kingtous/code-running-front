import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {saveToken} from '../../action/LoginUtil';
import {register_url} from '../../static/HttpConstant';
import {HttpProxy} from "../../static/HttpProxy";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Kingtous Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

class SignUpComponent extends React.Component {

    classes = makeStyles(theme => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));
    username;
    password;

    constructor() {
        super();
        this.state = {
            isSame: true
        }
    }

    onUserNameChanged(e) {
        this.username = e.target.value;
    }

    onPasswordChanged(e) {
        this.password = e.target.value;
    }

    submit() {
        HttpProxy.register(this.username, this.password).then((data) => {
            if (data.code === 0) {
                saveToken(data);
            } else {
                alert("存在同名用户了");
            }
        })
    }

    onRepeatPassword(event) {
        // 密码两遍不对
        if (event.target.value == this.password) {
            this.setState({
                isSame: true
            });
        } else {
            this.setState({
                isSame: false
            })
        }

    }

    render() {
        return (
            <Container component="main" maxWidth="xs" style={{padding: "50px"}}>
                <CssBaseline/>
                <div className={this.classes.paper}>
                    <div align="center" style={{marginBottom: "10px"}}>
                        <i class="fa fa-user-plus fa-2x" aria-hidden="true" align="center"/>
                    </div>
                    <Typography component="h1" variant="h5" style={{textAlign: "center"}}>
                        Coder注册
                    </Typography>
                    <Container style={{padding: "8px"}}>
                        <form className={this.classes.form} noValidate onSubmit={false}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="fname"
                                        name="username"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="username"
                                        label="用户名"
                                        autoFocus
                                        onChange={(e) => this.onUserNameChanged(e)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="password"
                                        type="password"
                                        label="密码"
                                        name="password"
                                        autoComplete="current-password"
                                        onChange={(e) => this.onPasswordChanged(e)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="rpassword"
                                        label="再次输入密码"
                                        type="password"
                                        id="rpassword"
                                        autoComplete="current-password"
                                        onChange={(e) => this.onRepeatPassword(e)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <p align="right" style={{color: "red"}}
                                       hidden={this.state.isSame}
                                    > 两次密码不一致 </p>
                                </Grid>
                            </Grid>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                style={{marginTop: "8px", marginBottom: "8px"}}
                                className={this.classes.submit}
                                onClick={(e) => {
                                    this.submit();
                                    return false;
                                }}
                            >
                                注册
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link href="/user/login" variant="body2">
                                        已经有账号了？立即登录
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </Container>

                </div>
                <Box mt={5}>
                    <Copyright/>
                </Box>
            </Container>
        );
    }

}

export {SignUpComponent, Copyright};

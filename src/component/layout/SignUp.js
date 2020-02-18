import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
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

    onUserNameChanged(e) {
        this.username = e.target.value;
    }

    onPasswordChanged(e) {
        this.password = e.target.value;
    }

    submit() {
        let body = {"username": this.username, "password": this.password};
        let initHeader = new Headers();
        initHeader.append('Content-Type', 'application/json');
        body = JSON.stringify(body);
        const init = {
            method: 'POST',
            headers: initHeader,
            body
        };
        fetch("http://127.0.0.1:5000/auth/register", init)
            .then(res => res.json())
            .then(data => {
                if (data.code == 0) {
                    alert(data.data.username);
                } else {
                    alert("存在同名用户了");
                }
            })
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={this.classes.paper}>
                    <Avatar className={this.classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Coder注册
                    </Typography>
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
                                    type="rpassword"
                                    id="rpassword"
                                    autoComplete="current-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
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
                                <Link href="#" variant="body2">
                                    已经有账号了？立即登录
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright/>
                </Box>
            </Container>
        );
    }

}

export {SignUpComponent, Copyright};

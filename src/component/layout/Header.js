import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import {withStyles} from '@material-ui/core/styles';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = theme => ({
    secondaryBar: {
        zIndex: 0,
    },
    menuButton: {
        marginLeft: -theme.spacing(1),
    },
    iconButtonAvatar: {
        padding: 4,
    },
    link: {
        textDecoration: 'none',
        color: lightColor,
        '&:hover': {
            color: theme.palette.common.white,
        },
    },
    button: {
        borderColor: lightColor,
    },
});

/// 每个页面上面固定的header
function Header(props) {
    const {classes, onDrawerToggle} = props;

    return (
        <React.Fragment>
            <AppBar color="primary" position="sticky" elevation={0}>
                <Toolbar>
                    <Grid container spacing={1} alignItems="center">
                        <Hidden smUp>
                            <Grid item>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={onDrawerToggle}
                                    className={classes.menuButton}
                                >
                                    <MenuIcon/>
                                </IconButton>
                            </Grid>
                        </Hidden>
                        <Grid item xs>
                            {props.title}
                        </Grid>
                        <Grid item>
                            <Link className={classes.link} href="#" variant="body2">
                                Go to docs
                            </Link>
                        </Grid>
                        <Grid item>
                            <Tooltip title="Alerts • No alerts">
                                <IconButton color="inherit">
                                    <NotificationsIcon/>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <IconButton color="inherit" className={classes.iconButtonAvatar}>
                                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar"/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

        </React.Fragment>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);

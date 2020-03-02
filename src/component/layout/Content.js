import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {makeStyles, useTheme, withStyles} from '@material-ui/core/styles';
import {getUserCache} from "../../action/LoginUtil";
import {Container} from "@material-ui/core";
import SwipeableViews from 'react-swipeable-views';
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// 我的主页

const styles = theme => ({
    paper: {
        maxWidth: 936,
        margin: 'auto',
        overflow: 'hidden',
    },
    searchBar: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
        fontSize: theme.typography.fontSize,
    },
    block: {
        display: 'block',
    },
    addUser: {
        marginRight: theme.spacing(1),
    },
    contentWrapper: {
        margin: '40px 8px',
    },
    columnWrapper: {
        margin: '16px 16px',
        float: 'left',
        flex: 1,
        width: 'auto'
    },
    rowWrapper: {
        margin: '16px 16px',
        alignContent: 'space-around'
    },
    typo: {
        margin: '16px 16px',
        fontSize: '24px'
    },
    container: {
        maxWidth: 936,
        margin: '24px 24px',
        overflow: 'hidden',
    },
    div: {
        margin: '16px 16px'
    }
});

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
}));

function Content(props) {
    const {classes} = props;

    const [codeNum, setCodeNum] = React.useState(0);
    const [threadNum, setThreadNum] = React.useState(0);
    const [likeNum, setLikeNum] = React.useState(0);
    const [visitorNum, setVisitorNum] = React.useState(0);
    const theme = useTheme();

    // 页面栏
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    return (
        <div className={classes.paper}>
            <Container className={classes.container}>
                <Paper className={classes.paper}>
                    <div className={classes.contentWrapper} align={"center"}>
                        <i className="fa fa-user-circle fa-5x" aria-hidden="true"/>
                    </div>
                    <div className={classes.contentWrapper}>
                        <Typography color="textPrimary" align="center">
                            {getUserCache().username}
                        </Typography>
                    </div>
                    <Toolbar>
                        <div className={classes.columnWrapper}>
                            <Typography color="textPrimary" align="center">
                                我的代码数
                            </Typography>
                            <Typography className={classes.typo} color="textPrimary" align="center">
                                {codeNum}
                            </Typography>
                        </div>
                        <div className={classes.columnWrapper}>
                            <Typography color="textPrimary" align="center">
                                我的帖子数
                            </Typography>
                            <Typography className={classes.typo} color="textPrimary" align="center">
                                {threadNum}
                            </Typography>
                        </div>
                        <div className={classes.columnWrapper}>
                            <Typography color="textPrimary" align="center">
                                我的获赞数
                            </Typography>
                            <Typography className={classes.typo} color="textPrimary" align="center">
                                {likeNum}
                            </Typography>
                        </div>
                        <div className={classes.columnWrapper}>
                            <Typography color="textPrimary" align="center">
                                我的访客
                            </Typography>
                            <Typography className={classes.typo} color="textPrimary" align="center">
                                {visitorNum}
                            </Typography>
                        </div>
                    </Toolbar>
                </Paper>
                <div className={classes.div}/>
                <Paper className={classes.paper}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="我的代码" {...a11yProps(0)} />
                        <Tab label="我的帖子" {...a11yProps(1)} />
                        <Tab label="我的获赞" {...a11yProps(2)} />
                    </Tabs>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            我的代码
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            我的帖子
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            我的获赞
                        </TabPanel>
                    </SwipeableViews>
                </Paper>
            </Container>
        </div>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);

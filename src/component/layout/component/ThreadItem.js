/*
 * @Author: Kingtous
 * @Date: 2020-03-13 11:08:25
 * @LastEditors: Kingtous
 * @LastEditTime: 2020-03-13 11:23:45
 * @Description: Kingtous' Code
 */

import { makeStyles, Paper } from "@material-ui/core";
import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = makeStyles( theme => ({


})
);


class ThreadItem extends React.Component {

    // {
    //     "code_url": "",
    //     "comment_id": null,
    //     "id": 1,
    //     "subtitle": "哭了",
    //     "title": "爱情公寓5完结了",
    //     "user_id": 1,
    //     "username": "Kingtous"
    // }

    render(){
        const { classes } = this.props;
        return (
            <Paper>
                
                
            </Paper>
        );

    }
}


export default withStyles(styles)(ThreadItem)
/*
 * @Author: Kingtous
 * @Date: 2020-03-13 11:11:11
 * @LastEditors: Kingtous
 * @LastEditTime: 2020-03-13 11:15:55
 * @Description: Kingtous' Code
 */


import { makeStyles } from "@material-ui/core";
import React from 'react';
import ThreadItem from '../component/layout/component/ThreadItem';
import { withStyles } from '@material-ui/styles';

const styles = makeStyles( theme => ({


})
);


class MyThreads extends React.Component {


    render(){
        const { classes } = this.props;
        return (
            <div>
                <ThreadItem/>
            </div>
        );

    }
}


export default withStyles(styles)(MyThreads)
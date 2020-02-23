/*
 * @Author: Kingtous
 * @Date: 2020-02-18 10:54:33
 * @LastEditors: Kingtous
 * @LastEditTime: 2020-02-18 10:54:34
 * @Description: Kingtous' Code
 */
import React from "react";
import {checkIsLogin} from "../../action/LoginUtil";
import {Button, Container} from "@material-ui/core";
import CodeToolBar from "../../component/layout/ToolBar";
// 背景图
import Grid from "@material-ui/core/Grid";
import {withRouter} from "react-router-dom";
import RandomBackGroundStyle from "../../component/layout/Background";

class IndexPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        };
    }

    componentDidMount() {
        this.setState({isLogin: checkIsLogin()})
    }

    render() {
        return (
            <Container style={RandomBackGroundStyle()}>
                <CodeToolBar/>
                <Container style={{flex: 1, alignItems: 'center', display: 'flex'}}
                >
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                        style={{minHeight: '100vh'}}
                    >
                        <Grid item xs={12}>

                            <div align="center">
                                <Button href={this.state.isLogin ? "/user/dashboard" : "/user/login"}
                                        color={"primary"}
                                >
                                    开启旅程
                                </Button>
                            </div>


                        </Grid>
                    </Grid>

                </Container>
            </Container>
        );
    }
}

export default withRouter(IndexPage);

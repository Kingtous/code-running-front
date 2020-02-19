/*
 * @Author: Kingtous
 * @Date: 2020-02-18 10:54:33
 * @LastEditors: Kingtous
 * @LastEditTime: 2020-02-18 10:54:34
 * @Description: Kingtous' Code
 */
import React from "react";
import {checkIsLogin} from "../../action/LoginUtil";
import {Container, Paper, Button} from "@material-ui/core";
import CodeToolBar from "../../component/layout/ToolBar";
// 背景图
import BackGround from "../../images/main_bg.jpg";
import Grid from "@material-ui/core/Grid";
import {SignUpComponent} from "../../component/layout/SignUp";
import {withRouter} from "react-router-dom";

const backGroundStyle = {
    width: "100%",
    height: "800px",
    backgroundImage: `url(${BackGround})`
};

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
            <Container style={{display: 'flex', alignItems: 'center', margin: 0, justifyContent: "center"}}>
                <div style={backGroundStyle}>
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
                                    <Button href={this.state.isLogin?"/user/dashboard":"/user/login"}
                                        color={"primary"}
                                    >
                                        开启旅程
                                    </Button>
                                    </div>
                                   
                             
                            </Grid>
                        </Grid>

                    </Container>
                </div>

            </Container>
        );
    }
}

export default withRouter(IndexPage);

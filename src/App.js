import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {SignUpComponent} from "./component/SignUp";

/**
 * @return {string}
 */
function FormatTime(props) {
    return props.time.toLocaleString();
}

function onBtnClick() {
    alert("你点击了按钮");
}

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateTime(), 1000
        );
    }

    updateTime() {
        this.setState(
            {date: new Date()}
        );
    }

    componentWillMount() {
        clearInterval(this.timerID);
    }


    render() {
        return (
            <div>
                现在时间：<FormatTime time={this.state.date}/>
            </div>
        );
    }
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <SignUpComponent/>
                <Clock/>
            </header>
        </div>
    );
}

export default App;

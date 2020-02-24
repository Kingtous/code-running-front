/// 编写代码

import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import CodeMirror from "@uiw/react-codemirror";
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
// 代码种类
import 'codemirror/mode/python/python';
import 'codemirror/mode/clike/clike';
import {BottomNavigation, Card, Container, Select, TextField} from "@material-ui/core";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import {CloudUpload, Save, Work} from '@material-ui/icons';

const mStyle = makeStyles(
    {
        actions: {
            bottom: 0
        },
        tf: {
            flex: 1
        }
    }
);

// 代码种类，0表示c,c++,c#，1表示Java(也是clike语言)，2表示Python
const codeKinds = {
    0: "text/x-c++src",
    1: "text/x-java",
    2: "text/x-python",
};

function CodePage() {

    const [codeLanguageID, setCodeLanguageID] = React.useState(0);
    const [fileName, setFileName] = React.useState(`Untitled.cpp`);
    const [codeContent, setCodeContent] = React.useState("");

    const codemirrorOpts = {
        theme: 'monokai',
        keyMap: 'sublime',
        mode: codeKinds[codeLanguageID],
        autofocus: true,
        autosave: true
    };

    const onCodeChanged = (instance, change) => {
        setCodeContent(instance.getValue());
    };

    const onBtnClicked = (value) => {

    };

    const handleFileNameChanged = (e) => {
        setFileName(e.target.value);
    };
    const handleLanguageChanged = (e) => {
        setCodeLanguageID(e.target.value);
    };

    // 三个按钮
    const handleTempStore = (e) => {
        // TODO
    };
    const handleStore = (e) => {
        // TODO
    };
    const handleExecute = (e) => {
        // TODO
    };

    return (
        <Container>
            <Container>
                <TextField id="outlined-basic" label="文件名" variant="outlined" defaultValue={fileName} style={mStyle.tf}
                           onChange={event => handleFileNameChanged(event)}/>

                <Select onChange={event => {
                    handleLanguageChanged(event)
                }} value={codeLanguageID}>
                    <option value={0} selected={true}>C++ (C++17)</option>
                    <option value={1}>Java (JDK1.8)</option>
                    <option value={2}>Python (Pure 3.6)</option>
                </Select>
            </Container>

            <CodeMirror
                options={codemirrorOpts}
                height={800}
                value={codeContent}
                onChange={(instance, change) => onCodeChanged(instance, change)}
            />

            <Card
                style={mStyle.actions}
            >
                <BottomNavigation
                    onChange={(event, newValue) => {
                        onBtnClicked(newValue)
                    }}
                    showLabels
                >
                    <BottomNavigationAction label="临时保存" icon={<Save/>} onClick={event => handleTempStore(event)}/>
                    <BottomNavigationAction label="保存到云端" icon={<CloudUpload/>} onClick={event => handleStore(event)}/>
                    <BottomNavigationAction label="执行" icon={<Work/>} onClick={event => handleExecute(event)}/>
                </BottomNavigation>
            </Card>
        </Container>
    );
}

export default CodePage;
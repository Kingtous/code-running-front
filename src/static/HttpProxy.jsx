// Author：Kingtous
// Date：2020/3/2
// Description：

// 获取自己所有的code
import {getBasicAuthHeaderByToken, HttpConstants, register_url} from "./HttpConstant";

const HttpProxy = {
    getAllCodes,
    getFile,
    upload,
    login,
    register
};

async function login(username, password) {
    let body = {"username": username, "password": password};
    let initHeader = new Headers();
    initHeader.append('Content-Type', 'application/json');
    body = JSON.stringify(body);
    const init = {
        method: 'POST',
        headers: initHeader,
        body
    };
    let response = await fetch(HttpConstants.auth_url, init);
    return await response.json();
}

async function getAllCodes() {
    let response = await fetch(HttpConstants.get_all_code_rul, {
        method: "GET",
        headers: getBasicAuthHeaderByToken(),
    });
    console.log(response);
    return await response.json();
}

async function register(username, password) {
    let body = {"username": username, "password": password};
    let initHeader = new Headers();
    initHeader.append('Content-Type', 'application/json');
    body = JSON.stringify(body);
    const init = {
        method: 'POST',
        headers: initHeader,
        body
    };
    let response = await fetch(HttpConstants.register_url, init);
    return await response.json();
}

async function getFile(fileName) {
    let response = await fetch(HttpConstants.file_get_url + fileName, {
        method: "GET",
        headers: getBasicAuthHeaderByToken(),
    });
    console.log(response);
    return await response.json();
}

async function upload(fileName, content) {
    let response = await fetch(HttpConstants.file_upload_url, {
        method: "POST",
        headers: getBasicAuthHeaderByToken(),
        body: JSON.stringify({
            "fileName": fileName,
            "content": content
        }),
    });
    console.log(response);
    return await response.json();
}


export {HttpProxy};
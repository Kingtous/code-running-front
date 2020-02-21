/*
 * @Author: Kingtous
 * @Date: 2020-02-18 09:07:27
 * @LastEditors: Kingtous
 * @LastEditTime: 2020-02-18 10:34:47
 * @Description: Kingtous' Code
 */


function checkIsLogin() {
    let token = localStorage.getItem("token");
    console.log("token为："+token);
    return token != null;
}


// {
//     "code": 0,
//     "data": {
//         "token": "eyJhbGciOiJIUzUxMiIsImlhdCI6MTU4MDI5MDQ5MSwiZXhwIjoxNTgwMjk0MDkxfQ.eyJpZCI6MiwidXNlcm5hbWUiOiJLaW5ndG91czIifQ.M1yklLgU0FbdZIKkxoqnvWc82RnRR7-CW_m-1EPDQERVkmd32a6N6ox9slf3sajYEfqHW_bsPaZGI_86sz6q9g",
//         "username": "Kingtous2"
//     }
// }
function saveToken(data) {
    if (data.code == 0) {
        console.log("save token");
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("username", data.data.username);
    } else {
        alert(data.code);
    }
}

function removeLoginState() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
}

function getUserCache() {
    let arr = {"token": localStorage.getItem("token"), "username": localStorage.getItem("username")};
    return arr;
}

export {checkIsLogin, saveToken, getUserCache, removeLoginState};
/*
 * @Author: Kingtous
 * @Date: 2020-02-18 09:09:56
 * @LastEditors: Kingtous
 * @LastEditTime: 2020-02-18 09:31:23
 * @Description: Kingtous' Code
 */
import Base64 from 'base-64';

const BASE_URL = "http://localhost:5000/";
//--- API Definition---//
// 认证
const auth_url = BASE_URL + "auth/login";
// 注册
const register_url = BASE_URL + "auth/register";
// 上传
const file_upload_url = BASE_URL + "file/upload";
// 获取文件,后面接文件名
const file_get_url = BASE_URL + "uploaded/";
// 文件执行
const exe_url = BASE_URL + "code/run";
// 文件执行结果
const get_exe_result_rul = BASE_URL + "code/getResult";
// 获取自己所有的代码
const get_all_code_rul = BASE_URL + "file/getAllCode";
//---测试接口---//
const test_url = BASE_URL + "test?id=5";


const err_reason = {
    1003: "密码错误"
};

function getErrMessage(code) {
    return err_reason.code;
}

function getBasicAuthHeaderByToken() {
    let token = localStorage.getItem("token");
    let bToken = Base64.encode(token + ":");
    return {"Authorization": "Basic " + bToken, 'Content-Type': 'application/json'};
}

const HttpConstants = {
    BASE_URL, auth_url, register_url, file_upload_url, file_get_url, exe_url,
    get_all_code_rul, get_exe_result_rul, test_url
};

export {
    HttpConstants, getErrMessage, getBasicAuthHeaderByToken
};
/*
 * @Author: Kingtous
 * @Date: 2020-02-18 09:09:56
 * @LastEditors: Kingtous
 * @LastEditTime: 2020-02-18 09:31:23
 * @Description: Kingtous' Code
 */
const BASE_URL = "http://127.0.0.1:5000/";
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

export {
    BASE_URL, auth_url, register_url, file_upload_url, file_get_url, exe_url,
    get_all_code_rul, get_exe_result_rul, test_url
};
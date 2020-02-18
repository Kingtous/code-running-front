/*
 * @Author: Kingtous
 * @Date: 2020-02-18 09:09:56
 * @LastEditors: Kingtous
 * @LastEditTime: 2020-02-18 09:31:23
 * @Description: Kingtous' Code
 */

export default class HttpConstant {
    //--- Base URL---//
    BASE_URL = "http://127.0.0.1:5000/";
    //--- API Definition---//
    // 认证
    auth_url = this.BASE_URL + "auth/login";
    // 注册
    register_url = this.BASE_URL + "auth/register";
    // 上传
    file_upload_url = this.BASE_URL + "file/upload";
    // 获取文件,后面接文件名
    file_get_url = this.BASE_URL + "uploaded/";
    // 文件执行
    exe_url = this.BASE_URL + "code/run";
    // 文件执行结果
    get_exe_result_rul = this.BASE_URL + "code/getResult";
    // 获取自己所有的代码
    get_all_code_rul = this.BASE_URL + "file/getAllCode";
    //---测试接口---//
    test_url = this.BASE_URL + "test?id=5";

}
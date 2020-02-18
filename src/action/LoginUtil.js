/*
 * @Author: Kingtous
 * @Date: 2020-02-18 09:07:27
 * @LastEditors: Kingtous
 * @LastEditTime: 2020-02-18 10:34:47
 * @Description: Kingtous' Code
 */

function checkIsLogin() {
    let token = localStorage.getItem("token");
    return token != null;
}


export {checkIsLogin};
import {checkSession, getWxLoginCode } from './utils/index';
import Api  from './api/index';

// 类方法供「业务层」调用



// 登录，silentLogin 方法的一层封装
async function login() {
    
    // 判断session_key是否过期
    const hasSession = await checkSession();
    if (getAuthToken() && !hasSession) return
    
    //用于小程序启动时发起静默登录
    silentLogin();
}

// 发起静默登录
async function silentLogin(){
    const code = await getWxLoginCode();

    // 将code发送给服务端
    console.log(code)
    const res = await Api.login(code)
}
// 刷新登录态，silentLogin 方法的一层封装
function refreshLogin() {

    //用于登录态过期时发起静默登录

}

// 验证 sessionKey 是否过期，过期则刷新登录态
function ensureSessionKey() {

    //绑定微信授权手机号时验证是否过期，过期则得重新弹窗授权
}

// 获取token
function getAuthToken(){
    return 'token'
}


module.exports = {
    silentLogin,
    login,
    refreshLogin,
    ensureSessionKey
}



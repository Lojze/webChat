//app.js

import {login} from './libs/session'

App({
  onLaunch: function () {
    console.log(login())
    // 获取当前帐号信息
    const accountInfo = wx.getAccountInfoSync();
    // env类型
    const env = accountInfo.miniProgram.envVersion;

    console.log(env, "env")
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'release-3gmb4eaz6e7b0736', // 线上环境
        env: 'test-3g36rymad8283135', // 预发环境
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})

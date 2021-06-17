//app.js

// import storage './libs/utils/index'
var plugin = requirePlugin("chatbot");
App({
  
  onLaunch: async function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env: 'release-3gmb4eaz6e7b0736', // 线上环境
        env: 'test-3g36rymad8283135', // 预发环境
        traceUser: true,
      })
    }

    this.globalData = {}

    await this.getCloudOpenid()
    plugin.init({
      appid: "PzDGl2IbGlwCebEN0N4NgPXLf3sg2o", //小程序示例账户，仅供学习和参考
      openid: this.openid, //用户的openid，非必填，建议传递该参数
      success: () => {}, //非必填
      fail: (error) => {}, //非必填
    });
  },
  //如果担心openid的安全，就用这个函数
  getCloudOpenid: async function () {
    return this.openid = this.openid || (await wx.cloud.callFunction({
      name: 'login'
    })).result.openid
  },
  getOpenid: async function () {
    (this.openid = this.openid || wx.getStorageSync('openid')) || wx.setStorageSync('openid', await this.getCloudOpenid())
    return this.openid
  }
})

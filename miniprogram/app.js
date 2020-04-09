//app.js
// const ald = require('./utils/ald-stat.js')
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    try {

      let sys = wx.getSystemInfoSync()
      var totalTopHeight = 68;
      var iphoneWithNotch = this.isIphoneWithNotch(sys.brand, sys.model);
      var androidWithNotch = this.isAndroidWithNotch(sys.model);
      var iPhone = this.isIphone(sys.system);
      this.globalData.isIPhone = iPhone;
      if (!sys.statusBarHeight) {
        sys.statusBarHeight = 20
        iphoneWithNotch && (sys.statusBarHeight = 44)
        androidWithNotch && (sys.statusBarHeight = 48)
      }
      if (iPhone) {
        totalTopHeight = 64;
      }
      this.globalData.totalNavHeightNew = sys.statusBarHeight - 20 + totalTopHeight;
      this.globalData.statusBarHeightNew = sys.statusBarHeight;
      // let version = sys.version.replace(/\./g, '').substr(0, 3);
      if (this.compareVersion(sys.SDKVersion, '2.4.3') < 0 || (sys.brand !== 'devtools' && this.compareVersion(sys.version, '7.0.0') < 0)) {
        this.globalData.hideNavBar = true;
        // this.globalData.totalNavHeight = 0;
        // this.globalData.statusBarHeight = 0;
      }
    } catch (e) {
      wx.getSystemInfo({
        success: (res) => {
          var totalTopHeight = 68;
          var iphoneWithNotch = this.isIphoneWithNotch(res.brand, res.model);
          var androidWithNotch = this.isAndroidWithNotch(res.model);
          var iPhone = this.isIphone(res.system);
          this.globalData.isIPhone = iPhone;
          if (!res.statusBarHeight) {
            res.statusBarHeight = 20
            iphoneWithNotch && (res.statusBarHeight = 44)
            androidWithNotch && (res.statusBarHeight = 48)
          }
          if (iPhone) {
            totalTopHeight = 64;
          }
          this.globalData.totalNavHeightNew = res.statusBarHeight - 20 + totalTopHeight;
          this.globalData.statusBarHeightNew = res.statusBarHeight;
          // let version = res.version.replace(/\./g, '').substr(0, 3);
          if (this.compareVersion(res.version, '7.0.0') < 0 || this.compareVersion(res.SDKVersion, '2.4.3') < 0) {
            this.globalData.hideNavBar = true;
            // this.globalData.totalNavHeight = 0;
            // this.globalData.statusBarHeight = 0;
          }
          // this.globalData.totalNavHeight = 0;
        },
      })
    }
  },
  compareVersion(v1, v2) {
    v1 = v1.split('.')
    v2 = v2.split('.')
    var len = Math.max(v1.length, v2.length)

    while (v1.length < len) {
      v1.push('0')
    }
    while (v2.length < len) {
      v2.push('0')
    }

    for (var i = 0; i < len; i++) {
      var num1 = parseInt(v1[i])
      var num2 = parseInt(v2[i])

      if (num1 > num2) {
        return 1
      } else if (num1 < num2) {
        return -1
      }
    }
    return 0
  },
  isIphoneWithNotch: function isIphoneWithNotch(brand, model) {
    // 'unknown' is newest iphone version
    return brand === "iPhone" && /unknown|iPhone X/.test(model);
  },
  isAndroidWithNotch: function isAndroidWithNotch(model) {
    return /MI 8|PAAM00|COR-AL00/.test(model);
  },
  isIphone: function isIphone(system) {
    // return brand === "iPhone";
    return /iOS/.test(system);
  },
  onShow: function (options) {
    this.globalData.appShow = true;
  },
  oHide: function (options) {
    this.globalData.appShow = false;
  },
  showToast(msg, icon, duration) {
    wx.showToast({
      title: msg,
      icon: icon || 'none',
      mask: true,
      duration: duration || 2000
    });
  },
  hideToast() {
    wx.hideToast()
  },
  showLoading(msg) {
    wx.showLoading({ title: msg || '加载中...', mask: true });
  },
  hideLoading() {
    wx.hideLoading();
  },
  globalData: {
    userInfo: null,
    hideNavBar: false,
    totalNavHeight: 0,
    totalNavHeightNew: 0,
    isIPhone: false,
    statusBarHeight: 20,
    statusBarHeightNew: 20,
    token: '',
    userCode: '',
    userStatus: '',
    memberType: 0,
    shareId: 0,
    isFirstLoad: true
  }
})
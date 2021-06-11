//index.js
const app = getApp()

Page({
  data: {
    openid:''
  },

  onLoad: function() {
    // this.openid = await app.getOpenid()
    // console.log(this.openid)
    // this.setData({
    //   openid: this.openid
    // })
    this.getUserProfile()
  },

  getUserProfile() {

    // console.log(this.openid, "openid")
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    // wx.getUserProfile({
    //   desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })
    const signedData = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiJ4amxzajMzbGFzZmFmIiwiZGF0YSI6eyJxIjoi5oGt5Zac5bCP5byg6ISx5Y2V5oiQ5YqfIiwibW9kZSI6IjNjbGFzcyJ9LCJqdGkiOiI5ZmEzY2UxMy01OWNiLTRiNzYtYTk0Ni05NjNlYTk3NmU4ZjkiLCJpYXQiOjE2MjMzNzg5MzgsImV4cCI6MTYyMzM4MjUzOH0.pRqHr--1NAWza70UeLiwmPfp5CQORbcQ15nLG0l_r_k"
    wx.request({
        url: 'https://openai.weixin.qq.com/openapi/nlp/sentiment/iBz7X8ekG5JeyP8oA63LfNt5Z2voGf',
        data: signedData,
        method: 'POST',
        responseType: 'text',
        success(result) {

        }
    })
  },
  goDemo(){
    wx.navigateTo({
      url: '/pages/indexOld/indexOld'
    })
  }

})

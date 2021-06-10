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
    const signedData = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiJ4amxzajMzbGFzZmFmIiwiZGF0YSI6ImV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUp4SWpvaTVvR3Q1WmFjNWJDUDVieWc2SVN4NVkyVjVvaVE1WXFmSWl3aWJXOWtaU0k2SWpOamJHRnpjeUlzSW1wMGFTSTZJbU14WlRkbFpUSXpMVE16T0dNdE5HVXdPQzFoTlRsbExUQTJZbVExTW1RNU5UZGhNaUlzSW1saGRDSTZNVFl5TXpNeE5qRXpPQ3dpWlhod0lqb3hOakl6TXpFNU56TTRmUS5wTHF1QnUzMFFPcksxaTlxMmJEZTlLeVlmMG1CTk1ucHFLYnZNUGQ3U0UwIiwianRpIjoiYjA4MDRkMGEtODZlMy00ZTQ2LWI5M2EtNzQzYjYyY2NmNzRkIiwiaWF0IjoxNjIzMzE2MjE3LCJleHAiOjE2MjMzMTk4MTd9.tywfnMEs1NQC_SqGyRwt2mBBpvDkW0ipW4jglzeCXTE"
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

//index.js
const app = getApp()
var plugin = requirePlugin("chatbot");
Page({
  data: {
    openid:'',
    question_list:{}
  },

  onLoad: async function() {
    this.openid = await app.getOpenid()
    // console.log(this.openid)
    // this.setData({
    //   openid: this.openid
    // })
    this.getUserProfile()
  },

  getUserProfile() {
    plugin.api.nlp('poem_fetch_question', {
      question_count: 1,
      userid: this.openid
    }).then(res => {
      if (res.status == 0) {
        let list = res.question_list[0];
        list.hard_level = this.getLevelFn(list.hard_level)
        this.setData({
          question_list: list
        })
      }
    })
  },
  answerFn(e){
    let {id,index } = e.currentTarget.dataset;
    plugin.api.nlp('poem_check_answer', {
      question_id: id,
      user_answer_content: index
    }).then(res => {
      console.log("poem_check_answer result : ", res.check_result)
    })
  },
  getLevelFn(val){
    if (val == 'easy') {
      return '简单'
    }
    if (val == 'easy') {
      return '中等'
    }

    if (val == 'hard') {
      return '困难'
    }
  }

})

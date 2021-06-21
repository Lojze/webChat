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

    let arr = [
      ["正面", 0.9593541622161865],
      ["无情感", 0.0400625541806221],
      ["负面", 0.000583284127060324]
    ]
    console.log(arr.sort(descend))

    function descend(x, y) {
      return y[1] - x[1]; //按照数组的第1个值升序排列
    }
  },

  getUserProfile() {
    plugin.api.nlp('poem_fetch_question', {
      question_count: 1,
      userid: this.openid
    }).then(res => {
      if (res.status == 0) {
        let list = res.question_list[0];
        console.log(list.answer_index, "answer_index")
        list.hard_level = this.getLevelFn(list.hard_level)
        this.setData({
          question_list: list
        })
      }
    })
  },
  answerFn(e){
    let {id,index } = e.currentTarget.dataset;
    console.log(index == this.data.question_list.answer_index)
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

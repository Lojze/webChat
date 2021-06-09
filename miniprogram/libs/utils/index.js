module.exports = {

    // 判断session_key是否过期
    checkSession() {
        return wx.checkSession((res) => {
            return true
            // return {
            //     isExpired: false,
            //     errMsg: 'session_key 未过期，并且在本生命周期一直有效'
            // }
        }).catch(err => {
            return false
            // return {
            //     isExpired: true,
            //     errMsg: 'session_key 已经失效，需要重新执行登录流程'
            // }
        })
    },

    getWxLoginCode(){
        return new Promise((resolve, reject) => {
            wx.login({
                success(res) {
                    if (res.errMsg === 'login:ok') {
                        resolve(res.code)
                    } else {
                        reject(false)
                        //console.log(res.errMsg)
                    }
                }
            })
        })
    }
}



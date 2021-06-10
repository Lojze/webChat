// 工具函数


//存储
const storage = {
    set: function (key, data) {
        wx.setStorage({
            key: key,
            data: data,
        })
        // wx.setStorageSync(key, data)
    },
    get: function (key, data) {
        return wx.getStorageSync(key)
    },
    clear: function (key, data) {
        wx.setStorageSync(key, false)
    }
}
module.exports = {
    storage
}



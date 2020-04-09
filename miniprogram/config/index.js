const imageUtil = (e) => {
    let imageSize = {};
    // let originalWidth = e.width; //图片原始宽
    // let originalHeight = e.height; //图片原始高
    // let originalScale = originalHeight / originalWidth; //图片高宽比
    //获取屏幕宽高
    wx.getSystemInfo({
        success: function (res) {
            let windowWidth = res.windowWidth;
            let windowHeight = res.windowHeight;
            // let windowscale = windowHeight / windowWidth; //屏幕高宽比
            // if (originalScale < windowscale) { //图片高宽比小于屏幕高宽比
            //     //图片缩放后的宽为屏幕宽
            //     imageSize.imageWidth = windowWidth;
            //     imageSize.imageHeight = (windowWidth * originalHeight) / originalWidth;
            // } else { //图片高宽比大于屏幕高宽比
            //     //图片缩放后的高为屏幕高
            //     imageSize.imageHeight = windowHeight;
            //     imageSize.imageWidth = (windowHeight * originalWidth) / originalHeight;
            // }
            imageSize.imageHeight = windowHeight
        }
    })
    return imageSize;
}

module.exports = {
    imageUtil
}
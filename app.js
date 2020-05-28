//app.js
App({
  // 自定义顶部
onPageScroll: function (t) {
  var a = this;
  // console.log(t.scrollTop)
  a.setData({
    scrollTop: t.scrollTop
  })
},
  onLaunch: function () {
    // 自定义头部 获取高度
    const vm = this
    
    wx.getSystemInfo({
      success: function (res) {
        let totalTopHeight = 68
        if (res.model.indexOf('iPhone X') !== -1) {
          totalTopHeight = 88
        } else if (res.model.indexOf('iPhone') !== -1) {
          totalTopHeight = 64
        }
        vm.globalData.statusBarHeight = res.statusBarHeight
        vm.globalData.titleBarHeight = totalTopHeight - res.statusBarHeight
      },
      failure() {
        vm.globalData.statusBarHeight = 0
        vm.globalData.titleBarHeight = 0
      }
    })

  
  },
  globalData: {
    userInfo: '',
     // 自定义头部获取高度
     statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'],
     wxUrl:'http://localhost:8080/'
  }
})
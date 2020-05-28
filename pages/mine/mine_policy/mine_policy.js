// pages/mine/mine_policy/mine_policy.js
var app = getApp();
Page({
  
  
  /**
   * 页面的初始数据
   */
  data: {
    isShow:"true",
    title:'我的保单',
    img:'/img/common/bg.png',
    scrollTop:"",
    name:'现金金',
    phone:152369201587    
  },

  // 自定义顶部
  onPageScroll: function (t) {
    var a = this;
    // console.log(t.scrollTop)
    a.setData({
      scrollTop: t.scrollTop
    })
  },
  
// 拨打电话
  call:function(){
    let that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.phone.toString(), //此号码并非真实电话号码，仅用于测试
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })


  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    let that = this;
    let username = that.data.name
    console.log('名字', that.data.name)
    let uname = username.substring(0,1) + '某' + username.substring(2);
    that.setData({
      name: uname
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
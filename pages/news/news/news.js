// pages/news/news/news.js
var utils = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'消息',
    img:'/img/common/bg.png',
    scrollTop:"",
    time:''

  },
// 自定义顶部
onPageScroll: function (e) {
  var a = this;
  // console.log(e.scrollTop) 
  a.setData({
    scrollTop: e.scrollTop
  })
},
mine:function(){
  wx.navigateTo({
    url: '/pages/mine/mine_policy/mine_policy',
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var TIME = utils.formatDate(new Date());
    this.setData({
    time: TIME,
    });
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
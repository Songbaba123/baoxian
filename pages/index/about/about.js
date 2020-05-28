// pages/index/about/about.js
var app = getApp();
Page({
  
  
  /**
   * 页面的初始数据
   */
  data: {
    isShow:"true",
        title:'关于我们',
    img:'/img/common/bg.png',
    scrollTop:"",
    con_title: '中国平安保险股份有限公司',
    content: '首车辆保险分为交强险（代收车船使用税）和商业险两部分。商业险包括1.车辆损失险2.第三者责任险3.车上人员座位责任险.4.盗抢险5.玻璃单独破碎险6.划痕险.7不计免赔特约险等险种。其中车损险、盗抢险和不计免赔险的保费较大。如果你有车库，出远门的机会不多，当地治安又比较好的话，可以不用买盗抢险。（10万车价的盗抢险是540元）如果乘坐你车副驾驶的人都为自己熟悉的人，且都购买过人身保险的话，车上人员座位险也可以忽略。其它险种新车前三年都买上比较好。'
  },

  // 自定义顶部
  onPageScroll: function (t) {
    var a = this;
    // console.log(t.scrollTop)
    a.setData({
      scrollTop: t.scrollTop
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
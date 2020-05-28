// pages/apply/apply/apply.js
var util = require('../../../utils/IDcard.js');
var app = getApp();
import requestUtil from '../../../utils/requestUtil';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'申请保单',
    img:'/img/common/bg.png',
    scrollTop:"",
      //用户名
      username: '',
      // 手机号
      phone: '',
      // 车牌号
      carnum:'',
      // 身份证号
      idcard:''
    
  },
// 自定义顶部
onPageScroll: function (e) {
  var a = this;
  // console.log(e.scrollTop) 
  a.setData({
    scrollTop: e.scrollTop
  })
},
 //获取input输入框的值
 getNameValue: function (e) {
  this.setData({
    username: e.detail.value
  })
},
getPhoneValue: function (e) {
  this.setData({
    phone: e.detail.value
  })
},
getCarnumValue: function (e) {
  this.setData({
    carnum: e.detail.value
  })
},
getIdcardValue: function (e) {
  this.setData({
    idcard: e.detail.value
  })
},
// 正则判断

formSubmit: function () {

  wx.setStorageSync('username', this.data.username);
  wx.setStorageSync('phone', this.data.phone);
  wx.setStorageSync('carnum', this.data.carnum);
  wx.setStorageSync('idcard', this.data.idcard);


  var callverify =  this.verify();
   if(callverify==true){
    var that = this;
    var url = "InsuranceUser/addInsuranceApplication";
    var openid = wx.getStorageSync("openId");
    var param = {
    'applicationName': that.data.username,   //姓名
    'phoneNumber': that.data.phone,     //联系方式
    'carNumber': that.data.carnum,   //车牌号
    'idNumber': that.data.idcard,     //身份证号
    'drivingImgFront': that.data.username,   //驾驶证正面
    'drivingImgBehind': that.data.password,     //驾驶证反面
    'openid': '11111',   //openid
    };
    requestUtil._get_param(url, param, function (res) {
      console.log(res);
      if (res.data.status == 200) {
        that.setData({
          userInfo: res.data.data
        })
      }
    })
   } 
},

verify(){
  // 验证手机号
  var phonereg = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/;
  // 验证车牌号
  let carreg = /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/

  if (this.data.username == "") {
    wx.showToast({
      title: '姓名不能为空',
      icon: 'none',
      duration: 1000
    })
    return false;
  }
  if (this.data.phone == "") {
    wx.showToast({
      title: '联系方式不能为空',
      icon: 'none',
      duration: 1000
    })
    return false;
  } else if (!phonereg.test(this.data.phone)) {
    wx.showToast({
      title: '请输入正确的联系方式',
      icon: 'none',
      duration: 1000
    })
    return false;
  }
  if (this.data.carnum == "") {
    wx.showToast({
      title: '车牌号不能为空',
      icon: 'none',
      duration: 1000
    })
    return false;
  } else if(!carreg.test(this.data.carnum)) {
    wx.showToast({
      title: '请输入正确的车牌号',
      icon: 'none',
      duration: 1000
    })
    return false;
  }
  if (this.data.idcard == "") {
    wx.showToast({
      title: '身份证号码不能为空',
      icon: 'none',
      duration: 1000
    })
    return false;
  } else if (!util.checkIdCard(this.data.idcard)) {
    wx.showToast({
      title: '身份证号码错误',
      icon: 'none',
      duration: 1000
    })
    return false;
  } else{
    return true;
  } 

},


// 上传行驶证

uploadimg:function(e){

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
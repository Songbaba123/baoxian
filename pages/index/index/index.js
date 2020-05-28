var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      title:'首页',
  img:'/img/index/bg.png',
  scrollTop:"",
    index_nav:[
      {
        url:'apply_policy',
        img:"/img/index/apply-policy.png",
        name:"申请保单"
    },
      {
        url:'mine_policy',
        img:"/img/index/mine-policy.png",
        name:"我的保单"
    },
      {
        url:'about',
        img:"/img/index/about_icon.png",
        name:"关于我们"
    },
      {
        url:'Call_click',
                img:"/img/index/contact.png",
        name:"联系我们"
    }
    ],
    msgList:[
{title:"恭喜：陕A·4***A车主购买成功。"},
{title:"恭喜：陕A·5***T车主购买成功。"},
{title:"恭喜：陕A·6***C车主购买成功。"}

     ],
     information:[
       {img:'/img/index/information_img.png',title:'新车保险怎么卖划算？',content:'首车辆保险分为交强险（代收车船使用税）和商业险两部分。商业险包括1.车辆损失险2.第三者责任险3.车上人员座位责任险.4.盗抢险5.玻璃单独破碎险6.划痕险.7不计免赔特约险等险种。其中车损险、盗抢险和不计免赔险的保费较大。如果你有车库，出远门的机会不多，当地治安又比较好的话，可以不用买盗抢险。（10万车价的盗抢险是540元）如果乘坐你车副驾驶的人都为自己熟悉的人，且都购买过人身保险的话，车上人员座位险也可以忽略。其它险种新车前三年都买上比较好。',num:285},
       {img:'/img/index/information_img.png',title:'新车保险怎么卖划算？',content:'首车辆保险分为交强险（代收车船使用税）和商业险两部分。商业险包括1.车辆损失险2.第三者责任险3.车上人员座位责任险.4.盗抢险5.玻璃单独破碎险6.划痕险.7不计免赔特约险等险种。其中车损险、盗抢险和不计免赔险的保费较大。如果你有车库，出远门的机会不多，当地治安又比较好的话，可以不用买盗抢险。（10万车价的盗抢险是540元）如果乘坐你车副驾驶的人都为自己熟悉的人，且都购买过人身保险的话，车上人员座位险也可以忽略。其它险种新车前三年都买上比较好。',num:285},
       {img:'/img/index/information_img.png',title:'新车保险怎么卖划算？',content:'首车辆保险分为交强险（代收车船使用税）和商业险两部分。商业险包括1.车辆损失险2.第三者责任险3.车上人员座位责任险.4.盗抢险5.玻璃单独破碎险6.划痕险.7不计免赔特约险等险种。其中车损险、盗抢险和不计免赔险的保费较大。如果你有车库，出远门的机会不多，当地治安又比较好的话，可以不用买盗抢险。（10万车价的盗抢险是540元）如果乘坐你车副驾驶的人都为自己熟悉的人，且都购买过人身保险的话，车上人员座位险也可以忽略。其它险种新车前三年都买上比较好。',num:285}
     ]
   
  },

  
  // 自定义顶部
  onPageScroll: function (t) {
    var a = this;
    // console.log(t.scrollTop)
    a.setData({
      scrollTop: t.scrollTop
    })
  },
  
  

// 申请保单
apply_policy:function(){
wx.switchTab({
  url: '/pages/apply_policy/apply_policy/apply_policy',
})
},

// 我的保单
mine_policy:function(){
wx.navigateTo({
  url: '/pages/mine/mine_policy/mine_policy',
})
},


// 关于我们
about:function(){
wx.navigateTo({
  url: '/pages/index/about/about',
})
},

  // 联系我们

  Call_click: function () {
          wx.makePhoneCall({
            phoneNumber: '400-900-2250', //此号码并非真实电话号码，仅用于测试  
            success: function () {
              console.log("拨打电话成功！")
            },
            fail: function () {
              console.log("拨打电话失败！")
            }
          })
       
    },


    // 车险速递
    
info:function(){
  wx.navigateTo({
    url: '../information _details/information _details'
  })
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
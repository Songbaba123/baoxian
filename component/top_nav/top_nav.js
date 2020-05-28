var app = getApp();
// component/top_nav.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['mine-top'],
  properties: {
    img: {
      type: String
    },
    title: {
      type: String
    },
    scrollTop: {
      type: Number
    },
    isShow:{
      type: String
    }

  },
  /**
   * 组件的初始数据
   */
  data: {
        //获取全局变量 导航栏的高度statusBarHeight
    statusBarHeight: app.globalData.statusBarHeight,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    ready: function () {
      // 自定义头部
      const vm = this
      vm.setData({
        statusBarHeight: getApp().globalData.statusBarHeight
      })

    },
    back: function () {
      //返回上一级关闭当前页面
      wx.navigateBack({
        delta: 1
      })
    }


  }
})
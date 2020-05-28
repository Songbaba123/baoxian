var app = getApp();
const wxurl = app.globalData.wxUrl;

/**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 *     requestUtil._post_from(url, param,
 */
function _get(url, success, fail) {
 
  wx.request({
    url: wxurl + "/" + url,
    header: {
      'Content-Type': 'application/json'
    },
    success: function (res) {
      success(res);
    },
    fail: function (res) {
      fail(res);
    },
    complete: function (res) {
     
      if (res.data.status && res.data.status != 0) {
        wx.showToast({
          title: res.data.msg,
        })
      }
    }
  });

  console.log("----end-----_get----");
}
/**
 * url 请求地址
 * data 参数
 * success 成功的回调
 * fail 失败的回调
 */
function _get_param(url, data, success, fail) {
 wx.showLoading({
   title: '加载中...',
 })
  wx.request({
    url: wxurl + "/" + url,
    data: data,
    header: {
      'Content-Type': 'application/json'
    },
    success: function (res) {
      success(res);
    },
    fail: function (res) {
      fail(res);
    },
    complete: function (res) {
     wx.hideLoading()

    }
  });

  console.log("----end-----_get----");
}
/**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */
function _post_from(url, data, success, fail, complete) {
  wx.showLoading({
    title: '努力加载中^^...',
  })
  wx.request({
    url: wxurl + "/" + url,
    header: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
    data: data,
    success: function (res) {
      success(res);
    },
    fail: function (res) {
      fail(res);
    },
    complete: function (res) {
      wx.hideLoading();

    }
  });
  console.log("----end-----_get----");
}

/**
* url 请求地址
* success 成功的回调
* fail 失败的回调
*/
function _post_json(url, data, success, fail) {
  wx.showLoading({
    title: '努力加载中^^...',
  })
  wx.request({
    url: wxurl + "/" + url,
    header: {
      'content-type': 'application/json',
    },
    method: 'POST',
    data: data,
    success: function (res) {
      success(res);
    },
    fail: function (res) {
      fail(res);
    },
    complete: function (res) {
      wx.hideLoading();
    }
  });

  console.log("----end----_post-----");
}
module.exports = {
  _get: _get,
  _get_param: _get_param,
  _post_from: _post_from,
  _post_json: _post_json
}
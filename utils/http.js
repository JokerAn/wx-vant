// import { config } from 'config.js';
import { myUtils } from './util.js'

var util = new myUtils();
class myHttp {

  constructor() {
    // this.httpUrl = config.configUrl;
  }
  request(Type, url, data, jsonStr) {
    if (!Type) {
      console.warn('请求方式未定义');
      return;
    }
    if (!url) {
      console.warn('请求地址未定义');
      return;
    }

    if (jsonStr && jsonStr.loadSta) {
      util.showAlert(jsonStr.loading ? jsonStr.loading : '加载中...');
    }

    let header = jsonStr && jsonStr.header ? jsonStr.header : {
      'content-type': 'application/json',
    };
    if (wx.getStorageSync('userToken')) { header['token'] = wx.getStorageSync('userToken') }

    return new Promise((resolve, reject) => {
      wx.request({ //发送请求
        url: url,
        data: data,
        method: Type,
        header: header,
        success: res => {
          console.log(res);
          if (res.statusCode == 200 ) {
            if (res.data.message == '未登录或认证过期') {
              util.showAlert("请重新登录", 'none', 1500);
              let loginEmail = wx.getStorageSync('loginEmail');
              let loginPassword = wx.getStorageSync('loginPassword')
              wx.clearStorageSync();
              wx.setStorageSync('loginEmail', me.data.userName)
              wx.setStorageSync('loginPassword', me.data.password)
              wx.navigateTo({
                url: '/pages/login/login',
              })
              return
            }
            resolve(res);
          } else {
            util.showAlert(`服务异常${res.statusCode}`, 'none', 1500);
            reject(res)
          }
        },
        fail: err => {
          util.showAlert(err.message, 'none', 1500);
          reject(err)
        }
      })
    })
  }
}


export {
  myHttp
};
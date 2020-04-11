//index.js
//获取应用实例
const app = getApp()
import {myUtils} from '../../utils/util'
var util =new myUtils()
import {myHttp} from '../../utils/http'
var axios =new myHttp()
import {myApi} from '../../utils/api'
var apis =new myApi()
Page({
  data: {
    personInfo:{name:'张三',age:20},
    show:false,
    show2:false,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    nowTime:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow:function(){
    let loginForm = {
      username: 'wei.xia@ambow.com',
      password: 'Ambow99999999'.split('')
    };
    axios.request('post',apis.api.login,loginForm).then((result)=>{
      console.log('result',result)
    }).catch(err=>{
      console.log('err',err)
    })
  },
  onLoad: function () {
    this.setData({
      nowTime:util.getChinaTime(new Date(),'-')
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },
  showPopup2() {
    this.setData({ show2: true });
  },

  onClose2() {
    this.setData({ show2: false });
  },
  goToPage(){
    wx.navigateTo({
      url: '/pages/dateTime/index?id=1',
    })
  }
})

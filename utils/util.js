class myUtils {
  constructor() {}
  formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(n => {
      n = n.toString()
      return n[1] ? n : '0' + n
    }).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  }
  // 中文年与日时分秒 默认是 20200415 13:20:01 可以用slice截取自己想要的时分秒或者年月日
  getChinaTime(passTime='', fengefu = '') {
    // passTime = passTime.replace(/-/g, "/");
    var date = null;
    if(passTime instanceof Date){
      date = passTime
    }else{
      if (typeof passTime == 'number'){

      }else{
        passTime = passTime.replace(/-/g, "/")
      }
      date = new Date(passTime)
    }
    var year = date.getFullYear()
    var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var h = ('00' + date.getHours()).slice(-2);
    var m = ('00' + date.getMinutes()).slice(-2);
    var s = ('00' + date.getSeconds()).slice(-2);
    return year + fengefu + month + fengefu + day + ' ' +  h + ':' + m + ':' + s;
  };
  // 微信信息提示
  showAlert(title, icon = 'none', time = 2000, success = function() {}, fail = function() {}, complete = function() {}) {
    wx.showToast({
      title: title,
      icon: icon,
      duration: time,
      success: success,
      fail: fail,
      complete: complete
    })
  };
  /*显示loading */
  showLoading(title,  success = function() {}, fail = function() {}, complete = function() {}) {
    wx.showLoading({
      title: title,
      success: success,
      fail: fail,
      complete: complete
    })
  }

  /*隐藏loading */
  hideLoading = () => {
    wx.hideLoading()
  }
};
export {
  myUtils
}
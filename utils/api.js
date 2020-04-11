class myApi {
  constructor() { 
    
  }
  baseUrl_edurp = 'https://xw-api.ambow.com/'; //测试授权请求地址的前面url
  api = {
    login: this.baseUrl_edurp + 'wechat-api/loginForWechat',//登录
  }
}
export {
  myApi
};
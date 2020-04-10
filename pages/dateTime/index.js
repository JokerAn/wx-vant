import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
Page({
  data: {
    date: '',
    show: true,
    result: ['a', 'b'],
    minHour: 10,
    maxHour: 20,
    minDate: new Date().getTime(),
    maxDate: new Date(2019, 10, 1).getTime(),
    currentDate: new Date().getTime(),
    columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
  },
  onChange(event) {
    this.setData({
      result: event.detail
    });
  },
  onChange2(event) {
    const { picker, value, index } = event.detail;
    console.log(`当前值：${value}, 当前索引：${index}`)
    Toast.success('成功文案');
    // Toast(`当前值：${value}, 当前索引：${index}`);
  },
  onInput(event) {
    this.setData({
      currentDate: event.detail
    });
  },
  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail)
    });
  },
  dialogShow(){
    Dialog.alert({
      title: '标题',
      message: '弹窗内容'
    }).then(() => {
      // on close
    });
  }
});
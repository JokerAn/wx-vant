Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    },
    Objects: {
      type: Object,
      value: {name:'安',age:18},
    }
  },
  data: {
    // 这里是一些组件内部数据
    msg: '娃哈哈'
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){}
  }
})
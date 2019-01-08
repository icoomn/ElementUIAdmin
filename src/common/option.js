// Echarts图表配置对象
let option = {
  // 标题配置
  title: {
    text: '这是一个演示用例',
    textStyle: {
      color: '#666', // 标题字体颜色
      fontSize: 18, // 标题字体大小
      fontWeight: 'normal'
    },
    show: true,
    x: 'center' // 水平居中
  },

  // 画布边距设置
  grid: {
    left: '5%',
    right: '10%',
    bottom: '15%',
    containLabel: true
  },

  // 提示配置
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow' // 阴影模式
    }
  },

  // 图例配置
  legend: {
    data: [
      '出货量', '进货量', '售出量', '测试一', '测试二', '测试三', '测试四', '测试五', '测试六', '测试七',
      '测试八', '测试九', '测试十', '复试一', '复试二', '复试三', '复试四', '复试五', '复试六', '复试七',
      '复试八', '复试九', '复试十', '补位一', '补位二', '补位三', '补位四', '补位五', '补位六', '补位七'
    ],
    selected: {
      '出货量': true,
      '进货量': false,
      '售出量': true,
      '测试一': false,
      '测试二': false,
      '测试三': false,
      '测试四': false,
      '测试五': true,
      '测试六': false,
      '测试七': false,
      '测试八': false,
      '测试九': false,
      '测试十': false,
      '复试一': false,
      '复试二': true,
      '复试三': false,
      '复试四': false,
      '复试五': false,
      '复试六': false,
      '复试七': false,
      '复试八': false,
      '复试九': false,
      '复试十': false,
      '补位一': false,
      '补位二': false,
      '补位三': false,
      '补位四': false,
      '补位五': false,
      '补位六': false,
      '补位七': false
    },
    show: true,
    type: 'scroll', // 启用翻页模式
    orient: 'vertical', // 纵向显示
    right: 15,
    top: 45,
    backgroundColor: '#eee',
    padding: 10
  },

  // 工具箱配置
  toolbox: {
    feature: {
      // 自定义工具按钮，注：自定义按钮必须以my开头
      myTool: {
        show: true,
        title: '自定义扩展方法',
        icon: 'image://http://echarts.baidu.com/images/favicon.png', // 注：image:// 这个是固定格式，后面跟图片地址
        onclick: () => {}
      },

      // 线形图和柱状图的切换
      magicType: {
        type: ['line', 'bar'],
        title: {
          line: '折线图',
          bar: '柱状图'
        }
      },
      restore: {}, // 还原
      saveAsImage: {} // 保存为图片
    }
  },

  // X轴配置
  xAxis: {
    name: '( 月份 )',
    type: 'category',
    axisLabel: {
      rotate: 30 // X轴文字旋转角度
    },
    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  },

  // Y轴配置
  yAxis: {
    name: '( 这是Y轴名称：数值 )',
    nameLocation: 'middle', // 居中
    nameGap: 60, // 与轴线之间的间距
    nameRotate: 90, // 字体旋转角度
    type: 'value',

    // Y轴线条设置
    axisLine: {
      show: true,
      lineStyle: {
        type: 'solid'
      }
    },

    // Y轴分割线设置
    splitLine: {
      show: true,
      lineStyle: {
        color: '#ddd',
        type: 'solid'
      }
    }
  },

  // 底部缩放条配置
  dataZoom: [{
    type: 'slider',
    start: 0,
    end: 50,
    bottom: 0,
    show: true
  }],

  // 系列数据配置
  series: [{
    name: '出货量',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '进货量',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'line',
    label: {
      show: true
    }
  }, {
    name: '售出量',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '测试一',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '测试二',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '测试三',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '测试四',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '测试五',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '测试六',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '测试七',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '测试八',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '测试九',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '测试十',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '复试一',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '复试二',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '复试三',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '复试四',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '复试五',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '复试六',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '复试七',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '复试八',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '复试九',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '复试十',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '补位一',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '补位二',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '补位三',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '补位四',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '补位五',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '补位六',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }, {
    name: '补位七',
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
    type: 'bar',
    label: {
      show: true
    }
  }]
}

export default option

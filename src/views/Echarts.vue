<template>
  <div class="echarts-box">
    <div class="echarts" id="echarts"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import option from './../common/option'
export default {
  mounted () {
    this.drawEcharts()
  },
  methods: {
    drawEcharts () {
      let chart = echarts.init(document.getElementById('echarts'))

      // 自定义工具事件
      option.toolbox.feature.myTool.onclick = () => {
        this.$message({
          type: 'info',
          message: '您刚刚点击了自定义工具按钮！'
        })
      }

      // 设置配置项
      chart.setOption(option)

      // 绑定点击事件
      chart.on('click', (param) => {
        this.$message({
          type: 'info',
          message: `您点击了： ${param.name} - ${param.seriesName} - ${param.data}`
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts-box {
  margin-top: 100px;
  .echarts {
    width: 98%;
    height: 500px;
  }
}
</style>

export default class Utils {
  // 当前日期
  static todayDate () {
    let dt, y, m, d, w
    dt = new Date()
    y = dt.getFullYear()
    m = dt.getMonth() + 1
    d = dt.getDate()
    w = dt.getDay()
    let weeks = ['天', '一', '二', '三', '四', '五', '六']
    return `${y} 年 ${m.toString().padStart(2, '0')} 月 ${d.toString().padStart(2, '0')} 日 星期${weeks[w]}`
  }

  // 浏览器全屏
  static fullScreen () {
    let isFull = document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen

    // 判断是否全屏
    if (isFull) {
      let close = document.exitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen
      close && close.call(document)
    } else {
      let docElm = document.documentElement
      let open = docElm.requestFullScreen || docElm.webkitRequestFullScreen || docElm.mozRequestFullScreen || docElm.msRequestFullscreen
      open && open.call(docElm)
    }
  }
}

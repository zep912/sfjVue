/**
 *时间日期工具类
 */
// 月份、日前补0
export function formatDayAndMonth(val){
  if (val < 10) {
    val = '0' + val;
  }
  return val;
}
//返回当前年月日
export function formatCurrDate(){
  var now = new Date();

  var year = now.getFullYear();       //年
  var month = now.getMonth() + 1;     //月
  var day = now.getDate();

  let currDay = year + "-" + formatDayAndMonth(month) + "-" + day;
  return currDay;
}

/**
 * @description 日期格式化
 * @param date 日期
 * @param fmt 指定的日期格式
 * @returns fmt 返回指定的日期格式的日期
 */

export function formatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
}



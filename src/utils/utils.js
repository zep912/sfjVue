export default {
    /**
     * 防抖函数
     * @param {function} fn  
     * @param {time} delay 延迟时间默认500ms
     */
    debounce(fn, delay = 500) { //默认300毫秒
        let timer;
        return function () {
            let args = arguments;
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                fn.apply(this, args);
            }, delay);
        };
    },
    
    date2string(argDate, argFormatStr,argShowTime) {
        let args = arguments, 
            date = argDate || new Date(), 
            formatStr = argFormatStr,
            showTime = argShowTime,
           result;
        if(args.length===0) formatStr = '-';
        if(args.length===1) {
          if(toType(date)==='string') {
            formatStr = date;
            date = new Date();
          }else if(toType(date)=='date') {
            formatStr = '-';
          }else if(toType(date)==='boolean') {
            date = new Date();
            formatStr = '-';
            showTime = argDate;
          }else {
            return 'arguments error'
          }
        }
        if(args.length===2) {
          if(toType(date)==='date'&&toType(formatStr)==='string') {
            // do nothing
          }else if(toType(date)==='date'&&toType(formatStr)==='boolean') {
            formatStr = '-';
            showTime = argFormatStr;
          }else if(toType(date)==='string'&&toType(formatStr)==='boolean') {
            date = new Date();
            formatStr = argDate;
            showTime = argFormatStr;
          }else {
            return 'arguments error';
          }
        }
        if((args.length>=3)&&(toType(date)!=='date'||toType(formatStr)!='string'||toType(showTime)!='boolean')) {
          return 'arguments error';
        }
        let year = date.getFullYear(),
            month = date.getMonth()+1>9?(date.getMonth()+1):('0'+(date.getMonth()+1)),
            day = date.getDate()>9?(date.getDate()):('0'+(date.getDate()));
        let hour = date.getHours()>9?(date.getHours()):('0'+(date.getHours())),
            minute = date.getMinutes()>9?(date.getMinutes()):('0'+(date.getMinutes())),
            second = date.getSeconds()>9?(date.getSeconds()):('0'+(date.getSeconds()));
        result = year + formatStr + month + formatStr + day;
        if(showTime) result += ' ' + hour + ':' + minute + ':' + second;
        return result;
      },
    /**
   * 获取 enum 的 label
   */
    getEnumLabel: (enums, key) => {
      if (!enums || (key === undefined || key === null) || typeof enums !== 'object') {
        // console.warn('getEnummLabel 传参错误')
        return '--'
      }
      const _enum = enums[key]
      if (!_enum) {
        return '--'
      }
      return _enum.label
    },
     /**
   * @param value 数组对象
   * @param key 传入的值
   * @param prop:  属性：可以为value 或是 label
   */
    getArrayValue: (value, key, prop) => {
      return value.find(item => {
        return item.value === key
      })[prop]
    },
};
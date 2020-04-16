import store from '@/store/index'
export default {
  /**
   * 删除请求条件中属性值为空的属性
   */
  dealNullQueryCondition (obj) {
    for (var p in obj) {
      if (obj[p] === '' || (obj[p] !== 0 && obj[p] !== false && !obj[p] &&
        (typeof obj[p] !== 'boolean' || typeof obj[p] !== 'number'))) {
        delete obj[p]
      }
    }
  },
  /**
   * 删除请求条件中属性值为空的属性，支持嵌套
   * @param obj
   */
  dealEmptyQueryCondition (obj) {
    Object.keys(obj).forEach(p => {
      let val = obj[p]
      if (Object.prototype.toString.call(val) === '[object Object]') {
        this.dealEmptyQueryCondition(val)
      } else {
        if (val === '' || (val !== 0 && val !== false && !val &&
          (typeof val !== 'boolean' || typeof val !== 'number'))) {
          delete obj[p]
        }
      }
    })
  },
  /**
   * 格式化时间
   * @param date long
   * @param format 格式
   */
  formatDate: (date, format) => {
    const padStart = (value, length, char) => {
      value = value + ''
      return value.padStart(length, char)
    }
    if (!date) return '--'
    let _date = date
    format = format || 'YYYY-MM-DD'
    let splitArr = format.split(/(YYYY|MM|DD|hh|mm|ss)+/)

    if (typeof date !== 'object') {
      _date = new Date(date)
    }

    return splitArr.map(item => {
      if (item === 'YYYY') {
        return _date.getFullYear()
      }

      if (item === 'MM') {
        return padStart(_date.getMonth() + 1, 2, 0)
      }

      if (item === 'DD') {
        return padStart(_date.getDate(), 2, 0)
      }

      if (item === 'hh') {
        return padStart(_date.getHours(), 2, 0)
      }
      if (item === 'mm') {
        return padStart(_date.getMinutes(), 2, 0)
      }
      if (item === 'ss') {
        return padStart(_date.getSeconds(), 2, 0)
      }
      return item
    }).join('')
  },
  /**
   * 格式化时间
   * @param date long
   * @param format 格式
   */
  // eslint-disable-next-line no-dupe-keys
  formatDate: (date, format) => {
    const padStart = (value, length, char) => {
      value = value + ''
      return value.padStart(length, char)
    }
    if (!date) return '--'
    let _date = date
    format = format || 'YYYY-MM-DD'
    let splitArr = format.split(/(YYYY|MM|DD|hh|mm|ss)+/)

    if (typeof date !== 'object') {
      _date = new Date(date)
    }

    return splitArr.map(item => {
      if (item === 'YYYY') {
        return _date.getFullYear()
      }

      if (item === 'MM') {
        return padStart(_date.getMonth() + 1, 2, 0)
      }

      if (item === 'DD') {
        return padStart(_date.getDate(), 2, 0)
      }

      if (item === 'hh') {
        return padStart(_date.getHours(), 2, 0)
      }
      if (item === 'mm') {
        return padStart(_date.getMinutes(), 2, 0)
      }
      if (item === 'ss') {
        return padStart(_date.getSeconds(), 2, 0)
      }
      return item
    }).join('')
  },
  /**
   * 获取指定日期：
   * @param days  指定日期的前后N天
   * @param date  指定日期
   * @param format 指定格式
   */
  getSpecDate: (days, date, format) => {
    days = days || 0
    let currDate = date ? new Date(date) : new Date()
    let specTime = currDate.setDate(currDate.getDate() + days)
    const formatDate = (date, format) => {
      const padStart = (value, length, char) => {
        value = value + ''
        return value.padStart(length, char)
      }
      if (!date) return '--'
      let _date = date
      format = format || 'YYYY-MM-DD'
      let splitArr = format.split(/(YYYY|MM|DD|hh|mm|ss)+/)

      if (typeof date !== 'object') {
        _date = new Date(date)
      }

      return splitArr.map(item => {
        if (item === 'YYYY') {
          return _date.getFullYear()
        }

        if (item === 'MM') {
          return padStart(_date.getMonth() + 1, 2, 0)
        }

        if (item === 'DD') {
          return padStart(_date.getDate(), 2, 0)
        }

        if (item === 'hh') {
          return padStart(_date.getHours(), 2, 0)
        }
        if (item === 'mm') {
          return padStart(_date.getMinutes(), 2, 0)
        }
        if (item === 'ss') {
          return padStart(_date.getSeconds(), 2, 0)
        }
        return item
      }).join('')
    }
    return formatDate(specTime, format)
  },
  /**
   * 判断页面，获取搜索条件缓存
   * @params {to,from,next} vue路由守卫默认参数
   * @params {fromName,pageName} 分别为去往的页面名称（需要缓存的页面)、当前页面名称、请求实体
   */
  getSearchCache({ to, from, next }, { fromName, pageName }) {
    return store.getters.searchCache[pageName]
  },
  /**
   * 判断页面，获取搜索条件缓存
   * @params {to,from,next} vue路由守卫默认参数
   * @params {fromName,pageName,request} 分别为去往的页面名称（需要缓存的页面)、当前页面名称、请求实体
   */
  setSearchCache({ to, from, next }, { toName, pageName, request }) {
    // console.log('setSearchCache', { toName, pageName, request })
    store.dispatch('setCache', { name: pageName, request })
  },
}
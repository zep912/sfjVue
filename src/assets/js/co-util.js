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
  }
}
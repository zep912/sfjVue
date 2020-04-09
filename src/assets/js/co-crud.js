/**
 * Returns 当前组件需要的查询条件
 * @param obj {start: 0, limit: 10,results: 0,pageIndex: 1}
 * @type Object {start: 0, limit: 10,results: 0,pageIndex: 1}
 */
export const getQueryCondition = (obj) => {
  obj = obj || {}
  let page = {
    start: obj.start || 0,
    limit: obj.limit || 10,
    results: obj.results || 0
  }
  page.pageIndex = obj.pageIndex || Math.floor(page.start / page.limit) + 1
  const start = (page.pageIndex - 1) * page.limit
  page.start = start
  return page
}

export const getCurrentPage = (pageResponse) => {
  let currentPage = {
    start: pageResponse.start || 0,
    limit: pageResponse.limit || 10,
    results: pageResponse.results || 0
  }
  const pageIndex = Number(currentPage.start / currentPage.limit) + 1
  currentPage.pageIndex = pageIndex
  return currentPage
}
import $http from './http';
export const imgBaseurl = 'http://192.168.0.133:9001/jjkj/sfj/api'
// 公共法律服务平台-政务公开-下拉过滤条件字典接口
export const getDictionaryListZwgkSelectList = data =>{
  return $http.post('/support/getDictionaryList',data);
};
// 公共法律服务平台-政务公开-新增接口
export const zwgkSaveNews = data =>{
  return $http.post('/doc/news/saveNews',data);
};
// 公共法律服务平台-政务公开-查看新闻接口
export const zwgkGetNewsDetail = data =>{
  return $http.post('/doc/news/getNewsDetail',data);
};
// 公共法律服务平台-普法宣传-新建法律法规
export const pfxcXjflfg = data =>{
  return $http.post('/doc/lawRegulations/saveLawRegulations',data);
};
// 公共法律服务平台-普法宣传-查询法律法规详情
export const pfxcXjflfgRead = data =>{
  return $http.post('/doc/lawRegulations/getLawRegulationsDetail',data);
};
// 公共法律服务平台-律所地图-查询区域下拉列表
export const lvsuoMapAreaList = data =>{
  return $http.post('/support/getAreaList',data);
};
// 公共法律服务平台-律所地图-数据查询
export const lvsuoMapGetOrgCollectData = data =>{
  return $http.post('/lawOrg/getOrgCollectData',data);
};
// 公共法律服务平台-司法机构管理-编辑查询信息
export const lawOrgGetLawOrgInfo = data =>{
  return $http.post('/lawOrg/getLawOrgInfo',data);
};

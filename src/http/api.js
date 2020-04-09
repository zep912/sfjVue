export * from './nux-api';
import $http from './http';

//注册账号
export const saveRegisterUser = (data) => {
    return $http.post('/login/saveRegisterUser', data);
};
//登录账号
export const loginCheck = (data) => {
    return $http.post('/login/loginCheck', data);
};

//市民_获取以案释法列表
export const getValidParaphraseList = data => {
    return $http.post('/doc/paraphrase/getValidParaphraseList', data);
};
//市民_获取查询法律法规
export const getLawRegulationsList = data => {
    return $http.post('/doc/lawRegulations/getLawRegulationsList', data);
};
//市民_获取法律法规明细列表
export const getLawRegulationsDetail = data => {
    return $http.post('/doc/lawRegulations/getLawRegulationsDetail', data);
};
//市民_提交在线咨询和针对性咨询
export const saveConsultOnline = data => {
    return $http.post('/consult/saveConsultOnline', data);
};
//市民_获取司法培训列表
export const getPublicTrainList = data => {
    return $http.post('/train/getPublicTrainList', data);
};

//市民_获取律师列表
export const getValidLawyerList = data => {
    return $http.post('/lawyer/getValidLawyerList', data);
};

//市民_人民调解预约
export const saveAppointmentMediate = data => {
    return $http.post('/appointment/saveAppointmentMediate', data);
};
//市民_获取律师区域列表
export const getAreaList = data => {
    return $http.post('/support/getAreaList', data);
};
//市民_获取律师详情
export const getValidLawyerInfo = data => {
    return $http.post('/lawyer/getValidLawyerInfo', data);
};
//市民_获取律师服务记录
export const getConsultByLawyer = data => {
    return $http.post('/consult/getConsultByLawyer', data);
};
//市民_获取以案释法详情
export const getValidParaphrase = data => {
    return $http.post('/doc/paraphrase/getValidParaphrase', data);
};
//市民_政务公开_获取文章列表
export const getOpenNewsList = data => {
    return $http.post('/doc/news/getOpenNewsList', data);
};
//市民_政务公开_获取文章详情
export const getOpenNewsDetail = data => {
    return $http.post('/doc/news/getOpenNewsDetail', data);
};
//市民_局长信箱_发送邮件
export const saveSuggestForDirector = data => {
    return $http.post('/suggest/saveSuggestForDirector', data);
};
//市民_查询市民个人信息
export const getCitizenInfo = data => {
    return $http.post('/citizen/getCitizenInfo', data);
};
//市民_修改市民个人信息
export const saveCitizenInfo = data => {
    return $http.post('/citizen/saveCitizenInfo', data);
};
//市民_个人中心_获取个人中心首页信息
export const indexData = data => {
    return $http.post('/index/indexData', data);
};
//市民_个人中心_获取近期咨询列表
export const recentlyConsultList = data => {
    return $http.post('/index/recentlyConsultList', data);
};
//市民_个人中心_获取免费咨询or针对性咨询列表
export const getOwnerConsultList = data => {
    return $http.post('/consult/getOwnerConsultList', data);
};
//市民_个人中心_获取我的预约_法律援助列表
export const getOwnerLawAidList = data => {
    return $http.post('/appointment/getOwnerLawAidList', data);
};
//市民_个人中心_获取我的预约_人民调解列表
export const getOwnerMediateList = data => {
    return $http.post('/appointment/getOwnerMediateList', data);
};
//市民_个人中心_意见反馈_提交意见反馈
export const saveSuggestFeedback = data => {
    return $http.post('/suggest/saveSuggestFeedback', data);
};

//司法局_律所管理_新增律所
export const saveLawOffice = data => {
    return $http.post('/lawOrg/saveLawOffice', data);
};
//司法局_律所管理_查询律所详情
export const getLawOfficeDetail = data => {
    return $http.post('/lawOrg/getLawOfficeDetail', data);
};
//司法局_律所管理_查询律师详情
export const getLawyerListByOffice = data => {
    return $http.post('/lawyer/getLawyerListByOffice', data);
};
//司法局_法援机构_新增修改
export const saveLawOrg = data => {
    return $http.post('/lawOrg/saveLawOrg', data);
};
//司法局_法律咨询_现场登记
export const saveConsultLocale = data => {
    return $http.post('/consult/saveConsultLocale', data);
};
//司法局_在线预约_查询法律援助预约列表
export const getLawAidList = data => {
    return $http.post('/appointment/getLawAidList', data);
};
//司法局_在线预约_查询法律援助预约详情
export const getLawAidDetail = data => {
    return $http.post('/appointment/getLawAidDetail', data);
};
//司法局_在线预约_查询人民调解预约列表
export const getMediateList = data => {
    return $http.post('/appointment/getMediateList', data);
};
//司法局_在线预约_查询人民调解预约详情
export const getMediateDetail = data => {
    return $http.post('/appointment/getMediateDetail', data);
};
//司法局_在线预约_提交人民调解预约or法律援助
export const saveApplyAnswer = data => {
    return $http.post('/appointment/saveApplyAnswer', data);
};

//司法局_在线预约_人民调解预约_指派调委会
// export const assignLawOrg = da

//司法局_律所信息_获取律所列表
export const getLawOfficeList = data => {
    return $http.post('/lawOrg/getLawOfficeList', data);
};
//司法局_律师信息_获取律师列表
export const getAllLawyerList = data => {
    return $http.post('/lawyer/getAllLawyerList', data);
};
//律师现场登记列表查询
export const getConsultByLawyerList = data => {
    return $http.post('/consult/getConsultByLawyerList', data);
};
//律师课件学习
export const lawyerxuexi = data => {
    return $http.post('/train/getLawyerTrainPlanList', data);
};

//律所列表接口
export const lusuolist1 = data => {
    return $http.post('doc/paraphrase/getCaseParaphraseList', data);
};
// export const getLawRegulationsList = data => {
//     return $http.post('doc/lawRegulations/getLawRegulationsList', data);
// };
//律师审核
export const lvshishenhe = data => {
    return $http.post('lawyer/getLawyerDetail', data);
};

//律所查看
export const lvsuochakan = data => {
    return $http.post('lawOrg/getLawOfficeDetail', data);
};
export const lvsuochakan2 = data => {
    return $http.post('lawyer/getLawyerListByOffice', data);
};

//管理课件数
export const manakejians = data => {
    return $http.post('train/getTrainCoursewareList', data);
}
//新增或修改计划提交
export const plan = data =>{
    return $http.post('train/saveTrainPlan', data);
}
// 删除培训计划
export const deleteTrainPlan = data => {
    return $http.post('train/deleteTrainPlan', data)
}
// 律师分页查询
export const queryLawyerList = data => {
    return $http.post('train/queryLawyerList', data)
}
//管理培训
export const manapeixun = data => {
    return $http.post('train/getTrainPlanList', data);
}
//敏感词
export const minganci = data => {
    return $http.post('/admin/words/getWordsList', data);
};

//司法考试列表
export const kaoshi = data => {
    return $http.post('/doc/news/getNewsList', data);
};

//查查询律所详情
export const getLawDetail = data => {
    return $http.post('/lawOrg/getLawOfficeDetail', data);
};

//导入
export const daorujiekou = data => {
    return $http.post('/lawOrg/importLawOffice', data);
};

//新增政务
export const xinzengzhengwu = data => {
    return $http.post('/doc/news/saveNews', data);
};

//政务公开
export const zhengwugongkais = data => {
    return $http.post('/doc/news/getNewsList', data);
};

//政务删除
export const zhengwushanchu = data => {
    return $http.post('/doc/news/deleteNews', data);
};

//网上报名保存
export const saveLink = data => {
    return $http.post('data/saveExamApplyLink', data);
};

//新增敏感词
export const xinzengmingan = data => {
    return $http.post('admin/words/saveWords', data);
};

//轮播图管理
export const lunbotumana = data => {
    return $http.post('admin/banner/getBannerList', data);
};

//轮播图上传
export const lunbotushangchuan = data => {
    return $http.post('admin/banner/saveBanner', data);
};

//删除
export const shanchus = data => {
    return $http.post('admin/banner/deleteBanner', data);
};

//法律援助列表
export const falvyuanzhu = data => {
    return $http.post('lawOrg/getLawOrgList', data);
};

//新增机构
export const add_jigou = data => {
    return $http.post('lawOrg/saveLawOrg', data);
};

//删除机构
export const del_jigou = data => {
    return $http.post('lawOrg/deleteLawOrg', data);
};

//添加法律法规
export const add_falvfagui = data => {
    return $http.post('doc/lawRegulations/saveLawRegulations', data);
};

//市民 查询咨询详情
export const chaxunxaingqings = data => {
    return $http.post('consult/getConsultDetail', data);
};

// //律师解答
// export const lvshijiefdas = data =>{
//     return $http.post('consult/getConsultDetail',data);
// };


//司法培训列表
export const sifapeixunlist = data => {
    return $http.post('train/getPublishTrainList', data);
};

//看视频律师
export const see_videol = data => {
    return $http.post('train/getPlanStudyInfo', data);
};

//ditu列表
export const dituliebiao = data => {
    return $http.post('lawOrg/getOrgCollectData', data);
};

//律所添加律师
export const lvsuotianjia = data => {
    return $http.post('lawyer/saveLawyer', data);
};
//忘记密码
export const forget_pass = data => {
    return $http.post('login/checkUserPhone', data);
};


//律师回复
export const law_huifu = data => {
    return $http.post('consult/saveInteractionLawyerMsg', data);
};

//字典数据返回类型 select
export const getSelectDetail = data => {
    return $http.post('support/getDictionaryList', data);
};
//获取针对性咨询列表
//律所查询针对性咨询列表
export const getConsultByOfficeList = data => {
    return $http.post('consult/getConsultByOfficeList', data);
};
//获取值班表列表
export const getDutyPlanList = data => {
    return $http.post('lawyer/getDutyPlanList', data);
};
//删除值班计划列表
export const delDutyPlan = data => {
    return $http.post('lawyer/delDutyPlan', data);
};
//新增值班计划
export const saveDutyPlan = data => {
    return $http.post('lawyer/saveDutyPlan', data);
};
//获取内部律师列表
export const getInnerLawyerList = data => {
    return $http.post('lawyer/getInnerLawyerList', data);
};

//获取外部律师列表
export const getOuterLawyerCount = data => {
    return $http.post('/lawyer/getOuterLawyerCount', data);
};


//获取律师值班计划列表
export const getDutyLawyerList = data => {
    return $http.post('lawyer/getDutyLawyerList', data);
};

//获取调委会查询列表数据
export const getMediateCommitteeList = data =>{
    return $http.post('/lawOrg/getMediateCommitteeList', data);
}


//司法考试 网上报名保存接口
export const saveExamApplyLink = data =>{
    return $http.post('/data/saveExamApplyLink', data);
}


//律师个人中心
export const getOwnerLawyerInfo = data =>{
    return $http.post('/lawyer/getOwnerLawyerInfo',data);
}

//律师个人资料提交
export const saveOwnLawyerInfo = data =>{
    return $http.post('/lawyer/saveOwnLawyerInfo',data);
}

//司法局添加文档课件
export const saveTrainCourseware = data =>{
    return $http.post('/train/saveTrainCourseware',data);
}





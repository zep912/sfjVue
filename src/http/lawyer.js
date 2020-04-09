import $http from './http';

//文件上传
export const uploadImg = (data) => {
    return $http.post('/support/uploadFile', data, {
        headers: {
            "content-type": "multipart/form-data"
        }
    });
};

//律师管理--律师诚信管理
export const saveLawyerFaith = (data) => {
    return $http.post('/lawyer/saveLawyerFaith', data);
};
// 律师_首页纵向时间轴
export const getWorkAxis = (data) => {
    return $http.post('/index/homeData/getWorkAxis', data);
}
// 律师_主页查询待办数、待办超时数、我发起数、我发起超时数
export const getPendingNumbers = (data) => {
    return $http.post('/index/homeData/getPendingNumbers', data);
}
// 律师_查询待办列表
export const getPendingList = (data) => {
    return $http.post('/index/homeData/getPendingList', data);
}
// 律师_查询我发起列表
export const getStartedList = (data) => {
    return $http.post('/index/homeData/getStartedList', data);
}



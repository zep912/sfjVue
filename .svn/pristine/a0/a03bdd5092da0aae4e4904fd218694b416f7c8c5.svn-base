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
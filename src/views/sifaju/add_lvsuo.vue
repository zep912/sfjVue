<template>
    <div class="tianjia add-lvsuo-container">
        <div class="top_manalvs">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path:'mana_law',query:{type:1}}">律所管理</el-breadcrumb-item>
                <el-breadcrumb-item>{{lvsuo_texts}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div style="width: 96%;padding: 20px 2%;">
            <el-form :model="addForm"
                     :rules="rules"
                     ref="addForm"
                     label-width="100px"
                     class="demo-ruleForm">
                <div class="add_lvshi">
                    <div class="add_child">
                        <el-form-item class="flex"
                                      prop="orgName">
                            <span class="text_betten">律所名称<i></i></span><span class="name_span">*</span>
                            <el-input maxlength="100"
                                      v-model="addForm.orgName"
                                      style="width: 60%;"
                                      placeholder="请输入内容"></el-input>
                        </el-form-item>
                        <el-form-item class="flex"
                                      prop="orgCode">
                            <span class="text_betten">机构代码<i></i></span><span class="name_span">*</span>
                            <el-input maxlength="100"
                                      v-model="addForm.orgCode"
                                      style="width: 60%;"
                                      placeholder="请输入内容"></el-input>
                        </el-form-item>
                        <el-form-item class="flex"
                                      prop="orgPrincipal">
                            <span class="text_betten">负责人<i></i></span><span class="name_span">*</span>
                            <el-input maxlength="100"
                                      v-model="addForm.orgPrincipal"
                                      style="width: 60%;"
                                      placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </div>
                    <div class="add_child">
                        <el-form-item class="flex"
                                      prop="lawOfficeType">
                            <span class="text_betten">律所类型<i></i></span><span class="name_span">*</span>
                            <el-select v-model="addForm.lawOfficeType"
                                       placeholder="请选择"
                                       style="width: 60%;">
                                <el-option v-for="item in leixing"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="flex"
                                      prop="establishTime">
                            <span class="text_betten">成立时间<i></i></span><span class="name_span"
                                  style="opacity: 0;">*</span>
                            <el-date-picker v-model="addForm.establishTime"
                                            type="date"
                                            style="color: #ccc;width: 60%"
                                            placeholder="选择日期"
                                            value-format="yyyy-MM-dd">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item class="flex"
                                      prop="orgTelephone">
                            <span class="text_betten">联系电话<i></i></span><span class="name_span">*</span>
                            <el-input maxlength="11"
                                      v-model="addForm.orgTelephone"
                                      style="width: 60%;"
                                      placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </div>
                </div>
                <div class="flex"
                     style="align-items: flex-start;margin: 20px 0;">
                    <span class="text_betten">注册地址<i></i></span><span class="name_span"
                          style="opacity: 0;">*</span>
                    <div style="width: 80%;display: flex;align-items: center;justify-content: space-between;">
                        <el-select v-model="cityIdDetail"
                                   placeholder="请选择市"
                                   style="width: 19%;"
                                   @change="change()">
                            <el-option v-for="(item,index) in shi"
                                       :key="index"
                                       :label="item.areaName"
                                       :value="item.areaId">
                            </el-option>
                        </el-select>
                        <el-select v-model="addForm.areaRegionId"
                                   placeholder="请选择区"
                                   style="width: 19%;"
                                   @change="change1()">
                            <el-option v-for="(item,index) in qu"
                                       :key="index"
                                       :label="item.areaName"
                                       :value="item.areaId">
                            </el-option>
                        </el-select>
                        <el-select v-model="addForm.areaStreetId"
                                   placeholder="请选择街道"
                                   style="width: 19%;">
                            <el-option v-for="(item,index) in jie"
                                       :key="index"
                                       :label="item.areaName"
                                       :value="item.areaId">
                            </el-option>
                        </el-select>
                        <el-input v-model="addForm.areaAddress"
                                  style="width: 37.5%;"
                                  placeholder="请输入详细地址"></el-input>
                    </div>

                </div>
                <div>
                    <el-form-item class="flex"
                                  style="align-items: flex-start;margin: 20px 0;"
                                  prop="orgStatus">
                        <span class="text_betten">执业状态<i></i></span><span class="name_span">*</span>
                        <el-select v-model="addForm.orgStatus"
                                   placeholder="请选择"
                                   style="width: 80%;">
                            <el-option v-for="item in zhuantai"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item class="flex"
                                  prop="orgDesc">
                        <span class="text_betten">律所简介<i></i></span><span class="name_span"
                              style="opacity: 0;">*</span>
                        <el-input style="margin-left:5px;"
                                  class="textarea"
                                  type="textarea"
                                  v-model="addForm.orgDesc"
                                  rows="10"
                                  placeholder="请输入律所简介"></el-input>
                    </el-form-item>

                    <el-form-item class="flex"
                                  prop=""
                                  style="align-items: flex-start;margin-top: 20px;">
                        <span class="text_betten">上传照片<i></i></span><span class="name_span"
                              style="opacity: 0;">*</span>
                        <el-upload :class="{hide:hideUpload}"
                                   :action="uploadUrl"
                                   multiple
                                   :data="{token:token}"
                                   list-type="picture-card"
                                   :file-list="fileList"
                                   :on-change="uploadFileChange"
                                   :on-success="successUpload_goodsAdmin"
                                   :on-remove="removeFileList"
                                   accept=".jpg,.jpeg,.png,.gif,.bmp"
                                   :limit="3">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </el-form-item>
                    <div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
                        <el-button type="primary"
                                   @click="baocun">提交</el-button>
                        <el-button @click="quxiao">取消</el-button>
                    </div>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
import { saveLawOffice, getLawDetail, getAreaList } from "../../http/api";
import { uploadImg } from "@/http/lawyer.js";
export default {
    data() {
        let checkPhone = (rule, value, callback) => {
            const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
            if (!value) {
                return callback(new Error("手机号不能为空"));
            } else {
                if (reg.test(value)) {
                    callback();
                } else {
                    return callback(new Error("请输入正确的手机号"));
                }
            }
        };
        return {
            leixing: [
                { value: 1, label: "律师事务所" },
                { value: 2, label: "法律服务所" }
            ],
            zhuantai: [
                { value: 1, label: "正常" },
                { value: 2, label: "注销" }
            ],
            shi: [],
            qu: [],
            jie: [],
            value: "",
            imgUrl: "",
            cityIdDetail: "",
            //新增和修改律所信息
            addForm: {
                lawOrgId: "",
                orgName: "",
                orgDesc: "",
                areaRegionId: "",
                areaStreetId: "",
                areaAddress: "",
                areaX: "",
                areaY: "",
                orgTelephone: "",
                orgPrincipal: "",
                orgCode: "",
                orgType: 1,
                establishTime: "",
                orgStatus: "", //机构状态 1：正常；2：注销；
                lawOfficeType: "", //律所类型(1:律师事务所；2:法律服务所)
                imgList: []
            },
            rules: {
                orgName: [
                    {
                        required: true,
                        message: "请输入律所名称",
                        trigger: "blur"
                    }
                ],
                lawOfficeType: [
                    {
                        required: true,
                        message: "请选择律所类型",
                        trigger: "change"
                    }
                ],
                orgCode: [
                    {
                        required: true,
                        message: "请输入律所名称",
                        trigger: "blur"
                    }
                ],
                orgPrincipal: [
                    { required: true, message: "请输入负责人", trigger: "blur" }
                ],
                orgTelephone: [{ validator: checkPhone, trigger: "blur" }],
                orgStatus: [
                    {
                        required: true,
                        message: "请选择执业状态",
                        trigger: "change"
                    }
                ]
            },
            uploadUrl:
                "http://192.168.0.133:9001/jjkj/sfj/api/support/uploadFile",
            lawOfficeDetail: {
                token: sessionStorage.getItem("token"),
                lawOrgId: this.$route.query.id
            },
            lvsuo_texts: "新增律所",
            fileList: [],
            token: sessionStorage.getItem("token"),
            hideUpload: false
        };
    },
    created() {
        this.fileList = [];
        this.addForm.imgList = [];
        if (this.$route.query.id) {
            this.getAreaDetailList();
            getLawDetail(this.lawOfficeDetail).then(res => {
                this.addForm = res.content;
                let imgList = [];
                if (res.content.imgList.length > 0) {
                    res.content.imgList.forEach(item => {
                        this.fileList.push({
                            fileId: item.fileId,
                            url: item.fileUrl
                        });
                        imgList.push(item.fileId);
                    });
                    this.addForm.imgList = imgList;
                }
                this.hideUpload = this.fileList.length >= 3;
            });
            this.lvsuo_texts = "修改律所";
        } else {
            this.getAreaDetailList();
        }
    },
    methods: {
        //图片上传
        successUpload_goodsAdmin(success) {
            for (let i in success.content.fileList) {
                console.log(success.content.fileList[i].fileId);
                this.addForm.imgList.push(success.content.fileList[i].fileId);
            }
        },
        removeFileList(file, fileList) {
            console.log(file, fileList);
            this.addForm.imgList = this.addForm.imgList.filter(
                item => item !== file.url
            );
            this.hideUpload = fileList.length >= 3;
        },
        uploadFileChange(file, fileList) {
            this.hideUpload = fileList.length >= 3;
        },
        baocun() {
            this.token = sessionStorage.getItem("token");
            var _this = this;
            this.addForm.orgType = 1;
            this.$refs["addForm"].validate(valid => {
                if (valid) {
                    saveLawOffice(this.addForm).then(success => {
                        if (success.code == 200) {
                            _this.$notify({
                                message: "提交成功",
                                type: "success"
                            });
                            setTimeout(() => {
                                this.$router.go(-1);
                            }, 1500);
                        } else {
                            _this.$message.error({
                                message: success.msg
                            });
                        }
                    });
                } else {
                    return false;
                }
            });
        },
        quxiao() {
            this.$router.go(-1);
        },
        //获取省级联联动信息
        async getAreaDetailList() {
            let city = await getAreaList({ areaPid: "10" });
            // this.sheng = provice
            this.shi = city.content.dataList;
            if (this.$route.query.id) {
                this.cityIdDetail = this.shi[0].areaId;
                let flag = true;
                this.change(flag);
                this.change1(flag);
            }
        },
        async change(flag) {
            if (!flag) {
                this.addForm.areaRegionId = "";
            }
            let area = await getAreaList({ areaPid: this.cityIdDetail });
            this.qu = area.content.dataList;
        },
        async change1(flag) {
            if (!flag) {
                this.addForm.areaStreetId = "";
            }
            let street = await getAreaList({
                areaPid: this.addForm.areaRegionId
            });
            this.jie = street.content.dataList;
        }
    }
};
</script>

<style lang="scss">
.add-lvsuo-container {
    .el-upload--picture-card {
        width: 148px !important;
        height: 148px !important;
    }
    .hide .el-upload--picture-card {
        display: none;
    }
    .el-form-item__content {
        margin-left: 0 !important;
        line-height: 1;
        position: relative;
        font-size: 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }
    .textarea {
        textarea {
            width: 87%;
        }
    }
    .el-form-item__error {
        left: 115px;
    }
}
.tianjia {
    width: 100%;
}
.top_manalvs {
    width: 96%;
    padding: 0 2%;
    height: 70px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.add_lvshi {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.add_lvshi > div {
    width: 50%;
}
.add_child > div {
    margin-top: 20px;
}

.add_btn {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #0da9d7;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
}
.add_btn img {
    width: 65%;
    height: 65%;
}
.add_img {
    width: 100px;
    height: 100px;
    border: 1px solid #eee;

    display: flex;
    align-items: center;
    justify-content: center;
}
.add_img img {
    width: 30px;
    height: 30px;
}
.toast {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
}
.toast_con {
    width: 500px;
    border-radius: 5px;
    overflow: hidden;
    background: #fff;
}
.con-toptoast {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
    font-size: 20px;
    color: #fff;
    position: relative;
}
.con-toptoast img {
    width: 28px;
    height: 28px;
    position: absolute;
    right: 20px;
    top: 12px;
}
.toast_save {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
}
.toast_save > div:nth-child(1) {
    width: 80px;
    height: 40px;
    background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
    color: #fff;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
}
.tishi_toast {
    color: #d81e06;
    display: flex;
    align-items: center;
}
.tishi_toast img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
.right_flex {
    display: flex;
    width: 90%;
    justify-content: left;
}
</style>

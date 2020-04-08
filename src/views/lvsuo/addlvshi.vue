<template>
    <div class="tianjia add-lawyer-container">
        <div class="top_manalvs">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path:'lvshiguan'}">律师管理</el-breadcrumb-item>
                <el-breadcrumb-item>新增律师</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div style="width: 96%;padding: 20px 2%;">
            <el-form :model="baseInfo"
                     :rules="baseInfoRules"
                     ref="baseInfo"
                     label-width="100px"
                     class="demo-ruleForm">
                <div class="add_lvshi"
                     style="align-items: flex-start;">
                    <div class="add_child">
                        <div class="flex">
                            <el-form-item class="flex"
                                          prop="lawyerName">
                                <span class="text_betten">姓名<i></i></span><span class="name_span">*</span>
                                <el-input v-model="baseInfo.lawyerName"
                                          style="width: 60%;"
                                          placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </div>
                        <div class="flex">
                            <el-form-item class="flex"
                                          prop="lawyerPhone">
                                <span class="text_betten">手机号码<i></i></span><span class="name_span">*</span>
                                <el-input v-model="baseInfo.lawyerPhone"
                                          style="width: 60%;"
                                          placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </div>
                        <div class="flex">
                            <el-form-item class="flex"
                                          prop="joinTime">
                                <span class="text_betten">进所时间<i></i></span><span class="name_span"
                                      style="opacity: 0;">*</span>
                                <el-date-picker v-model="baseInfo.joinTime"
                                                type="date"
                                                placeholder="选择日期"
                                                value-format="yyyy-MM-dd"
                                                style="width: 60%;">
                                </el-date-picker>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="add_child">
                        <div class="flex">
                            <el-form-item class="flex"
                                          prop="credentialCode">
                                <span class="text_betten">执业证号<i></i></span><span class="name_span">*</span>
                                <el-input v-model="baseInfo.credentialCode"
                                          style="width: 60%;"
                                          placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </div>
                        <div class="flex">
                            <el-form-item class="flex"
                                          prop="professionType">
                                <span class="text_betten">执业类别<i></i></span><span class="name_span">*</span>
                                <el-select v-model="baseInfo.professionType"
                                           placeholder="请选择"
                                           style="width: 60%;">
                                    <el-option v-for="item in jobType"
                                               :key="item.dictDataCode"
                                               :label="item.dictDataName"
                                               :value="item.dictDataCode">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex"
                         style="align-items: flex-start;margin: 20px 0;">
                        <el-form-item class="flex"
                                      prop="roleType">
                            <span class="text_betten">人员类型<i></i></span><span class="name_span"
                                  style="opacity: 0;">*</span>
                            <div style="padding: 12px 0;">
                                <el-radio v-model="baseInfo.roleType"
                                          label="1">律所负责人</el-radio>
                                <el-radio v-model="baseInfo.roleType"
                                          label="2">律所合伙人</el-radio>
                                <el-radio v-model="baseInfo.roleType"
                                          label="3">聘用律师</el-radio>
                            </div>
                        </el-form-item>
                    </div>
                    <div class="flex"
                         style="align-items: flex-start;">
                        <span class="text_betten">擅长专业<i></i></span><span class="name_span"
                              style="opacity: 0;">*</span>
                        <el-select style="width:66%"
                                   v-model="checkMajors"
                                   multiple
                                   :multiple-limit="5"
                                   placeholder="请选择擅长专业">
                            <el-option v-for="item in majorListData"
                                       :key="item.dictDataCode"
                                       :label="item.dictDataName"
                                       :value="item.dictDataCode">
                            </el-option>
                        </el-select>
                        <!-- <textarea name=""
                                  id=""
                                  readonly
                                  v-model="checkMajors"
                                  placeholder="擅长专业"
                                  cols="30"
                                  rows="10"></textarea>
                        <img src="../../assets/image/add2.png"
                             @click="shanchangleixingc"
                             class="img_add"
                             alt=""> -->
                    </div>
                    <div class="flex"
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
                                   :limit="1">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </div>
                    <div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
                        <el-button type="primary"
                                   @click="baocun">提交</el-button>
                        <el-button @click="quxiao">取消</el-button>
                    </div>
                </div>
            </el-form>
        </div>
        <div class="toast"
             v-if="shanchang">
            <div class="toast_con">
                <div class="con-toptoast">
                    擅长专业
                    <img src="../../assets/image/del.png"
                         @click="close"
                         alt="">
                </div>
                <div>
                    <el-tree :data="majorListData"
                             show-checkbox
                             node-key="dictDataCode"
                             :props="defaultProps">
                    </el-tree>
                </div>
                <div class="toast_save">
                    <div>保存</div>
                    <div class="tishi_toast">
                        <img src="../../assets/image/jinggao.png"
                             alt="">
                        最多选择5项
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { lvshishenhe, lvsuotianjia, getSelectDetail } from "../../http/api";
export default {
    data() {
        return {
            shanchang: false,
            value: "",
            imgUrl: "",
            data: [],
            majorListData: [],
            jobType: [],
            defaultProps: {
                children: "children",
                label: "dictDataName"
            },
            baseInfo: {
                //类型：Object  必有字段  备注：基础数据
                lawyerId: "", //类型：String  可有字段  备注：律师ID(当编辑律师资料时此ID不能为空，否则为添加律师操作)
                lawyerName: "", //类型：String  必有字段  备注：姓名
                credentialCode: "", //类型：String  必有字段  备注：执业证号
                lawyerPhone: "", //类型：String  必有字段  备注：手机号码
                professionType: "", //类型：String  必有字段  备注：执业类别
                joinTime: "", //类型：String  可有字段  备注：进所时间
                roleType: "", //类型：String  可有字段  备注：人员类型 1:律所负责人; 2:律所合伙人;3:聘用律师(多个用英文逗号分隔)
                photoId: "", //类型：String  必有字段  备注：照片ID
                infoFlag: "1", //类型：String  必有字段  备注：固定值填1(待完善)
                lawyerIdentity: "1" //类型：String  必有字段  备注：身份类型 1-律师； 2-法律工作者
            },
            specialtyList: [
                //类型：Array  必有字段  备注：擅长专业列表
                // {
                //     //类型：Object  必有字段  备注：无
                //     adeptSpecialty: "4cc18184d3754624b25afa6f8bfb4eba" //类型：String  必有字段  备注：专业ID
                // }
            ],
            baseInfoRules: {
                lawyerName: [
                    {
                        required: true,
                        message: "请输入律师名称",
                        trigger: "blur"
                    }
                ],
                credentialCode: [
                    {
                        required: true,
                        message: "请输入执业证号",
                        trigger: "blur"
                    }
                ],
                lawyerPhone: [
                    {
                        required: true,
                        message: "请输入手机号码",
                        trigger: "blur"
                    }
                ],
                professionType: [
                    {
                        required: true,
                        message: "请选择执业类别",
                        trigger: "change"
                    }
                ]
            },
            uploadUrl:
                "http://192.168.0.133:9001/jjkj/sfj/api/support/uploadFile",
            lawOfficeDetail: {
                token: sessionStorage.getItem("token"),
                lawyerId: this.$route.query.id
            },
            radio: 1,
            checkMajors: [],
            fileList: [],
            token: sessionStorage.getItem("token"),
            hideUpload: false
        };
    },
    created() {
        this.getSelectDetailData();
        this.specialtyList = [];
        if (this.$route.query.id) {
            lvshishenhe({
                lawyerId: this.$route.query.id
            }).then(res => {
                if (res.code == 200) {
                    this.baseInfo.lawyerName =
                        res.content.lawyerInfo.lawyerName;
                    this.baseInfo.credentialCode =
                        res.content.lawyerInfo.credentialCode;
                    this.baseInfo.lawyerPhone =
                        res.content.lawyerInfo.lawyerPhone;
                    this.baseInfo.professionType =
                        res.content.lawyerInfo.professionType;
                    this.baseInfo.joinTime = res.content.lawyerInfo.joinTime;
                    this.baseInfo.roleType = res.content.lawyerInfo.roleType;
                    this.baseInfo.photoId = res.content.lawyerInfo.photoId;
                    this.baseInfo.infoFlag = "1";
                    this.baseInfo.lawyerIdentity = "1";
                    this.baseInfo.lawyerId = this.$route.query.id;
                    let imgList = [];
                    if (res.content.lawyerInfo.imgList.length > 0) {
                        res.content.lawyerInfo.imgList.forEach(item => {
                            this.fileList.push({
                                fileId: item.fileId,
                                url: item.fileUrl
                            });
                            imgList.push(item.fileId);
                        });
                        this.baseInfo.photoId = imgList[0];
                    }
                    if (res.content.lawyerInfo.adeptSpecialtyList.length > 0) {
                        res.content.lawyerInfo.adeptSpecialtyList.forEach(
                            item => {
                                this.checkMajors.push(item.adeptSpecialty);
                            }
                        );
                    }
                    this.hideUpload = this.fileList.length >= 1;
                }
            });
        }
    },
    methods: {
        // 获取下拉列表数据
        async getSelectDetailData() {
            let selectData = await getSelectDetail({
                dictCode: "shanchangzhuanye",
                userId: "111"
            });
            let jobTypeData = await getSelectDetail({
                dictCode: "zhiyeleibie",
                userId: "111"
            });
            this.majorListData = [...selectData.content.resultList];
            this.jobType = [...jobTypeData.content.resultList];
        },
        //图片上传
        successUpload_goodsAdmin(success) {
            this.baseInfo.photoId = success.content.fileList[0].fileId;
            this.hideUpload = false;
        },
        removeFileList(file, fileList) {
            this.baseInfo.photoId = "";
            this.hideUpload = fileList.length >= 1;
        },
        uploadFileChange(file, fileList) {
            this.hideUpload = fileList.length >= 1;
        },
        baocun() {
            this.$refs["baseInfo"].validate(valid => {
                if (valid) {
                    if (this.checkMajors.length > 0) {
                        this.checkMajors.forEach(item => {
                            this.specialtyList.push({
                                adeptSpecialty: item
                            });
                        });
                    }
                    let params = {
                        baseInfo: this.baseInfo,
                        specialtyList: this.specialtyList
                    };
                    lvsuotianjia(params).then(success => {
                        if (success.code == 200) {
                            this.$message({
                                message: "提交成功",
                                type: "success"
                            });
                            setTimeout(() => {
                                this.$router.go(-1);
                            }, 1500);
                        } else {
                            this.$message.error({
                                message: success.msg
                            });
                        }
                    });
                }
            });
        },
        quxiao() {
            this.$router.go(-1);
        },
        checkSize(size, dom) {
            // !size ?this.checkSize_type[dom] = true:this.checkSize_type[dom] = false;
        },
        shanchangleixingc() {
            this.shanchang = true;
        },
        close() {
            this.shanchang = false;
        }
    },
    computed: {
        uploadType() {
            return {
                token: sessionStorage.getItem("token")
            };
        }
    }
};
</script>

<style lang="scss">
.add-lawyer-container {
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
    .hide .el-upload--picture-card {
        display: none;
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
.img_add {
    width: 30px !important;
    margin-left: 10px;
    height: 30px;
}
</style>

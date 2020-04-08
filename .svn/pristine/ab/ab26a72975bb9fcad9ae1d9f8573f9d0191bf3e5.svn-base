<template>
    <div class="tianjia add-lawyer-container">
        <div class="top_manalvs">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path:'lvshiguan'}">律师管理</el-breadcrumb-item>
                <el-breadcrumb-item>查看律师</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div style="width: 96%;padding: 20px 2%;">
            <div class="add_lvshi"
                 style="align-items: flex-start;">
                <div class="add_child">
                    <div class="flex">
                        <span class="text_betten">姓名<i></i></span><span class="name_span">*</span>
                        <span>{{baseInfo.lawyerName}}</span>
                    </div>
                    <div class="flex">

                        <span class="text_betten">手机号码<i></i></span><span class="name_span">*</span>

                        <span>{{baseInfo.lawyerPhone}}</span>
                    </div>
                    <div class="flex">

                        <span class="text_betten">进所时间<i></i></span><span class="name_span"
                              style="opacity: 0;">*</span>

                        <span>{{baseInfo.joinTime}}</span>
                    </div>
                </div>
                <div class="add_child">
                    <div class="flex">

                        <span class="text_betten">执业证号<i></i></span><span class="name_span">*</span>
                        <span>{{baseInfo.credentialCode}}</span>
                    </div>
                    <div class="flex">

                        <span class="text_betten">执业类别<i></i></span><span class="name_span">*</span>
                        <span>{{baseInfo.professionTypeDesc}}</span>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex"
                     style="align-items: flex-start;margin: 20px 0;">

                    <span class="text_betten">人员类型<i></i></span><span class="name_span"
                          style="opacity: 0;">*</span>

                    <div style="padding: 12px 0;">
                        <span>{{baseInfo.roleTypeDesc}}</span>
                    </div>

                </div>
                <div class="flex"
                     style="align-items: flex-start;">
                    <span class="text_betten">擅长专业<i></i></span><span class="name_span"
                          style="opacity: 0;">*</span>
                    <span style="padding-top:14px;">{{baseInfo.adeptSpecialtys}}</span>
                </div>
                <div class="flex"
                     style="align-items: flex-start;margin-top: 20px;">
                    <span class="text_betten">上传照片<i></i></span><span class="name_span"
                          style="opacity: 0;">*</span>
                    <!-- <el-upload :class="{hide:hideUpload}"
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
                        </el-upload> -->
                    <img style="width:140px;height:140px;border:1px solid #ededed;border-radius:5px;overflow:hidden;"
                         :src="baseInfo.photoUrl"
                         alt=""
                         srcset="">
                </div>
                <div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
                    <el-button @click="quxiao">取消</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { lvshishenhe } from "../../http/api";
export default {
    data() {
        return {
            imgUrl: "",

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
            lawOfficeDetail: {
                token: sessionStorage.getItem("token"),
                lawOrgId: this.$route.query.id
            },
            token: sessionStorage.getItem("token")
        };
    },
    created() {
        if (this.$route.query.id) {
            lvshishenhe({
                lawyerId: this.$route.query.id
            }).then(res => {
                if (res.code == 200) {
                    this.baseInfo = res.content.lawyerInfo;
                }
            });
        }
    },
    methods: {
        quxiao() {
            this.$router.go(-1);
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

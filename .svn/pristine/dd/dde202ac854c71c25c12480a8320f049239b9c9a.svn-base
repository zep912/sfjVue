<template>
    <div class="gerenxinxi">
        <div class="gerenxinxijian"></div>
        <div class="xinxi_top">
            <el-button type="primary">个人信息</el-button>
            <el-button @click="disabled = false">修改</el-button>
        </div>
        <div class="genren_content">
            <div class="add_lvshi">
                <div class="add_child">
                    <div class="flex">
                        <span class="text_betten">群众姓名<i></i></span><span class="name_span" >*</span>
                        <el-input v-model="citizenInfo.personName" style="width: 60%;" placeholder="请输入内容" :disabled="disabled" 
                            :class="{'waring_info_border':checkSize_type.personName}" @blur="checkSize(citizenInfo.personName,'personName')"></el-input>
                    </div>
                    <div class="flex">
                        <span class="text_betten">身份证号<i></i></span><span class="name_span" >*</span>
                        <el-input v-model="citizenInfo.idNumber" style="width: 60%;" placeholder="请输入内容" :disabled="disabled"
                            :class="{'waring_info_border':checkSize_type.idNumber}" @blur="checkSize(citizenInfo.idNumber,'idNumber')"></el-input>
                    </div>
                    <div class="flex">
                        <span class="text_betten">手机号码<i></i></span><span class="name_span" style="opacity: 0;">*</span>
                        <el-input v-model="citizenInfo.cellphone" style="width: 60%;" placeholder="请输入内容" :disabled="disabled"></el-input>
                    </div>
                    <div class="flex">
                        <span class="text_betten">性别<i></i></span><span class="name_span" >*</span>
                        <el-input v-model="citizenInfo.sexDesc" style="width: 60%;" placeholder="请输入内容" :disabled="disabled"
                            :class="{'waring_info_border':checkSize_type.sexDesc}" @blur="checkSize(citizenInfo.sexDesc,'sexDesc')"></el-input>
                    </div>
                    <div class="flex">
                        <span class="text_betten">出生日期<i></i></span><span class="name_span" style="opacity: 0;">*</span>
                        <el-input v-model="citizenInfo.birthday" style="width: 60%;" placeholder="请输入内容" :disabled="disabled"></el-input>
                    </div>
                    <div class="flex">
                        <span class="text_betten">所属地区<i></i></span><span class="name_span" style="opacity: 0;">*</span>
                        <el-input v-model="citizenInfo.addressDetail" style="width: 60%;" placeholder="请输入内容" :disabled="disabled"></el-input>
                    </div>
                </div>
            </div>
            <div class="btnbtn" v-if="!disabled">
                <el-button type="primary" @click="editCitizenInfo">保存</el-button>
                <el-button @click="disabled = true">取消</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {getCitizenInfo,saveCitizenInfo} from '../../../http/api';
    export default {
        data() {
            return {
                citizenInfo: {},
                disabled: true,
                checkSize_type: {
                    personName: false,
                    idNumber: false,
                    sexDesc: false,
                },
                submitCitizenInfo:{
                    token:'',                //类型：String  必有字段  备注：token 用户身份标识
                    personId:'',                //类型：String  必有字段  备注：市民ID
                    psersonName:'',                //类型：String  必有字段  备注：市民姓名
                    idNumber:'',                //类型：String  必有字段  备注：身份证号
                    sex:'',                //类型：String  必有字段  备注：姓别
                    birthday:'',                //类型：String  必有字段  备注：出生日期
                    cellphone:'',                //类型：String  必有字段  备注：手机号码
                    areaPositionId:'',                //类型：String  必有字段  备注：所在区ID
                    areaAddress:''                //类型：String  必有字段  备注：详细地址
                }
            }
        },
        created() {
            getCitizenInfo({token:sessionStorage.getItem("token")}).then(success=>{
                this.citizenInfo = success.content;
            })
        },
        methods: {
            editCitizenInfo(){
                // this.submitCitizenInfo.token = sessionStorage.getItem("token");
                // this.submitCitizenInfo.personId = this.citizenInfo.personId;
                saveCitizenInfo(this.citizenInfo).then(success=>{
                    console.log('success')
                })
            },
            checkSize(size,dom){
                !size ?this.checkSize_type[dom] = true:this.checkSize_type[dom] = false;
            }
        }
    };
</script>

<style lang="scss">
    .gerenxinxi{
        width: 100%;
        background: #fff;
        position: relative;
    }
    .gerenxinxijian{
        width: 100%;
        height: 1px;
        position: absolute;
        top: 0;
        left: 0;
        background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
    }
    .xinxi_top{
        width: 96%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 2%;
    }
    .genren_content{
        width: 96%;
        padding: 15px 2%;
        .add_child{
            width:100%;
        }
    }
    .btnbtn{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin :20px 0;
    }
</style>
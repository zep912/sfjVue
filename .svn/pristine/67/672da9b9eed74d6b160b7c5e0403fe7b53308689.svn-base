<template>
    <div class="zhuce">
        <div class="zhuce_top">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: 'shimin' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>账号注册</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="zhuce-content">
            <div class="tianxie">
                <span class="biaoqiantext">群众姓名 <i></i></span>：
                <input type="text" placeholder="请输入您的姓名">
            </div>
            <div class="tianxie">
                <span class="biaoqiantext">身份证号 <i></i></span>：
                <input type="text" placeholder="请输入身份证号">
            </div>
            <div class="tianxie">
                <span class="biaoqiantext">手机号码 <i></i></span>：
                <input type="text" placeholder="请输入手机号码">
            </div>
            <div class="tianxie">
                <span class="biaoqiantext">验证码 <i></i></span>：
                <input type="text" placeholder="请输入验证码">
            </div>
            <div class="tianxie">
                <span class="biaoqiantext">设置密码 <i></i></span>：
                <input type="password" placeholder="请输入密码">
            </div>
            <div class="tianxie">
                <span class="biaoqiantext">确认密码 <i></i></span>：
                <input type="password" placeholder="请确认密码">
            </div>
            <div class="tianxie">
                <span class="biaoqiantext">性别 <i></i></span>：
                <el-radio v-model="radio" label="1">男</el-radio>
                <el-radio v-model="radio" label="2">女</el-radio>
            </div>
            <div class="tianxie">
                <span class="biaoqiantext">出生日期 <i></i></span>：
                <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择日期">
                </el-date-picker>
            </div>
            <div class="tianxie">
                <span class="biaoqiantext">所属地区 <i></i></span>：
                
            </div>
            <div style="margin: 20px 0">
                <el-button type="primary" @click="registerUser">注册</el-button>
            </div>
        </div>

    </div>
</template>

<script>
    import {saveRegisterUser} from '../../http/api';
    export default {
        data(){
            return{
                radio: '1',
                value1:'',
                registerUserInfo: {
                    token: '',
                    userName: ''
                }
            }
        },
        methods: {
            registerUser(){

            }
        }
    }
</script>

<style lang="scss">
    .zhuce{
        width: 100%;
    }
    .zhuce_top{
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
    }
    .zhuce-content{
        width: 94%;
        padding: 20px 3%;
        background: #fff;
        .tianxie{
            width: 100%;
            display: flex;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid #eee;
            justify-content: flex-start;
            input{
                border: 0;
                width: 70%;
            }
            .biaoqiantext{
                text-align: justify;
                position: relative;
                top: 8px;
                display: inline-block;
                width: 80px;
            }
            .biaoqiantext i{
                display:inline-block;
                /*padding-left: 100%;*/
                width:100%;
            }
        }
    }
</style>
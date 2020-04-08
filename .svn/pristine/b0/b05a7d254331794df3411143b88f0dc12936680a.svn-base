<template>
    <div  class="wangjiyima">
        <div class="publice_top">
            <div class="p_top_left">
                <img src="../../assets/image/u896.png" alt="">
                “智慧司法”网络平台
            </div>
<!--            <div class="p_top_right">-->
<!--                <div @click="zhanshi(6)">-->
<!--                    <img src="../../assets/image/u50353.png" alt="">-->
<!--                </div>-->
<!--                <div class="name_p">-->
<!--                    <div>用户名54654</div>-->
<!--                    <div>退出</div>-->
<!--                </div>-->
<!--            </div>-->
        </div>
        <div class="zhaohuimima">找回密码</div>
        <div class="zhaohuicontent">
            <div class="flex" style="border-bottom: 1px solid #eee;">
                <span class="text_betten">登陆账号<i></i></span><span class="name_span" >*</span>
                <el-input v-model="forget.loginName" style="width: 288px;" placeholder="请输入内容"></el-input>
            </div>
            <div class="flex" style="border-bottom: 1px solid #eee;">
                <span class="text_betten">手机号码<i></i></span><span class="name_span" >*</span>
                <el-input v-model="forget.phoneNum" style="width: 288px;" placeholder="请输入内容"></el-input>
            </div>
            <div class="flex" style="border-bottom: 1px solid #eee;">
                <span class="text_betten">验证码<i></i></span><span class="name_span" >*</span>
                <el-input v-model="forget.validateCode" style="width: 288px;" placeholder="请输入内容"></el-input>
                <el-button>点击获取</el-button>
            </div>
            <div style="margin-top: 20px">
                <el-button @click="next">下一步</el-button>
            </div>
        </div>
    </div>
</template>

<script>
	import {forget_pass} from '../../http/api.js'
    export default {
        name: "wangjimima",
        data(){
            return{
				forget:{
					"token":sessionStorage.getItem("token"),                //类型：String  可有字段  备注：token 用户身份标识
					"loginName":"",                //类型：String  必有字段  备注：登录名
					"phoneNum":"",                //类型：String  必有字段  备注：登录手机号
					"validateCode":""                //类型：String  必有字段  备注：短信验证码
				}
            }
        },
		methods:{
			next(){
				forget_pass(this.forget).then(res=>{
					
				})
			}
			
		}
    }
</script>

<style lang="scss">
    .wangjiyima{
        width: 100vw;

    }
    .zhaohuimima{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f7f7f7;
    }
    .zhaohuicontent{
        width: 1200px;
        margin: 20px auto;
        input{
            border: 0;
        }
    }
</style>
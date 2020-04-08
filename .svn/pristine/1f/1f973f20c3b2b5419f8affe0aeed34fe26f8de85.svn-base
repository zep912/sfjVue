<template>
    <div class="zixun_pingjia">
        <div class="zixun_pingjiatop">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>个人中心</el-breadcrumb-item>
                <el-breadcrumb-item>我的咨询</el-breadcrumb-item>
                <el-breadcrumb-item>电信扎啤那将军拒绝看到女家</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="zixun_content">
            <div class="law_shenpi">
                <div>
                    <el-steps :active="2" align-center>
                        <el-step v-for="{liucheng,index} in data.flowAxis" :key="index" :title="liucheng.taskName" :description="liucheng.disposeName"></el-step>
                    </el-steps>
                </div>
                <div class="shenpi_create">
                    <div class="shenpi_one">
                        <div class="tab1">针对性咨询</div>
                    </div>
                    <div class="shenheone_text">
                        <div>
                            <div class="flex">
                                <span class="text_betten">标题<i></i></span>： {{data.consultInfo.questionTitle}}
                            </div>
                            <div class="flex">
                                <span class="text_betten">问题类型<i></i></span>： {{data.consultInfo.questionType}}
                            </div>
                            <div class="flex">
                                <span class="text_betten">问题描述<i></i></span>：<textarea name="" id="" v-model="data.consultInfo.questionDesc" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <div class="text_aa">
                            <div>
                                <div class="flex">
                                    <span class="text_betten">提问者<i></i></span>： 丁月红
                                </div>
                                <div class="flex">
                                    <span class="text_betten">手机号码<i></i></span>： {{data.consultInfo.personPhone}}
                                </div>
                                <div class="flex">
                                    <span class="text_betten">照片<i></i></span>： <img v-for="(img,i) in data.consultInfo.imgList" :src="img" alt="">
                                </div>
                            </div>
                            <div>
                                <div class="flex">
                                    <span class="text_betten">手机号码<i></i></span>：46545646546546565456
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shenpi_create">
                    <div class="shenpi_one">
                        <div class="tab1">律师确认</div>
                        <div class="tab1_right">
                            <span>超时：{{data.consultAnswer.timeStatus}}</span>
                            <img src="../../../assets/image/u552.png" alt="">
                            <img src="../../../assets/image/u554.png" alt="">
                        </div>
                    </div>
                    <div class="shenheone_text">
                        <div>
                            <div class="flex">
                                <span class="text_betten">确认结果<i></i></span>：同意
                            </div>
                            <div class="flex">
                                <span class="text_betten">答复方式<i></i></span>：即时答复
                            </div>
                            <div class="flex">

                                <span class="text_betten">律师解答<i></i></span><span style="color: #ff0000;font-size: 30px;">*</span>
                                <textarea name="" id="" value="*******************" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="shenpi_create">
                    <div class="shenpi_one">
                        <div class="tab1">咨询沟通</div>
                        <div class="tab1_right">
                            <span>超时：59分钟/23.9小时/1.9天</span>
                            <img src="../../../assets/image/u552.png" alt="">
                            <img src="../../../assets/image/u554.png" alt="">
                        </div>
                    </div>
                    <div class="shenheone_text">
                        <div>
                            <div class="flex" v-for="(xiaoxi,p) in data.timeStatus" :key="p">
                                <span class="text_betten">{{xiaoxi.msgSource==1?'律师回复':'我的追问'}}<i></i></span>：<span v-if="xiaoxi.msgType==1">{{xiaoxi.msgContent}}</span> <audio v-if="xiaoxi.msgType==2" :src="xiaoxi.voiceUrl"></audio>
                            </div>
                            <!-- <div class="flex">
                                <span class="text_betten">律师回复<i></i></span>：即时答复
                            </div>
                            <div class="flex">
                                <span class="text_betten">我的追问<i></i></span>：即时答复
                            </div>
                            <div class="flex">
                                <span class="text_betten">律师回复<i></i></span>：即时答复
                            </div> -->
                        </div>
                    </div>

                </div>
                <div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
                    <el-button type="success">追问律师</el-button>
                    <el-button type="primary">已解答</el-button>
                    <el-button>取消</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import {chaxunxaingqings} from '../../../http/api.js'
    export default {
        name: "jishidafu",
		data(){
			return{
				data:{}
			}
		},
		created() {
			chaxunxaingqings({
				"token": sessionStorage.getItem("token"),             //类型：String  必有字段  备注：token 用户身份标识
				"consultId":this.$route.query.id                //类型：String  必有字段  备注：咨询ID
			}).then(res=>{
				this.data = res.content
			})
		}
    }
</script>

<style lang="scss">
    .zixun_pingjia{
        width: 100%;
    }
    .zixun_pingjiatop{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
    }
    .zixun_content{
        width: 100%;
        background: #fff;
    }
    .law_shenpi{
        width: 94%;
        padding: 20px 3%;
    }
    .shenpi_create{
        width: 100%;
    }
    .tab1{
        width: 200px;
        height: 35px;
        border-radius:10px 10px 0 0 ;
        background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }
    .shenpi_one{
        border-bottom: 3px solid #1a7cc3;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .flex{
        display: flex;
        align-items: center;
    }
    .flex img{
        width: 100px;
    }
    .flex .el-table th{
        background: #1884c7 !important;
        color: #fff;
    }
    .tab1_right{
        display: flex;
        align-items: center;
        color: #FF6034;
    }
    .tab1_right img{
        width: 35px;
        height: 30px;
        margin-left: 20px;
    }
    .tab1_right img:nth-child(2){
        width: 40px;
    }
    .flex textarea{
        width: 80%;
        height: 150px;
        padding: 10px;
        resize:none;
    }
</style>
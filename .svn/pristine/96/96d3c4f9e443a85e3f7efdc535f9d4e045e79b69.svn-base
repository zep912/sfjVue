<template>
    <div class="p_conright">
        <div class="tightp_top">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/lvshi' }">职责</el-breadcrumb-item>
                <!-- <el-breadcrumb-item :to="{path:'zaixianzixun'}">{{data.consultInfo.consultTypeDesc}}</el-breadcrumb-item> -->
                <el-breadcrumb-item :to="{path:'zaixianzixun'}">咨询</el-breadcrumb-item>
                <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="law_shenpi">
            <div>
                <el-steps :active="2" align-center>
                    <el-step v-for="(daohang,i) in data.flowAxis" :key="i" :title="daohang.taskName" :description="daohang.disposeName"></el-step>
                    <!-- <el-step title="律师确认" description="这是一段很长很长很长的描述性文字"></el-step> -->
                </el-steps>
            </div>
            <div class="shenpi_create">
                <div class="shenpi_one">
                    <div class="tab1">{{data.consultInfo.consultTypeDesc}}</div>
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
                            <span class="text_betten">问题描述<i></i></span>：<textarea name="" id="" disabled="disabled" v-model="data.consultInfo.questionDesc" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div class="text_aa">
                        <div>
                            <div class="flex">
                                <span class="text_betten">提问者<i></i></span>： 丁月红
                            </div>
                            <div class="flex" v-if="data.consultInfo.consultTypeDesc!='免费咨询'">
                                <span class="text_betten">意向律师<i></i></span>： 
                            </div>
                            <div class="flex">
                                <span class="text_betten">照片<i></i></span>： <img :src="item" v-for="(item,index) in data.consultInfo.imgList" :key="index" alt="">
                            </div>
                        </div>
                        <div>
                            <div class="flex">
                                <span class="text_betten">手机号码<i></i></span>：{{data.consultInfo.personPhone}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shenpi_create">
                <div class="shenpi_one">
                    <div class="tab1">律师响应</div>
                    <div class="tab1_right">
                        <span>{{data.consultAnswer.timeStatus}}</span>
                        <img src="../../../assets/image/u552.png" alt="">
                        <img src="../../../assets/image/u554.png" alt="">
                    </div>
                </div>
                <div class="shenheone_text">
                    <div>
                        <div class="flex">
                            <span class="text_betten">咨询审核<i></i></span><span style="color: #ff0000;font-size: 30px;">*</span>
                            <el-radio v-model="radio" label="1">同意</el-radio>
                            <el-radio v-model="radio" label="2">不同意</el-radio>
                        </div>
                        <div class="flex">
                            <span class="text_betten">律师解答<i></i></span><span style="color: #ff0000;font-size: 30px;">*</span>
                            <textarea name="" readonly="readonly" id="" v-model="data.consultAnswer.answerContent" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </div>

            </div>
            <div class="shenpi_create">
                <div class="shenpi_one">
                    <div class="tab1">问题解答</div>
                   <!-- <div class="tab1_right">
                        <span></span>
                        <img src="../../../assets/image/u552.png" alt="">
                        <img src="../../../assets/image/u554.png" alt="">
                    </div> -->
                </div>
                <div class="shenheone_text">
                    <div>
                        <div class="flex">
                            <span class="text_betten">确认结果<i></i></span><span style="color: #ff0000;font-size: 30px;">*</span>
                            <el-radio v-model="radio1" label="1">同意</el-radio>
                            <el-radio v-model="radio1" label="2">不同意</el-radio>
                        </div>
                        <div class="flex">
                            <span class="text_betten">律师解答<i></i></span><span style="color: #ff0000;font-size: 30px;">*</span>
                            <textarea name="" id="" v-model="law_hifux"  cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </div>

            </div>
            <div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
                <el-button type="primary" @click="lawhifu">回复提问</el-button>
            </div>
        </div>
    </div>

</template>

<script>
	import {chaxunxaingqings,law_huifu} from '../../../http/api.js'
    export default {
        data() {
            return {
                radio: '1',
				radio1:'1',
				title:"",
				data:"",
				law_hifux:'',
                text:'我爸在农村给别人种地现在欠我们五万元，现在他家还有好多人要账，但是只有我家是工资，他们都是买化肥，给被人担保欠的钱，现在粮食省的不够分的我家想做诉前财产保全，或者财产保全法院都不允许，说不够分的，粮被法院封了，现在这个我家只能诉讼了，给我们出了一个工资欠条，这个诉讼了有没有优先权啊'
            }
        },
		created() {
			console.log(this.$route.query)
			this.title = this.$route.query.name
			chaxunxaingqings({
				"token": sessionStorage.getItem("token"), //类型：String  必有字段  备注：token 用户身份标识
				 "consultId":this.$route.query.id
			}).then(res=>{
				if (res) {
					this.data = res.content
					this.radio = res.content.consultAnswer.approveFlag
				}
			})
		},
		methods:{
			lawhifu(){
				law_huifu({
					"token":sessionStorage.getItem("token"),               //类型：String  必有字段  备注：用户身份标识
					"consultId":this.$route.query.id,                //类型：String  必有字段  备注：咨询ID
					"msgContent":this.law_hifux,                //类型：String  必有字段  备注：回复内容
					"msgSource":"1",                //类型：String  必有字段  备注：埴写固定值1
					"msgType":"1",                //类型：String  必有字段  备注：消息类型 1：文本；2：语音
					"fileId":"87e6f8ca35cb4286a662838f68c7a409"                //类型：String  可有字段  备注：语音文件ID
				}).then(res=>{
					if(res.code==200){
						this.$message({
						  message: '回复成功',
						  type: 'success'
						});
						setTimeout(()=> {
							this.$router.go(0)
						}, 1000);
					}
				})
			}
		}
    }
</script>

<style lang="scss">
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

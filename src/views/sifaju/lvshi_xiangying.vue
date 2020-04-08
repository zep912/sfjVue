<template>
	<div class="zaixianzixun">
		<div class="zaixian_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item :to="{path:'zaixianyuyue'}">在线预约</el-breadcrumb-item>
			  <el-breadcrumb-item>法律援助预约</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="qingjia_neirong">
			<div class="law_shenpi">
				<div>
					<el-steps :active="2" align-center>
					  <el-step :title="item.taskName" :description="item.disposeName" v-for="(item,index) in flowAxis"></el-step>
					</el-steps>
				</div>
				<div class="shenpi_create">
					<div class="shenpi_one">
						<div class="tab1">法律援助预约</div>
					</div>
					<div class="shenheone_text">
						<div class="text_aa">
							<div>
								<div class="flex">
									<span class="text_betten">申请人<i></i></span>： {{applyData.applyName}}
								</div>
							</div>
							<div>
								<div class="flex">
									<span class="text_betten">身份证号<i></i></span>：{{applyData.applyPhone}}
								</div>
							</div>
						</div>
						<div class="flex">
							<span class="text_betten">住所地<i></i></span>： {{applyData.applyAddress}}
						</div>
						<div class="text_aa">
							<div>
								<div class="flex">
									<span class="text_betten">手机号码<i></i></span>：{{applyData.applyPhone}}
								</div>
								<div class="flex">
									<span class="text_betten">事项类别<i></i></span>：{{applyData.matterType}}
								</div>
							</div>
							<div>
								<div class="flex">
									<span class="text_betten">预约时间<i></i></span>：{{applyData.appointmentDate}} {{applyData.appointmentTime}}
								</div>
								<div class="flex">
									<span class="text_betten">身份类别<i></i></span>：{{applyData.identityType}}
								</div>
							</div>
						</div>
						<div>
							<div class="flex">
								<span class="text_betten">案情及申请理由<i></i></span>：
								<textarea name="" id="" cols="30" rows="10" v-model="applyData.applyReason"></textarea>
							</div>
						</div>
						<div class="text_aa" style="margin-top: 20px;">
							<div>
								<div class="flex">
									<span>证明材料<i></i></span>： <img src="../../assets/image/u3264.png" alt="">
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="shenpi_create">
					<div class="shenpi_one">
						<div class="tab1">法律援助响应</div>
					</div>
					<div class="shenheone_text">
						<div>
							<div class="text_aa">
								<div>
									<div class="flex">
										<span class="text_betten">预约结果<i></i></span>
										<span style="color: #ff0000;font-size: 30px;display:inline-block;margin:0 15px;">*</span> 
										<el-input v-model="input" placeholder="请输入内容"></el-input>
									</div>
								</div>
								<div>
									<div class="flex">
										<span class="text_betten">预约时间<i></i></span>
										<span style="color: #ff0000;font-size: 30px;display:inline-block;margin:0 15px;">*</span>
										<el-date-picker
										  v-model="value1"
										  type="datetime"
										  placeholder="选择日期时间">
										</el-date-picker>
									</div>
								</div>
							</div>
							<div class="text_aa" style="margin: 20px 0;">
								<div>
									<div class="flex">
										<span class="text_betten">指派律师<i></i></span>
										<span style="color: #ff0000;font-size: 30px;display:inline-block;margin:0 15px;">*</span>
										 <el-select v-model="value" placeholder="请选择">
										    <el-option
										      v-for="item in options"
										      :key="item.value"
										      :label="item.label"
										      :value="item.value">
										    </el-option>
										  </el-select>
									</div>
								</div>
								<div>
									<div class="flex">
										<span class="text_betten">联系电话<i></i></span>
										<span style="color: #ff0000;font-size: 30px;display:inline-block;margin:0 15px;">*</span>
										<el-input placeholder="请输入联系方式" v-model="submitApplyAnswer.contactNum"></el-input>
									</div>
								</div>
							</div>
							<div class="flex">
								<span class="text_betten">意见建议<i></i></span><span style="color: #ff0000;font-size: 30px;display:inline-block;margin:0 15px;">*</span>
								<textarea name="" id="" v-model="submitApplyAnswer.answerContent" cols="30" rows="10"></textarea>
							</div>
						</div>
					</div>
					
				</div>
				<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
					  <el-button type="primary" @click="submitApplyAnswer">提交</el-button>
					<el-button>取消</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {getLawAidDetail,saveApplyAnswer} from '../../http/api';
	export default {
		data() {
			return {
				input:'',
				value1:'',
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value: '',
				getInfo:{
					token:'',                //类型：String  必有字段  备注：token 用户身份标识
    				applyId:''                //类型：String  必有字段  备注：预约ID
				},
				flowAxis: [],
				applyData: {},
				answerList: [],
				submitApplyAnswer: {
					token:'',                //类型：String  必有字段  备注：用户身份标识
					instanceId:'',                //类型：String  必有字段  备注：流程ID
					taskId:'',                //类型：String  必有字段  备注：任务ID
					applyId:'',                //类型：String  必有字段  备注：预约ID
					approveFlag:'',                //类型：String  必有字段  备注：审核结果 1：同意(成功)；2：不同意(失败)；
					assignTime:'',                //类型：String  必有字段  备注：预约时间(调解时间)
					assignUserId:'',                //类型：String  必有字段  备注：指派律师或调解员ID
					contactNum:'',                //类型：String  必有字段  备注：联系电话
					answerContent:''                //类型：Stri有字段  备注：意见建议
				}
			}
		},
		mounted() {
			this.getLawAidInfo();
		},
		methods:{
			getLawAidInfo(){
				this.getInfo.token = this.token;
				this.getInfo.applyId = this.$route.query.itemId;
				getLawAidDetail(this.getInfo).then(success=>{
					this.flowAxis = success.content.flowAxis;
					this.applyData = success.content.applyData;
					this.answerList = success.content.answerList;
				})
			},
			submitApplyAnswer(){
				alert('提交');
				this.submitApplyAnswer.token = this.token;
				this.submitApplyAnswer.instanceId = this.applyData.instanceId;
				this.submitApplyAnswer.taskId = this.answerList[0].taskId;
				this.submitApplyAnswer.applyId = this.$route.query.itemId;
				saveApplyAnswer(this.submitApplyAnswer).then(success=>{
					console.log('111111111111111111111111111111111');
					console.log(success);
				})
			}
		}
	}
</script>

<style lang="scss">
	.zaixianzixun{
		width: 100%;
		height: 100%;
	}
	.zaixian_top{
		width: 98%;
		height: 70px;
		padding-left: 2%;
		border-bottom: 1px solid #eee;
		display: flex;
		align-items: center;
	}
	.zixun_content{
		width: 100%;
	}
	.zixun_tab{
		width: 94%;
		padding: 10px 3%;
		background: #f2f2f2;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.zixun_tab>div{
		width: 120px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.zixun_liebiao{
		width: 96%;
		padding: 20px 2%;
	}
	.liebiao_top{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.liebiao_topzuo{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 40%;
	}
	.liebiao_sousuo{
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.liebiao_sousuo input{
		width: 160px;
		height: 38px;
		padding-left: 10px;
		font-size: 14px;
		border-radius: 5px 0 0 5px;
		border: 1px solid #eee;
	}
	.liebiao_search{
		width: 80px;
		height: 40px;
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0 5px 5px 0;
	}
	.zixun_fenye{
		width: 100%;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.zixun_active{
		color: #068FD4;
		position: relative;
		font-weight: 600;
	}
	.zixun_active:after{
		width: 100px;
		height: 2px;
		background: #068FD4;
		position: absolute;top: 34px;
		left: 10px;
		content: '';
	}
	.biaoge{
		margin-top: 20px;
	}
	.qingjia_neirong{
		width: 96%;
		padding: 20px 2%;
	}
	.shoujihoama1{
		width: 89.2%;
		display: flex;
		align-items: center;
		margin-top: 20px;
		justify-content: space-between;
		.flex{
			width: 45%;
		}
	}
	.yiwen{
		width: 30px !important;
		height: 30px !important;
		position: absolute;
		right: 10%;
	}
	.tankuang{
		width: 100vw;
		height: 100vh;
		background: rgba(0,0,0,0.5);
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		.gengduo_caozuo{
			width: 260px;
		
			background: #fff;
			border-radius: 5px;
			overflow: hidden;
			.gengduo_toubu{
				width: 100%;
				height: 40px;
				background:-webkit-linear-gradient(left,#0fa3d5, #1b79c2);
				color: #fff;
				font-weight: 600;
				font-size: 18px;
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
				img{
					width: 25px;
					height: 25px;
					position: absolute;
					top: 4px;
					right: 10px;
				}
			}
			.qignjiazd{
				width: 96%;
				padding: 20px 2%;
				div:nth-child(1){
					font-size: 20px;
					color: #0077AA;
					margin-bottom: 15px;
					text-align: center;
				}
				div{
					line-height: 22px;
					text-align: left;
					font-size: 14px;
				}
			}
			.gengduo_neirong{
				width: 56%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-wrap: wrap;
				padding:20px 22% ;
				a{
					display: inline-block;
					width: 45%;
					height: 60px;
					margin-bottom: 20px;
					display: inline-block;
					div{
						width: 100%;
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 5px;
						background:-webkit-linear-gradient(left,#0fa3d5, #1b79c2);
						color: #fff;
					}
				}
				div:nth-child(3){
					background: -webkit-linear-gradient(left, #d50f8f, #991bc2);
				}
				div:nth-child(4){
					background: -webkit-linear-gradient(left, #0fd531, #bfc21b);
				}
			}
		}
	}
</style>

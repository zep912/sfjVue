<template>
	<div class="zaixianzixun">
		<div class="zaixian_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item :to="{path:'zaixianyuyue'}">在线预约</el-breadcrumb-item>
			  <el-breadcrumb-item>{{titles}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="qingjia_neirong">
			<div class="law_shenpi">
				<div>
					<el-steps :active="2" align-center finish-status="success">
					  	<el-step :title="items.taskName" :description="items.disposeName" v-for="(items,index) in data.flowAxis" :key="index"></el-step>
					</el-steps>
				</div>
				<div class="shenpi_create">
					<div class="shenpi_one">
						<div class="tab1">人民调解预约</div>
					</div>
					<div class="shenheone_text">
						<div class="text_aa">
							<div>
								<div class="flex">
									<span class="text_betten">申请人<i></i></span>： {{data.applyData.applyName}}
								</div>
							</div>
							<div>
								<div class="flex">
									<span class="text_betten">手机号码<i></i></span>：{{data.applyData.applyPhone}}
								</div>
							</div>
						</div>
						<div class="flex">
							<span class="text_betten">住址<i></i></span>： {{data.applyData.applyAddress}}
						</div>
						<div class="text_aa">
							<div>
								<div class="flex">
									<span class="text_betten">被申请人<i></i></span>：{{data.applyData.appelleeName}}
								</div>
							</div>
							<div>
								<div class="flex">
									<span class="text_betten">联系电话<i></i></span>：{{data.applyData.appelleePhone}}
								</div>
							</div>
						</div>
						<div class="flex">
							<span class="text_betten">纠纷类型<i></i></span>：{{data.applyData.disputeType}}
						</div>
						<div>
							<div class="flex">
								<span class="text_betten">纠纷情况<i></i></span>：<textarea cols="30" rows="10" readOnly="true">{{data.applyData.disputeDetail}}</textarea>
							</div>
						</div>
						<div>
							<div class="flex">
								<span>预约调委会<i></i></span>： 
								<div class="yuyue_neirongs">
									<div class="yueyuweihui_content">
										<img :src="data.applyData.lawOrg.orgImg" alt="">
										<div class="youxetiaojie_text">
											<div>{{data.applyData.lawOrg.orgName}}</div>
											<div>联系电话：<span>{{data.applyData.lawOrg.orgTelephone}}</span></div>
											<div>联系地址：{{data.applyData.lawOrg.orgAddress}}</div>
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="shenpi_create">
					<div class="shenpi_one">
						<div class="tab1">调委会响应</div>
					</div>
					<div class="shenheone_text" v-if="timeTaskkey == 'zhipaitiaoweihui'">
						<div>
							<div class="text_aa">
								<div>
									<div class="flex">
										<span class="text_betten">响应结果<i></i></span><span style="color: #ff0000;font-size: 30px;display:inline-block;margin:0 15px;">*</span>
										<el-radio v-model="radio" label="1">同意</el-radio>
										<el-radio v-model="radio" label="2">不同意</el-radio>
									</div>
								</div>
								<div v-if="radio == '1'">
									<div class="flex">
										<span >指派委员会<i></i></span><span style="color: #ff0000;font-size: 30px;display:inline-block;margin:0 15px;">*</span>
										<el-select v-model="item_checked" placeholder="请选择">
										    <el-option
										      v-for="(item,index) in list"
										      :key="item.orgName"
										      :label="item.orgName"
										      :value="item.lawOrgId" style="width: 400px">
										    </el-option>
										  </el-select>
									</div>
								</div>
							</div>
							<div class="flex" style="margin-top: 20px;">
								<span class="text_betten">意见建议<i></i></span><span style="color: #ff0000;font-size: 30px;display:inline-block;margin:0 15px;">*</span>
								<textarea name="" id="" value="*******************" cols="30" rows="10"></textarea>
							</div>
						</div>
					</div>
					
				</div>
				<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
					  <el-button type="primary" @click="submit_ApplyAnswer">提交</el-button>
					<el-button>取消</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {getMediateDetail,saveApplyAnswer,getMediateCommitteeList} from '../../http/api';
	export default {
	  data() {
	    return {
			input:'',
			value1:'',
			options: [],
			item_checked: '',
			radio:'1',
			text:'',   //纠纷情况
			data: {},
			titles:'',
			//获取详情
			responseInfo:{
				token:sessionStorage.getItem("token"), 
				applyId: ''
			},
			list:[],    //调委会查询列表
			timeTaskkey:'',    //调委会流程节点判断
	    }
	  },
	  mounted() {
		  	this.getMediateInfo();
		  	this.getMediateCommitteeList();
	  },
	  methods:{
		  	getMediateInfo(){
				this.responseInfo.token = this.token;
				this.responseInfo.applyId = this.$route.query.itemId;
				getMediateDetail(this.responseInfo).then(success=>{
					if(success.code == '200'){
						this.data = success.content;
						console.log('1111111111111111111111');
						console.log(this.data);
						console.log('111111111111111111111');
						if(this.data.answerList == ''){
							return false;
						}else{
							if(this.data.answerList[0].approveFlag=='通过'){
								this.radio = '1'
							}else{
								this.radio = '2'
							}
						}
						for (let i=0; i<this.data.flowAxis.length;i++){
							console.log(this.data.flowAxis.length);
							if(this.data.flowAxis[i].taskKey == 'zhipaitiaoweihui'){
                                  this.timeTaskkey = 'zhipaitiaoweihui'
							}else if(this.data.flowAxis[i].taskKey == 'tiaoweihuixiangying'){
								this.timeTaskkey = 'tiaoweihuixiangying'
							}
						}
						console.log('5555555555555555555555555');
						console.log(this.timeTaskkey);
						this.options = this.data.flowAxis;
						this.titles = this.options[0].taskContent.disputeDetail;
					}
				})
		  	},
		    getMediateCommitteeList(){
		  		console.log('6666666666666');
				getMediateCommitteeList({token:this.token}).then(success=>{
					if(success.code == '200'){
						console.log('2222222222222222222222');
						this.list = success.content.dataList;
						console.log(this.list);
					    console.log('33333333333333333333');
					}
				})
			},
			submit_ApplyAnswer(){
				saveApplyAnswer({token:this.token}).then(success=>{
					if(success.code == '200'){
						this.$notify({ message: '提交成功',type: 'success'})
					}
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
	.yuyue_neirongs{
		width: 100%;
		border: 1px solid #eee;
		text-align: left;
		max-width: 25%;
		margin-right: 20px;
		margin-top: 20px;
	}
	.yueyuweihui_content{
		display: flex;
		align-items: flex-start;
		padding: 10px 2%;
		width: 96%;
		
		img{
			width: 80px;
			height: 120px;
			margin-right: 20px;
		}
		.youxetiaojie_text{
			div:nth-child(1){
				font-size: 20px;
				color: #0077AA;
				font-weight: 600;
				margin-bottom: 10px;
			}
			div:nth-child(2),div:nth-child(3){
				font-size: 15px;
				color: #333;
				margin-top: 10px;
				line-height: 23px;
				span{
					color: #0077AA;
				}
			}
		}
	}
	.el-input--suffix .el-input__inner{
		width: 400px !important;
	}
</style>

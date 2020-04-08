<template>
	<div class="lvshixiang">
		<div class="lvshitop">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/lawyer_list' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item :to="{path:'/lvshilist'}">律师信息</el-breadcrumb-item>
				<el-breadcrumb-item>活动列表</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div>
			<div class="lvshixinxi">
				<div class="lvshitops"></div>
				<div class="lvshigeren">
					<div>
						<div class="imgzuo">
							<img :src="lawyerDetail.baseInfo.photoUrl" alt="">
						</div>
						<div class="lvshi_ziliao">
							<div>
								{{lawyerDetail.baseInfo.lawyerName}}律师 <span>(执业{{lawyerDetail.baseInfo.operationYears}})</span>
							</div>
							<div>
								电话：{{lawyerDetail.baseInfo.lawyerPhone}}
							</div>
							<div>
								擅长专业：{{lawyerDetail.baseInfo.adeptSpecialtys}}
							</div>
						</div>
					</div>
					<div>
						<div>
							<div>咨询量</div>
							<div style="margin-top: 15px;">
								<el-progress type="circle" :percentage="lawyerDetail.evaluationResult.consultAmount.substring(0,lawyerDetail.evaluationResult.consultAmount.length-1)"
								width='80'></el-progress>
							</div>
						</div>
						<div>
							<div>满意度</div>
							<div style="margin-top: 15px;">
								<el-progress type="circle" :percentage="lawyerDetail.evaluationResult.satisfaction.substring(0,lawyerDetail.evaluationResult.satisfaction.length-1)"
								width='80' status="warning"></el-progress>
							</div>
						</div>
						<div>
							<div>接案率</div>
							<div style="margin-top: 15px;">
								<el-progress type="circle" :percentage="lawyerDetail.evaluationResult.acceptRate.substring(0,lawyerDetail.evaluationResult.acceptRate.length-1)"
								width='80'></el-progress>
							</div>
						</div>
						<div>
							<div>结案率</div>
							<div style="margin-top: 15px;">
								<el-progress type="circle" :percentage="lawyerDetail.evaluationResult.settleRate.substring(0,lawyerDetail.evaluationResult.settleRate.length-1)"
								width='80'></el-progress>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="lvshi_jilv">
			<div class="lvshi_jiben">
				<div :class="zhanshi==1?'tabactive':''" @click="zhanshic(1)"> 基本信息</div>
				<div :class="zhanshi==2?'tabactive':''" @click="zhanshic(2)">服务记录</div>
			</div>
			<div class="fenge_jianbian"></div>
			<div class="xinxi_xiangiqng">
				<div class="shenheone_text" v-if="zhanshi==1">
					<div class="text_aa">
						<div>
							<div class="flex">
								<span class="text_betten">姓名<i></i></span>： {{lawyerDetail.baseInfo.lawyerName}}
							</div>
							<div class="flex">
								<span class="text_betten">性别<i></i></span>： {{lawyerDetail.baseInfo.sexDesc}}
							</div>
							<div class="flex">
								<span class="text_betten">居住地址<i></i></span>： {{lawyerDetail.baseInfo.fullAreaAddres}}
							</div>
							<div class="flex">
								<span class="text_betten">政治面貌<i></i></span>： {{lawyerDetail.baseInfo.politicsStatusDesc}}
							</div>
							<div class="flex">
								<span class="text_betten">学历<i></i></span>： {{lawyerDetail.baseInfo.educationCertificationDesc}}
							</div>
							<div class="flex">
								<span class="text_betten">专业<i></i></span>： {{lawyerDetail.baseInfo.major}}
							</div>
							<div class="flex">
								<span class="text_betten">手机号码<i></i></span>： {{lawyerDetail.baseInfo.lawyerPhone}}
							</div>
							<div class="flex">
								<span>资格证类型<i></i></span>： {{lawyerDetail.baseInfo.certificationTypeDesc}}
							</div>

						</div>
						<div>
							<div class="flex">
								<span class="text_betten">执业证号<i></i></span>：{{lawyerDetail.baseInfo.credentialCode}}
							</div>
							<div class="flex">
								<span class="text_betten">执业类别<i></i></span>： {{lawyerDetail.baseInfo.professionTypeDesc}}
							</div>
							<div class="flex">
								<span class="text_betten">民族<i></i></span>：{{lawyerDetail.baseInfo.nationCodeDesc}}
							</div>
							<div class="flex">
								<span class="text_betten">学位<i></i></span>： {{lawyerDetail.baseInfo.degreeDesc}}
							</div>
							<div class="flex">
								<span class="text_betten">人事档案<i></i></span>：{{lawyerDetail.baseInfo.lawyerRecord}}
							</div>
						</div>
					</div>
					<div style="margin-top: 30px;">
						<div class="flex">
							<span class="text_betten">诚信信息<i></i></span>：
							<el-table :data="lawyerDetail.faithList" border style="width: 100%">
								<el-table-column prop="awardName" label="授予机构">
								</el-table-column>
								<el-table-column prop="awardDate" label="授予日期">
								</el-table-column>
								<el-table-column prop="awardContent" label="授予内容">
								</el-table-column>
								<el-table-column prop="commendLevel" label="表彰级别">
								</el-table-column>
							</el-table>
						</div>
					</div>
					<div>
						<div class="flex">
							<span class="text_betten">失信信息<i></i></span>： 知识产权、房产纠纷
						</div>
					</div>
				</div>
				<div v-if="zhanshi==2">
					<el-table :data="serverList" border style="width: 100%">
						<el-table-column prop="consultType" label="服务类型"></el-table-column>
						<el-table-column prop="consultPhone" label="服务人员"></el-table-column>
						<el-table-column prop="createTime" label="时间"></el-table-column>
						<el-table-column prop="consultStatus" label="状态"></el-table-column>
						<el-table-column prop="satisfaction" label="满意度"></el-table-column>
						<el-table-column prop="evaResult" label="服务评价"></el-table-column>
					</el-table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {getValidLawyerInfo,getConsultByLawyer} from '../../http/api'
	export default {
		data() {
			return {
				radio: '1',
				zhanshi: 1,
				//获取律师列表所需信息
				lawyerContent: {
					token: sessionStorage.getItem("token"),
					areaRegionId: '',
					adeptSpecialty: '',
					keyWord: '',
					sortModel: '1',
					sortType: '1',
					pageSize: '10',
					pageNum: '1'
				},
				getLawyerDetail: {
					lawyer_id: this.$route.query.id,
					token: sessionStorage.getItem("token"),
				},
				lawyerDetail: {},
				//获取服务记录
				getServerDetail: {
					token: sessionStorage.getItem("token"),
					lawyerId: this.$route.query.id,
					pageSize: '10',
					pageNum: '1',
				},
				serverList:{}
			}
		},
		mounted() {
			this.valueUpdata('getLawyerDetail');
			this.valueUpdata('getServerDetail');
			this.init();
		},
		methods: {
			valueUpdata(dom){
				this[dom].lawyer_id = this.$route.query.id;
				this[dom].token = sessionStorage.getItem("token")
			},
			init() {
				getValidLawyerInfo(this.getLawyerDetail).then(success=>{
					this.lawyerDetail = success.content;
					console.log(this.lawyerDetail)
				})
				getConsultByLawyer(this.getServerDetail).then(success=>{
					this.serverList = success.content.dataList;
				})
			},
			zhanshic(e) {
				this.zhanshi = e;
			}
		},
	}
</script>

<style lang="scss">
	.lvshixiang {
		width: 100%;
	}

	.lvshixinxi {
		width: 92%;
		background: #fff;
		padding: 25px 4%;
		position: relative;
		margin: 20px 0;

		.lvshitops {
			width: 100%;
			height: 1px;
			position: absolute;
			top: 0;
			left: 0;
			background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
		}
		.el-table{
			td{
				text-align: center;
			}
			th {
				background: #1a7cc3 !important;
				color: #fff;
			}
		}
	}

	.lvshigeren {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.lvshigeren>div {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.imgzuo {
		width: 100px;
		height: 120px;
		background: #0da9d7;

		img {
			width: 100%;
			height: 100%;
		}
	}

	.lvshi_ziliao {
		width: 80%;
		margin-left: 20px;
		text-align: left;

		div {
			line-height: 30px;
		}

		div:nth-child(1) {
			font-size: 18px;
			color: #0da9d7;

			span {
				font-size: 14px;
				color: #333;
			}
		}

		div:nth-child(2) {
			font-size: 14px;

			span {
				color: #0da9d7;
			}
		}

		div:nth-child(3) {
			font-size: 14px;
		}
	}

	.lvshi_jilv {
		width: 100%;
		background: #fff;
		margin-top: 10px;
	}

	.lvshi_jiben {
		width: 100%;
		display: flex;
		align-items: center;

		div {
			width: 120px;
			height: 45px;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.tabactive {
			background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
			color: #fff;
		}
	}

	.fenge_jianbian {
		width: 100%;
		height: 1px;
		background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
	}

	.xinxi_xiangiqng {
		width: 94%;
		padding: 20px 3%;
	}

	.shenheone_text {
		width: 100%;
	}

	.shenheone_text .text_aa {
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;

		.flex {
			width: 100%;
		}
	}

	.text_aa>div {
		width: 50%;
	}

	.flex {
		display: flex;
		align-items: center;
	}

	.flex img {
		width: 100px;
	}

	.tab1_right {
		display: flex;
		align-items: center;
		color: #FF6034;
	}

	.tab1_right img {
		width: 35px;
		height: 30px;
		margin-left: 20px;
	}

	.tab1_right img:nth-child(2) {
		width: 40px;
	}

	.flex textarea {
		width: 80%;
		height: 150px;
		padding: 10px;
		resize: none;
	}
</style>

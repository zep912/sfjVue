<template>
	<div class="zaixianzixun">
		<div class="zaixian_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '/mana_law' }">律师管理</el-breadcrumb-item>
			  <el-breadcrumb-item>律师【{{lawyerName}}】</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="qingjia_neirong">
			<div class="law_shenpi">
				<div>
					<el-steps :active="2" align-center>
					  <el-step v-for="(item,index) in data.flowAxis" :key="index" :title="item.taskName" :description="item.disposeName"></el-step>
					</el-steps>
				</div>
				<div class="shenpi_create">
					<div class="shenpi_one">
						<div class="tab1">创建账号</div>
					</div>
					<div class="shenheone_text">
						<div class="text_aa">
							<div>
								<div class="flex">
									<span class="text_betten">姓名<i></i></span>： {{data.lawyerInfo.lawyerName}}
								</div>
								<div class="flex">
									<span class="text_betten">性别<i></i></span>： {{data.lawyerInfo.sexDesc}}
								</div>
								<div class="flex">
									<span class="text_betten">进所时间<i></i></span>： {{data.lawyerInfo.joinTime | dateFilter}}
								</div>
								<div class="flex">
									<span class="text_betten">人员类型<i></i></span>： {{data.lawyerInfo.roleTypeDesc}}
								</div>
								<div class="flex">
									<span class="text_betten">擅长专业<i></i></span>： {{data.lawyerInfo.adeptSpecialtys}}
								</div>
								<div class="flex">
									<span class="text_betten">照片<i></i></span>： <img :src="data.lawyerInfo.photoUrl" alt="">
								</div>
							</div>
							<div>
								<div class="flex">
									<span class="text_betten">执业证号<i></i></span>：{{data.lawyerInfo.credentialCode}}
								</div>
								<div class="flex">
									<span class="text_betten">执业类别<i></i></span>： {{data.lawyerInfo.professionTypeDesc}}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="shenpi_create">
					<div class="shenpi_one">
						<div class="tab1">律师申报</div>
						<div class="tab1_right">
							<span>超时：59分钟/23.9小时/1.9天</span>
							<img src="../../assets/image/u552.png" alt="">
							<img src="../../assets/image/u554.png" alt="">
						</div>
					</div>
					<div class="shenheone_text">
						<div class="text_aa">
							<div>
								<div class="flex">
									<span class="text_betten">姓名<i></i></span>： {{data.lawyerInfo.lawyerName}}
								</div>
								<div class="flex">
									<span class="text_betten">性别<i></i></span>： {{data.lawyerInfo.sexDesc}}
								</div>
								<div class="flex">
									<span class="text_betten">居住地址<i></i></span>： {{data.lawyerInfo.fullAreaAddress}}
								</div>
								<div class="flex">
									<span class="text_betten">政治面貌<i></i></span>： {{data.lawyerInfo.politicsStatusDesc}}
								</div>
								<div class="flex">
									<span class="text_betten">学历<i></i></span>： {{data.lawyerInfo.educationCertificationDesc}}
								</div>
								<div class="flex">
									<span class="text_betten">专业<i></i></span>： {{data.lawyerInfo.major}}
								</div>
								<div class="flex">
									<span class="text_betten">手机号码<i></i></span>： {{data.lawyerInfo.lawyerPhone}}
								</div>
								<div class="flex">
									<span class="text_betten" style="width: 80px;margin-left: -10px;">资格证类型<i></i></span>： {{data.lawyerInfo.certificationTypeDesc}}
								</div>
								<div class="flex">
									<span class="text_betten">首次执业<i></i></span>： {{data.lawyerInfo.firstOperation |dateFilter}}
								</div>
								<div class="flex">
									<span class="text_betten">执业机构<i></i></span>： {{data.lawyerInfo.orgName}}
								</div>
								<div class="flex">
									<span class="text_betten">人员类型<i></i></span>： <el-checkbox disabled v-model="checked">律所负责人</el-checkbox>
								</div>
							</div>
							<div>
								<div class="flex">
									<span class="text_betten">执业证号<i></i></span>：{{data.lawyerInfo.credentialCode}}
								</div>
								<div class="flex" style="margin-bottom:46px;">
									<span class="text_betten">出生日期<i></i></span>： {{data.lawyerInfo.birthday|dateFilter}}
							</div>
								<div class="flex">
									<span class="text_betten">民族<i></i></span>：{{data.lawyerInfo.nationCodeDesc}}
								</div>
								<div class="flex">
									<span class="text_betten">学位<i></i></span>： {{data.lawyerInfo.degreeDesc}}
								</div>
								<div class="flex">
									<span class="text_betten">人事档案<i></i></span>：{{data.lawyerInfo.lawyerRecord}}
								</div>
								<div class="flex">
									<span class="text_betten">执业类别<i></i></span>： {{data.lawyerInfo.professionTypeDesc}}
								</div>
								<div class="flex">
									<span class="text_betten">资格证号<i></i></span>： {{data.lawyerInfo.certificationCode}}
								</div>
								<div class="flex">
									<span class="text_betten">现职称<i></i></span>： {{data.lawyerInfo.professionTitleDesc}}
								</div>
								<div class="flex">
									<span class="text_betten">进所时间<i></i></span>： {{data.lawyerInfo.joinTime}}
								</div>
							</div>
						</div>
						<div style="margin-top: 30px;">
							<div class="flex">
								<span class="text_betten" style="margin-top:-62px;">诚信信息<i></i></span>
								<span style="margin-top:-79px;">：</span>
								<el-table
								    :data="data.lawyerInfo.faithList"
								    border
								    style="width: 100%">
								    <el-table-column
								      type="index"
								      label="序号"
								      width="180">
								    </el-table-column>
								    <el-table-column
								      prop="awardName"
								      label="授予机构">
								    </el-table-column>
								    <el-table-column
								      prop="awardDate"
								      label="授予日期">
								    </el-table-column>
									<el-table-column
										prop="awardContent"
										label="授予内容">
									</el-table-column>
									<el-table-column
										prop="commendLevel"
										label="表彰级别">
									</el-table-column>
								  </el-table>
							</div>
						</div>
						<div>
							<div class="flex">
								<span class="text_betten">擅长专业<i></i></span>： {{data.lawyerInfo.adeptSpecialtys}}
							</div>
							<div class="flex">
								<span class="text_betten">照片<i></i></span>： <img :src="data.lawyerInfo.photoUrl" alt="">
							</div>
						</div>
					</div>
					
				</div>
				<div class="shenpi_create">
					<div class="shenpi_one">
						<div class="tab1">负责人审核</div>
						<div class="tab1_right">
							<span>超时：59分钟/23.9小时/1.9天</span>
							<img src="../../assets/image/u552.png" alt="">
							<img src="../../assets/image/u554.png" alt="">
						</div>
					</div>
					<div class="shenheone_text">
						<div>
							<div class="flex">
								<span class="text_betten">审核结果<i></i></span>： 同意
							</div>
							<div class="flex">
								<span class="text_betten">审核意见<i></i></span>：<textarea name="" id="" value="*******************" cols="30" rows="10"></textarea>
							</div>
						</div>
					</div>
					
				</div>
				<div class="shenpi_create">
					<div class="shenpi_one">
						<div class="tab1">科员审核</div>
						<div class="tab1_right">
							<span>超时：59分钟/23.9小时/1.9天</span>
							<img src="../../assets/image/u552.png" alt="">
							<img src="../../assets/image/u554.png" alt="">
						</div>
					</div>
					<div class="shenheone_text">
						<div>
							<div class="flex">
								<span class="text_betten">审核结果<i></i></span><span style="color: #ff0000;font-size: 30px;">*</span>  
								<el-radio v-model="radio" label="1">同意</el-radio>
								<el-radio v-model="radio" label="2">不同意</el-radio>
							</div>
							<div class="flex">
								<span class="text_betten">审核意见<i></i></span><span style="color: #ff0000;font-size: 30px;">*</span>
								<textarea name="" id="" value="*******************" cols="30" rows="10"></textarea>
							</div>
						</div>
					</div>
					
				</div>
				<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
					  <el-button type="primary">提交</el-button>
					<el-button>取消</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {lvshishenhe} from '../../http/api.js'
	export default {
	  data() {
	    return {
	      data:{
			  lawyerInfo:''
		  },
		  chuanru:{
			"token": sessionStorage.getItem("token"), //类型：String  必有字段  备注：token 用户身份标识
			"lawyerId":this.$route.query.id  
		  },
		  lawyerId:'',
		  lawyerName:'',
		  checked:false,
		  radio:'1'
	    }
	  },
	  filters: {
			dateFilter: function(value) {
				if(value && value.length){
					let arr = value.split('-');
					return arr[0]+'年'+arr[1]+'月'+arr[2]+'日';
				}else{
					return ''
				}	
			}
		},
	  created(){
		//   lvshishenhe(this.chuanru).then(res=>{
		// 	  if (res) {
		// 	  	this.data = res.data.content
		// 	  }
		//   })
		  this.lawyerId = this.$route.query.id;
		  this.lawyerName = this.$route.query.name;
		  this.getLawyerDetail();
	  },
	  methods:{
		getLawyerDetail(){
			lvshishenhe({
				lawyerId:this.lawyerId
			}).then(res=>{
				if (res.code == 200) {
					this.data = res.content;
					this.checked = res.content.lawyerInfo.roleTypeDesc === '律所负责人' ? true:false;
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
</style>

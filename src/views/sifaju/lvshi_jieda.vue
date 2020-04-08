<template>
	<div class="zaixianzixun">
		<div class="zaixian_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item :to="{path:'falvzixun'}">法律咨询</el-breadcrumb-item>
			  <el-breadcrumb-item>冬季女就开始发货公开</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="qingjia_neirong">
			<div class="law_shenpi">
				<div>
					<el-steps :active="2" align-center>
					  <el-step title="法律咨询" description="这是一段很长很长很长的描述性文字"></el-step>
					  <el-step title="律师解答" description="这是一段很长很长很长的描述性文字"></el-step>
					  <!-- <el-step title="服务评价" description="这是一段很长很长很长的描述性文字"></el-step> -->
					</el-steps>
				</div>
				<div class="shenpi_create">
					<div class="shenpi_one">
						<div class="tab1">法律咨询</div>
					</div>
					<div class="shenheone_text">
						<div>
							<div class="flex">
								<span class="text_betten">标题<i></i></span>： 电信诈骗个人所得4万，抽成4万，一共8万,赃款已经被用完了，会判几年
							</div>
							<div class="flex">
								<span class="text_betten">问题类型<i></i></span>： 债权债务
							</div>
							<div class="flex">
								<span class="text_betten">问题描述<i></i></span>：<textarea name="" id="" v-model="text" cols="30" rows="10"></textarea>
							</div>
						</div>
						<div class="text_aa">
							<div>
								<div class="flex">
									<span class="text_betten">提问者<i></i></span>： 丁月红
								</div>
								<div class="flex">
									<span class="text_betten">意向律师<i></i></span>： 男
								</div>
								<div class="flex">
									<span class="text_betten">照片<i></i></span>： <img src="../../assets/image/u3264.png" alt="">
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
						<div class="tab1">律师解答</div>
						<div class="tab1_right">
							<span>超时：59分钟/23.9小时/1.9天</span>
							<img src="../../assets/image/u552.png" alt="">
							<img src="../../assets/image/u554.png" alt="">
						</div>
					</div>
					<div class="shenheone_text">
						<div>
							<div class="flex">
								<span class="text_betten">审核结果<i></i></span>：同意
							</div>
							<div class="flex">
								<span class="text_betten">律师解答<i></i></span><span style="color: #ff0000;font-size: 30px;">*</span>
								<textarea name="" id="" value="*******************" cols="30" rows="10"></textarea>
							</div>
							<div class="flex">
								<span class="text_betten" style="opacity: 0;">审核结果：<i></i></span>
								<div class="zhuiwen">
									<div>用户追问：</div>
									<div>还有就是男方的彩礼说的是七万，可是只拿了三万给女方的爸爸修房，而且修房的人就是男方和男方的爸爸给女方的爸爸修的，现在男方叫女方还钱，可是女方现在一无所有，请问律师这样的问题该怎么处理最妥当？</div>
								</div>
							</div>
							<div class="flex">
								<span class="text_betten" style="opacity: 0;">审核结果：<i></i></span>
								<div class="zhuiwenhui">
									<div>律师回复：</div>
									<div>协商不成，可以走法律途径。如有需要可来电联系我详谈，我再帮你分析。</div>
								</div>
							</div>
							<div class="flex">
								<span class="text_betten" style="opacity: 0;">审核结果：<i></i></span>
								<div class="zhuiwen">
									<div>用户追问：</div>
									<div>还有就是男方的彩礼说的是七万，可是只拿了三万给女方的爸爸修房，而且修房的人就是男方和男方的爸爸给女方的爸爸修的，现在男方叫女方还钱，可是女方现在一无所有，请问律师这样的问题该怎么处理最妥当？</div>
								</div>
							</div>
							<div class="flex " style="margin-top: 20px;">
								<span class="text_betten" style="opacity: 0;">审核结果：<i></i></span>
								<textarea name="" id="" placeholder="请输入回复内容，回复后公众联系方式可见" cols="30" rows="10"></textarea>
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
	export default {
	  data() {
	    return {
	      
	    }
	  },
	  created() {
	  	
	  },
	  methods:{
		  
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

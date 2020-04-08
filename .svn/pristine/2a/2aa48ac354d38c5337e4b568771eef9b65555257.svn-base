<template>
	<div class="sifa">
		<div>
			<div class="indexcon_lefttop">
				<el-date-picker
				  v-model="value1"
				  type="date"
				  style="color: #ccc,width: 100%"
				  placeholder="选择日期">
				</el-date-picker>
			</div>
			<div class="indexcon_leftcon">
				<div class="shouye_jindu">
					<div class="jindu_zuo">
						<div>
							08:00
							<img src="../../assets/image/yuandian.png" class="jindu_tu" alt="">
						</div>
					</div>
					<div class="jindu_you">
						<div>
							<div class="jindu_qian"><div>签到</div> <div class="jindu_shu">1</div> <div class="jindu_xiugai" @click="xiugaijl">修改记录</div></div>
							<div class="zhuang">状态：正常</div>
						</div>
						<div class="jindu_zhiwen">
							<img src="../../assets/image/u1879.png" alt="">
							<div @click="more_caozuo">更多操作</div>
						</div>
					</div>
				</div>
				<div class="shouye_jindu">
					<div class="jindu_zuo">
						<div>
							10:00
							<img src="../../assets/image/yuandian.png" class="jindu_tu" alt="">
						</div>
					</div>
					<div class="jindu_you">
						<div>
							<div class="jindu_qian"><div>签到</div>
								<!-- <div class="jindu_shu">1</div> <div class="jindu_xiugai">修改记录</div> -->
							</div>
							<div class="zhuang">XXXXXXXXXXXXXXXXXXXXXXXX</div>
						</div>
					</div>
				</div>
				<div class="shouye_jindu">
					<div class="jindu_zuo" style="height: 115px;">
						<div>
							10:00
							<img src="../../assets/image/yuandian.png" class="jindu_tu" alt="">
						</div>
					</div>
					<div class="jindu_younow">
						
						<div >
							<div class="jindu_topchuli">
								<div><b>待处理:</b><span>37</span>项</div>
								<div><b>其中超时:</b><span>2</span>项</div>
							</div>
							<div class="jindu_topchuli">
								<div><b>待处理:</b><span>37</span>项</div>
								<div><b>其中超时:</b><span>2</span>项</div>
							</div>
						</div>
						<router-link :to="{path:'daichuli'}">
							<div class="zhize">职责</div>
						</router-link>
					</div>
					
				</div>
				<div class="shouye_jindu">
					<div class="jindu_zuo">
						<div>
							10:00
							<img src="../../assets/image/yuandian.png" class="jindu_tu" alt="">
						</div>
					</div>
					<div class="jindu_you jindubai">
						<div>
							<div class="jindu_qian"><div>智慧司法需求对接会议</div>
								<!-- <div class="jindu_shu">1</div> <div class="jindu_xiugai">修改记录</div> -->
							</div>
							<div class="zhuang">会议地点：1920会议室</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<router-view></router-view>
		<div class="tankuang" v-if="gengduo">
			<div class="gengduo_caozuo">
				<div class="gengduo_toubu">
					更多操作
					<img src="../../assets/image/del.png" @click="close" alt="">
				</div>
				<div class="gengduo_neirong">
					<router-link :to="{path: 'qingjia'}">
						<div>补假申请</div>
					</router-link>
					<router-link :to="{path: 'qingjia'}">
						<div>公出申请</div>
					</router-link>
					<router-link :to="{path: 'qingjia'}">
						<div>异常申请</div>
					</router-link>
					<router-link :to="{path: 'qingjia'}">
						<div>状态修改</div>
					</router-link>
				</div>
			</div>
		</div>
		<div class="tankuang" v-if="kaoqin">
			<div class="gengduo_caozuo">
				<div class="gengduo_toubu">
					考勤状态修改记录
					<img src="../../assets/image/del.png" @click="close" alt="">
				</div>
				<div class="gd_kaoqin">
					<div>考勤时间： 2019-04-22 08:01:02</div>
					<div>考勤方式： 指纹</div>
				</div>
				<div class="buzhou_shu">
					<el-steps :active="2" align-center direction="vertical">
					  <el-step title="签到改为无效考勤" description=""></el-step>
					</el-steps>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	      value1: '',
		  gengduo:false,
		  kaoqin:false
	    }
	  },
		methods: {
			 more_caozuo(){
				 this.gengduo = true
			 },
			 xiugaijl(){
				this.kaoqin = true
			 },
			 close(){
				this.gengduo = false;
				this.kaoqin = false
			 }
		}
	}
</script>

<style lang="scss">
	.sifa{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: flex-start;
	}
	
	.tightp_top{
		width: 96%;
		padding: 0 2%;
		height: 70px;
		background: #fff;
		border-bottom: 1px solid #eee;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	/* .right_select{
		margin-left: 40px;
	} */
	.p_search{
		width: 400px;
		height: 38px;
		border: 1px solid #999;
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		overflow: hidden;
	}
	.p_search input{
		padding-left: 20px;
		border: 0;
	}
	.p_search .searchp{
		width: 100px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background:-webkit-linear-gradient(left,#0fa3d5, #1b79c2);
	}
	.p_page{
		width: 94%;
		padding: 0 3%;
		display: flex;
		justify-content: flex-end;
		margin-top: 20px;
	}
	.el-tabs__content{
		display: none;
	}
	.p_conright .el-table th{
		background: #1884c7 !important;
		color: #fff;
	}
	.index_con{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: flex-start;
	}
	.index_con .sifa>div:nth-child(1){
		width: 400px;
		height: 100%;
		border-right: 1px solid #999;
	}
	.indexcon_lefttop{
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 1px solid #999;
		height: 70px;
		.el-date-editor.el-input{
			width: 100%;
		}
		.el-input__inner{
			border: 0;
			color: #ccc;
			text-align: center;
		}
		.el-input__prefix{
			display:none;
		}
	}
	.indexcon_leftcon{
		// width: 94%;
		height:90%;
		background: #f6f6f6;
		// padding: 0px 3%;
	}
	.indexcon_lefttop  .el-input{
		font-size: 23px;
	}
	.indexcon_time{
		width: 70%;
		margin: 10px auto;
	}
	.shouye_jindu{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.shouye_jindu>div{
		display: flex;
		align-items: center;
	}
	.jindu_tu{
		width: 20px;
		height: 20px;
		position: relative;
		left: 10px;
		z-index: 100;
	}
	.jindu_zuo{
		height: 66px;
		border-right: 1px solid #999;
	}
	.jindu_you{
		width: 60%;
		padding: 10px  2%;
		background: #e9eef3;
		border-radius: 5px;
		margin-left: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.jindu_qian{
		display: flex;
		align-items: center;
	}
	.jindu_shu{
		width: 15px;
		height: 15px;
		border-radius: 50%;
		color: #fff;
		background: #ff0000;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 10px;
		font-size: 12px;
	}
	.jindu_xiugai{
		padding: 5px ;
		border-radius: 5px;
		background: #0EA9D7;
		color: #fff;
		font-size: 12px;
	}
	.zhuang{
		text-align: left;
		margin-top: 5px;
		font-size: 12px;
		color: #999;
	}
	.jindu_zhiwen{
		display: flex;
		align-items: center;
	}
	.jindu_zhiwen img{
		width: 25px;
		height: 25px;
	}
	.jindu_zhiwen>div{
		width: 30px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		border-radius: 5px;
		background: #33cc66;
		flex-wrap: wrap;
		font-size: 12px;
		padding:3px;
		margin-left: 10px;
	}
	.jindu_younow{
		width: 64%;
		border-radius: 5px;
		background: #fff;
		margin-left: 20px;
		overflow: hidden;
		display: block !important;
	}
	.jindu_younow>div{
		display: flex;
		align-items: center;
		width: 100%;
	}
	.jindu_younow>div>div{
		width: 50%;
	}
	.jindu_topchuli{
		border-right: 1px solid #eee;
		padding:15px 0 ;
	}
	.jindu_topchuli{
		div{
			line-height: 22px;
			position: relative;
			b{
				position: absolute;
				left: 8px;
			}
			span{
				display:inline-block;
				margin-left: 70px;
				width: 25px;
			}
		}
		:nth-child(1){
			b{
				color:#333;
				font-weight: 500;
			}
			span{
				color: #2A8CCB;
			}
		}
		:nth-child(2){
			b{
				color: #999;
			}
			span{
				color: #FF9880;
			}
		}
	}
	.zhize{
		width: 100%;
		height: 40px;
		background: #0087cc;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.jindubai{
		background: #fff;
	}
	.zhize_toubu{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 70px;
		border-bottom: 1px solid #999;
		font-size: 20px;
	}
	.zhize_you{
		width: 70%;
		height: 100%;
	}
	.zhize_neirong{
		width: 94%;
		padding: 0 3%;
		height: 90%;
		overflow: auto;
	}
	.zhize_neirong>div{
		width: 100%;
		margin-top: 20px;
	}
	.title{
		display: flex;
		align-items: center;
		font-size: 17px;
	}
	.title>div:nth-child(1){
		width: 4px;
		height: 18px;
		background: #169bd4;
		border-radius: 10px;
		margin-right: 10px;
		
	}
	.fenlei{
		width: 98%;
		padding: 20px 20px;
		border: 1px solid #eee;
		margin-top: 20px;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}
	.fenlei>div{
		display: inline-block;
		margin: 0px 20px 0 0 ;
	}
	.lvshi_wen{
		font-size: 14px;
		color: #666;
		margin-top: 8px;
		// width: 65px;
		margin-top: 8px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.fenlei img{
		width: 65px;
		height: 65px;
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
			width: 460px;
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
	.gd_kaoqin{
		width: 94%;
		padding: 15px 3%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.buzhou_shu{
		width: 90%;
		padding: 15px 5%;
	}
</style>

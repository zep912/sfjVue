<template>
	<div class="zhize_you">
		<div class="zhize_toubu">职责</div>
		<div class="zhize_neirong">
			<div>
				<div class="title">
					<div></div>
					公共法律服务平台
				</div>
				<div class="fenlei">
					<div>
						<router-link :to="{path:'mana_law',query:{type:1}}"  v-if="userType != '3'">
							<div>
								<img src="../../assets/image/tubiao_03.png" alt="">
							</div>
							<div class="lvshi_wen">律所管理</div>
						</router-link>
					</div>
					<div>
						<router-link :to="{path:'lvshiguan',query:{type:2}}">
						<div>
							<img src="../../assets/image/tubiao_03.png" alt="">
						</div>
						<div class="lvshi_wen">律师管理</div>
						</router-link>
					</div>
					<div>
						<router-link :to="{path:'falvzixun'}">
						<div>
							<img src="../../assets/image/tubiao_05.png" alt="">
						</div>
						<div class="lvshi_wen">法律咨询</div>
						</router-link>
					</div>
					<div>
						<router-link :to="{path:'zhibanshezhi'}">
						<div>
							<img src="../../assets/image/tubiao_07.png" alt="">
						</div>
						<div class="lvshi_wen">值班设置</div>
						</router-link>
					</div>
					<div>
						<router-link :to="{path:'lvshizbbiao'}">
						<div>
							<img src="../../assets/image/tubiao_07.png" alt="">
						</div>
						<div class="lvshi_wen">值班律师表</div>
						</router-link>
					</div>
					<div>
						<router-link :to="{path:'zaixianyuyue'}">
						<div>
							<img src="../../assets/image/tubiao_09.png" alt="">
						</div>
						<div class="lvshi_wen">在线预约</div>
						</router-link>
					</div>
					<div>
						<router-link :to="{path:'zhengwugongkai'}">
						<div>
							<img src="../../assets/image/tubiao_11.png" alt="">
						</div>
						<div class="lvshi_wen">政务公开</div>
						</router-link>
					</div>
					<div>
						<router-link :to="{path:'manapeixun'}">
						<div>
							<img src="../../assets/image/tubiao_13.png" alt="">
						</div>
						<div class="lvshi_wen">培训管理</div>
						</router-link>
					</div>
					<div>
						<router-link :to="{path:'manakejianku'}">
						<div>
							<img src="../../assets/image/tubiao_15.png" alt="">
						</div>
						<div class="lvshi_wen">课件库管理</div>
						</router-link>
					</div>
					<div>
						<router-link :to="{path:'falv_liebiao'}">
						<div>
							<img src="../../assets/image/tubiao_17.png" alt="">
						</div>
						<div class="lvshi_wen">普法宣传</div>
						</router-link>
					</div>
					<div>
						<router-link :to="{path:'sifa_ditu'}">
						<div>
							<img src="../../assets/image/tubiao_19.png" alt="">
						</div>
						<div class="lvshi_wen">司法地图</div>
						</router-link>
					</div>
					<div>
						<router-link :to="{path:'sifa_guanli'}">
						<div>
							<img src="../../assets/image/tubiao_21.png" alt="">
						</div>
						<div class="lvshi_wen">司法机构</div>
						</router-link>
					</div>
					<div>
						<router-link :to="{path:'sifa_guanli'}">
						<div>
							<img src="../../assets/image/tubiao_33.png" alt="">
						</div>
						<div class="lvshi_wen">图片发布</div>
						</router-link>
					</div>
					<div>
						<router-link :to="{path:'sifa_guanli'}">
						<div>
							<img src="../../assets/image/tubiao_34.png" alt="">
						</div>
						<div class="lvshi_wen">司法考试</div>
						</router-link>
					</div>
					<div>
						<a href="http://ln.12348.gov.cn/">
						<div>
							<img src="../../assets/image/tubiao_41.png" alt="">
						</div>
						<div class="lvshi_wen">法律服务</div>
						</a>
					</div>
					<div>
						<router-link>
							<div>
								<img src="../../assets/image/tubiao_36.png" alt="">
							</div>
							<div class="lvshi_wen">批评意见表</div>
						</router-link>
					</div>
				</div>
			</div>
			<div>
				<div class="title">
					<div></div>
					视频监控综合管理平台
				</div>
				<div class="fenlei">
					<div>
						<div>
							<img src="../../assets/image/tubiao_41.png" alt="">
						</div>
						<div class="lvshi_wen">戒毒所</div>
					</div>
					<div>
						<div>
							<img src="../../assets/image/tubiao_42.png" alt="">
						</div>
						<div class="lvshi_wen">矫正人员</div>
					</div>
				</div>
			</div>
			<div>
				<div class="title">
					<div></div>
					智能综合办公平台
				</div>
				<div class="fenlei">
					<div>
					<router-link :to="{path:'n_qingjia'}">
						<div>
							<img src="../../assets/image/tubiao_03.png" alt="">
						</div>
						<div class="lvshi_wen">请假</div>
					</router-link>
					</div>
					<div>
					<router-link :to="{path:'ngongchu_shenqing'}">
						<div>
							<img src="../../assets/image/tubiao_05.png" alt="">
						</div>
						<div class="lvshi_wen">公出申请</div>
					</router-link>
					</div>
					<div>
						<router-link :to="{path:'nkaoqin_yc'}">
							<div>
								<img src="../../assets/image/tubiao_07.png" alt="">
							</div>
							<div class="lvshi_wen">考勤异常</div>
						</router-link>
					</div>
					<div>
					<router-link :to="{path:'nkaoqin_paim'}">
						<div>
							<img src="../../assets/image/tubiao_09.png" alt="">
						</div>
						<div class="lvshi_wen">考勤排名</div>
					</router-link>
					</div>
					<div>
					<router-link :to="{path:'ntongji_baobiao'}">
						<div>
							<img src="../../assets/image/tubiao_11.png" alt="">
						</div>
						<div class="lvshi_wen">考勤统计报表</div>
					</router-link>
					</div>
					<div>
						<!--<router-link>-->
							<div>
								<img src="../../assets/image/tubiao_13.png" alt="">
							</div>
							<div class="lvshi_wen">会议申请</div>
						<!--</router-link>-->
					</div>
					<div>
					<router-link :to="{path:'nyongcheshenqing'}">
						<div>
							<img src="../../assets/image/tubiao_15.png" alt="">
						</div>
						<div class="lvshi_wen">用车申请</div>
					</router-link>
					</div>
					<div>
					<router-link :to="{path:'ngongwen_qicao'}">
						<div>
							<img src="../../assets/image/tubiao_17.png" alt="">
						</div>
						<div class="lvshi_wen">公文起草</div>
					</router-link>
					</div>
					<div>
					<router-link :to="{path:'nshouwen_dj'}">
						<div>
							<img src="../../assets/image/tubiao_19.png" alt="">
						</div>
						<div class="lvshi_wen">收文登记</div>
					</router-link>
					</div>
					<div>
					<!--<router-link>-->
						<div>
							<img src="../../assets/image/tubiao_21.png" alt="">
						</div>
						<div class="lvshi_wen">资产管理</div>
					<!--</router-link>-->
					</div>
					<div>
					<!--<router-link>-->
						<div>
							<img src="../../assets/image/tubiao_33.png" alt="">
						</div>
						<div class="lvshi_wen">图片发布</div>
					<!--</router-link>-->
					</div>
					<div>
					<!--<router-link>-->
						<div>
							<img src="../../assets/image/tubiao_34.png" alt="">
						</div>
						<div class="lvshi_wen">资产领用申请</div>
					<!--</router-link>-->
					</div>
					<div>
					<!--<router-link>-->
						<div>
							<img src="../../assets/image/tubiao_36.png" alt="">
						</div>
						<div class="lvshi_wen">电子档案</div>
					<!--</router-link>-->
					</div>
					<div>
					<router-link :to="{path:'n_gongcheguanli'}">
						<div>
							<img src="../../assets/image/tubiao_34.png" alt="">
						</div>
						<div class="lvshi_wen">公车管理</div>
					</router-link>
					</div>
					<div>
					<!--<router-link>-->
						<div>
							<img src="../../assets/image/tubiao_36.png" alt="">
						</div>
						<div class="lvshi_wen">会议计划</div>
					<!--</router-link>-->
					</div>
					<div>
					<!--<router-link>-->
						<div>
							<img src="../../assets/image/tubiao_34.png" alt="">
						</div>
						<div class="lvshi_wen">会议编排</div>
					<!--</router-link>-->
					</div>
					<div>
					<router-link :to="{path:'n_tongshi'}">
						<div>
							<img src="../../assets/image/tubiao_36.png" alt="">
						</div>
						<div class="lvshi_wen">我的同事</div>
					</router-link>
					</div>
				</div>
			</div>
			<div>
				<div class="title">
					<div></div>
					绩效系统
				</div>
				<div class="fenlei">
					<div>
					<router-link :to="{path:'task_eva'}">
						<div>
							<img src="../../assets/image/tubiao_36.png" alt="">
						</div>
						<div class="lvshi_wen">任务评分</div>
					</router-link>
					</div>
					<div>
					<router-link :to="{path:'discipline_eva'}">
						<div>
							<img src="../../assets/image/tubiao_36.png" alt="">
						</div>
						<div class="lvshi_wen">纪律评分</div>
					</router-link>
					</div>
					<div>
					<router-link :to="{path:'ngongchu_shenqing'}">
						<div>
							<img src="../../assets/image/tubiao_36.png" alt="">
						</div>
						<div class="lvshi_wen">评分后查询</div>
					</router-link>
					</div>
					<div>
					<router-link :to="{path:'ngongchu_shenqing'}">
						<div>
							<img src="../../assets/image/tubiao_36.png" alt="">
						</div>
						<div class="lvshi_wen">评分总查询</div>
					</router-link>
					</div>
					<div>
					<router-link :to="{path:'ngongchu_shenqing'}">
						<div>
							<img src="../../assets/image/tubiao_36.png" alt="">
						</div>
						<div class="lvshi_wen">填写荣誉评审</div>
					</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				userType:sessionStorage.getItem("type"),
				// achievementsList: [
				// 	{ title: '纪律评分', imgUrl: '../../assets/image/tubiao_36.png', path: 'ngongchu_shenqing' }
				// ]
			}
		}
	}
</script>

<style lang="scss">
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
		display: grid;
		grid-gap: 20px 10px;
		grid-template-columns: repeat(10, 1fr);
		/*display: flex;*/
		/*align-items: center;*/
		/*flex-wrap: wrap;*/
	}
	.fenlei > div{
		display: inline-block;
		/*margin: 0 20px 0 0 ;*/
	}
	.lvshi_wen{
		font-size: 14px;
		color: #666;
		margin-top: 8px;
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

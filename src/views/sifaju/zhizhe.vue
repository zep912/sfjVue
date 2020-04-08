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
					<router-link :to="{path:'mana_law',query:{type:1}}"  v-if="userType != '3'">
						<div>
							<div>
								<img src="../../assets/image/tubiao_03.png" alt="">
							</div>
							<div class="lvshi_wen">律所管理</div>
						</div>
					</router-link>
					<router-link :to="{path:'lvshiguan',query:{type:2}}">
						<div>
							<div>
								<img src="../../assets/image/tubiao_03.png" alt="">
							</div>
							<div class="lvshi_wen">律师管理</div>
						</div>
					</router-link>
					<router-link :to="{path:'falvzixun'}">
						<div>
							<div>
								<img src="../../assets/image/tubiao_05.png" alt="">
							</div>
							<div class="lvshi_wen">法律咨询</div>
						</div>
					</router-link>
					<router-link :to="{path:'zhibanshezhi'}">
						<div>
							<div>
								<img src="../../assets/image/tubiao_07.png" alt="">
							</div>
							<div class="lvshi_wen">值班设置</div>
						</div>
					</router-link>
					<router-link :to="{path:'lvshizbbiao'}">
						<div>
							<div>
								<img src="../../assets/image/tubiao_07.png" alt="">
							</div>
							<div class="lvshi_wen">值班律师表</div>
						</div>
					</router-link>
					<router-link :to="{path:'zaixianyuyue'}">
						<div>
							<div>
								<img src="../../assets/image/tubiao_09.png" alt="">
							</div>
							<div class="lvshi_wen">在线预约</div>
						</div>
					</router-link>
					<router-link :to="{path:'zhengwugongkai'}">
						<div>
							<div>
								<img src="../../assets/image/tubiao_11.png" alt="">
							</div>
							<div class="lvshi_wen">政务公开</div>
						</div>
					</router-link>
					<router-link :to="{path:'manapeixun'}">
						<div>
							<div>
								<img src="../../assets/image/tubiao_13.png" alt="">
							</div>
							<div class="lvshi_wen">培训管理</div>
						</div>
					</router-link>
					<router-link :to="{path:'manakejianku'}">
						<div>
							<div>
								<img src="../../assets/image/tubiao_15.png" alt="">
							</div>
							<div class="lvshi_wen">课件库管理</div>
						</div>
					</router-link>
					<router-link :to="{path:'falv_liebiao'}">
						<div>
							<div>
								<img src="../../assets/image/tubiao_17.png" alt="">
							</div>
							<div class="lvshi_wen">普法宣传</div>
						</div>
					</router-link>
					<router-link :to="{path:'sifa_ditu'}">
						<div>
							<div>
								<img src="../../assets/image/tubiao_19.png" alt="">
							</div>
							<div class="lvshi_wen">司法地图</div>
						</div>
					</router-link>
					<router-link :to="{path:'sifa_guanli'}">
						<div>
							<div>
								<img src="../../assets/image/tubiao_21.png" alt="">
							</div>
							<div class="lvshi_wen">司法机构管理</div>
						</div>
					</router-link>
					<router-link :to="{path:'tupianfabu'}">
						<div>
							<div>
								<img src="../../assets/image/tubiao_33.png" alt="">
							</div>
							<div class="lvshi_wen">图片发布</div>
						</div>
					</router-link>
					<router-link :to="{path:'sifa_kaoshi'}">
						<div>
							<div>
								<img src="../../assets/image/tubiao_34.png" alt="">
							</div>
							<div class="lvshi_wen">司法考试</div>
						</div>
					</router-link>
					<a href="http://ln.12348.gov.cn/">
						<div>
							<div>
								<img src="../../assets/image/tubiao_41.png" alt="">
							</div>
							<div class="lvshi_wen">12348法律服务</div>
						</div>
					</a>
					<router-link>
						<div>
							<img src="../../assets/image/tubiao_36.png" alt="">
						</div>
						<div class="lvshi_wen">批评意见表</div>
					</router-link>
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
					<router-link :to="{path:'n_qingjia'}">
						<div>
							<img src="../../assets/image/tubiao_03.png" alt="">
						</div>
						<div class="lvshi_wen">请假</div>
					</router-link>
					<router-link :to="{path:'ngongchu_shenqing'}">
						<div>
							<img src="../../assets/image/tubiao_05.png" alt="">
						</div>
						<div class="lvshi_wen">公出申请</div>
					</router-link>
					<router-link :to="{path:'nkaoqin_yc'}">
						<div>
							<img src="../../assets/image/tubiao_07.png" alt="">
						</div>
						<div class="lvshi_wen">考勤异常</div>
					</router-link>
					<router-link :to="{path:'nkaoqin_paim'}">
						<div>
							<img src="../../assets/image/tubiao_09.png" alt="">
						</div>
						<div class="lvshi_wen">考勤排名</div>
					</router-link>
					<router-link :to="{path:'ntongji_baobiao'}">
						<div>
							<img src="../../assets/image/tubiao_11.png" alt="">
						</div>
						<div class="lvshi_wen">考勤统计报表</div>
					</router-link>
					<router-link>
						<div>
							<img src="../../assets/image/tubiao_13.png" alt="">
						</div>
						<div class="lvshi_wen">会议申请</div>
					</router-link>
					<router-link :to="{path:'nyongcheshenqing'}">
						<div>
							<img src="../../assets/image/tubiao_15.png" alt="">
						</div>
						<div class="lvshi_wen">用车申请</div>
					</router-link>
					<router-link :to="{path:'ngongwen_qicao'}">
						<div>
							<img src="../../assets/image/tubiao_17.png" alt="">
						</div>
						<div class="lvshi_wen">公文起草</div>
					</router-link>
					<router-link :to="{path:'nshouwen_dj'}">
						<div>
							<img src="../../assets/image/tubiao_19.png" alt="">
						</div>
						<div class="lvshi_wen">收文登记</div>
					</router-link>
					<router-link>
						<div>
							<img src="../../assets/image/tubiao_21.png" alt="">
						</div>
						<div class="lvshi_wen">资产管理</div>
					</router-link>
					<router-link>
						<div>
							<img src="../../assets/image/tubiao_33.png" alt="">
						</div>
						<div class="lvshi_wen">图片发布</div>
					</router-link>
					<router-link>
						<div>
							<img src="../../assets/image/tubiao_34.png" alt="">
						</div>
						<div class="lvshi_wen">资产领用申请</div>
					</router-link>
					<router-link>
						<div>
							<img src="../../assets/image/tubiao_36.png" alt="">
						</div>
						<div class="lvshi_wen">电子档案</div>
					</router-link>
					<router-link :to="{path:'n_gongcheguanli'}">
						<div>
							<img src="../../assets/image/tubiao_34.png" alt="">
						</div>
						<div class="lvshi_wen">公车管理</div>
					</router-link>
					<router-link>
						<div>
							<img src="../../assets/image/tubiao_36.png" alt="">
						</div>
						<div class="lvshi_wen">会议计划</div>
					</router-link>
					<router-link>
						<div>
							<img src="../../assets/image/tubiao_34.png" alt="">
						</div>
						<div class="lvshi_wen">会议编排</div>
					</router-link>
					<router-link :to="{path:'n_tongshi'}">
						<div>
							<img src="../../assets/image/tubiao_36.png" alt="">
						</div>
						<div class="lvshi_wen">我的同事</div>
					</router-link>
				</div>
			</div>
			<div>
				<div class="title">
					<div></div>
					绩效系统
				</div>
				<div class="fenlei">
					<router-link :to="{path:'task_eva'}">
						<div>
							<img src="../../assets/image/tubiao_36.png" alt="">
						</div>
						<div class="lvshi_wen">任务评分</div>
					</router-link>
					<router-link :to="{path:'discipline_eva'}">
						<div>
							<img src="../../assets/image/tubiao_36.png" alt="">
						</div>
						<div class="lvshi_wen">纪律评分</div>
					</router-link>
					<router-link :to="{path:'ngongchu_shenqing'}">
						<div>
							<img src="../../assets/image/tubiao_36.png" alt="">
						</div>
						<div class="lvshi_wen">评分后查询</div>
					</router-link>
					<router-link :to="{path:'ngongchu_shenqing'}">
						<div>
							<img src="../../assets/image/tubiao_36.png" alt="">
						</div>
						<div class="lvshi_wen">评分总查询</div>
					</router-link>
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

<style>
	.zhize_neirong .fenlei a{
		margin: 10px 20px 0 0;
	}
</style>

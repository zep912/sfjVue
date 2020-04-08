<template>
	<div class="zhize_you">
		<div class="zhize_toubu">课件学习计划</div>
		<div class="zhize_neirong">
			<div class="xuexi_top">
				<div>
					当前课件学习计划：<span>3</span>
				</div>
				<div>
					<el-checkbox v-model="checked">已完成：<span>1</span></el-checkbox>
				</div>
				<div>
					<el-checkbox  v-model="checked"><span style="color: #FF6034;">未完成：1</span></el-checkbox>
				</div>
				<div class="chaxun">
					<input type="text" placeholder="请输入标题搜索">
					<div class="chaxun_btn">查询</div>
				</div>
			</div>
			<div class="xuexi_neirong" v-for="(item,index) in datalist" :key="index">
				<div class="xuexineirong_top">
					<div>{{item.trainTitle}}</div>
					<div>学习时间：{{item.trainStartTime}}  至  {{item.trainEndTime}}</div>
				</div>
				<div class="xuexi_kecheng">
					<div class="kecheng_zuo">
						<img :src="item.coverUrl" alt="">
						<div class="kecheng_shijian">{{item.accTime}}</div>
					</div>
					<div class="kecheng_you">
						<div>{{item.trainTitle}}</div>
						<div>
							<div>知识范围：<span>{{item.knowledgeScope}}</span></div>
							<div>内容分类：<span>{{item.contentType}}</span></div>
							<div>视频时长：<span>{{item.videoDuration}}</span></div>
						</div>
						<div>
							课程简介：<span>{{item.couDesc}}</span>
						</div>
					</div>
				</div>
				<div class="kecheng_dibu">
					<div class="leijibottom">
						<div>累计学习次数 <span>{{item.studyCount}}</span></div>
						<div>本次累计用时 <span>{{item.accTime}}</span></div>
					</div>
					<div class="kecheng_youright">
						<div class="jindutiao">
							<el-progress :percentage="item.studyProcess"></el-progress>
						</div>
						<div class="xuexi_jindu">
							<div>{{item.studyProcess}}</div>
							<div>学习进度</div>
						</div>
						<router-link :to="{path: '/kanshipin'}">
							<div class="kaishi_xuexi">
								开始学习
							</div>
						</router-link>
						
					</div>
				</div>
				
			</div> 
			
		</div>
	</div>
</template>

<script>
	import {lawyerxuexi} from '../../../http/api'
	export default {
	    data() {
	      return {
	        checked: true,
			customColor:'#ff9933',
			percentage: 20,
			datalist:'',
			xuexijihuas:{
				trainTitle:'',
				completeFlag:'',
				learningFlag:'',
				token:sessionStorage.getItem("token")
			}
	      };
	    },
		created() {
			lawyerxuexi(this.xuexijihuas).then(success=>{
			    console.log(success)
			    this.datalist =  success.data.content.dataList
			})
		},
		methods:{
			xuexi(){
				this.$emit('xuexi','5')
			}
		}
	};
</script>

<style lang="scss">
	.xuexi_top{
		width: 98%;
		padding: 10px 1%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 16px;
		color: #000;
		font-weight: 600;
		border-bottom: 1px solid #eee;
	}
	.chaxun{
		width: 25%;
		margin-right: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.chaxun input{
		font-weight: 300;
		font-size: 15px;
		height: 40px;
		border: 1px solid #eee;
		padding-left: 5px;
	}
	.chaxun_btn{
		width: 100px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 14px;
		font-weight: 300;
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
	}
	.xuexi_neirong{
		width: 100%;
		border: 1px solid #eee;
	}
	.xuexineirong_top{
		width: 94%;
		padding: 0 3%;
		height: 40px;
		background: #f7f7f7;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #eee;
	}
	.xuexineirong_top>div:nth-child(1){
		font-weight: 600;
		color: #000;
		font-size: 15px;
	}
	.xuexineirong_top>div:nth-child(2){
		color: #666;
		font-size: 14px;
	}
	.xuexi_kecheng{
		width: 98%;
		padding: 10px 1%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		border-bottom: 1px dashed #eee;
	}
	.kecheng_zuo{
		width: 200px;
		height: 130px;
		position: relative;
		background: yellowgreen;
		margin-right: 20px;
	}
	.kecheng_zuo img{
		width: 100%;
		height: 100%;
	}
	.kecheng_shijian{
		position: absolute;
		bottom: 0;
		width: 95%;
		padding-left: 5%;
		height: 25px;
		display: flex;
		align-items: center;
		background: rgba(0,0,0,0.3);
		color: #fff;
		font-size: 12px;
	}
	.kecheng_you{
		text-align: left;
		
	}
	.kecheng_you>div:nth-child(1){
		font-size: 16px;
		font-weight: 600;
	}
	.kecheng_you>div:nth-child(2){
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #999;
		margin-top: 20px;
		span{
			color: #333;
		}
	}
	.kecheng_you>div:nth-child(3){
		color: #999;
		margin-top: 20px;
		font-size: 15px;
		span{
			font-size: 16px;
			color: #333;
		}
	}
	.leijibottom{
		color: #999;
		text-align: left;
		font-size: 13px;
		line-height: 20px;
		span{
			color: #333;
		}
	}
	.kecheng_dibu{
		width: 98%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 1%;
	}
	.kecheng_youright{
		width: 70%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.el-progress__text{
		display: none;
	}
	.xuexi_jindu{
		font-size: 14px;
		color: #999;
		margin: 0 20px;
	}
	.xuexi_jindu>div:nth-child(1){
		font-size: 18px;
		color: #0EA9D7;
	}
	.jindutiao{
		width: 60%;
		height: 30px;
	}
	.kaishi_xuexi{
		width: 120px;
		height: 35px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #44cc35;
		color: #fff;
		border-radius: 5px;
	}
	.wancheng_wan>div:nth-child(1){
		color: #67c23a;
	}
</style>

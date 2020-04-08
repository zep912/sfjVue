<template>
	<div class="kanshipin">
		<div class="kanshipin_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/xuexijihua' }">课件学习计划</el-breadcrumb-item>
			  <el-breadcrumb-item>施工安全哒哒哒哒哒</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="shipin_neirong">
			<div>
				<div class="shipin_biaoti">
					APINK
				</div>
				<div>
					<video src="../../../assets/video/apink.mp4" autoplay loop controls></video>
				</div>
				<div class="shipin_dibu">
					<div>
						<div>学习人员：<span>人员姓名</span></div>
						<div>开始时间：<span>2018-04-05 10:26</span></div>
					</div>
					<div>
						<div>学习次数：<span>3</span></div>
						<div>本次用时：<span>00:34:00</span></div>
					</div>
					<div>
						<div>累计用时：<span>01:34:00</span></div>
						<div>进度时间：<span>01:34:00</span></div>
					</div>
					<div class="shipin_jindu">
						<div>31%</div>
						<div>本次学习进度</div>
					</div>
				</div>
			</div>
			<div>
				<div class="shipin_xinxibt">培训信息</div>
				<div>计划状态：<span>{{data.planData.planStatus}}</span></div>
				<div>开始时间：<span>{{data.planData.startDate}} {{data.planData.startTime}}</span></div>
				<div>截止时间：<span>{{data.planData.endDate}} {{data.planData.endTime}}</span></div>
				<div>制定人员：<span>{{data.planData.principalUser}}</span></div>
				<div>发布时间：<span>{{data.planData.publishTime}}</span></div>
				<div class="shipin_xinxibt">课件信息</div>
				<div>知识范围：<span>{{data.coursewareData.knowledgeScope}}</span></div>
				<div>内容分类：<span>{{data.coursewareData.contentType}}</span></div>
				<div>视频时长：<span>{{data.coursewareData.videoDuration}}</span></div>
				<div>课程简介：</div>
				<div class="jianjie_neirong">
					<div>{{data.coursewareData.couDesc}}</div>
				</div>
			</div>
		</div>
		<div class="shipin_biaoge">
			<el-table
			    :data="data.studyRecordList"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      type="index"
			      label="序号"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="trainTitle"
			      label="学习计划名称">
			    </el-table-column>
			    <el-table-column
			      prop="startDate"
			      label="开始时间">
			    </el-table-column>
				<el-table-column
				  prop="endDate"
				  label="截止时间">
				</el-table-column>
				<el-table-column
				  prop="completeTime"
				  label="学习完成时间">
				</el-table-column>
				<el-table-column
				  prop="consumeTime"
				  label="学习用时">
				</el-table-column>
				<el-table-column
				  prop="studyProcess"
				  label="学习进度">
				</el-table-column>
				<el-table-column
				  prop="studyStatus"
				  label="学习状态">
				</el-table-column>
			  </el-table>
		</div>
	</div>
</template>

<script>
	import {see_videol} from '../../../http/api.js'
	export default {
	    data(){
			return {
				data:''
			}
		},
		created() {
			see_videol({
				"token":sessionStorage.getItem("token"),             //类型：String  必有字段  备注：token 用户身份标识
				"planId":"88b691be5243443ea113e6ccc0763f10"                //类型：String  必有字段  备注：培训计划ID
			}).then(res=>{
				this.data = res.content
			})
		},
		methods:{
			xuexijihua(){
				this.$emit('xuexi','4')
			}
		}
	};
</script>

<style lang="scss">
	.kanshipin{
		width: 100%;
	}
	.kanshipin_top{
		width: 95%;
		height: 70px;
		padding-left: 5%;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #eee;
	}
	.shipin_neirong{
		width: 90%;
		padding: 20px 5%;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		background: rgb(46,46,54);
	}
	.shipin_neirong>div:nth-child(1){
		width: 65%;
		video{
			width: 100%;
		}
	}
	.shipin_neirong>div:nth-child(2){
		width: 35%;
		margin-top: 43px;
		margin-left: 20px;
		text-align: left;
		height: 32vw;
		color: #c5c5c5;
		line-height: 23px;
		overflow: auto;
		span{
			color: #fff;
		}
	}
	.shipin_neirong>div:nth-child(2)::-webkit-scrollbar{
		display:none;
	}
	.shipin_dibu{
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 14px;
		color: #c5c5c5;
		text-align: left;
		padding: 10px 0;
		
	}
	.shipin_dibu span{
		color: #fff;
	}
	.shipin_dibu>div>div:nth-child(2){
		margin-top: 10px;
	}
	.shipin_jindu{
		text-align: center;
		
	}
	.shipin_jindu>div:nth-child(1){
		font-size: 16px;
		color: #068FD4;
	}
	.shipin_biaoti{
		text-align: left;
		color: #fff;
		font-size: 23px;
		font-weight: 600;
		margin-bottom: 20px;
	}
	.shipin_xinxibt{
		font-size: 18px;
		color: #068FD4;
		font-weight: 600;
		line-height: 40px;
	}
	.jianjie_neirong{
		color: #fff;
		padding: 10px;
	}
	.shipin_biaoge{
		width: 90%;
		padding: 25px 5%;
	}
</style>

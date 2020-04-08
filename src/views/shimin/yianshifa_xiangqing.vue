<template>
	<div class="yianshifa">
		<div class="xianqing_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			  <el-breadcrumb-item :to="{path:'pufa_xc'}">普法宣传</el-breadcrumb-item>
			  <el-breadcrumb-item>律师事务所设立审核登记</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="html" v-if="type == 1">
			<h2>{{orderTask_detail.caseTitle}}</h2>
			<p class="orderTask_caption">
				<span>案例类型：{{orderTask_detail.caseType}}</span>
				<span>发布时间：{{orderTask_detail.publishTime}}</span>
				<span>来源：{{orderTask_detail.lawyerName}}</span>
			</p>
			<div>{{orderTask_detail.caseContent}}</div>
		</div>
		<div class="html" v-if="type == 2">
			<h2>{{orderTask_detail.lawTitle}}</h2>
			<p class="orderTask_caption">
				<span>效力级别：{{orderTask_detail.scopeLevel}}</span>
				<span>颁布单位：{{orderTask_detail.enactOrg}}</span>
				<span>时效性：{{orderTask_detail.lawTimeliness}}</span>
				<span>颁布日期：{{orderTask_detail.enactDate}}</span>
				<span>执行日期：{{orderTask_detail.execDate}}</span>
			</p>
			<a :href="orderTask_detail.docUr" download="filename">点击下载文件</a>
		</div>
		<div class="html" v-if="type == 3">
			<h2>{{orderTask_detail.newsTitle}}</h2>
			<p class="orderTask_caption">
				<span>资讯来源：{{orderTask_detail.newsSource}}</span>
				<span>发布时间：{{orderTask_detail.publishTime}}</span>
				<span>新闻作者：{{orderTask_detail.newsAuthor}}</span>
			</p>
			<div>{{orderTask_detail.newsContent}}</div>
		</div>
	</div>
</template>

<script>
	const token = sessionStorage.getItem("token")
	import {getValidParaphrase,getOpenNewsDetail} from '../../http/api'
	export default {
		data(){
			return{
				caseId: 0,
				lawId: '',
				newsId: 0,
				type: 0,
				orderTask_detail: {}
			}
		},
		mounted() {
			this.type = this.$route.query.type;
			if(this.type == 1){
				this.caseId = this.$route.query.id;
				getValidParaphrase({token: token,caseId:this.caseId}).then(success=>{
					this.orderTask_detail = success.content;
				})
			}else  if(this.type == 2){
				this.lawId = this.$route.query.id;
				getValidParaphrase({token: token,lawId:this.lawId}).then(success=>{
					this.orderTask_detail = success.content;
				})
			}else  if(this.type == 3){
				this.newsId = this.$route.query.id;
				getOpenNewsDetail({token: token,newsId:this.newsId}).then(success=>{
					this.orderTask_detail = success.content;
				})
			}
			
		},
	    methods: {
			
	    }
	  }
</script>

<style lang="scss">
	.yianshifa{
		width: 100%;
	}
	.xianqing_top{
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		
	}
	.html{
		width: 96%;
		padding: 20px 2%;
		background: #fff;
		.orderTask_caption{
			font-size: 14px;
    		color: #999999;
			margin: 30px 0;
			span{
				margin: 0 15px;
			}
		}
		div{
			text-align: left;
		}
	}
</style>

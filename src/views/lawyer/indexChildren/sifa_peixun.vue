<template>
	<div class="sifa_peixun">
		<div class="zaixian_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/zhize' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item>司法培训</el-breadcrumb-item>
			</el-breadcrumb> 
		</div>
		<div class="sifa_content">
			<div class="sifa_contop">
				<div>
					<div>
						<div>知识范围</div>
						<div class="toubu_youce">
							<!-- <div>
								<div :class="zhishic=='全部'?'sifa_active':''" @click="zhishi('全部')">全部</div>
								<div :class="zhishic=='规章制度'?'sifa_active':''" @click="zhishi('规章制度')">规章制度</div>
								<div :class="zhishic=='安全'?'sifa_active':''" @click="zhishi('安全')">安全</div>
							</div> -->
							<el-radio-group v-model="queryCondition.knowledgeScope" class="toubu_youce_group">
								<el-radio-button v-for="(item, index) in zhishifanweiList" :key="index" :label="item.dictDataCode" :value="item.dictDataCode">{{item.dictDataName}}</el-radio-button>
							</el-radio-group>
							<div>更多</div>
						</div>
					</div>
					<div>
						<div>内容分类</div>
						<div class="toubu_youce">
							<!-- <div>
								<div :class="neirong=='全部'?'sifa_active':''" @click="neirongc('全部')">全部</div>
								<div :class="neirong=='安全生产'?'sifa_active':''" @click="neirongc('安全生产')">安全生产</div>
								<div :class="neirong=='劳动保护'?'sifa_active':''" @click="neirongc('劳动保护')">劳动保护</div>
								<div :class="neirong=='安全标志'?'sifa_active':''" @click="neirongc('安全标志')">安全标志</div>
								<div :class="neirong=='应对措施'?'sifa_active':''" @click="neirongc('应对措施')">应对措施</div>
							</div> -->
							<el-radio-group v-model="queryCondition.contentType" class="toubu_youce_group">
								<el-radio-button v-for="(item, index) in neirongfenleiList" :key="index" :label="item.dictDataCode" :value="item.dictDataCode">{{item.dictDataName}}</el-radio-button>
							</el-radio-group>
							<div>更多</div>
						</div>
					</div>
					<div>
						<div>课件类型</div>
						<div class="toubu_youce">
							<!-- <div>
								<div :class="leixingc=='全部'?'sifa_active':''" @click="leixing('全部')">全部</div>
								<div :class="leixingc=='1'?'sifa_active':''" @click="leixing('1')">公开</div>
								<div :class="leixingc=='2'?'sifa_active':''" @click="leixing('2')">不公开</div>
							</div> -->
							<el-radio-group v-model="queryCondition.openType" class="toubu_youce_group">
								<el-radio-button v-for="(item, index) in openTypeList" :key="index" :label="item.value" :value="item.value">{{item.label}}</el-radio-button>
							</el-radio-group>
							<div>更多</div>
						</div>
					</div>
				</div>
			</div>
			<div class="sifakc_tongji">
				<div>学习次数：{{form.completeCount}}</div>
				<div class="tongji_youce">
					<div>共计：{{form.studyCount}}个</div>
					<div class="caidan">
						<div>
							<img src="../../../assets/image/caidan.png" alt="">
						</div>
						<div>
							<img src="../../../assets/image/candan2.png" alt="">
						</div>
					</div>
					<div class="sifashiti_sousuo">
						<input type="text" v-model="queryCondition.trainTitle" placeholder="请输入要搜索试题题目中的关键字">
						<div @click="getData">搜索</div>
					</div>
				</div>
			</div>
			<div class="peixun_kecheng">
				<div class="kecheng_content" v-for="(item,index) in dataList" :key="index">
					<div class="kecheng_toubu">
						<div class="kctb_zuo">
							<div>
								<el-checkbox v-model="checked">序号：{{index+1}}</el-checkbox>
							</div>
							<div class="kecheng_fenge"></div>
							<div>课件类型： {{item.couType}}</div>
							<div class="kecheng_fenge"></div>
							<div>知识范围： {{item.knowledgeScope}}</div>
							<div class="kecheng_fenge"></div>
							<div>内容分类： {{item.contentType}}</div>
							<div class="kecheng_fenge"></div>
							<div>视频时长：{{item.videoDuration}}</div>
							<div class="kecheng_fenge"></div>
							<div>学习次数： {{item.studyCount}}</div>
							<div class="kecheng_fenge"></div>
							<div>累计时长： {{item.accTime}}</div>
						</div>
						<div class="kaishi_xuexisi" @click="kaishixuexi">开始学习</div>
					</div>
					<div class="kecheng_pxcontent">
						<div class="kecheng_img">
							<img :src="item.coverUrl" alt="">
							<div>{{item.videoDuration}}</div>
						</div>
						<div class="kecheng_jianjie">
							<div>课件标题：<span>{{item.couName}}</span></div>
							<div>课件简介：<span>{{item.couDesc}}</span></div>
						</div>
					</div>
				</div>
				<!-- 分页 -->
				<div class="p_page">
					<el-pagination background
						@size-change="handleSizeChange"
						@current-change="handleCurrentChange"
						:current-page="queryCondition.pageRequest.pageIndex"
						:page-sizes="[10]"
						:page-size="queryCondition.pageRequest.limit"
						layout="total, sizes, prev, pager, next, jumper"
						:total="queryCondition.pageRequest.results">
						</el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {lawyerxuexi, getSelectDetail} from '../../../http/api.js'
	import * as crud from '../../../assets/js/co-crud.js'
	import util from '@/assets/js/co-util'
	export default {
		data() {
			return {
				queryCondition: {
					token: sessionStorage.getItem("token"),
					knowledgeScope: null,
					contentType: null,
					openType: null,
					trainTitle: '',
					pageRequest: crud.getQueryCondition({})
				},
				form: {},
				zhishifanweiList: [], // 知识范围
				neirongfenleiList: [], // 内容分类
				openTypeList: [
					{
						value: null,
						label: '全部'
					},
					{
						value: '1',
						label: '不公开'
					},
					{
						value: '2',
						label: '公开'
					}
				], // 课件类型
				dataList: [],
				checked: true,
				zhishic:'全部',
				neirong:'全部',
				leixingc:'全部'
			}
		},
		created() {
			this.typeData()
			this.wayData()
			this.getData()
		},
		methods:{
			zhishi(e){
				this.zhishic = e
			},
			neirongc(e){
				this.neirong = e
			},
			leixing(e){
				this.leixingc = e
			},
			kaishixuexi(){
				this.$router.push({
					path:'/kanshipin'
				})
			},
			// 获取知识范围数据字典
			typeData() {
				getSelectDetail({
					dictCode:'zhishifanwei',
					userId:'1'
				}).then(res=>{
					if(res.code == '200'){
						this.zhishifanweiList = [{dictDataCode: null, dictDataName: '全部'}].concat(Object.keys(res.content.resultList).map((key) => res.content.resultList[key]))
					}
				})
			},
			//获取内容分类数据字典
			wayData(){
				getSelectDetail({
					dictCode:'neirongfenlei',
					userId:'1'
				}).then(res=>{
					if(res.code == '200'){
						this.neirongfenleiList = [{dictDataCode: null, dictDataName: '全部'}].concat(Object.keys(res.content.resultList).map((key) => res.content.resultList[key]))
					}
				})
			},
			getData () {
				let request = JSON.parse(JSON.stringify(this.queryCondition))
				request.pageSize = request.pageRequest.limit
				request.pageNum = request.pageRequest.pageIndex
				delete request.pageRequest
				util.dealNullQueryCondition(request)
				lawyerxuexi(request).then(res => {
					if (res.code === 200) {
						let {content} = res
						let {pageInfo, dataList, completeCount, learningCount, studyCount} = content
						console.log('列表', res)
						this.dataList = dataList
						this.form = {
							completeCount,
							learningCount,
							studyCount
						}
						let pageResponse = {
							start: (pageInfo.pageNum*10) - 10,
							limit: 10,
							results: pageInfo.total
						}
						this.queryCondition.pageRequest = crud.getCurrentPage(pageResponse)
					}
				})
			},
			// 分页
			handleSizeChange (limit) {
				this.queryCondition.pageRequest.limit = limit
				this.queryCondition.pageRequest = crud.getQueryCondition(this.queryCondition.pageRequest)
				this.getData()
			},
			// 分页
			handleCurrentChange (pageIndex) {
				this.queryCondition.pageRequest.pageIndex = pageIndex
				this.queryCondition.pageRequest = crud.getQueryCondition(this.queryCondition.pageRequest)
				this.getData()
			}
		}
	}
</script>

<style lang="scss">
	.sifa_peixun{
		width: 100%;
	}
	.sifa_content{
		width: 98%;
		padding: 10px 1%;
	}
	.sifa_contop{
		width: 100%;
		
	}
	.sifa_contop>div{
		border: 1px solid #c0c4cc;
		border-bottom: 0;
	}
	.sifa_contop>div>div{
		display: flex;
		align-items: center;
		border-bottom: 1px solid #C0C4CC;
	}
	.sifa_contop>div>div>div:nth-child(1){
		width: 20%;
		height: 45px;
		display: flex;
		line-height: 45px;
		align-items: center;
		justify-content: center;
		background: #eee;
		border-right: 1px solid #C0C4CC;
	}
	.toubu_youce{
		width: 80%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.toubu_youce_group {
			.el-radio-button {
				border: none;
				margin-left: 10px;
				.el-radio-button__inner {
					width: 95px;
				  height: 35px;
					line-height: 35px;
					display: inline-block;
					border-radius: 3px;
					border: 1px solid #C0C4CC;
					padding: 0;
					// padding: 9px 30px;
				}
			}
		}
	}
	.toubu_youce>div:nth-child(1){
		display: flex;
		align-items: center;
		div{
			width: 95px;
			height: 35px;
			border-radius: 5px;
			// border: 1px solid #eee;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0 10px;
		}
		.sifa_active{
			background: #068FD4;
			color: #fff;
		}
	}
	.toubu_youce>div:nth-child(2){
		font-size: 14px;
		color: #068FD4;
		padding-right: 20px;
	}
	.sifakc_tongji{
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #eee;
	}
	.tongji_youce{
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.caidan{
		width: 80px;
		height: 35px;
		border: 1px solid #eee;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 20px;
		border-radius: 5px;
		img{
			width: 15px;
			height: 15px;
		}
		div{
			width: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		div:nth-child(1){
			border-right: 1px solid #eee;
		}
		
	}
	.tongji_youce .sifashiti_sousuo{
		display: flex;
		align-items: center;
		margin: 0 20px;
		input{
			width: 230px;
			height: 35px;
			padding-left: 10px;
			border-radius: 5px 0 0 5px;
			border: 1px solid #eee;
			font-size: 14px;
		}
		div{
			width: 80px;
			height: 36px;
			border-radius: 0 5px 5px 0;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #fff;
			background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
		}
	}
	.peixun_kecheng{
		width: 100%;
		height: 30vw;
		overflow: auto;
	}
	.peixun_kecheng::-webkit-scrollbar{
		display:none;
	}
	.kecheng_content{
		width: 100%;
		border:1px solid #eee;
		margin-top: 20px;
		.kecheng_toubu{
			width: 98%;
			padding: 10px 1%;
			border-bottom: 1px solid #EEE;
			background: #f7f7f7;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
	.kctb_zuo{
		display: flex;
		align-items: center;
		.kecheng_fenge{
			margin: 0 15px;
			width: 1px;
			height: 20px;
			background: #333;
		}
	}
	.kaishi_xuexisi{
		width: 120px;
		height: 35px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		border-radius: 5px;
		background: #44cc35;
	}
	.kecheng_pxcontent{
		width: 96%;
		padding: 10px 2%;
		display: flex;
		align-items: center;
		.kecheng_img{
			width: 13%;
			height: 120px;
			background: #0EA9D7;
			position: relative;
			margin-right: 20px;
			img {
				width: 100%;
				height: 100%;
			}
			div{
				width: 96%;
				padding: 6px 2%;
				color: #fff;
				background: rgba(0,0,0,0.5);
				position: absolute;
				bottom: 0;
				text-align: left;
				font-size: 14px;
			}
		}
		.kecheng_jianjie{
			color: #999;
			text-align: left;
			span{
				color: #333;
				display: inline-block;
				margin-left: 20px;
			}
			div:nth-child(2){
				margin-top: 20px;
			}
		}
	}
</style>


<template>
	<div class="tianjia add-lvsuo-container">
		<div class="top_manalvs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: 'manapeixun' }">培训管理</el-breadcrumb-item>
				<el-breadcrumb-item>制定培训计划</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="tianjia-header">
			<el-form :model="queryCondition" :rules="rules" ref="queryCondition">
				<el-row type="flex" align="middle" justify="start">
					<el-col :span="16">
						<el-form-item label="培训主题:" prop="trainTitle">
							<span class="el-text" v-if="this.query.type === 'view'">{{queryCondition.trainTitle}}</span>
							<el-input v-else maxlength="100"  v-model="queryCondition.trainTitle" placeholder="请输入培训主题"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type="flex" align="middle" justify="start">
					<el-col :span="8">
						<el-form-item label="培训方式:" prop="trainMode">
							<span class="el-text" v-if="this.query.type === 'view'">{{queryCondition.trainMode}}</span>
							<el-select v-else v-model="queryCondition.trainMode" placeholder="请选择">
									<el-option
										v-for="item in peixunfangshiList"
										:key="item.dictDataCode"
										:label="item.dictDataName"
										:value="item.dictDataCode">
									</el-option>
								</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="适用岗位:" prop="matchPos">
							<span class="el-text" v-if="this.query.type === 'view'">{{queryCondition.matchPos}}</span>
							<el-select v-else  v-model="queryCondition.matchPos" placeholder="请选择" @change="changeMatchPos">
								<el-option
									v-for="item in positionList"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<el-form-item label="培训级别:" prop="trainLevel" v-if="queryCondition.trainMode === '2' && this.query.type !== 'view'">
							<el-select v-model="queryCondition.trainLevel" placeholder="请选择">
									<el-option
										v-for="item in peixunjibieList"
										:key="item.dictDataCode"
										:label="item.dictDataName"
										:value="item.dictDataCode">
									</el-option>
								</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="培训类型:" prop="trainType">
							<span class="el-text" v-if="this.query.type === 'view'">{{queryCondition.trainType}}</span>
							<el-select v-else  v-model="queryCondition.trainType" placeholder="请选择">
									<el-option
										v-for="item in peixunleixingList"
										:key="item.dictDataCode"
										:label="item.dictDataName"
										:value="item.dictDataCode">
									</el-option>
								</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8" v-if="this.query.type === 'view'">
						<el-form-item label="培训状态" prop="trainType">
							<span class="el-text">{{queryCondition.trainStatus}}</span>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type="flex" align="middle" justify="start">
					<el-col :span="12">
						<el-form-item label="开始时间" prop="startTime">
							<!-- <single-date :num="num" @getDateInfo="getDateInfo" ref="getDate"></single-date> -->
							<el-date-picker
								v-model="queryCondition.startTime"
								type="datetime"
								placeholder="选择日期时间">
							</el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="截止时间" prop="endTime">
							<!-- <single-date :num="num" :obj="obj" @getDateInfo="getDateInfo" ref="getDate"></single-date> -->
							<el-date-picker
								v-model="queryCondition.endTime"
								type="datetime"
								placeholder="选择日期时间">
							</el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="16" v-if="queryCondition.trainMode === '2' && this.query.type !== 'view'">
						<el-form-item label="培训地点" prop="trainAddr">
							<el-input v-model="queryCondition.trainAddr" placeholder="请输入培训地点"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="16" v-if="queryCondition.trainMode === '2' && this.query.type !== 'view'">
						<el-form-item label="培训主要内容概述" prop="trainContent">
							<el-input type="textarea" :rows="4" v-model="queryCondition.trainContent" placeholder="请输入培训主要内容概述"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type="flex" align="middle" justify="start">
					<el-col :span="8" v-if="queryCondition.trainMode !== '2'">
						<el-form-item label="培训课件:" prop="couId">
							<span class="el-text" v-if="this.query.type === 'view'">{{queryCondition.couId}}</span>
							<el-select v-else v-model="queryCondition.couId" placeholder="请选择">
								<el-option
									v-for="item in peixunkejianList"
									:key="item.resId"
									:label="item.couName"
									:value="item.resId">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type="flex" align="middle" justify="start">
					<el-col :span="8" v-if="queryCondition.trainMode === '2' || this.query.type === 'view'">
						<el-form-item label="课件类型:" prop="openType">
							<span class="el-text" v-if="this.query.type === 'view'">{{queryCondition.openType}}</span>
							<el-radio-group v-else v-model="queryCondition.openType">
								<el-radio :label="2">公开</el-radio>
								<el-radio :label="1">不公开</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span="8" v-else>
						<el-form-item label="公开类型" prop="openType">
							<el-radio-group v-model="queryCondition.openType">
								<el-radio :label="2">公开</el-radio>
								<el-radio :label="1">不公开</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="负责人:" prop="principalUserId">
							<span class="el-text" v-if="this.query.type === 'view'">{{queryCondition.principalUserId}}</span>
							<el-select v-else v-model="queryCondition.principalUserId" placeholder="请选择">
								<el-option
									v-for="item in personList"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type="flex" align="middle" justify="start">
					<el-col :span="8">
					<el-form-item label="培训人数:" prop="trainUserTotal">
						<span class="el-text" v-if="this.query.type === 'view'">{{queryCondition.trainUserTotal}}</span>
						<el-input v-else v-model="queryCondition.trainUserTotal" placeholder="自动获取 人"></el-input>
					</el-form-item>
				</el-col>
				</el-row>
				<el-row type="flex" align="middle" justify="start">
					<el-form-item label="培训人员:" prop="">
						<el-table :data="tableData" border style="width: 100%" v-if="this.query.type === 'view'">
								<el-table-column  type="index" label="序号" width="80"> </el-table-column>
								<el-table-column  prop="lawyerName" label="姓名"></el-table-column>
								<el-table-column  prop="orgName"  label="所属律所"></el-table-column>
								<el-table-column  prop="lawyerPhone"  label="联系电话"></el-table-column>
								<el-table-column  prop="studyCount"  label="学习次数"></el-table-column>
								<el-table-column  prop="accTime"  label="累计时长"></el-table-column>
								<el-table-column  prop="studyProcess"  label="学习进度"></el-table-column>
								<el-table-column  prop="studyStatus"  label="学习状态"></el-table-column>
							</el-table>
							<el-table :data="peixunjihua" border style="width: 100%" v-else>
								<el-table-column  type="index" label="序号" width="80"> </el-table-column>
								<el-table-column  prop="lawyerName" label="姓名"></el-table-column>
								<el-table-column  prop="deptName" label="所属科室" v-if="queryCondition.trainMode === '2'"></el-table-column>
								<el-table-column  prop="deptName" label="所属律所" v-else></el-table-column>
								<el-table-column  prop="phoneNum"  label="联系电话"></el-table-column>
								<el-table-column label="操作">
									<template slot-scope="scope">
										<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
									</template>
								</el-table-column>
							</el-table>
							<div class="p_page">
							<el-pagination background
								@size-change="handleSizeChange"
								@current-change="handleCurrentChange"
								:current-page="pageRequest.pageIndex"
								:page-sizes="[10]"
								:page-size="pageRequest.limit"
								layout="total, sizes, prev, pager, next, jumper"
								:total="pageRequest.results">
								</el-pagination>
						</div>
						</el-form-item>
				</el-row>
			</el-form>
		</div>
		<!-- <NPxplanTree></NPxplanTree> -->
		<div v-if="this.query.type !== 'view'">
			<el-button type="primary" @click="submitConsultInfo">提交</el-button>
			<el-button @click="goBack">取消</el-button>
		</div>
	</div>
</template>

<script>

	import {getSelectDetail, plan, manakejians, getTrainPlanInfo, getLawyerStudyList, refreshLawyerList, removeLawyer} from "../../http/api"
	import * as crud from '../../assets/js/co-crud.js'
	import SingleDate from '../../components/SingleDate'
	import util from '@/assets/js/co-util'
	// import NPxplanTree from './n_pxplan_tree'
	export default {
		components: {
			SingleDate
		},
		data() {
			return {
				num: 3,
				query: {
					type: '',
					planId: ''
				},
				pageRequest: crud.getQueryCondition({}),
				//新增和修改律所信息
				queryCondition: {
					trainTitle:'',     //培训主题
					trainMode: '',  //培训方式
					matchPos:'',  //适用岗位
					trainType:'',   //培训类型
					startTime: '', // 开始时间
					endTime: '', // 截止时间
					couId: '', // 培训课件
					openType:'',  // 公开类型
					principalUserId: sessionStorage.getItem("token"), // 负责人
					trainAddr: '',
					trainContent: '',
					trainLevel: '',
					trainStatus: '',
					trainUserTotal: ''
				},
				peixunfangshiList: [],    //培训方式数据
				peixunleixingList: [],    //培训类型数据
				peixunkejianList: [], // 培训课件数据
				peixunjibieList: [], // 培训级别数据
				peixunzhuangtaiList: [], // 培训状态数据
				positionList:[
					{
						label: '外部律师',
						value: '2'
					}
				],  // 适用岗位
				personList: [
					{
						label: sessionStorage.getItem("name"),
						value: sessionStorage.getItem("token")
					}
				], // 负责人
				rules: {
					trainTitle: [
						{required: true,message: "请输入培训主题",trigger: "blur"}
					],
					trainMode: [
						{required: true,message: "请选择培训方式",trigger: "change"}
					],
					matchPos: [
						{required: true,message: "请输入适用岗位",trigger: "blur"}
					],
					trainType:[
						{required: true,message: "请选择培训类型",trigger: "change"}
					],
					startTime: [
						{required: true,message: "请输入开始时间",trigger: "change"}
					],
					endTime: [
						{required: true,message: "请输入截止时间",trigger: "change"}
					],
					trainAddr: [
						{required: true,message: "请输入培训地点",trigger: "blur"}
					],
					trainContent: [
						{required: true,message: "请输入培训主要内容概述",trigger: "blur"}
					],
					couId: [
						{required: true,message: "请选择培训课件",trigger: "change"}
					],
					openType: [
						{required: true,message: "请选择公开类型",trigger: "change"}
					],
					principalUserId: [
						{required: true,message: "请选择负责人",trigger: "change"}
					]
				},
				peixunjihua: [],
				tableData: []
			}
		},
		created() {
			if (this.$route.query.type) {
				this.query.type = this.$route.query.type
				this.query.planId = this.$route.query.id
				this.getLawyerStudyList()
			}
			if (this.$route.query.id) {
				this.query.planId = this.$route.query.id
				this.lvsuo_texts = "修改培训计划"
				this.getTrainPlanInfo()
			}
			this.wayData()
			this.typeData()
			this.levelData()
			this.stateData()
			this.manakejians()
		},
		mounted() {
			// this.getDateInfo()
		},
		methods: {
			//根据日期查询
			// getDateInfo(){
			// 	const dateInfo = this.$refs.getDate.getDateInfo();
			// 	let {startDate, startTime, endDate, endTime} = dateInfo
			// 	this.queryCondition.startDate = startDate
			// 	this.queryCondition.endDate = endDate
			// 	this.queryCondition.startTime = startTime
			// 	this.queryCondition.endTime = endTime
			// 	// this.getStartedList(dateInfo);
			// },
			// 初始化获取时间
			getTimeInit(time){
				console.log(time.startTime);
				// this.getStartedList(time);
			},
			//获取培训方式数据字典
			wayData(){
				getSelectDetail({
					dictCode:'peixunfangshi',
					userId:'1'
				}).then(res=>{
					if(res.code == '200'){
						this.peixunfangshiList = res.content.resultList
					}
				})
			},
			//获取培训类型数据字典
			typeData(){
				getSelectDetail({
					dictCode:'peixunleixing',
					userId:'1'
				}).then(res=>{
					if(res.code == '200'){
						this.peixunleixingList = res.content.resultList
					}
				})
			},
			// 获取培训等级数据字段
			levelData() {
				getSelectDetail({
					dictCode:'peixundengji',
					userId:'1'
				}).then(res => {
					if (res.code == '200') {
						this.peixunjibieList = res.content.resultList
					}
				})
			},
			//获取培训状态数据字典
			stateData(){
				getSelectDetail({
					dictCode:'peixujihuazhuangtai',
					userId:'1'
				}).then(res=>{
					if(res.code == '200'){
						this.peixunzhuangtaiList = res.content.resultList
					}
				})
			},
			// 适用岗位
			changeMatchPos (event) {
				console.log(111, event)
				// if (event) {
				// 	this.getInnerLawyerList()
				// } else {
				// 	this.getLawyerListByOffice()
				// }
				this.refreshLawyerList()
			},
			// 选择岗位后更新律师列表
			refreshLawyerList () {
				let obj = {
					token: sessionStorage.getItem("token"),
					matchPos: this.queryCondition.matchPos,
					deptList: [],
					ageSize: this.pageRequest.limit,
					pageNum: this.pageRequest.pageIndex
				}
				refreshLawyerList(obj).then(res => {
					if (res.code == '200') {
						console.log('律师', res.content)
							let {content} = res
							let {dataList, pageInfo} = content
								this.peixunjihua = dataList
								let pageResponse = {
								start: (pageInfo.pageNum*10) - 10,
								limit: 10,
								results: pageInfo.total
							}
							this.queryCondition.trainUserTotal = pageResponse.results
							this.pageRequest = crud.getCurrentPage(pageResponse)
					}
				})	
			},
			// 查询课件
			manakejians() {
				let obj ={
					token: sessionStorage.getItem("token")
				}
				manakejians(obj).then(res => {
					if (res.code == '200') {
						this.peixunkejianList = res.content.dataList
					}
				})
		},
			// // 查询律师
			// queryLawyerList () {
			// 	let obj = {
			// 		token: sessionStorage.getItem("token"),
			// 		pageSize: this.pageRequest.limit,
			// 		pageNum: this.pageRequest.pageIndex
			// 	}
			// 	queryLawyerList(obj).then(res => {
			// 		if (res.code == '200') {
			// 		console.log('查询律师', res.content)
			// 		let {content} = res
			// 		let {dataList, pageInfo} = content
			// 			this.peixunjihua = dataList
			// 			let pageResponse = {
			// 			start: (pageInfo.pageNum*10) - 10,
			// 			limit: 10,
			// 			results: pageInfo.total
			// 		}
			// 		this.queryCondition.trainUserTotal = pageResponse.results
			// 		this.pageRequest = crud.getCurrentPage(pageResponse)
			// 		}
			// 	})
			// },
			// 分页
    handleSizeChange (limit) {
      this.pageRequest.limit = limit
			this.pageRequest = crud.getQueryCondition(this.pageRequest)
			this.refreshLawyerList()
		},
		// 分页
    handleCurrentChange (pageIndex) {
      this.pageRequest.pageIndex = pageIndex
      this.pageRequest = crud.getQueryCondition(this.pageRequest)
      this.refreshLawyerList()
		},
			// 查询计划详情
			getTrainPlanInfo() {
				let obj = {
					token: sessionStorage.getItem("token"),
					planId: this.query.planId
				}
				getTrainPlanInfo(obj).then(res => {
					if (res.code == '200') {
						console.log('详情', res.content)
						this.queryCondition = res.content
						let startTime = `${res.content.startDate} ${res.content.startTime}`
						let endTime = `${res.content.endDate} ${res.content.endTime}`
						this.queryCondition.startTime = new Date(startTime)
						this.queryCondition.endTime = new Date(endTime)
						this.queryCondition.couId = this.queryCondition.couName
						this.queryCondition.principalUserId = sessionStorage.getItem("token")
						this.queryCondition.trainMode = res.content.trainMode.toString()
						if (this.queryCondition.matchPos) {
							this.refreshLawyerList()
						}
					}
				})
			},
			// 查看学习人进度列表
			getLawyerStudyList () {
				let obj = {
					token: sessionStorage.getItem("token"),
					planId: this.query.planId
				}
				getLawyerStudyList(obj).then(res => {
					if (res.code == '200') {
						console.log('进度列表', res.content.dataList)
						this.tableData = res.content.dataList
					}
				})
			},
			// 删除
			handleDelete(index, row) {
				let obj = {
					token: sessionStorage.getItem("token"),
					pageNum: this.pageRequest.pageIndex,
					lawyerList: [
						{
							lawyerId: row.lawyerId
						}
					]
				}
				removeLawyer(obj).then(res => {
					if (res.code =='200') {
						this.$message({
							message: '删除成功',
							type: 'success'
						})
						this.refreshLawyerList()
					}
				})
			},
			// 提交
			submitConsultInfo () {
				this.$refs.queryCondition.validate((valid) => {
					if (valid) {
						// let {token, trainTitle, trainMode, matchPos, trainType, startDate, endDate, startTime, endTime, couId, openType, principalUserId, trainAddr, trainContent, trainLevel, trainStatus} = this.queryCondition
						// let obj = {
						// 	token,
						// 	trainTitle,
						// 	trainMode,
						// 	matchPos,
						// 	trainAddr,
						// 	trainContent,
						// 	trainType,
						// 	trainLevel,
						// 	startDate,
						// 	startTime,
						// 	endDate,
						// 	endTime,
						// 	openType,
						// 	couId,
						// 	principalUserId,
						// 	trainStatus
						// }
						let obj = JSON.parse(JSON.stringify(this.queryCondition))
						let startTime = new Date(this.queryCondition.startTime).getTime()
						let endTime = new Date(this.queryCondition.endTime).getTime()
						// console.log(util.formatDate(startTime, 'YYYY-MM-DD hh:mm:ss'))
						obj.startDate = util.formatDate(startTime, 'YYYY-MM-DD')
						obj.startTime = util.formatDate(startTime, 'hh:mm:ss')
						obj.endDate = util.formatDate(endTime, 'YYYY-MM-DD')
						obj.endTime = util.formatDate(endTime, 'hh:mm:ss')
						plan(obj).then(res => {
							if (res.code == '200') {
								this.$message({
									message: '提交成功',
									type: 'success'
								})
								this.goBack()
							}
						})
					} else {
						console.log('error submit!!')
            return false
					}
				})
			},
			// 取消
			goBack () {
				this.$router.push({
					path:'/manapeixun'
				})
			}
		}
	}
</script>

<style lang="scss">
	.add-lvsuo-container {
		.top_manalvs {
			width: 96%;
			padding: 0 2%;
			height: 70px;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #eee;
		}
		.tianjia-header {
			width: 100%;
			padding: 20px;
			.el-form {
				margin-bottom: 20px;
				.el-row {
					.el-form-item {
						margin: 0;
					}
					margin-bottom: 10px;
					&:last-child {
						margin-bottom: 0;
					}
					.el-col-twoline {
						display: inline-block;
						position: relative;
					}
					.el-date-editor--daterange.el-input__inner {
						width: 100%;
					}
					.el-form-item__label {
						width: 130px;
						float: left;
						text-align: right;
					}
					.el-form-item__content {
						display: block;
						padding-left: 130px;
						text-align: left;
					}
					.el-form-item {
						white-space: nowrap;
					}
					.el-select {
						display: block;
						position: relative;
					}
					.el-form-item.c-query-select {
						white-space: nowrap;
						display: block;
						.el-input {
							width: 100%;
							.el-input__inner {
								width: 100%;
							}
						}
						.el-form-item__label .c-left {
							text-align: left;
						}
					} // 搜索重置按钮
					.c-query-input {
						display: block;
						white-space: nowrap;
						// .el-button {
						//   width: 128px;
						//   padding: 0;
						//   margin-left: 20px;
						// }
						.el-button:nth-child(1) {
							margin-left: 0;
						}
					} // 搜索重置按钮右浮动
					.f-right {
						float: right;
					}
					.c-query-range-date {
						white-space: nowrap;
						width: 100%;
					}
					div.el-form-item.c-query-range-date {
						margin-right: 0;
					}
				}
				.el-input-number {
					.el-input__inner {
						text-align: left;
					}
				}
			}
		}
	}
</style>
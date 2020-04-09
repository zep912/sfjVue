
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
					<el-col :span="8">
						<el-form-item label="培训主题" prop="trainTitle">
							<el-input maxlength="100"  v-model="queryCondition.trainTitle" placeholder="请输入培训主题"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="培训方式" prop="trainMode">
							<el-select v-model="queryCondition.trainMode" placeholder="请选择">
									<el-option
										v-for="item in peixunfangshiList"
										:key="item.dictDataCode"
										:label="item.dictDataName"
										:value="item.dictDataCode">
									</el-option>
								</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type="flex" align="middle" justify="start">
					<el-col :span="8">
						<el-form-item label="适用岗位" prop="matchPos">
							<el-select v-model="queryCondition.matchPos" placeholder="请选择" @change="changeMatchPos">
								<el-option
									v-for="item in positionList"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="培训类型" prop="trainType">
							<el-select v-model="queryCondition.trainType" placeholder="请选择">
									<el-option
										v-for="item in peixunleixingList"
										:key="item.dictDataCode"
										:label="item.dictDataName"
										:value="item.dictDataCode">
									</el-option>
								</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type="flex" align="middle" justify="start">
					<el-col :span="12">
						<el-form-item label="开始时间" prop="startTime">
							<single-date :num="'3'" @getDateInfo="getDateInfo" ref="getDate"></single-date>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="截止时间" prop="endTime">
							<single-date :num="'3'" @getDateInfo="getDateInfo" ref="getDate"></single-date>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type="flex" align="middle" justify="start">
					<el-col :span="8">
						<el-form-item label="培训课件" prop="peixunzhuangtai">
							<el-select v-model="queryCondition.peixunzhuangtai" placeholder="请选择">
								<el-option
									v-for="item in peixunkejianList"
									:key="item.resId"
									:label="item.couName"
									:value="item.resId">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="公开类型" prop="openType">
							<el-radio-group v-model="queryCondition.openType">
								<el-radio :label="2">公开</el-radio>
								<el-radio :label="1">不公开</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type="flex" align="middle" justify="start">
					<el-col :span="8">
						<el-form-item label="负责人" prop="principalUserId">
							<el-select v-model="queryCondition.principalUserId" placeholder="请选择">
								<el-option
									v-for="item in personList"
									:key="item.dictDataCode"
									:label="item.personName"
									:value="item.personId">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
					<el-form-item label="培训人数" prop="peixunfangshi">
						<el-input v-model="queryCondition.shiyonggangwei" placeholder="全部社会律师"></el-input>
					</el-form-item>
				</el-col>
				</el-row>
				<el-row type="flex" align="middle" justify="start">
					<el-form-item label="培训人员" prop="">
							<el-table :data="peixunjihua" border style="width: 100%">
								<el-table-column  type="index" label="序号" width="80"> </el-table-column>
								<el-table-column  prop="trainTitle" label="姓名"></el-table-column>
								<el-table-column  prop="trainUserTotal"  label="所属律师"></el-table-column>
								<el-table-column  prop="trainMode"  label="联系电话"></el-table-column>
								<el-table-column label="操作" >
									<template slot-scope="scope">
										<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
									</template>
								</el-table-column>
							</el-table>
							<!-- <div class="p_page">
								<el-pagination background
									@size-change="handleSizeChange"
									@current-change="handleCurrentChange"
									:current-page="queryCondition.page.pageIndex"
									:page-size="queryCondition.page.limit"
									layout="total, sizes, prev, pager, next, jumper"
									:total="queryCondition.page.results">
									</el-pagination>
							</div> -->
						</el-form-item>
				</el-row>
			</el-form>
		</div>
		<!-- <NPxplanTree></NPxplanTree> -->
		<div>
			<el-button type="primary" @click="submitConsultInfo">提交</el-button>
			<el-button>取消</el-button>
		</div>
	</div>
</template>

<script>

	import {getSelectDetail, plan, manakejians, getInnerLawyerList, getLawyerListByOffice, queryLawyerList} from "../../http/api"
	import * as crud from '../../assets/js/co-crud.js'
	import SingleDate from '../../components/SingleDate'
	// import NPxplanTree from './n_pxplan_tree'
	// import util from '@/assets/js/co-util'
	export default {
		components: {
			SingleDate
		},
		data() {
			return {
				type: '',
				//新增和修改律所信息
				queryCondition: {
					trainTitle:'',     //培训主题
					trainMode: '',  //培训方式
					matchPos:'',  //适用岗位
					trainType:'',   //培训类型
					startTime: '', // 开始时间
					endTime: '', // 截止时间
					peixunzhuangtai: '', // 培训课件
					openType:'',  // 公开类型
					principalUserId: '', // 负责人
					peixunfangshi: '' // 培训人数
				},
				peixunfangshiList: [],    //培训方式数据
				peixunleixingList: [],    //培训类型数据
				peixunkejianList: [], // 培训课件数据
				positionList:[
					{
						label: '内部律师',
						value: 1
					},
					{
						label: '外部律师',
						value: 2
					}
				],  // 适用岗位
				personList: [], // 负责人
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
					peixunzhuangtai: [
						{required: true,message: "请选择培训课件",trigger: "change"}
					],
					openType: [
						{required: true,message: "请选择公开类型",trigger: "change"}
					],
					principalUserId: [
						{required: true,message: "请选择负责人",trigger: "change"}
					]
				},
				peixunjihua: []
			}
		},
		created() {
			if (this.$route.query.type) {
				this.type = this.$route.query.type
			}
			if (this.$route.query.id) {
				this.lvsuo_texts = "修改培训计划";
			} else {
				this.wayData()
				this.typeData()
				// this.stateData()
				this.manakejians()
				this.queryLawyerList()
			}
		},
		mounted() {
			this.getDateInfo();
		},
		methods: {
			//根据日期查询
			getDateInfo(){
				const dateInfo = this.$refs.getDate.getDateInfo();
				console.log(dateInfo);
				// this.getStartedList(dateInfo);
			},
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
				if (event) {
					this.getInnerLawyerList()
				} else {
					this.getLawyerListByOffice()
				}
			},
			// 获取内部律师列表
			getInnerLawyerList() {
				let obj = {
					token: sessionStorage.getItem("token")
				}
				getInnerLawyerList(obj).then(res => {
					if (res) {
						console.log('律师', res.content)
						this.personList = res.content.dataList
					}
				})
			},
			// 查询外部律师列表
			getLawyerListByOffice () {
				let obj = {
					token: sessionStorage.getItem("token")
				}
				getLawyerListByOffice(obj).then(res => {
					console.log('律师', res.content)
					this.personList = res.content.dataList
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
			// 查询律师
			queryLawyerList () {
				let obj ={
					token: sessionStorage.getItem("token"),
					pageNum: '1'
				}
				queryLawyerList(obj).then(res => {
					if (res.code == '200') {
						console.log('查询律师', res.content)
						this.peixunjihua = res.content.dataList
					}
				})
			},
			// 分页
			handleSizeChange (limit) {
				this.queryCondition.page.limit = limit
				this.queryCondition.page = crud.getQueryCondition(this.queryCondition.page)
			},
			// 分页
			handleCurrentChange (pageIndex) {
				this.queryCondition.page.pages = pageIndex
				this.queryCondition.page = crud.getQueryCondition(this.queryCondition.page)
			},
			// 提交
			submitConsultInfo () {
				this.$refs.queryCondition.validate((valid) => {
					if (valid) {
						plan().then(res => {
							if (res) {
								this.$message({
									message: '删除成功',
									type: 'success'
								})
							}
						})
					} else {
						console.log('error submit!!')
            return false
					}
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
						width: 85px;
						float: left;
						text-align: right;
					}
					.el-form-item__content {
						display: block;
						padding-left: 85px;
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
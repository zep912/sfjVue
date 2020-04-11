<template>
	<div class="pufaxuanchuan">
		<div class="zaixian_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/zhize' }">职责</el-breadcrumb-item>
				<el-breadcrumb-item>普法宣传</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="zixun_content">
			<div class="zixun_tab">
				<!-- <div :class="zixun_active==1?'zixun_active':''" @click="zixuntab(1)">以案释法</div> -->
				<div :class="zixun_active==2?'zixun_active':''" @click="zixuntab(2)">法律法规</div>
			</div>
		</div>
		<div class="zixun_liebiao" v-if="zixun_active==2">
			<div class="liebiao_top">
				<el-form :model="queryCondition" ref="ruleForm">
					<el-row type="flex" align="middle" justify="start">
						<!-- <div>
							<el-button type="success" @click="add">新增</el-button>
						</div> -->
						<el-col :span="8">
							<el-form-item class="c-query-select" label="效力级别：" prop="scopeLevel">
								<el-select v-model="queryCondition.scopeLevel" placeholder="请选择">
									<el-option
										v-for="item in xiaolijibieList"
										:key="item.dictDataCode"
										:label="item.dictDataName"
										:value="item.dictDataCode">
									</el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="8">
							<el-form-item class="c-query-select" label="时效性：" prop="lawTimeliness">
								<el-select v-model="queryCondition.lawTimeliness" placeholder="请选择">
									<el-option
										v-for="item in shixiaoxingList"
										:key="item.dictDataCode"
										:label="item.dictDataName"
										:value="item.dictDataCode">
									</el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="8">
							<div class="c-input f-right">
								<input type="text" v-model="queryCondition.lawTitle" class="c-query-select" placeholder="请输入标题查询">
								<div class="liebiao_search" @click="getData">
									<img src="../../../assets/image/u2290.png" alt="">
								</div>
							</div>
						</el-col>
					</el-row>
				</el-form>
			</div>
			<div class="biaoge">
				<el-table :data="peixunjihua" border style="width: 100%" key="1">
					<el-table-column type="index" label="序号" width="60">
					</el-table-column>
					<el-table-column prop="lawTitle" label="标题">
					</el-table-column>
					<el-table-column prop="scopeLevel" label="效力级别">
					</el-table-column>
					<el-table-column prop="enactOrg" label="颁布单位">
					</el-table-column>
					<el-table-column prop="lawTimeliness" label="时效性">
					</el-table-column>
					<el-table-column prop="enactDate" label="颁布日期">
					</el-table-column>
					<el-table-column prop="execDate" label="实施日期">
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" type="primary"  @click="chakan(scope.$index, scope.row)">查看</el-button>
						</template>
					</el-table-column>
				</el-table>
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
		<!--  -->
		<div class="zixun_liebiao" v-if="zixun_active==1">
			<div class="liebiao_top">
				<el-form :model="queryCondition" ref="ruleForm">
					<el-row type="flex" align="middle" justify="start">
						<div>
							<el-button type="success">现场登记</el-button>
						</div>
						<el-col :span="8">
							<el-form-item class="c-query-select" label="问题类型：" prop="trainMode">
								<el-select v-model="queryCondition.trainMode" placeholder="请选择" @change="getData()">
									<el-option
										v-for="item in options"
										:key="item.dictDataCode"
										:label="item.dictDataName"
										:value="item.dictDataCode">
									</el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="8">
							<el-form-item class="c-query-select" label="状态：" prop="trainMode">
								<el-select v-model="queryCondition.trainMode" placeholder="请选择" @change="getData()">
									<el-option
										v-for="item in options"
										:key="item.dictDataCode"
										:label="item.dictDataName"
										:value="item.dictDataCode">
									</el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="8">
							<div class="c-input f-right">
								<input type="text" placeholder="请输入搜索内容">
								<div class="c-input_search">
									<img src="../../../assets/image/u2290.png" alt="">
								</div>
							</div>
						</el-col>
					</el-row>
				</el-form>
			</div>
			<div class="biaoge">
				<el-table :data="yianshifa" border style="width: 100%" key="2">
					<el-table-column type="index" label="序号" width="60">
					</el-table-column>
					<el-table-column prop="caseTitle" label="标题">
					</el-table-column>
					<el-table-column prop="caseType" label="问题类型">
					</el-table-column>
					<el-table-column prop="name" label="提问者">
					</el-table-column>
					<el-table-column prop="name" label="手机号码">
					</el-table-column>
					<el-table-column prop="publishStatus" label="状态">
					</el-table-column>
					<el-table-column prop="name" label="操作">
					</el-table-column>
				</el-table>
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
</template>
<script>
import {getSelectDetail, getLawRegulationsList} from "../../../http/api"
import * as crud from '../../../assets/js/co-crud.js'
import util from '@/assets/js/co-util'
	export default {
		data() {
			return {
				queryCondition: {
					token: sessionStorage.getItem("token"),
					scopeLevel: null,
					lawTimeliness: null,
					lawTitle: '',
					pageRequest: crud.getQueryCondition({})
				},
				xiaolijibieList: [], // 效力级别
				shixiaoxingList: [], // 时效性
				peixunjihua: [],
				options: [{
					value: '选项1',
					label: '黄金糕'
				},],
				zixun_active: 2,
				yianshifa: []
			}
		},
		created() {
			this.wayData()
			this.typeData()
			this.getData()
		},
		methods: {
			zixuntab(e) {
				this.zixun_active = e
			},
			//获取效力级别数据字典
			wayData(){
				getSelectDetail({
					dictCode:'xiaolijibie',
					userId:'1'
				}).then(res=>{
					if(res.code == '200'){
						this.xiaolijibieList = [{dictDataCode: null, dictDataName: '全部'}].concat(Object.keys(res.content.resultList).map((key) => res.content.resultList[key]))
					}
				})
			},
			//获取时效性数据字典
			typeData(){
				getSelectDetail({
					dictCode:'shixiaoxing',
					userId:'3'
				}).then(res=>{
					if(res.code == '200'){
						this.shixiaoxingList = [{dictDataCode: null, dictDataName: '全部'}].concat(Object.keys(res.content.resultList).map((key) => res.content.resultList[key]))
					}
				})
			},
			getData () {
				let request = JSON.parse(JSON.stringify(this.queryCondition))
				request.pageSize = request.pageRequest.limit
				request.pageNum = request.pageRequest.pageIndex
				delete request.pageRequest
				util.dealNullQueryCondition(request)
				getLawRegulationsList(request).then(res => {
					if (res.code === 200) {
						console.log(333, res)
						let {content} = res
						let {dataList, pageInfo} = content
						this.peixunjihua = dataList
						// console.log(111, pageInfo)
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
			},
			chakan () {

			}
		}
	}
</script>

<style lang="scss">
	.pufaxuanchuan {
		width: 100%;
		height: 100%;
			.zaixian_top {
			width: 95%;
			height: 70px;
			padding-left: 5%;
			border-bottom: 1px solid #eee;
			display: flex;
			align-items: center;
		}

		.zixun_content {
			width: 100%;
		}

		.zixun_tab {
			width: 94%;
			padding: 10px 3%;
			background: #f2f2f2;
			display: flex;
			align-items: center;
			justify-content: flex-start;
		}

		.zixun_tab>div {
			width: 120px;
			height: 30px;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.zixun_liebiao {
			width: 96%;
			padding: 20px 2%;
		}

		.liebiao_top {
			// display: flex;
			// align-items: center;
			// justify-content: space-between;
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
					} 
					.c-input {
						display: flex;
						// white-space: nowrap;
						justify-content:flex-end;
						input {
							width: 120px;
							height: 36px;
						}
						.c-input_search {
							width: 80px;
							height: 40px;
							background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
							display: flex;
							align-items: center;
							justify-content: center;
							border-radius: 0 5px 5px 0;
						}
					}
					 // 搜索重置按钮
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

		.liebiao_topzuo {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 40%;
		}
		.liebiao_sousuo {
			width: 50%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}

		.liebiao_sousuo input {
			width: 160px;
			height: 38px;
			padding-left: 10px;
			font-size: 14px;
			border-radius: 5px 0 0 5px;
			border: 1px solid #eee;
		}
		.liebiao_search {
			width: 80px;
			height: 40px;
			background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 0 5px 5px 0;
		}
		.zixun_fenye {
			width: 100%;
			height: 100px;
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}

		.zixun_active {
			color: #068FD4;
			position: relative;
			font-weight: 600;
		}
		.zixun_active:after {
			width: 100px;
			height: 2px;
			background: #068FD4;
			position: absolute;
			top: 34px;
			left: 10px;
			content: '';
		}

		.biaoge {
			margin-top: 20px;
		}
	}
</style>

<template>
	<div class="p_conright">
		<div class="top_manalvs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item>培训管理</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div>
			<!-- 查询条件 -->
			<div class="biaoge_header">
				<el-form :model="queryCondition" ref="ruleForm">
					<el-row type="flex" align="middle" justify="start">
						<el-col :span="8">
							<el-form-item class="c-query-select" label="培训方式：" prop="trainMode">
								<el-select v-model="queryCondition.trainMode" placeholder="请选择" @change="getData()">
									<el-option
										v-for="item in wayList"
										:key="item.dictDataCode"
										:label="item.dictDataName"
										:value="item.dictDataCode">
									</el-option>
								</el-select>
							</el-form-item>
						</el-col>	
						<el-col :span="8">
							<el-form-item class="c-query-select" label="培训级别：" prop="levelValue">
								<el-select v-model="queryCondition.levelValue" placeholder="请选择"  @change="getData()">
									<el-option
										v-for="item in levelList"
										:key="item.dictDataCode"
										:label="item.dictDataName"
										:value="item.dictDataCode">
									</el-option>
							</el-select>
							</el-form-item>
						</el-col>	
						<el-col :span="8">
							<el-form-item class="c-query-select" label="培训类型：" prop="trainType">
								<el-select v-model="queryCondition.trainType" placeholder="请选择" @change="getData()">
										<el-option
											v-for="item in typeList"
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
							<el-form-item class="c-query-select" label="培训状态：" prop="trainStatus">
								<el-select v-model="queryCondition.trainStatus" placeholder="请选择"  @change="getData()">
										<el-option
											v-for="item in stateList"
											:key="item.dictDataCode"
											:label="item.dictDataName"
											:value="item.dictDataCode">
										</el-option>
								</el-select>
							</el-form-item>
						</el-col>	
						<el-col :span="8">
							<el-form-item class="c-query-range-date" label="培训时间：" prop="value1">
								<el-date-picker
								class="c-query-range-date"
									v-model="queryCondition.value1"
									type="date"
									placeholder="选择日期"
									format="yyyy-MM-dd"
									value-format="yyyy-MM-dd"
									@change="getData()"
									>
								</el-date-picker>
							</el-form-item>
						</el-col>
						<el-col :span="8">
							<el-form-item class="c-query-range-date" label="自定义：" prop="value6">
								<el-date-picker
								class="c-query-range-date"
										v-model="queryCondition.value6"
										type="daterange"
										format="yyyy-MM-dd"
										value-format="yyyy-MM-dd"
										range-separator="至"
										start-placeholder="开始日期"
										end-placeholder="结束日期"
									@change="getData()">
									</el-date-picker>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row type="flex" align="middle" justify="start">
						<el-col :span="8">
							<el-form-item class="c-query-select" label="主题搜索：" prop="trainTitle">
								<el-input v-model="queryCondition.trainTitle" placeholder="请输入主题搜索"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="16"  class="c-query-input">
							<div class="f-right">
								<el-button type="primary" @click="getData()">搜索</el-button>
							</div>
						</el-col>
					</el-row>
				</el-form>
				<!-- 制定培训计划 -->
				<div class="biaoge_header_button">
					<el-button type="success" @click="zhiding">+ 制定培训计划</el-button>
				</div>
			</div>
			<!-- 表格 -->
			<div class="biaoge_content">
				<el-table :data="peixunjihua" border style="width: 100%">
				    <el-table-column  type="index" label="序号" width="80"> </el-table-column>
				    <el-table-column  prop="trainTitle" label="培训主题"></el-table-column>
				    <el-table-column  prop="trainUserTotal"  label="培训人数"></el-table-column>
						<el-table-column  prop="trainMode"  label="培训方式"></el-table-column>
						<el-table-column  prop="planStatusDesc" label="培训状态"></el-table-column>
						<el-table-column  prop="trainType" label="培训类型"></el-table-column>
						<el-table-column  prop="startDate" label="培训时间"></el-table-column>
						<el-table-column  prop="trainAddr" label="地点"></el-table-column>
						<el-table-column label="操作" width="240">
							<template slot-scope="scope">
								<el-button  size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
								<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
								<el-button size="mini" type="danger"  @click="chakan(scope.$index, scope.row)">查看</el-button>
							</template>
						</el-table-column>
				  </el-table>
			</div>
			<!-- 分页 -->
			<div class="p_page">
				<el-pagination background
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="queryCondition.page.pageIndex"
					:page-sizes="[10, 50, 100,200]"
					:page-size="queryCondition.page.limit"
					layout="total, sizes, prev, pager, next, jumper"
					:total="queryCondition.page.results">
					</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	import {manapeixun, getSelectDetail, deleteTrainPlan} from '../../http/api.js'
	import * as crud from '../../assets/js/co-crud.js'
	import util from '@/assets/js/co-util'
  export default {
    data() {
      return {
				queryCondition: {
					token: sessionStorage.getItem("token"),
					trainMode: null,
					trainStatus: null,
					trainType: null,
					trainTitle: '',
					page: crud.getQueryCondition({})
				},
				levelList:[],   //培训等级
				wayList:[],   //培训方式
				typeList:[],   //培训类型
				stateList:[],   //培训状态
				multipleSelection: [],
				peixunjihua:[],
    	}
  },
	created(){
		this.getData();
		this.wayData();
		this.levelData();
		this.typeData();
		this.stateData();
	},
	methods: {
    //获取培训方式数据字典
		wayData(){
			getSelectDetail({
				dictCode:'peixunfangshi',
				userId:'1'
			}).then(res=>{
				if(res.code == '200'){
					// console.log(111, res.content.resultList)
					this.wayList = [{dictCode: null, dictDataName: '全部'}].concat(Object.keys(res.content.resultList).map((key) => res.content.resultList[key]))
					// this.wayList = res.content.resultList
				}
			})
		},
		//获取培训等级数据字典
		levelData(){
			getSelectDetail({
				dictCode:'peixundengji',
				userId:'2'
			}).then(res=>{
				if(res.code == '200'){
					this.levelList = [{dictCode: null, dictDataName: '全部'}].concat(Object.keys(res.content.resultList).map((key) => res.content.resultList[key]))
					// this.levelList = res.content.resultList
				}
			})
		},
		//获取培训类型数据字典
		typeData(){
			getSelectDetail({
				dictCode:'peixunleixing',
				userId:'3'
			}).then(res=>{
				if(res.code == '200'){
					this.typeList = [{dictCode: null, dictDataName: '全部'}].concat(Object.keys(res.content.resultList).map((key) => res.content.resultList[key]))
					// this.typeList = res.content.resultList
				}
			})
		},
		//获取培训状态数据字典
		stateData(){
			getSelectDetail({
				dictCode:'peixujihuazhuangtai',
				userId:'4'
			}).then(res=>{
				if(res.code == '200'){
					this.stateList = [{dictCode: null, dictDataName: '全部'}].concat(Object.keys(res.content.resultList).map((key) => res.content.resultList[key]))
					// this.stateList = res.content.resultList
				}
			})
		},
		// 查询表格
		getData() {
			let request = JSON.parse(JSON.stringify(this.queryCondition))
			console.log(333, request.page.limit)
			request.pageSize = request.page.limit
			request.pageNum = request.page.pageIndex
			delete request.page
			util.dealNullQueryCondition(request)
			manapeixun(request).then(res=>{
				if(res){
					let {content} = res
					let {dataList, pageInfo} = content
					this.peixunjihua = dataList
					this.queryCondition.pageRequest = crud.getCurrentPage(pageInfo)
				}
			})
		},
		// 新增
		zhiding(){
			this.$router.push({
				path:'/n_pxplan'
			})
		},
		// 修改
		handleEdit (index, row) {
			this.$router.push({
				path:'/n_pxplan',
				query: {id: row.planId}
			})
		},
		// 查看
		chakan(index, row){
			this.$router.push({
				path:'/n_pxplan',
				query: {id: row.planId, type: 'view'}
			})
		},
		// 删除
		handleDelete (index, row) {
			let obj = {
				token: sessionStorage.getItem("token"),
				planId: row.planId
			}
			deleteTrainPlan(obj).then(res => {
				if (res) {
					this.$message({
						message: '删除成功',
						type: 'success'
					})
					this.getData()
				}
			})
		},
		// 分页
    handleSizeChange (limit) {
      this.queryCondition.page.limit = limit
      this.queryCondition.page = crud.getQueryCondition(this.queryCondition.page)
      this.getData()
		},
		// 分页
    handleCurrentChange (pageIndex) {
      this.queryCondition.page.pages = pageIndex
      this.queryCondition.page = crud.getQueryCondition(this.queryCondition.page)
      this.getData()
		}
	}
}
</script>

<style lang="scss">
.p_conright {
	.biaoge_header {
		width: 100%;
		padding: 20px;
		border-bottom: 1px solid #eee;
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
		.biaoge_header_button {
			text-align: left;
		}
	}
	.biaoge_content {
		margin-top: 20px;
	}
}
</style>

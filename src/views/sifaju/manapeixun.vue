<template>
	<div class="p_conright">
		<div class="manalvs">
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
						<el-col :span="5">
							<el-form-item class="c-query-select" label="培训方式：" prop="trainMode">
								<el-select v-model="queryCondition.trainMode" placeholder="请选择">
									<el-option
										v-for="item in wayList"
										:key="item.dictDataCode"
										:label="item.dictDataName"
										:value="item.dictDataCode">
									</el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="5">
							<el-form-item class="c-query-select" label="培训级别：" prop="trainLevel">
								<el-select v-model="queryCondition.trainLevel" placeholder="请选择" :disabled="queryCondition.trainMode === '1'">
									<el-option
										v-for="item in levelList"
										:key="item.dictDataCode"
										:label="item.dictDataName"
										:value="item.dictDataCode">
									</el-option>
							</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="5">
							<el-form-item class="c-query-select" label="培训类型：" prop="trainType">
								<el-select v-model="queryCondition.trainType" placeholder="请选择">
										<el-option
											v-for="item in typeList"
											:key="item.dictDataCode"
											:label="item.dictDataName"
											:value="item.dictDataCode">
										</el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="5">
							<el-form-item class="c-query-select" label="培训状态：" prop="trainStatus">
								<el-select v-model="queryCondition.trainStatus" placeholder="请选择">
									<el-option
													v-for="item in stateList"
													:key="item.dictDataCode"
													:label="item.dictDataName"
													:value="item.dictDataCode">
									</el-option>
								</el-select>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row type="flex" align="middle" justify="start">
						<el-col :span="15">
							<el-form-item class="c-query-range-date" label="培训时间：" prop="trainDate">
								<select-date :num="'2'" ref="getDate"></select-date>
							</el-form-item>
						</el-col>
						<el-col :span="5">
							<el-form-item class="c-query-select" label="主题搜索：" prop="trainTitle">
								<el-input v-model="queryCondition.trainTitle" placeholder="请输入主题搜索"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="4"  class="c-query-input">
							<el-button type="primary" @click="getDateInfo">搜索</el-button>
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
				<el-table :data="peixunjihua" border style="width: 100%" :cell-class-name="publishClassName">
				    <el-table-column  type="index" label="序号" width="60"> </el-table-column>
				    <el-table-column  prop="trainTitle" label="培训主题"></el-table-column>
				    <el-table-column  prop="trainUserTotal"  label="培训人数" width="80"></el-table-column>
						<el-table-column  prop="trainMode"  label="培训方式" width="80"></el-table-column>
						<el-table-column  prop="trainType" label="培训类型" width="80"></el-table-column>
						<el-table-column  prop="startDate" label="培训时间" width="100"></el-table-column>
						<el-table-column  prop="trainAddr" label="地点" width="80">
							<template slot-scope="scope">
								<el-popover trigger="hover" placement="top" v-if="scope.row.trainAddr">
									<p>{{ scope.row.trainAddr }}</p>
									<div slot="reference" class="name-wrapper">
										<el-tag size="medium">查看</el-tag>
									</div>
								</el-popover>
								<span v-else>无</span>
							</template>
						</el-table-column>
						<el-table-column  prop="planStatusDesc" label="培训状态" width="80"></el-table-column>
						<el-table-column label="操作" width="180">
							<template slot-scope="scope">
								<el-button  size="mini" type="primary" v-if="scope.row.planStatusDesc === '未发布' || scope.row.planStatusDesc === '未开始'"  @click="handleEdit(scope.$index, scope.row)">修改</el-button>
								<el-button size="mini" type="danger" v-if="scope.row.planStatusDesc === '未发布' || scope.row.planStatusDesc === '未开始'"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
								<el-button size="mini" type="primary" v-if="scope.row.planStatusDesc === '进行中' || scope.row.planStatusDesc === '已结束'"  @click="chakan(scope.$index, scope.row)">查看</el-button>
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
	</div>
</template>

<script>
	import {manapeixun, getSelectDetail, deleteTrainPlan} from '../../http/api.js'
	import * as crud from '../../assets/js/co-crud.js'
	import util from '@/assets/js/co-util'
	import selectDate from "@/components/selectDate";

	export default {
		components: {selectDate},
    data() {
      return {
				queryCondition: {
					token: sessionStorage.getItem("token"),
					trainMode: null,
					trainStatus: null,
					trainType: null,
					trainTitle: '',
					trainDate: '',
					value6: [],
					pageRequest: crud.getQueryCondition({})
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
		this.$nextTick(() => {
			this.getDateInfo();
		});
		this.wayData();
		this.levelData();
		this.typeData();
		this.stateData();
	},
	methods: {
	//	  获取时间组件时间并搜索
      getDateInfo() {
        const dateInfo = this.$refs.getDate.getDateInfo();
        this.getData(dateInfo);
      },
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
		getData(dateInfo) {
			let request = JSON.parse(JSON.stringify(this.queryCondition))
			request = Object.assign(request, {startDate: dateInfo.startTime, endDate: dateInfo.endTime});
			request.pageSize = request.pageRequest.limit
			request.pageNum = request.pageRequest.pageIndex
			delete request.pageRequest
			util.dealNullQueryCondition(request)
			manapeixun(request).then(res=>{
				if(res){
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
			this.$confirm('是否确定删除？', '确认信息', {
				distinguishCancelAndClose: true,
				confirmButtonText: '确认',
				cancelButtonText: '取消'
			}).then(() => {
				let obj = {
					token: sessionStorage.getItem("token"),
					planId: row.planId
				};
				deleteTrainPlan(obj).then(res => {
					if (res) {
						this.$message({
							message: '删除成功',
							type: 'success'
						})
						this.getData()
					}
				})
			})
			.catch(action => {
			});
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
		// 改列表颜色
    publishClassName ({row, columnIndex}) {
			console.log(111333, row, columnIndex)
			if (columnIndex === 1) {
				return 'ey-review-Blue'
			}else if (row.planStatusDesc === '未发布' && columnIndex === 7) {
        return 'ey-review-Warning'
      } else if (row.planStatusDesc === '未开始'  && columnIndex === 7) {
        return 'ey-review-Blue'
      } else if (row.planStatusDesc === '进行中'  && columnIndex === 7)  {
        return 'ey-review-Success'
      } else if (row.planStatusDesc === '已结束'  && columnIndex === 7) {
				return 'ey-review-Info'
			} else  {
        return ''
      }
    }
	}
}
</script>

<style lang="scss">
.p_conright {
	.manalvs {
		padding: 20px 0 0 20px;
	}
	.biaoge_header {
		/*width: 100%;*/
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
	.ey-review-Blue {
		color: #409EFF;
	}
	.ey-review-Success {
		color: #67C23A;
	}
	.ey-review-Warning {
		color: #E6A23C;
	}
	.ey-review-Info {
		color: #909399;
	}
}
</style>

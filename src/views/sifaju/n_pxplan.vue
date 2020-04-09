
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
						<el-form-item label="培训主题" prop="peixunzhuti">
							<el-input maxlength="100"  v-model="queryCondition.peixunzhuti" placeholder="请输入培训主题"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="培训方式" prop="peixunfangshi">
							<el-select v-model="queryCondition.peixunfangshi" placeholder="请选择">
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
						<el-form-item label="适用岗位" prop="peixunfangshi">
							<el-input v-model="queryCondition.shiyonggangwei" placeholder="全部社会律师"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="培训类型" prop="peixunleixing">
							<el-select v-model="queryCondition.peixunleixing" placeholder="请选择">
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
						<el-form-item label="开始时间" prop="peixunfangshi">
							<single-date :num="'3'" @getDateInfo="getDateInfo" ref="getDate"></single-date>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="截止时间" prop="peixunfangshi">
							<single-date :num="'3'" @getDateInfo="getDateInfo" ref="getDate"></single-date>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type="flex" align="middle" justify="start">
					<el-col :span="8">
						<el-form-item label="培训课件" prop="peixunzhuangtai">
							<el-select v-model="queryCondition.peixunzhuangtai" placeholder="请选择">
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
						<el-form-item label="公开类型" prop="peixunzhuangtai">
							<el-radio-group v-model="queryCondition.peixunzhuangtai">
								<el-radio :label="3">公开</el-radio>
								<el-radio :label="6">不公开</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type="flex" align="middle" justify="start">
					<el-col :span="8">
						<el-form-item label="负责人" prop="peixunfangshi">
							<el-select v-model="queryCondition.peixunzhuangtai" placeholder="请选择">
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
								<el-table-column  prop="trainUserTotal"  label="所属科室"></el-table-column>
								<el-table-column  prop="trainMode"  label="联系电话"></el-table-column>
								<el-table-column label="操作" >
									<template slot-scope="scope">
										<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
									</template>
								</el-table-column>
							</el-table>
							<div class="p_page">
								<el-pagination background
									@size-change="handleSizeChange"
									@current-change="handleCurrentChange"
									:current-page="queryCondition.page.pageIndex"
									:page-size="queryCondition.page.limit"
									layout="total, sizes, prev, pager, next, jumper"
									:total="queryCondition.page.results">
									</el-pagination>
							</div>
						</el-form-item>
				</el-row>
			</el-form>
		</div>
		<NPxplanTree></NPxplanTree>
		<div>
			<el-button type="primary" @click="submitConsultInfo">提交</el-button>
			<el-button>取消</el-button>
		</div>
	</div>
</template>

<script>

	import {getSelectDetail} from "../../http/api"
	import * as crud from '../../assets/js/co-crud.js'
	import NPxplanTree from './n_pxplan_tree'
	// import util from '@/assets/js/co-util'
	export default {
		components: {
			NPxplanTree
		},
		data() {
			return {
				//新增和修改律所信息
				queryCondition: {
					peixunzhuti:'',     //培训主题
					peixunfangshi: '',  //培训方式
					peixunleixing:'',   //培训类型
					shiyonggangwei:'',  //适用岗位
					peixunzhuangtai:'',  //培训状态
					page: crud.getQueryCondition({})
				},
				peixunfangshiList:[],    //培训方式数据
				peixunleixingList:[],    //培训类型数据
				peixunzhuangtaiList:[],  //培训状态
				rules: {
					peixunzhuti: [
						{
							required: true,
							message: "请输入培训主题",
							trigger: "blur"
						}
					],
					peixunfangshi: [
						{
							required: true,
							message: "请选择培训方式",
							trigger: "change"
						}
					],
					peixunleixing:[
						{
							required: true,
							message: "请选择培训类型",
							trigger: "change"
						}
					]

				},
				peixunjihua: []
			}
		},
		created() {
			if (this.$route.query.id) {
				this.lvsuo_texts = "修改律所";
			} else {
				this.wayData();
				this.typeData();
				this.stateData();
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
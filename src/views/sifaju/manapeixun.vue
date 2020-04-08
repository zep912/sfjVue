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
			<el-form :model="queryCondition" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-row class="tightp_top" style="border: 0;">
					<el-col :span="8">
						<el-form-item label="培训方式：" prop="wayValue">
							<el-select v-model="queryCondition.wayValue" placeholder="请选择" style="margin-right: 30px;"  @change="getData()">
								<el-option :value="possess">全部</el-option>
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
						<el-form-item label="培训级别：" prop="levelValue">
							<el-select v-model="queryCondition.levelValue" placeholder="请选择"  @change="getData()">
								<el-option :value="possess">全部</el-option>
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
						<el-form-item label="培训类型：" prop="typeValue">
							<el-select v-model="queryCondition.typeValue" placeholder="请选择" style="margin-right: 30px;"  @change="getData()">
								<el-option :value="possess">全部</el-option>
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
				<el-row class="tightp_top" style="border: 0;">
					<el-col :span="8">
						<el-form-item label="培训状态：" prop="stateValue">
							<el-select v-model="queryCondition.stateValue" placeholder="请选择"  @change="getData()">
								<el-option :value="possess">全部</el-option>
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
						<el-form-item label="培训时间：" prop="value1">
							<el-date-picker
								v-model="queryCondition.value1"
								type="date"
								placeholder="选择日期"
								format="yyyy-MM-dd"
								value-format="yyyy-MM-dd"
								style='margin-right:20px'
								@change="getData()"
								>
							</el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="自定义：" prop="value6">
							<el-date-picker
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
				<el-row class="tightp_top" style="border: 0;">
					<el-col :span="8">
						<el-form-item label="主题搜索" prop="expName">
							<el-input v-model="queryCondition.expName" placeholder="请输入要搜的培训主题"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-button type="primary" @click="getData()">搜索</el-button>
					</el-col>
				</el-row>
			</el-form>
			<div>
				<el-button type="success" @click="zhiding">+ 制定培训计划</el-button>
			</div>
			<!-- 表格 -->
			<div class="biaoge_content">
				<el-table
				    :data="peixunjihua"
				    border
				    style="width: 100%">
				    <el-table-column
				      type="index"
				      label="序号"
				      width="80">
				    </el-table-column>
				    <el-table-column
				      prop="trainTitle"
				      label="培训主题">
				    </el-table-column>
				    <el-table-column
				      prop="trainUserTotal"
				      label="培训人数">
				    </el-table-column>
					<el-table-column
					  prop="trainType"
					  label="培训方式">
					</el-table-column>
					<el-table-column
					  prop="planStatusDesc"
					  label="培训状态">
					</el-table-column>
					<el-table-column
					  prop="trainLevel"
					  label="培训类型">
					</el-table-column>
					<el-table-column
					  prop="startDate"
					  label="培训时间">
					</el-table-column>
					<el-table-column
					  prop="startDate"
					  label="地点">
					</el-table-column>
					<el-table-column label="操作">
					  <template slot-scope="scope">
						<el-button
						  size="mini"
						  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button
						  size="mini"
						  type="danger"
						  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						  <el-button
						    size="mini"
						    type="danger"
						    @click="chakan(scope.$index, scope.row)">查看</el-button>
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
	import {manapeixun,getSelectDetail} from '../../http/api.js'
	import * as crud from '../../assets/js/co-crud.js'
  export default {
    data() {
      return {
				queryCondition: {
					token:sessionStorage.getItem("token"),
					wayValue: '',
					levelValue:'',
					typeValue:'',
					stateValue:'',
					activeName: 'second',
					expName:'',  //搜素条件
					value1: '',
					value6:"",
					pageSize: 10,
					pageNum: 1,
					total: 10,
					page: crud.getQueryCondition({})
				},
				token:sessionStorage.getItem("token"),
				wayValue: '',
				levelValue:'',
				typeValue:'',
				stateValue:'',
				activeName: 'second',
				expName:'',  //搜素条件
				value1: '',
				value6:"",
				pageSize: 10,
				pageNum: 1,
				total: 10,
				possess:'',   //搜素条件全部
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
				this.wayList = res.content.resultList
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
				this.levelList = res.content.resultList
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
				this.typeList = res.content.resultList
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
				this.stateList = res.content.resultList
			}
		})
	},
    getData() {
      	manapeixun({
		      token:this.token,
          trainDate:this.value1,                //类型：String  可有字段  备注：培训时间
          startDate:this.value6[0],                //类型：String  可有字段  备注：开始时间
          endDate:this.value6[1],                //类型：String  可有字段  备注：结束时间
          trainMode:this.wayValue,                //类型：String  可有字段  备注：培训方式
          trainStatus:this.stateValue,                //类型：String  可有字段  备注：培训状态
          trainType:this.typeValue,                //类型：String  可有字段  备注：培训类型
          trainTitle:this.expName,                //类型：String  可有字段  备注：培训主题
          pageSize:this.pageSize,                //类型：String  可有字段  备注：每页显示几条
          pageNum:this.pageNum
        }).then(res=>{
          if(res){
            this.peixunjihua = res.content.dataList
            this.total = res.content.pageInfo.total
          }
        })
    },
		zhiding(){
			this.$router.push({
				path:'/n_pxplan'
			})
    },
    handleSizeChange (limit) {
      this.queryCondition.page.limit = limit
      this.queryCondition.page = crud.getQueryCondition(this.queryCondition.page)
      this.searchForm()
    },
    handleCurrentChange (pageIndex) {
      this.queryCondition.page.pages = pageIndex
      this.queryCondition.page = crud.getQueryCondition(this.queryCondition.page)
      this.searchForm()
    },
		onSearch() {
			console.log(this.value6);
		},
		handleClick(tab, event) {
			console.log(tab, event);
		},
		lvsuo(e){
			this.lvs = e
		},
		toggleSelection(rows) {
		  if (rows) {
			rows.forEach(row => {
			  this.$refs.multipleTable.toggleRowSelection(row);
			});
		  } else {
			this.$refs.multipleTable.clearSelection();
		  }
		},
		handleSelectionChange(val) {
		  this.multipleSelection = val;
		},
		chakan(){
			// this.$router.push({
			// 	path:
			// })
		},
		//获取select下拉数据
		// async getSelectData(){
		// 	const type = ['peixunleixing','peixundengji','peixujihuazhuangtai'];
		// 	const domData = ['problem'];
		// 	for(let dataInfo = 0; dataInfo<type.length;dataInfo++){
		// 		let dataInfoData = await getSelectDetail({ dictCode:type[dataInfo],userId:'111' });
		// 		this.selectDataInfo[domData[dataInfo]] = dataInfoData.content.resultList;
		// 		console.log(dataInfoData)
		// 	}
		// },
	}
  }
</script>

<style lang="scss">
.p_conright {
	.publice{
		width: 100vw;
	}
	.publice_top{
		width: 90%;
		padding: 0 5%;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
	}
	.p_top_left img{
		width: 55px;
		height: 57px;
		margin-right: 20px;
	}
	.p_top_left{
		display: flex;
		align-items: center;
		color: #fff;
		font-size: 28px;
		font-weight: 600;

	}
	.p_top_right img{
		width: 52px;
		height: 52px;
		border-radius: 3px;
		margin-right: 20px;
	}
	.p_top_right{
		display: flex;
		align-items: center;

	}
	.name_p{
		width: 100px;
		text-align: left;
		color: #fff;

	}
	.name_p>div:nth-child(1){
		font-size: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.name_p>div:nth-child(2){
		font-size: 14px;
		margin-top: 10px;
	}
	.publice_content{
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}
	.active2{
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
	}
	.p_conright{
		width: 100%;
	}
	.tightp_top{
		width: 96%;
		padding: 0 2%;
		height: 70px;
		background: #fff;
		border-bottom: 1px solid #eee;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	/* .right_select{
		margin-left: 40px;
	} */
	.p_search{
		width: 400px;
		height: 38px;
		border: 1px solid #999;
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		overflow: hidden;
	}
	.p_search input{
		padding-left: 20px;
		border: 0;
	}
	.p_search .searchp{
		width: 100px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background:-webkit-linear-gradient(left,#0fa3d5, #1b79c2);
	}
	.p_page{
		width: 94%;
		padding: 0 3%;
		display: flex;
		justify-content: flex-end;
		margin-top: 20px;
	}
	.el-tabs__content{
		display: none;
	}
	.p_conright .el-table th{
		background: #1884c7 !important;
		color: #fff;
	}
	.top_manalvs{
		width: 96%;
		padding: 0 2%;
		height: 70px;
		display: flex;
		align-items: center;
		background: #fff;
		border-bottom: 1px solid #eee;
	}
	.mana_tab{
		width: 94%;
		padding: 20px 3%;
		display: flex;
		align-items: center;
		font-size: 14px;
		background: #f7f7f7;
		div{
			padding: 0 20px;
		}
		.lvshixiac{
			position: relative;
			color: #0077AA;
			font-weight: 600;
		}
		.lvshixiac:after{
			width: 80px;
			height: 2px;
			background: #0077AA;
			position: absolute;
			top: 30px;
			left: 10px;
			content: '';

		}
	}
	.zuzhijifou{
		width: 35%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.peixun_shijian{
		display: flex;
		align-items: center;
		.yuefen{
			width: 40px;
			height: 40px;
			border: 1px solid #eee;
			margin: 0 10px;
			border-radius: 5px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
}	
</style>

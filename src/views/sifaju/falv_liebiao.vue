<template>
	<div class="p_conright falv_liebiao">
		<div class="top_manalvs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item>普法宣传</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<el-tabs class="mana_tab12 pufaxuanc" v-model="request.docType" @tab-click="handleClick">
			<el-tab-pane label="法律法规" name="1">
				<div>
					<div class="tightp_top" style="border: 0;">
						<el-button type="success" @click="addPage(0)">新增</el-button>
						<div class="right_select" >
							效力级别：
							<el-select v-model="request.scopeLevel" placeholder="请选择">
								<el-option
												v-for="(item,index) in lvSelectList"
												:key="'index'+index"
												:label="item.dictDataName"
												:value="item.dictDataCode">
								</el-option>
							</el-select>
						</div>
						<div class="right_select">
							时效性：
							<el-select v-model="request.lawTimeliness" placeholder="请选择">
								<el-option
												v-for="(item,index) in timeDataList"
												:key="index"
												:label="item.dictDataName"
												:value="item.dictDataCode">
								</el-option>
							</el-select>
						</div>
						<div class="p_search">
							<el-input class="p_search" placeholder="请输入律师姓名或执业证号查询" v-model="request.lawTitle"></el-input>
							<div class="searchp" @click="getCaseDataList('laywer')">
								<img src="../../assets/image/u2290.png" alt="">
							</div>
						</div>
					</div>
					<el-table :data="laywerList" border>
						<el-table-column type="index" label="序号" width="60"></el-table-column>
						<el-table-column prop="lawTitle" label="标题"></el-table-column>
						<el-table-column prop="scopeLevel" label="效力级别" width="100"></el-table-column>
						<el-table-column prop="enactOrg" label="颁布单位" width="240"></el-table-column>
						<el-table-column prop="lawTimeliness" label="时效性" width="100"></el-table-column>
						<el-table-column prop="enactDate" label="颁布日期" width="160"></el-table-column>
						<el-table-column prop="execDate" label="实施日期" width="160"></el-table-column>
						<el-table-column label="操作" prop="lawId" width="180">
							<template slot-scope="scope">
								<el-button
												size="mini"
												@click="onRead(scope.row)">查看</el-button>
								<el-button
												size="mini"
												@click="onEdit(scope.row, 0)">修改</el-button>
							</template>

						</el-table-column>
					</el-table>
					<div class="p_page">
							<el-pagination
											background
											@current-change="onPageChange"
											layout="total, prev, pager, next"
											:total="total">
							</el-pagination>
						</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="司法解释" name="2">
				<div>
					<div class="tightp_top" style="border: 0;">
						<el-button type="success" @click="addPage(1)">新增</el-button>
						<div class="right_select" >
							类型：
							<el-select v-model="request.explainType" placeholder="请选择">
								<el-option
												v-for="(item,index) in explainTypeList"
												:key="index"
												:label="item.dictDataName"
												:value="item.dictDataCode">
								</el-option>
							</el-select>
						</div>
						<div class="right_select">
							形式：
							<el-select v-model="request.explainModel" placeholder="请选择">
								<el-option
												v-for="(item,index) in explainModelList"
												:key="index"
												:label="item.dictDataName"
												:value="item.dictDataCode">
								</el-option>
							</el-select>
						</div>
						<div class="p_search">
							<input type="text" placeholder="请输入标题查询" v-model="request.caseTitle">
							<div class="searchp" @click="getCaseDataList('interpretation')">
								<img src="../../assets/image/u2290.png" alt="">
							</div>
						</div>
					</div>
					<el-table :data="laywerList"  border style="width: 100%">
						<el-table-column type="index" label="序号" width="60"></el-table-column>
						<el-table-column prop="lawTitle" label="标题"></el-table-column>
						<el-table-column prop="explainType" label="类型" width="100"></el-table-column>
						<el-table-column prop="explainModel" label="形式" width="100"></el-table-column>
						<el-table-column prop="enactDate" label="颁布日期" width="160"></el-table-column>
						<el-table-column prop="execDate" label="实施日期" width="160"></el-table-column>
						<el-table-column label="操作" prop="lawId" width="180">
							<template slot-scope="scope">
								<el-button
												size="mini"
												@click="onRead(scope.row)">查看</el-button>
								<el-button
												size="mini"
												@click="onEdit(scope.row, 1)">修改</el-button>
							</template>

						</el-table-column>
					</el-table>
					<div class="p_page">
						<el-pagination
						  background
						  layout="total,prev, pager, next"
						  :total="total">
						</el-pagination>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="国际条约惯例" name="3">
				<div>
					<div class="tightp_top" style="border: 0;">
						<el-button type="success" @click="addPage(2)">新增</el-button>
						<div class="right_select" >
							分类：
							<el-select v-model="request.pactType" placeholder="请选择">
								<el-option
												v-for="(item,index) in pactTypeList"
												:key="index"
												:label="item.dictDataName"
												:value="item.dictDataCode">
								</el-option>
							</el-select>
						</div>
						<div class="right_select">
							形式：
							<el-select v-model="request.pactModel" placeholder="请选择">
								<el-option
												v-for="(item,index) in pactModelList"
												:key="index"
												:label="item.dictDataName"
												:value="item.dictDataCode">
								</el-option>
							</el-select>
						</div>
						<div class="p_search">
							<input type="text" placeholder="请输入标题查询" v-model="request.caseTitle">
							<div class="searchp" @click="getCaseDataList('interpretation')">
								<img src="../../assets/image/u2290.png" alt="">
							</div>
						</div>
					</div>
					<el-table :data="laywerList"  border style="width: 100%">
							<el-table-column type="index" label="序号" width="60"></el-table-column>
							<el-table-column prop="lawTitle" label="标题"></el-table-column>
							<el-table-column prop="pactType" label="分类" width="140"></el-table-column>
							<el-table-column prop="pactModel" label="形式" width="80"></el-table-column>
							<el-table-column prop="enactDate" label="成文日期" width="160"></el-table-column>
							<el-table-column prop="execDate" label="发布日期" width="160"></el-table-column>
							<el-table-column label="操作" prop="lawId" width="180">
								<template slot-scope="scope">
									<el-button
													size="mini"
													@click="onRead(scope.row)">查看</el-button>
									<el-button
													size="mini"
													@click="onEdit(scope.row, 2)">修改</el-button>
								</template>

							</el-table-column>
						</el-table>
					<div class="p_page">
						<el-pagination
										background
										layout="total,prev, pager, next"
										:total="total">
						</el-pagination>
					</div>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import {getLawRegulationsList,getSelectDetail} from '../../http/api.js'
  export default {
	  data() {
		  return {
			  lvSelectList: [],  //效力级别
			  timeDataList: [],  //时效
			  pactTypeList: [],
			  pactModelList: [],
			  explainTypeList: [],
			  explainModelList: [],
			  request: {
				  token: sessionStorage.getItem("token"),              //类型：String  必有字段  备注：token 用户身份标识
				  docType: '1',     // 文档类型 1:法律法规 2：司法解释 3：国际条约
				  scopeLevel: "",                //类型：String  可有字段  备注：效力级别
				  lawTimeliness: "",                //类型：String  可有字段  备注：时效性
				  lawTitle: "",                //类型：String  可有字段  备注：标题
				  pageSize: "10",                //类型：String  可有字段  备注：每页显示几条
				  pageNum: "1"                //类型：String  可有字段  备注：当前页
			  },
			  laywerList: [],   //法律法规
			  total: 0
		  }
	  },
	  mounted() {
		  this.getSelectData(true);
		  this.getCaseDataList();
	  },
	  methods: {
		  handleClick() {
			  this.getCaseDataList();
		  },
		  chakna() {
			  this.$router.push({
				  path: '/falvfagui_xinxi'
			  })
		  },
		  onPageChange(num) {
			  this.request.pageNum = '' + num;
			  this.getCaseDataList('laywer');
		  },
		  handleEdit(e, f) {
			  console.log(54564)
			  this.$router.push({
				  path: '/yulan', query: {id: f.lawId, name: f.lawTitle}
			  })
		  },
		  onRead(row) {
			  this.$router.push({
				  name: 'falvfagui_xinxi',
				  query: {
					  id: row.lawId
				  }
			  })
		  },
		  onEdit(row, pageType) {
			  this.$router.push({
				  name: 'xizeng_falvfagui',
				  query: {
					  id: row.lawId,
					  pageType
				  }
			  })
		  },
		  //获取法律法规等列表
		  async getCaseDataList() {
			  let laywer = await getLawRegulationsList(this.request);
			  this.laywerList = laywer.content.dataList;
			  this.total = laywer.content.pageInfo.total
		  },
		  //获取select下拉数据
		  async getSelectData(isAll) {
			  const type = ['xiaolijibie', 'shixiaoxing', 'sifajieshileixing', 'sifajieshixingshi', 'guojitiaoyuefenlei', 'guojitiaoyuexingshi'];
			  const domData = ['lvSelectList', 'timeDataList', 'explainTypeList', 'explainModelList', 'pactTypeList', 'pactModelList'];
			  for (let dataInfo = 0; dataInfo < type.length; dataInfo++) {
				  let dataInfoData = await getSelectDetail({dictCode: type[dataInfo], userId: '111'});
				  const allList = isAll ? [{dictDataName: '全部', dictDataCode: ''}] : [];
				  this[domData[dataInfo]] = allList.concat(dataInfoData.content.resultList);
			  }
		  },
		  // 跳转到新增页面 pageType指代跳转页面的标题
		  addPage(pageType) {
		  	this.$router.push({path: 'xizeng_falvfagui', query: {pageType}})
		  }
	  }
  }
</script>

<style lang="scss">
	.falv_liebiao {
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
			width: 100%;
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
			display: block;
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
		}
		.mana_tab12 {
			padding: 20px;
			font-size: 14px;
			background: #f7f7f7;
		}
	}
</style>

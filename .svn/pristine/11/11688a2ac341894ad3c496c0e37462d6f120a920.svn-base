<template>
	<div class="p_conright">
		<div class="top_manalvs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item>普法宣传</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="mana_tab pufaxuanc">
			<!-- <div :class="lvs==1?'lvshixiac':''" @click="lvsuo(1)">以案释法</div> -->
			<div :class="lvs==2?'lvshixiac':''" @click="lvsuo(2)">法律法规</div>
		</div>
		<div  v-if="lvs==1">
			<div class="tightp_top" style="border: 0;">
				<!-- <router-link :to="{path:'xizeng_falvfagui'}"> -->
					<el-button type="success">新增</el-button>
				<!-- </router-link> -->
				<div class="right_select" >
					效力级别：
					<el-select v-model="lusuo1.caseType" placeholder="请选择">
					    <el-option
					      v-for="(item,index) in lvSelectList"
					      :key="index"
					      :label="item.dictDataName"
					      :value="item.dictDataCode">
					    </el-option>
					</el-select>
				</div>
				<div class="right_select">
					时效性：
					<el-select v-model="lusuo1.publishStatus" placeholder="请选择">
					    <el-option
					      v-for="(item,index) in timeDataList"
					      :key="index"
					      :label="item.dictDataName"
					      :value="item.dictDataCode">
					    </el-option>
					</el-select>
				</div>
				<div class="p_search">
					<input type="text" placeholder="请输入标题查询" v-model="lusuo1.caseTitle">
					<div class="searchp" @click="getCaseDataList('interpretation')">
						<img src="../../assets/image/u2290.png" alt="">
					</div>
				</div>
			</div>
			<div class="biaoge-content">
				<el-table
				    :data="caseDataList.interpretation"  border style="width: 100%">
				    <el-table-column prop="date" label="序号"></el-table-column>
				    <el-table-column prop="caseTitle" label="标题"></el-table-column>
				    <el-table-column prop="caseType" label="案例类型"></el-table-column>
					<el-table-column prop="publishTime" label="发布时间"></el-table-column>
					<el-table-column prop="publishStatus" label="状态"></el-table-column>
					<el-table-column label="操作" prop="lawId">
					  <template slot-scope="scope">
						<el-button
						  size="mini" @click="chakna(scope.row.caseId)">查看</el-button>
					  </template>
					</el-table-column>
				</el-table>
			</div>
			<div class="p_page">
				<!-- <el-pagination
				  background
				  layout="total,prev, pager, next"
				  :total="caseDataList.intPagesInfo.total">
				</el-pagination> -->
			</div>
		</div>
		<div v-if="lvs==2">
			<div class="tightp_top" style="border: 0;">
				<router-link :to="{path:'xizeng_falvfagui'}">
					<el-button type="success">新增</el-button>
				</router-link>
				<div class="right_select" >
					效力级别：
					<el-select v-model="lusuo2.scopeLevel" placeholder="请选择">
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
					<el-select v-model="lusuo2.lawTimeliness" placeholder="请选择">
					    <el-option
					      v-for="(item,index) in timeDataList"
					      :key="index"
					      :label="item.dictDataName"
					      :value="item.dictDataCode">
					    </el-option>
					</el-select>
				</div>
				<div class="p_search">
					<input type="text" placeholder="请输入律师姓名或执业证号查询" v-model="lusuo2.lawTitle">
					<div class="searchp" @click="getCaseDataList('laywer')">
						<img src="../../assets/image/u2290.png" alt="">
					</div>
				</div>
			</div>
			<div class="biaoge-content">
				<el-table
				    :data="caseDataList.laywer" border>
				    <el-table-column type="index" label="序号"></el-table-column>
				    <el-table-column prop="lawTitle" label="标题"></el-table-column>
				    <el-table-column prop="scopeLevel" label="效力级别"></el-table-column>
					<el-table-column prop="enactOrg" label="颁布单位"></el-table-column>
					<el-table-column prop="lawTimeliness" label="时效性"></el-table-column>
					<el-table-column prop="enactDate" label="颁布日期"></el-table-column>
					<el-table-column prop="execDate" label="实施日期"></el-table-column>
					<el-table-column label="操作" prop="lawId">
						<template slot-scope="scope">
							<el-button
								size="mini"
								@click="onRead(scope.row)">查看</el-button>
							<el-button
								size="mini"
								@click="onEdit(scope.row)">修改</el-button>
							</template>
							
					</el-table-column>
				</el-table>
			</div>
			<div class="p_page">
				<el-pagination
				  background
					@current-change="onPageChange"
				  layout="total,prev, pager, next"
				  :total="caseDataList.laywerPagesInfo.total">
				</el-pagination>
			</div>
		</div>
		
	</div>
</template>

<script>
	import {lusuolist1,lusuolist2,getSelectDetail} from '../../http/api.js'
  export default {
    data() {
      	return {
			lvSelectList: [],  //效力级别
			timeDataList: [],  //时效性
			lvs:2,
			lusuo1:{
				token:sessionStorage.getItem("token"),                //类型：String  必有字段  备注：token 用户身份标识
				caseType:"",                //类型：String  可有字段  备注：案例类型
				publishStatus:"",                //类型：String  可有字段  备注：状态 1：待审核；2：驳回；3：未发布；4：已发布
				lawyerId:"",                //类型：String  可有字段  备注：律师ID
				caseTitle:"",                //类型：String  可有字段  备注：标题
				pageSize:"10",                //类型：String  可有字段  备注：每页显示几条
				pageNum: 1                    //类型：String  可有字段  备注：当前页
			},
			lusuo2:{
				token:sessionStorage.getItem("token"),                 //类型：String  必有字段  备注：token 用户身份标识
				scopeLevel:"",                //类型：String  可有字段  备注：效力级别
				lawTimeliness:"",                //类型：String  可有字段  备注：时效性
				lawTitle:"",                //类型：String  可有字段  备注：标题
				pageSize:"10",                //类型：String  可有字段  备注：每页显示几条
				pageNum:"1"                //类型：String  可有字段  备注：当前页
			},
			caseDataList: {
				interpretation:[],   //以案释法
				intPagesInfo: {
					total: 0
				},   //以案释法分页数据
				laywer: [],   //法律法规
				laywerPagesInfo: {
					total: 0
				}  //法律法规分页数据
			}
      	}
    },
	mounted(){
		this.getSelectData();
		const type = ['interpretation','laywer'];
		for(let letDetail =0; letDetail<type.length;letDetail++){
			this.getCaseDataList(type[letDetail]);
		}
	},
	methods: {
		lvsuo(e){
			this.lvs = e  
		},
		chakna(){
			console.log(54654414)
			this.$router.push({
				path:'/falvfagui_xinxi'
			})
		},
		onPageChange(num) {
			this.lusuo2.pageNum = '' + num;
			this.getCaseDataList('laywer');
		},
		handleEdit(e,f){
			console.log(54564)
			this.$router.push({
				path:'/yulan', query:{id:f.lawId,name:f.lawTitle}
			})
		},
		onRead(row) {
			this.$router.push({
					name:'falvfagui_xinxi',
					query:{
            id: row.lawId
          }
				})
		},
		onEdit(row) {
			this.$router.push({
					name:'xizeng_falvfagui',
					query:{
            id: row.lawId
          }
				})
		},
		//获取以案释法/法律法规列表
		async getCaseDataList(type){
			if(type == 'interpretation'){
				let interpretation = await lusuolist1(this.lusuo1);
				this.caseDataList[type] = interpretation.content.dataList;
				this.caseDataList['intPagesInfo'] = interpretation.content.pageInfo;
				
			}else if(type == 'laywer'){
				let laywer = await lusuolist2(this.lusuo2);
				this.caseDataList[type] = laywer.content.dataList;
				this.caseDataList['laywerPagesInfo'] = laywer.content.pageInfo
			}
		},
		//获取select下拉数据
		async getSelectData(){
			const type = ['xiaolijibie','shixiaoxing'];
			const domData = ['lvSelectList','timeDataList'];
			for(let dataInfo = 0; dataInfo<type.length;dataInfo++){
				let dataInfoData = await getSelectDetail({ dictCode:type[dataInfo],userId:'111' });
				this[domData[dataInfo]] = dataInfoData.content.resultList;
				console.log(dataInfoData)
			}
		},
	}
  }
</script>

<style lang="scss">
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
	}
	.mana_tab{
		width: 94%;
		padding: 20px 3%;
		display: flex;
		align-items: center;
		font-size: 14px;
		background: #f7f7f7;
		div{
			width: 120px;
			padding: 0 20px;
		}
		.lvshixiac{
			position: relative;
		 	color: #0077AA;
			font-weight: 600;
		}
		
	}
	.pufaxuanc .lvshixiac:after{
		width: 80px;
		height: 2px;
		background: #0077AA;
		position: absolute;
		top: 30px;
		left: 38px;
		content: '';
		
	}
</style>

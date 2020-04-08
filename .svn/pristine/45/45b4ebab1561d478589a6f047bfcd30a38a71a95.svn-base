<template>
	<div class="p_conright">
		<div class="top_manalvs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item>法律咨询</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="mana_tab">
			<div :class="lvs==1?'lvshixiac':''" @click="lvsuo(1)">免费咨询</div>
			<div :class="lvs==2?'lvshixiac':''" @click="lvsuo(2)">针对性咨询</div>
		</div>
		<div  v-if="lvs==1">
			<div class="tightp_top" style="border: 0;">
<!--				<router-link :to="{path:'zixun_dengji'}">-->
<!--					<el-button type="success">现场登记</el-button>-->
<!--				</router-link>-->
				<div class="right_select" >
					问题类型：
					<el-select v-model="questionTypeList" placeholder="请选择">
						<el-option
								v-for="(item,index) in selectDataInfo.problem"
								:key="index"
								:label="item.dictDataName"
								:value="item.dictDataCode">
						</el-option>
					</el-select>
					<!--<el-select v-model="freeCheckData.questionTypeList[0].dictDataCode" placeholder="请选择">-->
					    <!--<el-option-->
					      <!--v-for="(item,index) in selectDataInfo.problem"-->
					      <!--:key="index"-->
					      <!--:label="item.dictDataName"-->
					      <!--:value="item.dictDataCode">-->
					    <!--</el-option>-->
					<!--</el-select>-->
				</div>
				<div class="right_select">
					状态：
					<el-select v-model="consultStatusList" placeholder="请选择">
						<el-option
								v-for="(item,index) in selectDataInfo.status"
								:key="index"
								:label="item.label"
								:value="item.value">
						</el-option>
					</el-select>
					<!--<el-select v-model="freeCheckData.consultStatusList[0].consultStatus" placeholder="请选择">-->
					    <!--<el-option-->
					      <!--v-for="(item,index) in selectDataInfo.status"-->
					      <!--:key="index"-->
					      <!--:label="item.label"-->
					      <!--:value="item.value">-->
					    <!--</el-option>-->
					<!--</el-select>-->
				</div>
				<div class="p_search">
					<input type="text" style="width: 80%;font-size: 15px;" placeholder="请输入律师姓名或执业证号查询" v-model="freeCheckData.questionTitle">
					<div class="searchp" @click="checkedFree">
						<img src="../../assets/image/u2290.png" alt="">
					</div>
				</div>
			</div>
			<div class="biaoge_content">
				<el-table
				    :data="freeDataInfo" border>
				    <el-table-column prop="date" label="序号" width="80"></el-table-column>
				    <el-table-column prop="questionTitle" label="标题"></el-table-column>
				    <el-table-column prop="personName" label="提问者" width="120"></el-table-column>
					<el-table-column prop="personPhone" label="手机号码"></el-table-column>
					<el-table-column prop="questionType" label="问题类型"></el-table-column>
					<el-table-column prop="consultType" label="问题来源"></el-table-column>
					<el-table-column prop="consultStatus" label="状态"></el-table-column>
					<el-table-column label="操作">
					  <template slot-scope="scope">
						<el-button
						  size="mini"
						  @click="chakna(scope.$index, scope.row)">查看</el-button>
					  </template>
					</el-table-column>
				  </el-table>
			</div>
			<div class="p_page">
				<el-pagination
				  background
				  @current-change="handleCurrentChange_A"
				  layout="total,prev, pager, next"
				  :total="freePagesInfo.total">
				</el-pagination>
			</div>
		</div>
		<div v-if="lvs==2">
			<div class="tightp_top" style="border: 0;">
				<!-- <el-button type="success">新增律师</el-button> -->
				<div class="right_select" >
					问题类型：
					<el-select v-model="majorCheckData.questionType" placeholder="请选择">
					    <el-option
					      v-for="(item,index) in selectDataInfo.problem"
					      :key="index"
					      :label="item.dictDataName"
					      :value="item.dictDataCode">
					    </el-option>
					</el-select>
				</div>
				<div class="right_select">
					状态：
					<el-select v-model="majorCheckData.consultStatus" placeholder="请选择">
					    <el-option
					      v-for="(item,index) in selectDataInfo.status"
					      :key="index"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				</div>
				<div class="p_search">
					<input type="text" style="width: 80%;font-size: 15px;" placeholder="请输入律师姓名或执业证号查询" v-model="majorCheckData.questionTitle">
					<div class="searchp" @click="checkedMajor">
						<img src="../../assets/image/u2290.png" alt="">
					</div>
				</div>
			</div>
			<div class="biaoge_content">
				<el-table
					:data="majorDataInfo" border class="width">
					<el-table-column prop="date" label="序号" width="80"></el-table-column>
					<el-table-column prop="questionTitle" label="标题"></el-table-column>
					<el-table-column prop="questionType" label="问题类型"></el-table-column>
					<el-table-column prop="personName" label="提问者" width="120"></el-table-column>
					<el-table-column prop="lawyerName" label="手机号码"></el-table-column>
					<el-table-column prop="consultStatus" label="状态"></el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
						<el-button
							size="text"
							@click="chakna(scope.$index, scope.row)">查看</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<div class="p_page">
				<el-pagination
				  background
				  @current-change="handleCurrentChange_B"
				  layout="total,prev, pager, next"
				  :total="freePagesInfo.total">
				</el-pagination>
			</div>
		</div>
		
	</div>
</template>

<script>
	import {getSelectDetail,getConsultByLawyerList,getConsultByOfficeList} from '../../http/api';
	export default {
		data() {
		return {
			freeDataInfo: [],   //免费咨询列表
			freePagesInfo: {},   //免费咨询信息
			majorDataInfo: [],   //针对性咨询列表
			majorPagesInfo: {},   //针对性咨询信息
			lvs:1,
			selectDataInfo: {
				problem: [],   //问题类型
				status: [
					{ label: '全部',value: '' },
					{ label: '待确认',value: 1 },
					{ label: '解答中',value: 2 },
					{ label: '待评价',value: 3 },
					{ label: '已评价',value: 4 },
					{ label: '律师拒绝',value: 5 },
					{ label: '系统拒绝',value: 6 },
				]   //状态
			},
            questionTypeList:[],
            consultStatusList: [],
            // 免费咨询
			freeCheckData: {
				token:"",                //类型：String  必有字段  备注：token 用户身份标识
				consultType:"3",                //类型：String  必有字段  备注：咨询类型 1：免费咨询；2：针对性咨询
				// questionTypeList: [                //类型：Array  必有字段  备注：问题类型列表
					// { "questionType": '' }               //类型：String  必有字段  备注：问题类型(code值)}
				// ],
				// consultStatusList: [                //类型：Array  必有字段  备注：咨询状态列表
					// { "consultStatus":'' }               //类型：String  必有字段  备注：咨询状态 1：待确认；2：解答中；3；待评价；4：已评价；5：律师拒绝；6：系统拒绝；
				// ],
				questionTitle:"",                //类型：String  可有字段  备注：标题
				pageNum: 1                //类型：String  可有字段  备注：当前页
			},
			//针对性咨询
			majorCheckData: {
				token:"",                //类型：String  必有字段  备注：token 用户身份标识
				consultType:"2",                //类型：String  必有字段  备注：咨询类型 固定值填2
				questionType:"",                //类型：String  可有字段  备注：问题类型
				lawyerId:"",                //类型：String  可有字段  备注：意向律师
				consultStatus:"",                //类型：String  可有字段  备注：咨询状态 1：待确认；2：解答中；3；待评价；4：已评价；5：律师拒绝；6：系统拒绝；
				questionTitle:"",                //类型：String  可有字段  备注：标题
				pageNum: 1               //类型：String  可有字段  备注：当前页
			},
			
		}
    },
	methods: {
		handleCurrentChange_A(val){
			this.freeCheckData.pageNum = val;
			this.checkedFree();
		},
		handleCurrentChange_B(val){
			this.majorCheckData.pageNum = val;
			this.checkedMajor();
		},
		lvsuo(e){
			this.lvs = e;
		},
		chakna(){
			console.log(54654414)
			this.$router.push({
				path:'/xianchang_chakan'
			})
		},
		handleEdit(){
			console.log(54564)
			this.$router.push({
			path:'/lvshi_jieda'
			})
		},
		//获取select下拉数据
		async getSelectData(){
			const type = ['wentileixing'];
			const domData = ['problem'];
			for(let dataInfo = 0; dataInfo<type.length;dataInfo++){
				let dataInfoData = await getSelectDetail({ dictCode:type[dataInfo],userId:'111' });
				this.selectDataInfo[domData[dataInfo]] = dataInfoData.content.resultList;
				console.log(dataInfoData)
			}
		},
		// 筛选免费咨询
		async checkedFree(){
			let checkedItem = await getConsultByLawyerList(this.freeCheckData);
			this.freeDataInfo = checkedItem.content.dataList;
			this.freePagesInfo = checkedItem.content.pageInfo;
		},
		// 筛选针对性咨询
		async checkedMajor(){
			let checkedItem = await getConsultByOfficeList(this.majorCheckData);
			this.majorDataInfo = checkedItem.content.dataList;
			this.majorPagesInfo  = checkedItem.content.pageInfo;
		},
	},
	mounted(){
		this.freeCheckData.token = sessionStorage.getItem('token');
		this.majorCheckData.token = sessionStorage.getItem('token');
		this.getSelectData();
		this.checkedFree();
		this.checkedMajor();
	}
}
</script>

<style lang="scss">
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
	}
	.mana_tab{
		width: 94%;
		padding: 20px 3%;
		display: flex;
		align-items: center;
		font-size: 14px;
		background: #f7f7f7;
		div{
			width: 90px;
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
			left: 26px;
			content: '';
			
		}
	}
</style>

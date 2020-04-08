<template>
	<div class="p_conright">
		<div class="top_manalvs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
				<el-breadcrumb-item>在线预约</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="mana_tab">
			<div :class="lvs==1?'lvshixiac':''" @click="lvsuo(1)">法律援助预约</div>
			<div :class="lvs==2?'lvshixiac':''" @click="lvsuo(2)">人民调解预约</div>
		</div>
		<div v-if="lvs==1">
			<div class="tightp_top" style="border: 0;justify-content: flex-start;">
				<div>
					申请时间：
					<el-date-picker v-model="search_fond.appointmentDate" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
					 style="margin-right: 20px;">
					</el-date-picker>
				</div>
				<div class="diyichaxun" style="position: relative;left: 22.5%;width: 39%;">
					<div>查询:</div>
					<div style="width: 94%;position: relative;left: 10px;">
						<el-input v-model="search_fond.applyReason" placeholder="请输入申请人姓名申请理由查询"></el-input>
					</div>
				</div>
			</div>
			<div class="tightp_top" style="border: 0;">
				<div class="right_select">
					事项类别：
					<el-select v-model="matter_checked" placeholder="请选择">
						<el-option v-for="item in matter_type" :key="item.dictDataCode" :label="item.dictDataName" :value="item.dictDataCode">
						</el-option>
					</el-select>
				</div>
				<div class="right_select">
					身份类别：
					<el-select v-model="identity_checked" placeholder="请选择">
						<el-option v-for="item in identity_type" :key="item.dictDataCode" :label="item.dictDataName" :value="item.dictDataCode">
						</el-option>
					</el-select>
				</div>
				<div class="right_select">
					状态：
					<el-select v-model="helpInfo_legalAid.applyStatus" placeholder="请选择">
						<el-option v-for="item in status_type" :key="item.dictDataCode" :label="item.dictDataName" :value="item.dictDataCode">
						</el-option>
					</el-select>
				</div>
				<div class="right_select">
					经济困难情形：
					<el-select v-model="situation_checked" placeholder="请选择">
						<el-option v-for="item in situation_type" :key="item.label" :label="item.title" :value="item.label">
						</el-option>
					</el-select>
				</div>
				<el-button type="primary" @click="getLawAidListData">查询</el-button>
			</div>
			<div class="biaoge_content">
				<el-table :data="yuanzhu.dataList" border style="width: 100%">
					<el-table-column type="index" label="序号" width="80"></el-table-column>
					<el-table-column prop="userName" label="申请人" width="100"></el-table-column>
					<el-table-column prop="appointmentDate,appointmentTime" label="申请时间">
						<template slot-scope="scope">
							<span>{{scope.row.appointmentDate}} {{scope.row.appointmentTime}}</span>
						</template>
					</el-table-column>
					<el-table-column prop="matterType" label="事项类别"></el-table-column>
					<el-table-column prop="identityType" label="受援人类别"></el-table-column>
					<el-table-column prop="address" label="经济困难情形"></el-table-column>
					<el-table-column prop="applyReason" label="案情及申请理由"></el-table-column>
					<el-table-column prop="applyStatus" label="状态"></el-table-column>
					<el-table-column label="操作" prop="applyId">
						<template slot-scope="scope">
							<el-button type="text" @click="chakan(scope.row.applyId)">查看</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<div class="p_page">
				<el-pagination background 
					@current-change="handleCurrentChange_A"
					layout="total,prev, pager, next" 
					:page-size="10"
					:current-page.sync="currentPage"
					:total="yuanzhu.pageInfo.total">
				</el-pagination>
			</div>
		</div>
		<div v-if="lvs==2">
			<div class="tightp_top" style="border: 0;justify-content: flex-start;">
				<div class="diyichaxun" >
					<div>查询:</div>
					<div style="width: 88%;">
						<el-input v-model="input" placeholder="请输入申请人姓名申请理由查询"></el-input>
					</div>
				</div>
			</div>
			<div class="tightp_top" style="border: 0;">
				<div class="right_select">
					预约调委会：
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="right_select">
					状态：
					<el-select v-model="helpInfo_mediation.applyStatus" placeholder="请选择" style="width: 225px;">
						<el-option v-for="item in status_type" :key="item.dictDataCode" :label="item.dictDataName" :value="item.dictDataCode">
						</el-option>
					</el-select>
				</div>
				<div class="right_select">
					申请时间：
					 <el-date-picker
					      v-model="value1"
					      type="daterange"
					      range-separator="至"
					      start-placeholder="开始日期"
					      end-placeholder="结束日期">
					</el-date-picker>
				</div>
				<div class="p_search">
					<input type="text" placeholder="请输入律师姓名或执业证号查询">
					<div class="searchp" @click="getMediateListData">
						<img src="../../assets/image/u2290.png" alt="">
					</div>
				</div>
			</div>
			<div class="biaoge_content">
				<el-table :data="tiaojie.dataList" border style="width: 100%">
					<el-table-column type="index" label="序号" width="80"></el-table-column>
					<el-table-column prop="applyName" label="申请人" width="100"></el-table-column>
					<el-table-column prop="lawOrgName" label="预约调委会"></el-table-column>
					<el-table-column prop="appointmentTime" label="申请时间"></el-table-column>
					<el-table-column prop="disputeDetail" label="需求描述"></el-table-column>
					<el-table-column  label="状态">
						<!-- prop="orgStatus" -->
						<template slot-scope="scope">
						  <p :style="{'color':tiaojie.dataList[scope.$index].applyStatus==1?'#ff7d01':tiaojie.dataList[scope.$index].applyStatus==2?'#33cc66':'#ff0000'}">{{tiaojie.dataList[scope.$index].applyStatus==1?'待响应':tiaojie.dataList[scope.$index].applyStatus==2?'预约成功':'预约失败'}}</p>
						</template>
					</el-table-column>
					<el-table-column label="操作" prop="applyId">
						<template slot-scope="scope">
							<el-button type="text" @click="chawh(scope.row.applyId)">查看</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<div class="p_page">
				<el-pagination background 
					@current-change="handleCurrentChange_B"
					layout="total,prev, pager, next" 
					:page-size="10"
					:current-page.sync="currentPage"
					:total="tiaojie.pageInfo.total">
				</el-pagination>
			</div>
		</div>

	</div>
</template>

<script>
	import {getLawAidList,getMediateList,getSelectDetail} from '../../http/api';
	export default {
		data() {
			return {
				 value1: '',
				//事项类别
				matter_checked: '',
				matter_type: [],
				//身份类别
				identity_checked: '',
				identity_type: [],
				//状态
				status_type: [],
				//经济困难情形
				situation_checked: '',
				situation_type: [
					{ label:-99,title: '全部'},
					{ label:1,title: '低保家庭成员'},
					{ label:2,title: '特困人员'},
					{ label:3,title: '低收入家庭成员'},
					{ label:4,title: '政府供养或接受社会援助人员'},
					{ label:5,title: '农村贫困家庭成员'},
					{ label:6,title: '其他经济困难人员'},
				],
				activeName: 'second',
				lvs: 1,
				yuanzhu: {
					pageInfo:{
						total: 0
					}
				},
				tiaojie: {
					pageInfo:{
						total: 0
					}
				},
				//法律援助查询内容
				helpInfo_legalAid: {
					token:'',                //类型：String  必有字段  备注：token 用户身份标识
					matterType:'',                //类型：String  可有字段  备注：事项类别
					identityType:'',                //类型：String  可有字段  备注：身份类别
					applyStatus: '',                //类型：String  可有字段  备注：预约状态 1：待响应；2：预约成功；3：预约失败；
					applyReason:'',                //类型：String  可有字段  备注：申请理由
					appointmentDate:'',                //类型：String  可有字段  备注：预约时间 yyyy-MM-dd
					pageSize: 10,                //类型：String  可有字段  备注：每页显示几条
					pageNum: 1                //类型：String  可有字段  备注：当前页
				},
				//搜索_点击_法律援助
				search_fond:{
					matterType:'',                //类型：String  可有字段  备注：事项类别
					identityType:'',                //类型：String  可有字段  备注：身份类别
					applyStatus: 1,                //类型：String  可有字段  备注：预约状态 1：待响应；2：预约成功；3：预约失败；
					applyReason:'',                //类型：String  可有字段  备注：申请理由
					appointmentDate:'',                //类型：String  可有字段  备注：预约时间 yyyy-MM-dd
					pageNum: 1                //类型：String  可有字段  备注：当前页
				},
				//人民调解查询内容
				helpInfo_mediation: {
					token:'',                //类型：String  必有字段  备注：token 用户身份标识
					lawOrgId:'',                //类型：String  可有字段  备注：预约调委会
					applyStatus: '',                //类型：String  可有字段  备注：预约状态 1：待响应；2：预约成功；3：预约失败；
					disputeDetail:'',                //类型：String  可有字段  备注：需求描述
					appointmentDate:'',                //类型：String  可有字段  备注：预约日期 yyyy-MM-dd
					pageSize:10,                //类型：String  可有字段  备注：每页显示几条
					pageNum:1                //类型：String  可有字段  备注：当前页
				},
				currentPage:1,
			}
		},
		mounted() {
			this.loadingInfo();
			this.getSelectData();
		},
		methods: {
			lvsuo(e) {
				this.lvs = e;
				this.currentPage = 1;
			},
			chakan(itemId) {
				this.$router.push({ path: '/lvshi_xiangying',query:{itemId:itemId}})
			},
			chawh(itemId) {
				this.$router.push({ path: '/diaoweihui_xiangying', query: { itemId:itemId } })
			},
			//获取select下拉数据
			async getSelectData(){
				const type = ['shixiangleibie','shenfenleibie','yuyuezhangtai'];
				const domData = ['matter_type','identity_type','status_type'];
				for(let dataInfo = 0; dataInfo<type.length;dataInfo++){
					let dataInfoData = await getSelectDetail({ dictCode:type[dataInfo],userId:'111' });
					this[domData[dataInfo]] = dataInfoData.content.resultList;
					console.log(dataInfoData)
				}
			},
			//获取法律援助列表
			async getLawAidListData(){
				getLawAidList(this.helpInfo_legalAid).then(success=>{
					if(success.code == 200){
						this.yuanzhu  = success.content;
						this.yuanzhu.pageInfo.total = Number(this.yuanzhu.pageInfo.total)
						for(let item of this.yuanzhu.dataList.entries()){
							switch(item[1].applyStatus){
								case '1':
									item[1].applyStatus = '待响应';
									break;
								case '2':
									item[1].applyStatus = '预约成功';
									break;
								case '3':
									item[1].applyStatus = '预约失败';
									break;	
							}
						}
						
					}
				});
			},
			//获取人民调解列表
			async getMediateListData(){
				getMediateList(this.helpInfo_mediation).then(success=>{
					if(success.code == 200){
						this.tiaojie  = success.content;
						this.tiaojie.pageInfo.total = Number(this.tiaojie.pageInfo.total)
						for(let item of this.tiaojie.dataList.entries()){
							switch(item[1].applyStatus){
								case '1':
									item[1].applyStatus = '待响应';
									break;
								case '2':
									item[1].applyStatus = '预约成功';
									break;
								case '3':
									item[1].applyStatus = '预约失败';
									break;	
							}
						}
						
					}
				})
			},
			loadingInfo(){
				this.helpInfo_legalAid.token = this.token;
				this.helpInfo_mediation.token = this.token;
				this.getLawAidListData();
				this.getMediateListData();
			},
			handleCurrentChange_A(val){
				this.helpInfo_legalAid.pageNum = Number(val);
				this.loadingInfo();
			},
			handleCurrentChange_B(val){
				this.helpInfo_mediation.pageNum = Number(val);
				this.loadingInfo();
			}
		}
	}
</script>

<style lang="scss">
	.p_conright {
		width: 100%;
	}

	.tightp_top {
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
	.p_search {
		width: 400px;
		height: 38px;
		border: 1px solid #999;
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		overflow: hidden;
	}

	.p_search input {
		padding-left: 20px;
		border: 0;
	}

	.p_search .searchp {
		width: 100px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
	}

	.p_page {
		width: 94%;
		padding: 0 3%;
		display: flex;
		justify-content: flex-end;
		margin-top: 20px;
	}

	.el-tabs__content {
		display: none;
	}

	.p_conright .el-table th {
		background: #1884c7 !important;
		color: #fff;
	}

	.top_manalvs {
		width: 96%;
		padding: 0 2%;
		height: 70px;
		display: flex;
		align-items: center;
		background: #fff;
	}

	.mana_tab {
		width: 94%;
		padding: 20px 3%;
		display: flex;
		align-items: center;
		font-size: 14px;
		background: #f7f7f7;

		div {
			padding: 0 20px;
		}

		.lvshixiac {
			position: relative;
			color: #0077AA;
			font-weight: 600;
		}

		.lvshixiac:after {
			width: 80px;
			height: 2px;
			background: #0077AA;
			position: absolute;
			top: 30px;
			left: 22px;
			content: '';

		}
	}

	.diyichaxun {
		display: flex;
		align-items: center;
		width: 20%;
		justify-content: space-between;

	}
</style>

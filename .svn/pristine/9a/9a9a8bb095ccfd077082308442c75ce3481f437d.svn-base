<template>
	<div class="p_conright">
		<div class="top_manalvs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
				<el-breadcrumb-item>司法管理</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="mana_tab">
			<div :class="falvlist.orgType==2?'lvshixiac':''" @click="lvsuo(2)">法律援助中心</div>
			<div :class="falvlist.orgType==3?'lvshixiac':''" @click="lvsuo(3)">调委组织</div>
			<div :class="falvlist.orgType==4?'lvshixiac':''" @click="lvsuo(4)">司法鉴定</div>
			<div :class="falvlist.orgType==5?'lvshixiac':''" @click="lvsuo(5)">公证处</div>
			<div :class="falvlist.orgType==6?'lvshixiac':''" @click="lvsuo(6)">基层法律服务所</div>
		</div>
		<div >
			<div class="tightp_top" style="border: 0;">
				<div class="zuzhijifou">
					<div style="display: flex;">
						<!-- <router-link :to="{path:'xinzeng_jigou'}"> -->
							<el-button type="success" @click="onXinzeng">新增机构</el-button>
						<!-- </router-link>  -->
						<el-button type="danger" @click="onBatchDel" style="margin-left: 20px">删除</el-button>
						<el-upload
						  class="upload-demo"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :on-preview="handlePreview"
						  :on-remove="handleRemove"
						  :before-remove="beforeRemove"
						  multiple
						  :limit="3"
						  :type="text"
						  :on-exceed="handleExceed"
						  :file-list="fileList">
						  <el-button style="margin-left: 20px;" type="primary">导入</el-button>
						</el-upload>
					</div>
				</div>
				<div class="p_search">
					<input type="text" v-model="orgName" placeholder="请输入机构名称查询">
					<div class="searchp" @click="onSerach">
						<img src="../../assets/image/u2290.png" alt="">
					</div>
				</div>
			</div>
			<div class="biaoge_content">
				<el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column type="index" label="序号" width="80">
						<!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
					</el-table-column>
					<el-table-column prop="orgName" label="机构名称">
					</el-table-column>
					<el-table-column prop="orgCellphone" label="联系电话" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="credentialCode" label="执业证号" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="orgAddress" label="联系地址" show-overflow-tooltip>
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" @click="chakan(scope.$index, scope.row)">查看</el-button>
							<el-button size="mini" type="danger" @click="xiugai(scope.$index, scope.row)">修改</el-button>
							<el-button size="mini" type="danger" @click="del(scope.$index, scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<div class="p_page">
				<el-pagination background @current-change="onPageChange" layout="prev, pager, next" :total="total">
				</el-pagination>
			</div>
		</div>
		<!-- <div v-if="lvs==2">
			<div class="tightp_top" style="border: 0;">
				<el-button type="success">新增律师</el-button>
				<div class="right_select">
					擅长专业：
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="right_select">
					账号状态：
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="p_search">
					<input type="text" placeholder="请输入律师姓名或执业证号查询">
					<div class="searchp">
						<img src="../../assets/image/u2290.png" alt="">
					</div>
				</div>
			</div>
			<div>
				<el-table :data="tableData" border style="width: 100%">
					<el-table-column prop="date" label="序号" width="180">
					</el-table-column>
					<el-table-column prop="name" label="姓名" width="180">
					</el-table-column>
					<el-table-column prop="address" label="执业证号">
					</el-table-column>
					<el-table-column prop="address" label="擅长专业">
					</el-table-column>
					<el-table-column prop="address" label="服务人数">
					</el-table-column>
					<el-table-column prop="address" label="预约次数">
					</el-table-column>
					<el-table-column prop="address" label="账号状态">
					</el-table-column>
					<el-table-column prop="address" label="操作">
					</el-table-column>
				</el-table>
			</div>
			<div class="p_page">
				<el-pagination background layout="prev, pager, next" :total="1000">
				</el-pagination>
			</div>
		</div> -->

	</div>
</template>

<script>
	import {falvyuanzhu,del_jigou} from '../../http/api.js'
	export default {
		data() {
			return {
				total: 10,
				pageSize: 10,
				pageNum: 1,
				value: '',
				orgName: '',
				activeName: 'second',
				tableData3: [],
				multipleSelection: [],
				lvs: 1,
				tabVal: 2,
				falvlist:{
					"token":sessionStorage.getItem("token"),                //类型：String  必有字段  备注：token 用户身份标识
					"orgType":2,                //类型：String  可有字段  备注：机构类型 1.律师事务所；2.法律援助中心；3.调委组织；4.司法鉴定；5.公证处；6.基层法律服务所；
					"orgName":"",                //类型：String  可有字段  备注：名称
					"areaRegionId":"zad9ed0d99c3433a9b09218e599df528",                //类型：String  可有字段  备注：所属区ID
					"areaStreetId":"gld9ed0d99c3433a9b09218e59zqjd03",                //类型：String  可有字段  备注：所属街道ID
					"pageSize":"10",                //类型：String  可有字段  备注：每页显示条数
					"pageNum":"1" 
				}
			}
		},
		created() {
			this.getData();
		},
		methods: {
			getData() {
				falvyuanzhu({
					"orgType": this.tabVal,
					orgName: this.orgName,
					"pageSize": this.pageSize,
					"pageNum": this.pageNum
				}).then(res=>{
					this.tableData3 = res.content.dataList;
					this.total = res.content.pageInfo.total;
				})
			},
			onSerach() {
				this.getData();
			},
			onBatchDel() {
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				  confirmButtonText: '确定',
				  cancelButtonText: '取消',
				  type: 'warning'
				}).then(() => {
					del_jigou({
						delList: [
							...this.multipleSelection.map(item=> {
								return {
									lawOrgId: item.lawOrgId
								}
							})
						]
					}).then(res=>{
						if(res.code==200){
							this.$message({
								message: '删除成功',
								type: 'success'
							});
							this.getData();
						}else{
							this.$message.error(res.msg);
						}
					})
				});
			},
			onPageChange(num) {
				this.pageNum = '' + num;
				this.getData();
			},
			handleClick(tab, event) {
				console.log(tab, event);
			},
			lvsuo(e) {
				this.falvlist.orgType = e
				this.tabVal = e;
				this.getData();
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
			chakan(index, row){
				this.$router.push({
					path:'/chakan_jigou',
					query:{
						orgType:this.tabVal,
						lawOrgId: row.lawOrgId
          }
				})
			},
			xiugai(index, row){
				this.$router.push({
					path:'/xinzeng_jigou',
					query:{
						orgType:this.tabVal,
						lawOrgId: row.lawOrgId
          }
				})
			},
			onXinzeng() {
				this.$router.push({
					path:'/xinzeng_jigou',
					query:{
            orgType:this.tabVal,
          }
				})
			},
			del(e,row){
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				  confirmButtonText: '确定',
				  cancelButtonText: '取消',
				  type: 'warning'
				}).then(() => {
					del_jigou({
						"token":sessionStorage.getItem("token"),                //类型：String  必有字段  备注：token 用户身份标识
						"lawOrgId":row.lawOrgId //必有字段  备注：机构ID
					}).then(res=>{
						if(res.code==200){
							this.$message({
								message: '删除成功',
								type: 'success'
							});
							this.getData();
						}else{
							this.$message.error(res.msg);
						}
					})
				});
			}
		}
	}
</script>

<style lang="scss">
	.publice {
		width: 100vw;
	}

	.publice_top {
		width: 90%;
		padding: 0 5%;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
	}

	.p_top_left img {
		width: 55px;
		height: 57px;
		margin-right: 20px;
	}

	.p_top_left {
		display: flex;
		align-items: center;
		color: #fff;
		font-size: 28px;
		font-weight: 600;

	}

	.p_top_right img {
		width: 52px;
		height: 52px;
		border-radius: 3px;
		margin-right: 20px;
	}

	.p_top_right {
		display: flex;
		align-items: center;

	}

	.name_p {
		width: 100px;
		text-align: left;
		color: #fff;

	}

	.name_p>div:nth-child(1) {
		font-size: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.name_p>div:nth-child(2) {
		font-size: 14px;
		margin-top: 10px;
	}

	.publice_content {
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.active2 {
		background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
	}

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
			width: 120px;
			padding: 0 ;
			display: flex;
			align-items: center;
			justify-content: center;
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
			left: 20px;
			content: '';

		}
	}

	.zuzhijifou {
		width: 35%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>

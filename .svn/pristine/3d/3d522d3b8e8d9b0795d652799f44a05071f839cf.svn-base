<template>
	<div class="p_conright">
		<div class="top_manalvs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item>图片发布</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div>
			<div class="tightp_top" style="border: 0;">
				<div class="zuzhijifou">
					<div>
						<router-link :to="{path:'upload_img'}">
							<el-button type="success">上传图片</el-button>
						</router-link>
						<el-button type="danger" @click="onDelBatch" style="margin-left: 20px;">删除</el-button>
					</div>
				</div>
			</div>
			<div class="biaoge_content">
				<el-table
				    :data="tableData"
				    border
				    style="width: 100%"
					@selection-change="handleSelectionChange"
					ref="multipleTable"
					tooltip-effect="dark"
					>
					<el-table-column
					      type="selection"
					      width="55">
					</el-table-column>
				    <el-table-column
				      type="index"
				      label="序号"
				      width="100">
				    </el-table-column>
				    <el-table-column
				      prop="bannerTitle"
				      label="图片标题"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="bannerType"
				      label="所属模块">
					  <template slot-scope="scope">
							{{scope.bannerType==1?'导航轮播':'焦点轮播'}}
					  </template>
				    </el-table-column>
					<el-table-column
					  prop="imgPath"
					  label="链接地址">
					</el-table-column>
					<el-table-column label="操作" width="100">
						  <template slot-scope="scope">
							<el-button
							  size="mini"
							  type="danger"
							  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						  </template>
					</el-table-column>
				  </el-table>
			</div>
			<!-- <div class="p_page">
				<el-pagination
				  background
				  layout="prev, pager, next"
				  :total="1000">
				</el-pagination>
			</div> -->
		</div>
		<!-- <div v-if="lvs==2">
			<div class="tightp_top" style="border: 0;">
				<el-button type="success">新增律师</el-button>
				<div class="right_select" >
					擅长专业：
					<el-select v-model="value" placeholder="请选择">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				</div>
				<div class="right_select">
					账号状态：
					<el-select v-model="value" placeholder="请选择">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
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
				<el-table
				    :data="tableData"
				    border
				    style="width: 100%">
				    <el-table-column
				      prop="date"
				      label="序号"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="姓名"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="执业证号">
				    </el-table-column>
					<el-table-column
					  prop="address"
					  label="擅长专业">
					</el-table-column>
					<el-table-column
					  prop="address"
					  label="服务人数">
					</el-table-column>
					<el-table-column
					  prop="address"
					  label="预约次数">
					</el-table-column>
					<el-table-column
					  prop="address"
					  label="账号状态">
					</el-table-column>
					<el-table-column
					  prop="address"
					  label="操作">
					</el-table-column>
				  </el-table>
			</div>
			<div class="p_page">
				<el-pagination
				  background
				  layout="prev, pager, next"
				  :total="1000">
				</el-pagination>
			</div>
		</div> -->
		
	</div>
</template>

<script>
	import {lunbotumana,shanchus} from '../../http/api.js'
  export default {
    data() {
      return {
				tableData: [],
				multipleSelection: [],
      }
    },
	created() {
		this.getData();
	},
	methods: {
		getData() {
			lunbotumana({
				"token":sessionStorage.getItem("token"),                //类型：String  必有字段  备注：token 用户身份标识
				"bannerType":"1" 
			}).then(res=>{
				this.tableData = res.content.dataList
			})
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
			console.log(this.multipleSelection);
		},
		handleEdit(index, row) {
			console.log(index, row);
		},
		onDelBatch() {
			if(this.multipleSelection.length===0) {
				this.$message({
							message: '请勾选要删除的选项',
							type: 'error'
						});
				return void 0;
			}
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				shanchus({
					"token":sessionStorage.getItem("token"),                  //类型：String  必有字段  备注：token 用户身份标识
					"delList": [
						...this.multipleSelection.map(item=> {
							return item.bannerId;
						})
					]
				}).then(res=>{
					if(res.code==200){
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getData();
					}
				})
			});
		},
		handleDelete(index, row) {
		// console.log(index, row);
		this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
			confirmButtonText: '确定',
			cancelButtonText: '取消',
			type: 'warning'
		}).then(() => {
			shanchus({
				"token":sessionStorage.getItem("token"),                  //类型：String  必有字段  备注：token 用户身份标识
				"delList": [
					row.bannerId
				]
			}).then(res=>{
				if(res.code==200){
					this.$message({
						message: '删除成功',
						type: 'success'
					});
					this.getData();
				}
			})
		});
			
		  }
	}
  }
</script>

<style lang="scss">
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
</style>

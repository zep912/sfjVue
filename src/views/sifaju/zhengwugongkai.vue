<template>
	<div class="p_conright">
		<div class="top_manalvs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
				<el-breadcrumb-item>政务公开</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="mana_tab zhengwugongkai">
			<div :class="chuandata.newsType==1?'lvshixiac':''" @click="lvsuo(1)">组织机构</div>
			<div :class="chuandata.newsType==2?'lvshixiac':''" @click="lvsuo(2)">公示信息</div>
			<div :class="chuandata.newsType==3?'lvshixiac':''" @click="lvsuo(3)">通知公告</div>
			<div :class="chuandata.newsType==4?'lvshixiac':''" @click="lvsuo(4)">新闻资讯</div>
			<div :class="chuandata.newsType==5?'lvshixiac':''" @click="lvsuo(5)">办事指南</div>
			<div :class="chuandata.newsType==6?'lvshixiac':''" @click="lvsuo(6)">征求意见</div>
		</div>
		<div>
			<div class="tightp_top" style="border: 0;">
				<div class="zuzhijifou">
					<div>
						<!-- <router-link :to="{path:'xinzeng_zhengwu'}"> -->
							<el-button type="success" @click="xinzeng">新增</el-button>
						<!-- </router-link> -->
						<el-button type="danger" @click="onBatchDel" style="margin-left: 20px;">删除</el-button>
					</div>

					<div class="right_select">
						
						<el-select v-model="selectValue" placeholder="请选择">
							<el-option v-for="item in options" :key="item.dictDataCode" :label="item.dictDataName" :value="item.dictDataCode">
							</el-option>
						</el-select>
					</div>
				</div>
				<div class="p_search">
					<input type="text" v-model="chuandata.newsTitle" placeholder="请输入标题查询">
					<div class="searchp">
						<img src="../../assets/image/u2290.png" @click="search" alt="">
					</div>
				</div>
			</div>
			<div class="biaoge_content">
				<el-table ref="multipleTable" :data="list" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column type="index" label="序号" width="120">
					</el-table-column>
					<el-table-column prop="newsTitle" label="标题" >
					</el-table-column>
					<el-table-column prop="newsSource" label="来源" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="newsAuthor" label="作者" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="readHits" label="阅读次数" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="publishTime" label="发布时间" show-overflow-tooltip>
					</el-table-column>
					 <el-table-column label="操作" width="250">
					      <template slot-scope="scope">
							  <el-button
							    size="mini"
							    @click="chakan(scope.$index, scope.row)">查看</el-button>
					        <el-button
					          size="mini"
					          @click="xiugai(scope.$index, scope.row)">修改</el-button>
					        <el-button
					          size="mini"
					          type="danger"
					          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					      </template>
					    </el-table-column>
				</el-table>
			</div>
			<div class="p_page">
				<el-pagination @current-change="onPageChange" background layout="prev, pager, next" :total="total">
				</el-pagination>
			</div>
		</div>

	</div>
</template>

<script>
	import {zhengwugongkais,zhengwushanchu,getDictionaryListZwgkSelectList} from '../../http/api.js'
	export default {
		data() {
			return {
				options: [],
				total: 10,
				selectValue: '0',
				activeName: 'second',
				list:'',
				multipleSelection: [],
				chuandata:{
					token: sessionStorage.getItem("token"), //类型：String  必有字段  备注：token 用户身份标识
					newsType: 1, //类型：String  必有字段  备注：资讯类型 1：组织机构；2：公示信息；3：通知公告；4：新闻资讯；5：办事指南；6：征求意见；7：政务公开；8：司法考试动态；
					newsTitle: "", //类型：String  可有字段  备注：资讯标题
					newsSource: "", //类型：String  可有字段  备注：资讯来源
					pageSize: "10", //类型：String  可有字段  备注：每页显示条数
					pageNum: "1",
					newsClassify: "",
				}
			}
		},
		created() {
			this.init();
			getDictionaryListZwgkSelectList({
				"userId":"123", //随便写
				"dictCode":"jigoufenlei" //字典编码
			}).then(res=> {
				if(res.code === '200') {
					let arr = res.content.resultList;
					arr.unshift({
						dictDataCode: '0',
						dictDataName: '全部'
					});
					this.options = arr;
				}else {
					this.$message.error(res.msg);
				}
			});
		},
		methods: {
			init() {
				zhengwugongkais(this.chuandata).then(res=>{
					if (res.code==200) {
						this.list = res.content.dataList;
						this.total = res.content.pageInfo.total;
					}else{
						this.$message.error(res.msg);
					}
				})
			},
			// 批量删除
			onBatchDel() {
				this.multipleSelection;
			},
			search(){
				this.chuandata.newsClassify = this.selectValue==='0'?'':this.selectValue;
				this.init()
			},
			handleClick(tab, event) {
				console.log(tab, event);
			},
			lvsuo(e) {
				this.chuandata.newsType = e;
				this.chuandata.newsTitle = '';
				this.selectValue = '0';
				this.chuandata.newsClassify = '';
				this.chuandata.pageNum = '1';
				// this.chuandata.newsClassify = this.selectValue==='0'?'':this.selectValue;
				this.init();
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
			xiugai(index, row){
				this.$router.push({
					path:'/xinzeng_zhengwu',
					query:{
            type:this.chuandata.newsType,
            id: row.newsId
          }
				})
			},
			onPageChange(num) {
				this.chuandata.pageNum = '' + num;
				this.init();
			},
			xinzeng(){
				this.$router.push({
					path:'/xinzeng_zhengwu',
					query:{type:this.chuandata.newsType}
				})
			},
			chakan(index, row){
				this.$router.push({
					path:'/chakan_zhengwu',
					query:{
            type:this.chuandata.newsType,
            id: row.newsId
          }
				})
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			handleDelete(e,f){
				console.log(e);
				console.log(f.newsId);
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				  confirmButtonText: '确定',
				  cancelButtonText: '取消',
				  type: 'warning'
				}).then(() => {
					zhengwushanchu({
						// "token": sessionStorage.getItem("token"), //类型：String  必有字段  备注：token 用户身份标识
						"newsId":f.newsId,
					}).then(res=>{
						if(res.code==200){
							this.$message({
							  type: 'success',
							  message: '删除成功!'
              });
              this.init();
						}
						
					})
				  
				}).catch(() => {
				  this.$message({
					type: 'info',
					message: '已取消删除'
				  });          
				});
				
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
			left: 10px;
			content: '';

		}
	}
	.zhengwugongkai .lvshixiac:after {
		width: 80px;
		height: 2px;
		background: #0077AA;
		position: absolute;
		top: 30px;
		// left: 38px;
		content: '';

	}
	.zuzhijifou {
		width: 46%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>

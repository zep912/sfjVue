<template>
	<div class="p_conright">
		<div class="top_manalvs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
				<el-breadcrumb-item>司法考试</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="mana_tab">
			<div :class="lvs==1?'lvshixiac':''" @click="lvsuo(1)">考试动态</div>
			<div :class="lvs==2?'lvshixiac':''" @click="lvsuo(2)">网上报名入口</div>
		</div>
		<div v-if="lvs==1">
			<div class="tightp_top" style="border: 0;">
				<div class="zuzhijifou">
					<div>
						<router-link :to="{path:'xinzeng_sifakaoshi'}">
							<el-button type="success">新增</el-button>

						</router-link>
						<el-button type="danger" style="margin-left: 20px;">删除</el-button>
					</div>
				</div>
				<div class="p_search">
					<input type="text" placeholder="请输入标题查询">
					<div class="searchp">
						<img src="../../assets/image/u2290.png" alt="">
					</div>
				</div>
			</div>
			<div class="biaoge_content">
				<el-table ref="multipleTable" :data="kaoshidt" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column type='index' label="序号" width="120">
					</el-table-column>
					<el-table-column prop="newsTitle" label="标题">
					</el-table-column>
					<el-table-column prop="newsSource" label="来源" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="newsAuthor" label="作者" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="readHits" label="阅读次数" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="publishTime" label="发布时间" show-overflow-tooltip>
					</el-table-column>
					<el-table-column label="操作">
					      <template slot-scope="scope">
							  <el-button
							    size="mini"
							    @click="chakan(scope.$index, scope.row)">查看</el-button>
					        <el-button
					          size="mini"
					          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					        <el-button
					          size="mini"
					          type="danger"
					          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					      </template>
					    </el-table-column>
				</el-table>
			</div>
			<div class="p_page">
				<el-pagination @current-change="handleCurrentChange_B"
							   :page-size="10"
							   :current-page="pageNum"
							   layout="total, prev, pager, next, jumper"
							   :total="total">
				</el-pagination>
			</div>
		</div>
		<div v-if="lvs==2" class="wangshangbm">
			<div class="flex" style="align-items: flex-start;">
				<span class="text_betten">链接地址<i></i></span><span class="name_span">*</span>
				<el-input  v-model="addForm.linkUrl" style="width: 82%;" placeholder="请输入链接地址"></el-input>
			</div>
			<div class="flex" style="align-items: flex-start;margin-top: 20px;">
				<span class="text_betten">上传照片<i></i></span><span class="name_span">*</span>
<!--				<el-upload-->
<!--						class="upload-demo"-->
<!--						drag-->
<!--						action="https://jsonplaceholder.typicode.com/posts/"-->
<!--						multiple>-->
<!--					<i class="el-icon-upload"></i>-->
<!--					<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>-->
<!--					<div class="el-upload__tip" slot="tip"><span class="tishi_img">注：图片尺寸1200*135</span></div>-->
<!--				</el-upload>-->
<!--				:class="{hide:hideUpload}"-->
				<el-upload :class="{hide:hideUpload}"
						   :action="uploadUrl"
						   multiple
						   :data="{token:token}"
						   list-type="picture-card"
						   :file-list="fileList"
						   :on-change="uploadFileChange"
						   :on-success="successUpload_goodsAdmin"
						   :on-remove="removeFileList"
						   accept=".jpg,.jpeg,.png,.gif,.bmp"
						   :limit="1">
					<i class="el-icon-plus"></i>
				</el-upload>

			</div>
			<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
				<el-button type="primary" @click="baocuns">保存</el-button>
				<el-button>取消</el-button>
			</div>
		</div>

	</div>
</template>

<script>
	import {kaoshi,saveExamApplyLink} from '../../http/api.js'
	import {saveLawOffice} from "../../http/api";
	export default {
		data() {
			return {
				total:'',
				pageNum:0,
				value: '',
				activeName: 'second',
				multipleSelection: [],
				lvs: 1,
				kaoshidt: '',
				hideUpload: false,
				uploadUrl:
						"http://192.168.0.133:9001/jjkj/sfj/api/support/uploadFile",
				fileList: [],
				addForm: {
					linkUrl:'',
                    imgId:'',
				},
				datachuan:{
					newsType:'8'
				}
			}
		},
		created() {
			kaoshi(this.datachuan).then(res=>{
				if (res.code == '200') {
					this.kaoshidt = res.content.dataList;
				}
			})
		},
		methods: {
			//图片上传
			successUpload_goodsAdmin(success) {
				for (let i in success.content.fileList) {
					console.log(success.content.fileList[i].fileId);
					this.addForm.imgId = success.content.fileList[i].fileId;
				}
			},
			removeFileList(file, fileList) {
				console.log(file, fileList);
				// this.addForm.imgId = this.addForm.imgList.filter(
				// 		item => item !== file.url
				// );
				this.hideUpload = fileList.length >= 1;
			},
			uploadFileChange(file, fileList) {
				this.hideUpload = fileList.length >= 1;
			},
			handleClick(tab, event) {
				console.log(tab, event);
			},
			lvsuo(e) {
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
			baocuns(){
				this.token = sessionStorage.getItem("token");
				var _this = this;
				// this.$refs["addForm"].validate(valid => {
				// 	if (valid) {
						saveExamApplyLink(this.addForm).then(success => {
							if (success.code == 200) {
								_this.$notify({
									message: "提交成功",
									type: "success"
								});
								setTimeout(() => {
									this.$router.go(-1);
								}, 1500);
							} else {
								_this.$message.error({
									message: success.msg
								});
							}
						});
					// } else {
					// 	return false;
					// }
				// });
			},
			//查看
			chakan(index, row) {
				this.$router.push({
						path: '/chakan_zhengwu',
						query: {
							type: this.datachuan.newsType,
						id: row.newsId
					}
				})
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

	.zuzhijifou {
		width: 35%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.wangshangbm {
		width: 96%;
		padding: 20px 2%;
	}
	.hide .el-upload--picture-card {
		display: none;
	}
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
</style>

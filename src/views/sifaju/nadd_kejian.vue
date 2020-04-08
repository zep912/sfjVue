<template>
	<div class="xinzeng_kj">
		<div class="xinz_kejiantop">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item :to="{ path: '/manakejianku' }">课件库管理</el-breadcrumb-item>
			  <el-breadcrumb-item>新增课件</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="add_kejian">
			<!--<div class="addkejian_topup">-->
				<!--<div>-->
					<!--<el-progress :percentage="100" stroke-width="15"></el-progress>-->
				<!--</div>-->
				<!--<div class="addkej_text">-->
					<!--<div>-->
						<!--<div>当前上传速度： 212.16 kb/s</div>-->
						<!--<div>预计剩余时间： 0秒</div>-->
						<!--<div>已上传： 6.82MB/6.82MB</div>-->
					<!--</div>-->
					<!--&lt;!&ndash;<div>重新上传</div>&ndash;&gt;-->
				<!--</div>-->
			<!--</div>-->
			<div class="xinzadd_from">
				<el-form :model="addForm"
						 ref="addForm">
				<div class="shoujihoama1" style="justify-content: flex-start;">
					<div class="flex" style="align-items: flex-start;margin: 15px 0;">
						<span class="text_betten">课件类型<i></i></span><span class="name_span">*</span>
						<!--<el-input style="width: 60%;margin-right:20px" placeholder="自动获取可更改"></el-input>-->
						<el-input  v-model="recordUnit" :disabled="true" placeholder="自动获取可更改" style="width: 73%;" v-if="shipin"></el-input>
						<el-input  v-model="recordUnitType" :disabled="true" placeholder="自动获取可更改" style="width: 73%;" v-if="!shipin"></el-input>
					</div>
					<div class="flex" style="align-items: flex-start;margin: 15px 0;"  v-if="shipin">
						<span class="text_betten">视频时长<i></i></span><span class="name_span">*</span>
						<el-input style="width: 60%;margin-right:20px" v-model="main" placeholder="未知"></el-input>
						
					</div>
					<div class="flex" style="align-items: flex-start;margin: 15px 0;"  v-if="shipin">
						<span class="text_betten">视频大小<i></i></span><span class="name_span">*</span>
						<el-input style="width: 60%;margin-right:20px" v-model="min" placeholder="324MB"></el-input>
						
					</div>
					<div class="flex" style="align-items: flex-start;margin: 15px 0;"  v-if="!shipin">
						<span class="text_betten">文档页数<i></i></span><span class="name_span"></span>
						<el-input style="width: 60%;margin-right:20px" v-model="addForm.docPages" placeholder="未知"></el-input>

					</div>
					<div class="flex" style="align-items: flex-start;margin: 15px 0;"  v-if="!shipin">
						<span class="text_betten">文档大小<i></i></span><span class="name_span">*</span>
						<el-input style="width: 60%;margin-right:20px" :disabled="true" v-model="size" placeholder="324MB"></el-input>

					</div>
				</div>
				<div class="flex" style="align-items: flex-start;margin: 15px 0;">
					<span class="text_betten">课件名称<i></i></span><span class="name_span">*</span>
					<el-input style="width: 82%;" v-model='name '  :disabled="true" placeholder="自动获取可更改"></el-input>
				</div>
			<el-form-item prop="brief" :rules="[{ required: true, message: '请输入课件简介', trigger: 'blur' }]">
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten" style="line-height: 20px;">课件简介<i></i></span><span class="name_span">*</span>
					<textarea name="" id="" cols="30" rows="10" v-model="addForm.brief" style="width: 80.5%;"></textarea>
				</div>
			</el-form-item>
				<!--<div class="shoujihoama1">-->
			<div style="display: flex;justify-content: space-between;width: 89%">
				<el-form-item prop="knowledgeScope" :rules="[{required: true, message: '请选择知识范围', trigger: 'change'}]">
					<div class="flex" style="align-items: flex-start;padding-top: 20px;">
						<span class="text_betten" style="line-height: 20px;">知识范围<i></i></span><span class="name_span">*</span>
						<div class="right_flex">
							<el-select v-model="addForm.knowledgeScope"
									   style="width: 400px;"
									   placeholder="请选择">
								<el-option v-for="item in zhishifanweiList"
										   :key="item.dictDataCode"
										   :label="item.dictDataName"
										   :value="item.dictDataCode">
								</el-option>
							</el-select>
						</div>
						<!--v-if="shipin"-->
						<!--placeholder="自动获取可更改"-->
						<!--<div class="flex" style="align-items: flex-start;">-->
						<!--<span class="text_betten">负责人<i></i></span><span class="name_span">*</span>-->
						<!--<el-select v-model="value" placeholder="全部" style="width: 82%;">-->
						<!--<el-option-->
						<!--v-for="item in peixunleix"-->
						<!--:key="item.value"-->
						<!--:label="item.label"-->
						<!--:value="item.value">-->
						<!--</el-option>-->
						<!--</el-select>-->
						<!--</div>-->
						<!--<div class="flex" style="align-items: flex-start;">-->
						<!--<span class="text_betten">负责人<i></i></span><span class="name_span">*</span>-->
						<!--<el-select v-model="value" placeholder="全部" style="width: 82%;">-->
						<!--<el-option-->
						<!--v-for="item in peixunleix"-->
						<!--:key="item.value"-->
						<!--:label="item.label"-->
						<!--:value="item.value">-->
						<!--</el-option>-->
						<!--</el-select>-->
						<!--</div>-->
					</div>
				</el-form-item>
				<el-form-item prop="contentType" :rules="[{required: true, message: '请选择内容分类', trigger: 'change'}]">
					<div class="flex" style="align-items: flex-start;padding-top: 20px;">
						<span class="text_betten" style="line-height: 20px;">内容分类<i></i></span><span class="name_span">*</span>
						<div class="right_flex right_flex">
							<el-select v-model="addForm.contentType"
									   style="width: 400px;"
									   placeholder="请选择">
								<el-option v-for="item in neirongfenleiList"
										   :key="item.dictDataCode"
										   :label="item.dictDataName"
										   :value="item.dictDataCode">
								</el-option>
							</el-select>
						</div>
						<!--v-if="shipin"-->
						<!--placeholder="自动获取可更改"-->
						<!--<div class="flex" style="align-items: flex-start;">-->
						<!--<span class="text_betten">负责人<i></i></span><span class="name_span">*</span>-->
						<!--<el-select v-model="value" placeholder="全部" style="width: 82%;">-->
						<!--<el-option-->
						<!--v-for="item in peixunleix"-->
						<!--:key="item.value"-->
						<!--:label="item.label"-->
						<!--:value="item.value">-->
						<!--</el-option>-->
						<!--</el-select>-->
						<!--</div>-->
						<!--<div class="flex" style="align-items: flex-start;">-->
						<!--<span class="text_betten">负责人<i></i></span><span class="name_span">*</span>-->
						<!--<el-select v-model="value" placeholder="全部" style="width: 82%;">-->
						<!--<el-option-->
						<!--v-for="item in peixunleix"-->
						<!--:key="item.value"-->
						<!--:label="item.label"-->
						<!--:value="item.value">-->
						<!--</el-option>-->
						<!--</el-select>-->
						<!--</div>-->
					</div>
				</el-form-item>
			</div>
			<el-form-item prop="couCover" :rules="[{required: true, message: '请选择课件封面', trigger: 'change'}]">
				<div class="flex" style="align-items: flex-start;margin-top: 20px;">
					<span class="text_betten" style="line-height: 20px;">课件封面<i></i></span><span class="name_span">*</span>
					<!--<el-upload-->
					  <!--class="avatar-uploader"-->
					  <!--action="https://jsonplaceholder.typicode.com/posts/"-->
					  <!--:show-file-list="false"-->
					  <!--:on-success="handleAvatarSuccess"-->
					  <!--:before-upload="beforeAvatarUpload">-->
					  <!--<img v-if="imageUrl" :src="imageUrl" class="avatar">-->
					  <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
					<!--</el-upload>-->
					<el-upload
							class="avatar-uploader"
							action="http://192.168.0.133:9001/jjkj/sfj/api/support/uploadFile"
							:show-file-list="false"
							:data="dataFrom"
							:on-success="handleAvatarSuccess"
							:before-upload="beforeAvatarUpload">
						<img v-if="imageUrl" :src="imageUrl" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
				</div>
			</el-form-item>
				</el-form>
			</div>
		   <div class="dibubtmadd">
			<el-button type="success" @click="jump('/manakejianku',{id:'preview'})">预览</el-button>
			<el-button type="primary" @click="baocun()">保存发布</el-button>
			<el-button>取消</el-button>
		</div>
		</div>
	</div>
</template>

<script>
	import {saveTrainCourseware, getSelectDetail} from "../../http/api";
	export default {
		data(){
			return{
				zhishifanweiList:[],
				neirongfenleiList:'',
				//培训类型
				peixunleix:[
					
				],
				dataFrom:{
					"token":sessionStorage.getItem("token"),
				},
				value:'',
                recordUnit:'视频课件',
                recordUnitType:'文档课件',
                vadio:'123456.mp4',
				name:'',
                shipin:false,
				main:'',
				min:'',
                imageUrl: '',
				id:'',
				addForm:{
					token:sessionStorage.getItem("token"),
					couType:'',
					couName:this.$route.query.name,
					brief:'',
					knowledgeScope:'',
					contentType:'',
					fileId:this.$route.query.id,
					couCover:'',
					fileSize:this.$route.query.size,
					docPages:''
				}
			}
		},
        mounted() {
            this.shipin = this.$route.query.shipin;
            if(this.shipin == 'shipin'){
				this.shipin = true;
            	this.addForm.couType = '1';
			}else{
				this.addForm.couType = '2';
			}
			this.id = this.$route.query.id;
			this.name = this.$route.query.name;
			this.size = this.$route.query.size;
			this.getSelectDetailData();
        },
	    methods: {
			// 获取下拉列表数据
			async getSelectDetailData() {
				console.log('数据字典');
				let zhishifanweiData = await getSelectDetail({
					dictCode: "zhishifanwei",
					userId: "111"
				});
				this.zhishifanweiList = [...zhishifanweiData.content.resultList];
				let neirongfenleiData = await getSelectDetail({
					dictCode: "neirongfenlei",
					userId: "111"
				});
				this.neirongfenleiList = [...neirongfenleiData.content.resultList];
			},
            //添加跳转
            jump(url,params){
                this.$router.push({
                    path:url,
                    query: params
                });
            },
	      format(percentage) {
	        return percentage === 100 ? '满' : `${percentage}%`;
	      },
		  // handleAvatarSuccess(res, file) {
			//   this.imageUrl = URL.createObjectURL(file.raw);
			// },
            handleAvatarSuccess(res, file) {
            	console.log(file);
                this.imageUrl = URL.createObjectURL(file.raw);
                this.addForm.couCover = file.response.content.fileList[0].fileId;
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
			//保存
			baocun(){
				this.$refs["addForm"].validate(valid => {
					if (valid) {
                       console.log(this.addForm);
						saveTrainCourseware(this.addForm).then(res => {
							if(res.code == '200'){
								this.$message({
									message: "提交成功",
									type: "success"
								});
								this.$router.push({
									path: "/manakejianku",query:{
									  id:'release'
								    }
								});
							}else if(res.code == '220'){
								this.$message.error(res.msg);
							}

						});
					}
				})

			},
			// beforeAvatarUpload(file) {
			//   const isJPG = file.type === 'image/jpeg';
			//   const isLt2M = file.size / 1024 / 1024 < 2;
            //
			//   if (!isJPG) {
			// 	this.$message.error('上传头像图片只能是 JPG 格式!');
			//   }
			//   if (!isLt2M) {
			// 	this.$message.error('上传头像图片大小不能超过 2MB!');
			//   }
			//   return isJPG && isLt2M;
			// },

	    }
	};
</script>

<style>

	.xinzeng_kj{
		width: 100%;
	}
	.xinz_kejiantop{
		width: 96%;
		padding: 0 2%;
		height: 70px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #eee;
	}
	.add_kejian{
		width: 96%;
		padding: 20px 2%;
	}
	.addkejian_topup{
		width: 92%;
		padding: 15px 4%;
		background: #eee;
	}
	.addkej_text{
		margin-top: 18px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 14px;
	}
	.addkej_text>div{
		display: flex;
		align-items: center;
	}
	.addkej_text>div div{
		margin-right: 20px;
	}
	.addkej_text>div:nth-child(2){
		color: #1159A3;
	}
	.xinzadd_from{
		width: 96%;
		padding: 20px 2%;
	}
	.p_conright{
		width: 100%;
	}
	.top_manalvs{
		width: 96%;
		padding: 0 2%;
		height: 70px;
		background: #fff;
		border-bottom: 1px solid #eee;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.xianchang_content{
		width: 94%;
		padding: 20px 3%;
	}
	.shoujihoama1{
		width: 89%;
		display: flex;
		align-items: center;
		margin-top: 20px;
		justify-content: space-between;
		.flex{
			width: 45%;
		}
	}
	.kaishi_time{
		display: flex;
		align-items: center;
	}
	.kaishi_time>div{
		padding: 0 15px;
		height: 40px;
		border-radius: 5px;
		border: 1px solid #eee;
		margin-right: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.kaishi_time>div input{
		border: 0;
		width: 40px;
		color: #0077AA;
		text-align: center;
	}
	.xuanzekj_btn{
		width: 9%;
		height: 39px;
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #eee;
		color: #0077AA;
		margin-left: 1.3%;
		font-size: 15px;
	}
	.xinzeng_kj .flex{
		width: 100%;
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
	  .avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 178px;
	    height: 178px;
	    line-height: 178px;
	    text-align: center;
	  }
	  .avatar {
	    width: 178px;
	    height: 178px;
	    display: block;
	  }
	  .dibubtmadd{
		  width: 100%;
		  display: flex;
		  align-items: center;
		  justify-content: center;
	  }
</style>

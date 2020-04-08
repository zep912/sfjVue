<template>
		<div class="lawyercon">
			<div class="lawyerps">
				<div>首页</div>
				<div class="fenge">></div>
				<div>律师信息</div>
			</div>
			<div class="zaixianzx">
				<div class="tab_zixun">
					<div :class="zx_active==1?'zixuntabactive':''" @click="zixun(1)">局长邮箱</div>
				</div>
				<div class="zixuncontent" v-if="zx_active==1">
					<div class="shoujihoama">
						<div class="flex" style="align-items: flex-start;">
							<span class="text_betten">发信人<i></i></span><span class="name_span" style="opacity: 0;">*</span>
							<el-input v-model="citizenInfo.personName" style="width: 82%;" placeholder="自动获取可更改,不能空" :disabled="disabled"></el-input>
						</div>
						<div class="flex" style="align-items: flex-start;">
							<span class="text_betten">手机号码<i></i></span><span class="name_span">*</span>
							<el-input v-model="citizenInfo.cellphone" style="width: 82%;" placeholder="自动获取"
								:class="{'waring_info_border':checkSize_type.cellphone}" @blur="checkSize(citizenInfo.cellphone,'cellphone')"></el-input>
						</div>
					</div>
					<div class="flex" style="align-items: flex-start;">
						<span class="text_betten">标题<i></i></span><span class="name_span">*</span>
						<el-input v-model="submitSuggestInfo.feeTitle" style="width: 82%;" placeholder="请用一句话概括您的问题"
							:class="{'waring_info_border':checkSize_type.feeTitle}" @blur="checkSize(submitSuggestInfo.feeTitle,'feeTitle')"></el-input>
					</div>
					<div class="flex" style="align-items: flex-start;">
						<span class="text_betten">内容描述<i></i></span><span class="name_span" >*</span>
						<textarea name="" id="" v-model="submitSuggestInfo.feeContent" cols="30" rows="10"
							:class="{'waring_info_border':checkSize_type.feeContent}" @blur="checkSize(submitSuggestInfo.feeContent,'feeContent')"></textarea>
					</div>
					<div class="flex" style="align-items: flex-start;margin-top: 20px;">
						<span class="text_betten">上传照片<i></i></span><span class="name_span" style="opacity: 0;">*</span>
						<el-upload
							class="avatar-uploader"
							:action="this.uploadUrl"
							:show-file-list="false"
							:data="uploadType"
							accept=".jpg,.jpeg,.png,.gif,.bmp"
							:on-success="successUpload">
							<img v-if="imageUrl" :src="imageUrl" class="avatar">
							<i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
					</div>
					<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
						  <el-button type="primary" @click="saveSuggestForDirector">提交</el-button>
						<el-button>取消</el-button>
					</div>
				</div>
			</div>
		</div>
</template>
<script>
	import {saveSuggestForDirector,getCitizenInfo} from '../../http/api';
	const token = sessionStorage.getItem('token');
	export default {
		data() {
		    return {
				zx_active:1,
				citizenInfo:{},
				submitSuggestInfo:{
					token: '',
					feeTitle: '',
					feeContent: '',
					feeModel: '2'
				},
				imgUrl: '',
				checkSize_type: {
					cellphone: false,
                    feeTitle: false,
                    feeContent: false,
                }
		    };
		},
		mounted() {
			getCitizenInfo({token:token}).then(success=>{
				this.citizenInfo = success.content;
			});
		},
		methods: {
			saveSuggestForDirector(){
				this.submitSuggestInfo.token = token;
				if(this.submitSuggestInfo.feeTitle && this.submitSuggestInfo.feeContent){
					saveSuggestForDirector(this.submitSuggestInfo).then(success=>{
						if(success.code === 200){
							this.$notify({
								message: '提交成功',
								type: 'success'
							});
							setTimeout(()=>{
								window.location.reload();
							},1000);
						}
					});
				}else{
					this.$notify.error({
						message: '信息请填写完整'
					})
				}
			},
			//图片上传
            successUpload(success,file){
                this.imgUrl = success.content.fileList[0].fileId;
            },
			checkSize(size,dom){
                !size ?this.checkSize_type[dom] = true:this.checkSize_type[dom] = false;
            }
		},
		computed: {
			uploadType(){
				return {
					"token": sessionStorage.getItem("token"),
				}
			},
		},
	}; 
</script>
<style lang="scss">
	.lawyer_list {
		width: 100vw;
		background: #f2f2f2;
	}
	.lawyer_contop{
		width: 1200px;
		margin: 30px auto;
		
	}
	.lawyercon{
		width: 100%;
		.zaixianzx{
			width: 100%;
			background: #fff;
			margin-top: 20px;
		}
	}
	.lawyerps{
		display: flex;
		align-items: center;
	}
	.fenge{
		margin: 0 20px;
	}
	.zaixianzx{
		width: 96%;
		padding: 20px 2%;
	}
	.tab_zixun{
		width: 100%;
		display: flex;
		align-items: center;
		div{
			padding: 10px 15px;
			background: #f7f7f7;
			color: #333;
		}
		.zixuntabactive{
			color: #fff;
			background:-webkit-linear-gradient(left,#0fa3d5, #1b79c2) ;
		}
	}
	.zixuncontent{
		width: 100%;
		padding: 20px 0;
		.shaixuan{
			border: 0;
			padding:0;
			margin: 0;
		}
		.topcon{
			position: relative;
		}
		.zhenduixingzx{
			width: 50px;
			height: 40px;
			position: absolute;
			top: 10px;
			right: 10px;
			background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2) ;
			color: #fff;
			text-align: center;
			font-size: 15px;
			border-radius: 5px;
			padding-top: 10px;
		}
	}
	.el-radio-group{
		width: 80%;
		text-align: left;
		margin-top: 15px;
		.el-radio{
			margin-bottom: 15px;
		}
	}
	.shoujihoama{
		width: 92%;
		display: flex;
		align-items: center;
		margin-top: 20px;
		justify-content: space-between;
		.flex{
			width: 45%;
		}
	}
	.tankuang{
		width: 100vw;
		height: 100vh;
		background: rgba(0,0,0,0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		.tank_content{
			width: 260px;
			background: #fff;
			color: #333;
			padding-top: 20px;
			text-align: center;
			border-radius: 5px ;
			overflow: hidden;
			img{
				width: 50px;
				height: 50px;
			}
		}
	}
	.tank_title{
		width: 70%;
		text-align: center;
		margin: 10px auto;
		span{
			color: #0077AA;
		}
	}
	.tank_btn{
		width: 100%;
		display: flex;
		align-items: center;
		div{
			width: 50%;
			background: #f7f7f7;
			color: #0077AA;
			height: 45px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.sure_tank{
			background:-webkit-linear-gradient(left,#0fa3d5, #1b79c2) ;
			color: #fff;
		}
	}
	.yixiang{
		width: 34%;
		margin-right: 20px;
		border: 1px solid #eee;
		margin-bottom: 10px;
	}
	.xiugai_lvshi{
		width: 100px;
		height: 30px;
		border: 1px solid #0077AA;
		border-radius: 5px;
		color: #0077AA;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>

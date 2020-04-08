<template>
	<div class="zaixianzixun">
		<div class="zaixian_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item :to="{path:'/tupianfabu'}">图片发布</el-breadcrumb-item>
			  <el-breadcrumb-item>上传图片</el-breadcrumb-item>
			</el-breadcrumb>
		</div>

		<div class="formWrap">
			<el-form :model="form" :rules="rules" ref="form">
        <el-row :gutter="0">
					<el-col :span="24">
						<el-form-item class="itemWrap"  prop="bannerTitle">
							<span class="textSpan">标题<i></i></span><span class="name_span" >*</span>
							<el-input maxlength="100" v-model="form.bannerTitle" placeholder="标题"></el-input>
							</el-form-item>
					</el-col>
				</el-row>
        <el-row :gutter="0">
					<el-col :span="10">
						<el-form-item class="itemWrap"  prop="bannerType">
							<span class="textSpan">所属分类<i></i></span><span class="name_span" >*</span>
                <el-select v-model="form.bannerType" placeholder="请选择所属分类" style="width: 100%;">
                  <el-option
                    v-for="item in options"
                    :key="item.dictDataCode"
                    :label="item.dictDataName"
                    :value="item.dictDataCode">
                  </el-option>
								</el-select>
							</el-form-item>
					</el-col>
					<el-col :span="10" :offset="4">
						<el-form-item class="itemWrap"  prop="bangongsijian">
							<span class="textSpan">上传日期<i></i></span><span class="name_span" >*</span>
							<el-input maxlength="100" v-model="form.date" :disabled="true" placeholder="自动获取"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="20" style="margin-top:0px;">
					<el-col :span="24">
						<el-form-item class="itemWrap"  prop="linkUrl">
							<span class="textSpan">链接地址<i></i></span><span class="name_span" >*</span>
							<el-input maxlength="100" v-model="form.linkUrl" placeholder="链接地址"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
        <div class="flex" style="align-items: flex-start;margin-top: 20px;position:relative;">
            <span class="text_betten">上传照片<i></i></span><span class="name_span" style="opacity: 0;">*</span>
            <el-upload
                :action="uploadUrl"
                :data="uploadType"
                :file-list="fileList"
                list-type="picture-card"
                :on-success="successUpload_goodsAdmin"
                :on-remove="handleRemove"
                accept=".jpg,.jpeg,.png,.gif,.bmp"
                :limit="1">
                <i class="el-icon-plus"></i>
            </el-upload>
						<p v-if="uploadimgValidate" class="sctpStyle">请上传图片</p>
        </div>
				<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
					<el-button type="primary" @click="tijiao">提交</el-button>
					<el-button @click="quxiao">取消</el-button>
				</div>
			</el-form>
		</div>



		<!-- <div class="qingjia_neirong">
			<div class="flex" style="align-items: flex-start;">
				<span class="text_betten">标题<i></i></span><span class="name_span">*</span>
				<el-input v-model="biaoti" style="width: 82%;" placeholder="请输入标题"></el-input>
			</div>
			<div class="shoujihoama1">
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">所属分类<i></i></span><span class="name_span">*</span>
					<el-select v-model="value" placeholder="请选择">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				</div>
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">上传日期<i></i></span><span class="name_span" style="opacity: 0;">*</span>
					<el-date-picker
					      v-model="value1"
					      type="datetime"
					      placeholder="选择日期时间"
						  style="width: 82%;"
						  >
					</el-date-picker>
					<el-input v-model="lianjiedres" style="width: 82%;" placeholder="自动获取可更改,不能空" disabled="disabled"></el-input>
				</div>
			</div>
			<div class="flex" style="align-items: flex-start;">
				<span class="text_betten">链接地址<i></i></span><span class="name_span">*</span>
				<el-input v-model="lianjiedres" style="width: 82%;" placeholder="自动获取可更改,不能空"></el-input>
			</div>
			<div class="flex" style="align-items: flex-start;margin-top: 20px;">
				<span class="text_betten">上传照片<i></i></span><span class="name_span">*</span>
				<div>
					<el-upload
						:action="uploadUrl"
						:data="uploadType"
						list-type="picture-card"
						:on-success="successUpload_goodsAdmin"
						accept=".jpg,.jpeg,.png,.gif,.bmp"
						:limit="1">
						<i class="el-icon-plus"></i>
					</el-upload>
					<div class="tishi_img">注：图片尺寸797*360</div>
				</div>
				
			</div>
			<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
				  <el-button type="primary" @click="tijiao">提交</el-button>
				<el-button>取消</el-button>
			</div>
		</div> -->
	</div>
</template>

<script>
	import {lunbotushangchuan, imgBaseurl} from '../../http/api.js'
	export default {
	  data() {
	    return {
			form: {
				bannerTitle: '',
				bannerType: '1',
				linkUrl: '',
				imgId: '',	
			},
			rules: {
        bannerTitle: [
          { required: true, message: "请输入标题", trigger: "blur" }
        ],
        bannerType: [
          { required: true, message: "请选择", trigger: "change" }
        ],
        linkUrl: [
          { required: true, message: "请输入链接地址", trigger: "blur" }
        ]
			},
			uploadimgValidate: false,
			input: '',
			options: [
			{
				dictDataCode: '1',
				dictDataName: '导航轮播'
			},{
				dictDataCode: '2',
				dictDataName: '焦点轮播'
			}],
			zixun_active:2,
			value1:'',
			gengduo:false,
			biaoti:'',
			uploadUrl:'http://192.168.0.133:9001/jjkj/sfj/api/support/uploadFile',
			lianjiedres:'',
			submitProList:{
				fileId:''
			}
			}
		},
		mounted() {
	    this.uploadUrl = imgBaseurl + "/support/uploadFile";
		},
		methods:{
			//图片上传
      successUpload_goodsAdmin(success, file) {
				this.form.imgId = success.content.fileList[0].fileId;
			},
			handleRemove() {
				this.form.imgId = void 0;
			},
			zixuntab(e){
				this.zixun_active=e
			},
			qingjia(){
				this.gengduo = true
			},
			close(){
				this.gengduo = false
			},
			quxiao() {
      	this.$router.go(-1);
			},
			tijiao(){
				this.$refs["form"].validate(valid => {
					if(!this.form.imgId) {
						this.uploadimgValidate = true;
					}else {
						this.uploadimgValidate = false;
					}
					if (valid&&this.form.imgId) {
						lunbotushangchuan({
						"bannerTitle": this.form.bannerTitle,                //类型：String  必有字段  备注：图片标题
						"bannerType": this.form.bannerType,                //类型：String  必有字段  备注：所属分类 1：导航轮播；2：焦点轮播；
						"imgId": this.form.imgId,                //类型：String  必有字段  备注：上传的图片ID
						"linkUrl":this.form.linkUrl,                //类型：String  必有字段  备注：连接地址
					}).then(res=>{
						if(res.code==200){
							this.$message({
								message: '新增成功',
								type: 'success'
							});
							setTimeout(() => {
                this.$router.go(-1);
              }, 1500);
						}else{
							this.$message.error(res.msg);
						}
					})
				}
				});
			}
		},
		computed: {
			uploadType(){
				return {
					"token": sessionStorage.getItem("token"),
				}
			},
		},
	}
</script>

<style lang="scss">
	.zaixianzixun{
		width: 100%;
		height: 100%;
	}
	.zaixian_top{
		width: 96%;
		height: 70px;
		padding-left: 2%;
		border-bottom: 1px solid #eee;
		display: flex;
		align-items: center;
	}
	.zixun_content{
		width: 100%;
	}
	.zixun_tab{
		width: 94%;
		padding: 10px 3%;
		background: #f2f2f2;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.zixun_tab>div{
		width: 120px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.zixun_liebiao{
		width: 96%;
		padding: 20px 2%;
	}
	.liebiao_top{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.liebiao_topzuo{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 40%;
	}
	.liebiao_sousuo{
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.liebiao_sousuo input{
		width: 160px;
		height: 38px;
		padding-left: 10px;
		font-size: 14px;
		border-radius: 5px 0 0 5px;
		border: 1px solid #eee;
	}
	.liebiao_search{
		width: 80px;
		height: 40px;
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0 5px 5px 0;
	}
	.zixun_fenye{
		width: 100%;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.zixun_active{
		color: #068FD4;
		position: relative;
		font-weight: 600;
	}
	.zixun_active:after{
		width: 100px;
		height: 2px;
		background: #068FD4;
		position: absolute;top: 34px;
		left: 10px;
		content: '';
	}
	.biaoge{
		margin-top: 20px;
	}
	.qingjia_neirong{
		width: 96%;
		padding: 20px 2%;
	}
	.shoujihoama1{
		width: 89.2%;
		display: flex;
		align-items: center;
		margin-top: 20px;
		justify-content: space-between;
		.flex{
			width: 45%;
		}
	}
	.yiwen{
		width: 30px !important;
		height: 30px !important;
		position: absolute;
		right: 10%;
	}
	.tankuang{
		width: 100vw;
		height: 100vh;
		background: rgba(0,0,0,0.5);
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		.gengduo_caozuo{
			width: 260px;
		
			background: #fff;
			border-radius: 5px;
			overflow: hidden;
			.gengduo_toubu{
				width: 100%;
				height: 40px;
				background:-webkit-linear-gradient(left,#0fa3d5, #1b79c2);
				color: #fff;
				font-weight: 600;
				font-size: 18px;
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
				img{
					width: 25px;
					height: 25px;
					position: absolute;
					top: 4px;
					right: 10px;
				}
			}
			.qignjiazd{
				width: 96%;
				padding: 20px 2%;
				div:nth-child(1){
					font-size: 20px;
					color: #0077AA;
					margin-bottom: 15px;
					text-align: center;
				}
				div{
					line-height: 22px;
					text-align: left;
					font-size: 14px;
				}
			}
			.gengduo_neirong{
				width: 56%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-wrap: wrap;
				padding:20px 22% ;
				a{
					display: inline-block;
					width: 45%;
					height: 60px;
					margin-bottom: 20px;
					display: inline-block;
					div{
						width: 100%;
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 5px;
						background:-webkit-linear-gradient(left,#0fa3d5, #1b79c2);
						color: #fff;
					}
				}
				div:nth-child(3){
					background: -webkit-linear-gradient(left, #d50f8f, #991bc2);
				}
				div:nth-child(4){
					background: -webkit-linear-gradient(left, #0fd531, #bfc21b);
				}
			}
		}
	}
	.tishi_img{
		    position: relative;
		    top: 20px;
		    left: 3px;
		    color: #FF0000;
	}
	.formWrap {
  padding: 20px 2%;
  .itemWrap {
    > div {
      display: flex;
      align-items: center;
      .textSpan {
        font-size: 16px;
        width: 70px;
        flex: 0 0 70px;
        display: inline-block;
        text-align: justify;
        line-height: 40px;
        height: 40px;
        i {
          display: inline-block;
          width: 100%;
        }
      }
    }
  }
  .el-form-item__error {
    color: #f56c6c;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: 100%;
    left: 115px;
  }
}
.sctpStyle {
	position: absolute;
	bottom: -20px;
	left: 120px;
	font-size: 12px;
	color: #f56c6c;
}
</style>

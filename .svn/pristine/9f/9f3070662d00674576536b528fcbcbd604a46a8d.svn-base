<template>
	<div class="xinzeng_falvfagui">
		<div class="top_manalvs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item :to="{path:'falv_liebiao'}">普法宣传</el-breadcrumb-item>
			  <el-breadcrumb-item>新增法律法规</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!-- <div class="add_lvshi falvf_content">
			<div class="add_child">
				<div class="flex">
					<span class="text_betten">标题<i></i></span><span class="name_span" >*</span>
					<el-input v-model="tijiaodata.lawTitle" style="width: 60%;" placeholder="请输入内容"></el-input>
				</div>
				<div class="flex">
					<span class="text_betten">颁布单位<i></i></span><span class="name_span" >*</span>
					<el-input v-model="tijiaodata.enactOrg" style="width: 60%;" placeholder="请输入内容"></el-input>
				</div>
				<div class="flex">
					<span class="text_betten">颁布日期<i></i></span><span class="name_span" >*</span>
					<el-date-picker
					  v-model="tijiaodata.enactDate"
					  type="date"
					  placeholder="选择日期" style="width: 60%;">
					</el-date-picker>
				</div>
			</div>
			<div class="add_child">
				<div class="flex">
					<span class="text_betten">效力级别<i></i></span><span class="name_span" >*</span>
					<el-select v-model="tijiaodata.scopeLevel" style="width: 60%;">
						<el-option v-for="(item,index) in lvSelectList" :value="item.dictDataCode" :key="index" :label="item.dictDataName"></el-option>
					</el-select>
				</div>
				<div class="flex">
					<span class="text_betten">时效性<i></i></span><span class="name_span" style="opacity: 0;">*</span>
					<el-select v-model="tijiaodata.lawTimeliness" style="width: 60%;">
						<el-option v-for="(item,index) in timeDataList" :value="item.dictDataCode" :key="index" :label="item.dictDataName"></el-option>
					</el-select>
				</div>
				<div class="flex">
					<span class="text_betten">执行日期<i></i></span><span class="name_span" >*</span>
					<el-date-picker
					  v-model="tijiaodata.enactDate"
					  type="date"
					  placeholder="选择日期" style="width: 60%;">
					</el-date-picker>
				</div>
			</div>
		</div> -->
		<div class="formWrap">
			<el-form :model="form" :rules="rules" ref="form">
				<el-row :gutter="0" style="margin-top:20px;">
					<el-col :span="10">
						<el-form-item class="itemWrap"  prop="title">
							<span class="textSpan">标题<i></i></span><span class="name_span" >*</span>
							<el-input maxlength="100" v-model="form.title" style="width:60%;" placeholder="中华人民共和国环境保护法"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="10" :offset="2">
						<el-form-item class="itemWrap"  prop="xiaolijibie">
							<span class="textSpan">效力级别<i></i></span><span class="name_span" >*</span>
							<el-select v-model="form.xiaolijibie" style="width: 60%;">
								<el-option v-for="(item,index) in lvSelectList" :value="item.dictDataCode" :key="index" :label="item.dictDataName"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="0">
					<el-col :span="10">
						<el-form-item class="itemWrap"  prop="banbudanwei">
							<span class="textSpan">颁布单位<i></i></span><span class="name_span" >*</span>
							<el-input maxlength="100" v-model="form.banbudanwei" style="width:60%;" placeholder="中华人民共和国环境保护法"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="10" :offset="2">
						<el-form-item class="itemWrap"  prop="sixiaoxing">
							<span class="textSpan">时效性<i></i></span><span class="name_span" >*</span>
							<el-select v-model="form.sixiaoxing" style="width: 60%;">
								<el-option v-for="(item,index) in timeDataList" :value="item.dictDataCode" :key="index" :label="item.dictDataName"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="0">
					<el-col :span="10">
						<el-form-item class="itemWrap"  prop="banburiqi">
							<span class="textSpan">颁布日期<i></i></span><span class="name_span" >*</span>
							<el-date-picker
								v-model="form.banburiqi"
								type="date"
								format="yyyy-MM-dd"
      					value-format="yyyy-MM-dd"
								placeholder="选择日期" style="width: 60%;">
							</el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="10" :offset="2">
						<el-form-item class="itemWrap"  prop="zixingriqi">
							<span class="textSpan">执行日期<i></i></span><span class="name_span" >*</span>
							<el-date-picker
								v-model="form.zixingriqi"
								type="date"
								format="yyyy-MM-dd"
      					value-format="yyyy-MM-dd"
								placeholder="选择日期" style="width: 60%;">
							</el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>
				<!-- <div class="flex" style="margin: 20px 0;"> -->
					<el-row :gutter="0">
						<el-col :span="20">
							<el-form-item class="itemWrap"  prop="uploadImg">
								<span class="textSpan">上传附件<i></i></span><span class="name_span">*</span>
<!--								<single-upload @on-success="onOileUploadSuc" :fileName="form.fileName" :showValidate="showValidateUpload"></single-upload>-->
<!--							<single-upload></single-upload>-->
							</el-form-item>
						</el-col>
					</el-row>
				<!-- </div> -->
				<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
					<el-button type="primary" @click="onSubmit">提交</el-button>
					<el-button @click="quxiao">取消</el-button>
				</div>
			</el-form>
		</div>
		<!-- <div class="falvf_content">
			<div class="flex" style="margin: 20px 0;">
				<span class="text_betten">上传附件<i></i></span><span class="name_span">*</span>
				<el-upload
					class="upload-demo"
					drag
					:action="uploadUrl"
					:data="uploadType"
					multiple>
					<i class="el-icon-upload"></i>
					<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
					<div class="el-upload__tip" slot="tip">附件格式为word 必须带文档结构图</div>
				</el-upload>
			</div>
			<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
				  <el-button type="primary" @click="tijiao">提交</el-button>
				<el-button>取消</el-button>
			</div>
		</div> -->
	</div>
</template>

<script>
    // import SingleUpload from '../../components/'
	import {add_falvfagui,getSelectDetail,imgBaseurl,pfxcXjflfg,pfxcXjflfgRead} from '../../http/api.js'
export default {
	// components: {SingleUpload},
	data() {
		return {
			uploadData: {
				token: sessionStorage.getItem("token"), 
			},
			form: {
				title: '',
				xiaolijibie: '',
				banbudanwei: '',
				sixiaoxing: '',
				banburiqi: '',
				zixingriqi: '',
				fileId: '',
				fileName: '',
				uploadImg: []
			},
			rules: {
					title: [
						{ required: true, message: '请输入标题', trigger: 'blur' }
					],
					xiaolijibie: [
            { required: true, message: '请选择效力级别', trigger: 'change' }
					],
					banbudanwei: [
						{ required: true, message: '请输入颁布单位', trigger: 'blur' }
					],
					sixiaoxing: [
            { required: true, message: '请选择时效性', trigger: 'change' }
					],
					banburiqi: [
            { required: true, message: '请选择日期', trigger: 'change' }
					],
					zixingriqi: [
            { required: true, message: '请选择日期', trigger: 'change' }
          ],
				},
			showValidateUpload: false,
			input: '',
			fileList: [],
			lvSelectList: [],  //效力级别
			timeDataList: [],  //时效性
			tijiaodata:{
				token: sessionStorage.getItem("token"),                //类型：String  必有字段  备注：用户身份标识
				lawId:"",                //类型：String  可有字段  备注：id为空是为添加，id不为空时为修改
				lawTitle:"",                //类型：String  必有字段  备注：标题
				scopeLevel:"",                //类型：String  必有字段  备注：效力级别
				enactOrg:"",                //类型：String  必有字段  备注：颁布单位
				lawTimeliness:"",                //类型：String  必有字段  备注：时效性
				enactDate:"",                //类型：String  必有字段  备注：颁布日期
				execDate:"",                //类型：String  必有字段  备注：执行日期
				fileId:"f106d4c5cdb146a8b9346b40fcfae051"                //类型：String  必有字段  备注：上传的文件ID
			},
			uploadUrl:imgBaseurl+'/support/uploadFile'
		};
	},
	mounted() {
		this.editId = this.$route.query.id;
		this.getSelectData();
		if(this.editId) {
			pfxcXjflfgRead({
				lawId: this.editId
			}).then(res=> {
				let da = res.content;
				if(res.code === 200) {
					this.form = {
						title: da.lawTitle,
						xiaolijibie: da.scopeLevel,
						banbudanwei: da.enactOrg,
						sixiaoxing: da.lawTimeliness,
						banburiqi: da.enactDate,
						zixingriqi: da.execDate,
						fileId: da.fileId,
						fileName: da.fileName,
					}
				}
			})
		}
	},
	methods:{
		select_type(){
			this.shanchang=true;
		},
		close(){
			this.shanchang=false;
		},
		handleRemove(file, fileList) {
	        console.log(file, fileList);
		},
		handlePreview(file) {
			console.log(file);
		},
		handleExceed(files, fileList) {
			this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
		},
		beforeRemove(file) {
			return this.$confirm(`确定移除 ${ file.name }？`);
		},
		quxiao() {

		},
		onOileUploadSuc(files) {
			this.form.fileId = files[0].fileId;
		},
		onSubmit() {
			this.$refs['form'].validate((valid) => {
				this.showValidateUpload = this.form.fileId?false:true;
				if(valid&&this.form.fileId) {
					pfxcXjflfg({
						"lawId": this.editId,                //类型：String  可有字段  备注：id为空是为添加，id不为空时为修改
						"lawTitle":this.form.title,                //类型：String  必有字段  备注：标题
						"scopeLevel": this.form.xiaolijibie,                //类型：String  必有字段  备注：效力级别
						"enactOrg": this.form.banbudanwei,                //类型：String  必有字段  备注：颁布单位
						"lawTimeliness": this.form.sixiaoxing,                //类型：String  必有字段  备注：时效性
						"enactDate": this.form.banburiqi,                //类型：String  必有字段  备注：颁布日期
						"execDate": this.form.zixingriqi,                //类型：String  必有字段  备注：执行日期
						"fileId": this.form.fileId    
					}).then(res=> {
						if(res.code == 200) {
                this.$message({
                  message: this.editId?'修改成功':'新增成功',
                  type: 'success'
                });
                setTimeout(()=>{
                  this.$router.go(-1)
                },1500)
              }
					});
				}
			});
			console.log(this.form);
		},
		onImgUploadSucess(response, file, fileList) {
			console.log(fileList, 998, this.form.uploadImg);
		},
		tijiao(){
			add_falvfagui(this.tijiaodata).then(res=>{
				if(res.code==200){
					this.$message({
					  message: '添加成功',
					  type: 'success'
					});
					setTimeout(()=> {
						this.$router.go(-1)
					}, 1500);
				}else{
					this.$message.error(res.msg);
				}
			})
		},
		onRemoveFile(file, fileList) {
			console.log(file, fileList);
		},
		//获取select下拉数据
		async getSelectData(){
			const type = ['xiaolijibie','shixiaoxing'];
			const domData = ['lvSelectList','timeDataList'];
			for(let dataInfo = 0; dataInfo<type.length;dataInfo++){
				let dataInfoData = await getSelectDetail({ dictCode:type[dataInfo],userId:'111' });
				this[domData[dataInfo]] = dataInfoData.content.resultList;
				// console.log(dataInfoData)
			}
		},
  	},
	computed: {
		uploadType(){
			return {
				'token': sessionStorage.getItem('token'),
			};
		},
	}
};
</script>

<style lang="scss" scoped>
	.add_lvshi{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
		
	.add_lvshi>div{
		width: 50%;
	}
	.add_child>div{
		margin-top: 20px;
	}
	.add_btn{
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: #0da9d7;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 20px;
	}
	.add_btn img{
		width: 65%;
		height: 65%;
	}
	.add_img{
		width: 100px;
		height: 100px;
		border: 1px solid #eee;
		
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.add_img img{
		width: 30px;
		height: 30px;
	}
	.toast{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 200;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.toast_con{
		width: 500px;
		border-radius: 5px;
		overflow: hidden;
		background: #fff;
	}
	.con-toptoast{
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
		font-size: 20px;
		color: #fff;
		position: relative;
	}
	.con-toptoast img{
		width: 28px;
		height: 28px;
		position: absolute;
		right: 20px;
		top: 12px;
	}
	.toast_save{
		width: 100%;
		display: flex;
		justify-content: center;
		position: relative;
	}
	.toast_save>div:nth-child(1){
		width: 80px;
		height: 40px;
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
		color: #fff;
		border-radius: 3px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 20px ;
	}
	.tishi_toast{
		color: #d81e06;
		display: flex;
		align-items: center;
		
	}
	.tishi_toast img{
		width: 30px;
		height: 30px;
		margin-right: 10px;
	}
	.right_flex{
		display: flex;
		width: 90%;
		justify-content: left;
	}
	.top_manalvs{
		width: 96%;
		padding: 0 2%;
		height: 70px;
		border-bottom: 1px solid #eee;
		display: flex;
		align-items: center;
	}
	.falvfagui{
		width: 100%;
		height: 100%;
	}
	.falvf_content{
		width: 96%;
		padding: 20px 2%;
	}
</style>
<style lang="scss">
.xinzeng_falvfagui {
	.top_manalvs{
		width:96%;
		padding: 0 2%;
		height: 70px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #eee;
	}
	width: 100%;
	.formWrap {
		padding: 20px 2%;
		.itemWrap {
			width: 100%;
			>div {
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
			color: #F56C6C;
			font-size: 12px;
			line-height: 1;
			padding-top: 4px;
			position: absolute;
			top: 100%;
			left: 115px;
		}
	}
}
</style>


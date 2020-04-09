<template>
	<div class="xinzeng_falvfagui">
		<div class="top_manalvs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item :to="{path:'falv_liebiao'}">普法宣传</el-breadcrumb-item>
			  <el-breadcrumb-item>新增{{titleList[$route.query.pageType]}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="formWrap">
			<el-form :model="form" v-if="$route.query.pageType == '0'" :rules="rules" ref="form1">
				<el-row :gutter="0" style="margin-top:20px;">
					<el-col :span="10">
						<el-form-item class="itemWrap"  prop="lawTitle">
							<span class="textSpan">标题<i></i></span><span class="name_span" >*</span>
							<el-input maxlength="100" v-model="form.lawTitle" style="width:60%;" placeholder="中华人民共和国环境保护法"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="10" :offset="2">
						<el-form-item class="itemWrap"  prop="scopeLevel">
							<span class="textSpan">效力级别<i></i></span><span class="name_span" >*</span>
							<el-select v-model="form.scopeLevel" style="width: 60%;">
								<el-option v-for="(item,index) in lvSelectList" :value="item.dictDataCode" :key="index" :label="item.dictDataName"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="0">
					<el-col :span="10">
						<el-form-item class="itemWrap"  prop="enactOrg">
							<span class="textSpan">颁布单位<i></i></span><span class="name_span" >*</span>
							<el-input maxlength="100" v-model="form.enactOrg" style="width:60%;" placeholder="中华人民共和国环境保护法"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="10" :offset="2">
						<el-form-item class="itemWrap"  prop="lawTimeliness">
							<span class="textSpan">时效性<i></i></span><span class="name_span" >*</span>
							<el-select v-model="form.lawTimeliness" style="width: 60%;">
								<el-option v-for="(item,index) in timeDataList" :value="item.dictDataCode" :key="index" :label="item.dictDataName"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="0">
					<el-col :span="10">
						<el-form-item class="itemWrap"  prop="enactDate">
							<span class="textSpan">颁布日期<i></i></span><span class="name_span" >*</span>
							<el-date-picker
								v-model="form.enactDate"
								type="date"
								format="yyyy-MM-dd"
      					value-format="yyyy-MM-dd"
								placeholder="选择日期" style="width: 60%;">
							</el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="10" :offset="2">
						<el-form-item class="itemWrap"  prop="execDate">
							<span class="textSpan">执行日期<i></i></span><span class="name_span" >*</span>
							<el-date-picker
								v-model="form.execDate"
								type="date"
								format="yyyy-MM-dd"
      							value-format="yyyy-MM-dd"
								placeholder="选择日期" style="width: 60%;">
							</el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="0">
					<el-col :span="20">
						<el-form-item class="itemWrap"  prop="fileId">
							<span class="textSpan">上传附件<i></i></span><span class="name_span">*</span>
							<el-upload ref="uploadWord" :action="uploadUrl" :data="{token: uploadData.token}" :show-file-list="false"
									   :on-success="uploadSuccess" :before-upload="beforeUpload">
								<span v-if="form.fileId" style="margin-right: 10px; color: #333333">{{fileName}}</span>
								<el-button size="small" type="primary">点击上传</el-button>
							</el-upload>
						</el-form-item>
					</el-col>
				</el-row>
				<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
					<el-button type="primary" @click="onSubmit('form1')">提交</el-button>
					<el-button @click="cancel">取消</el-button>
				</div>
			</el-form>
			<el-form :model="form" v-if="$route.query.pageType == '1'" :rules="rules" ref="form2">
				<el-row :gutter="0" style="margin-top:20px;">
					<el-col :span="24">
						<el-form-item class="itemWrap"  prop="lawTitle">
							<span class="textSpan">标题<i></i></span><span class="name_span" >*</span>
							<el-input maxlength="100" v-model="form.lawTitle" style="width:60%;" placeholder="中华人民共和国环境保护法"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="0">
					<el-col :span="10">
						<el-form-item class="itemWrap"  prop="explainType">
							<span class="textSpan">类型<i></i></span><span class="name_span" >*</span>
							<el-select v-model="form.explainType" style="width: 60%;">
								<el-option v-for="(item,index) in explainTypeList" :value="item.dictDataCode" :key="index" :label="item.dictDataName"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="10" :offset="2">
						<el-form-item class="itemWrap"  prop="explainModel">
							<span class="textSpan">形式<i></i></span><span class="name_span" >*</span>
							<el-select v-model="form.explainModel" style="width: 60%;">
								<el-option v-for="(item,index) in explainModelList" :value="item.dictDataCode" :key="index" :label="item.dictDataName"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="0">
					<el-col :span="10">
						<el-form-item class="itemWrap"  prop="enactOrg">
							<span class="textSpan">颁布单位<i></i></span><span class="name_span" >*</span>
							<el-input maxlength="100" v-model="form.enactOrg" style="width:60%;" placeholder="中华人民共和国环境保护法"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="10" :offset="2">
						<el-form-item class="itemWrap"  prop="enactDate">
							<span class="textSpan">颁布日期<i></i></span><span class="name_span" >*</span>
							<el-date-picker
											v-model="form.enactDate"
											type="date"
											format="yyyy-MM-dd"
											value-format="yyyy-MM-dd"
											placeholder="选择日期" style="width: 60%;">
							</el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="0">
					<el-col :span="20">
						<el-form-item class="itemWrap"  prop="fileId">
							<span class="textSpan">上传附件<i></i></span><span class="name_span">*</span>
							<el-upload ref="uploadWord" :action="uploadUrl" :data="{token: uploadData.token}" :show-file-list="false"
									   :on-success="uploadSuccess" :before-upload="beforeUpload">
								<span v-if="form.fileId" style="margin-right: 10px; color: #333333">{{fileName}}</span>
								<el-button size="small" type="primary">点击上传</el-button>
							</el-upload>
						</el-form-item>
					</el-col>
				</el-row>
				<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
					<el-button type="primary" @click="onSubmit('form2')">提交</el-button>
					<el-button @click="cancel">取消</el-button>
				</div>
			</el-form>
			<el-form :model="form" v-if="$route.query.pageType == '2'" :rules="rules" ref="form3">
				<el-row :gutter="0" style="margin-top:20px;">
					<el-col :span="24">
						<el-form-item class="itemWrap"  prop="lawTitle">
							<span class="textSpan">标题<i></i></span><span class="name_span" >*</span>
							<el-input maxlength="100" v-model="form.lawTitle" style="width:60%;" placeholder="中华人民共和国环境保护法"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="0">
					<el-col :span="10">
						<el-form-item class="itemWrap"  prop="pactType">
							<span class="textSpan">类型<i></i></span><span class="name_span" >*</span>
							<el-select v-model="form.pactType" style="width: 60%;">
								<el-option v-for="(item,index) in pactTypeList" :value="item.dictDataCode" :key="index" :label="item.dictDataName"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="0">
					<el-col :span="10">
						<el-form-item class="itemWrap"  prop="pactModel">
							<span class="textSpan">形式<i></i></span><span class="name_span" >*</span>
							<el-select v-model="form.pactModel" style="width: 60%;">
								<el-option v-for="(item,index) in pactModelList" :value="item.dictDataCode" :key="index" :label="item.dictDataName"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="0">
					<el-col :span="20">
						<el-form-item class="itemWrap"  prop="fileId">
							<span class="textSpan">上传附件<i></i></span><span class="name_span">*</span>
							<el-upload ref="uploadWord" :action="uploadUrl" :data="{token: uploadData.token}" :show-file-list="false"
									   :on-success="uploadSuccess" :before-upload="beforeUpload">
								<span v-if="form.fileId" style="margin-right: 10px; color: #333333">{{fileName}}</span>
								<el-button size="small" type="primary">点击上传</el-button>
							</el-upload>
						</el-form-item>
					</el-col>
				</el-row>
				<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
					<el-button type="primary" @click="onSubmit('form3')">提交</el-button>
					<el-button @click="cancel">取消</el-button>
				</div>
			</el-form>
		</div>
	</div>
</template>

<script>
import {getSelectDetail,imgBaseurl,pfxcXjflfg,pfxcXjflfgRead} from '../../http/api.js'
export default {
	data() {
		return {
			// 面包屑标题
			titleList: ['法律法规', '司法解释', '国际条约惯例'],
			uploadData: {
				token: sessionStorage.getItem("token"),
			},
			fileName: '',
			rules: {
				lawTitle: [
					{ required: true, message: '请输入标题', trigger: 'blur' }
				],
				scopeLevel: [
					{ required: true, message: '请选择效力级别', trigger: 'change' }
				],
				enactOrg: [
					{ required: true, message: '请输入颁布单位', trigger: 'blur' }
				],
				lawTimeliness: [
					{ required: true, message: '请选择时效性', trigger: 'change' }
				],
				enactDate: [
					{ required: true, message: '请选择日期', trigger: 'change' }
				],
				pactType: [
					{ required: true, message: '请选择分类', trigger: 'change' }
				],
				pactModel: [
					{ required: true, message: '请选择形式', trigger: 'change' }
				],
				explainType: [
					{ required: true, message: '请选择分类', trigger: 'change' }
				],
				explainModel: [
					{ required: true, message: '请选择形式', trigger: 'change' }
				],
				fileId: [
					{ required: true, message: '请上传文件', trigger: 'change' }
				]
			},
			showValidateUpload: false,
			input: '',
			lvSelectList: [],  //效力级别
			timeDataList: [],  //时效
			pactTypeList: [],
			pactModelList: [],
			explainTypeList: [],
			explainModelList: [],
			form:{
				token: sessionStorage.getItem("token"),                //类型：String  必有字段  备注：用户身份标识
				lawId: '',                //类型：String  可有字段  备注：id为空是为添加，id不为空时为修改
				lawTitle: '',                //类型：String  必有字段  备注：标题
				scopeLevel: '',                //类型：String  必有字段  备注：效力级别
				enactOrg: '',                //类型：String  必有字段  备注：颁布单位
				lawTimeliness: '',                //类型：String  必有字段  备注：时效性
				enactDate: '',                //类型：String  必有字段  备注：颁布日期
				execDate: '',                //类型：String  必有字段  备注：执行日期
				pactType: '',                //类型：String  可有字段  备注：国际条约分类，取字典数据(guojitiaoyuefenlei)
				pactModel: '',                //类型：String  可有字段  备注：国际条约分类，取字典形式(sifajieshixingshi)
				explainType: '',                //类型：String  可有字段  备注：司法解释分类，取字典数据(sifajieshileixing)
				explainModel: '',                //类型：String  可有字段  备注：司法解释形式，取字典数据(sifajieshixingshi)
				fileId: ''                //类型：String  必有字段  备注：上传的文件ID
			},
			uploadUrl: imgBaseurl+'/support/saveFileToHtml'
		};
	},
	mounted() {
		this.form.lawId = this.$route.query.id;
		this.getSelectData();
		if(this.form.lawId) {
			pfxcXjflfgRead({
				lawId: this.form.lawId
			}).then(res=> {
				if(res.code === 200) {
					this.form = res.content;
					this.fileName = res.content.fileName;
				}
			})
		}
	},
	methods:{
		cancel() {
			this.$router.back(-1);
		},
		beforeUpload(file) {
			const fileType = file.name.substring(file.name.lastIndexOf('.') + 1);
			const isDoc = fileType === 'doc';
			const isDocx = fileType === 'docx';
			if (!isDoc && !isDocx) {
				this.$refs.uploadWord.abort(file);
				this.$message({
					message: '上传文件只能是 doc、docx格式!',
					type: 'warning'
				});
			}
			if (isDoc || isDocx) this.fileName = file.name;
			return isDoc || isDocx;
		},
		uploadSuccess(res) {
			this.form.fileId = res.content.fileList[0].fileId;
		},
		onSubmit(form) {
			this.$refs[form].validate((valid) => {
				this.showValidateUpload = this.form.fileId?false:true;
				if(valid) {
					let listType = {
						form1: ['token', 'lawId', 'lawTitle', 'scopeLevel', 'enactOrg', 'lawTimeliness', 'enactDate', 'execDate', 'fileId'],
						form2: ['token', 'lawId', 'lawTitle', 'enactOrg', 'enactDate', 'explainType', 'explainModel', 'fileId'],
						form3: ['token', 'lawId', 'lawTitle', 'pactType', 'pactModel', 'fileId'],
					},
					request = {};
					listType[form].forEach(name => {
						request[name] = this.form[name];
					})
					pfxcXjflfg(request).then(res=> {
						if(res.code == 200) {
							this.$message({
							  message: this.form.lawId?'修改成功':'新增成功',
							  type: 'success'
							});
							setTimeout(()=>{
							  this.$router.go(-1)
							}, 2000)
              			}
					});
				}
			});
		},
		//获取select下拉数据
		async getSelectData(){
			const type = ['xiaolijibie', 'shixiaoxing', 'sifajieshileixing', 'sifajieshixingshi', 'guojitiaoyuefenlei', 'guojitiaoyuexingshi'];
			const domData = ['lvSelectList', 'timeDataList', 'explainTypeList', 'explainModelList', 'pactTypeList', 'pactModelList'];
			for(let dataInfo = 0; dataInfo<type.length;dataInfo++){
				let dataInfoData = await getSelectDetail({ dictCode:type[dataInfo],userId:'111' });
				this[domData[dataInfo]] = dataInfoData.content.resultList;
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


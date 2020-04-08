<template>
	<div class="p_conright">
		<div class="top_manalvs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item :to="{ path: 'falvzixun' }">法律咨询</el-breadcrumb-item>
			  <el-breadcrumb-item>现场咨询登记</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="xianchang_content">
			<div class="shoujihoama1">
				<div class="flex" style="align-items: center;">
					<span class="text_betten textduozi">提问者<i></i></span><span class="name_span" style="opacity: 0;">*</span>
					<el-input v-model="submitConsultLocale.consultData.personName" style="width: 82%;" placeholder="请输入提问者姓名"></el-input>
				</div>
				<div class="flex" style="align-items: center;">
					<span class="text_betten textduozi">手机号码<i></i></span><span class="name_span">*</span>
					<el-input v-model="submitConsultLocale.consultData.personPhone" style="width: 82%;" placeholder="请输入手机号码"
						:class="{'waring_info_border':checkSize_type.personPhone}" @blur="checkSize(submitConsultLocale.consultData.personPhone,'personPhone')"></el-input>
				</div>
			</div>
			<div class="flex" style="align-items: center;">
				<span class="text_betten textduozi">标题<i></i></span><span class="name_span">*</span>
				<el-input v-model="submitConsultLocale.consultData.questionTitle" style="width: 82%;" placeholder="请用一句话概括您的问题"
					:class="{'waring_info_border':checkSize_type.questionTitle}" @blur="checkSize(submitConsultLocale.consultData.questionTitle,'questionTitle')"></el-input>
			</div>
			<div class="flex" style="align-items: center;">
				<span class="text_betten textduozi">问题类型<i></i></span><span class="name_span">*</span>
				<el-radio-group v-model="submitConsultLocale.consultData.questionType">
					<el-radio v-for="item in proTypeList" :label="item.label" :value="item.label" :key="item.lable">{{item.name}}</el-radio>
				</el-radio-group>
			</div>
			<div class="shoujihoama1">
				<div class="flex" style="align-items: center;">
					<span class="text_betten">咨询时间<i></i></span><span class="name_span" style="opacity: 0;">*</span>
					<el-date-picker
						v-model="timeForNow"
						type="datetime"
						placeholder="选择日期时间">
					</el-date-picker>
				</div>
				<div class="flex"  style="align-items: center;">
					<span class="text_betten">值班律师<i></i></span><span class="name_span">*</span>
					<el-input style="width: 82%;" v-model="user"></el-input>
					<!--placeholder="自动获取"-->
				</div>
			</div>
			
			<div class="flex"  style="align-items: center;">
				<span class="text_betten textduozi">律师解答<i></i></span><span class="name_span" >*</span>
				<textarea name="" id="" placeholder="请填写律师解答内容" cols="30" rows="10" v-model="submitConsultLocale.answerData.answerContent"
					 @blur="checkSize(submitConsultLocale.answerData.answerContent,'answerContent')"></textarea>
<!--				:class="{'waring_info_border':checkSize_type.answerContent}"-->
			</div>
			<div class="flex" style="align-items: flex-start;margin-top: 20px;">
				<span class="text_betten textduozi">上传照片<i></i></span><span class="name_span" >*</span>
				<div class="addimg_father">
					<el-upload
                        :action="this.uploadUrl"
                        :data="uploadType"
                        list-type="picture-card"
                        :on-success="successUpload_goodsAdmin"
                        accept=".jpg,.jpeg,.png,.gif,.bmp">
                        <i class="el-icon-plus"></i>
                    </el-upload>
				</div>
			</div>
			<div class="flex">
				<span class="text_betten textduozi">满意度<i></i></span><span class="name_span">*</span>
				<el-radio-group v-model="submitConsultLocale.evaluationData.evaResult">
					<el-radio :label="item.label" :value="item.label" v-for="item in satisfactionList" :key="item.label">{{item.name}}</el-radio>
				</el-radio-group>
			</div>
			<div class="flex" style="align-items: flex-start;">
				<span class="text_betten textduozi">意见建议<i></i></span><span class="name_span" >*</span>
				<textarea name="" id="yijian" placeholder="请填写您的意见和建议" cols="30" rows="10" v-model="submitConsultLocale.evaluationData.evaSuggest"
					@blur="checkSize(submitConsultLocale.evaluationData.evaSuggest,'evaSuggest')"></textarea>
<!--				:class="{'waring_info_border':checkSize_type.evaSuggest}"-->
			</div>
			<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
				  <el-button type="primary" @click="submitConsultInfo">提交</el-button>
				<el-button>取消</el-button>
			</div>
		</div>
	</div>
</template>

<script>
import {getCitizenInfo,saveConsultLocale} from '../../http/api';
const token = sessionStorage.getItem('token');
export default {
    data() {
		return {
			options: [
				{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}
			],
			tableData: [
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}
			],
			lvs:1,
			//问题类型
			proTypeList: [
				{label: 1,name: '民事'},
				{label: 2,name: '刑事'},
				{label: 3,name: '行政'},
				{label: 4,name: '其他'},
			],
			//满意度
			satisfactionList: [
				{label: 1,name: '非常满意'},
				{label: 2,name: '满意'},
				{label: 3,name: '一般'},
				{label: 4,name: '不满意'},
				{label: 5,name: '非常不满意'},
			],
			//咨询时间
			timeForNow: '',
			user:sessionStorage.getItem("name"),
			//提交现场咨询登记
			submitConsultLocale: {
				token:'',                //类型：String  必有字段  备注：用户身份标识
				consultData: {                //类型：Object  必有字段  备注：咨询信息
					personName: '',                //类型：String  必有字段  备注：提问者姓名
					personPhone: '',                //类型：String  必有字段  备注：提问者手机号
					consultType: '3',                //类型：String  必有字段  备注：固定值填3
					questionType: -99,                //类型：String  必有字段  备注：问题类型
					questionTitle: '',                //类型：String  必有字段  备注：标题
					questionDesc: '',                //类型：String  必有字段  备注：问题描述
					imgIds: '',                //类型：String  必有字段  备注：照片ID，多个照片用英文逗号分隔
					lawyerId:this.user,
				},
				answerData: {                //类型：Object  必有字段  备注：律师解答
					answerContent: ''                //类型：String  必有字段  备注：答复内容
				},
				evaluationData: {                //类型：Object  必有字段  备注：评价信息
					evaResult: -99,                //类型：String  必有字段  备注：满意度 1：非常满意；2：满意；3：一般；4：不满意；5：非常不满意；
					evaSuggest: '',                //类型：String  必有字段  备注：意见建议
					evaType:'3'                //类型：String  必有字段  备注：固定值填3
				}
			},
			checkSize_type: {
				personPhone: '',
				questionTitle: '',
				answerContent: '',
				evaSuggest: '张三',
			},
			//上传图片的数组
			imgUrlList: [],
		};
    },
	methods: {
		//图片上传
		successUpload_goodsAdmin(success){
			this.imgUrlList.push(success.content.fileList[0].fileId);
			this.submitConsultLocale.consultData.imgIds = this.imgUrlList.join(',');

		},
		checkSize(size,dom){
			!size ?this.checkSize_type[dom] = true:this.checkSize_type[dom] = false;
		},
		submitConsultInfo(){
			this.submitConsultLocale.token = token;
			console.log(this.submitConsultLocale)	
			
			if(this.submitConsultLocale.consultData.personPhone && this.submitConsultLocale.consultData.questionType !== -99 && this.submitConsultLocale.consultData.questionTitle &&
				// this.submitConsultLocale.consultData.questionDesc && 
				this.submitConsultLocale.consultData.imgIds && this.submitConsultLocale.answerData.answerContent &&
				this.submitConsultLocale.evaluationData.evaResult !== -99 && this.submitConsultLocale.evaluationData.evaSuggest){
				saveConsultLocale(this.submitConsultLocale).then(success=>{
					if(success.code === 200){
						this.$notify({
							message: '提交成功',
							type: 'success'
						});
                        setTimeout(()=>{
                            this.$router.go(-1)
                        },1500);
					}
				});
			}else{
				this.$notify.error({
					message: '信息请填写齐全'
				});
			}
		}
	},
	mounted() {
		getCitizenInfo({token:token}).then(success=>{
			this.submitConsultLocale.consultData.personName = success.content.personName;
			this.submitConsultLocale.consultData.personPhone = success.content.cellphone;
		});
	},
	computed: {
		uploadType(){
			return {
				'token': sessionStorage.getItem('token'),
			};
		},
	},
};
</script>

<style lang="scss">
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
</style>

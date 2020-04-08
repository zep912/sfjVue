<template>
	<div class="p_conright yongchehoubu">
		<div class="top_manalvs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item>请假</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="xianchang_content">
			
			<div class="shoujihoama1">
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">申请人员<i></i></span><span class="name_span" style="opacity: 0;">*</span>
					<el-input v-model="submitConsultLocale.consultData.personName" style="width: 82%;" placeholder="请输入申请人员"></el-input>
					
				</div>
			</div>
			<div class="flex" style="align-items: flex-start;margin: 10px 0;">
				<span class="text_betten">请假类别<i></i></span><span class="name_span" >*</span>
				<div style="padding: 15px 0;">
					<el-radio v-model="radio" label="1">事假</el-radio>
					<el-radio v-model="radio" label="2">病假</el-radio>
					<el-radio v-model="radio" label="3">婚假</el-radio>
					<el-radio v-model="radio" label="4">产假</el-radio>
					<el-radio v-model="radio" label="5">年假</el-radio>
					<el-radio v-model="radio" label="6">丧假</el-radio>
					<el-radio v-model="radio" label="7">探亲假</el-radio>
					<el-radio v-model="radio" label="8">工伤假</el-radio>
				</div>
			</div>
			<div class="shoujihoama1">
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">开始时间<i></i></span><span class="name_span" >*</span>
					 <el-date-picker
					      v-model="value1"
					      type="date"
					      placeholder="选择日期" style="width: 82%;">
					    </el-date-picker>
					
				</div>
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">结束时间<i></i></span><span class="name_span" >*</span>
					 <el-date-picker
					      v-model="value1"
					      type="date"
					      placeholder="选择日期" style="width: 82%;">
					    </el-date-picker>
				</div>
			</div>
			<div class="shoujihoama1">
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">请假时长<i></i></span><span class="name_span" >*</span>
					<el-input v-model="submitConsultLocale.consultData.personName" style="width: 82%;" placeholder="请输入请假时长"></el-input>
					
				</div>
				<img src="../../assets/image/wenhao.png" @click="wenhaos" class="wenhao" alt="">
			</div>
			<div class="flex" style="align-items: flex-start;" v-if="peixunseldata==1">
				<span class="text_betten" style="line-height: 20px;">请假事由<i></i></span><span class="name_span" style="opacity: 0;">*</span>
				<textarea name="" id="" cols="30" rows="10"></textarea>
			</div>
			<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
				<el-button type="primary" @click="submitConsultInfo">提交</el-button>
				<el-button>取消</el-button>
			</div>
		</div>
		<div class="qingjiazhidu" v-if="shijiazd">
			<div class="qingjia_con">
				<div>事假制度</div>
				<div>
					请年事假次数不能超过十五次，违反将被考核5.00分，扣款50元
				</div>
				<div @click="close">
					知道了
				</div>
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
			//培训类型
			peixunleix:[
				{
					value: '选项1',
					label: '全部'
				}, {
					value: '选项2',
					label: '管理人员培训'
				}, {
					value: '选项3',
					label: '转岗培训'
				}, {
					value: '选项4',
					label: '复岗培训'
				}, {
					value: '选项5',
					label: '日常培训'
				}, {
					value: '选项6',
					label: '外来人员培训'
				}, {
					value: '选项7',
					label: '其他培训'
				}
			],
			peixunlx:'',
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
			radio:1,
			lvs:1,
			//问题类型
			proTypeList: [
				{label: 1,name: '公开'},
				{label: 2,name: '不公开'}
			],
			yongchetime: [
				{value: 1,label: '小时'},
				{value: 2,label: '天'}
			],
			//培训方式
			peixunfangshi:[
				{value: 1,label: '现场会议培训'},
				{value: 2,label: '课件学习培训'}
			],
			peixunseldata:1,
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
					imgIds: ''                //类型：String  必有字段  备注：照片ID，多个照片用英文逗号分隔
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
			shijiazd:false
		};
    },
	methods: {
		wenhaos(){
			this.shijiazd=true
		},
		close(){
			this.shijiazd=false
		},
		handleRemove(file, fileList) {
		        console.log(file, fileList);
		      },
		      handlePictureCardPreview(file) {
		        this.dialogImageUrl = file.url;
		        this.dialogVisible = true;
		      },
		peixunsel(){
			console.log(this.peixunseldata)
		},
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
		position: relative;
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
	.yongchehoubu .text_betten{
		width: 80px;
	}
	.wenhao{
		width: 35px;
		height: 35px;
		position: absolute;
		top: 2px;
		left: 45%;
		
	}
	.qingjiazhidu{
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.qingjia_con{
		width: 400px;
		background: #fff;
		border-radius: 10px;
		box-shadow: 0 1px 3px #eee;
		overflow: hidden;
	}
	.qingjia_con>div:nth-child(1){
		color: #0077AA;
		font-size: 18px;
		line-height: 50px;
	}
	.qingjia_con>div:nth-child(2){
		color: #333;
		font-size: 16px;
		padding: 10px;
		line-height: 20px;
		text-align: left;
	}
	.qingjia_con>div:nth-child(3){
		color: #fff;
		font-size: 16px;
		padding: 10px;
		background: #0077AA;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 30px;
	}
</style>

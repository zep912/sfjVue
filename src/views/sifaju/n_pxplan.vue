
<template>
	<div class="tianjia add-lvsuo-container">
		<div class="top_manalvs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: 'manapeixun' }">培训管理</el-breadcrumb-item>
				<el-breadcrumb-item>制定培训计划</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div style="width: 96%;padding: 20px 2%;">
			<el-form :model="addForm" :rules="rules" ref="addForm" label-width="100px" class="demo-ruleForm">
				<el-row type="flex" align="middle" justify="start">
					<el-col :span="8">
						<el-form-item label="培训主题" prop="peixunzhuti">
							<el-input maxlength="100"  v-model="addForm.peixunzhuti"  style="width: 80%;"  placeholder="请输入培训主题"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type="flex" align="middle" justify="start">
					<el-col :span="8">
						<el-form-item label="培训方式" prop="peixunfangshi">
							<el-select v-model="addForm.peixunfangshi" placeholder="请选择" style="width: 82%;">
									<el-option
										v-for="item in peixunfangshiList"
										:key="item.dictDataCode"
										:label="item.dictDataName"
										:value="item.dictDataCode">
									</el-option>
								</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="培训类型" prop="peixunleixing">
							<el-select v-model="addForm.peixunleixing" placeholder="请选择" style="width: 82%;">
									<el-option
										v-for="item in peixunfangshiList"
										:key="item.dictDataCode"
										:label="item.dictDataName"
										:value="item.dictDataCode">
									</el-option>
								</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type="flex" align="middle" justify="start">
					<el-col :span="8">
						<el-form-item label="开始时间" prop="peixunfangshi">
							<single-date :num="'3'" @getDateInfo="getDateInfo" ref="getDate"></single-date>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="截止时间" prop="peixunfangshi">
							<single-date :num="'3'" @getDateInfo="getDateInfo" ref="getDate"></single-date>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type="flex" align="middle" justify="start">
					<el-col :span="8">
						<el-form-item label="适用岗位" prop="peixunfangshi">
							<el-input v-model="addForm.shiyonggangwei" style="width: 82%;" placeholder="全部社会律师"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="培训状态" prop="peixunzhuangtai">
							<el-select v-model="addForm.peixunzhuangtai" placeholder="请选择" style="width: 82%;">
									<el-option
										v-for="item in peixunfangshiList"
										:key="item.dictDataCode"
										:label="item.dictDataName"
										:value="item.dictDataCode">
									</el-option>
								</el-select>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
		</div>
	</div>
</template>

<script>

	import {getSelectDetail} from "../../http/api";
	import SingleDate from "../../components/SingleDate";
	export default {
		components: {
			SingleDate

		},
		data() {
			return {
				//新增和修改律所信息
				addForm: {
					peixunzhuti:'',     //培训主题
					peixunfangshi: '',  //培训方式
					peixunleixing:'',   //培训类型
					shiyonggangwei:'',  //适用岗位
					peixunzhuangtai:'',  //培训状态
				},
				peixunfangshiList:[],    //培训方式数据
				peixunleixingList:[],    //培训类型数据
				peixunzhuangtaiList:[],  //培训状态
				rules: {
					peixunzhuti: [
						{
							required: true,
							message: "请输入培训主题",
							trigger: "blur"
						}
					],
					peixunfangshi: [
						{
							required: true,
							message: "请选择培训方式",
							trigger: "change"
						}
					],
					peixunleixing:[
						{
							required: true,
							message: "请选择培训类型",
							trigger: "change"
						}
					]

				},

			};
		},
		created() {
			if (this.$route.query.id) {
				this.lvsuo_texts = "修改律所";
			} else {
				this.wayData();
				this.typeData();
				this.stateData();
			}
		},
		mounted:function () {
			this.getDateInfo();
		},
		methods: {
			//根据日期查询
			getDateInfo(){
				const dateInfo = this.$refs.getDate.getDateInfo();
				console.log(dateInfo);
				// this.getStartedList(dateInfo);
			},
			// 初始化获取时间
			getTimeInit(time){
				console.log(time.startTime);
				// this.getStartedList(time);
			},
			//获取培训方式数据字典
			wayData(){
				getSelectDetail({
					dictCode:'peixunfangshi',
					userId:'1'
				}).then(res=>{
					if(res.code == '200'){
						this.peixunfangshiList=res.content.resultList
					}
				})
			},
			//获取培训类型数据字典
			typeData(){
				getSelectDetail({
					dictCode:'peixunleixing',
					userId:'1'
				}).then(res=>{
					if(res.code == '200'){
						this.peixunleixingList=res.content.resultList
					}
				})
			},

			//获取培训状态数据字典
			stateData(){
				getSelectDetail({
					dictCode:'peixujihuazhuangtai',
					userId:'1'
				}).then(res=>{
					if(res.code == '200'){
						this.peixunzhuangtaiList=res.content.resultList
					}
				})
			},
		}
	};
</script>

<style lang="scss">
	.add-lvsuo-container {
		.el-upload--picture-card {
			width: 148px !important;
			height: 148px !important;
		}
		.hide .el-upload--picture-card {
			display: none;
		}
		.el-form-item__content {
			margin-left: 0 !important;
			line-height: 1;
			position: relative;
			font-size: 16px;
			display: flex;
			flex-direction: row;
			align-items: center;
			width: 100%;
		}
		.textarea {
			textarea {
				width: 87%;
			}
		}
		.el-form-item__error {
			left: 115px;
		}
	}
	.tianjia {
		width: 100%;
	}
	.top_manalvs {
		width: 96%;
		padding: 0 2%;
		height: 70px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #eee;
	}
	.add_lvshi {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.add_lvshi > div {
		width: 50%;
	}
	.add_child > div {
		margin-top: 20px;
	}

	.add_btn {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: #0da9d7;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 20px;
	}
	.add_btn img {
		width: 65%;
		height: 65%;
	}
	.add_img {
		width: 100px;
		height: 100px;
		border: 1px solid #eee;

		display: flex;
		align-items: center;
		justify-content: center;
	}
	.add_img img {
		width: 30px;
		height: 30px;
	}
	.toast {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 200;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.toast_con {
		width: 500px;
		border-radius: 5px;
		overflow: hidden;
		background: #fff;
	}
	.con-toptoast {
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
		font-size: 20px;
		color: #fff;
		position: relative;
	}
	.con-toptoast img {
		width: 28px;
		height: 28px;
		position: absolute;
		right: 20px;
		top: 12px;
	}
	.toast_save {
		width: 100%;
		display: flex;
		justify-content: center;
		position: relative;
	}
	.toast_save > div:nth-child(1) {
		width: 80px;
		height: 40px;
		background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
		color: #fff;
		border-radius: 3px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 20px;
	}
	.tishi_toast {
		color: #d81e06;
		display: flex;
		align-items: center;
	}
	.tishi_toast img {
		width: 30px;
		height: 30px;
		margin-right: 10px;
	}
	.right_flex {
		display: flex;
		width: 90%;
		justify-content: left;
	}
</style>

<!--<template>-->
<!--	<div class="p_conright">-->
<!--		<div class="top_manalvs">-->
<!--			<el-breadcrumb separator-class="el-icon-arrow-right">-->
<!--			  <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>-->
<!--			  <el-breadcrumb-item :to="{ path: 'manapeixun' }">培训管理</el-breadcrumb-item>-->
<!--			  <el-breadcrumb-item>制定培训计划</el-breadcrumb-item>-->
<!--			</el-breadcrumb>-->
<!--		</div>-->
<!--		<div class="xianchang_content">-->
<!--			<el-form :model="ruleForm"-->
<!--					 :rules="rules"-->
<!--					 ref="ruleForm"-->
<!--					 label-width="100px"-->
<!--					 class="demo-ruleForm">-->
<!--				<el-row>-->
<!--					<div class="flex" style="align-items: center;">-->
<!--						<el-form-item class="flex" style="align-items: center;"-->
<!--									  prop="peixunzhuti">-->
<!--							<span class="text_betten">培训主题<i></i></span><span class="name_span">*</span>-->
<!--							<el-input-->
<!--									  v-model="ruleForm.peixunzhuti"-->
<!--									  style="width: 82%;"-->
<!--									  placeholder="请输入培训主题"></el-input>-->
<!--						</el-form-item>-->
<!--					</div>-->
<!--				</el-row>-->
<!--			</el-form>-->
<!--&lt;!&ndash;			<div class="flex" style="align-items: flex-start;">&ndash;&gt;-->
<!--&lt;!&ndash;				<span class="text_betten">培训主题<i></i></span><span class="name_span">*</span>&ndash;&gt;-->
<!--&lt;!&ndash;				<el-input v-model="form.peixunzhuti" style="width: 82%;" placeholder="请输入培训主题"></el-input>&ndash;&gt;-->
<!--&lt;!&ndash;			</div>&ndash;&gt;-->
<!--&lt;!&ndash;			<div class="flex" style="align-items: flex-start;">&ndash;&gt;-->
<!--&lt;!&ndash;			<div class="shoujihoama1">&ndash;&gt;-->
<!--&lt;!&ndash;				<div class="flex" style="align-items: flex-start;">&ndash;&gt;-->
<!--&lt;!&ndash;					<span class="text_betten">培训方式<i></i></span><span class="name_span" style="opacity: 0;">*</span>&ndash;&gt;-->
<!--&lt;!&ndash;					<el-select v-model="form.peixunfangshi" placeholder="请选择" style="width: 82%;" @change="peixunsel()">&ndash;&gt;-->
<!--&lt;!&ndash;					    <el-option&ndash;&gt;-->
<!--&lt;!&ndash;					      v-for="item in peixunfangshi"&ndash;&gt;-->
<!--&lt;!&ndash;					      :key="item.value"&ndash;&gt;-->
<!--&lt;!&ndash;					      :label="item.label"&ndash;&gt;-->
<!--&lt;!&ndash;					      :value="item.value">&ndash;&gt;-->
<!--&lt;!&ndash;					    </el-option>&ndash;&gt;-->
<!--&lt;!&ndash;					</el-select>&ndash;&gt;-->
<!--&lt;!&ndash;				</div>&ndash;&gt;-->
<!--&lt;!&ndash;				<div class="flex" style="align-items: flex-start;">&ndash;&gt;-->
<!--&lt;!&ndash;					<span class="text_betten">适用岗位<i></i></span><span class="name_span">*</span>&ndash;&gt;-->
<!--&lt;!&ndash;					<el-input v-model="form.shiyonggangwei" style="width: 82%;" placeholder="全部社会律师"&ndash;&gt;-->
<!--&lt;!&ndash;						:class="{'waring_info_border':checkSize_type.personPhone}" @blur="checkSize(submitConsultLocale.consultData.personPhone,'personPhone')"></el-input>&ndash;&gt;-->
<!--&lt;!&ndash;				</div>&ndash;&gt;-->
<!--&lt;!&ndash;			</div>&ndash;&gt;-->
<!--&lt;!&ndash;			<div class="shoujihoama1">&ndash;&gt;-->
<!--&lt;!&ndash;				<div class="flex" style="align-items: flex-start;">&ndash;&gt;-->
<!--&lt;!&ndash;					<span class="text_betten">培训类型<i></i></span><span class="name_span">*</span>&ndash;&gt;-->
<!--&lt;!&ndash;					&lt;!&ndash; <el-input v-model="submitConsultLocale.consultData.questionTitle" style="width: 82%;" placeholder="请用一句话概括您的问题"&ndash;&gt;-->
<!--&lt;!&ndash;						:class="{'waring_info_border':checkSize_type.questionTitle}" @blur="checkSize(submitConsultLocale.consultData.questionTitle,'questionTitle')"></el-input>&ndash;&gt;-->
<!--&lt;!&ndash;					 &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;					 <el-select v-model="form.peixunleixing" placeholder="全部" style="width: 82%;" >&ndash;&gt;-->
<!--&lt;!&ndash;						 <el-option&ndash;&gt;-->
<!--&lt;!&ndash;						   v-for="item in peixunleix"&ndash;&gt;-->
<!--&lt;!&ndash;						   :key="item.dictDataCode"&ndash;&gt;-->
<!--&lt;!&ndash;						   :label="item.dictDataName"&ndash;&gt;-->
<!--&lt;!&ndash;						   :value="item.dictDataCode">&ndash;&gt;-->
<!--&lt;!&ndash;						 </el-option>&ndash;&gt;-->
<!--&lt;!&ndash;					 </el-select>&ndash;&gt;-->
<!--&lt;!&ndash;				</div>&ndash;&gt;-->
<!--&lt;!&ndash;				<div class="flex" style="align-items: flex-start;">&ndash;&gt;-->
<!--&lt;!&ndash;					<span class="text_betten">培训状态<i></i></span><span class="name_span" style="opacity: 0;">*</span>&ndash;&gt;-->
<!--&lt;!&ndash;					&lt;!&ndash; <el-input v-model="submitConsultLocale.consultData.questionTitle" style="width: 82%;" placeholder="请用一句话概括您的问题"&ndash;&gt;-->
<!--&lt;!&ndash;						:class="{'waring_info_border':checkSize_type.questionTitle}" @blur="checkSize(submitConsultLocale.consultData.questionTitle,'questionTitle')"></el-input>&ndash;&gt;-->
<!--&lt;!&ndash;					 &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;					 <el-select v-model="form.peixunzhuangtai" placeholder="全部" style="width: 82%;">&ndash;&gt;-->
<!--&lt;!&ndash;						 <el-option&ndash;&gt;-->
<!--&lt;!&ndash;						   v-for="item in peixunleix"&ndash;&gt;-->
<!--&lt;!&ndash;						   :key="item.value"&ndash;&gt;-->
<!--&lt;!&ndash;						   :label="item.label"&ndash;&gt;-->
<!--&lt;!&ndash;						   :value="item.value">&ndash;&gt;-->
<!--&lt;!&ndash;						 </el-option>&ndash;&gt;-->
<!--&lt;!&ndash;					 </el-select>&ndash;&gt;-->
<!--&lt;!&ndash;				</div>&ndash;&gt;-->
<!--&lt;!&ndash;			</div>&ndash;&gt;-->
<!--&lt;!&ndash;			<div class="shoujihoama1">&ndash;&gt;-->
<!--&lt;!&ndash;				<div class="flex" style="align-items: flex-start;">&ndash;&gt;-->
<!--&lt;!&ndash;					<span class="text_betten">开始时间<i></i></span><span class="name_span">*</span>&ndash;&gt;-->
<!--&lt;!&ndash;					&lt;!&ndash; <div class="kaishi_time">&ndash;&gt;-->
<!--&lt;!&ndash;						<div>&ndash;&gt;-->
<!--&lt;!&ndash;							<input type="text" value="2018">&ndash;&gt;-->
<!--&lt;!&ndash;						</div>&ndash;&gt;-->
<!--&lt;!&ndash;						<div>年</div>&ndash;&gt;-->
<!--&lt;!&ndash;						<div>&ndash;&gt;-->
<!--&lt;!&ndash;							<input type="text" value="04">&ndash;&gt;-->
<!--&lt;!&ndash;						</div>&ndash;&gt;-->
<!--&lt;!&ndash;						<div>月</div>&ndash;&gt;-->
<!--&lt;!&ndash;						<div>&ndash;&gt;-->
<!--&lt;!&ndash;							<input type="text" value="10">&ndash;&gt;-->
<!--&lt;!&ndash;						</div>&ndash;&gt;-->
<!--&lt;!&ndash;						<div>日</div>&ndash;&gt;-->
<!--&lt;!&ndash;						<div>&ndash;&gt;-->
<!--&lt;!&ndash;							<input type="text" value="12">&ndash;&gt;-->
<!--&lt;!&ndash;						</div>&ndash;&gt;-->
<!--&lt;!&ndash;						：&ndash;&gt;-->
<!--&lt;!&ndash;						<div>&ndash;&gt;-->
<!--&lt;!&ndash;							<input type="text" value="00">&ndash;&gt;-->
<!--&lt;!&ndash;						</div>&ndash;&gt;-->
<!--&lt;!&ndash;					</div> &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;          <el-date-picker&ndash;&gt;-->
<!--&lt;!&ndash;					  v-model="form.startTime"&ndash;&gt;-->
<!--&lt;!&ndash;					  type="date"&ndash;&gt;-->
<!--&lt;!&ndash;					  placeholder="选择日期"&ndash;&gt;-->
<!--&lt;!&ndash;					  format="yyyy-MM-dd"&ndash;&gt;-->
<!--&lt;!&ndash;      			value-format="yyyy-MM-dd"&ndash;&gt;-->
<!--&lt;!&ndash;					  style='margin-right:20px'&ndash;&gt;-->
<!--&lt;!&ndash;					  >&ndash;&gt;-->
<!--&lt;!&ndash;					</el-date-picker>&ndash;&gt;-->
<!--&lt;!&ndash;				</div>&ndash;&gt;-->
<!--&lt;!&ndash;				<div class="flex" style="align-items: flex-start;">&ndash;&gt;-->
<!--&lt;!&ndash;					<span class="text_betten">截止时间<i></i></span><span class="name_span">*</span>&ndash;&gt;-->
<!--&lt;!&ndash;					&lt;!&ndash; <div class="kaishi_time">&ndash;&gt;-->
<!--&lt;!&ndash;						<div>&ndash;&gt;-->
<!--&lt;!&ndash;							<input type="text" value="2018">&ndash;&gt;-->
<!--&lt;!&ndash;						</div>&ndash;&gt;-->
<!--&lt;!&ndash;						<div>年</div>&ndash;&gt;-->
<!--&lt;!&ndash;						<div>&ndash;&gt;-->
<!--&lt;!&ndash;							<input type="text" value="04">&ndash;&gt;-->
<!--&lt;!&ndash;						</div>&ndash;&gt;-->
<!--&lt;!&ndash;						<div>月</div>&ndash;&gt;-->
<!--&lt;!&ndash;						<div>&ndash;&gt;-->
<!--&lt;!&ndash;							<input type="text" value="10">&ndash;&gt;-->
<!--&lt;!&ndash;						</div>&ndash;&gt;-->
<!--&lt;!&ndash;						<div>日</div>&ndash;&gt;-->
<!--&lt;!&ndash;						<div>&ndash;&gt;-->
<!--&lt;!&ndash;							<input type="text" value="12">&ndash;&gt;-->
<!--&lt;!&ndash;						</div>&ndash;&gt;-->
<!--&lt;!&ndash;						：&ndash;&gt;-->
<!--&lt;!&ndash;						<div>&ndash;&gt;-->
<!--&lt;!&ndash;							<input type="text" value="00">&ndash;&gt;-->
<!--&lt;!&ndash;						</div>&ndash;&gt;-->
<!--&lt;!&ndash;					</div> &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;					<el-date-picker&ndash;&gt;-->
<!--&lt;!&ndash;					  v-model="form.endTime"&ndash;&gt;-->
<!--&lt;!&ndash;					  type="date"&ndash;&gt;-->
<!--&lt;!&ndash;					  placeholder="选择日期"&ndash;&gt;-->
<!--&lt;!&ndash;					  format="yyyy-MM-dd"&ndash;&gt;-->
<!--&lt;!&ndash;      			value-format="yyyy-MM-dd"&ndash;&gt;-->
<!--&lt;!&ndash;					  style='margin-right:20px'&ndash;&gt;-->
<!--&lt;!&ndash;					  >&ndash;&gt;-->
<!--&lt;!&ndash;					</el-date-picker>&ndash;&gt;-->
<!--&lt;!&ndash;				</div>&ndash;&gt;-->
<!--&lt;!&ndash;			</div>&ndash;&gt;-->
<!--&lt;!&ndash;			<div class="flex" style="align-items: flex-start;margin: 15px 0;" v-if="form.peixunfangshi==1">&ndash;&gt;-->
<!--&lt;!&ndash;				<span class="text_betten">培训地点<i></i></span><span class="name_span">*</span>&ndash;&gt;-->
<!--&lt;!&ndash;				<el-input v-model="form.peixundidian" style="width: 82%;" placeholder="输入培训地点"></el-input>&ndash;&gt;-->
<!--&lt;!&ndash;				&ndash;&gt;-->
<!--&lt;!&ndash;			</div>&ndash;&gt;-->
<!--&lt;!&ndash;			<div class="flex" style="align-items: flex-start;" v-if="form.peixunfangshi==1">&ndash;&gt;-->
<!--&lt;!&ndash;				<span class="text_betten" style="line-height: 20px;">培训主要内容概述<i></i></span><span class="name_span">*</span>&ndash;&gt;-->
<!--&lt;!&ndash;				<textarea v-model="form.neironggaiyao" name="" id="" cols="30" rows="10"></textarea>&ndash;&gt;-->
<!--&lt;!&ndash;			</div>&ndash;&gt;-->
<!--&lt;!&ndash;			<div class="flex" style="align-items: flex-start;margin-top: 10px;" v-if="form.peixunfangshi==2">&ndash;&gt;-->
<!--&lt;!&ndash;				<span class="text_betten">培训课件<i></i></span><span class="name_span">*</span>&ndash;&gt;-->
<!--&lt;!&ndash;				<el-input :disabled="true" v-model="form.peixunkejian" style="width: 71.4%;" placeholder="请选择课件"></el-input>&ndash;&gt;-->
<!--&lt;!&ndash;				<div class="xuanzekj_btn">选择课件</div>&ndash;&gt;-->
<!--&lt;!&ndash;			</div>&ndash;&gt;-->
<!--&lt;!&ndash;			<div class="shoujihoama1">&ndash;&gt;-->
<!--&lt;!&ndash;				<div class="flex">&ndash;&gt;-->
<!--&lt;!&ndash;					<span class="text_betten textduozi">公开类型<i></i></span><span class="name_span">*</span>&ndash;&gt;-->
<!--&lt;!&ndash;					<el-radio-group v-model="form.gongkaileixing">&ndash;&gt;-->
<!--&lt;!&ndash;						<el-radio v-for="item in proTypeList" :label="item.label" :value="item.label" :key="item.lable">{{item.name}}</el-radio>&ndash;&gt;-->
<!--&lt;!&ndash;					</el-radio-group>&ndash;&gt;-->
<!--&lt;!&ndash;				</div>&ndash;&gt;-->
<!--&lt;!&ndash;				<div class="flex" style="align-items: flex-start;">&ndash;&gt;-->
<!--&lt;!&ndash;					<span class="text_betten">负责人<i></i></span><span class="name_span">*</span>&ndash;&gt;-->
<!--&lt;!&ndash;					 <el-select v-model="form.fuzeren" placeholder="全部" style="width: 82%;">&ndash;&gt;-->
<!--&lt;!&ndash;						 <el-option&ndash;&gt;-->
<!--&lt;!&ndash;						   v-for="item in peixunleix"&ndash;&gt;-->
<!--&lt;!&ndash;						   :key="item.value"&ndash;&gt;-->
<!--&lt;!&ndash;						   :label="item.label"&ndash;&gt;-->
<!--&lt;!&ndash;						   :value="item.value">&ndash;&gt;-->
<!--&lt;!&ndash;						 </el-option>&ndash;&gt;-->
<!--&lt;!&ndash;					 </el-select>&ndash;&gt;-->
<!--&lt;!&ndash;				</div>&ndash;&gt;-->
<!--&lt;!&ndash;			</div>&ndash;&gt;-->
<!--&lt;!&ndash;			<div class="shoujihoama1">&ndash;&gt;-->
<!--&lt;!&ndash;				<div class="flex">&ndash;&gt;-->
<!--&lt;!&ndash;					<span class="text_betten textduozi">培训人数<i></i></span><span class="name_span" style="opacity: 0;">*</span>&ndash;&gt;-->
<!--&lt;!&ndash;					<el-input v-model="form.peixunrenshu" style="width: 82%;" placeholder="自动获取" disabled="disabled"></el-input>&ndash;&gt;-->
<!--&lt;!&ndash;				</div>&ndash;&gt;-->
<!--&lt;!&ndash;			</div>&ndash;&gt;-->
<!--&lt;!&ndash;			<div class="flex" style="align-items: flex-start;margin-top: 20px;">&ndash;&gt;-->
<!--&lt;!&ndash;				<span class="text_betten textduozi">培训人员<i></i></span><span class="name_span">*</span>&ndash;&gt;-->
<!--&lt;!&ndash;				<div style="width: 82%;">&ndash;&gt;-->
<!--&lt;!&ndash;					<el-table&ndash;&gt;-->
<!--&lt;!&ndash;					    :data="tableData"&ndash;&gt;-->
<!--&lt;!&ndash;					    border&ndash;&gt;-->
<!--&lt;!&ndash;					    style="width: 100%">&ndash;&gt;-->
<!--&lt;!&ndash;					    <el-table-column&ndash;&gt;-->
<!--&lt;!&ndash;					      type="index"&ndash;&gt;-->
<!--&lt;!&ndash;					      label="序号"&ndash;&gt;-->
<!--&lt;!&ndash;					      width="80">&ndash;&gt;-->
<!--&lt;!&ndash;					    </el-table-column>&ndash;&gt;-->
<!--&lt;!&ndash;					    <el-table-column&ndash;&gt;-->
<!--&lt;!&ndash;					      prop="name"&ndash;&gt;-->
<!--&lt;!&ndash;					      label="姓名">&ndash;&gt;-->
<!--&lt;!&ndash;					    </el-table-column>&ndash;&gt;-->
<!--&lt;!&ndash;					    <el-table-column&ndash;&gt;-->
<!--&lt;!&ndash;					      prop="date"&ndash;&gt;-->
<!--&lt;!&ndash;					      label="所属律所">&ndash;&gt;-->
<!--&lt;!&ndash;					    </el-table-column>&ndash;&gt;-->
<!--&lt;!&ndash;					    <el-table-column&ndash;&gt;-->
<!--&lt;!&ndash;					      prop="date"&ndash;&gt;-->
<!--&lt;!&ndash;					      label="联系电话"&ndash;&gt;-->
<!--&lt;!&ndash;					      width="120">&ndash;&gt;-->
<!--&lt;!&ndash;					    </el-table-column>&ndash;&gt;-->
<!--&lt;!&ndash;					    <el-table-column&ndash;&gt;-->
<!--&lt;!&ndash;					      fixed="right"&ndash;&gt;-->
<!--&lt;!&ndash;					      label="操作"&ndash;&gt;-->
<!--&lt;!&ndash;					      width="100">&ndash;&gt;-->
<!--&lt;!&ndash;					      <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;					        <el-button @click="handleClick(scope.row)" style="color: #ff0000;" type="text" size="small">删除</el-button>&ndash;&gt;-->
<!--&lt;!&ndash;					      </template>&ndash;&gt;-->
<!--&lt;!&ndash;					    </el-table-column>&ndash;&gt;-->
<!--&lt;!&ndash;					  </el-table>&ndash;&gt;-->
<!--&lt;!&ndash;				</div>&ndash;&gt;-->
<!--&lt;!&ndash;				&ndash;&gt;-->
<!--&lt;!&ndash;			</div>&ndash;&gt;-->
<!--			<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">-->
<!--				  <el-button type="primary" @click="submitConsultInfo()">发布</el-button>-->
<!--				<el-button>取消</el-button>-->
<!--			</div>-->
<!--		</div>-->
<!--	</div>-->
<!--</template>-->


<!--<script>-->
<!--	import {-->
<!--		getCitizenInfo,-->
<!--		getDictionaryListZwgkSelectList,-->
<!--		plan,-->
<!--	} from '../../http/api';-->
<!--	// getSelectDetail-->
<!--export default {-->
<!--    data() {-->
<!--		return {-->
<!--			token:sessionStorage.getItem("token"),-->
<!--			ruleForm: {-->
<!--                 peixunzhuti: '',-->
<!--                 peixunfangshi: '',-->
<!--                 shiyonggangwei: '',-->
<!--				 peixunleixing: '',-->
<!--                 peixunzhuangtai: '',-->
<!--                 startTime: '',-->
<!--                 endTime: '',-->
<!--                 peixundidian: '',-->
<!--                 neironggaiyao: '',-->
<!--                 gongkaileixing: '',-->
<!--                 fuzeren: '',-->
<!--                 peixunrenshu: '',-->
<!--            },-->
<!--	        rules: {-->
<!--				peixunzhuti: [-->
<!--				    {required: true, message: '请输入标题', trigger: 'blur'},-->
<!--				    {min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur'}-->
<!--			    ],-->
<!--	        },-->










<!--			options: [-->
<!--				{-->
<!--					value: '选项1',-->
<!--					label: '黄金糕'-->
<!--				}, {-->
<!--					value: '选项2',-->
<!--					label: '双皮奶'-->
<!--				}, {-->
<!--					value: '选项3',-->
<!--					label: '蚵仔煎'-->
<!--				}, {-->
<!--					value: '选项4',-->
<!--					label: '龙须面'-->
<!--				}, {-->
<!--					value: '选项5',-->
<!--					label: '北京烤鸭'-->
<!--				}-->
<!--			],-->
<!--			//培训类型-->
<!--			peixunleix:[],-->
<!--			peixunlx:'',-->
<!--			tableData: [-->
<!--				{-->
<!--					date: '2016-05-02',-->
<!--					name: '王小虎',-->
<!--					address: '上海市普陀区金沙江路 1518 弄'-->
<!--				}, {-->
<!--					date: '2016-05-04',-->
<!--					name: '王小虎',-->
<!--					address: '上海市普陀区金沙江路 1517 弄'-->
<!--				}, {-->
<!--					date: '2016-05-01',-->
<!--					name: '王小虎',-->
<!--					address: '上海市普陀区金沙江路 1519 弄'-->
<!--				}, {-->
<!--					date: '2016-05-03',-->
<!--					name: '王小虎',-->
<!--					address: '上海市普陀区金沙江路 1516 弄'-->
<!--				}-->
<!--			],-->
<!--			lvs:1,-->
<!--			//问题类型-->
<!--			proTypeList: [-->
<!--				{label: 1,name: '公开'},-->
<!--				{label: 2,name: '不公开'}-->
<!--			],-->
<!--			//培训方式-->
<!--			peixunfangshi:[-->
<!--				{value: 1,label: '现场会议培训'},-->
<!--				{value: 2,label: '课件学习培训'}-->
<!--			],-->
<!--			peixunseldata:1,-->
<!--			//满意度-->
<!--			satisfactionList: [-->
<!--				{label: 1,name: '非常满意'},-->
<!--				{label: 2,name: '满意'},-->
<!--				{label: 3,name: '一般'},-->
<!--				{label: 4,name: '不满意'},-->
<!--				{label: 5,name: '非常不满意'},-->
<!--			],-->

<!--			//咨询时间-->
<!--			timeForNow: '',-->
<!--			//提交现场咨询登记-->
<!--			submitConsultLocale: {-->
<!--				token:'',                //类型：String  必有字段  备注：用户身份标识-->
<!--				consultData: {                //类型：Object  必有字段  备注：咨询信息-->
<!--					personName: '',                //类型：String  必有字段  备注：提问者姓名-->
<!--					personPhone: '',                //类型：String  必有字段  备注：提问者手机号-->
<!--					consultType: '3',                //类型：String  必有字段  备注：固定值填3-->
<!--					questionType: -99,                //类型：String  必有字段  备注：问题类型-->
<!--					questionTitle: '',                //类型：String  必有字段  备注：标题-->
<!--					questionDesc: '',                //类型：String  必有字段  备注：问题描述-->
<!--					imgIds: ''                //类型：String  必有字段  备注：照片ID，多个照片用英文逗号分隔-->
<!--				},-->
<!--				answerData: {                //类型：Object  必有字段  备注：律师解答-->
<!--					answerContent: ''                //类型：String  必有字段  备注：答复内容-->
<!--				},-->
<!--				evaluationData: {                //类型：Object  必有字段  备注：评价信息-->
<!--					evaResult: -99,                //类型：String  必有字段  备注：满意度 1：非常满意；2：满意；3：一般；4：不满意；5：非常不满意；-->
<!--					evaSuggest: '',                //类型：String  必有字段  备注：意见建议-->
<!--					evaType:'3'                //类型：String  必有字段  备注：固定值填3-->
<!--				}-->
<!--			},-->
<!--			checkSize_type: {-->
<!--				personPhone: '',-->
<!--				questionTitle: '',-->
<!--				answerContent: '',-->
<!--				evaSuggest: '张三',-->
<!--			},-->
<!--			//上传图片的数组-->
<!--			imgUrlList: [],-->
<!--		};-->
<!--    },-->
<!--	methods: {-->
<!--		peixunsel(){-->
<!--			console.log(this.peixunseldata)-->
<!--		},-->
<!--		//图片上传-->
<!--		successUpload_goodsAdmin(success){-->
<!--			this.imgUrlList.push(success.content.fileList[0].fileId);-->
<!--			this.submitConsultLocale.consultData.imgIds = this.imgUrlList.join(',');-->

<!--		},-->
<!--		checkSize(size,dom){-->
<!--			!size ?this.checkSize_type[dom] = true:this.checkSize_type[dom] = false;-->
<!--		},-->
<!--		submitConsultInfo(){-->
<!--			this.submitConsultLocale.token = this.token;-->
<!--			console.log(this.submitConsultLocale)-->

<!--			if(this.submitConsultLocale.consultData.personPhone && this.submitConsultLocale.consultData.questionType !== -99 && this.submitConsultLocale.consultData.questionTitle &&-->
<!--				// this.submitConsultLocale.consultData.questionDesc &&-->
<!--				this.submitConsultLocale.consultData.imgIds && this.submitConsultLocale.answerData.answerContent &&-->
<!--				this.submitConsultLocale.evaluationData.evaResult !== -99 && this.submitConsultLocale.evaluationData.evaSuggest){-->
<!--				plan({-->
<!--					token:this.token,       //获取token-->
<!--					planId:'',      //为空时添加，不为空时修改-->
<!--					trainTitle:'',  //培训主题-->
<!--					trainMode:'',   //培训方式-->
<!--					matchPos:'',    //适用岗位-->
<!--					trainAddr:'',   //培训地点-->
<!--					trainContent:'',  //培训内容-->
<!--					trainType:'',     //培训类型-->
<!--					trainLevel:'',    //培训等级-->
<!--					startDate:'',     //开始日期-->
<!--					startTime:'',    //开始时间-->
<!--					endDate:'',      //结束日期-->
<!--					endTime:'',      //结束时间-->
<!--					openType:'',     //公开程度-->
<!--					couId:'',       //课件Id-->
<!--					principalUserId:'',       //负责人Id-->
<!--					trainStatus: ''          //计划状态-->
<!--				}).then(res=>{-->
<!--					if(res.code == '200'){-->

<!--					}-->
<!--				})-->
<!--			}else{-->
<!--				this.$notify.error({-->
<!--					message: '信息请填写齐全'-->
<!--				});-->
<!--			}-->
<!--		}-->
<!--	},-->
<!--	mounted() {-->
<!--		getCitizenInfo({token:this.token}).then(success=>{-->
<!--			this.submitConsultLocale.consultData.personName = success.content.personName;-->
<!--			this.submitConsultLocale.consultData.personPhone = success.content.cellphone;-->
<!--    });-->
<!--    // 字典下拉-->
<!--    // 配信类型-->
<!--    getDictionaryListZwgkSelectList({-->
<!--				"userId":"123", //随便写-->
<!--				"dictCode":"peixunleixing" //字典编码-->
<!--			}).then(res=> {-->
<!--				if(res.code === '200') {-->
<!--					let arr = res.content.resultList;-->
<!--					arr.unshift({-->
<!--						dictDataCode: '0',-->
<!--						dictDataName: '全部'-->
<!--					});-->
<!--					this.peixunleix = arr;-->
<!--				}else {-->
<!--					this.$message.error(res.msg);-->
<!--				}-->
<!--      });-->
<!--    // 使用岗位-->
<!--    getDictionaryListZwgkSelectList({-->
<!--				"userId":"123", //随便写-->
<!--				"dictCode":"siyonggangwei" //字典编码-->
<!--			}).then(res=> {-->
<!--				if(res.code === '200') {-->
<!--					let arr = res.content.resultList;-->
<!--					arr.unshift({-->
<!--						dictDataCode: '0',-->
<!--						dictDataName: '全部'-->
<!--					});-->
<!--					// this.peixunleix = arr;-->
<!--				}else {-->
<!--					this.$message.error(res.msg);-->
<!--				}-->
<!--			});-->
<!--	},-->
<!--	computed: {-->
<!--		uploadType(){-->
<!--			return {-->
<!--				'token': sessionStorage.getItem('token'),-->
<!--			};-->
<!--		},-->
<!--	},-->
<!--};-->
<!--</script>-->

<!--<style lang="scss">-->
<!--	.p_conright{-->
<!--		width: 100%;-->
<!--	}-->
<!--	.top_manalvs{-->
<!--		width: 96%;-->
<!--		padding: 0 2%;-->
<!--		height: 70px;-->
<!--		background: #fff;-->
<!--		border-bottom: 1px solid #eee;-->
<!--		display: flex;-->
<!--		align-items: center;-->
<!--		justify-content: space-between;-->
<!--	}-->
<!--	.xianchang_content{-->
<!--		width: 94%;-->
<!--		padding: 20px 3%;-->
<!--	}-->
<!--	.shoujihoama1{-->
<!--		width: 89%;-->
<!--		display: flex;-->
<!--		align-items: center;-->
<!--		margin-top: 20px;-->
<!--		justify-content: space-between;-->
<!--		.flex{-->
<!--			width: 45%;-->
<!--		}-->
<!--	}-->
<!--	.kaishi_time{-->
<!--		display: flex;-->
<!--		align-items: center;-->
<!--	}-->
<!--	.kaishi_time>div{-->
<!--		padding: 0 15px;-->
<!--		height: 40px;-->
<!--		border-radius: 5px;-->
<!--		border: 1px solid #eee;-->
<!--		margin-right: 6px;-->
<!--		display: flex;-->
<!--		align-items: center;-->
<!--		justify-content: center;-->
<!--	}-->
<!--	.kaishi_time>div input{-->
<!--		border: 0;-->
<!--		width: 40px;-->
<!--		color: #0077AA;-->
<!--		text-align: center;-->
<!--	}-->
<!--	.xuanzekj_btn{-->
<!--		width: 9%;-->
<!--		height: 39px;-->
<!--		border-radius: 5px;-->
<!--		display: flex;-->
<!--		align-items: center;-->
<!--		justify-content: center;-->
<!--		border: 1px solid #eee;-->
<!--		color: #0077AA;-->
<!--		margin-left: 1.3%;-->
<!--		font-size: 15px;-->
<!--	}-->
<!--</style>-->

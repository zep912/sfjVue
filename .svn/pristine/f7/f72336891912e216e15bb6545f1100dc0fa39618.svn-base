<template>
	<div class="p_conright">
		<div class="top_manalvs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item :to="{ path: 'zhibanshezhi' }">值班设置</el-breadcrumb-item>
			  <el-breadcrumb-item>新增</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="xianchang_content">
			<div class="flex">
				<span class="text_betten">标题<i></i></span><span class="name_span">*</span>
				<el-input v-model="savaDubyData.planName" style="width: 82%;" placeholder="请用一句话概括您的问题"></el-input>
			</div>
			<div class="flex">
				<span class="text_betten textduozi">内容<i></i></span><span class="name_span" >*</span>
				<textarea name="" id="" placeholder="内容" cols="30" rows="10" v-model="savaDubyData.planContent"></textarea>
			</div>
			<div class="flex">
				<span class="text_betten textduozi">值班人员<i></i></span><span class="name_span">*</span>
				<div style="width: 100%;">
					<div class="zhbna">
						<div class="neibu_lvshi">
							<el-checkbox>内部律师</el-checkbox>
							<div class="yixuanzenunm">
								已选择 {{lawyerSafekeeping.length}} 人
							</div>
						</div>
						<div class="xuanze_lvshi">
							<el-checkbox :indeterminate="isIndeterminate_laywer" v-model="checkAll_laywer" @change="handleCheckAllChange">全选</el-checkbox>
							  <div style="margin: 15px 0;"></div>
							  <el-checkbox-group v-model="lawyerSafekeeping" @change="handleCheckedCitiesChange">
							    <el-checkbox v-for="(laywer,index) in innerLawyerData" :label="laywer.personId" :key="index" :value="laywer.personId">{{laywer.personName}}</el-checkbox>
							</el-checkbox-group>
						</div>
					</div>
					<div class="zhbna">
						<div class="neibu_lvshi">
							<el-checkbox>外部律师</el-checkbox>
							<div class="yixuanzenunm">
								已选择 0 人
							</div>
						</div>
						<div class="xuanze_lvshi">
							<div style="margin-bottom: 15px">
								<div class="styleAllCheck">年限</div>
								<el-checkbox :indeterminate="isIndeterminate_age" v-model="checkAll_age" @change="handleCheckAllChange_age" class="styleAllCheck" style="margin-right: 30px">全选</el-checkbox>
								<el-checkbox-group v-model="agesSafekeeping" @change="handleCheckedCitiesChange_age" class="styleAllCheck">
									<el-checkbox v-for="(age,index) in agesLawyerData" :label="age.label" :key="index" :value="age.label">{{age.label}}</el-checkbox>
								</el-checkbox-group>
							</div>
							<div>
								<div class="styleAllCheck">区域</div>
								<el-checkbox :indeterminate="isIndeterminate_area" v-model="checkAll_area" @change="handleCheckAllChange_area" class="styleAllCheck" style="margin-right: 30px">全选</el-checkbox>
								<el-checkbox-group v-model="areaSafekeeping" @change="handleCheckedCitiesChange_area" class="styleAllCheck">
									<el-checkbox v-for="(area,index) in areaLawyerData" :label="area.areaId" :key="index" :value="area.areaId">{{area.areaName}}</el-checkbox>
								</el-checkbox-group>
							</div>
						</div>
					</div>
				</div>
				
			</div>
			<div class="yixuanzenunm gongxuanze">
				共选择0人
			</div>
			<div class="flex zhibantime" style="align-items: center;">
				<span class="text_betten textduozi">值班时间<i></i></span><span class="name_span" >*</span>
				<el-date-picker
				      v-model="timePickerData"
				      type="daterange"
				      range-separator="至"
				      start-placeholder="开始日期"
				      end-placeholder="结束日期"
					  value-format="yyyy-MM-dd"
					  >
				</el-date-picker>
				<el-checkbox v-model="savaDubyData.workdayFlag" style="margin: 0 20px;">仅工作日</el-checkbox>
				<div class="yixuanzenunm">
					除周末和节假日
				</div>
			</div>
			
			<div class="flex" style="align-items: center;">
				<span class="text_betten">班次人数<i></i></span><span class="name_span">*</span>
				<el-input v-model="savaDubyData.dutyLawyerCount" style="width: 40%;margin-right: 20px;" placeholder="请填写值班人数"></el-input>人
			</div>
			<div class="flex" style="align-items: center;">
				<span class="text_betten textduozi">班次时长<i></i></span><span class="name_span">*</span>
				<el-radio-group v-model="savaDubyData.dutyDuration">
				    <el-radio :label="1">全天</el-radio>
				    <el-radio :label="2">半天</el-radio>
				</el-radio-group>
			</div>
			<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
				<router-link :to="{path:'zhibanbiao'}">
					<el-button type="primary" plain>预览排班表</el-button>
				</router-link>
				<el-button type="primary" style="margin-left: 20px;" @click="submitDubyData">确定</el-button>
				<el-button>取消</el-button>
			</div>
		</div>
	</div>
</template>

<script>
import {saveDutyPlan,getInnerLawyerList,getOuterLawyerCount,getAreaList} from '../../http/api'
export default {
    data() {
      return {
		typeId: 0,    //显示类型
		checkAll_laywer: false,
		isIndeterminate_laywer: true,
		checkAll_age: false,
		isIndeterminate_age: true,
		checkAll_area: false,
		isIndeterminate_area: true,
		//  innerLawyerData: [],   //内部律师列表
		lawyerSafekeeping: [],    //律师选项暂存
		innerLawyerData: [],   //内部律师列表
		outerLawyerData:[],  //外部律师数量
		agesSafekeeping: [],  //年龄暂存
		agesLawyerData: [
			{ value:1,label:'1 - 3 年'},
			{ value:2,label:'3年以上'},
		],   //律师年龄列表
		areaSafekeeping: [],  //区域暂存
		areaLawyerData: [],   //区域列表
		timePickerData:[],  //时间选择
		 savaDubyData: {
			token:"",                //类型：String  必有字段  备注：用户身份标识
			planId:"",                //类型：String  可有字段  备注：计划ID,为空时为添加操作，不为空则为修改操作
			planName:"",                //类型：String  必有字段  备注：执班计划名称
			planContent:"",                //类型：String  可有字段  备注：执班计划内容
			planStartDate:"",                //类型：String  必有字段  备注：计划开始日期
			planEndDate:"",                //类型：String  必有字段  备注：计划结束日期
			dutyLawyerCount:"",                //类型：String  必有字段  备注：执班律师人数
			dutyDuration: 1,                //类型：String  必有字段  备注：执班时长 1:全天; 2:半天
			workdayFlag: 1,                //类型：Number  必有字段  备注：仅工作日 1:是; 2:否
			lawyerList: [],               //类型：String  可有字段  备注：律师ID
			outerLawyer: {                //类型：Object  可有字段  备注：外部律师
				yearList: [],			//类型：String  必有字段  备注：年限范围 样例： 1(1至3年),2(3年以上)
				areaRegionList: []         //类型：String  必有字段  备注：区ID
			}
		 }
      }
    },
	methods: {
		handleClick(tab, event) {
			console.log(tab, event);
		},
		//律师全选_内部律师
		handleCheckAllChange(val) {
			var typeList = [];
			for(let typeDetail in this.innerLawyerData){
				typeList.push(this.innerLawyerData[typeDetail].personId)
			}
			this.lawyerSafekeeping = val ? typeList : [];
			this.isIndeterminate_laywer = false;
			// this.savaDubyData.lawyerList = [];
			// for(let keyId in this.lawyerSafekeeping){
			// 	this.savaDubyData.lawyerList.push({
			// 		lawyerId:this.lawyerSafekeeping[keyId]
			// 	})
			// }
			this.setDataInfo('lawyerList','lawyerSafekeeping','lawyerId',1)
		},
		//律师全选_内部律师
		handleCheckedCitiesChange(value) {
			let checkedCount = value.length;
			this.checkAll_laywer = checkedCount === this.innerLawyerData.length;
			this.isIndeterminate_laywer = checkedCount > 0 && checkedCount < this.innerLawyerData.length;
			this.setDataInfo('lawyerList','lawyerSafekeeping','lawyerId',1)
		},
		//年龄全选_外部律师
		handleCheckAllChange_age(val) {
			var typeList = [];
			for(let typeDetail in this.agesLawyerData){
				typeList.push(this.agesLawyerData[typeDetail].label)
			}
			this.agesSafekeeping = val ? typeList : [];
			this.isIndeterminate_age = false;
			this.setDataInfo('yearList','agesSafekeeping','year',2)
		},
		//年龄全选_外部律师
		handleCheckedCitiesChange_age(value) {
			let checkedCount = value.length;
			this.checkAll_age = checkedCount === this.agesLawyerData.length;
			this.isIndeterminate_age = checkedCount > 0 && checkedCount < this.agesLawyerData.length;
			this.setDataInfo('yearList','agesSafekeeping','year',2)
		},
		//区域全选_外部律师
		handleCheckAllChange_area(val) {
			var typeList = [];
			for(let typeDetail in this.areaLawyerData){
				typeList.push(this.areaLawyerData[typeDetail].areaId)
			}
			console.log(this.areaSafekeeping)
			this.areaSafekeeping = val ? typeList : [];
			this.isIndeterminate_area = false;
			this.setDataInfo('areaRegionList','areaSafekeeping','areaRegionId',3)
		},
		//区域全选_外部律师
		handleCheckedCitiesChange_area(value) {
			let checkedCount = value.length;
			this.checkAll_area = checkedCount === this.areaLawyerData.length;
			this.isIndeterminate_area = checkedCount > 0 && checkedCount < this.areaLawyerData.length;
			this.setDataInfo('areaRegionList','areaSafekeeping','areaRegionId',3)
		},
		//设置value列表
		async setDataInfo(dom,array,key,type){
			this.savaDubyData[dom] = [];
			for(let keyId in this[array]){
				if(type == 1){
					this.savaDubyData[dom].push({
						[key]:this[array][keyId]
					})
				}else if(type>1){
					this.savaDubyData.outerLawyer[dom].push({
						[key]:this[array][keyId]
					})
				}
				
			}
		},
		//提交值班表数据
		async submitDubyData(){
			this.savaDubyData.workdayFlag?1:2;
			this.savaDubyData.planStartDate = this.timePickerData[0];
			this.savaDubyData.planEndDate = this.timePickerData[0];
			let submitDubyDataInfo = await saveDutyPlan(this.savaDubyData);
			if(submitDubyDataInfo.code == 200){
				this.$router.push({ path:'zhibanshezhi' });
			}
		},
		//获取内部律师列表
		async getInnerLawyerListData(){
			const dataList = {
				token: sessionStorage.getItem('token'),                //类型：String  必有字段  备注：token 用户身份标识
				status:"1",                //类型：String  可有字段  备注：人员状态 1：正常；2：休假；
			}
			let getInnerLawyerData = await getInnerLawyerList(dataList);
			this.innerLawyerData = getInnerLawyerData.content.dataList;
		},
		//获取外部律师列表
		async getOuterLawyerCountData(){
			const dataList = {
				token: sessionStorage.getItem('token'),                //类型：String  必有字段  备注：token 用户身份标识
				status:"1",                //类型：String  可有字段  备注：人员状态 1：正常；2：休假；
			}
			let getOuterLawyerData = await getOuterLawyerCount(dataList);
			this.outerLawyerData = getOuterLawyerData.content.dataList;
		},
		//获取区域信息
		async getAreaDetailList(){
			let areaList = await getAreaList({ areaLevel: 3 });
			this.areaLawyerData = areaList.content.dataList;
		},
		//获取值班表信息
		// async getDataInfoList(){
		// 	let submitDubyDataInfo = await saveDutyPlan(this.savaDubyData);
		// },
	},
	mounted(){
		this.savaDubyData.token = sessionStorage.getItem('token');
		//获取内部律师
		this.getInnerLawyerListData();
		//获取外部律师
		this.getOuterLawyerCountData();
		this.getAreaDetailList();
		const type = this.$route.query.type;
		const id = this.$route.query.id;
		this.typeId = type;
		if(type==1){
			this.savaDubyData.planId = id;
			// this.getDataInfoList();
		}
	}
  }
</script>

<style lang="scss">
	.publice{
		width: 100vw;
	}
	.publice_top{
		width: 90%;
		padding: 0 5%;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
	}
	.p_top_left img{
		width: 55px;
		height: 57px;
		margin-right: 20px;
	}
	.p_top_left{
		display: flex;
		align-items: center;
		color: #fff;
		font-size: 28px;
		font-weight: 600;
		
	}
	.p_top_right img{
		width: 52px;
		height: 52px;
		border-radius: 3px;
		margin-right: 20px;
	}
	.p_top_right{
		display: flex;
		align-items: center;
		
	}
	.name_p{
		width: 100px;
		text-align: left;
		color: #fff;
		
	}
	.name_p>div:nth-child(1){
		font-size: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.name_p>div:nth-child(2){
		font-size: 14px;
		margin-top: 10px;
	}
	.publice_content{
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}
	.active2{
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
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
		.flex{
			align-items: flex-start;
		}
	}
	.styleAllCheck{
		display: inline-block;
		margin-right: 30px;
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
	.zhbna{
		width: 87%;
	}
	.neibu_lvshi{
		width: 100%;
		display: flex;
		align-items: center;
		margin: 20px 0;
		div{
			margin-left: 20px;
		}
		
	}
	.xuanze_lvshi{
		width: 94%;
		padding: 20px 3%;
		border: 1px solid #eee;
		text-align: left;
	}
	.zhibantime{
		margin: 25px 0;
	}
	.yixuanzenunm{
		font-size: 14px;
		color: #d05b06;
	}
	.gongxuanze{
		width: 50%;
		height:40px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding-left: 6.5%;
	}
</style>

<template>
	<div class="zaixianzx">
		<div class="tab_zixun">
			<div :class="submitProList.consultType==1?'zixuntabactive':''" @click="zixun(1)">免费咨询</div>
			<div :class="submitProList.consultType==2||submitProList.consultType==0?'zixuntabactive':''" @click="zixun(2)">针对性咨询</div>
		</div>
		<div class="zixuncontent" v-if="submitProList.consultType==1">
			<div class="flex" style="align-items: flex-start;">
				<span class="text_betten">标题<i></i></span><span class="name_span">*</span>
				<el-input v-model="submitProList.questionTitle" style="width: 82%;" placeholder="请用一句话概括您的问题"
				 	:class="{'waring_info_border':checkSize_type.questionTitle}" @blur="checkSize(submitProList.questionTitle,'questionTitle')"></el-input>
			</div>
			<div class="flex">
				<span class="text_betten">问题类型<i></i></span><span class="name_span">*</span>
				<el-radio-group v-model="submitProList.questionType">
                	<el-radio v-for="(item,index) in problemType" :key="item.label" :label="item.label" 
					:value="item.label" @change="changeTask(index)">{{item.name}}</el-radio>
                </el-radio-group>
			</div>
			<div class="flex" style="align-items: flex-start;">
				<span class="text_betten">问题描述<i></i></span><span class="name_span" >*</span>
				<textarea name="" id="" v-model="submitProList.questionDesc" cols="30" rows="10"
					:class="{'waring_info_border':checkSize_type.questionDesc}" @blur="checkSize(submitProList.questionDesc,'questionDesc')"></textarea>
			</div>
			<div class="shoujihoama">
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">手机号码<i></i></span><span class="name_span">*</span>
					<el-input v-model="citizenInfo.cellphone" style="width: 82%;"
						:class="{'waring_info_border':checkSize_type.cellphone}" @blur="checkSize(citizenInfo.cellphone,'cellphone')"></el-input>
				</div>
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">提问者<i></i></span><span class="name_span">*</span>
					<el-input v-model="citizenInfo.personName" style="width: 82%;" ></el-input>
				</div>
			</div>
			<div class="flex" style="align-items: flex-start;margin-top: 20px;">
				<span class="text_betten">上传照片<i></i></span><span class="name_span" style="opacity: 0;">*</span>
				<div>
					<el-upload
                        :action="this.uploadUrl"
                        :data="uploadType"
                        list-type="picture-card"
                        :on-success="successUpload_goodsAdmin"
                        accept=".jpg,.jpeg,.png,.gif,.bmp"
                        :limit="1">
                        <i class="el-icon-plus"></i>
                    </el-upload>
				</div>
			</div>
			
			<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
				  <el-button type="primary" @click="submitPro">提交</el-button>
				<el-button>取消</el-button>
			</div>
		</div>
		<div class="zixuncontent" v-if="submitProList.consultType==2">
			<!-- <div class="lawyer_contop"> -->
				<div class="shaixuan">
					<div>所属区域：
						<el-select placeholder="请选择">
                            <el-option
                                v-for="(itemArea,index) in lawyer_areaList"
                                :key="itemArea.areaName"
                                :label="itemArea.areaName"
                                :value="itemArea.areaName">
                            </el-option>
                        </el-select>
					</div>
					<div>擅长专业：
						<el-select v-model="value" placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					</div>
					<div>关键字：
						<el-input v-model="input"  style="width: 195px;" placeholder="请输入内容"></el-input>
					</div>
					<div class="search2">搜索</div>
				</div>
				<div class="content_sifa">
					<div class="contetn_left">
						<div :class="changeRate == index ?'active':''" 
						v-for="(item,index) in completionRate" @click="changeRate_button(index)">{{item}}</div>
					</div>
					<div>
						共计：123456789个
					</div>
				</div>
				<div class="content-con">
					<div v-for="(item,index) in lawyer_content.dataList" :key="index">
						<div class="topcon">
							<div>
								<img :src="item.photoUrl" class="left-image" alt="">
							</div>
							<div class="lawyer_name">
								<div>{{item.lawyerName}} 	<span>（执业9年）</span></div>
								<div class="last2"><div>电话<i></i></div>：<span>{{item.lawyerPhone}}</span></div>
								<div class="last">
									<div>擅长专业：</div>
									<div>{{item.adeptSpecialtys}}</div>
								</div>
							</div>
							<div class="zhenduixingzx" @click="zhendui(item.lawyerId)">
								针对性咨询
							</div>
						</div>
						<div class="two_con">
							<div style="width: 28%;">
								<div>{{item.serviceData.consultAmount}}</div>
								<div>咨询量</div>
							</div>
							<div>|</div>
							<div style="width: 28%;">
								<div>{{item.serviceData.serviceAmount}}</div>
								<div>服务次数</div>
							</div>
							<div>|</div>
							<div style="width: 28%;">
								<div>{{item.serviceData.satisfaction}}</div>
								<div>满意度</div>
							</div>
						</div>
					</div>
					<div class="fenyess">
						<el-pagination
							@current-change="handleCurrentChange"
							:current-page.sync="currentPage"
							:page-size="10"
						  	layout="prev, pager, next"
						  	:total="lawyer_content.pageInfo.total">
						</el-pagination>
					</div>
						
				</div>
			<!-- </div> -->
			<div class="tankuang" v-if="tankuang">
				<div class="tank_content">
					<img src="../../../assets/image/sure.png" alt="">
					<div class="tank_title">是否选择“<span>张杨明律师</span>”进行针对性咨询？</div>
					<div class="tank_btn">
						<div @click="this.tankuang = !this.tankuang">取消</div>
						<div class="sure_tank" @click="queding_xz">确定</div>
					</div>
				</div>
				
			</div>
		</div>
		<div class="zixuncontent" v-if="zx_active">
			<div class="flex" style="align-items: flex-start;">
				<span class="text_betten">意向律师<i></i></span><span class="name_span">*</span>
				<div class="yixiang">
					<div class="topcon">
						<div>
							<img src="../../../assets/image/u3264.png" class="left-image" alt="">
						</div>
						<div class="lawyer_name">
							<div>张明阳律师 	<span>（执业9年）</span></div>
							<div class="last2"><div>电话<i></i></div>：<span>138****1535</span></div>
							<div class="last">
								<div>擅长专业：</div>
								<div>知识产权、房产纠纷、劳动争议、债权债务、婚姻家庭</div>
							</div>
						</div>
						<div class="zhenduixingzx" @click="zhendui">
							针对性咨询
						</div>
					</div>
					<div class="two_con">
						<div style="width: 28%;">
							<div>321</div>
							<div>咨询量</div>
						</div>
						<div>|</div>
						<div style="width: 28%;">
							<div>321</div>
							<div>服务次数</div>
						</div>
						<div>|</div>
						<div style="width: 28%;">
							<div>321</div>
							<div>满意度</div>
						</div>
					</div>
				</div>
				<div class="xiugai_lvshi">修改</div>
			</div>
			<div class="flex" style="align-items: flex-start;">
				<span class="text_betten">标题<i></i></span><span class="name_span">*</span>
				<el-input v-model="submitProList.questionTitle" style="width: 82%;" placeholder="请用一句话概括您的问题"
					:class="{'waring_info_border':checkSize_type.questionTitle}" @blur="checkSize(submitProList.questionTitle,'questionTitle')"></el-input>
			</div>
			<div class="flex">
				<span class="text_betten">问题类型<i></i></span><span class="name_span">*</span>
				<el-radio-group v-model="submitProList.questionType">
                	<el-radio v-for="(item,index) in problemType" :key="item.label" :label="item.label" 
					:value="item.label" @change="changeTask(index)">{{item.name}}</el-radio>
                </el-radio-group>
			</div>
			<div class="flex" style="align-items: flex-start;">
				<span class="text_betten">问题描述<i></i></span><span class="name_span" >*</span>
				<textarea name="" id="" placeholder="请详细描述您事情发生的时间,地点,经过及想要获取的帮助" cols="30" rows="10" v-model="submitProList.questionDesc"
					:class="{'waring_info_border':checkSize_type.questionDesc}" @blur="checkSize(submitProList.questionDesc,'questionDesc')"></textarea>
			</div>
			<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
				  <el-button type="primary" @click="submitPro">提交</el-button>
				<el-button @click="closePro">取消</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import {saveConsultOnline,getCitizenInfo,getValidLawyerList,getAreaList} from '../../../http/api'
	export default {
	  	data() {
			return {
				input: '',
				zx_active:false,
				//提交咨询信息
				submitProList: {
					token: '',
					consultType: 1,
					questionType: 0,
					questionTitle: '',
					questionDesc: '',
					lawyerId: '',
					fileId: ''
				},
				//搜索咨询信息
				searchInfo: {
					areaRegionId: '',
					adeptSpecialty: '',
					keyWord: ''
				},
				//获取律师列表所需信息
				lawyerContent: {
					token: '',
					areaRegionId: '',
					adeptSpecialty: '',
					keyWord: '',
					sortModel: '1',
					sortType: '1',
					pageSize: '10',
					pageNum: '1'
				},
				//市民信息
				citizenInfo: {},
				//律师区域列表
				lawyer_areaList: [],
				//律师列表
				lawyer_content: {},
				value: '',
				tankuang:false,
				problemType: [
					{ label: 1, name: '离婚'},
					{ label: 2, name: '交通事故'},
					{ label: 3, name: '刑事辩护'},
					{ label: 4, name: '婚姻家庭'},
					{ label: 5, name: '债权债务'},
					{ label: 6, name: '医疗纠纷'},
					{ label: 7, name: '工伤赔偿'},
					{ label: 8, name: '劳动纠纷'},
					{ label: 9, name: '房产纠纷'},
					{ label: 10, name: '土地纠纷'},
					{ label: 11, name: '拆迁安置'},
					{ label: 12, name: '合同纠纷'},
					{ label: 13, name: '抵押担保'},
					{ label: 14, name: '公司解散'},
					{ label: 15, name: '其他'},
				], 
				currentPage: 1,
				completionRate: ['咨询量','满意度','接案率','结案率'],
				changeRate: 0,
				checkSize_type: {
					questionTitle: false,
					questionDesc: false,
					cellphone: false,
				}
			}
	  	},
	  	mounted() {
		  	this.getCitizenInfo();
			this.getLawyerList();
		},
		methods:{
			//图片上传
            successUpload_goodsAdmin(success,file){
                this.submitProList.fileId = success.content.fileList[0].fileId;
            },
			zixun(e){
				this.submitProList.consultType = e;
				this.zx_active = false;
			},
			zhendui(lawyer_id){
				this.tankuang = true
				this.submitProList.lawyerId = toString(lawyer_id);
			},
			
			getCitizenInfo(){
				//获取市民信息
				this.lawyerContent.token = sessionStorage.getItem("token");
				getCitizenInfo({token:this.lawyerContent.token}).then(success =>{
					this.citizenInfo = success.content
				})
				//获取律师区域列表
				getAreaList(
					{token:this.lawyerContent.token,areaType:1,}
				).then(success=>{
					this.lawyer_areaList = success.content.dataList;
					console.log(this.lawyer_areaList)
				})
			},
			changeRate_button(index){
				this.changeRate = index;
				this.lawyerContent.sortModel = index-0+1;
				this.getLawyerList();
			},
			skipIndex(index){

			},
			//筛选律师列表
			getLawyerList(){
				getValidLawyerList(this.lawyerContent).then(success=>{
					this.lawyer_content = success.content;
					this.lawyer_content.pageInfo.total = Number(this.lawyer_content.pageInfo.total)
				})
			},
			queding_xz(){
				this.tankuang=false;
				this.submitProList.consultType = 0;
				this.zx_active = true;
			},
			//上下翻页
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				this.lawyerContent.pageNum = Number(val);
				this.getLawyerList()
			},
			changeTask(index){
				this.submitProList.questionType = this.problemType[index].label;
			},submitProList: {
					token: '',
					consultType: 1,
					questionType: 0,
					questionTitle: '',
					questionDesc: '',
					lawyerId: '',
					fileId: ''
				},
			submitPro(){
				this.submitProList.token = sessionStorage.getItem("token");
				if(this.submitProList.questionType != 0 && this.submitProList.questionTitle && this.submitProList.questionDesc){
					if(this.submitProList.consultType == 1){
						saveConsultOnline(this.submitProList).then(success=>{
							this.$notify({
								message: '提交成功',
								type: 'success'
							})
						})
					}else if(this.submitProList.consultType == 0){
						const token = this.submitProList.token;
						const consultType = 2;
						const questionType = this.submitProList.questionType;
						const questionDesc = this.questionDesc;
						const lawyerId = this.lawyerId;
						const fileId = this.fileId;
						saveConsultOnline({token:token,consultType:consultType,questionType:questionType,questionDesc:questionDesc,lawyerId:lawyerId,fileId:fileId}).then(success=>{
							this.$notify({
								message: '提交成功',
								type: 'success'
							})
						})
					}
				}else{
					this.$notify.error({
						message: '信息请填写完整'
					})
				}
			},
			closePro(){},
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
	}
</script>

<style lang="scss">
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
	.shaixuan{
		width: 94%;
		padding: 0 3%;
		height: 80px;
		background: #fff;
		margin: 20px 0;
		border: 1px solid #0EA9D7;
		display: flex;
		align-items: center;
		justify-content: space-between;
		
	}
	.search2{
		width: 80px;
		height: 40px;
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
	}
	input{
		height: 40px;
		line-height: 40px;
	}
	.content_sifa{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.contetn_left{
		display: flex;
		align-items: center;
		
	}
	.contetn_left>div{
		width: 90px;
		height: 42px;
		margin-right: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.contetn_left .active{
		background: #fff;
		color: #0EA9D7;
	}
	.content-con{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.content-con>div{
		width: 30%;
		border: 1px solid #eee;
		background: #fff;
		margin-top: 20px;
	}
	.topcon{
		width: 94%;
		padding: 10px 3%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.left-image{
		width: 90px;
		height: 120px;
	}
	.lawyer_name{
		text-align: left;
		width: 70%;
	}
	.lawyer_name>div:nth-child(1){
		font-size: 18px;
		color: #158CCB;
	}
	.lawyer_name>div:nth-child(1) span{
		font-size: 14px;
		color: #333;
	}
	.lawyer_name>div:nth-child(2){
		font-size: 14px;
		color: #158CCB;
	}
	.lawyer_name>div:nth-child(2),.lawyer_name>div:nth-child(3){
		font-size: 13px;
		color: #333;
		margin-top: 10px;
	}
	.last,.last2{
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.last>div:nth-child(1){
		width: 120px;
	}
	.last2>div:nth-child(1){
		width: 52px;
		display: inline-block;
		text-align: justify;
		margin-top: 10px;
	}
	.last2>div:nth-child(1) i{ 
	    display: inline-block;
	    width: 100%;
	}
	.two_con{
		width: 94%;
		padding: 10px 3%;
		background: rgba(21,140,203,0.1);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.two_con>div{
		text-align: center;
	}
	.two_con>div div:nth-child(1){
		font-size: 17px;
		color: #333;
		font-weight: 600;
	}
	.two_con>div div:nth-child(2){
		font-size: 14px;
		color: #999;
	}
	.content-con .fenyess{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		background: #f2f2f2;
	}
</style>

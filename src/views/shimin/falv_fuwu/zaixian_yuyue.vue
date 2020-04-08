<template>
	<div class="zaixianzx">
		<div class="tab_zixun">
			<div :class="zx_active==1?'zixuntabactive':''" @click="zixun(1)">法律援助预约</div>
			<div :class="zx_active==2?'zixuntabactive':''" @click="zixun(2)">人民调解预约</div>
		</div>
		<div class="zixuncontent" v-if="zx_active==1">
			<div class="shoujihoama1">
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">申请人<i></i></span><span class="name_span" style="opacity: 0;">*</span>
					<el-input v-model="personName" style="width: 82%;" disabled="disabled"></el-input>
				</div>
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">手机号码<i></i></span><span class="name_span">*</span>
					<el-input v-model="submitLegalAid.applyPhone" style="width: 82%;"></el-input>
				</div>
			</div>
			<div class="flex">
				<span class="text_betten textduozi">住所地址<i></i></span><span class="name_span">*</span>
				<div class="right_flex" style="width: 83.8%;display: flex;">
					<el-cascader
					    v-model="value"
					    :options="options1"
					    :props="{ expandTrigger: 'hover' }"
					    @change="handleChange" 
						style="width: 55%;"
						></el-cascader>
					<el-input v-model="input" style="width: 40%;margin-left: 30px;" placeholder="请输入详细地址"></el-input>
				</div>
			</div>
			<div class="flex">
				<span class="text_betten textduozi">事项类型<i></i></span><span class="name_span">*</span>
				<el-radio-group>
					<el-radio v-for="(item,index) in legalAid_matter" :key="item.label" :label="item.label" 
					:value="submitLegalAid.matterType">{{item.name}}</el-radio>
				</el-radio-group>
			</div>
			<div class="flex">
				<span class="text_betten textduozi">受援人类别<i></i></span><span class="name_span">*</span>
				<el-checkbox-group v-model="checkList">
				    <el-checkbox label="残疾人"></el-checkbox>
				    <el-checkbox label="老年人(60岁以上)"></el-checkbox>
				    <el-checkbox label="未成年人"></el-checkbox>
				    <el-checkbox label="女性"></el-checkbox>
				    <el-checkbox label="农民工"></el-checkbox>
				    <el-checkbox label="农民"></el-checkbox>
				    <el-checkbox label="少数民族"></el-checkbox>
				    <el-checkbox label="军人"></el-checkbox>
				    <el-checkbox label="军属"></el-checkbox>
				    <el-checkbox label="外国人或无国籍人"></el-checkbox>
				    <el-checkbox label="其他"></el-checkbox>
				</el-checkbox-group>
			</div>
			<div class="flex">
				<span class="text_betten textduozi">经济困难情形<i></i></span><span class="name_span">*</span>
				<el-radio-group v-model="radio2">
				    <el-radio :label="3">低保家庭成员</el-radio>
				    <el-radio :label="6">特困人员</el-radio>
				    <el-radio :label="9">低收入家庭成员</el-radio>
				    <el-radio :label="1">政府供养或者接受社会</el-radio>
				    <el-radio :label="2">农村贫困家庭成员</el-radio>
				    <el-radio :label="4">其他经济困难人员</el-radio>
				  </el-radio-group>
			</div>
			<div class="flex" style="align-items: flex-start;">
				<span class="text_betten textduozi">案情及申请理由<i></i></span><span class="name_span" >*</span>
				<textarea name="" id="" placeholder="案情及申请理由" cols="30" rows="10"></textarea>
			</div>
			<div class="flex" style="align-items: flex-start;margin-top: 20px;">
				<span class="text_betten textduozi">证明材料<i></i></span><span class="name_span" >*</span>
				<div class="addimg_father">
					<el-upload
						class="avatar-uploader"
						:action="this.uploadUrl"
						:show-file-list="false"
						:data="uploadType"
						accept=".jpg,.jpeg,.png,.gif,.bmp"
						:on-success="successUpload_idCard">
						<img v-if="imageUrl.idCard" :src="imageUrl.idCard" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					身份证
				</div>
				<div class="addimg_father">
					<el-upload
						class="avatar-uploader"
						:action="this.uploadUrl"
						:show-file-list="false"
						:data="uploadType"
						accept=".jpg,.jpeg,.png,.gif,.bmp"
						:on-success="successUpload_dibao">
						<img v-if="imageUrl.dibao" :src="imageUrl.dibao" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					低保证
				</div>
				<div class="addimg_father">
					<el-upload
						class="avatar-uploader"
						:action="this.uploadUrl"
						:show-file-list="false"
						:data="uploadType"
						accept=".jpg,.jpeg,.png,.gif,.bmp"
						:on-success="successUpload_kunnan">
						<img v-if="imageUrl.kunnan" :src="imageUrl.kunnan" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					困难证明
				</div>
				<div class="addimg_father">
					<el-upload
						class="avatar-uploader"
						:action="this.uploadUrl"
						:show-file-list="false"
						:data="uploadType"
						accept=".jpg,.jpeg,.png,.gif,.bmp"
						:on-success="successUpload_qita">
						<img v-if="imageUrl.qita" :src="imageUrl.qita" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					其他
				</div>
			</div>
			<div class="chengnuo_xz">
				<el-checkbox v-model="checked">本人承诺以上所填内容和提交的证件，证明材料均真实</el-checkbox>
			</div>
			<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
				  <el-button type="primary">提交</el-button>
				<el-button>取消</el-button>
			</div>
		</div>
		<div class="zixuncontent" v-if="zx_active==2">
			<div class="shoujihoama1">
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">申请人<i></i></span><span class="name_span" style="opacity: 0;">*</span>
					<el-input v-model="personName" style="width: 82%;" disabled="disabled"></el-input>
				</div>
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">手机号码<i></i></span><span class="name_span">*</span>
					<el-input v-model="submitPeoplesMediation.applyPhone" style="width: 82%;"></el-input>
				</div>
			</div>
			<div class="flex">
				<span class="text_betten textduozi">单位或住址<i></i></span><span class="name_span">*</span>
				<div class="right_flex" style="width: 83.8%;display: flex;">
					<el-cascader
					    v-model="value"
					    :options="options1"
					    :props="{ expandTrigger: 'hover' }"
					    @change="handleChange" 
						style="width: 55%;"
						></el-cascader>
					<el-input v-model="input" style="width: 40%;margin-left: 30px;" placeholder="请输入详细地址"></el-input>
				</div>
			</div>
			<div class="shoujihoama1">
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">被申请人<i></i></span><span class="name_span" style="opacity: 0;">*</span>
					<el-input v-model="input" style="width: 82%;" placeholder="请输入信息"></el-input>
				</div>
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">联系电话<i></i></span><span class="name_span">*</span>
					<el-input v-model="input" style="width: 82%;" placeholder="请输入信息"></el-input>
				</div>
			</div>
			<div class="flex">
				<span class="text_betten textduozi">纠纷类型<i></i></span><span class="name_span">*</span>
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
				<span class="text_betten textduozi">纠纷情况<i></i></span><span class="name_span" >*</span>
				<textarea name="" id="" placeholder="您可以概括您的需求,便于人民调解委员会机构快速了解您的情况" cols="30" rows="10"></textarea>
			</div>
			<div class="flex" style="align-items: flex-start;">
				<span class="text_betten textduozi">预约调委会<i></i></span><span class="name_span" >*</span>
				<div class="yuuye">
					<div class="yuyue_neirongs">
						<div class="yueyuweihui_content">
							<img src="../../../assets/image/nvc.jpg" alt="">
							<div class="youxetiaojie_text">
								<div>医疗纠纷人民调解委员会</div>
								<div>联系电话：<span>456464454</span></div>
								<div>联系地址：烟台第三方含苞待放表达方式v成都v不好不能</div>
							</div>
						</div>
						
						<div class="yuyue_btn">预约</div>
					</div>
				</div>
			</div>
			<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
				<el-button type="primary">提交</el-button>
				<el-button>取消</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	const token = sessionStorage.getItem("token")
	import {saveAppointmentMediate,getCitizenInfo} from '../../../http/api'
	export default {
		data() {
			return {
				input: '',
				checked: true,
				checkList: ['选中且禁用','复选框 A'],
				defaultProps: {
					children: 'children',
					label: 'label'
				},
				shanchang:false,
				radio2: 3,
				zx_active:1,
				value: '',
				tankuang:false,
				personName: '',
				//法律援助_事件类型单选
				legalAid_matter: [
					{label: 1,name:'刑事'},
					{label: 2,name:'民事'},
					{label: 3,name:'行政'},
					{label: 4,name:'其他'},
				],
				//法律援助_提交预约
				submitLegalAid: {
					token: '',
					applyPhone: '',
					matterType: '',
				},
				//人民调解_提交预约
				submitPeoplesMediation: {
					applyPhone: ''
				},
				//上传照片
				imageUrl:{
					idCard: '',
					dibao: '',
					kunnan: '',
					qita: ''
				}
			}
		},
		mounted() {
			getCitizenInfo({token:token}).then(success=>{
				this.submitLegalAid.applyPhone = success.content.cellphone;
				this.submitPeoplesMediation.applyPhone = success.content.cellphone;
				this.personName = success.content.personName;
			})
		},
	  methods:{
			zixun(e){
				this.zx_active = e;
			},
			//上传图片
			successUpload_idCard(res,file){
				console.log(res)
				console.log(file)
				this.imageUrl.idCard = res.content.fileList[0].fileUrl;
				console.log(this.imageUrl.idCard)
			},
			successUpload_dibao(res,file){
				this.imageUrl.dibao = res.response.content.fileList[0].fileUrl;
			},
			successUpload_kunnan(res,file){
				this.imageUrl.kunnan = res.response.content.fileList[0].fileUrl;
			},
			successUpload_qita(res,file){
				this.imageUrl.qita = res.response.content.fileList[0].fileUrl;
			},
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
		.textduozi{
			width: 15%;
			text-align: right;
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
	.shoujihoama1{
		width: 89.5%;
		display: flex;
		align-items: center;
		margin-top: 20px;
		justify-content: space-between;
		margin-left: 9%;
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
	.el-checkbox-group{
		width: 80%;
		text-align: left;
		label{
			margin-top: 15px;
		}
	}
	.addimg_father{
		margin-right: 20px;
		.add_img{
			margin-bottom: 15px;
		}
	}
	.chengnuo_xz{
		margin-top: 30px;
	}
	.yuuye{
		width: 80%;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		
	}
	.yuyue_neirongs{
		width: 100%;
		border: 1px solid #eee;
		text-align: left;
		max-width: 43%;
		margin-right: 20px;
		margin-top: 20px;
	}
	.yueyuweihui_content{
		display: flex;
		align-items: flex-start;
		padding: 10px 2%;
		width: 96%;
		
		img{
			width: 80px;
			height: 120px;
			margin-right: 20px;
		}
		.youxetiaojie_text{
			div:nth-child(1){
				font-size: 20px;
				color: #0077AA;
				font-weight: 600;
				margin-bottom: 10px;
			}
			div:nth-child(2),div:nth-child(3){
				font-size: 15px;
				color: #333;
				margin-top: 10px;
				line-height: 23px;
				span{
					color: #0077AA;
				}
			}
		}
	}
	.yuyue_btn{
		width: 80%;
		margin: 10px auto;
		height: 40px;
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		background:-webkit-linear-gradient(left,#0fa3d5, #1b79c2) ;
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
</style>

<template>
	<div class="zaixianzx">
		<div class="tab_zixun">
			<div class="zixuntabactive">群众批评意见</div>
		</div>
		<div class="zixuncontent">
			<div class="flex" style="align-items: flex-start;">
				<span class="text_betten">选择部门<i></i></span><span class="name_span wuzifenkong">*</span>
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
				<span class="text_betten">事项<i></i></span><span class="name_span wuzifenkong">*</span>
				<el-input v-model="submitOpinion.feeTitle" style="width: 82%;" placeholder="请用一句话概括您的问题"
					:class="{'waring_info_border':checkSize_type.feeTitle}" @blur="checkSize(submitOpinion.feeTitle,'feeTitle')"></el-input>
			</div>
			<div class="flex" style="align-items: flex-start;">
				<span class="text_betten_block">遇到的问题<i></i></span><span class="name_span" >*</span>
				<textarea name="" id="" v-model="submitOpinion.feeContent" cols="30" rows="10"
					:class="{'waring_info_border':checkSize_type.feeContent}" @blur="checkSize(submitOpinion.feeContent,'feeContent')"></textarea>
			</div>
			<div class="flex" style="align-items: flex-start;margin: 10px 0;">
				<span class="text_betten_block">意见和建议<i></i></span><span class="name_span" >*</span>
				<textarea name="" id="" v-model="submitOpinion.feeSuggest" cols="30" rows="10"
					:class="{'waring_info_border':checkSize_type.feeSuggest}" @blur="checkSize(submitOpinion.feeSuggest,'feeSuggest')"></textarea>
			</div>
			<div class="shoujihoama">
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">反馈人<i></i></span><span class="name_span wuzifenkong" style="opacity: 0;">*</span>
					<el-input v-model="userName" style="width: 82%;" disabled="disabled"></el-input>
				</div>
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">手机号码<i></i></span><span class="name_span">*</span>
					<el-input v-model="submitOpinion.personPhone" style="width: 82%;" placeholder="请输入手机号码"
						:class="{'waring_info_border':checkSize_type.personPhone}" @blur="checkSize(submitOpinion.personPhone,'personPhone')"></el-input>
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
	import {getCitizenInfo} from '../../../http/api';
	const token = sessionStorage.getItem('token');
	export default {
	  data() {
	    return {
			zx_active:1,
			options: [{
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
			}],
			value: '',
			userName: '',
			//提交意见反馈
			submitOpinion: {
				token: '',
				deptName: '',
				feeTitle: '',
				feeContent: '',
				feeSuggest: '',
				personPhone: '',
				feeModel: '3'
			},
			//验证是否为空
			checkSize_type:{
				feeTitle: false,
				feeContent: false,
				feeSuggest: false,
				personPhone: false
			}
	    }
	  },
	  methods:{
			checkSize(size,dom){
				!size ?this.checkSize_type[dom] = true:this.checkSize_type[dom] = false;
			}
	  	},
		mounted() {
			getCitizenInfo({token:token}).then(success=>{
				this.submitOpinion.personPhone = success.content.cellphone;
				this.userName = success.content.personName;
			})
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
	.text_betten_block{
		display: inline-block;
		margin-top: 14px;
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
	.wuzifenkong{
		margin-left: 25px;
	}
</style>

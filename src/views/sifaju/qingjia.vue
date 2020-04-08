<template>
	<div class="zaixianzixun">
		<div class="zaixian_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/zhize' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item>请假</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="qingjia_neirong">
			<div class="flex" style="align-items: flex-start;">
				<span class="text_betten">申请人员<i></i></span><span class="name_span" style="opacity: 0;">*</span>
				<el-input v-model="input" style="width: 82%;" placeholder="自动获取可更改,不能空"></el-input>
			</div>
			<div class="flex">
				<span class="text_betten textduozi">事项类型<i></i></span><span class="name_span">*</span>
				<el-radio-group v-model="radio2">
				    <el-radio :label="3">事假</el-radio>
				    <el-radio :label="6">病假</el-radio>
				    <el-radio :label="9">婚假</el-radio>
				    <el-radio :label="1">产假</el-radio>
				    <el-radio :label="2">年假</el-radio>
				    <el-radio :label="4">丧假</el-radio>
				    <el-radio :label="5">探亲假</el-radio>
				    <el-radio :label="7">工伤假</el-radio>
				  </el-radio-group>
			</div>
			<div class="shoujihoama1">
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">开始时间<i></i></span><span class="name_span">*</span>
					<el-date-picker
					      v-model="value1"
					      type="datetime"
					      placeholder="选择日期时间"
						  style="width: 82%;"
						  >
					    </el-date-picker>
				</div>
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">结束时间<i></i></span><span class="name_span">*</span>
					<el-date-picker
					      v-model="value1"
					      type="datetime"
					      placeholder="选择日期时间"
						  style="width: 82%;"
						  >
					</el-date-picker>
				</div>
			</div>
			<div class="flex" style="align-items: flex-start;margin: 20px 0;">
				<span class="text_betten">请假时长<i></i></span><span class="name_span" style="opacity: 0;">*</span>
				<el-input v-model="input" style="width: 82%;" placeholder="请输入请假时长"></el-input>
				<img src="../../assets/image/wenhao.png" @click="qingjia" class="yiwen" alt="">
			</div>
			<div class="flex" style="align-items: flex-start;">
				<span class="text_betten textduozi">请假事由<i></i></span><span class="name_span" >*</span>
				<textarea name="" id="" placeholder="请输入请假事由" cols="30" rows="10"></textarea>
			</div>
			<div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
				  <el-button type="primary">提交</el-button>
				<el-button>取消</el-button>
			</div>
		</div>
		<div class="tankuang" v-if="gengduo">
			<div class="gengduo_caozuo">
				<div class="qignjiazd">
					<div>事假制度</div>
					<div>1.请事假年次数不能大于15次，违反将被考核5.00分，扣款50元</div>
					<div>2.请事假年次数不能大于15次，违反将被考核5.00分，扣款50元</div>
					<div>3.请事假年次数不能大于15次，违反将被考核5.00分，扣款50元</div>
				</div>
				<div class="gengduo_toubu" @click="close">
					知道了
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	      input: '',
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
		  tableData: [{
			date: '1',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1518 弄'
		  }, {
			date: '1',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1517 弄'
		  }, {
			date: '1',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1519 弄'
		  }, {
			date: '1',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1516 弄'
		  }],
		  zixun_active:2,
		  value1:'',
		  gengduo:false
	    }
	  },
	  methods:{
		  zixuntab(e){
			  this.zixun_active=e
		  },
		  qingjia(){
			  this.gengduo = true
		  },
		  close(){
			  this.gengduo = false
		  }
	  }
	}
</script>

<style lang="scss">
	.zaixianzixun{
		width: 100%;
		height: 100%;
	}
	.zaixian_top{
		width: 95%;
		height: 70px;
		padding-left: 5%;
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
</style>

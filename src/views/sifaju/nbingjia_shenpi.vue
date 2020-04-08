<template>
	<div class="p_conright">
		<div class="tightp_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
				<el-breadcrumb-item>张三 病假0.5天</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="law_shenpi">
			<div>
				<el-steps :active="2" align-center>
				  <el-step title="病假申请" description="这是一段很长很长很长的描述性文字"></el-step>
				  <el-step title="呈报单位意见" description="这是一段很长很长很长的描述性文字"></el-step>
				  <el-step title="分管领导意见" description="这是一段很长很长很长的描述性文字"></el-step>
				</el-steps>
			</div>
			<div class="shenpi_create">
				<div class="shenpi_one">
					<div class="tab1">病假申请</div>
				</div>
				<div class="shenheone_text">
					<div class="text_aa">
						<div>
							<div class="flex">
								<span class="text_betten">申请人员<i></i></span>： 丁月红
							</div>
						</div>
						<div>
							<div class="flex">
								<span class="text_betten">请假类别<i></i></span>：病假
							</div>
						</div>
					</div>
					<div class="text_aa">
						<div>
							<div class="flex">
								<span class="text_betten">开始时间<i></i></span>： 2018年9月15日 10：23
							</div>
						</div>
						<div>
							<div class="flex">
								<span class="text_betten">结束时间<i></i></span>： 2018年9月15日 10：23
							</div>
						</div>
					</div>
					<div>
						<div class="flex">
							<span class="text_betten">请假时长<i></i></span>： 张某、王某、赵某
						</div>
						<div class="flex">
							<span class="text_betten">请假事由<i></i></span>：<textarea name="" id="" v-model="text" cols="30" rows="10"></textarea>
						</div>
					</div>
				</div>
			</div>
			<div class="shenpi_create">
				<div class="shenpi_one">
					<div class="tab1">科室审核</div>
					<div class="tab1_right">
						<span>超时：59分钟/23.9小时/1.9天</span>
						<img src="../../assets/image/u552.png" alt="">
						<img src="../../assets/image/u554.png" alt="">
					</div>
				</div>
				<div class="shenheone_text">
					<div>
						<div class="flex">
							<span class="text_betten">审核结果<i></i></span>：同意
						</div>
						<div class="flex">
							<span class="text_betten">审批意见<i></i></span><span style="color: #ff0000;font-size: 30px;opacity: 0;">*</span>
							<textarea name="" id="" :value="text" cols="30" rows="10" disabled="disabled"></textarea>
						</div>
					</div>
				</div>
				
			</div>
			<div class="shenpi_create">
				<div class="shenpi_one">
					<div class="tab1">分管领导审批</div>
					<div class="tab1_right">
						<span>超时：59分钟/23.9小时/1.9天</span>
						<img src="../../assets/image/u552.png" alt="">
						<img src="../../assets/image/u554.png" alt="">
					</div>
				</div>
				<div class="shenheone_text">
					<div>
						<div class="flex">
							<span class="text_betten">审核结果<i></i></span>：
							<el-radio v-model="radio" label="1">同意</el-radio>
							<el-radio v-model="radio" label="2">不同意</el-radio>
						</div>
						<div class="flex">
							<span class="text_betten">审批意见<i></i></span><span style="color: #ff0000;font-size: 30px;opacity: 0;">*</span>
							<textarea name="" id="" :value="text" cols="30" rows="10"></textarea>
						</div>
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
  export default {
    data() {
      return {
        tableData: [{
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
        }],
		radio: '1',
		text:'xxxxxxxxxxxxxx',
		checkList: ['选中且禁用','复选框 A'],
		options: [{
		  value: '选项1',
		  label: '张师傅'
		}, {
		  value: '选项2',
		  label: '李师傅'
		}],
		value: '',
		chekaung:[
			{
			  value: '选项1',
			  label: '完好'
			}
		]
      }
    }
  }
</script>

<style lang="scss">
	.law_shenpi{
		width: 94%;
		padding: 20px 3%;
	}
	.shenpi_create{
		width: 100%;
	}
	.tab1{
		width: 200px;
		height: 35px;
		border-radius:10px 10px 0 0 ;
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
	}
	.shenpi_one{
		border-bottom: 3px solid #1a7cc3;
		margin-top: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.flex{
		display: flex;
		align-items: center;
	}
	.flex img{
		width: 100px;
	}
	.flex .el-table th{
		background: #1884c7 !important;
		color: #fff;
	}
	.tab1_right{
		display: flex;
		align-items: center;
		color: #FF6034;
	}
	.tab1_right img{
		width: 35px;
		height: 30px;
		margin-left: 20px;
	}
	.tab1_right img:nth-child(2){
		width: 40px;
	}
	.flex textarea{
		width: 80%;
		height: 150px;
		padding: 10px;
		resize:none;
	}
	.zhuiwen,.zhuiwenhui{
		color: #0FA3D5;
		display: flex;
		align-items: flex-start;
		width: 80%;
		text-align: left;
		line-height: 30px;
		margin-left: 15px;
		border-bottom: 1px dashed #eee;
	}
	.zhuiwen>div:nth-child(1),.zhuiwenhui>div:nth-child(1){
		width: 120px;
	}
	.zhuiwenhui{
		color: #333;
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

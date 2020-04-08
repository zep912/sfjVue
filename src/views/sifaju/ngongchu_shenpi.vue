<template>
	<div class="p_conright">
		<div class="tightp_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
				<el-breadcrumb-item>张三 公出0.5天</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="law_shenpi">
			<div>
				<el-steps :active="2" align-center>
				  <el-step title="公出申请" description="这是一段很长很长很长的描述性文字"></el-step>
				  <el-step title="科长审核" description="这是一段很长很长很长的描述性文字"></el-step>
				  <el-step title="分管领导审核" description="这是一段很长很长很长的描述性文字"></el-step>
				</el-steps>
			</div>
			<div class="shenpi_create">
				<div class="shenpi_one">
					<div class="tab1">公出申请</div>
				</div>
				<div class="shenheone_text">
					<div class="text_aa">
						<div>
							<div class="flex">
								<span class="text_betten">申请人员<i></i></span>： 丁月红
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
							<span class="text_betten">公出时长<i></i></span>：1天
						</div>
						<div class="flex">
							<span class="text_betten">公出事由<i></i></span>：<textarea name="" id="" v-model="text" cols="30" rows="10"></textarea>
						</div>
						<div class="flex">
							<span class="text_betten">是否用车<i></i></span>： 否
						</div>
					</div>
				</div>
			</div>
			<div class="shenpi_create">
				<div class="shenpi_one">
					<div class="tab1">科长审核</div>
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
							<div class="shenpijijian">
								<div class="shouxjp">
									<el-button size="small">手写</el-button>
									<el-button size="small" type="primary">键盘</el-button>
								</div>
								<div>
									<textarea name="" id="" :value="text" cols="30" rows="10"></textarea>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
			<div class="shenpi_create">
				<div class="shenpi_one">
					<div class="tab1">公出汇报</div>
					<div class="tab1_right">
						<span>超时：59分钟/23.9小时/1.9天</span>
						<img src="../../assets/image/u552.png" alt="">
						<img src="../../assets/image/u554.png" alt="">
					</div>
				</div>
				<div class="shenheone_text">
					<div class="flex" style="align-items: flex-start;">
						<span class="text_betten">汇报人员<i></i></span><span class="name_span" style="opacity: 0;">*</span>
						<el-input  style="width: 82%;" placeholder="张三 自动获取"></el-input>
						
					</div>
					<div class="shoujihoama1">
						<div class="flex" style="align-items: flex-start;">
							<span class="text_betten">开始时间<i></i></span><span class="name_span">*</span>
							<el-input  style="width: 82%;" placeholder="请输入申请人员"></el-input>
							
						</div>
						<div class="flex" style="align-items: flex-start;">
							<span class="text_betten">结束时间<i></i></span><span class="name_span">*</span>
							<el-input  style="width: 82%;" placeholder="请输入用车科室"></el-input>
							
						</div>
					</div>
					<div class="flex" style="margin-top: 20px;">
						<span class="text_betten">汇报内容<i></i></span><span class="name_span">*</span>
						<textarea name="" id="" cols="30" rows="10"></textarea>
					</div>
					<div class="flex" style="margin-top: 20px;">
						<span class="text_betten">拍照说明<i></i></span><span class="name_span">*</span>
						<el-upload
						  action="https://jsonplaceholder.typicode.com/posts/"
						  list-type="picture-card"
						  :on-preview="handlePictureCardPreview"
						  :on-remove="handleRemove">
						  <i class="el-icon-plus"></i>
						</el-upload>
					</div>
					<div class="flex" style="margin-top: 20px;">
						<span class="text_betten">带回物品及资料<i></i></span><span class="name_span" style="opacity: 0;">*</span>
						<textarea name="" id="" cols="30" rows="10"></textarea>
					</div>
				</div>
			</div>
			<div class="shenpi_create">
				<div class="shenpi_one">
					<div class="tab1">公出汇报</div>
					<div class="tab1_right">
						<span>超时：59分钟/23.9小时/1.9天</span>
						<img src="../../assets/image/u552.png" alt="">
						<img src="../../assets/image/u554.png" alt="">
					</div>
				</div>
				<div class="shenheone_text">
					<div class="flex" style="align-items: flex-start;">
						<span class="text_betten">汇报人员<i></i></span><span class="name_span" style="opacity: 0;">*</span>
						<div class="content_div">
							张三
						</div>
					</div>
					<div class="shoujihoama1">
						<div class="flex" style="align-items: flex-start;">
							<span class="text_betten">开始时间<i></i></span><span class="name_span" style="opacity: 0;">*</span>
							<div class="content_div">
								2018-06-30
							</div>
						</div>
						<div class="flex" style="align-items: flex-start;">
							<span class="text_betten">结束时间<i></i></span><span class="name_span" style="opacity: 0;">*</span>
							<div class="content_div">
								2018-06-30
							</div>
						</div>
					</div>
					<div class="flex" style="margin-top: 20px;">
						<span class="text_betten">汇报内容<i></i></span><span class="name_span" style="opacity: 0;">*</span>
						<textarea name="" id="" cols="30" rows="10" disabled="disabled"></textarea>
					</div>
					<div class="flex" style="margin-top: 20px;">
						<span class="text_betten">拍照说明<i></i></span><span class="name_span" style="opacity: 0;">*</span>
						<img src="../../assets/image/cshioinkj.png" alt="">
					</div>
					<div class="flex" style="margin-top: 20px;">
						<span class="text_betten">带回物品及资料<i></i></span><span class="name_span" style="opacity: 0;">*</span>
						<textarea name="" id="" cols="30" rows="10"></textarea>
					</div>
					<div class="flex" style="margin-top: 20px;align-items: flex-start;">
						<span class="text_betten">公出轨迹<i></i></span><span class="name_span" style="opacity: 0;">*</span>
						<div style="width: 82%;">
							<div class="content_div">公出地点：XXXXXXXX</div>
							<div class="content_div">公出时间：2019-04-30 9：00至13：40</div>
							<div style="width: 100%;display: flex;align-items: flex-start;justify-content: space-between;">
								<img src="../../assets/image/cshioinkj.png" style="width:49%" alt="">
								<div style="width: 49%;">
									<div class="content_div">
										公出记录 ：
									</div>
									<div style="width: 94%;padding: 10px 3%;border: 1px solid #666;display: flex;align-items: center;justify-content: space-between;">
										<div>
											<div class="content_div">记录时间：2018-4-3</div>
											<div class="content_div">记录地点：基督教发</div>
										</div>
										<div>
											<img src="../../assets/image/cshioinkj.png" style="width: 100px;" alt="">
										</div>
									</div>
								</div>
							</div>
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
	.shenpijijian{
		width: 82%;
		border: 1px solid #666;
		textarea{
			border: 0;
			width: 95%;
		}
	}
	.shouxjp{
		width: 96%;
		padding: 0 2%;
		height: 50px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #666;
	}
	.content_div{
		padding: 15px 0;
		color: #333;
		text-align: left;
	}
</style>

<template>
	<div class="p_conright peixunxiangqing">
		<div class="top_manalvs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item :to="{ path: 'manapeixun' }">培训管理</el-breadcrumb-item>
			  <el-breadcrumb-item>厂级安全教育-新员工培训</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="xianchang_content">
			<div class="flex" style="align-items: flex-start;">
				<span class="text_betten">培训主题<i></i></span><span class="name_span">*</span>
				<!-- <el-input v-model="submitConsultLocale.consultData.personName" style="width: 82%;" placeholder="请输入培训主题"></el-input> -->
				<div class="flex_textdiv">
					施工安全阿衡产责任
				</div>
			</div>
			<div class="shoujihoama1">
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">培训方式<i></i></span><span class="name_span" style="opacity: 0;">*</span>
					<div class="flex_textdiv">
						施工安全阿衡产责任
					</div>
				</div>
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">适用岗位<i></i></span><span class="name_span">*</span>
					<div class="flex_textdiv">
						施工安全阿衡产责任
					</div>
				</div>
			</div>
			<div class="shoujihoama1">
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">培训类型<i></i></span><span class="name_span">*</span>
					<div class="flex_textdiv">
						施工安全阿衡产责任
					</div>
				</div>
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">培训状态<i></i></span><span class="name_span" style="opacity: 0;">*</span>
					<div class="flex_textdiv">
						施工安全阿衡产责任
					</div>
				</div>
			</div>
			<div class="shoujihoama1">
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">开始时间<i></i></span><span class="name_span">*</span>
					<div class="kaishi_time">
						<div>
							<input type="text" value="2018">
						</div>
						<div>年</div>
						<div>
							<input type="text" value="04">
						</div>
						<div>月</div>
						<div>
							<input type="text" value="10">
						</div>
						<div>日</div>
						<div>
							<input type="text" value="12">
						</div>
						：
						<div>
							<input type="text" value="00">
						</div>
					</div>
				</div>
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">截止时间<i></i></span><span class="name_span">*</span>
					<div class="kaishi_time">
						<div>
							<input type="text" value="2018">
						</div>
						<div>年</div>
						<div>
							<input type="text" value="04">
						</div>
						<div>月</div>
						<div>
							<input type="text" value="10">
						</div>
						<div>日</div>
						<div>
							<input type="text" value="12">
						</div>
						：
						<div>
							<input type="text" value="00">
						</div>
					</div>
				</div>
			</div>
			<div class="flex" style="align-items: flex-start;margin: 15px 0;" v-if="peixunseldata==1">
				<span class="text_betten">培训地点<i></i></span><span class="name_span">*</span>
				<div class="flex_textdiv">
					施工安全阿衡产责任
				</div>
			</div>
			<div class="flex" style="align-items: flex-start;" v-if="peixunseldata==1">
				<span class="text_betten" style="line-height: 20px;">培训主要内容概述<i></i></span><span class="name_span">*</span>
				<div class="flex_textdiv">
					施工安全阿衡产责任
				</div>
			</div>
			<div class="flex" style="align-items: flex-start;margin-top: 10px;" v-if="peixunseldata==2">
				<span class="text_betten">培训课件<i></i></span><span class="name_span">*</span>
				<el-input v-model="submitConsultLocale.consultData.personName" style="width: 71.4%;" placeholder="请选择课件"></el-input>
				<div class="xuanzekj_btn">选择课件</div>
			</div>
			<div class="shoujihoama1">
				<div class="flex">
					<span class="text_betten textduozi">公开类型<i></i></span><span class="name_span">*</span>
					<div class="flex_textdiv">
						公开
					</div>
				</div>
				<div class="flex" style="align-items: flex-start;">
					<span class="text_betten">负责人<i></i></span><span class="name_span">*</span>
					 <div class="flex_textdiv">
					 	张三
					 </div>
				</div>
			</div>
			<div class="shoujihoama1">
				<div class="flex">
					<span class="text_betten textduozi">培训人数<i></i></span><span class="name_span" style="opacity: 0;">*</span>
					<div class="flex_textdiv">
						11
					</div>
				</div>
			</div>
			<div class="flex" style="align-items: flex-start;margin-top: 20px;">
				<span class="text_betten textduozi">培训人员<i></i></span><span class="name_span">*</span>
				<div style="width: 82%;">
					<el-table
					    :data="tableData"
					    border
					    style="width: 100%">
					    <el-table-column
					      type="index"
					      label="序号"
					      width="80">
					    </el-table-column>
					    <el-table-column
					      prop="name"
					      label="姓名">
					    </el-table-column>
					    <el-table-column
					      prop="date"
					      label="所属律所">
					    </el-table-column>
					    <el-table-column
					      prop="date"
					      label="联系电话"
					      width="120">
					    </el-table-column>
					    <el-table-column
					      fixed="right"
					      label="操作"
					      width="100">
					      <template slot-scope="scope">
					        <el-button @click="handleClick(scope.row)" style="color: #ff0000;" type="text" size="small">删除</el-button>
					      </template>
					    </el-table-column>
					  </el-table>
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
		};
    },
	methods: {
		
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
	.flex_textdiv{
		font-size: 16px;
		color: #333;
		padding: 15px 0;
	}
</style>

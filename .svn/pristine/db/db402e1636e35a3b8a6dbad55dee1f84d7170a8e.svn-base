<template>
	<div class="p_conright">
		<div class="top_manalvs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
			<el-breadcrumb-item>值班设置</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="xianchang_content">
			<div class="zhiban_biaoti">
				<div>值班列表</div>
				<el-button type="primary" size="small" @click="handleEdit('add')">新增</el-button>
				
			</div>
			<div class="biaoge_content" style="width: 100%;padding: 0;">
				<el-table
				    :data="dutyList" border style="width: 100%">
					<el-table-column  label="序号" width="60">
						<template slot-scope="scope"><span>{{scope.$index+(pageIndex - 1) * pageSize + 1}} </span></template>
					</el-table-column>
				    <el-table-column prop="planName" label="标题"></el-table-column>
				    <el-table-column prop="planContent" label="内容"></el-table-column>
					<el-table-column prop="lawyerCount" label="值班人数"></el-table-column>
					<el-table-column prop="planStartDate,planEndDate" label="值班时间">
						<template slot-scope="scope">
							<span>{{scope.row.planStartDate}}--{{scope.row.planEndDate}}</span>
						</template>
					</el-table-column>
					<el-table-column prop="dutyLawyerCount" label="班次人数"></el-table-column>
					<el-table-column prop="dutyDuration" label="班次时长"></el-table-column>
					<el-table-column prop="planStatusDesc" label="状态"></el-table-column>
					<el-table-column label="操作" prop="planId">
						<template slot-scope="scope">
							<el-button size="text" @click="handleEdit('edit',scope.row.planId)">修改</el-button>
							<el-button size="text" type="danger" @click="handleEdit('delete',scope.row.planId)">删除</el-button>
							<el-button size="text" @click="handleEdit('view',scope.row.planId)">查看</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>

<script>
import {getDutyPlanList,delDutyPlan} from '../../http/api';
  export default {
    data() {
      return {
		// dutyList: [],   //值班表列表
		dutyList: [
			{ planId: 2,planStartDate:'22222',planEndDate: '24234'}
		],
		pageIndex:1,
      }
	},
	mounted(){
		this.getDutyList();
	},
	methods: {
		handleEdit(type,id){
			const token = sessionStorage.getItem('token');
			if(type == 'edit'){
				this.$router.push({ path: 'xinzengzhiban?id='+id+'&type='+1 });
			}else if(type == 'delete'){
				this.$confirm('是否删除值班任务，删除将不可恢复！', '提示', {
					cancelButtonText: '取消',
					confirmButtonText: '确定',
					type: 'warning'
				}).then(() => {
					var _that = this;
					delDutyPlan({ token:token,planId:id }).then(success=>{
						if(success.code == 200){
							this.$message({
								type: 'success',
								message: '删除成功'
							}); 
						}
						_that.getDutyList();
					});
					
				})
			}else if(type == 'view'){
				this.$router.push({ path: 'xinzengzhiban?id='+id+'&type='+2 });
			}else if(type == 'add'){
				this.$router.push({ path: 'xinzengzhiban?type='+3 });
			}
		},
		//获取值班计划表
		async getDutyList(){
			const token = sessionStorage.getItem('token');
			let dutyList = await getDutyPlanList({ token: token });
			this.dutyList = dutyList.content.dataList;
		},
	}
  }
</script>

<style lang="scss">
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
	.zhiban_biaoti{
		width: 100%;
		padding: 25px 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		div:nth-child(1){
			font-size: 18px;
			color: #333;
		}
		
	}
</style>

<template>
	<div class="kaoshi">
		<div class="toubu_jianbian"></div>
		<div class="zwyou_top">
			<div class="xuanzhong_biaoqian">考试动态</div>
			<div>共计：234篇</div>
		</div>
		<div class="zwyou_content">
			<div class="zwyou_conlist" v-for="iten in 10">
				<div class="zhengwugk">
					
					香港、澳门律师事务所主内代表机构设立审核
				</div>
				<div class="zhengwu_time">2018-12-14</div>
			</div>
			
		</div>
		<div>
			<el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page.sync="currentPage3"
			      :page-size="100"
			      layout="prev, pager, next, jumper"
			      :total="1000">
			    </el-pagination>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.kaoshi{
		width: 96%;
		padding: 20px 2%;
	}
	.zwyou_top{
		width: 100%;
		display: flex;
		align-items: center;
		font-size: 15px;
	}
	.xuanzhong_biaoqian{
		width: 100px;
		height: 40px;
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 20px;
	}
	.zwyou_content{
		width: 100%;
		
		.zwyou_conlist{
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px dashed #eee;
			height: 45px;
			font-size: 15px;
			.biaodian{
				width: 3px;
				height: 3px;
				background: #333;
				margin-right: 20px;
			}
			.zhengwugk{
				width: 80%;
				display: flex;
				align-items: center;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
		
	}
	.zhengwu_time{
		color: #999;
		font-size: 12px;
	}
</style>

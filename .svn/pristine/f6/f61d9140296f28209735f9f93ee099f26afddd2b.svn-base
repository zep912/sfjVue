<template>
	<div class="kaoqin">
		<div class="kaoqintop">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
				<el-breadcrumb-item>考勤排名</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="time_top">
			<img src="../../assets/image/left.png" alt="">
			<div class="time_content">
				2018年10月27日 09：00
			</div>
			<img src="../../assets/image/right.png" alt="">
		</div>
		<div class="qiandao_content">
			<div>
				<div class="qiandao_text">
					签到
				</div>
				<div class="qiandaocontent">
					<div v-for="item in 10">
						<div>
							1
							<img src="../../assets/image/cshioinkj.png" class="person_avatar" alt="">
							<div class="person_names">
								<div>人员姓名</div>
								<div>部门名称</div>
							</div>
						</div>
						<div class="wchi">07：10</div>
						<!-- 迟到类名为'chidao' -->
					</div>
				</div>
			</div>
			<div>
				<div class="qiandao_text">
					签退
				</div>
				<div class="qiandaocontent">
					<div v-for="item in 10">
						<div>
							1
							<img src="../../assets/image/cshioinkj.png" class="person_avatar" alt="">
							<div class="person_names">
								<div>人员姓名</div>
								<div>部门名称</div>
							</div>
						</div>
						<div class="wchi">07：10</div>
						<!-- 迟到类名为'chidao' -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.kaoqin{
		width: 100%;
	}
	.kaoqintop{
		width: 96%;
		padding: 0 2%;
		height: 70px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #eee;
	}
	.time_top{
		width: 100%;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		.time_content{
			margin: 0 25px;
			font-size: 25px;
			font-weight: 600;
		}
		img{
			width: 28px;
			height: 28px;
		}
	}
	.qiandao_content{
		width: 92%;
		padding: 20px 4%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.qiandao_content>div{
		width: 48%;
	}
	.qiandao_text{
		width: 100%;
		height: 40px;
		font-size: 22px;
		font-weight: 600;
	}
	.qiandaocontent{
		width: 100%;
		border: 1px solid #666;
		border-bottom: 0;
	}
	.qiandaocontent>div{
		width: 94%;
		padding: 0 3%;
		height: 55px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #666;
		div{
			display: flex;
			align-items: center;
		}
	}
	.person_avatar{
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 1px solid #eee;
		margin: 0 20px 0 30px;
	}
	.qiandaocontent .person_names{
		display: block;
		div:nth-child(1){
			font-size: 15px;
			color: #333;
		}
		div:nth-child(2){
			font-size: 12px;
			color: #999;
			margin-top: 8px;
		}
	}
	.wchi{
		color: #2BE200;
	}
	.chidao{
		color: #FF0000;
	}
</style>

<template>
	<!-- <div class="daichuli_father"> -->
		<div class="zhize_you">
		<div class="zhize_toubu">待处理</div>
		<div class="zhize_neirong">
			<div class="daichu_shijian">
				<div>
					<el-select v-model="value" style="width:90px" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<div class="time">年</div>
					<el-select v-model="value" style="width:90px" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<div class="time">月</div>
					<el-select v-model="value" style="width:90px" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<div class="time">日</div>
				</div>
				<div>
					自定义
					<el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
					 style="width: 260px;margin-left: 10px;">
					</el-date-picker>
				</div>
				<div>
					<div class="sousuo">
						<input type="text" placeholder="请输入关键字查询">
						<div class="search">
							<img src="../../../assets/image/u2290.png" alt="">
						</div>
					</div>
				</div>
			</div>
			<div class="daichu_nirong">
				<div class="daichuli">
					<div class="daichuli_top">
						<div></div>
						待我处理（33）
					</div>
					<div class="dauchuli_neirong">
						<div class="daichuli_one">
							<div class="daichuli_left">
								<div>待响应</div>
								<div class="daichuli_zhong">
									<div>学校门口限行牌写的是8点到9点，我7点半被拍了，能申诉吗</div>
									<div>我爸在农村给别人种地现在欠我们五万元，现在他家还有好多人要账，但是只有我家是工资，他们都是买化那就发得分能力考试哪个款式风格</div>
								</div>
							</div>
							<div class="daichuli_you">
								<div>超时：2小时</div>
								<div>06-25 13:20</div>
							</div>
						</div>
						<div class="daichuli_one">
							<div class="daichuli_left">
								<div>待响应</div>
								<div class="daichuli_zhong">
									<div>学校门口限行牌写的是8点到9点，我7点半被拍了，能申诉吗</div>
									<div>我爸在农村给别人种地现在欠我们五万元，现在他家还有好多人要账，但是只有我家是工资，他们都是买化那就发得分能力考试哪个款式风格</div>
								</div>
							</div>
							<div class="daichuli_you">
								<div>超时：2小时</div>
								<div>06-25 13:20</div>
							</div>
						</div>
						<div class="daichuli_one">
							<div class="daichuli_left">
								<div>待响应</div>
								<div class="daichuli_zhong">
									<div>学校门口限行牌写的是8点到9点，我7点半被拍了，能申诉吗</div>
									<div>我爸在农村给别人种地现在欠我们五万元，现在他家还有好多人要账，但是只有我家是工资，他们都是买化那就发得分能力考试哪个款式风格</div>
								</div>
							</div>
							<div class="daichuli_you">
								<div>超时：2小时</div>
								<div>06-25 13:20</div>
							</div>
						</div>
						<div class="gengsduo">点击加载更多</div>
					</div>
				</div>
				<div class="daichuli yihchuli">
					<div class="daichuli_top yihchuli">
						<div class="yihchulibeijing"></div>
						我已处理（超时）（33）
					</div>
					<div class="dauchuli_neirong">
						<div class="daichuli_one">
							<div class="daichuli_left">
								<div class="yihchulibeijing">待响应</div>
								<div class="daichuli_zhong">
									<div class="yihchuli">学校门口限行牌写的是8点到9点，我7点半被拍了，能申诉吗</div>
									<div>我爸在农村给别人种地现在欠我们五万元，现在他家还有好多人要账，但是只有我家是工资，他们都是买化那就发得分能力考试哪个款式风格</div>
								</div>
							</div>
							<div class="daichuli_you">
								<div>超时：2小时</div>
								<div>06-25 13:20</div>
							</div>
						</div>
					</div>
				</div>
				<div class="daichuli yichuli">
					<div class="daichuli_top yichuli">
						<div class="yichulibeijing"></div>
						我已处理（超时）（33）
					</div>
					<div class="dauchuli_neirong">
						<div class="daichuli_one">
							<div class="daichuli_left">
								<div class="yichulibeijing">待审批</div>
								<div class="daichuli_zhong">
									<div class="yichuli">学校门口限行牌写的是8点到9点，我7点半被拍了，能申诉吗</div>
									<div>我爸在农村给别人种地现在欠我们五万元，现在他家还有好多人要账，但是只有我家是工资，他们都是买化那就发得分能力考试哪个款式风格</div>
								</div>
							</div>
							<div class="daichuli_you">
								<div>超时：2小时</div>
								<div>06-25 13:20</div>
							</div>
						</div>
					</div>
				</div>
				<div class="daichuli yiguidang">
					<div class="daichuli_top yiguidang">
						<div class="yiguidangbeijing"></div>
						2017-07-10
					</div>
					<div class="dauchuli_neirong">
						<div class="daichuli_one">
							<div class="daichuli_left">
								<div class="yiguidangbeijing">已归档</div>
								<div class="daichuli_zhong">
									<div class="yiguidang">学校门口限行牌写的是8点到9点，我7点半被拍了，能申诉吗</div>
									<div>我爸在农村给别人种地现在欠我们五万元，现在他家还有好多人要账，但是只有我家是工资，他们都是买化那就发得分能力考试哪个款式风格</div>
								</div>
							</div>
							<div class="daichuli_you">
								<div>超时：2小时</div>
								<div>06-25 13:20</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
		</div>
	<!-- </div> -->
</template>

<script>
</script>

<style lang="scss">
	.daichuli_father{
		height: 100%;
	}
	.zhize_toubu {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 70px;
		border-bottom: 1px solid #999;
		font-size: 20px;
	}

	.zhize_you {
		width: 70%;
		height: 100%;
	}

	.zhize_neirong {
		width: 98%;
		padding: 0 1%;
		height: 90%;
		overflow: auto;
	}

	.zhize_neirong>div {
		width: 100%;
		margin-top: 20px;
	}

	.title {
		display: flex;
		align-items: center;
		font-size: 17px;
	}

	.title>div:nth-child(1) {
		width: 4px;
		height: 18px;
		background: #169bd4;
		border-radius: 10px;
		margin-right: 10px;

	}

	.liangqi {
		justify-content: space-between;
		width: 100%;
	}
	.xuexi_you {
		display: flex;
		align-items: center;
	}

	.xuexi_you>div:nth-child(1) {
		margin-right: 10px;
		color: #333;
		background: #fff;
	}

	.daichu_shijian {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.daichu_shijian>div {
		display: flex;
		align-items: center;

	}

	.time {
		width: 25px;
		height: 38px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #c0c4cc;
		margin: 0 8px;
		border-radius: 3px;
		color: #666;
	}

	.sousuo {
		width: 200px;
		border: 1px solid #c0c4cc;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 38px;
		overflow: hidden;
		border-radius: 3px;
		padding-left: 3px;
		position: relative;
	}

	.sousuo input {
		border: 0;
		font-size: 15px;
	}

	.sousuo .search {
		position: absolute;
		right: 0;
		background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 38px;

	}

	.daichu_nirong {
		width: 100%;
	}

	.daichuli {
		margin-top: 15px;
	}

	.daichuli_top {
		display: flex;
		align-items: center;
		font-size: 17px;
		color: #ff6666;
	}

	.daichuli_top>div:nth-child(1) {
		width: 3px;
		height: 15px;
		background: #ff6666;
		border-radius: 10px;
		margin-right: 8px;
	}

	.dauchuli_neirong {
		width: 96%;
		padding: 10px 2% 3px 2%;
		background: #F2F2F2;
		border: 1px solid #c0c4cc;
		margin-top: 10px;
	}

	.daichuli_one {
		width: 100%;
		padding: 10px 0;
		border-bottom: 1px solid #c0c4cc;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.daichuli_left {
		display: flex;
		align-items: center;
	}

	.daichuli_left>div:nth-child(1) {
		width: 55px;
		height: 55px;
		border-radius: 5px;
		color: #fff;
		background: #ff6666;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		margin-right: 10px;
	}

	.daichuli_zhong {
		width: 70%;
		text-align: left;

	}

	.daichuli_zhong>div:nth-child(1) {
		color: #ff6666;
		font-size: 18px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.daichuli_zhong>div:nth-child(2) {
		color: #999;
		font-size: 15px;
		margin-top: 10px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.daichuli_you>div:nth-child(1) {
		color: #ff6666;
		font-size: 16px;
	}

	.daichuli_you>div:nth-child(2) {
		color: #666;
		font-size: 14px;
		margin-top: 10px;
	}

	.gengsduo {
		color: #1159A3;
		font-size: 12px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.yihchuli {
		color: #ff9933 !important;
	}

	.yihchulibeijing {
		background: #ff9933 !important;
	}

	.yichuli {
		color: rgba(25, 158, 216, 1) !important;
	}

	.yichulibeijing {
		background: rgba(25, 158, 216, 1) !important;
	}

	.yiguidang {
		color: rgba(153, 153, 153, 1) !important;
	}

	.yiguidangbeijing {
		background: rgba(153, 153, 153, 1) !important;
	}
</style>

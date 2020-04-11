<template>
	<div>
		<div class="header-top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/zhize' }">职责</el-breadcrumb-item>
				<el-breadcrumb-item>值班律师表</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="zhiban">

			<div>
				<el-calendar v-model="newData" id="calendar">
					<!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
					<template
									slot="dateCell"
									slot-scope="{date, data}">
						<!--自定义内容-->
						<div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>
						<div class="calendar-name" v-for="(item, index) in dateList[data.day]" :key="index">
							{{item}}
						</div>
					</template>
				</el-calendar>
			</div>
			<div class="print">
				<div>打印</div>
			</div>
		</div>
	</div>

</template>

<script>
	import {getDutyLawyerList} from '../../http/api.js'
	import {formatDate} from '../../utils/date.js'
	export default {
		data() {
			return {
				newData: new Date(),
				dateList: []
			}
		},
		created() {
			this.init();
		},
		methods:{
			init(){
				const year = this.newData.getFullYear(); // 获取年份
				const month = this.newData.getMonth(); // 获取月份
				const startDate = formatDate(new Date(year, month, 1), 'yyyy-MM-dd'); //获取显示月份的第一天
				const endDate = formatDate(new Date(year, month + 1, 0), 'yyyy-MM-dd'); //获取显示月份的最好一天
				const request = {token: sessionStorage.getItem("token"), startDate, endDate};
				getDutyLawyerList(request).then(res => {
					this.dateList = res.content.dataList.reduce((obj, val) => {
						obj[val.dutyDate] = val.dutyList.map(item => {
							return item.lawyerName
						});
						return obj;
					}, {});
				})
			}
		},
		watch: {
			newData: function (val) {
				this.init();
			}
		}
	}
</script>

<style lang="scss">
	.header-top {
		padding: 20px;
	}
	.zhiban{
		width: 94%;
		padding: 20px 3%;
	}
	.print{
		width: 150px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 50px;
		color: #fff;
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
		margin: 0 auto;
		border-radius: 5px;
	}
	// .calendar-day{
	// 	font-size: 28px;
	// 	margin-bottom: 20px;
	// }
	.calendar-name {
		font-size: 12px;
	}
</style>

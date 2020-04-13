<template>
	<div style="width: 100%; height: 100%">
		<div class="header-top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/zhize' }">职责</el-breadcrumb-item>
				<el-breadcrumb-item>值班律师表</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="content-zhiban" id="printinfo">
			<div class="header-zhiban " ref="header-zhiban">
				<el-button  type="text" @click="upMonth">上个月</el-button>
				<span class="header-title">{{year}}年{{month + 1}}月值班律师表</span>
				<el-button type="text" @click="nextMonth">下个月</el-button>
			</div>
			<div class="zhiban" ref="zhiban">
				<div class="day-item">星期一</div>
				<div class="day-item">星期二</div>
				<div class="day-item">星期三</div>
				<div class="day-item">星期四</div>
				<div class="day-item">星期五</div>
				<div class="day-item">星期六</div>
				<div class="day-item">星期日</div>
				<div v-for="(weekItem, index) in week" :key="`${weekItem}+${index}`">
				</div>
				<div v-for="(dayItem, idx) in endDate" :key="idx" :class="{isDury: isDury(dayItem)}">
					<div class="calendar-day">{{dayItem}}</div>
					<div class="calendar-name" v-for="(item, index) in dateStr(dayItem)" :key="`${dayItem}-${index}`">
						{{item ? item : ''}}
					</div>
				</div>
				<div v-for="(weekItem, index) in endWeek" :key="`${weekItem}-${index}`">
				</div>
				<!--<div>-->
					<!--<el-calendar v-model="newData" id="calendar">-->
						<!--&lt;!&ndash; 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法&ndash;&gt;-->
						<!--<template-->
										<!--slot="dateCell"-->
										<!--slot-scope="{date, data}">-->
							<!--&lt;!&ndash;自定义内容&ndash;&gt;-->
							<!--<div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>-->
							<!--<div class="calendar-name" v-for="(item, index) in dateList[data.day]" :key="index">-->
								<!--{{item}}-->
							<!--</div>-->
						<!--</template>-->
					<!--</el-calendar>-->
				<!--</div>-->
			</div>
		</div>
		<div class="print">
			<el-button type="primary" @click="print">打印</el-button>
		</div>
	</div>

</template>

<script>
	import {getDutyLawyerList} from '../../http/api.js'
	import {formatDate} from '../../utils/date.js'
	import printJs from 'print-js'

	export default {
		data() {
			return {
				newData: new Date(),
				dateList: [],
				daySum: 30,
				year: '',
				month: '',
				week: '',
				endDate: '',
				endWeek: ''
			}
		},
		created() {
			this.init();
		},
		methods:{
			init(){
				this.year = this.newData.getFullYear(); // 获取年份
				this.month = this.newData.getMonth(); // 获取月份
				const startDate = formatDate(new Date(this.year, this.month, 1), 'yyyy-MM-dd'); //获取显示月份的第一天
				this.endDate = new Date(this.year, this.month + 1, 0).getDate();
				const endDate = formatDate(new Date(this.year, this.month + 1, 0), 'yyyy-MM-dd'); //获取显示月份的最好一天
				const week = new Date(this.year, this.month, 1).getDay() || 7; // 获取当月第一天星期几
				this.week = week - 1;
				const endWeek = new Date(this.year, this.month + 1, 0).getDay() || 7; // 获取最后一天星期几
				this.endWeek = 7 - endWeek;
				const request = {token: sessionStorage.getItem("token"), startDate, endDate};
				getDutyLawyerList(request).then(res => {
					this.dateList = res.content.dataList.reduce((obj, val) => {
						obj[val.dutyDate] = val.dutyList.map(item => {
							return item.lawyerName
						});
						return obj;
					}, {});
				})
			},
			// 获取上个月一号的日期 并请求刷新日期及值班信息
			upMonth() {
				this.newData = new Date(this.year, this.month - 1, 1);
				this.init();
			},
			// 获取下个月一号的日期 并请求刷新日期及值班信息
			nextMonth() {
				this.newData = new Date(this.year, this.month + 1, 1);
				this.init();
			},
			// 获取当天日期格式为 yyyy-MM-dd，并获取值班数据
			dateStr(dayItem) {
				const month = this.month + 1;
				const str = `${this.year}-${month >= 10 ? month : '0' + month}-${dayItem >= 10 ? dayItem : '0' + dayItem}`;
				return this.dateList[str] ? this.dateList[str] : []
			},
			// 判断当天是否本人值班
			isDury(dayItem) {
				const duryList = this.dateStr(dayItem);
				return duryList.some(item => item === sessionStorage.getItem('name'));
			},
			// 页面打印
			print() {
				// 打印插件打印指定ID为printinfo的内容
				printJs({ printable: 'printinfo', type: 'html', targetStyles: ['*'], maxWidth: 1100, font_size: '18px' })
			}
		},
	}
</script>

<style lang="scss">
	.header-top {
		padding: 20px;
	}
	.content-zhiban {
		width: 94%;
		margin: 20px 3%;
	}
	.header-zhiban {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.header-title {
			font-size: 18px;
			font-weight: 700;
		}
	}
	.zhiban{
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		border: 1px solid #dcdcdc;
		> div {
			min-height: 36px;
			line-height: 36px;
			padding: 10px 0;
			border: 0.5px solid #dcdcdc;
		}
		.day-item {
			background-color: #0DA9D7;
			padding: 0;
		}
		.isDury {
			background-color: #0DA9D7;
		}
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
	.calendar-day{
	 	font-size: 28px;
		line-height: 30px;
	}
	.calendar-name {
		font-size: 12px;
		line-height: 15px;
	}
</style>

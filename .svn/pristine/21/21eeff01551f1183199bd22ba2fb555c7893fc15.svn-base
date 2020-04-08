<template>
	<div>
		<div class="zhiban_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item>律师值班表</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="zhiban">
			<div>
				<el-calendar v-model="value" id="calendar">
				  <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
					<template
						slot="dateCell"
						slot-scope="{date, data}">
						<div>
							<div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>
							<div v-for="(item,index) in calendarData" :key="index">
								<div v-if="(item.months).indexOf(data.day.split('-').slice(1)[0])!=-1">
									<div v-if="(item.days).indexOf(data.day.split('-').slice(2).join('-'))!=-1">
										<el-tooltip class="item" effect="dark" :content="item.things" placement="right">
											<div class="is-selected">{{item.things}}</div>
										</el-tooltip>
									</div>
									<div v-else></div>
								</div>
								<div v-else></div>
							</div>
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
  export default {
    data() {
      return {
		  	calendarData: [
				{ months: ['09', '11'],days: ['15'],things: '张三' },
				{ months: ['10', '11'], days: ['02'],things: '张三' },
				{ months: ['11'], days: ['02'],things: '李四' },
				{ months: ['11'], days: ['04'],things: '王五' }   
			]
	  }
    }
  }
</script>

<style lang="scss">
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
	.date{
		font-size: 28px;
		margin-bottom: 20px;
	}
	.calendar-day{
		font-size: 28px;
        text-align: center;
        color: #202535;
    }
    .is-selected{
        margin-top: 5px;
    }
    // #calendar .el-button-group>.el-button:not(:first-child):not(:last-child):after{
    //     content: '当月';
    // }
	.zhiban_top{
		width: 96%;
		padding: 0 2%;
		height: 70px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #eee;
	}
	.el-calendar-table thead{
		background-color: #199ED8;
		// color: white;
	}
</style>

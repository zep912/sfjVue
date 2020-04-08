<template>
	<div>
		<div class="zaixian_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/zhize' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item>值班律师表</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="zhiban">
			
			<div>
				<el-calendar v-model="value" id="calendar">
				      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
				      <template
				       slot="dateCell"
				       slot-scope="{date, data}">
				        <!--自定义内容-->
				          <div>
				             <div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>
				                <div v-for="(item,index) in datas" :key="index">
				                   <!-- <div v-if="(item.months).indexOf(data.day.split('-').slice(1)[0])!=-1"> -->
				                     <div v-if="(item.dutyDay).indexOf(data.day.split('-').slice(2).join('-'))!=-1">
				                          <el-tooltip class="item" effect="dark" :content="item.lawyerName" placement="right">
				                               <div class="is-selected">{{item.lawyerName}}</div>
				                          </el-tooltip>
				                       </div>
				                    <div v-else></div>
				                   <!-- </div> -->
				               <!-- <div v-else></div> -->
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
        datas:'',
		calendarData: [
			{ months: ['09', '11'],days: ['15'],things: '看电影' },
			{ months: ['10', '11'], days: ['02'],things: '去公园野炊' },
			{ months: ['11'], days: ['02'],things: '看星星' },
			{ months: ['11'], days: ['02'],things: '看月亮' }   
		],
      }
    },
	created() {
		this.init()
	},
	methods:{
		init(){
			this.$axios.post(`/api/lawyer/getOnDutyList`, {
				"token": sessionStorage.getItem("token"), //类型：String  必有字段  备注：token 用户身份标识
				"yearMonth":"2019-06"  
			}, {
				headers: {
					'Content-Type': 'application/json',
					'Accept-Charset': 'utf-8'
				}
			}).then((respon) => {
				if (respon) {
					this.datas = respon.data.content.dataList
				}
			})
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
	// .calendar-day{
	// 	font-size: 28px;
	// 	margin-bottom: 20px;
	// }
</style>

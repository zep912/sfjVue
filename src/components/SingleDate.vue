<template>
  <div class="flexA">
    <p style="margin-right: 10px;color: #666666;"></p>
    <div id="date" class="timeDate">
      <select class="border ml10" @change="yearChange(this.selYear,1)" v-model="selYear" id="selYear" style="padding-left: 20px">
        <option value="">不选</option>
        <option :value="year" v-for="year in years">{{year}}</option>
      </select>
      <span class="border js-date" @click="quickSel($event,1)" :class="num=='1'?'active':''">年</span>
      <select class="border w36 pl15" v-model="selMonth" @change="monthChange(selYear,selMonth,1)" id="selMonth">
        <option value="">不选</option>
        <option :value="month" v-for="month in months">{{month}}</option>
      </select>
      <span class="border js-date" @click="quickSel($event,2)" :class="num=='2'?'active':''">月</span>
      <select class="border w36 pl15" v-model='selDay' id="selDay" @change="dayChange(1)">
        <option value="">不选</option>
        <option :value="day" v-for="day in days">{{day}}</option>
      </select>
      <span class="border js-date" @click="quickSel($event,3)" :class="num=='3'?'active':''">日</span>
    </div>
  </div>
</template>

<script>
  import {formatDayAndMonth} from "../utils/date";

  export default {
        name: "single-date",
        props:['num'],
        data(){
            return {
              year:'',
              month:'',
             day:'',
             total:'',
             days:[],
             years :[],
             months :[],
             saveMonths : [],
             selYear: '',
             selMonth: '',
             selDay: '',
             dateInfo:{},
            }
        },
        mounted:function(){
          // 左侧日期组件
          const date = new Date();
          this.year = date.getFullYear();
          for (let i = 0; i <= 10; i++) {
            this.years.push(this.year - i);
          }
          this.month = formatDayAndMonth(String(date.getMonth() + 1));
          // 保存月份
          for (let i = 1; i <= 12; i++) {
            this.saveMonths.push(formatDayAndMonth(i));
          }
          this.day = formatDayAndMonth(date.getDate());
          this.yearChange(this.year, 2);
          this.initDate();
        },
        methods:{
          // 左侧时间初始化
          initDate() {
            this.selYear = this.year;
            this.months = this.saveMonths;
            this.selMonth = this.month;
            this.monthChange(this.selYear, this.selMonth, 2);
            //初始化默认到当日
            if(this.num=='3'){
              this.selDay=this.day;
              // eslint-disable-next-line no-undef
              $('#selDay').removeClass('pl8').addClass('pl15');
            } else {
              this.selDay = '';
              // eslint-disable-next-line no-undef
              $('#selDay').removeClass('pl15').addClass('pl8');
            }
          },
          // 年份改变
          yearChange(year, act) {
            if (year) {
              this.months = this.saveMonths;
            } else {
              this.months = [];
            }
            this.selMonth = '';
            this.days = [];
            this.selDay = '';
            // eslint-disable-next-line no-undef
            $('#selMonth,#selDay').removeClass('pl15').addClass('pl8');
            if (act === 1) {
              // eslint-disable-next-line no-undef
              $('.js-date').removeClass('js-date');
            }
          },
          // 月份改变
          monthChange(year, month, act) {
            if (month) {
              // eslint-disable-next-line no-undef
              $('#selMonth').removeClass('pl8').addClass('pl15');
            } else {
              // eslint-disable-next-line no-undef
              $('#selMonth').removeClass('pl15').addClass('pl8');
            }
            this.days = [];
            this.total = this.getDays(year, month);
            // 月份有值
            if (this.total !== 0) {
              for (let i = 1; i <= this.total; i++) {
                this.days.push(formatDayAndMonth(i));
              }
            }
            this.selDay = '';
            // eslint-disable-next-line no-undef
            $('#selDay').removeClass('pl15').addClass('pl8');
            if (act === 1) {
              // eslint-disable-next-line no-undef
              $('.js-date').removeClass('js-date');
            }
          },
          // 天数改变
          dayChange(act) {
            // 日期不选
            if (!this.selDay) {
              // eslint-disable-next-line no-undef
              $('#selDay').removeClass('pl15').addClass('pl8');
            } else {
              // eslint-disable-next-line no-undef
              $('#selDay').removeClass('pl8').addClass('pl15');
            }
            if (act === 1) {
              // eslint-disable-next-line no-undef
              $('.js-date').removeClass('js-date');
            }
          },
          // 快速选择年、月、日
          quickSel(event, num) {
            this.num=num;
            // 日
            if (num === 3) {
              this.selYear = this.year;
              this.yearChange(this.selYear, 2);
              this.selMonth = this.month;
              this.monthChange(this.selYear, this.selMonth, 2);
              this.selDay = this.day;
              // eslint-disable-next-line no-undef
              $('#selMonth').removeClass('pl8').addClass('pl15');
              // eslint-disable-next-line no-undef
              $('#selDay').removeClass('pl8').addClass('pl15');
              // 月
            } else if (num === 2) {
              this.selYear = this.year;
              this.yearChange(this.selYear, 2);
              this.selMonth = this.month;
              this.monthChange(this.selYear, this.selMonth, 2);
              // eslint-disable-next-line no-undef
              $('#selMonth').removeClass('pl8').addClass('pl15');
              // 年
            } else if (num === 1) {
              this.selYear = this.year;
              this.yearChange(this.selYear, 2);
            }
          },
          // 获取选定日期(由父组件调用)
          getDateInfo() {
            // 如果年份有值
            if (this.selYear) {
              // 如果月份有值
              if (this.selMonth) {
                // 如果日有值
                if (this.selDay) {
                  this.dateInfo.startDate = `${this.selYear}-${this.selMonth}-${this.selDay}`;
                  this.dateInfo.startTime = '00:00:00'
                  this.dateInfo.endDate = `${this.selYear}-${this.selMonth}-${this.selDay}`;
                  this.dateInfo.endTime = '23:59:59'
                } else {
                  this.dateInfo.startDate = `${this.selYear}-${this.selMonth}-01`;
                  this.dateInfo.startTime = '00:00:00'
                  this.dateInfo.endDate = `${this.selYear}-${this.selMonth}-${this.getDays(this.selYear, this.selMonth)}`;
                  this.dateInfo.endTime = '23:59:59'
                }
              } else {
                this.dateInfo.startDate = `${this.selYear}-01-01`;
                this.dateInfo.startTime = '00:00:00'
                this.dateInfo.endDate = `${this.selYear}-12-31`;
                this.dateInfo.endTime = '23:59:59'
              }
            }
            console.log(this.dateInfo);
            return this.dateInfo;
          },
          // 获取每月多少天
          getDays(year, month) {
            let total = 0;
            if (month === '01' || month === '03' || month === '05' || month === '07' || month === '08' || month === '10' || month === '12') {
              total = 31;
            }
            if (month === '04' || month === '06' || month === '09' || month === '11') {
              total = 30;
            } else if (month === '02') {
              if ((year % 4 === 0 && year % 100 !== 0) || this.selYear % 400 === 0) {
                total = 29;
              } else {
                total = 28;
              }
            }
            return total;
          },
        }
    }
</script>

<style scoped lang="scss">
  @import "../assets/css/common.css";
  .flexA{
    display: flex;
    align-items: center;
  }
  select.border{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .ml10{
    margin-left:10px;
  }
  .border{
    text-align: center;
    display: inline-block;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border: 1px solid rgba(204, 204, 204, 1);
    border-radius: 5px;
    margin-right:10px;
    font-size: 14px;
    color: #158CCB;
  }
  .js-date.active{
    border:none;
    color:#fff;
    background: -webkit-linear-gradient(315deg, rgba(0, 170, 204, 1) 0%, rgba(0, 170, 204, 1) 0%, rgba(0, 102, 204, 1) 100%, rgba(0, 102, 204, 1) 100%);
    background: -moz-linear-gradient(135deg, rgba(0, 170, 204, 1) 0%, rgba(0, 170, 204, 1) 0%, rgba(0, 102, 204, 1) 100%, rgba(0, 102, 204, 1) 100%);
    background: linear-gradient(135deg, rgba(0, 170, 204, 1) 0%, rgba(0, 170, 204, 1) 0%, rgba(0, 102, 204, 1) 100%, rgba(0, 102, 204, 1) 100%);
  }
  .w36{
    width:50px!important;
    height: 30px;
    line-height: 30px;
  }
  .pl15{
    padding-left: 15px;
  }
  .pl8{
    padding-left: 9px;
  }
  .timeDate select {
    width: 75px;
    height: 30px;
    line-height: 30px;
    text-align: left;
  }

  .timeDate span{
    width: 30px;
    height: 30px;
    line-height: 30px;
  }
</style>

<template>
  <div class="flexA">
    <p style="margin-right: 10px;color: #666666;" class="addDate">{{startName}}</p>
    <div id="date" class="timeDate">
      <select class="border ml10" @change="yearChange(this.selYear,1)" v-model="selYear" id="selYear" style="padding-left: 20px">
        <option value="">不选</option>
        <option :value="year" v-for="(year,index) in years" :key="index">{{year}}</option>
      </select>
      <span class="border js-date" @click="quickSel($event,1)" :class="num=='1'?'active':''">年</span>
      <select class="border w36 pl15" v-model="selMonth" @change="monthChange(selYear,selMonth,1)" id="selMonth">
        <option value="">不选</option>
        <option :value="month" v-for="(month,index) in months" :key="index">{{month}}</option>
      </select>
      <span class="border js-date" @click="quickSel($event,2)" :class="num=='2'?'active':''">月</span>
      <select class="border w36 pl15" v-model='selDay' id="selDay" @change="dayChange(1)">
        <option value="">不选</option>
        <option :value="day" v-for="(day,index) in days" :key="index">{{day}}</option>
      </select>
      <span class="border js-date" @click="quickSel($event,3)" :class="num=='3'?'active':''">日</span>
    </div>

    <div class="user-date flexs">
      <span style="margin:10px 0; width: 120px;" class="custom">自定义</span>
      <div class="select-date">
        <el-date-picker
                v-model="startTime"
                type="date"
                placeholder="选择日期"
                :clearable="false"
                @change="handle($event,1)">
        </el-date-picker>
      </div>


      <span>至</span>
      <div class="select-date">
        <el-date-picker
                v-model="endTime"
                type="date"
                :clearable="false"
                placeholder="选择日期"
                @change="handle($event,2)">
        </el-date-picker>
      </div>

      <span class="clear" @click="clearDatepicker">清除</span>
      <p class="err-col red" style="display: none;font-size: 14px;margin:10px;">开始时间必须小于结束时间</p>
    </div>
  </div>
</template>

<script>
  import {formatDayAndMonth} from "../utils/date";

  export default {
    name: "select-date",
    props:['num','startName'],
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
        startTime:'',
        endTime:'',
        sTi:'',
        eTi:'',

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
          $('#selDay').removeClass('pl8').addClass('pl15');
        } else {
          this.selDay = '';
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
        $('#selMonth,#selDay').removeClass('pl15').addClass('pl8');
        if (act === 1) {
          $('.js-date').removeClass('js-date');
        }
      },
      // 月份改变
      monthChange(year, month, act) {
        if (month) {
          $('#selMonth').removeClass('pl8').addClass('pl15');
        } else {
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
        $('#selDay').removeClass('pl15').addClass('pl8');
        if (act === 1) {
          $('.js-date').removeClass('js-date');
        }
      },
      // 天数改变
      dayChange(act) {
        // 日期不选
        if (!this.selDay) {
          $('#selDay').removeClass('pl15').addClass('pl8');
        } else {
          $('#selDay').removeClass('pl8').addClass('pl15');
        }
        if (act === 1) {
          $('.js-date').removeClass('js-date');
        }
      },
      // 清空右侧选择器日期
      clearDatepicker() {
        this.startTime = null;
        this.endTime = null;
        this.$emit('getTime','',1)
        this.$emit('getTime','',2)
      },
      // 清空上方日期
      handle(time , num) {

        $('.err-col').hide();
        this.selYear = '';
        this.selMonth = '';
        this.selDay = '';
        this.months = [];
        this.days = [];
        // this.num = '';
        $('#selMonth , #selDay').removeClass('pl15').addClass('pl8');
        time = new Date(time);
        time = time.getFullYear() + '-' + (time.getMonth()+ 1 < 10 ? ('0'+ (time.getMonth()+ 1)): time.getMonth()+ 1) + '-' + (time.getDate()< 10 ?('0'+ time.getDate()): time.getDate());
        if ( num === 1) { // 开始时间
          this.sTi = time;
          this.startTime = time;
          if (this.eTi) {
            this.compareTime();
          }
        } else if ( num === 2) { // 结束时间
          this.endTime = time;
          this.eTi = time;
          // console.log(time);
          if (this.sTi) {
            this.compareTime();
          }

        }
        console.log('KKKKKKKKK',time)
        this.$emit('getTime',time,num)
      },

      // 比较开始时间结束时间
      compareTime() {
        const eTimes = this.eTi.replace('-', '/'); // 替换字符，变成标准格式
        const sTimes = this.sTi.replace('-', '/'); // 替换字符，变成标准格式
        const d1 = new Date(Date.parse(sTimes));
        const d2 = new Date(Date.parse(eTimes));
        if (d1 > d2) {
          // alert('开始大于结束');
          $('#start_times .el-input__inner').addClass('err-all');
          $('#end_times .el-input__inner').addClass('err-all');
          $('.err-col').show();
        } else {
          $('#start_times .el-input__inner').removeClass('err-all');
          $('#end_times .el-input__inner').removeClass('err-all');
          $('.err-col').hide();
        }
      },
      // 快速选择年、月、日
      quickSel(event, num) {
        // 解决报错问题，双向绑定num值
        this.$emit('update:num', num);
        // 日
        if (num === 3) {
          this.selYear = this.year;
          this.yearChange(this.selYear, 2);
          this.selMonth = this.month;
          this.monthChange(this.selYear, this.selMonth, 2);
          this.selDay = this.day;
          $('#selMonth').removeClass('pl8').addClass('pl15');
          $('#selDay').removeClass('pl8').addClass('pl15');
          // 月
        } else if (num === 2) {
          this.selYear = this.year;
          this.yearChange(this.selYear, 2);
          this.selMonth = this.month;
          this.monthChange(this.selYear, this.selMonth, 2);
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
              this.dateInfo.startTime = `${this.selYear}-${this.selMonth}-${this.selDay}`;
              this.dateInfo.endTime = `${this.selYear}-${this.selMonth}-${this.selDay}`;
            } else {
              this.dateInfo.startTime = `${this.selYear}-${this.selMonth}-01`;
              this.dateInfo.endTime = `${this.selYear}-${this.selMonth}-${this.getDays(this.selYear, this.selMonth)}`;
            }
          } else {
            this.dateInfo.startTime = `${this.selYear}-01-01`;
            this.dateInfo.endTime = `${this.selYear}-12-31`;
          }
        }
        if(this.startTime && this.endTime){
          this.dateInfo.startTime = this.startTime;
          this.dateInfo.endTime = this.endTime;
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
      // 清空上方日期
      // handle(time , num) {
      //   $('.err-col').hide();
      //   this.selYear = '';
      //   this.selMonth = '';
      //   this.selDay = '';
      //   this.months = [];
      //   this.days = [];
      //   this.num = null;
      //   $('#selMonth , #selDay').removeClass('pl15').addClass('pl8');
      //   time = new Date(time);
      //   time = time.getFullYear() + '-' + (time.getMonth()+ 1 < 10 ? ('0'+ (time.getMonth()+ 1)): time.getMonth()+ 1) + '-' + (time.getDate()< 10 ?('0'+ time.getDate()): time.getDate());
      //   if ( num === 1) { // 开始时间
      //     this.sTi = time;
      //     this.startTime = time;
      //     if (this.eTi) {
      //       this.compareTime();
      //     }
      //   } else if ( num === 2) { // 结束时间
      //     this.endTime = time;
      //     this.eTi = time;
      //     // console.log(time);
      //     if (this.sTi) {
      //       this.compareTime();
      //     }
      //   }
      // },
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/common.scss";
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
    @include responsive(medium-screens) {
      margin-left:5px;
    }

  }
  .addDate{
    @include responsive(medium-screens) {
      margin-right:5px !important;
    }
  }
  .custom{
    @include responsive(medium-screens) {
      width:100px !important;
    }
  }
  .border{
    text-align: center;
    display: inline-block;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border: 1px solid rgba(204, 204, 204, 1);
    /*border-radius: 5px;*/
    margin-right:10px;
    font-size: 14px;
    color: #158CCB;
    @include responsive(medium-screens) {
      margin-right:5px;
    }
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
    @include responsive(medium-screens) {
      width:40px!important;
    }
  }
  .pl15{
    padding-left: 15px;
    @include responsive(medium-screens) {
      padding-left:10px!important;
    }

  }
  .pl8{
    padding-left: 9px;
    @include responsive(medium-screens) {
      padding-left:5px!important;
    }
  }
  .timeDate select {
    width: 75px;
    height: 40px;
    line-height: 40px;
    text-align: left;
    @include responsive(medium-screens) {
      width: 65px;
    }

  }

  .timeDate span{
    width: 30px;
    height: 40px;
    line-height: 40px;
  }
  .user-date{
    position: relative;
    justify-content: left;
    p{
      @include responsive(medium-screens) {
        position: absolute;
        bottom: -40px;
        right: 33px;
      }

    }
    span {
      padding: 0 10px;
      margin:10px 0;
      @include responsive(medium-screens) {
        padding: 0 5px;
      }
    }
    .clear{
      color: $color;
      cursor: pointer;
    }
  }
</style>

<style lang="scss">
  @import "../assets/css/common.scss";
  .el-date-editor.el-input{
    width: 150px !important;
    @include responsive(medium-screens) {
      width: 120px !important;;
    }
  }
</style>

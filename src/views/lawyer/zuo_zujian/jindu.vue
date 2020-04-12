<template>
	<div class="lawcontent">
		<div class="zuo_jindu">
			<div class="indexcon_lefttop">
				<el-date-picker
						v-model="value1"
						type="date"
						format="yyyy 年 MM 月 dd 日"
						value-format="yyyy-MM-dd"
						:clearable="false"
						@change = "getWorkAxis"
						style="width: 300px;margin-left: 10px;"></el-date-picker>
				▼
			</div>
			<div class="indexcon_leftcon">

				<div class="shouye_jindu" v-for="(item, index) in timeList" :key="index">
					<div class="jindu_zuo">
						<div style="position: relative;">
							<span :class="item.nodeType === '4'? 'blue_co': ''">{{item.nodeTime || ''}}</span>
							<div v-if="item.nodeType === '4'" class="now_tag">现在</div>
						</div>
					</div>
					<!-- <div class="line"></div> -->
					<!-- 签到（退） -->
					<div v-if="item.nodeType === '1'" class="jindu_you">
						<img :src="index > nowIndex ? blue : gray" class="jindu_tu" alt="">
						<div class="jindubai" :class="{'bg-gory': index < nowIndex}">
							<div class="jindu_qian">
								<div>{{item.nodeTitle}}</div>
							</div>
						</div>
					</div>

					<!-- 待办事项 -->
					<div v-if="item.nodeType === '2'" class="jindu_you">
						<img :src="index > nowIndex ? blue : gray" class="jindu_tu" alt="">
						<div class="jindubai" :class="{'bg-gory': index < nowIndex}">
							<div class="jindu_qian">
								{{item.nodeTitle}}
							</div>
							<div class="jindu_content">
								<span v-if="item.nodeContent">{{item.nodeContent}}</span>
								<span v-if="item.nodeContent">{{item.nodeContent1}}</span>
								<span v-if="item.nodeContent">{{item.nodeContent2}}</span>
								<span v-if="item.nodeContent">{{item.nodeContent3}}</span>
							</div>
						</div>
					</div>

					<!-- 文本消息 -->
					<div v-if="item.nodeType === '3'" class="jindu_you">
						<img :src="index > nowIndex ? blue : gray" class="jindu_tu" alt="">
						<div class="jindubai"  :class="{'bg-gory': index < nowIndex}">
							<div class="jindu_qian">
								{{item.nodeTitle}}
							</div>
							<div class="jindu_content">
								<span v-if="item.nodeContent">{{item.nodeContent}}</span>
								<span v-if="item.nodeContent">{{item.nodeContent1}}</span>
								<span v-if="item.nodeContent">{{item.nodeContent2}}</span>
								<span v-if="item.nodeContent">{{item.nodeContent3}}</span>
							</div>
						</div>
					</div>

					<!-- 即时信息 -->
					<div v-if="item.nodeType === '4'" class="jindu_you">
						<img src="../../../assets/image/now.png" class="jindu_tu_big" alt="">
						<div class="jindu_younow">
							<div>
								<div class="jindu_topchuli">
									<div><span class="label-left">待处理</span><router-link :to="{path: '/lvshi'}"><span class="count top-blue">{{item.nodeContent}}</span></router-link><span class="btm-gray">项</span></div>
									<div><span class="label-left btm-gray">其中超时</span><router-link :to="{path: '/lvshi'}"><span class="count btm-red">{{item.nodeContent3}}</span></router-link><span class="btm-gray">项</span></div>
								</div>
								<div class="jindu_topchuli">
									<div><span class="label-left">我发起</span><router-link :to="{name: 'wodefaqi'}"><span class="count top-blue">{{item.nodeContent2}}</span></router-link><span class="btm-gray">项</span></div>
									<div><span class="label-left btm-gray">其中超时</span><router-link :to="{name: 'wodefaqi'}"><span class="count btm-red">{{item.nodeContent4}}</span></router-link><span class="btm-gray">项</span></div>
								</div>
							</div>
							<router-link :to="{name: 'zhize'}">
								<div class="zhize" @click="zhize">职责</div>
							</router-link>
						</div>
					</div>

					<!-- 课件学习计划 -->
					<div v-if="item.nodeType === '0'" class="jindu_you">
						<img src="../../../assets/image/yuandian.png" class="jindu_tu" alt="">
						<div class="jindu_jihua" @click="$router.push({path: 'xuexijihua'})">
							<div class="jihua-left">课件学习计划</div>
							<div class="jihua-right">
								<span class="count">{{item.completeCount}}/{{item.studyCount}}</span>
								<span class="count top-blue">{{item.learningCount}}</span>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		<router-view></router-view>
	</div>

</template>

<script>
import * as api from "@/http/lawyer"
import {lawyerxuexi} from "@/http/api";
import {formatDate} from '../../../utils/date.js';
	export default {
	  data() {
	    return {
			gray: require("../../../assets/image/grayd.png"),
			blue: require("../../../assets/image/blue.png"),
		  value1: formatDate(new Date(), 'yyyy-MM-dd'),
		  timeList: [],
			nowIndex: 0 //现在时间的索引
	    }
	  },
	  methods:{
		  zhize(){
			this.$emit('active','3')
		  },
		  xuexijihua(){
			this.$emit('active','4')
		  },
		  getWorkAxis() {
			  let params = {
				token: sessionStorage.getItem("token"),
				execTime: this.value1
				// token: '64d1d05f5ccb4670a6d342f3b3c002ce'
			  };
			  api.getWorkAxis(params).then(res => {
				  console.log(res)
				  if(res.code === 200) {
					this.timeList = res.content.dataList;
					this.nowIndex = res.content.dataList.findIndex(val => val.nodeType === '4');
				  } else {
                    this.$message({
                        message: res.msg,
                        type: "error"
                    });
                }
			  })

		  }
	  },
	  created() {
		  this.getWorkAxis();
	  }
	}
</script>

<style lang="scss">
	.indexcon_lefttop {
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 1px solid #999;
		height: 70px;
	}
	.indexcon_lefttop .el-input__inner {
		border: 0;
	}

	.indexcon_leftcon {
		height: 90%;
		background: #f6f6f6;
		padding: 10px 0;
		position: relative;
		overflow-y: auto;
	}

	.indexcon_lefttop .el-input {
		font-size: 23px;
	}

	.indexcon_time {
		width: 70%;
		margin: 10px auto;
	}

	.shouye_jindu {
		display: flex;
		align-items: center;
		justify-content: center;
		// padding-bottom: 10px;
		// position: relative;
	}
	.jindu_tu {
		width: 20px;
		height: 20px;
		position: absolute;
		left: -10px;
		top: 50%;
		transform: translateY(-50%);
		z-index: 100;
		background: #f6f6f6;
		border: 1px solid #999;
		padding: 4px;
		box-sizing: border-box;
		border-radius: 50%;
	}
	.jindu_tu_big {
		width: auto;
		height: 30px;
		position: absolute;
		left: -12px;
		top: 50%;
		transform: translateY(-50%);
		z-index: 100;
		background: #f6f6f6;
		font-size: 30px;
	}

	.jindu_zuo {
		height: 100%;
		width: 80px;
		position: relative;
	}
	.now_tag {
		width: 80px;
		height: 50px;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: -20px;
		font-size: 14px;
		color:rgb(35, 86, 131);
	}
	.blue_co {
		color:rgb(35, 86, 131);
	}

	.jindu_you {
		flex: 1;
		padding: 3px 20px;
		background: #f6f6f6;
		border-left: 1px solid #999;
		position: relative;
	}
	.jindubai {
		padding: 10px;
		background: #fff;
		position: relative;
		border-radius: 5px;
	}

	.jindu_qian {
		text-align: left;
		align-items: center;
		color: #333;
	}

	.jindu_shu {
		width: 15px;
		height: 15px;
		border-radius: 50%;
		color: #fff;
		background: #ff0000;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 10px;
		font-size: 12px;
	}

	.jindu_xiugai {
		padding: 5px;
		border-radius: 5px;
		background: #0EA9D7;
		color: #fff;
		font-size: 12px;
	}

	.zhuang {
		text-align: left;
		margin-top: 5px;
		font-size: 12px;
		color: #999;
	}
	.jindu_content {
		width: 100%;
		margin-top: 5px;
		font-size: 12px;
		color: #999;
		display: flex;
		justify-content: space-between;
	}

	.jindu_zhiwen {
		display: flex;
		align-items: center;
	}

	.jindu_zhiwen img {
		width: 25px;
		height: 25px;
	}

	.jindu_zhiwen>div {
		width: 30px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		border-radius: 5px;
		background: #33cc66;
		flex-wrap: wrap;
		font-size: 12px;
		padding: 3px;
		margin-left: 10px;
	}

	.jindu_younow {
		// width: 100%;
		border-radius: 5px;
		background: #fff;
		// margin-left: 20px;
		overflow: hidden;
		display: block !important;
	}
	.jindu_younow a {
		text-decoration: none;
	}

	.jindu_younow>div {
		display: flex;
		align-items: center;
		width: 100%;
	}

	.jindu_younow>div>div {
		width: 50%;
	}

	.jindu_topchuli {
		border-right: 1px solid #eee;
		padding: 10px 0;
	}
	.jindu_topchuli:nth-child(2) {
		border-right:none;
	}

	.jindu_topchuli>div {
		line-height: 22px;
	}
	.label-left {
		display: inline-block;
		width: 70px;
		text-align: left;
	}
	.count {
		display: inline-block;
		width: 30px;
	}
	.top-blue {
		font-size: 16px;
    	color: #158CCB;
	}
	.btm-red {
		font-size: 14px;
    	color: #FF6666;
	}
	.btm-gray {
		font-size: 14px;
		color: #999999;
	}
	.zhize {
		width: 100%;
		height: 36px;
		background: #0087cc;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.xuexihong {
		background: #ff6666;
		width: 25px;
	}
	.lawcontent{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: flex-start;
	}
	.jindu_jihua {
		display: flex;
		padding: 10px;
		background-color: #fff;
		cursor: pointer;
		border-radius: 5px;
	}
	.jihua-right {
		text-align: right;
		flex: 1;
	.bg-gory {
		background-color: #e9eef3;
	 }
	}
</style>

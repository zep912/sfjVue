<template>
	<!-- <div class="daichuli_father"> -->
		<div class="zhize_you">
		<div class="zhize_toubu">待处理</div>
		<div class="zhize_neirong">
			<div class="daichu_shijian">
				<div>
					<el-date-picker
						v-model="defultMonth"
						type="month"
						format="yyyy 年 MM 月"
						value-format="yyyy-MM"
						:clearable="false"
						style="width: 300px;margin-left: 10px;"></el-date-picker>
				</div>
				<div>
					自定义
					<el-date-picker v-model="timeArr" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
					 style="width: 260px;margin-left: 10px;">
					</el-date-picker>
				</div>
				<div>
					<div class="sousuo">
						<input type="text" v-model="keyWord" placeholder="请输入关键字查询">
						<div class="search" @click="getPendingList">
							<img src="../../../assets/image/u2290.png" alt="">
						</div>
					</div>
				</div>
			</div>
			<div class="daichu_nirong">
				<!-- 待处理 -->
				<div class="daichuli" v-if="pendingList.length > 0">
					<div class="daichuli_top">
						<div></div>
						待我处理（{{pendingList.length}}）
					</div>
					<div class="dauchuli_neirong">
						<div v-for="(item, index) in showPendingList" :key="index" class="daichuli_one">
							<div class="daichuli_left">
								<div class="dataTag">{{item.dataTag}}</div>
								<div class="daichuli_zhong">
									<div class="dai_title">{{item.dataTitle}}</div>
									<div class="dai_content">
										<span v-if="item.dataContent1">{{item.dataContent1}}</span>
										<span v-if="item.dataContent2">{{item.dataContent2}}</span>
										<span v-if="item.dataContent3">{{item.dataContent3}}</span>
										<span v-if="item.dataContent4">{{item.dataContent4}}</span>
									</div>

								</div>
							</div>
							<div class="daichuli_you">
								<div v-if="item.overtimeFlag == 2" class="over">超时：{{item.taskDueTime || 0}}小时</div>
								<div v-else>剩余：{{item.taskDueTime || 0}}小时</div>
								<div>{{item.taskStartTime}}</div>
							</div>
						</div>
						<div v-if="showMore" class="gengsduo" @click="loadMore">点击加载更多</div>
					</div>
				</div>

				<!-- 已处理 超时 -->
				<div class="daichuli yihchuli" v-if="overTimeList.length > 0">
					<div class="daichuli_top yihchuli">
						<div class="yihchulibeijing"></div>
						我已处理（超时）（{{overTimeList.length}}）
					</div>
					<div class="dauchuli_neirong">
						<div class="daichuli_one" v-for="(item, index) in overTimeList.slice(0, 1)" :key="index">
							<div class="daichuli_left">
								<div class="dataTag yihchulibeijing">{{item.dataTag}}</div>
								<div class="daichuli_zhong">
									<div class="yichuliover_title">{{item.dataTitle}}</div>
									<div class="dai_content">
										<span v-if="item.dataContent1">{{item.dataContent1}}</span>
										<span v-if="item.dataContent2">{{item.dataContent2}}</span>
										<span v-if="item.dataContent3">{{item.dataContent3}}</span>
										<span v-if="item.dataContent4">{{item.dataContent4}}</span>
									</div>
								</div>
							</div>
							<div class="daichuli_you">
								<div v-if="item.overtimeFlag == 2" class="over">超时：{{item.taskDueTime || 0}}小时</div>
								<div v-else>剩余：{{item.taskDueTime || 0}}小时</div>
								<div>{{item.taskStartTime}}</div>
							</div>
						</div>
					</div>
				</div>

				<!-- 已处理 未超时 -->
				<div class="daichuli yichuli" v-if="handledList.length > 0">
					<div class="daichuli_top yichuli">
						<div class="yichulibeijing"></div>
						我已处理（{{handledList.length}}）
					</div>
					<div class="dauchuli_neirong">
						<div class="daichuli_one" v-for="(item, index) in handledList.slice(0, 1)" :key="index">
							<div class="daichuli_left">
								<div class="dataTag yichulibeijing">{{item.dataTag}}</div>
								<div class="daichuli_zhong">
									<div class="yichuli_title">{{item.dataTitle}}</div>
									<div class="dai_content">
										<span v-if="item.dataContent1">{{item.dataContent1}}</span>
										<span v-if="item.dataContent2">{{item.dataContent2}}</span>
										<span v-if="item.dataContent3">{{item.dataContent3}}</span>
										<span v-if="item.dataContent4">{{item.dataContent4}}</span>
									</div>
								</div>
							</div>
							<div class="daichuli_you">
								<div v-if="item.overtimeFlag == 2" class="over">超时：{{item.taskDueTime || 0}}小时</div>
								<div v-else>剩余：{{item.taskDueTime || 0}}小时</div>
								<div>{{item.taskStartTime}}</div>
							</div>
						</div>
					</div>
				</div>

				<!-- 已归档 -->
				<div class="daichuli yiguidang" v-if="completedList.length > 0">
					<div class="daichuli_top yiguidang">
						<div class="yiguidangbeijing"></div>
						{{completedList[0] ? completedList[0].time : ''}}
					</div>
					<div class="dauchuli_neirong">
						<div class="daichuli_one" v-for="(item, index) in completedList.slice(0, 1)" :key="index">
							<div class="daichuli_left">
								<div class="dataTag yiguidangbeijing">{{item.dataTag}}</div>
								<div class="daichuli_zhong">
									<div class="yiguidang fz_18">{{item.dataTitle}}</div>
									<div class="dai_content">
										<span v-if="item.dataContent1">{{item.dataContent1}}</span>
										<span v-if="item.dataContent2">{{item.dataContent2}}</span>
										<span v-if="item.dataContent3">{{item.dataContent3}}</span>
										<span v-if="item.dataContent4">{{item.dataContent4}}</span>
									</div>
								</div>
							</div>
							<div class="daichuli_you">
								<div v-if="item.overtimeFlag == 2" class="over">超时：{{item.taskDueTime || 0}}小时</div>
								<div v-else>剩余：{{item.taskDueTime || 0}}小时</div>
								<div>{{item.taskStartTime}}</div>
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
import * as api from "@/http/lawyer"
import {formatDate} from '../../../utils/date.js';
	export default {
	  data() {
	    return {
		  defultMonth: '',
		  timeArr: [], // 自定义时间
		  keyWord: null,
		  showPendingList: [],
		  pendingList: [], // 待处理列表数据
		  handledList: [], // 已处理列表
		  overTimeList: [], // 已处理(超时)列表
		  completedList: [], // 已完成列表
		  showMore: false //是否加载更多
	    }
	  },
	  methods:{
		  getPendingList() {
			  let params = {
				token:sessionStorage.getItem("token"),
				// systemList:[
				// 	{
				// 		systemCode:'mock'
				// 	}
				// ],
				// instanceList:[
				// 	{
				// 		instanceDefKey:'mock'
				// 	}
				// ],
				// taskKeyList:[
				// 	{
				// 		taskDefKey:'mock'
				// 	}
				// ],
				taskTime: this.defultMonth,
				taskStartTime: this.timeArr&&this.timeArr[0] ? this.timeArr[0] : null,
				taskEndTime: this.timeArr&&this.timeArr[1] ? this.timeArr[1] : null,
				keyWord: this.keyWord,
				pageNum:'0',
				pageSize:'9999'
			}
			  api.getPendingList(params).then(res => {
				  console.log(res)
				  if(res.code === 200) {
					let {pendingList, handledList, overTimeList, completedList} = res.content
					this.pendingList = pendingList.map(i => {
						i.taskStartTime = formatDate(new Date(i.taskStartTime), 'MM-dd hh:ss:mm')
						return i
					})
					this.handledList = handledList.map(i => {
						i.taskStartTime = formatDate(new Date(i.taskStartTime), 'MM-dd hh:ss:mm')
						return i
					})
					this.overTimeList = overTimeList.map(i => {
						i.taskStartTime = formatDate(new Date(i.taskStartTime), 'MM-dd hh:ss:mm')
						return i
					})
					this.completedList = completedList.map(i => {
						i.taskStartTime = formatDate(new Date(i.taskStartTime), 'MM-dd hh:ss:mm')
						i.time = formatDate(new Date(i.taskStartTime), 'yyyy-MM-dd')
						return i
					})
					if (this.pendingList.length > 3) {
						this.showPendingList = this.pendingList.slice(0, 3)
						this.showMore = true
					} else {
						this.showPendingList = this.pendingList
						this.showMore = false
					}
				  } else {
                    this.$message({
                        message: res.msg,
                        type: "error"
                    });
                }
			  })
		  },
		  loadMore () {
			let curLength = this.showPendingList.length
			let totalLength = this.pendingList.length
			if (curLength >= totalLength) {
				this.showMore = false
				return
			} else if (curLength < totalLength) {
				// if (curLength + 3 >= totalLength) {
				this.showPendingList = this.pendingList
				this.showMore = false
				// } else {
				// 	this.showPendingList = this.pendingList.slice(0, curLength + 3)
				// 	this.showMore = true
				// }
			}
		  }
	  },
	  created() {
		this.defultMonth = formatDate(new Date(), 'yyyy-MM')
		this.$nextTick(() => {
			this.getPendingList()
		})

	  }
	}
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

	.dataTag {
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
		width: 90%;
		text-align: left;

	}

	.daichuli_zhong .dai_title {
		color: #ff6666;
		font-size: 18px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.daichuli_zhong .dai_content {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		color: #999;
		margin-top: 15px;
	}
	.daichuli_zhong .dai_content span {
		color: #999;
		font-size: 15px;
		margin-top: 10px;
		margin-right: 10px;
	}

	.daichuli_you>div {
		color: #666;
		font-size: 14px;
		margin-top: 10px;
	}
	.daichuli_you .over {
		color: #ff6666;
		font-size: 16px;
	}


	.gengsduo {
		color: #1159A3;
		font-size: 12px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		cursor: pointer;
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
	.yichuli_title {
		font-size: 18px;
		color:#199ed8;
	}
	.yichuliover_title {
		font-size: 18px;
		color: #ff9933;
	}
	.fz_18 {
		font-size: 18px;
	}
</style>

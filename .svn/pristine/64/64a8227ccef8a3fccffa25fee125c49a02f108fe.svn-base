<template>
	<div class="lawcontent">
		<div class="zuo_jindu">
			<div class="indexcon_lefttop">
				<el-date-picker v-model="value1" type="date" placeholder="选择日期">
				</el-date-picker>
				▼
			</div>
			<div class="indexcon_leftcon">
				<div class="shouye_jindu">
					<div class="jindu_zuo">
						<div>
							08:00
							<img src="../../../assets/image/yuandian.png" class="jindu_tu" alt="">
						</div>
					</div>
					<div class="jindu_you">
						<div>
							<div class="jindu_qian">
								<div>签到</div>
								<div class="jindu_shu">1</div>
								<div class="jindu_xiugai">修改记录</div>
							</div>
							<div class="zhuang">状态：正常</div>
						</div>
						<div class="jindu_zhiwen">
							<img src="../../../assets/image/u1879.png" alt="">
							<div>更多操作</div>
						</div>
					</div>
				</div>
				<div class="shouye_jindu">
					<div class="jindu_zuo">
						<div>
							10:00
							<img src="../../../assets/image/yuandian.png" class="jindu_tu" alt="">
						</div>
					</div>
					<div class="jindu_you">
						<div>
							<div class="jindu_qian">
								<div>签到</div>
								<!-- <div class="jindu_shu">1</div> <div class="jindu_xiugai">修改记录</div> -->
							</div>
							<div class="zhuang">XXXXXXXXXXXXXXXXXXXXXXXX</div>
						</div>
					</div>
				</div>
				<div class="shouye_jindu">
					<div class="jindu_zuo" style="height: 115px;">
						<div>
							10:00
							<img src="../../../assets/image/yuandian.png" class="jindu_tu" alt="">
						</div>
					</div>
					<div class="jindu_younow">
		
						<div>
							
								<div class="jindu_topchuli">
									<div>待处理：<router-link :to="{name: 'wodefaqi'}"><span>37</span></router-link>项</div>
									<div>其中超时：<router-link :to="{name: 'wodefaqi'}"><span>37</span></router-link>项</div>
								</div>
								<div class="jindu_topchuli">
									<div>待处理：<router-link :to="{name: 'wodefaqi'}"><span>37</span></router-link>项</div>
									<div>其中超时：<router-link :to="{name: 'wodefaqi'}"><span>37</span></router-link>项</div>
								</div>
							
							
						</div>
						<router-link :to="{name: 'zhize'}">
							<div class="zhize" @click="zhize">职责</div>
						</router-link>
					</div>
		
				</div>
				<div class="shouye_jindu">
					<div class="jindu_zuo">
						<div>
							10:00
							<img src="../../../assets/image/yuandian.png" class="jindu_tu" alt="">
						</div>
					</div>
					<div class="jindu_you jindubai">
						<div>
							<div class="jindu_qian">
								<div>智慧司法需求对接会议</div>
								<!-- <div class="jindu_shu">1</div> <div class="jindu_xiugai">修改记录</div> -->
							</div>
							<div class="zhuang">会议地点：1920会议室</div>
						</div>
					</div>
				</div>
				<div class="shouye_jindu">
					<div class="jindu_zuo">
						<div>
							<span style="opacity: 0;">10:00 </span>
							<img src="../../../assets/image/yuandian.png" class="jindu_tu" alt="">
						</div>
					</div>
					<div class="jindu_you jindubai" @click="xuexijihua">
						<div style="width: 100%;">
							<router-link :to="{name: 'xuexijihua'}" >
								<div class="jindu_qian liangqi">
									<div>课件学习计划</div>
									<div class="xuexi_you">
										<div class="jindu_shu">1/3</div>
										<div class="jindu_xiugai xuexihong">2</div>
									</div>
								</div>
								<!-- <div class="zhuang">会议地点：1920会议室</div> -->
							</router-link>
						</div>
						
					</div>
				</div>
				<div class="shouye_jindu">
					<div class="jindu_zuo">
						<div>
							<span>10:00 </span>
							<img src="../../../assets/image/yuandian.png" class="jindu_tu" alt="">
						</div>
					</div>
					<div class="jindu_you jindubai">
						<div style="width: 100%;">
							<div class="jindu_qian liangqi">
								<div>上班签到</div>
								<div class="xuexi_you" style="opacity: 0;">
									<div class="jindu_shu">1/3</div>
									<div class="jindu_xiugai xuexihong">2</div>
								</div>
							</div>
							<!-- <div class="zhuang">会议地点：1920会议室</div> -->
						</div>
					</div>
				</div>
			</div>
		</div>
		<router-view></router-view>
	</div>
	
</template>

<script>
	export default {
	  data() {
	    return {
	      input: ''
	    }
	  },
	  methods:{
		  zhize(){
			this.$emit('active','3')  
		  },
		  xuexijihua(){
			this.$emit('active','4')
		  }
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
		// width: 94%;
		height: 90%;
		background: #f6f6f6;
		// padding: 0px 3%;
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
	}
	
	.shouye_jindu>div {
		display: flex;
		align-items: center;
	}
	
	.jindu_tu {
		width: 20px;
		height: 20px;
		position: relative;
		left: 10px;
		z-index: 100;
	}
	
	.jindu_zuo {
		height: 66px;
		border-right: 1px solid #999;
	}
	
	.jindu_you {
		width: 60%;
		padding: 10px 2%;
		background: #e9eef3;
		border-radius: 5px;
		margin-left: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.jindu_qian {
		display: flex;
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
		width: 64%;
		border-radius: 5px;
		background: #fff;
		margin-left: 20px;
		overflow: hidden;
		display: block !important;
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
		padding: 15px 0;
	}
	
	.jindu_topchuli>div {
		line-height: 22px;
	}
	
	.zhize {
		width: 100%;
		height: 40px;
		background: #0087cc;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.jindubai {
		background: #fff;
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
</style>

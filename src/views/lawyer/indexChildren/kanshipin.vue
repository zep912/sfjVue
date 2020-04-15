<template>
	<div class="kanshipin">
		<div class="kanshipin_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/zhize' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item :to="{ path: '/sifa_peixun' }">司法培训</el-breadcrumb-item>
			  <el-breadcrumb-item>{{data.planData.trainTitle}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="shipin_neirong">
			<div>
				<div class="shipin_biaoti">
					{{data.planData.trainTitle}}
				</div>
				<div class="video-box">
					<video-player v-if="data.coursewareData.playUrl" class="video-player vjs-custom-skin"
								   ref="videoPlayer"
								   :playsinline="true"
								   :options="playerOptions"
								   @play="onPlayerPlay"
								  @pause="onPlayerPause"
								  @ended="onPlayerPlayEnded">
					</video-player>
					<!--<video :src="data.coursewareData.playUrl"></video>-->
					<!--<video src="../../../assets/video/apink.mp4" autoplay loop controls></video>-->
				</div>
				<div class="shipin_dibu">
					<div>
						<div>学习人员：<span>{{data.studyData.personName}}</span></div>
						<div>开始时间：<span>{{data.studyData.startTime}}</span></div>
					</div>
					<div>
						<div>学习次数：<span>{{data.studyData.studyCount}}</span></div>
						<div>本次用时：<span>00:34:00</span></div>
					</div>
					<div>
						<div>累计用时：<span>{{data.studyData.curentTime}}</span></div>
						<div>进度时间：<span>{{data.studyData.accTime}}</span></div>
					</div>
					<div class="shipin_jindu">
						<div>{{data.studyData.studyProcess}}</div>
						<div>本次学习进度</div>
					</div>
				</div>
			</div>
			<div>
				<div class="shipin_xinxibt">培训信息</div>
				<div>计划状态：<span>{{data.planData.planStatus}}</span></div>
				<div>开始时间：<span>{{data.planData.startDate}} {{data.planData.startTime}}</span></div>
				<div>截止时间：<span>{{data.planData.endDate}} {{data.planData.endTime}}</span></div>
				<div>制定人员：<span>{{data.planData.principalUser}}</span></div>
				<div>发布时间：<span>{{data.planData.publishTime}}</span></div>
				<div class="shipin_xinxibt">课件信息</div>
				<div>知识范围：<span>{{data.coursewareData.knowledgeScope}}</span></div>
				<div>内容分类：<span>{{data.coursewareData.contentType}}</span></div>
				<div>视频时长：<span>{{data.coursewareData.videoDuration}}</span></div>
				<div>课程简介：</div>
				<div class="jianjie_neirong">
					<div>{{data.coursewareData.couDesc}}</div>
				</div>
			</div>
		</div>
		<div class="shipin_biaoge">
			<el-table
			    :data="studyRecordList"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      type="index"
			      label="序号"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="trainTitle"
			      label="学习计划名称">
			    </el-table-column>
			    <el-table-column width="180"
			      prop="startTime"
			      label="开始时间">
			    </el-table-column>
				<el-table-column width="180"
				  prop="endTime"
				  label="截止时间">
				</el-table-column>
				<el-table-column width="180"
				  prop="completeTime"
				  label="学习完成时间">
				</el-table-column>
				<el-table-column
				  prop="consumeTime"
				  label="学习用时">
				</el-table-column>
				<el-table-column
				  prop="studyProcess"
				  label="学习进度">
					<scope slot-scope="{row}">
						{{row.studyProcess + '%'}}
					</scope>
				</el-table-column>
				<el-table-column
				  prop="studyStatus"
				  label="学习状态">
				</el-table-column>
			  </el-table>
		</div>
		<el-dialog title="请输入验证码" :append-to-body="true" class="kanshipin-el-dialog" :visible.sync="dialogVisible" width="240px" :show-close="false" :close-on-click-modal="false" :close-on-press-escape="false">
			<el-form :model="form" :rules="rules" label-width="10px" ref="form">
				<el-row>
					<el-col :span="14">
						<el-form-item prop="imgCode">
							<el-input v-model="form.imgCode"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="10">
						<img style="width: 100%; height: auto" :src="imgStr" alt="" @click="getImgCode(true)">
					</el-col>
				</el-row>
			</el-form>
			<el-button type="primary" style="width: 100%; border-radius: 0" @click="playVideo">{{init ? '确定' : '确定并保存进度'}}</el-button>
		</el-dialog>
	</div>
</template>

<script>
	import {see_videol} from '../../../http/api.js'
	import {formatDate} from '@/utils/date.js';
	export default {
	    data(){
			const validator = async (rule, value, callback) => {
				if (value) {
					const res = await this.$http.post('/login/checkValidateCode', {validateCode: value});
					console.log(res, 'res123');
					if (res.code === 200) {
						callback();
					} else {
						callback(new Error('请输入正确验证码'));
					}
				} else {
					callback();
				}
			};
			return {
				dialogVisible: false,
				data: {
					planData: {},
					coursewareData: {},
					studyData: {}
				},
				studyRecordList: [],
				playerOptions: {
					autoplay: false, //如果true,浏览器准备好时开始回放。
					muted: false, // 默认情况下将会消除任何音频。
					loop: false, // 导致视频一结束就重新开始。
					preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
					language: 'zh-CN',
					aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
					fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
					sources: [{
						type: "video/mp4",
						src: ''
						// src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" //你的视频地址（必填）
					}],
					hls: true,
					poster: "poster.jpg", //你的封面地址
					width: document.documentElement.clientWidth,
					notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
					controlBar: {
					 timeDivider: false,
			         durationDisplay: true,
			         remainingTimeDisplay: true,
			         fullscreenToggle: false  //全屏按钮
			       }
				},
				imgStr: '',
				form: {imgCode: ''},
				rules: {
					imgCode: [{required: true, validator: validator, trigger: 'change'}]
				},
				startTime: '', // 本次学习开始时间
				init: true  // 是否第一次验证
			}
		},
		created() {
			this.getSeeVideo();
		},
		methods:{
	    	// 获取视频信息
	    	getSeeVideo() {
				see_videol({
					"token":sessionStorage.getItem("token"),             //类型：String  必有字段  备注：token 用户身份标识
					"planId": this.$route.query.id                //类型：String  必有字段  备注：培训计划ID
				}).then(res=>{
					// 初始状态时赋值，即第一次进入页面时给整个页面赋值，否则只给学习列表赋值
					if (this.init) this.data = res.content;
					this.studyRecordList = res.content.studyRecordList;
					// 播放地址playUrl 封面地址coverUrl
					let {playUrl, coverUrl} = res.content.coursewareData;
					// "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"为测试数据
					playUrl = playUrl ? playUrl : "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4";
					this.data.coursewareData.playUrl = playUrl;
					// 给video组件赋值
					if (this.init) this.playerOptions = Object.assign({}, this.playerOptions, {sources: [{
							type: "video/mp4",
							src: playUrl //你的视频地址（必填）
						}], poster: coverUrl});
					this.startTime = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss');
				})
			},
	    	// 点击播放时调验证方法
			onPlayerPlay() {
				console.log(this.$refs.videoPlayer.player, '123');
				if (this.init) this.getImgCode();
			},
			// 暂停时验证并保存当前学习进度
			onPlayerPause() {
				if (!this.init) this.getImgCode();
			},
			// 播放完成时的回调 结束时再调验证请求已完成培训
			onPlayerPlayEnded() {
				this.getImgCode();
			},
			// 获取验证码
			async getImgCode(set) {
				if (set) this.form = {imgCode: ''};
				this.$refs.videoPlayer.player.pause(); //暂停视频的播放
				console.log('getImgCode', '123');
				this.dialogVisible = true;
				const res = await this.$http.post('/login/getValidateCode', {});
				if (res.code === 200) {
					this.imgStr = 'data:image/png;base64,' + res.content.imgStr;
				}
			},
			// 验证通过保存进度并播放视频
			playVideo() {
				this.$refs.form.validate(valid => {
					if (valid) {
				    	this.saveStudyRecord();
					}
				})
			},
			// 保存视频学习进度 duration总时长 currentTime当前播放时长
			async saveStudyRecord() {
				console.log(this.$refs.videoPlayer.player.cache_, 'this.$refs.videoPlayer.player.cache_');
				this.init = false;
				const {duration, currentTime} = this.$refs.videoPlayer.player.cache_;
				const studyProcess = Math.round(currentTime * 100 / duration);
				const endTime = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss');
				const request = {startTime: this.startTime, endTime, consumeTime: currentTime, studyProcess, token: sessionStorage.getItem('token'), planId: this.$route.query.id};
				const res = await this.$http.post('/train/saveStudyRecord', request);
				if (res.code === 200) {
					this.dialogVisible = false;
					this.$refs.videoPlayer.player.play(); //播放视频
					this.form = {imgCode: ''};
					this.getSeeVideo();
				} else {
					this.$message.error('请重试');
				}
			}
		}
	};
</script>

<style lang="scss">
	.kanshipin{
		width: 100%;
		height: 100%;
		overflow-y: auto;
	}
	.kanshipin_top{
		width: 95%;
		height: 70px;
		padding-left: 5%;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #eee;
	}
	.shipin_neirong{
		width: 90%;
		padding: 20px 5%;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		background: rgb(46,46,54);
	}
	.shipin_neirong>div:nth-child(1){
		width: 75%;
		video{
			width: 100%;
		}
	}
	.shipin_neirong>div:nth-child(2){
		width: 25%;
		margin-top: 43px;
		margin-left: 20px;
		text-align: left;
		height: 32vw;
		color: #c5c5c5;
		line-height: 23px;
		overflow: auto;
		span{
			color: #fff;
		}
	}
	.shipin_neirong>div:nth-child(2)::-webkit-scrollbar{
		display:none;
	}
	.shipin_dibu{
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 14px;
		color: #c5c5c5;
		text-align: left;
		padding: 10px 0;

	}
	.shipin_dibu span{
		color: #fff;
	}
	.shipin_dibu>div>div:nth-child(2){
		margin-top: 10px;
	}
	.shipin_jindu{
		text-align: center;

	}
	.shipin_jindu>div:nth-child(1){
		font-size: 16px;
		color: #068FD4;
	}
	.shipin_biaoti{
		text-align: left;
		color: #fff;
		font-size: 23px;
		font-weight: 600;
		margin-bottom: 20px;
	}
	.video-box {
		min-height: 400px;
	}
	.shipin_xinxibt{
		font-size: 18px;
		color: #068FD4;
		font-weight: 600;
		line-height: 40px;
	}
	.jianjie_neirong{
		color: #fff;
		padding: 10px;
	}
	.shipin_biaoge{
		width: 90%;
		padding: 25px 5%;
	}
	.vjs-custom-skin > .video-js .vjs-progress-control.vjs-control {
		display: none;
	}
	.kanshipin-el-dialog {
		.el-dialog__body {
			padding: 0;
		}
	}
</style>

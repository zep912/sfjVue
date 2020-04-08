<template>
		<div class="lawyercon">
			<div class="lawyerps">
				<div>首页</div>
				<div class="fenge">></div>
				<div>律师信息</div>
			</div>
			<div class="shaixuan">
				<div>所属区域：
					<el-select v-model="suoshuquyu" placeholder="请选择">
						<el-option
						v-for="item in options_a"
						:key="item.value"
						:label="item.label"
						:value="item.value">
						</el-option>
					</el-select>
				</div>
				<div>擅长专业：
					<el-select v-model="suoshuquyu" placeholder="请选择">
					    <el-option
					      v-for="item in options_a"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				</div>
				<div>关键字：
					<el-input v-model="guanjianzi" size="small" style="width: 195px;" placeholder="请输入内容"></el-input>
				</div>
				<div class="search2">搜索</div>
			</div>
			<div class="content_sifa">
				<div class="contetn_left">
					<div class="active">咨询量</div>
					<div>满意度</div>
					<div>接案率</div>
					<div>结案率</div>
				</div>
				<div>
					共计：123456789个
				</div>
			</div>
			<div class="content-con" style="justify-content: flex-start;">
				<div v-for="(item,index) in lawyer_content.dataList" :key="index" @click="lvshi_xiangqing(item.lawyerId)">
					<div class="topcon">
						<div>
							<img :src="item.photoUrl" class="left-image" alt="">
						</div>
						<div class="lawyer_name">
							<div>{{item.lawyerName}}律师 	<span>（执业9年）</span></div>
							<div class="last2"><div>电话<i></i></div>：<span>{{item.lawyerPhone}}</span></div>
							<div class="last">
								<div>擅长专业：</div>
								<div>{{item.adeptSpecialtys}}</div>
							</div>
						</div>
					</div>
					<div class="two_con">
						<div style="width: 28%;">
							<div>{{item.serviceData.consultAmount}}</div>
							<div>咨询量</div>
						</div>
						<div>|</div>
						<div style="width: 28%;">
							<div>{{item.serviceData.serviceAmount}}</div>
							<div>服务次数</div>
						</div>
						<div>|</div>
						<div style="width: 28%;">
							<div>{{item.serviceData.satisfaction}}</div>
							<div>满意度</div>
						</div>
					</div>
				</div>
				<div class="fenyess">
					<el-pagination
						@current-change="handleCurrentChange"
						:current-page.sync="currentPage"
						:page-size="10"
						layout="prev, pager, next"
						:total="lawyer_content.pageInfo.total">
					</el-pagination>
				</div>
					
			</div>
		</div>
</template>
<script>
	import {getValidLawyerList} from '../../http/api';
	export default {
		data() {
		    return {
		        options_a: [
					{value: 1, label: '黄金糕'}, 
					{ value: 2,label: '双皮奶'}, 
					{ value: 3,label: '蚵仔煎'}, 
					{ value: 4,label: '龙须面'}, 
					{value: 5,label: '北京烤鸭'}
				],
				value: '',
				input: '',
				suoshuquyu: '',
				guanjianzi:'',
				shanchangnzhuanye:'',
				//获取律师列表所需信息
				lawyerContent: {
					token: '',
					areaRegionId: '',
					adeptSpecialty: '',
					keyWord: '',
					sortModel: '1',
					sortType: '1',
					pageSize: '10',
					pageNum: '1'
				},
				//律师列表
				lawyer_content: {},
				currentPage:1,
		    };
		},
		mounted() {
			this.getLawyerList();
		},
		methods: {
			//筛选律师列表
			getLawyerList(){
				this.lawyerContent.token = sessionStorage.getItem('token');
				getValidLawyerList(this.lawyerContent).then(success=>{
					this.lawyer_content = success.content;
					this.lawyer_content.pageInfo.total = Number(this.lawyer_content.pageInfo.total);
				});
			},
			lvshi_xiangqing(e){
				this.$router.push({path:'/lvshixiangqing',query:{id:e}});
			},
			//上下翻页
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				this.lawyerContent.pageNum = Number(val);
				this.getLawyerList();
			},
		}
	}; 
</script>
<style lang="scss">
	.lawyer_list {
		width: 100vw;
		background: #f2f2f2;
	}
	.lawyer_contop{
		width: 1200px;
		margin: 30px auto;
		
	}
	.lawyercon{
		width: 100%;
	}
	.lawyerps{
		display: flex;
		align-items: center;
	}
	.fenge{
		margin: 0 20px;
	}
	.shaixuan{
		width: 94%;
		padding: 0 3%;
		height: 80px;
		background: #fff;
		margin: 20px 0;
		box-sizing: border-box;
		border: 1px solid #0EA9D7;
		display: flex;
		align-items: center;
		justify-content: space-between;
		
	}
	.search2{
		width: 80px;
		height: 40px;
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
	}
	input{
		height: 40px;
		line-height: 40px;
	}
	.content_sifa{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.contetn_left{
		display: flex;
		align-items: center;
		
	}
	.contetn_left>div{
		width: 90px;
		height: 42px;
		margin-right: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.contetn_left .active{
		background: #fff;
		color: #0EA9D7;
	}
	.content-con{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.content-con>div{
		width: 30%;
		border: 1px solid #eee;
		background: #fff;
		margin-top: 20px;
		margin-right: 15px;
	}
	.topcon{
		width: 94%;
		padding: 10px 3%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.left-image{
		width: 90px;
		height: 120px;
	}
	.lawyer_name{
		text-align: left;
		width: 70%;
	}
	.lawyer_name>div:nth-child(1){
		font-size: 18px;
		color: #158CCB;
	}
	.lawyer_name>div:nth-child(1) span{
		font-size: 14px;
		color: #333;
	}
	.lawyer_name>div:nth-child(2){
		font-size: 14px;
		color: #158CCB;
	}
	.lawyer_name>div:nth-child(2),.lawyer_name>div:nth-child(3){
		font-size: 13px;
		color: #333;
		margin-top: 10px;
	}
	.last,.last2{
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.last>div:nth-child(1){
		width: 120px;
	}
	.last2>div:nth-child(1){
		width: 52px;
		display: inline-block;
		text-align: justify;
		margin-top: 10px;
	}
	.last2>div:nth-child(1) i{ 
	    display: inline-block;
	    width: 100%;
	}
	.two_con{
		width: 94%;
		padding: 10px 3%;
		background: rgba(21,140,203,0.1);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.two_con>div{
		text-align: center;
	}
	.two_con>div div:nth-child(1){
		font-size: 17px;
		color: #333;
		font-weight: 600;
	}
	.two_con>div div:nth-child(2){
		font-size: 14px;
		color: #999;
	}
	.content-con .fenyess{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		background: #f2f2f2;
	}
</style>

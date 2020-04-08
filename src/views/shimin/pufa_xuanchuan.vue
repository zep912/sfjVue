<template>
	<div class="zhengwu">
		<div class="zhengwu_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			  <el-breadcrumb-item>普法宣传</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="zhengwu_content">
			<div class="content_zwleft">
				<div :class="xuanchuanxian==index?'xuanze_fa fa_active':'xuanze_fa'" 
					v-for="(item,index) of xuanchuanxianList"
					@click="xuanchuan(index)">{{item.title}}</div>
				<div class="xuan_imgfa">
					<img src="../../assets/image/falv.png" alt="">
				</div>
				<div class="xuan_imgfa">
					<img src="../../assets/image/sifa.png" alt="">
				</div>
				<div class="xuan_imgfa">
					<img src="../../assets/image/tiaoyue.png" alt="">
				</div>
			</div>
			<div class="content_zwyou" v-if="xuanchuanxian==0">
				<div class="toubu_jianbian"></div>
				<div class="zwyou_top">
					<div class="xuanzhong_biaoqian">以案释法</div>
					<div>共计：{{yianshifa_zong}}篇</div>
				</div>
				<div class="zwyou_content">
					<div class="zwyou_conlist" @click="xiangqing(items.caseId,1)" v-for="(items,index) in yianshifa" :key="index">
						<div class="zhengwugk">
							<div class="biaodian"></div>
							{{items.caseTitle}}
						</div>
						<div class="zhengwu_time">{{items.publishTime}}</div>
					</div>
					
				</div>
				<div class="kevheng_fenye">
					<el-pagination
					      @size-change="handleSizeChange"
					      @current-change="handleCurrentChange"
					      :current-page.sync="currentPage3"
					      :page-size="10"
					      layout="prev, pager, next, jumper"
					      :total="100">
					    </el-pagination>
				</div>
			</div>
			<div class="content_zwyou" v-if="xuanchuanxian==1">
				<div class="toubu_jianbian"></div>
				<div class="zwyou_top">
					<div class="xuanzhong_biaoqian">法律法规</div>
					<div>共计：{{falvfagui_zong}}篇</div>
				</div>
				<div class="zwyou_content">
					<div class="zwyou_conlist" @click="xiangqing(items.lawId,2)" v-for="(items,indexs) in falvfagui" :key="indexs">
						<div class="zhengwugk">
							<div class="biaodian"></div>
							{{items.lawTitle}}
						</div>
						<div class="zhengwu_time">{{items.execDate}}</div>
					</div>

				</div>
				<div class="kevheng_fenye">
					<el-pagination
							@size-change="handleSizeChange"
							@current-change="handleCurrentChange"
							:current-page.sync="currentPage3"
							:page-size="100"
							layout="prev, pager, next, jumper"
							:total="1000">
					</el-pagination>
				</div>
			</div>
			<div class="content_zwyou1" v-if="xuanchuanxian==2">
				<div class="kejian_top" style="padding: 15px ">
					<div>
						<div>课件类型 
							<el-select v-model="searchObj.coursewareType">
							    <el-option
							      v-for="item in searchObj.coursewareList"
							      :key="item.value"
							      :label="item.title"
							      :value="item.value">
							    </el-option>
							  </el-select>
						</div>
						<div style="margin-top: 10px;">内容分类
							<el-select v-model="searchObj.contentClassification">
							    <el-option
							      v-for="item in searchObj.contentClassificationList"
							      :key="item.value"
							      :label="item.title"
							      :value="item.value">
							    </el-option>
							  </el-select>
						</div>
					</div>
					<div>
						<div>知识范围 
							<el-select v-model="searchObj.scopeKnowledge">
							    <el-option
							      v-for="item in searchObj.scopeKnowledgeList"
							      :key="item.value"
							      :label="item.title"
							      :value="item.value">
							    </el-option>
							  </el-select>
						</div>
						<div style="margin-top: 10px;">课件名称
							<el-select v-model="kejianmingcheng" placeholder="请选择">
							    <el-option
							      v-for="item in options"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							  </el-select>
						</div>
					</div>
					<div class="kejiansousuo">搜索</div>
				</div>
				<div class="sifakc_tongji">
					<div style="display: flex">
						<div>播放量 </div>
						<div>日期</div>
					</div>
					<div class="tongji_youce">
						<div>共计：{{kecheng_zong}}个</div>
						<div class="caidan">
							<div>
								<img src="../../assets/image/caidan.png" alt="">
							</div>
							<div>
								<img src="../../assets/image/candan2.png" alt="">
							</div>
						</div>
					</div>
				</div>
				<div class="kechengneirong">
					<div class="kecheng_pxcontent" style="align-items: flex-start" v-for="(hecheng,index) in kecheng_list" :key="index" @click="xuexi">
						<div class="kecheng_img" style="width: 25%">
							<img :src="hecheng.cusCover" alt="">
							<div>{{hecheng.videoDuration}}</div>
						</div>
						<div class="kecheng_jianjie">
							<div>课件标题：<span>{{hecheng.couName}}</span></div>
							<div>课件简介：<span>{{hecheng.cusDesc}}</span></div>
						</div>
					</div>
				</div>
				<div class="kevheng_fenye">
					<el-pagination
					layout="prev, pager, next"
					:total="1000">
					</el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {getValidParaphraseList,getLawRegulationsList,getPublicTrainList} from '../../http/api'
  export default {
    data() {
      return {
		xuanchuanxian:0,
		xuanchuanxianList:[
			{title: '> 以案释法'},
			{title: '> 法律法规'},
			{title: '> 司法培训'}
		],
		value: '',
		yianshifa:"",
		yianshifa_zong:'',
		falvfagui:'',
		falvfagui_zong:'',
		kecheng_list:'',
		kecheng_zong:'',
		currentPage3: 1,
		//搜索司法培训条件信息
		searchObj:{
			coursewareType: -99,
			coursewareList: [
				{title: '全部', value: -99},
				{title: '视频', value: 1},
				{title: '文档', value: 2}
			],
			scopeKnowledge: -99,
			scopeKnowledgeList: [
				{title: '全部', value: -99},
				{title: '司法解释', value: 1},
			],
			contentClassification: -99,
			contentClassificationList: [
				{title: '全部', value: -99},
				{title: '刑法', value: 1},
				{title: '三国', value: 2},
				{title: '民法', value: 3},
				{title: '行政', value: 4},
				{title: '刑诉', value: 5},
				{title: '商经', value: 6},
				{title: '理论', value: 7},
				{title: '民诉', value: 8}
			],
			coursewareTitle: ''
		},
		//获取司法培训列表所需信息
		getPublicTrainInfo: {
			token: '',
			couType: '',
			knowledgeScope: '',
			contentType: '',
			couName: '',
			orderModel: '',
			orderType: '',
			pageNum: 1,
			pageSize: 10
		}
      };
    },
	created(){
		this.init()
	},
    methods: {
    	init(){
			getValidParaphraseList(
				{token:this.token,pageSize:10,pageNum:1}
			).then(success=>{
				this.yianshifa = success.content.dataList
				this.yianshifa_zong = success.content.pageInfo.total
			})
			getLawRegulationsList(
				{token:this.token,pageSize:10,pageNum:1}
			).then(success=>{
				this.falvfagui = success.content.dataList
				this.falvfagui_zong = success.content.pageInfo.total
			})
			getPublicTrainList().then(success=>{
				this.kecheng_list = success.content.dataList
				this.kecheng_zong = success.content.pageInfo.total
			})
		},
		handleNodeClick(data) {
			console.log(data);
		},
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
		  console.log(`当前页: ${val}`);
		},
		xuanchuan(e){
      		this.xuanchuanxian = e
		},
		xiangqing(id,type){
			this.$router.push({ path:'yianshifa_xiangqing',query:{id:id,type:type} })
		},
		xuexi(){
			console.log(111)
			this.$router.push({
				path:'/kshipin'
			})
		}
    }
  };
</script>

<style lang="scss">
	.zhengwu{
		width: 100%;

	}
	.zhengwu_top{
		width: 100%;
		height: 30px;
		display: flex;
		align-items: center;
	}
	.zhengwu_content{
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}
	.content_zwleft{
		width: 36%;
	}
	.el-tree-node__content{
		height: 38px !important;
	}
	.el-tree-node__content:hover {
	    /* background-color: -webkit-linear-gradient(left,#0fa3d5, #1b79c2) !important; */
		background: #1788c9 !important;
		color: #fff;
	}
	.content_zwyou{
		width: 58%;
		position: relative;
		padding: 15px 2%;
		background: #fff;
		.toubu_jianbian{
			width: 100%;
			height: 1px;
			background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
			position: absolute;
			top: 0;
			left: 0;
		}
	}
	.zwyou_top{
		width: 100%;
		display: flex;
		align-items: center;
		font-size: 15px;
	}
	.xuanzhong_biaoqian{
		width: 100px;
		height: 40px;
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 20px;
	}
	.zwyou_content{
		width: 100%;

		.zwyou_conlist{
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px dashed #eee;
			height: 45px;
			font-size: 15px;
			.biaodian{
				width: 3px;
				height: 3px;
				background: #333;
				margin-right: 20px;
			}
			.zhengwugk{
				width: 80%;
				display: flex;
				align-items: center;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}

	}
	.zhengwu_time{
		color: #999;
		font-size: 12px;
	}
	.xuanze_fa{
		width: 96%;
		height: 40px;
		padding-left: 4%;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #eee;
		background: #fff;
	}
	.fa_active{
		background:-webkit-linear-gradient(left,#0fa3d5, #1b79c2);
		color: #fff;
	}
	.xuan_imgfa{
		width: 100%;
		height: 100px;
		margin-top: 20px;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.kejian_top{
		width: 96%;
		height: 12 0px;
		padding: 0 2%;
		background: #fff;
		border: 1px solid #0077AA;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.kejiansousuo{
		width: 70px;
		height: 70px;
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
		color: #fff;
		border-radius: 5px;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.content_zwyou1{
		width: 62%;
	}
	.kechengneirong{
		width:100%;
		padding:  15px 0;
		background: #fff;
	}
	.kevheng_fenye{
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 100%;
		margin-top: 20px;
	}
</style>

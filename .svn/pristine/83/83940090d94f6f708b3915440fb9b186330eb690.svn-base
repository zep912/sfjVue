<template>
	<div class="zhengwu">
		<div class="zhengwu_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			  <el-breadcrumb-item>政务公开</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="zhengwu_content">
			<div class="content_zwleft">
				<div :class="getNewsList.newsType==index?'xuanze_fa fa_active':'xuanze_fa'" v-for="(item,index) in ArrayList" @click="xuanchuan(index,item)"> {{item}}</div>
			</div>
			<div class="content_zwyou" >
				<div class="toubu_jianbian"></div>
				<div class="zwyou_top">
					<div class="xuanzhong_biaoqian">{{title}}</div>
					<div>共计：{{datap.total}}篇</div>
				</div>
				<div class="zwyou_content">
					<div class="zwyou_conlist" v-for="(item,index) in wenlist" :key="index"
						@click="skipDetail(item.newsId,3)">
						<div class="zhengwugk">
							<div class="biaodian"></div>
							{{item.newsTitle}}
						</div>
						<div class="zhengwu_time">{{item.publishTime}}</div>
					</div>
				</div>
				<div class="kevheng_fenye">
					<el-pagination
						@current-change="handleCurrentChange"
						:current-page.sync="currentPage"
						:page-size="10"
						layout="prev, pager, next, jumper"
						:total="datap.total">
					</el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {getOpenNewsList} from '../../http/api'
  export default {
    data() {
      return {
        defaultProps: {
          children: 'children',
          label: 'label'
        },
		wenlist:[],
		title:'组织机构',
		datap:{
			total:''
		},
		ArrayList: ['组织机构','公示信息','通知公告','新闻咨询','办事指南','征求意见'],
		getNewsList: {
			token: sessionStorage.getItem("token"),
			newsType: 0,
			pageNum: '',
			pageSize: ''
		},
		currentPage: 1
      };
    },
	created(){
		this.init()
	},
    methods: {
		init(){
			this.getNewsList.token = sessionStorage.getItem("token");
			this.getNewsList.newsType = this.getNewsList.newsType-0+1;
			getOpenNewsList(this.getNewsList).then(success=>{
				this.wenlist = success.content.dataList;
				this.datap = success.content.pageInfo;
				this.datap.total = Number(this.datap.total);
			})
		},
		handleCurrentChange(val) {
		  console.log(`当前页: ${val}`);
		  this.getNewsList.newsType = val;
		  this.init()
		},
		xuanchuan(index,title){
			this.getNewsList.newsType = index;
			this.title = title;
			this.getNewsList.newsType = '';
			this.currentPage = 1;
			this.init();
		},
		skipDetail(id,type){
			this.$router.push({ path:'yianshifa_xiangqing',query:{id:id,type:type} })
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
		background: #fff;
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
	.kevheng_fenye{
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 100%;
		margin-top: 20px;
	}
	.el-pager li.active{
		color:#fff;
	}
</style>

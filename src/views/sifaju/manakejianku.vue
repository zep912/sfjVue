<template>
	<div class="p_conright">
		<div class="top_manalvs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item>课件库</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div>
			<div class="sifa_peixun">
				<div class="sifa_content">
					<div class="sifa_contop">
						<div>
							<div>
								<div>知识范围</div>
								<div class="toubu_youce">
									<div>
										<div class="sifa_active">全部</div>
										<div>规章制度</div>
										<div>安全</div>
									</div>
									<div>更多</div>
								</div>
							</div>
							<div>
								<div>内容分类</div>
								<div class="toubu_youce">
									<div>
										<div class="sifa_active">全部</div>
										<div>安全生产</div>
										<div>劳动保护</div>
										<div>安全标志</div>
										<div>应对措施</div>
									</div>
									<div>更多</div>
								</div>
							</div>
							<div>
								<div>课件类型</div>
								<div class="toubu_youce">
									<div>
										<div class="sifa_active">全部</div>
										<div>公开</div>
										<div>不公开</div>
									</div>
									<div>更多</div>
								</div>
							</div>
						</div>
					</div>
					<div class="sifakc_tongji">
						<div><el-button type="success" style="margin-right: 20px;" @click="add_kejian">+ 添加课件</el-button>学习次数：</div>
						<div class="tongji_youce">
							<div>共计：654634个</div>
							<div class="caidan">
								<div>
									<img src="../../assets/image/caidan.png" alt="">
								</div>
								<div>
									<img src="../../assets/image/candan2.png" alt="">
								</div>
							</div>
							<div class="sifashiti_sousuo">
								<input type="text" placeholder="请输入要搜索试题题目中的关键字">
								<div>搜索</div>
							</div>
						</div>
					</div>
					<div class="peixun_kecheng">
						<div class="kecheng_content" v-for="(item,index) in kejian_list" :key='index'>
							<div class="kecheng_toubu">
								<div class="kctb_zuo">
									<div>
										<el-checkbox v-model="checked">序号：{{index+1}}</el-checkbox>
									</div>
									<div class="kecheng_fenge"></div>
									<div>课件类型： 视频</div>
									<div class="kecheng_fenge"></div>
									<div>知识范围： {{item.knowledgeId}}</div>
									<div class="kecheng_fenge"></div>
									<div>内容分类： {{item.contentType}}</div>
									<div class="kecheng_fenge"></div>
									<div>视频时长：{{item.videoDuration}}</div>
									<div class="kecheng_fenge"></div>
									<div>学习次数： {{item.applyPosCount}}</div>
									<div class="kecheng_fenge"></div>
									<div>累计时长： {{item.applyPosCount}}</div>
								</div>
								<div class="youxe_xuexianniu">
									<div class="kaishi_xuexisi">新建学习计划</div>
									<el-button type="primary" plain>编辑</el-button>
								</div>
								
							</div>
							<div class="kecheng_pxcontent">
								<div class="kecheng_img">
									<img :src="item.cusCover" alt="">
									<div>{{item.videoDuration}}</div>
								</div>
								<div class="kecheng_jianjie">
									<div>课件标题：<span>{{item.couName}}</span></div>
									<div>课件简介：<span>{{item.cusDesc}}</span></div>
								</div>
							</div>
						</div>
						<div class="kecheng_content" v-if="video">
							<div class="kecheng_toubu">
								<div class="kctb_zuo">
									<div>
										<el-checkbox v-model="checked">序号：3</el-checkbox>
									</div>
									<div class="kecheng_fenge"></div>
									<div>课件类型： 视频</div>
									<div class="kecheng_fenge"></div>
									<div>知识范围： 司法解释</div>
									<div class="kecheng_fenge"></div>
									<div>内容分类： 1</div>
									<div class="kecheng_fenge"></div>
									<div>视频时长：</div>
									<div class="kecheng_fenge"></div>
									<div>学习次数：</div>
									<div class="kecheng_fenge"></div>
									<div>累计时长：</div>
								</div>
								<div class="youxe_xuexianniu">
									<div class="kaishi_xuexisi">新建学习计划</div>
									<el-button type="primary" plain>编辑</el-button>
								</div>

							</div>
							<div class="kecheng_pxcontent">
								<div class="kecheng_img">
									<!--<img  alt="">-->
									<video src="../../assets/video/123456.mp4" autoplay loop controls></video>
									<div>57秒</div>
								</div>
								<div class="kecheng_jianjie">
									<div>课件标题：123456<span></span></div>
									<div>课件简介：1313131313<span></span></div>
								</div>
							</div>
						</div>
						<div class="kecheng_content" v-if="doc">
							<div class="kecheng_toubu">
								<div class="kctb_zuo">
									<div>
										<el-checkbox v-model="checked">序号：4</el-checkbox>
									</div>
									<div class="kecheng_fenge"></div>
									<div>课件类型： 视频</div>
									<div class="kecheng_fenge"></div>
									<div>知识范围：  司法解释</div>
									<div class="kecheng_fenge"></div>
									<div>内容分类： 1</div>
									<div class="kecheng_fenge"></div>
									<div>视频时长：</div>
									<div class="kecheng_fenge"></div>
									<div>学习次数：</div>
									<div class="kecheng_fenge"></div>
									<div>累计时长：</div>
								</div>
								<div class="youxe_xuexianniu">
									<div class="kaishi_xuexisi">新建学习计划</div>
									<el-button type="primary" plain>编辑</el-button>
								</div>

							</div>
							<div class="kecheng_pxcontent">
								<div class="kecheng_img">
									<!--<img :src="item.cusCover" alt="">-->
									<div @click="text()">配置.docx</div>
									<!--<div></div>-->
								</div>
								<div class="kecheng_jianjie">
									<div>课件标题：<span>配置</span></div>
									<div>课件简介：<span>1212121212</span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {manakejians} from '../../http/api.js'
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
		activeName: 'second',
		tableData: [{
		   date: '2016-05-02',
		   name: '王小虎',
		   address: '上海市普陀区金沙江路 1518 弄'
		 }, {
		   date: '2016-05-04',
		   name: '王小虎',
		   address: '上海市普陀区金沙江路 1517 弄'
		 }, {
		   date: '2016-05-01',
		   name: '王小虎',
		   address: '上海市普陀区金沙江路 1519 弄'
		 }, {
		   date: '2016-05-03',
		   name: '王小虎',
		   address: '上海市普陀区金沙江路 1516 弄'
		 }],
		 lvs:1,
		 checked: true,
		 kejian_list:'',
		 chuandata:{
             token: sessionStorage.getItem("token"), //类型：String  必有字段  备注：token 用户身份标识
			// "token":"64d1d05f5ccb4670a6d342f3b3c002ce",                //类型：String  必有字段  备注：token 用户身份标识
			// "knowledgeScope":"知识范围",                //类型：String  可有字段  备注：知识范围
			// "contentType":"内容分类",                //类型：String  可有字段  备注：内容分类
			// "couName":"课件标题",                //类型：String  可有字段  备注：课件标题
			// "岗位":"mock",                //类型：String  可有字段  备注：无
			// "pageSize":"10",                //类型：String  可有字段  备注：每页显示条数
			// "pageNum":"1"
		 },
		 video:false,
		 doc:false,
		 ids:''
      }
    },
	created() {
        // let obj = {
         //
		// }
	  this.init();
	},
    mounted() {
		this.ids = this.$route.query.id;
		if(this.ids == 'release'){
		    this.video = true;
		}
		if(this.ids == 'preview'){
            this.video = true;
            this.doc = true;
        }
    },
	methods: {
          init() {
              manakejians(this.chuandata).then(res=>{
                  if(res){
                      this.kejian_list=res.content.dataList
                  }
              })
		  },
		  handleClick(tab, event) {
			console.log(tab, event);
		  },
		  lvsuo(e){
			  this.lvs = e  
		  },
		  add_kejian(){
			  this.$router.push({
				  path:'/nxinzeng_kejian'
			  })
		  },
          text(){
              this.$router.push({
                  path:'/fileOne'
              })
		  }
	}
  }
</script>

<style lang="scss">
	.publice{
		width: 100vw;
	}
	.publice_top{
		width: 90%;
		padding: 0 5%;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
	}
	.p_top_left img{
		width: 55px;
		height: 57px;
		margin-right: 20px;
	}
	.p_top_left{
		display: flex;
		align-items: center;
		color: #fff;
		font-size: 28px;
		font-weight: 600;
		
	}
	.p_top_right img{
		width: 52px;
		height: 52px;
		border-radius: 3px;
		margin-right: 20px;
	}
	.p_top_right{
		display: flex;
		align-items: center;
		
	}
	.name_p{
		width: 100px;
		text-align: left;
		color: #fff;
		
	}
	.name_p>div:nth-child(1){
		font-size: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.name_p>div:nth-child(2){
		font-size: 14px;
		margin-top: 10px;
	}
	.publice_content{
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}
	.kecheng_img img{
		width: 100%;
		height: 100%;
	}
	.active2{
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
	}
	.p_conright{
		width: 100%;
	}
	.tightp_top{
		width: 96%;
		padding: 0 2%;
		height: 70px;
		background: #fff;
		border-bottom: 1px solid #eee;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	/* .right_select{
		margin-left: 40px;
	} */
	.p_search{
		width: 400px;
		height: 38px;
		border: 1px solid #999;
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		overflow: hidden;
	}
	.p_search input{
		padding-left: 20px;
		border: 0;
	}
	.p_search .searchp{
		width: 100px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background:-webkit-linear-gradient(left,#0fa3d5, #1b79c2);
	}
	.p_page{
		width: 94%;
		padding: 0 3%;
		display: flex;
		justify-content: flex-end;
		margin-top: 20px;
	}
	.el-tabs__content{
		display: none;
	}
	.p_conright .el-table th{
		background: #1884c7 !important;
		color: #fff;
	}
	.top_manalvs{
		width: 96%;
		padding: 0 2%;
		height: 70px;
		display: flex;
		align-items: center;
		background: #fff;
		border-bottom: 1px solid #eee;
	}
	.mana_tab{
		width: 94%;
		padding: 20px 3%;
		display: flex;
		align-items: center;
		font-size: 14px;
		background: #f7f7f7;
		div{
			padding: 0 20px;
		}
		.lvshixiac{
			position: relative;
			color: #0077AA;
			font-weight: 600;
		}
		.lvshixiac:after{
			width: 80px;
			height: 2px;
			background: #0077AA;
			position: absolute;
			top: 30px;
			left: 10px;
			content: '';
			
		}
	}
	.youxe_xuexianniu{
		display: flex;
		align-items: center;
		.kaishi_xuexisi{
			margin-right: 20px;
		}
	}
	.sifa_peixun{
		width: 100%;
	}
	.sifa_content{
		width: 98%;
		padding: 10px 1%;
	}
	.sifa_contop{
		width: 100%;
		
	}
	.sifa_contop>div{
		border: 1px solid #c0c4cc;
		border-bottom: 0;
	}
	.sifa_contop>div>div{
		display: flex;
		align-items: center;
		border-bottom: 1px solid #C0C4CC;
	}
	.sifa_contop>div>div>div:nth-child(1){
		width: 20%;
		height: 45px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #eee;
		border-right: 1px solid #C0C4CC;
	}
	.toubu_youce{
		width: 80%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.toubu_youce>div:nth-child(1){
		display: flex;
		align-items: center;
		div{
			width: 100px;
			height: 35px;
			border-radius: 5px;
			// border: 1px solid #eee;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0 10px;
		}
		.sifa_active{
			background: #068FD4;
			color: #fff;
		}
	}
	.toubu_youce>div:nth-child(2){
		font-size: 14px;
		color: #068FD4;
		padding-right: 20px;
	}
	.sifakc_tongji{
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #eee;
	}
	.tongji_youce{
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.caidan{
		width: 80px;
		height: 35px;
		border: 1px solid #eee;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 20px;
		border-radius: 5px;
		img{
			width: 15px;
			height: 15px;
		}
		div{
			width: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		div:nth-child(1){
			border-right: 1px solid #eee;
		}
		
	}
	.tongji_youce .sifashiti_sousuo{
		display: flex;
		align-items: center;
		margin: 0 20px;
		input{
			width: 230px;
			height: 35px;
			padding-left: 10px;
			border-radius: 5px 0 0 5px;
			border: 1px solid #eee;
			font-size: 14px;
		}
		div{
			width: 80px;
			height: 36px;
			border-radius: 0 5px 5px 0;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #fff;
			background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
		}
	}
	.peixun_kecheng{
		width: 100%;
		height: 30vw;
		overflow: auto;
	}
	.peixun_kecheng::-webkit-scrollbar{
		display:none;
	}
	.kecheng_content{
		width: 100%;
		border:1px solid #eee;
		margin-top: 20px;
		.kecheng_toubu{
			width: 98%;
			padding: 10px 1%;
			border-bottom: 1px solid #EEE;
			background: #f7f7f7;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
	.kctb_zuo{
		display: flex;
		align-items: center;
		.kecheng_fenge{
			margin: 0 15px;
			width: 1px;
			height: 20px;
			background: #333;
		}
	}
	.kaishi_xuexisi{
		width: 120px;
		height: 35px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		border-radius: 5px;
		background: #44cc35;
	}
	.kecheng_pxcontent{
		width: 96%;
		padding: 10px 2%;
		display: flex;
		align-items: center;
		.kecheng_img{
			width: 13%;
			height: 120px;
			background: #0EA9D7;
			position: relative;
			margin-right: 20px;
			div{
				width: 96%;
				padding: 6px 2%;
				color: #fff;
				background: rgba(0,0,0,0.5);
				position: absolute;
				bottom: 0;
				text-align: left;
				font-size: 14px;
			}
		}
		.kecheng_jianjie{
			color: #999;
			text-align: left;
			span{
				color: #333;
				display: inline-block;
				margin-left: 20px;
			}
			div:nth-child(2){
				margin-top: 20px;
			}
		}
	}
</style>

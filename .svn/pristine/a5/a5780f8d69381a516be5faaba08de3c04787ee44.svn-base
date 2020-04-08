<template>
	<div class="publice">
		<div class="publice_top">
			<div class="p_top_left">
				<img src="../../assets/image/u896.png" alt="">
				“智慧司法”网络平台
			</div>
			<div class="p_top_right">
				<div>
					<img src="../../assets/image/u50353.png" alt="">
				</div>
				<div class="name_p">
					<div>用户名54654</div>
					<div>退出</div>
				</div>
			</div>
		</div>
		<div class="publice_content">
			<div class="p_conleft">
				<div>
					<img src="../../assets/image/u58.png" alt="">
				</div>
				<div class="active2">
					<img src="../../assets/image/u73.png" alt="">
				</div>
				<div>
					<img src="../../assets/image/u511.png" alt="">
				</div>
				<div>
					<img src="../../assets/image/u515.png" alt="">
				</div>
				<div>
					<img src="../../assets/image/u514.png" alt="">
				</div>
				<div>
					<img src="../../assets/image/u72.png" alt="">
				</div>
				<div>
					<img src="../../assets/image/u522.png" alt="">
				</div>
			</div>
			<div class="p_conright">
				<div class="tightp_top">
					<el-breadcrumb separator-class="el-icon-arrow-right">
						<el-breadcrumb-item @click.native="tabclick(1)">律师入驻</el-breadcrumb-item>
						<el-breadcrumb-item @click.native="tabclick(2)">律师资料审批</el-breadcrumb-item>
						<el-breadcrumb-item @click.native="tabclick(3)">律师响应</el-breadcrumb-item>
						<el-breadcrumb-item @click.native="tabclick(4)">值班律师表</el-breadcrumb-item>
						<el-breadcrumb-item @click.native="tabclick(5)">律师解答</el-breadcrumb-item>
						<el-breadcrumb-item @click.native="tabclick(6)">律师回复</el-breadcrumb-item>
						<el-breadcrumb-item  @click.native="tabclick(7)">律师管理</el-breadcrumb-item>
						<el-breadcrumb-item  @click.native="tabclick(8)">新增律师</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				<div>
					<shenpis v-if='select==2'></shenpis>
					<ruzhu v-if='select==1'></ruzhu>
					<zhendui v-if='select==3'></zhendui>
					<zhibana v-if='select==4'></zhibana>
					<lawjiedas v-if='select==5'></lawjiedas>
					<lawhuifu v-if='select==6'></lawhuifu>
					<manalaws v-if='select==7'></manalaws>
					<addlaws v-if='select==8'></addlaws>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import law_shenpi from '../lawyar_ruzhu/law_shenpi.vue'
	import law_ruzhu from '../lawyar_ruzhu/publice.vue'
	import zhenduis from '../lawyer/zhenduixing.vue'
	import zhiban from '../lawyer/zhiban_law.vue'
	import law_jieda from '../lawyer/jieda.vue'
	import law_huifu from '../lawyer/law_huifu.vue'
	import manalaw from '../lawyer/mana_law.vue'
	import addlaw from '../lawyer/add_lawyer.vue'
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
		 select:1
      }
    },
	components:{
		'shenpis':law_shenpi,
		'ruzhu':law_ruzhu,
		'zhendui':zhenduis,
		'zhibana':zhiban,
		'lawjiedas':law_jieda,
		'lawhuifu':law_huifu,
		'manalaws':manalaw,
		'addlaws':addlaw
	},
	methods: {
		  handleClick(tab, event) {
			console.log(tab, event);
		  },
		  tabclick(e){
			  console.log(11111)
			  this.select=e
		  }
	}
  }
</script>

<style>
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
	.p_conleft{
		text-align: center;
		border-right: 1px solid #eee;
		background: #fff;
	}
	.p_conleft img{
		width:25px;
		height: 20px;
	}
	.p_conleft>div{
		height: 70px;
		width: 70px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 1px solid #eee;
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
</style>

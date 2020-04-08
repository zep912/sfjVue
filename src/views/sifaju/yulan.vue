<template>
	<div class="zaixianzixun">
		<div class="zaixian_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item :to="{path:'falv_liebiao'}">普法宣传</el-breadcrumb-item>
			  <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="qingjia_neirong">
			
		</div>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	      title:''
	    }
	  },
	  created() {
	  	this.title =  this.$route.query.name
	  },
	  methods:{
		  
	  }
	}
</script>

<style lang="scss">
	.zaixianzixun{
		width: 100%;
		height: 100%;
	}
	.zaixian_top{
		width: 98%;
		height: 70px;
		padding-left: 2%;
		border-bottom: 1px solid #eee;
		display: flex;
		align-items: center;
	}
	.zixun_content{
		width: 100%;
	}
	.zixun_tab{
		width: 94%;
		padding: 10px 3%;
		background: #f2f2f2;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.zixun_tab>div{
		width: 120px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.zixun_liebiao{
		width: 96%;
		padding: 20px 2%;
	}
	.liebiao_top{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.liebiao_topzuo{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 40%;
	}
	.liebiao_sousuo{
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.liebiao_sousuo input{
		width: 160px;
		height: 38px;
		padding-left: 10px;
		font-size: 14px;
		border-radius: 5px 0 0 5px;
		border: 1px solid #eee;
	}
	.liebiao_search{
		width: 80px;
		height: 40px;
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0 5px 5px 0;
	}
	.zixun_fenye{
		width: 100%;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.zixun_active{
		color: #068FD4;
		position: relative;
		font-weight: 600;
	}
	.zixun_active:after{
		width: 100px;
		height: 2px;
		background: #068FD4;
		position: absolute;top: 34px;
		left: 10px;
		content: '';
	}
	.biaoge{
		margin-top: 20px;
	}
	.qingjia_neirong{
		width: 96%;
		padding: 20px 2%;
	}
	.shoujihoama1{
		width: 89.2%;
		display: flex;
		align-items: center;
		margin-top: 20px;
		justify-content: space-between;
		.flex{
			width: 45%;
		}
	}
	.yiwen{
		width: 30px !important;
		height: 30px !important;
		position: absolute;
		right: 10%;
	}
	.tankuang{
		width: 100vw;
		height: 100vh;
		background: rgba(0,0,0,0.5);
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		.gengduo_caozuo{
			width: 260px;
		
			background: #fff;
			border-radius: 5px;
			overflow: hidden;
			.gengduo_toubu{
				width: 100%;
				height: 40px;
				background:-webkit-linear-gradient(left,#0fa3d5, #1b79c2);
				color: #fff;
				font-weight: 600;
				font-size: 18px;
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
				img{
					width: 25px;
					height: 25px;
					position: absolute;
					top: 4px;
					right: 10px;
				}
			}
			.qignjiazd{
				width: 96%;
				padding: 20px 2%;
				div:nth-child(1){
					font-size: 20px;
					color: #0077AA;
					margin-bottom: 15px;
					text-align: center;
				}
				div{
					line-height: 22px;
					text-align: left;
					font-size: 14px;
				}
			}
			.gengduo_neirong{
				width: 56%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-wrap: wrap;
				padding:20px 22% ;
				a{
					display: inline-block;
					width: 45%;
					height: 60px;
					margin-bottom: 20px;
					display: inline-block;
					div{
						width: 100%;
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 5px;
						background:-webkit-linear-gradient(left,#0fa3d5, #1b79c2);
						color: #fff;
					}
				}
				div:nth-child(3){
					background: -webkit-linear-gradient(left, #d50f8f, #991bc2);
				}
				div:nth-child(4){
					background: -webkit-linear-gradient(left, #0fd531, #bfc21b);
				}
			}
		}
	}
</style>

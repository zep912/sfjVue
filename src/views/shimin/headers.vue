<template>
		<div class="detail_top">
			<div class="top_con">
				<div>
					<div class="law_yar">
						<img src="../../assets/image/u896.png" alt="">
						<div>
							<p>“智慧司法”网络平台</p>
							<p>"intelligence and justice" network platform</p>
						</div>
					</div>
					<div>
						<div class="top_right" v-if="!userlogin">
							<div>注册</div>
							<div>|</div>
							<div @click="gologin">登录</div>
						</div>
						<div class="top_right" v-if="userlogin">
							您好 {{name}},注销
						</div>
						<div class="guanjian">
							<input type="text" placeholder="请输入关键字查询">
							<div class="search">搜索</div>
						</div>
					</div>
				</div>
			</div>
			<div class="top-tab">
				<div class="tab_banxin">
					<router-link :to="{path: '/shimin'}" :class="xuanzhong==1?'heaser_active':''" @click.native="dianji(1)">
						<div>首页</div>
					</router-link>
					<router-link :to="{path: '/zhengwu'}" :class="xuanzhong==2?'heaser_active':''" @click.native="dianji(2)">
						<div>政务公开</div>
					</router-link>
					<router-link :to="{path: '/falvfuwu'}" :class="xuanzhong==3?'heaser_active':''" @click.native="dianji(3)">
						<div>法律服务</div>
					</router-link>
					<router-link :to="{path: '/lvshilist'}" :class="xuanzhong==4?'heaser_active':''" @click.native="dianji(4)">
						<div>律师信息</div>
					</router-link>
					<router-link :to="{path: '/pufa_xc'}" :class="xuanzhong==5?'heaser_active':''" @click.native="dianji(5)">
						<div>普法宣传</div>
					</router-link>
					<router-link :to="{path: '/sifa_ditusm'}" :class="xuanzhong==6?'heaser_active':''" @click.native="dianji(6)">
						<div>司法地图</div>
					</router-link>
					<router-link :to="{path: '/juzhang_xinxiang'}" :class="xuanzhong==7?'heaser_active':''" @click.native="dianji(7)">
						<div>局长信箱</div>
					</router-link>
				</div>
			</div>
		</div>
</template>

<script>
	export default {
	  data() {
	    return {
	      xuanzhong:1,
		  userlogin:false,
		  name:''
	    }
	  },
	  created() {
		  console.log(sessionStorage.getItem("name"))
	  	if(sessionStorage.getItem("name")){
			this.userlogin=true
			this.name = sessionStorage.getItem("name")
		}
	  },
	  methods:{
		  zaixian(e){
			this.$emit('ziyemian',e)  
		  },
		  dianji(e){
			  this.xuanzhong = e
			  this.$emit('daohang_xuanzhong',e)
		  },
		  gologin(){
			  this.$router.push({
				  path:"/"
			  })
		  }
	  }
	}
</script>

<style lang="scss">
	.detail_top{
		width: 100%;
	}
	.top_con{
		width: 100%;
		height: 100px;
		background: #fff;
	}
	.top_con>div{
		width: 1200px;
		height: 100px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
	}
	.law_yar{
		display: flex;
		align-items: center;
		text-align: left;
	}
	.law_yar img{
		width: 55px;
		height: 60px;
		margin-right: 20px;
	}
	.law_yar p:nth-child(1){
		font-size: 35px;
		color: #333;
		font-weight: 600;
	}
	.law_yar p:nth-child(2){
		font-size: 18px;
		color: #999;
		font-weight: 600;
	}
	.top_right{
		width: 110px;
		padding: 7px 10px;
		background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 13px;
		color: #fff;
		border-radius: 3px;
		position: absolute;
		top: 0;
		right: 0;
	}
	.guanjian{
		width: 395px;
		height: 38px;
		border-radius: 5px;
		border: 1px solid #0ea9d7;
		display: flex;
		align-items: center;
		margin-top: 30px;
		position: relative;
		overflow: hidden;
	}
	.guanjian input{
		padding-left: 15px;
		border: 0;
	}
	.guanjian .search{
		width: 80px;
		height: 38px;
		position: absolute;
		top: 0;
		right: 0;
		background:-webkit-linear-gradient(left,#0fa3d5, #1b79c2) ;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.top-tab{
		width: 100%;
		height: 60px;
		background:-webkit-linear-gradient(left,#0fa3d5, #1b79c2) ;
	}
	.tab_banxin{
		width: 100%;
		height: 60px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.tab_banxin>a{
		display: inline-block;
		width: 12.5%;
		font-size: 18px;
		color: #fff;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.heaser_active{
		background: #06b1e4;
	}
	@media screen and(max-width: 1200px){
		.top-tab{
			width:1200px;
		}
	}
</style>

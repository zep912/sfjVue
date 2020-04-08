<template>
	<div class="zhize_you">
		<div class="zhize_toubu">职责</div>
		<div class="zhize_neirong">
			<div>
				<div class="title">
					<div></div>
					公共法律服务平台
				</div>
				<div class="fenlei" style="justify-content: flex-start;display: flex;padding: 20px;">
					<router-link :to="{path: '/lvshiguan'}">
						<div>
							<div>
								<img src="../../assets/image/tubiao_03.png" alt="">
							</div>
							<div class="lvshi_wen">律师管理</div>
						</div>
					</router-link>
					<router-link :to="{path: '/lvsuo_zixun'}">
						<div>
							<div>
								<img src="../../assets/image/tubiao_09.png" alt="">
							</div>
							<div class="lvshi_wen">针对性咨询</div>
						</div>
					</router-link>
<!--					<router-link :to="{path: '/sifa_peixun'}">-->
<!--						<div>-->
<!--							<div>-->
<!--								<img src="../../assets/image/tubiao_13.png" alt="">-->
<!--							</div>-->
<!--							<div class="lvshi_wen">以案释法</div>-->
<!--						</div>-->
<!--					</router-link>-->
				</div>
			</div>
		</div>
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
		  zaixian(e){
			this.$emit('ziyemian',e)  
		  }
	  }
	}
	
</script>

<style>
	.fenlei a{
		display: inline-block;
		margin: 0px 20px 0 0 ;
		color: #333;
	}
	.fenlei a .lvshi_wen{
		margin-top: 10px;
		font-size: 15px;
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
	.zhize_you{
		width: 100%;
		height: 100%;
	}
</style>

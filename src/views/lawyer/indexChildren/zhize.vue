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
					<router-link :to="{path: '/zaixianzixun'}">
						<div>
							<div>
								<img src="../../../assets/image/tubiao_09.png" alt="">
							</div>
							<div class="lvshi_wen">在线咨询</div>
						</div>
					</router-link>
					<router-link :to="{path: '/ditu'}">
						<div>
							<div>
								<img src="../../../assets/image/tubiao_19.png" alt="">
							</div>
							<div class="lvshi_wen">司法地图</div>
						</div>
					</router-link>
					<router-link :to="{path: '/sifa_peixun'}">
						<div>
							<div>
								<img src="../../../assets/image/tubiao_13.png" alt="">
							</div>
							<div class="lvshi_wen">司法培训</div>
						</div>
					</router-link>
					<router-link :to="{path: '/pufaxuanchuan'}">
						<div>
							<div>
								<img src="../../../assets/image/tubiao_17.png" alt="">
							</div>
							<div class="lvshi_wen">普法宣传</div>
						</div>
					</router-link>
					<router-link :to="{path: '/zhiban_law'}">
						<div>
							<div>
								<img src="../../../assets/image/tubiao_81.png" alt="">
							</div>
							<div class="lvshi_wen">值班律师表</div>
						</div>
					</router-link>
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
		width: 70%;
		height: 100%;
	}
</style>

<template>
	<div class="shimin">
		<headers @daohang_xuanzhong="nav"></headers>
		<div class="shimin_shouye">
			<router-view></router-view>
		</div>
		<div class="daohang_router">
			<div>
				<img src="../../assets/image/sifaxiaoix.png" alt="">
			</div>
			<div>
				<img src="../../assets/image/zhiding.png" alt="">
			</div>
		</div>
		<bottom></bottom>
	</div> 
</template>
<script>
	import header from './headers.vue';
	import bottom from './bottom.vue';
	import Swiper from "swiper"
	import 'swiper/dist/css/swiper.min.css';
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import { AMapManager } from 'vue-amap';
	export default {
		components: {
			'headers':header,
			'bottom':bottom,
			swiper,
			swiperSlide 
		},
		data() {
		    return {
				xuanzhong:'/'
		    };
		},
		created() {
		  
		},
			
		methods: {
		  nav(data){
			  this.xuanzhong = data
		  }
		}
	}; 
</script>
<style lang="scss">
	.shimin{
		width: 100%;
		background: rgb(242,242,242);
	}
	.shimin_shouye{
		width: 80%;
		margin: 20px auto;
		min-height: 33vw;
	}
	.shenheone_text{
		width: 90%;
		padding: 20px 5%;
		// box-sizing: border-box;
		border: 1px solid #eee;
	}
	.shenheone_text .text_aa{
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}
	.text_aa div{
		width: 50%;
	}
	.text_betten{
		width: 90px;
		display: inline-block;
		text-align: justify;
		margin-top: 14px;
		// line-height: 20px;
	}
	.text_betten i{ 
	    display: inline-block;
	    width: 100%;
	}
	.name_span{
		color: #ff0000;
		font-size: 30px;
		display: inline-block;
		margin: 15px 15px 0;
	}
	@media screen and (max-width: 1200px){
		.shimin_shouye{
			width: 1200px;
		}
	}
	.waring_info_border{
		border-color: red;
        .el-input__inner{
            border-color: red;
        }
    }
	.daohang_router{
		width: 100px;
	}
	.daohang_router>div{
		width: 50px;
		height: 50px;
		background: #fff;
		box-shadow: 0px 1px 2px #999;
		border-radius: 3px;
		overflow: hidden;
		position: fixed;
		bottom: 120px;
		right: 7%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.daohang_router>div img{
		width: 70%;
		height: 70%;
	}
	.daohang_router>div:nth-child(1){
		bottom: 180px;
	}
</style>

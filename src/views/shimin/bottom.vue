<template>
	<div class="bottom">
		<div class="bottom_banxin">
			<div>
				<div class="left-one">
					<div>网站地图</div>
					<div class="fenge">|</div>
					<div>网站声明</div>
					<div class="fenge">|</div>
					<div>联系我们</div>
				</div>
				<div class="tishi_text">
					All Rights Reserved Copyright 2005-2018   辽阳市司法局　版权所有
				</div>
				<div class="tishi_text">
					辽ICP备12011155号-1
				</div>
			</div>
			<div>
				<img src="../../assets/image/u891.png" class="img_one" alt="">
				<img src="../../assets/image/u892.png" class="img_two" alt="">
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.bottom{
		width: 100%;
		height: 100px;
		background: #fff;
		border-top: 1px dashed #eee;
	}
	.bottom_banxin{
		width: 80%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100px;
	}
	.left-one{
		font-size: 15px;
		color: #333;
		display: flex;
		align-items: center;
	}
	.fenge{
		margin: 0 20px;
	}
	.tishi_text{
		font-size: 14px;
		color: #999;
		text-align: left;
		margin-top: 15px;
	}
	.img_two{
		margin-left: 35px;
		width: 110px;
		height: 55px;
	}
	.img_one{
		width: 51px;
		height: 62px;
	}
	@media screen and (max-width: 1200px){
		.bottom_banxin{
			width: 1200px;
		}
	}
</style>

<template>
	<div class="zhengwu">
		<div class="zhengwu_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			  <el-breadcrumb-item>法律服务</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="fl_biaoqianshan">
			<div>
				<router-link :to="{name:'zaixianzixun'}">
					<div >
						<span class="iconfont icon-zi_xun"></span>
					</div>
					<div>在线咨询</div>
				</router-link>
			</div>
			<div>
				<router-link :to="{path:'yuyue'}">
					<div>
						<span class="iconfont icon-yu_yue"></span>
					</div>
					<div>在线预约</div>
				</router-link>
			</div>
			<div>
				<router-link :to="{name:'sifakaoshi'}">
					<div>
						<span class="iconfont icon-kaoshi"></span>
					</div>
					<div>司法考试</div>
				</router-link>
			</div>
			<div>
				<router-link :to="{name:'qzyijian'}">
					<div>
						<span class="iconfont icon-yijianfankui"></span>
					</div>
					<div>群众批评意见</div>
				</router-link>
				
			</div>
		</div>
		<div class="zhengwu_content">
			<div class="top_backcolor"></div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>

  export default {
    data() {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1'
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1'
          }, {
            label: '二级 2-2'
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1'
          }, {
            label: '二级 3-2',
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
      };
    },
    methods: {
		handleNodeClick(data) {
			console.log(data);
		},
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		},
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
	.fl_biaoqianshan{
		width: 100%;
		display: flex;
		align-items: center;
		span{
			display: inline-block;
			width: 50px;
			height: 50px;
			background: #068FD4;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 28px;
			border-radius: 50%;
			color: #fff;
			margin: 0 auto;
			margin-bottom: 20px;
		}
	}
	.fl_biaoqianshan>div{
		padding: 35px 10px;
		border: 1px solid #0086B3;
		margin-right: 20px;
		background: #fff;
		width: 90px;
		font-size: 14px;
		font-weight: 600;
	}
	.fl_biaoqianshan>div:hover{
		background: #0086B3;
		color: #fff;
	}
	.fl_biaoqianshan>div:hover a{
		background: #0086B3;
		color: #fff;
	}
	.fl_biaoqianshan>div:hover span{
		background: #fff;
		color: #068FD4;
	}
	.zhengwu_content{
		width: 100%;
		background: #fff;
		position: relative;
		margin-top: 15px;
		.top_backcolor{
			width: 100%;
			height: 1px ;
			position: absolute;
			top: 0;
			left: 0;
			background:-webkit-linear-gradient(left,#0fa3d5, #1b79c2) ;
		}
	}
	a{
		color: #333;
	}
</style>

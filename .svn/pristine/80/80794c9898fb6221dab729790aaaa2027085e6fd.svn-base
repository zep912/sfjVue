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
				<el-tree
				  :data="data"
				  :props="defaultProps"
				  accordion
				  @node-click="handleNodeClick">
				</el-tree>
			</div>
			<div class="geren_youxe">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        data: [{
          label: '我的咨询',
          children: [{
            label: '免费咨询'
          },{
			label: '针对性咨询'
		}]
        }, {
          label: '我的预约',
          children: [{
            label: '法律援助预约'
          }, {
            label: '人民调解预约'
          }]
        }, {
          label: '个人信息'
        },{
			label: '意见反馈'
		},{
			label: '在线绘画'
		}],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data.label);
        if(data.label=='我的咨询'||data.label=='免费咨询'){
			this.$router.push({
				path:'/mianfeizixun'
			})
		}else if(data.label=='针对性咨询'){
			this.$router.push({
				path:'/zhenduixing'
			})
		}else if(data.label=='我的预约'||data.label=='法律援助预约'){
			this.$router.push({
				path:'/falvyuanzhu'
			})

		}else if(data.label=='人民调解预约'){
			this.$router.push({
				path:'/renmintiaojie'
			})
		}else if(data.label=='个人信息'){
			this.$router.push({
				path:'/gerenxinxi'
			})
		}else if(data.label=='意见反馈'){
			this.$router.push({
				path:'/yijianfankui'
			})
		}
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
		width: 22%;
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
	.geren_youxe{
		width: 76%;
		
	}

</style>

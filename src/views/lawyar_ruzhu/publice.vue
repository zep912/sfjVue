<template>
	<div class="p_conright">
		<div style="width: 100%;background: #f2f2f2;">
			<el-tabs v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
			    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
			    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
			    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
			</el-tabs>
		</div>
		<div class="tightp_top" style="border: 0;">
			<!-- <el-button type="success">新增律所</el-button>
			<el-button type="primary">导入</el-button> -->
			<div class="right_select">
				所属区域：
				<el-select v-model="value" placeholder="请选择">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
			</div>
			<div class="right_select" >
				擅长专业：
				<el-select v-model="value" placeholder="请选择">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
			</div>
			<div class="right_select">
				账号状态：
				<el-select v-model="value" placeholder="请选择">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
			</div>
			<div class="p_search">
				<input type="text" placeholder="请输入律所名称查询">
				<div class="searchp">
					<img src="../../assets/image/u2290.png" alt="">
				</div>
			</div>
		</div>
		<div>
			<el-table
			    :data="tableData"
			    border
			    style="width: 100%">
			    <el-table-column
			      prop="date"
			      label="序号"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="姓名"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="营业执照">
			    </el-table-column>
				<el-table-column
				  prop="address"
				  label="所属区域">
				</el-table-column>
				<el-table-column
				  prop="address"
				  label="执业机构擅长专业">
				</el-table-column>
				<el-table-column
				  prop="address"
				  label="账号状态">
				</el-table-column>
				<el-table-column
				  prop="address"
				  label="操作">
				</el-table-column>
			  </el-table>
		</div>
		<div class="p_page">
			<el-pagination
			  background
			  layout="prev, pager, next"
			  :total="1000">
			</el-pagination>
		</div>
	</div>
</template>

<script>
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
		 }]
      }
    },
	methods: {
		  handleClick(tab, event) {
			console.log(tab, event);
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

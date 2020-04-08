<template>
	<div class="p_conright">
		<div class="top_manalvs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
			  <el-breadcrumb-item>公车管理</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="mana_tab">
			<div :class="lvs==1?'lvshixiac':''" @click="lvsuo(1)">车辆信息</div>
			<div :class="lvs==2?'lvshixiac':''" @click="lvsuo(2)">司机信息</div>
		</div>
		<div  v-if="lvs==1">
			<div class="tightp_top" style="border: 0;">
				<router-link :to="{path:'nchel_dengji'}">
					<el-button type="success">车辆登记</el-button>
				</router-link>
				<div class="right_select" >
					车辆状态：
					<el-select v-model="value" placeholder="请选择">
					    <el-option
					      v-for="item in carstatus"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				</div>
				<div class="right_select">
					关联司机：
					<el-select v-model="value" placeholder="请选择">
					    <el-option
					      v-for="item in guanlian_siji"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				</div>
				<div class="p_search">
					<input type="text" style="width: 80%;font-size: 15px;" placeholder="请输入车牌号查询">
					<div class="searchp">
						<img src="../../assets/image/u2290.png" alt="">
					</div>
				</div>
			</div>
			<div class="biaoge_content">
				<el-table
				    :data="tableData"
				    border>
				    <el-table-column
				      prop="date"
				      label="序号"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="车辆编号">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="车牌号">
				    </el-table-column>
					<el-table-column
					  prop="address"
					  label="关联司机">
					</el-table-column>
					<el-table-column
					  prop="address"
					  label="额定载人">
					</el-table-column>
					<el-table-column
					  prop="address"
					  label="品牌型号">
					</el-table-column>
					<el-table-column
					  prop="address"
					  label="车辆颜色">
					</el-table-column>
					<el-table-column
					  prop="address"
					  label="当前公里数">
					</el-table-column>
					<el-table-column
					  prop="address"
					  label="车辆状态">
					</el-table-column>
					<el-table-column label="操作">
					  <template slot-scope="scope">
						<el-button
						  size="mini"
						  @click="car_chakan(scope.$index, scope.row)">查看</el-button>
					  </template>
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
		<div v-if="lvs==2">
			<div class="tightp_top" style="border: 0;">
				<router-link :to="{path:'n_xinzsiji'}">
					<el-button type="success">新增</el-button>     
				</router-link>
				<div class="right_select" >
					司机状态：
					<el-select v-model="value" placeholder="请选择">
					    <el-option
					      v-for="item in sijizhuangt"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				</div>
				<div class="p_search">
					<input type="text" style="width: 80%;font-size: 15px;" placeholder="请输入司机姓名查询">
					<div class="searchp">
						<img src="../../assets/image/u2290.png" alt="">
					</div>
				</div>
			</div>
			<div class="biaoge_content">
				<el-table
				    :data="tableData"
				    border>
				    <el-table-column
				      prop="date"
				      label="序号"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="司机编号">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="司机姓名">
				    </el-table-column>
					<el-table-column
					  prop="address"
					  label="驾驶证号">
					</el-table-column>
					<el-table-column
					  prop="address"
					  label="手机号码">
					</el-table-column>
					<el-table-column
					  prop="address"
					  label="内部小号">
					</el-table-column>
					<el-table-column
					  prop="address"
					  label="司机状态">
					</el-table-column>
					<el-table-column label="操作">
					      <template slot-scope="scope">
					        <el-button
					          size="mini"
					          @click="chakansiji(scope.$index, scope.row)">查看</el-button>
							  <el-button
							    size="mini"
							    @click="handleEdit(scope.$index, scope.row)">修改</el-button>
								<el-button
								  size="mini"
								  @click="handleEdit(scope.$index, scope.row)">删除</el-button>
					      </template>
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
		
	</div>
</template>

<script>
	import {getConsultByLawyerList} from '../../http/api';
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
			lvs:1,
			carstatus:[
				{
				value: '选项1',
				label: '空闲'
				}, {
				value: '选项2',
				label: '在用'
				}, {
				value: '选项3',
				label: '暂不可用'
				}
			],
			sijizhuangt:[{
				value: '选项1',
				label: '空闲'
				}, {
				value: '选项2',
				label: '在用'
				}, {
				value: '选项3',
				label: '暂不可用'
			}],
			guanlian_siji:[{
				value: '选项1',
				label: '薛恩用（632123）'
				}, {
				value: '选项2',
				label: '薛恩用（632123）'
				}, {
				value: '选项3',
				label: '薛恩用（632123）'
				}]
		}
    },
	methods: {
		  handleClick(tab, event) {
			console.log(tab, event);
		  },
		  chakansiji(){
			  this.$router.push({
				  path:'/nsiji_yulan'
			  })
		  },
		  lvsuo(e){
			  this.lvs = e;
		  },
		  chakna(){
			  console.log(54654414)
			  this.$router.push({
				  path:'/xianchang_chakan'
			  })
		  },
		  handleEdit(){
			  console.log(54564)
			  this.$router.push({
			  	path:'/lvshi_jieda'
			  })
		  },
		  car_chakan(){
			  this.$router.push({
				  path:'/ncar_xinxiyul'
			  })
		  }
	}
  }
</script>

<style lang="scss">
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
	.top_manalvs{
		width: 96%;
		padding: 0 2%;
		height: 70px;
		display: flex;
		align-items: center;
		background: #fff;
	}
	.mana_tab{
		width: 94%;
		padding: 20px 3%;
		display: flex;
		align-items: center;
		font-size: 14px;
		background: #f7f7f7;
		div{
			width: 90px;
			padding: 0 20px;
		}
		.lvshixiac{
			position: relative;
			color: #0077AA;
			font-weight: 600;
		}
		.lvshixiac:after{
			width: 80px;
			height: 2px;
			background: #0077AA;
			position: absolute;
			top: 30px;
			left: 26px;
			content: '';
			
		}
	}
</style>

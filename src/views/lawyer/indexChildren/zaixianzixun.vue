<template>
	<div class="zaixianzixun">
		<div class="zaixian_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/zhize' }">职责</el-breadcrumb-item>
				<el-breadcrumb-item>针对性咨询列表</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="zixun_content">
			<div class="zixun_tab">
				<div :class="zixun_active==1?'zixun_active':''" @click="zixuntab(1)">免费咨询</div>
				<div :class="zixun_active==2?'zixun_active':''" @click="zixuntab(2)">针对性咨询</div>
			</div>
		</div>
		<div class="zixun_liebiao" v-if="zixun_active==2">
			<div class="liebiao_top">
				<div class="liebiao_topzuo">
					<div>
						问题类型：
						<el-select v-model="wentilx" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
					<div>
						状态：
						<el-select v-model="zhuangtai" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
				</div>
				<div class="liebiao_sousuo">
					<input type="text" v-model="sousuo" placeholder="请输入搜索内容">
					<div class="liebiao_search">
						<img src="../../../assets/image/u2290.png" alt="">
					</div>
				</div>

			</div>
			<div class="biaoge">
				<el-table :data="zhendui" border style="width: 100%" key="zhendui">
					<el-table-column type="index" label="序号" width="60">
					</el-table-column>
					<el-table-column prop="questionTitle" label="标题">
					</el-table-column>
					<el-table-column prop="questionType" label="问题类型">
					</el-table-column>
					<el-table-column prop="personName" label="提问者">
					</el-table-column>
					<el-table-column prop="personPhone" label="手机号码">
					</el-table-column>
					<el-table-column prop="consultStatus" label="状态">
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
							<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						</template>
					</el-table-column>

				</el-table>
			</div>
			<div class="zixun_fenye">
				<el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000">
				</el-pagination>
			</div>
		</div>
		<div class="zixun_liebiao" v-if="zixun_active==1">
			<div class="liebiao_top">
				<router-link :to="{path:'zixun_dengji'}">
						<el-button type="success">现场登记</el-button>
				</router-link>
				<div class="liebiao_topzuo">
					<div>
						问题类型：
						<el-select v-model="value" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
					<div>
						状态：
						<el-select v-model="value" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
				</div>
				<div class="liebiao_sousuo">
					<input type="text" placeholder="请输入搜索内容">
					<div class="liebiao_search">
						<img src="../../../assets/image/u2290.png" alt="">
					</div>
				</div>

			</div>
			<div class="biaoge">
				<el-table :data="mianfei" border style="width: 100%" key="mianfei">
					<el-table-column prop="date" label="序号" width="60">
					</el-table-column>
					<el-table-column prop="questionTitle" label="标题">
					</el-table-column>
					<el-table-column prop="personName" label="提问者">
					</el-table-column>
					<el-table-column prop="personPhone" label="手机号码">
					</el-table-column>
					<el-table-column prop="questionType" label="问题类型">
					</el-table-column>
					<el-table-column prop="consultType" label="问题来源">
					</el-table-column>
					<el-table-column prop="consultStatus" label="状态">
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<div class="zixun_fenye">
				<el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				input: '',
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
				zhendui:'',
				zixun_active: 2,
				mianfei:"",
				wentilx:'',
				zhuangtai:'',
				sousuo:''
			}
		},
		created() {
			this.init()
		},
		methods: {
			init() {
				this.$axios.post(`/api/consult/getConsultByLawyerList`, {
					"token": sessionStorage.getItem("token"), //类型：String  必有字段  备注：token 用户身份标识
					"consultType": "2", //类型：String  必有字段  备注：咨询类型 1：免费咨询；2：针对性咨询
					"questionType": this.wentilx, //类型：String  可有字段  备注：问题类型
					"consultStatus": this.zhuangtai, //类型：String  可有字段  备注：咨询状态 1：待确认；2：解答中；3；待评价；4：已评价；5：律师拒绝；6：系统拒绝；
					"questionTitle": this.sousuo, //类型：String  可有字段  备注：标题
					"createTime": "2019-05-19", //类型：String  可有字段  备注：咨询时间 格式yyyy-MM-dd
					"pageSize": "mock", //类型：String  可有字段  备注：每页显示条数
					"pageNum": "mock"
				}, {
					headers: {
						'Content-Type': 'application/json',
						'Accept-Charset': 'utf-8'
					}
				}).then((respon) => {
					if (respon) {
						this.zhendui = respon.data.content.dataList
					}
				})
				this.$axios.post(`/api/consult/getConsultByLawyerList`, {
					"token": sessionStorage.getItem("token"), //类型：String  必有字段  备注：token 用户身份标识
					"consultType": "1", //类型：String  必有字段  备注：咨询类型 1：免费咨询；2：针对性咨询
					"questionType": "d5398164bb80403592691734582c3467", //类型：String  可有字段  备注：问题类型
					"consultStatus": "1", //类型：String  可有字段  备注：咨询状态 1：待确认；2：解答中；3；待评价；4：已评价；5：律师拒绝；6：系统拒绝；
					"questionTitle": "查询标题", //类型：String  可有字段  备注：标题
					"createTime": "2019-05-19", //类型：String  可有字段  备注：咨询时间 格式yyyy-MM-dd
					"pageSize": "mock", //类型：String  可有字段  备注：每页显示条数
					"pageNum": "mock"
				}, {
					headers: {
						'Content-Type': 'application/json',
						'Accept-Charset': 'utf-8'
					}
				}).then((respon) => {
					if (respon) {
						this.mianfei = respon.data.content.dataList
					}
				})
			},
			zixuntab(e) {
				this.zixun_active = e
			},
			handleEdit(e,f) {
				this.$router.push({
					path:'/xianchang_chakan'
				})
			}
		}
	}
</script>

<style lang="scss">
	.zaixianzixun {
		width: 100%;
		height: 100%;
	}

	.zaixian_top {
		width: 98%;
		height: 70px;
		padding-left: 2%;
		border-bottom: 1px solid #eee;
		display: flex;
		align-items: center;
	}

	.zixun_content {
		width: 100%;
	}

	.zixun_tab {
		width: 96%;
		padding: 10px 2%;
		background: #f2f2f2;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.zixun_tab>div {
		width: 120px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.zixun_liebiao {
		width: 96%;
		padding: 20px 2%;
	}

	.liebiao_top {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.liebiao_topzuo {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 40%;
	}

	.liebiao_sousuo {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.liebiao_sousuo input {
		width: 160px;
		height: 38px;
		padding-left: 10px;
		font-size: 14px;
		border-radius: 5px 0 0 5px;
		border: 1px solid #eee;
	}

	.liebiao_search {
		width: 80px;
		height: 40px;
		background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0 5px 5px 0;
	}

	.zixun_fenye {
		width: 100%;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.zixun_active {
		color: #068FD4;
		position: relative;
		font-weight: 600;
	}

	.zixun_active:after {
		width: 100px;
		height: 2px;
		background: #068FD4;
		position: absolute;
		top: 34px;
		left: 10px;
		content: '';
	}

	.biaoge {
		margin-top: 20px;
	}
</style>

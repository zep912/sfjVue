<template>
	<div class="pufaxuanchuan">
		<div class="zaixian_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/zhize' }">职责</el-breadcrumb-item>
				<el-breadcrumb-item>普法宣传</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="zixun_content">
			<div class="zixun_tab">
				<div :class="zixun_active==1?'zixun_active':''" @click="zixuntab(1)">以案释法</div>
				<div :class="zixun_active==2?'zixun_active':''" @click="zixuntab(2)">法律法规</div>
			</div>
		</div>
		<div class="zixun_liebiao" v-if="zixun_active==2">
			<div class="liebiao_top">
				<div class="liebiao_topzuo">
					<div>
						效力级别：
						<el-select v-model="xiaolijibie" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
					<div>
						时效性：
						<el-select v-model="shixiaoxing" placeholder="请选择">
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
				<el-table :data="falvfagui" border style="width: 100%" key="1">
					<el-table-column type="index" label="序号" width="60">
					</el-table-column>
					<el-table-column prop="lawTitle" label="标题">
					</el-table-column>
					<el-table-column prop="scopeLevel" label="效力级别">
					</el-table-column>
					<el-table-column prop="enactOrg" label="颁布单位">
					</el-table-column>
					<el-table-column prop="lawTimeliness" label="时效性">
					</el-table-column>
					<el-table-column prop="enactDate" label="颁布日期">
					</el-table-column>
					<el-table-column prop="execDate" label="实施日期">
					</el-table-column>
					<el-table-column prop="name" label="操作">
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
				<el-button type="success">现场登记</el-button>
				<div class="liebiao_topzuo">
					<div>
						问题类型：
						<el-select v-model="wentileixing" placeholder="请选择">
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
					<input type="text" v-model="sousuo2" placeholder="请输入搜索内容">
					<div class="liebiao_search">
						<img src="../../../assets/image/u2290.png" alt="">
					</div>
				</div>

			</div>
			<div class="biaoge">
				<el-table :data="yianshifa" border style="width: 100%" key="2">
					<el-table-column type="index" label="序号" width="60">
					</el-table-column>
					<el-table-column prop="caseTitle" label="标题">
					</el-table-column>
					<el-table-column prop="caseType" label="问题类型">
					</el-table-column>
					<el-table-column prop="name" label="提问者">
					</el-table-column>
					<el-table-column prop="name" label="手机号码">
					</el-table-column>
					<el-table-column prop="publishStatus" label="状态">
					</el-table-column>
					<el-table-column prop="name" label="操作">
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
				zixun_active: 2,
				xiaolijibie:"",
				shixiaoxing:"",
				wentileixing:'',
				zhuangtai:'',
				yianshifa:"",
				sousuo2:'',
				falvfagui: []
			}
		},
		created() {
			this.init()
		},
		methods: {
			init(){
				this.$axios.post(`/api/doc/paraphrase/getCaseParaphraseByLawyerList`, {
					"token": sessionStorage.getItem("token"), //类型：String  必有字段  备注：token 用户身份标识
					"caseType":this.wentileixing,                //类型：String  可有字段  备注：案例类型
					"publishStatus":this.zhuangtai,                //类型：String  可有字段  备注：状态 1：待审核；2：驳回；3：未发布；4：已发布
					"caseTitle":"标题",                //类型：String  可有字段  备注：标题
					"pageSize":"10",                //类型：String  可有字段  备注：每页显示几条
					"pageNum":"1"    
				}, {
					headers: {
						'Content-Type': 'application/json',
						'Accept-Charset': 'utf-8'
					}
				}).then((respon) => {
					if (respon) {
						this.yianshifa = respon.data.content.dataList
					}
				})
				this.$axios.post(`/api/doc/lawRegulations/getLawRegulationsList`, {
					"token": sessionStorage.getItem("token"), //类型：String  必有字段  备注：token 用户身份标识
					"scopeLevel":this.xiaolijibie,                //类型：String  可有字段  备注：效力级别
					"lawTimeliness":this.shixiaoxing,                //类型：String  可有字段  备注：时效性
					"lawTitle":this.sousuo2,                //类型：String  可有字段  备注：标题
					"pageSize":"10",                //类型：String  可有字段  备注：每页显示几条
					"pageNum":"1"     
				}, {
					headers: {
						'Content-Type': 'application/json',
						'Accept-Charset': 'utf-8'
					}
				}).then((respon) => {
					if (respon) {
						this.falvfagui = respon.data.content.dataList
					}
				})
			},
			zixuntab(e) {
				this.zixun_active = e
			}
		}
	}
</script>

<style lang="scss">
	.pufaxuanchuan {
		width: 100%;
		height: 100%;
			.zaixian_top {
			width: 95%;
			height: 70px;
			padding-left: 5%;
			border-bottom: 1px solid #eee;
			display: flex;
			align-items: center;
		}

		.zixun_content {
			width: 100%;
		}

		.zixun_tab {
			width: 94%;
			padding: 10px 3%;
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
	}
</style>

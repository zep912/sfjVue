<template>
	<div class="zaixianzixun">
		<div class="zaixianzixun_top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/zhize' }">职责</el-breadcrumb-item>
				<el-breadcrumb-item>{{zixun_active==1?'法律咨询':'针对性咨询列表'}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="zixun_content">
			<div class="zixun_tab">
				<div :class="zixun_active==1?'zixun_active':''" @click="zixuntab(1)">免费咨询</div>
				<div :class="zixun_active==2?'zixun_active':''" @click="zixuntab(2)">针对性咨询</div>
			</div>
		</div>
		<div class="zixun_liebiao">
			<div class="liebiao_top">
				<!--<router-link class="top_btn"  v-if="zixun_active==1"  :to="{path:'zixun_dengji'}">-->
						<!--<el-button type="success">现场登记</el-button>-->
				<!--</router-link>-->
				<div class="liebiao_topzuo">
					<div class="form_item">
						<span class="item_label">问题类型：</span>
						<el-select v-model="wentileixingVal" placeholder="请选择">
							<el-option v-for="item in wentileixingList" :key="item.dictDataCode" :label="item.dictDataName" :value="item.dictDataCode">
							</el-option>
						</el-select>
					</div>
					<div class="form_item">
						<span class="item_label">状态：</span>
						<el-select v-model="consultStatusVal" placeholder="请选择">
							<el-option v-for="item in consultStatusData" :key="item.dictDataCode" :label="item.dictDataName" :value="item.dictDataCode">
							</el-option>
						</el-select>
					</div>
				</div>
				<div class="liebiao_sousuo">
					<input type="text" v-model="questionTitle" placeholder="请输入搜索内容">
					<div class="liebiao_search" @click="getConsultByLawyerList">
						<img src="../../../assets/image/u2290.png" alt="">
					</div>
				</div>

			</div>
			<div class="biaoge">
				<el-table :data="tableData" border style="width: 100%" key="mianfei">
					<el-table-column type="index" label="序号" width="60">
					</el-table-column>
					<el-table-column prop="questionTitle" label="标题">
					</el-table-column>
					<el-table-column prop="personName" label="提问者">
					</el-table-column>
					<el-table-column prop="personPhone" label="手机号码">
					</el-table-column>
					<el-table-column prop="questionTypeLabel" label="问题类型">
					</el-table-column>
					<el-table-column v-if="zixun_active==2" prop="consultTypeLabel" label="问题来源">
					</el-table-column>
					<el-table-column prop="consultStatusLabel" label="状态">
						<template slot-scope="scope">
							<span :class="scope.row.colorClass">{{scope.row.consultStatusLabel}}</span>
						</template>
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<div class="zixun_fenye">
				<el-pagination @current-change="handleCurrentChange_B"
                               :page-size="10"
                               :current-page="lvshi_fenye.pageNum"
                               layout="total, prev, pager, next, jumper"
                               :total="lvshi_fenye.total">
                </el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	import {getConsultByLawyerList, getSelectDetail} from "../../../http/api";
	export default {
		data() {
			return {
				token: sessionStorage.getItem("token"), //类型：String  必有字段  备注：token 用户身份标识
				wentileixingList:[],
				wentileixingVal: null,
				consultStatusVal: null,
				questionTitle: null,
                consultStatusData:[
                    { dictDataCode: null, dictDataName: "全部" },
                    { dictDataCode: "1", dictDataName: "待确认" },
                    { dictDataCode: "2", dictDataName: "解答中" },
                    { dictDataCode: "3", dictDataName: "待评价" },
                    { dictDataCode: "4", dictDataName: "已评价" },
                    { dictDataCode: "5", dictDataName: "律师拒绝" },
                    { dictDataCode: "6", dictDataName: "系统拒绝" }
                ],
				zixun_active: 1,
				lvshi_fenye: {
                    pageNum: 1,
                    pageSize: 10,
                    total: 0
				},
				tableData: [],
				colorClass: ''
			}
		},
		mounted() {
            this.getSelectDetailData()
            this.getConsultByLawyerList()
        },
		methods: {
			// 获取下拉列表数据
            async getSelectDetailData() {
                //问题类型
                let wentileixingData = await getSelectDetail({
                    dictCode: "wentileixing",
                    userId: "111"
                })
                this.wentileixingList = [
                    { dictDataCode: null, dictDataName: "全部" },
                    ...wentileixingData.content.resultList
                ]
			},
			//获取律所针对性咨询列表
            getConsultByLawyerList() {
                let params = {
                    token:this.token,
                    consultType:this.zixun_active == 2 ? '2' : '1',
                    questionType:this.wentileixingVal,
                    consultStatus:this.consultStatusVal,
                    questionTitle:this.questionTitle,
                    pageSize:this.lvshi_fenye.pageSize,
                    pageNum:this.lvshi_fenye.pageNum
                };
                getConsultByLawyerList(params).then(success => {
                    if (success.code == "200") {
                        this.tableData = success.content.dataList.map(i => {
							let questionType = this.wentileixingList.find(val => val.dictDataCode == i.questionType)
							console.log(questionType)
							i.questionTypeLabel = questionType&&questionType.dictDataName? questionType.dictDataName : ''
							let consultStatus = this.consultStatusData.find(val => val.dictDataCode == i.consultStatus)
							console.log(consultStatus)
							i.consultStatusLabel = consultStatus&&consultStatus.dictDataName? consultStatus.dictDataName : ''
							i.consultTypeLabel = i.consultType == 2 ? '免费咨询': '针对性咨询'
							i.colorClass = ''
							switch(i.consultStatus) {
								case 1:
									i.colorClass = 'color_1'
									break
								case 2:
									i.colorClass = 'color_2'
									break
								case 3:
									i.colorClass = 'color_3'
									break
								case 5:
								case 6:
									i.colorClass = 'color_4'
									break
							}
							return i
						})
                        this.lvshi_fenye.pageNum = success.content.pageInfo.pageNum
						this.lvshi_fenye.total = success.content.pageInfo.total
                    }
                });
            },
			handleCurrentChange_B(val) {
                this.lvshi_fenye.pageNum = val;
                this.getConsultByLawyerList();
            },
			zixuntab(e) {
				this.zixun_active = e
				this.wentileixingVal = null
				this.consultStatusVal = null
				this.questionTitle = null
				this.$nextTick(() => { this.getConsultByLawyerList() })
			},
			handleEdit(index, row) {
				console.log(index, row)
				let status = row.consultStatus
				this.$router.push({path:'/lvshixiangying', query: {consultId: row.consultId, status}})
			}
		},
		beforeRouteLeave(to, from, next) {
			const nextRoute = ['lvshixiangying']
			if (nextRoute.indexOf(to.name) > -1) {
				util.setSearchCache({ to, from, next }, { toName: to.name, pageName: 'zaixianzixun',
					request: { zixun_active: this.zixun_active, wentileixingVal: this.wentileixingVal,
						consultStatusVal: this.consultStatusVal, questionTitle: this.questionTitle, pageNum: this.lvshi_fenye.pageNum  }})
			}
			next()
		},
		beforeRouteEnter(to, from, next) {
			const nextRoute = ['lvshixiangying']
			if (nextRoute.indexOf(from.name) > -1) {
				next(vm => {
					const request = util.getSearchCache({ to, from, next }, { fromName: from.name, pageName: 'zaixianzixun' });
					vm.zixun_active = request ? request.zixun_active : vm.zixun_active;
					vm.wentileixingVal = request ? request.wentileixingVal : vm.wentileixingVal;
					vm.consultStatusVal = request ? request.consultStatusVal : vm.consultStatusVal;
					vm.questionTitle = request ? request.questionTitle : vm.questionTitle;
					vm.lvshi_fenye.pageNum = request ? request.pageNum : vm.lvshi_fenye.pageNum;
					vm.getCaseDataList()
				})
			} else {
				next(vm=>{
					vm.getCaseDataList()
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

	.zaixianzixun_top {
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
		.top_btn {
			margin-right: 20px;
		}
	}

	.liebiao_topzuo {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 50%;
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
	.form_item {
		display: flex;
		.item_label {
			display: block;
			height: 40px;
			line-height: 40px;
			width: 100px;
		}
	}
	.color_1 {
		color: #FF9933;
	}
	.color_2 {
		color: #33CC66;
	}
	.color_3 {
		color:#FFCC00;
	}
	.color_4 {
		color: #808080;
	}
</style>

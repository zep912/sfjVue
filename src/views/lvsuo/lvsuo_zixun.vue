<template>
    <div class="p_conright">
        <div class="top_manalvs">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/lvsuoindex' }">职责</el-breadcrumb-item>
                <el-breadcrumb-item>针对性咨询</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div>
            <div class="tightp_top"
                 style="border: 0;">
                <div class="right_select">
                    问题类型
                    <el-select v-model="wentileixingVal"
                               placeholder="请选择"
                               class="withScreenSelect">
                        <el-option v-for="item in wentileixingList"
                                   :key="item.dictDataCode"
                                   :label="item.dictDataName"
                                   :value="item.dictDataCode">
                        </el-option>
                    </el-select>
                </div>
                <div class="right_select">
                    状态
                    <el-select v-model="consultStatusVal"
                               placeholder="请选择"
                               class="withScreenSelect">
                        <el-option v-for="item in consultStatusData"
                                   :key="item.dictDataCode"
                                   :label="item.dictDataName"
                                   :value="item.dictDataCode">
                        </el-option>
                    </el-select>
                </div>
                <div class="right_select">
                    意向律师
                    <el-select v-model="lawerVal"
                               placeholder="请选择"
                               class="withScreenSelect">
                        <el-option v-for="item in lawerList"
                                   :key="item.lawyerId"
                                   :label="item.lawyerName"
                                   :value="item.lawyerId">
                        </el-option>
                    </el-select>
                </div>
                <div class="p_search">
                    <input v-model="questionTitle"
                           type="text"
                           placeholder="请输入标题查询">
                    <div class="searchp"
                         @click="getConsultByOfficeList">
                        <img src="../../assets/image/u2290.png"
                             alt="">
                    </div>
                </div>
            </div>
            <div class="biaoge_content">
                <el-table :data="lvsuoZixunList"
                          border
                          key="lvsuo">
                    <el-table-column label="序号"
                                     width="80">
                        <template slot-scope="scope">
                            <span>{{(lvshi_fenye.pageNum - 1) * 10 + scope.$index + 1}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="questionTitle"
                                     label="标题"></el-table-column>
                    <el-table-column prop="questionType"
                                     label="问题类型" width="260"></el-table-column>
                    <el-table-column prop="personName"
                                     label="提问者" width="180"></el-table-column>
                    <el-table-column prop="lawyerName"
                                     label="意向律师" width="180"></el-table-column>
                    <el-table-column label="状态" width="180">
                        <template slot-scope="scope">
                            <span v-if="scope.row.consultStatus == '1'" style="color: #FFCC00">待确认</span>
                            <span v-if="scope.row.consultStatus == '2'" style="color: #33CC66">解答中</span>
                            <span v-if="scope.row.consultStatus == '3'" style="color: #FF9933">待评价</span>
                            <span v-if="scope.row.consultStatus == '4'" style="color: #666666">已评价</span>
                            <span v-if="scope.row.consultStatus == '5'" style="color: red">律师拒绝</span>
                            <span v-if="scope.row.consultStatus == '6'" style="color: red">系统拒绝</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="120">
                        <template slot-scope="scope">
                            <el-button style="text-decoration: underline;"
                                       type="text"
                                       @click="handleDetail(scope.row)">查看</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="p_page">
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
    import {getConsultByOfficeList, getSelectDetail,getLawyerListByOffice} from "../../http/api";
    export default {
        data() {
            return {
                userType:sessionStorage.getItem("type"),
                token: sessionStorage.getItem("token"), //类型：String  必有字段  备注：token 用户身份标识
                /***************问题类型相关参数******************/
                wentileixingList:[],
                wentileixingVal:'',
               /****************状态相关参数******************/
                consultStatusVal:'',
                consultStatusData:[
                    { dictDataCode: "", dictDataName: "全部" },
                    { dictDataCode: "1", dictDataName: "待确认" },
                    { dictDataCode: "2", dictDataName: "解答中" },
                    { dictDataCode: "3", dictDataName: "待评价" },
                    { dictDataCode: "4", dictDataName: "已评价" },
                    { dictDataCode: "5", dictDataName: "律师拒绝" },
                    { dictDataCode: "6", dictDataName: "系统拒绝" }
                ],
                /************************意向律师*************/
                lawerVal:'',
                lawerList:[],
                /*********************分页相关参数**********/
                lvshi_fenye: {
                    pageNum: 1,
                    pageSize: 10,
                    total: 0
                },
                /*******************标题查询相关参数************/
                questionTitle:'',
                /********************表格相关参数*************/
                lvsuoZixunList:[],

            };
        },
        mounted() {
            this.getSelectDetailData();
            this.getConsultByOfficeList();
            //意向律师
            this.getLawyerListByOffice();
        },
        methods: {
            //获取意向律师查询数据
            getLawyerListByOffice(){
                let params = {
                    token:this.token
                };
                getLawyerListByOffice(params).then(success => {
                    if (success.code == "200") {
                        this.lawerList = success.content.dataList;
                        this.lawerList.push({lawyerId:'',lawyerName:'全部'})
                    }
                });
            },
            // 获取下拉列表数据
            async getSelectDetailData() {
                //问题类型
                let wentileixingData = await getSelectDetail({
                    dictCode: "wentileixing",
                    userId: "111"
                });
                this.wentileixingList = [
                    { dictDataCode: "", dictDataName: "全部" },
                    ...wentileixingData.content.resultList
                ];
            },
            //获取律所针对性咨询列表
            getConsultByOfficeList() {
                let params = {
                    token:this.token,
                    consultType:'2',
                    questionType:this.wentileixingVal,
                    lawyerId:this.lawerVal,
                    consultStatus:this.consultStatusVal,
                    questionTitle:this.questionTitle,
                    pageSize:this.lvshi_fenye.pageSize,
                    pageNum:this.lvshi_fenye.pageNum
                };
                getConsultByOfficeList(params).then(success => {
                    if (success.code == "200") {
                        this.lvsuoZixunList = success.content.dataList;
                        this.lvshi_fenye.pageNum = success.content.pageInfo.pageNum;
                        this.lvshi_fenye.total = success.content.pageInfo.total;
                    }
                });
            },
            handleCurrentChange_B(val) {
                this.lvshi_fenye.pageNum = val;
                this.getConsultByOfficeList();
            },
            //查看
            handleDetail(e){
                this.$router.push({
                	path: '/lvshijieda',query:{id:e}
                })
            }
        }
    };
</script>

<style lang="scss">
    .tightp_top {
        width: 96%;
        padding: 0 2%;
        height: 70px;
        background: #fff;
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .right_select {
        // margin-left: 40px;
        .withScreenSelect {
            width: 52%;
        }
    }
    .p_search {
        width: 400px;
        height: 38px;
        border: 1px solid #999;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
    }

    .p_search input {
        padding-left: 20px;
        border: 0;
    }

    .p_search .searchp {
        width: 100px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
    }

    .p_page {
        width: 94%;
        padding: 0 3%;
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
    }

    .el-tabs__content {
        display: none;
    }

    .p_conright .el-table th {
        background: #1884c7 !important;
        color: #fff;
    }

    .top_manalvs {
        width: 96%;
        padding: 0 2%;
        height: 70px;
        display: flex;
        align-items: center;
        background: #fff;
    }

    .mana_tab {
        width: 94%;
        padding: 20px 3%;
        display: flex;
        align-items: center;
        font-size: 14px;
        background: #f7f7f7;

        div {
            padding: 0 20px;
            font-size: 16px;
        }

        .lvshixiac {
            position: relative;
            color: #0077aa;
            font-weight: 600;
        }

        .lvshixiac:after {
            width: 80px;
            height: 2px;
            background: #0077aa;
            position: absolute;
            top: 30px;
            left: 10px;
            content: "";
        }
    }

    .toast {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        .condiv {
            width: 500px;
            background: #fff;
            border-radius: 5px;
            overflow: auto;
            max-height: 800px;
            padding-bottom: 20px;
        }
        .top {
            width: 100%;
            height: 50px;
            color: #fff;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
            font-size: 18px;
            img {
                width: 25px;
                height: 25px;
                position: absolute;
                top: 13px;
                right: 25px;
            }
        }
        .toast_content {
            width: 94%;
            padding: 20px 3%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            img {
                width: 25px;
                height: 25px;
            }
            input {
                width: 300px;
                height: 30px;
                margin-bottom: 10px;
                display: block;
                position: relative;
                top: -6px;
            }
        }
    }
</style>

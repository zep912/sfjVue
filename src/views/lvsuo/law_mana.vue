<template>
    <div class="p_conright">
        <div class="top_manalvs">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/lvsuoindex' }" v-if="userType == '3'">职责</el-breadcrumb-item>
                <el-breadcrumb-item>律师管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div>
            <div class="tightp_top"
                 style="border: 0;">
                <div style="width: 80px;display: flex;" v-if="userType == '3'">
                    <router-link :to="{path:'addlvshi'}">
                        <el-button type="success"
                                   style="padding: 12px 15px">新增律师</el-button>
                    </router-link>
                </div>
                <div class="right_select">
                    账号状态：
                    <el-select v-model="statusVal"
                               placeholder="请选择"
                               class="withScreenSelect">
                        <el-option v-for="item in accountStatus"
                                   :key="item.dictDataCode"
                                   :label="item.dictDataName"
                                   :value="item.dictDataCode">
                        </el-option>
                    </el-select>
                </div>
                <div class="right_select">
                    擅长专业：
                    <el-select v-model="majorVal"
                               placeholder="请选择"
                               class="withScreenSelect">
                        <el-option v-for="item in majorListData"
                                   :key="item.dictDataCode"
                                   :label="item.dictDataName"
                                   :value="item.dictDataCode">
                        </el-option>
                    </el-select>
                </div>
                <div class="p_search">
                    <input v-model="lawyerName"
                           type="text"
                           placeholder="请输入律师名称查询">
                    <div class="searchp"
                         @click="getAllLawyerList">
                        <img src="../../assets/image/u2290.png"
                             alt="">
                    </div>
                </div>
            </div>
            <div class="biaoge_content">
                <el-table :data="lawyerList"
                          border
                          key="lvsuo">
                    <el-table-column label="序号"
                                     width="80">
                        <template slot-scope="scope">
                            <span>{{(lvshi_fenye.pageNum - 1) * 10 + scope.$index + 1}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="lawyerName"
                                     label="姓名"
                                     width="180"></el-table-column>
                    <el-table-column prop="credentialCode"
                                     label="类型" v-if="userType == '3'"></el-table-column>
                    <el-table-column prop="areaRegionName"
                                     label="所属区域" v-if="userType == '3'"></el-table-column>
                    <el-table-column prop="credentialCode"
                                     label="执业证号"></el-table-column>
                    <el-table-column prop="areaRegionName"
                                     label="所属区域" v-if="userType != '3'"></el-table-column>
                    <el-table-column prop="credentialCode"
                                     label="职业机构"  v-if="userType != '3'"></el-table-column>
                    <el-table-column prop="adeptSpecialtys"
                                     label="擅长专业"></el-table-column>
                    <el-table-column prop="serviceCount"
                                     label="服务人数"  v-if="userType == '3'"></el-table-column>
                    <el-table-column prop="appointmentCount"
                                     label="预约次数"  v-if="userType == '3'"></el-table-column>
                    <el-table-column prop="statusDesc"
                                     label="账号状态"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button style="text-decoration: underline;"
                                       type="text"
                                       @click="handleDetail(scope.row)">查看</el-button>
                            <el-button style="text-decoration: underline;"
                                       type="text"
                                       @click="bianji(scope.row)">修改</el-button>
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
import { getLawyerListByOffice, getSelectDetail} from "../../http/api";
export default {
    data() {
        return {
            userType:sessionStorage.getItem("type"),
            title: "",
            //律师查找信息
            getLawyerInfo: {
                token: sessionStorage.getItem("token"), //类型：String  必有字段  备注：token 用户身份标识
                areaRegionId: "", //类型：String  可有字段  备注：所属区域ID
                adeptSpecialty: "", //类型：String  可有字段  备注：擅长专业编码
                status: "", //类型：String  可有字段  备注：律师状态 1：待审核； 2：待审批；3：正常；4：注销；
                lawyerName: "", //类型：String  可有字段  备注：律师姓名
                lawPos: "", //类型：String  可有字段  备注：律所职位
                posId: "1", //类型：String  可有字段  备注：岗位ID（此条件暂时作废）
                pageSize: "10", //类型：String  可有字段  备注：每页显示几条
                pageNum: "1" //类型：String  可有字段  备注：当前页
            },
            statusVal: "",
            majorVal: "",
            lawyerName: "",
            value: "",
            lawyerList: [],
            lvshi_fenye: {
                pageNum: 1,
                pageSize: 10,
                total: 0
            },
            lvs: 1,
            addshu: [
                {
                    faithType: "1", //类型：String  必有字段  备注：诚信类型 1：诚信信息；2：失信信息；
                    lawyerId: this.lawid,
                    jigou: "",
                    riqi: "",
                    neirong: "",
                    jibie: ""
                }
            ],
            addxian: false,
            lawid: "",
            currentPage: 5,
            majorListData: [],
            accountStatus: []
        };
    },
    mounted() {
        this.getSelectDetailData();
        this.getAllLawyerList();
    },
    methods: {
        // 获取下拉列表数据
        async getSelectDetailData() {
            let selectData = await getSelectDetail({
                dictCode: "shanchangzhuanye",
                userId: "111"
            });
            let selectLvshiData = await getSelectDetail({
                dictCode: "lvshizhuangtai",
                userId: "111"
            });
            this.majorListData = [
                { dictDataCode: "", dictDataName: "全部" },
                ...selectData.content.resultList
            ];
            this.accountStatus = [
                { dictDataCode: "", dictDataName: "全部" },
                ...selectLvshiData.content.resultList
            ];
        },
        getAllLawyerList() {
            let params = {
                adeptSpecialty: this.majorVal, //类型：String  可有字段  备注：擅长专业编码
                status: this.statusVal, //类型：String  可有字段  备注：律师状态 1：待审核； 2：待审批；3：正常；4：注销；
                lawyerName: this.lawyerName, //类型：String  可有字段  备注：律师姓名
                ...this.lvshi_fenye
            };
            getLawyerListByOffice(params).then(success => {
                if (success.code == "200") {
                    this.lawyerList = success.content.dataList;
                    this.lvshi_fenye.pageNum = success.content.pageInfo.pageNum;
                    this.lvshi_fenye.total = success.content.pageInfo.total;
                }
            });
        },
        handleCurrentChange_B(val) {
            this.lvshi_fenye.pageNum = val;
            this.getAllLawyerList();
        },
        bianji(row) {
            this.$router.push({
                path: "/addlvshi",
                query: { id: row.lawyerId }
            });
        },
        suoshuquyuc() {
            console.log(this.getLawOfficeInfo.areaRegionId);
            this.init();
        },
        handleEdit(lawOrgId) {
            console.log(lawOrgId);
        },
        handleDetail(row) {
            this.$router.push({
                path: "/readlvshi",
                query: {
                    id: row.lawyerId
                }
            });
        },
        chakanlvshi(e, f) {
            this.$router.push({
                path: "/lvshi_shenhe",
                query: { id: f.lawyerId, name: f.lawyerName }
            });
        },
        xinxiguanli(index, row) {
            this.addxian = true;
        },
        handleCurrentChange_A(val) {
            this.lvsuo_list.pageNum = Number(val);
            this.loadingInfo();
        },
        tianjia(e) {
            if (e == 0) {
                this.addshu.push({
                    jigou: "",
                    riqi: "",
                    neirong: "",
                    jibie: ""
                });
            } else if (e > 0 && this.addshu > 1) {
                this.addshu.splice(e, this.addshu - 1);
            }
        },
        addxians() {
            this.addxian = false;
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

<template>
    <div class="p_conright mana-law-container">
        <div class="top_manalvs">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
                <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="mana_tab">
            <div :class="lvs==1?'lvshixiac':''"
                 @click="lvsuo(1)">律所信息</div>
            <div :class="lvs==2?'lvshixiac':''"
                 @click="lvsuo(2)">律师信息</div>
        </div>
        <div v-if="lvs==1">
            <div class="tightp_top"
                 style="border: 0;">
                <div style="width: 225px;display: flex;">
                    <router-link :to="{path:'add_lvsuo'}">
                        <el-button type="success"
                                   style="padding: 12px 15px">新增律所</el-button>
                    </router-link>
                    <el-upload class="upload-demo"
                               action="http://192.168.0.133:9001/jjkj/sfj/api/lawOrg/importLawOffice"
                               :on-preview="handlePreview"
                               :on-remove="handleRemove"
                               :before-remove="beforeRemove"
                               multiple
                               :limit="3"
                               :list-type="'text'"
                               :on-exceed="handleExceed"
                               style="margin-left: 20px;">
                        <el-button class="upload-btn"
                                   type="primary">导入</el-button>
                    </el-upload>
                    <!-- <el-button type="primary" style="margin-left: 20px;">导入</el-button> -->
                </div>
                <div class="right_select">
                    所属区域：
                    <el-select clearable
                               v-model="getLawOfficeInfo.areaRegionId"
                               placeholder="请选择"
                               class="withScreenSelect">
                        <el-option :value="option"></el-option>
                        <el-option v-for="(item,index) in suoshuquyu"
                                   :key="'index'+index"
                                   :label="item.areaName"
                                   :value="item.areaId">
                        </el-option>
                    </el-select>
                </div>
                <div class="right_select">
                    执业状态：
                    <el-select clearable
                               v-model="getLawOfficeInfo.orgStatus"
                               placeholder="请选择"
                               class="withScreenSelect">
                        <el-option :value="option">全部</el-option>
                        <el-option v-for="item in zhiye"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="p_search">
                    <input type="text"
                           clearable
                           v-model="getLawOfficeInfo.orgName"
                           placeholder="请输入律所名称查询">
                    <div class="searchp"
                         @click="getLawerOfficeList">
                        <img src="../../assets/image/u2290.png"
                             alt=""/>
                    </div>
                </div>
            </div>
            <div class="biaoge_content">
                <el-table :data="lvsuo_list"
                          border
                          key="lvsuo">
                    <el-table-column label="序号"
                                     width="80">
                        <template slot-scope="scope">
                            <span>{{(lvsuo_fenye.pageNum - 1) * 10 + scope.$index + 1}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="orgName"
                                     label="律所名称"
                                     width="180"></el-table-column>
                    <el-table-column prop="lawOfficeTypeDesc"
                                     label="律所类型">
                    </el-table-column>
                    <el-table-column prop="areaAddress"
                                     label="注册地址"></el-table-column>
                    <el-table-column prop="establishTime"
                                     label="成立时间"></el-table-column>
                    <el-table-column prop="orgPrincipal"
                                     label="负责人"></el-table-column>
                    <el-table-column prop="orgTelephone"
                                     label="联系电话"></el-table-column>
                    <el-table-column label="执业状态">
                        <!-- prop="orgStatus" -->
                        <template slot-scope="scope">
                            <p :class="[{'green':lvsuo_list[scope.$index].orgStatus==1}]">{{lvsuo_list[scope.$index].orgStatus==1?'正常':'注销'}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="lawOrgId,orgName"
                                     label="操作">
                        <template slot-scope="scope">
                            <el-button type="text"
                                       @click="handleDetail(scope.row.lawOrgId,scope.row.orgName)">查看</el-button>
                            <el-button type="text"
                                       @click="bianji(scope.row.lawOrgId)">修改</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="p_page">
                <el-pagination @current-change="handleCurrentChange_A"
                               :page-size="10"
                               :current-page="lvsuo_fenye.pageNum"
                               layout="total, prev, pager, next, jumper"
                               :total="lvsuo_fenye.total">
                </el-pagination>
            </div>
        </div>
        <div v-if="lvs==2">
            <div class="tightp_top"
                 style="border: 0;">
                <div class="right_select">
                    所属区域：
                    <el-select v-model="getLawyerInfo.areaRegionId"
                               placeholder="请选择"
                               class="withScreenSelect">
                        <el-option :value="option">全部</el-option>
                        <el-option v-for="(item,index) in suoshuquyu"
                                   :key="'item1'+index"
                                   :label="item.areaName"
                                   :value="item.areaId">
                        </el-option>
                    </el-select>
                </div>
                <div class="right_select">
                    擅长专业：
                    <el-select v-model="getLawyerInfo.adeptSpecialty"
                               placeholder="请选择"
                               class="withScreenSelect">
                        <el-option :value="option"></el-option>
                        <el-option v-for="item in selectDataInfo.majorListData"
                                   :key="item.dictDataCode"
                                   :label="item.dictDataName"
                                   :value="item.dictDataCode">
                        </el-option>
                    </el-select>
                </div>
                <div class="right_select">
                    账号状态：
                    <el-select v-model="getLawyerInfo.status"
                               placeholder="请选择"
                               class="withScreenSelect">
                        <el-option v-for="item in selectDataInfo.statusListData"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="p_search">
                    <input type="text"
                           placeholder="请输入律师姓名查询"
                           v-model="getLawyerInfo.lawyerName">
                    <div class="searchp"
                         @click="getLawerList">
                        <img src="../../assets/image/u2290.png"
                             alt="">
                    </div>
                </div>
            </div>
            <div class="biaoge_content">
                <el-table :data="lvshi_list"
                          border
                          key="lvshi">
                    <el-table-column label="序号"
                                     width="80">
                        <template slot-scope="scope_b">
                            <span>{{(lvshi_fenye.pageNum - 1) * 10 + scope_b.$index + 1}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="lawyerName"
                                     label="姓名"
                                     width="180"></el-table-column>
                    <el-table-column prop="areaRegionName"
                                     label="所属区域"></el-table-column>
                    <el-table-column prop="orgName"
                                     label="执业机构"></el-table-column>
                    <el-table-column prop="adeptSpecialtys"
                                     label="擅长专业"></el-table-column>
                    <el-table-column prop="statusDesc"
                                     label="账号状态">
                        <template slot-scope="scope_b">
                            <span>{{scope_b.row.statusDesc}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作"
                                     prop="lawyerId,status">
                        <template slot-scope="scope_b">
                            <!-- <el-button type="text" @click="handleEdit(scope_b.row.lawyerId)">编辑</el-button> -->
                            <el-button type="text"
                                       @click="chakanlvshi(scope_b.row)">查看</el-button>
                            <el-button v-if="scope_b.row.status == '3'"
                                       type="text"
                                       @click="xinxiguanli(scope_b.row.lawyerId)">诚信信息管理</el-button>
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
        <div class="toast"
             v-if="addxian">
            <div class="condiv">
                <div class="top">
                    诚信信息管理
                    <img src="../../assets/image/guanbi.png"
                         @click="addxians"
                         alt="">
                </div>
                <div class="toast_content"
                     v-for="(item,index) in addHonesty"
                     :key="index+'add'">
                    <div>诚信信息</div>
                    <div>
                        <input type="text"
                               v-model="item.awardName"
                               placeholder="请输入授予机构">
                        <el-date-picker v-model="item.awardDate"
                                        align="right"
                                        type="date"
                                        :clearable="false"
                                        placeholder="请输入授予日期"
                                        value-format="yyyy-MM-dd">
                        </el-date-picker>
                        <input type="text"
                               v-model="item.awardContent"
                               placeholder="请输入授予内容">
                        <input type="text"
                               v-model="item.commendLevel"
                               placeholder="请输入表彰级别">
                    </div>
                    <div>
                        <img :src="index==0?require('../../assets/image/add2.png'):require('../../assets/image/jianhao.png')"
                             @click="tianjia(index)"
                             alt="">
                    </div>
                </div>
                <div class="toast_content"
                     v-for="(item,index) in loseHonesty"
                     :key="index+'lose'">
                    <div>失信信息</div>
                    <div>
                        <input type="text"
                               v-model="item.awardName"
                               placeholder="请输入授予机构">
                        <el-date-picker v-model="item.awardDate"
                                        align="right"
                                        type="date"
                                        :clearable="false"
                                        placeholder="请输入授予日期"
                                        value-format="yyyy-MM-dd">
                        </el-date-picker>
                        <input type="text"
                               v-model="item.awardContent"
                               placeholder="请输入授予内容">
                        <input type="text"
                               v-model="item.commendLevel"
                               placeholder="请输入表彰级别">
                    </div>
                    <div>
                        <img :src="index==0?require('../../assets/image/add2.png'):require('../../assets/image/jianhao.png')"
                             @click="tianjiaLose(index)"
                             alt="">
                    </div>
                </div>
                <div>
                    <el-button type="primary"
                               @click="saveLawyerFaith">保存</el-button>
                    <el-button>取消</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    getLawOfficeList,
    getAllLawyerList,
    getAreaList,
    getSelectDetail,
    lvshishenhe
} from "../../http/api";
import * as api from "@/http/lawyer.js";
export default {
    data() {
        return {
            option:'',
            title: "",
            suoshuquyu: [],
            suoshu: "",
            zhiye: [
                { value: "", label: "全部" },
                { value: "1", label: "正常" },
                { value: "2", label: "注销" }
            ],
            //律所查找信息
            getLawOfficeInfo: {
                areaRegionId: "", //类型：String  可有字段  备注：所属区域
                orgStatus: "", //类型：String  可有字段  备注：执业状态 1：正常；2：注销；
                orgName: "" //类型：String  可有字段  备注：律所名称
            },
            //律师查找信息
            getLawyerInfo: {
                areaRegionId: "", //类型：String  可有字段  备注：所属区域ID
                adeptSpecialty: "", //类型：String  可有字段  备注：擅长专业编码
                status: "", //类型：String  可有字段  备注：律师状态 1：待审核； 2：待审批；3：正常；4：注销；
                lawyerName: "", //类型：String  可有字段  备注：律师姓名
                lawPos: "", //类型：String  可有字段  备注：律所职位
                posId: "1" //类型：String  可有字段  备注：岗位ID（此条件暂时作废）
            },
            zhiye_value: "1",
            value: "",
            lvshi_list: [],
            lvs: 1,
            lvsuo_list: [],
            addHonesty: [
                {
                    faithType: "1", //类型：String  必有字段  备注：诚信类型 1：诚信信息；2：失信信息；
                    lawyerId: this.lawyerId,
                    awardName: "",
                    awardDate: "",
                    commendLevel: "",
                    awardContent: "",
                    awardResult: ""
                }
            ],
            loseHonesty: [
                {
                    faithType: "2", //类型：String  必有字段  备注：诚信类型 1：诚信信息；2：失信信息；
                    lawyerId: this.lawyerId,
                    awardName: "",
                    awardDate: "",
                    commendLevel: "",
                    awardContent: "",
                    awardResult: ""
                }
            ],
            addxian: false,
            lawid: "",
            lawyerId: "",
            lvsuo_fenye: {
                pageNum: 1,
                pageSize: 10,
                total: 0
            },
            lvshi_fenye: {
                pageNum: 1,
                pageSize: 10,
                total: 0
            },
            selectDataInfo: {
                majorListData: [], //律师专业列表
                statusListData: [
                    { label: "全部", value: "" },
                    { label: "待审核", value: 1 },
                    { label: "待审批", value: 2 },
                    { label: "正常", value: 3 },
                    { label: "注销", value: 4 }
                ] //状态列表
            }
        };
    },
    watch: {
        addxian(newValue, oldValue) {
            if (newValue === false) {
                this.addHonesty = [
                    {
                        faithType: "1",
                        lawyerId: this.lawyerId,
                        awardName: "",
                        awardDate: "",
                        commendLevel: "",
                        awardContent: "",
                        awardResult: ""
                    }
                ];
                this.loseHonesty = [
                    {
                        faithType: "2",
                        lawyerId: this.lawyerId,
                        awardName: "",
                        awardDate: "",
                        commendLevel: "",
                        awardContent: "",
                        awardResult: ""
                    }
                ];
            }
        }
    },
    created() {
        this.lvs = this.$route.query.type;
        switch (this.lvs) {
            case "1":
                this.title = "律所信息管理";
                this.lvsuo(1);
                break;
            case "2":
                this.title = "律师信息管理";
                this.lvsuo(2);
                break;
            default:
				this.title = "律所信息管理";
				this.lvsuo(1);
                break;
        }
        // this.init();
        this.getSelectDetailData();
        this.getAreaDataList();
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(
                `当前限制选择 3 个文件，本次选择了 ${
                    files.length
                } 个文件，共选择了 ${files.length + fileList.length} 个文件`
            );
        },
        beforeRemove(file) {
            return this.$confirm(`确定移除 ${file.name}？`);
        },
        init() {
            this.getLawerOfficeList();
            this.getLawerList();
        },
        //获取地区列表
        async getAreaDataList() {
            let areaDetail = await getAreaList();
            this.suoshuquyu = areaDetail.content.dataList;
        },
        //获取律所列表
        async getLawerOfficeList() {
            getLawOfficeList({
                ...this.getLawOfficeInfo,
                ...this.lvsuo_fenye
            }).then(success => {
                if (success.code == "200") {
                    this.lvsuo_list = success.content.dataList;
                    this.lvsuo_fenye.pageNum = success.content.pageInfo.pageNum;
                    this.lvsuo_fenye.total = success.content.pageInfo.total;
                }
            });
        },
        //搜索律师列表
        getLawerList() {
            getAllLawyerList({
                ...this.getLawyerInfo,
                ...this.lvshi_fenye
            }).then(res => {
                if (res.code == "200") {
                    this.lvshi_list = res.content.dataList;
                    this.lvshi_fenye.pageNum = res.content.pageInfo.pageNum;
                    this.lvshi_fenye.total = res.content.pageInfo.total;
                }
            });
        },
        bianji(e) {
            this.$router.push({
                path: "/add_lvsuo",
                query: { id: e }
            });
        },
        suoshuquyuc() {
            console.log(this.getLawOfficeInfo.areaRegionId);
            this.init();
        },
        lvsuo(e) {
            this.lvs = e;
            console.log(e);
            switch (this.lvs) {
                case 1:
                    this.title = "律所信息管理";
                    this.getLawyerInfo.areaRegionId = "";
                    this.getLawOfficeInfo.adeptSpecialty = "";
                    this.getLawOfficeInfo.status = "";
                    this.getLawOfficeInfo.lawyerName = "";
                    this.getLawOfficeInfo.lawPos = "";
                    this.getLawOfficeInfo.posId = "";
                    this.getLawerOfficeList();
                    break;
                case 2:
                    this.title = "律师信息管理";
                    this.getLawOfficeInfo.areaRegionId = "";
                    this.getLawOfficeInfo.orgStatus = "";
                    this.getLawOfficeInfo.orgName = "";
                    this.getLawerList();
                    break;
            }
        },
        handleDetail(lawOrgId, orgName) {
            console.log(lawOrgId);
            this.$router.push({
                path: "/lvsuo_chakan",
                query: {
                    id: lawOrgId,
                    name: orgName
                }
            });
        },
        chakanlvshi(f) {
            console.log(f);
            this.$router.push({
                path: "/lvshi_shenhe",
                query: { id: f.lawyerId, name: f.lawyerName }
            });
        },
        xinxiguanli(lawyerId) {
            this.lawyerId = lawyerId;
            this.addHonesty.forEach(item => {
                item.lawyerId = lawyerId;
            });
            this.loseHonesty.forEach(item => {
                item.lawyerId = lawyerId;
            });
            this.addxian = true;
            this.getLawyerDetail(lawyerId);
        },
        /**
         * 获取律师详情--诚信信息管理管理
         */
        getLawyerDetail(lawyerId) {
            lvshishenhe({
                lawyerId: lawyerId
            }).then(res => {
                if (
                    res.code === 200 &&
                    res.content.lawyerInfo.faithList.length > 0
                ) {
                    res.content.lawyerInfo.faithList.forEach(item => {
                        if (item.faithType == 1) {
                            this.addHonesty.push(item);
                        } else {
                            this.loseHonesty.push(item);
                        }
                    });
                }
            });
        },
        /**
         * 诚信信息管理
         */
        saveLawyerFaith() {
            let params = {
                addList: [],
                delList: []
            };
            params.addList = [...this.addHonesty, ...this.loseHonesty];
            params.addList = params.addList.filter(
                item => item.awardName.length != 0
            );
            api.saveLawyerFaith(params).then(res => {
                if (res.code === 200) {
                    this.$message({
                        message: "保存成功",
                        type: "success"
                    });
                    this.addxian = false;
                    this.getLawerList();
                } else {
                    this.$message({
                        message: res.msg,
                        type: "error"
                    });
                }
            });
        },
        delLawyerFaith(faithId) {
            let params = {
                addList: [],
                delList: [
                    {
                        faithId: faithId
                    }
                ]
            };
            api.saveLawyerFaith(params).then(res => {
                if (res.code === 200) {
                    this.$message({
                        message: "删除成功",
                        type: "success"
                    });
                } else {
                    this.$message({
                        message: res.msg,
                        type: "error"
                    });
                }
            });
        },
        handleCurrentChange_A(val) {
            this.lvsuo_fenye.pageNum = val;
            this.getLawerOfficeList();
        },
        handleCurrentChange_B(val) {
            this.lvshi_fenye.pageNum = val;
            this.getLawerList();
        },
        tianjia(e) {
            if (e == 0) {
                this.addHonesty.push({
                    faithType: "1",
                    lawyerId: this.lawyerId,
                    awardName: "",
                    awardDate: "",
                    commendLevel: "",
                    awardContent: "",
                    awardResult: ""
                });
            } else if (e > 0 && this.addHonesty.length > 1) {
                this.delLawyerFaith(this.addHonesty[e].faithId);
                this.addHonesty.splice(e, 1);
            }
        },
        tianjiaLose(e) {
            if (e == 0) {
                this.loseHonesty.push({
                    faithType: "2",
                    lawyerId: this.lawyerId,
                    awardName: "",
                    awardDate: "",
                    commendLevel: "",
                    awardContent: "",
                    awardResult: ""
                });
            } else if (e > 0 && this.loseHonesty.length > 1) {
                this.delLawyerFaith(this.loseHonesty[e].faithId);
                this.loseHonesty.splice(e, 1);
            }
        },

        addxians() {
            this.addxian = false;
        },
        // 获取下拉列表数据
        async getSelectDetailData() {
            const typeList = ["shanchangzhuanye"];
            const domList = ["majorListData"];
            for (let type = 0; type < typeList.length; type++) {
                console.log(typeList[type]);
                let selectData = await getSelectDetail({
                    dictCode: typeList[type],
                    userId: "111"
                });
                this.selectDataInfo[domList[type]] =
                    selectData.content.resultList;
                console.log(selectData);
            }
        }
    }
};
</script>

<style lang="scss">
.mana-law-container {
    .el-button--text {
        text-decoration: underline;
    }
    .upload-btn {
        width: 88px;
        background: $blue;
    }
}
.green {
    color: $green;
}
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
        width: 85px;
        height: 2px;
        background: #0077aa;
        position: absolute;
        top: 30px;
        left: 12px;
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
        max-height: 600px;
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
        input,
        .el-date-editor {
            width: 300px;
            height: 30px;
            margin-bottom: 10px;
            display: block;
            position: relative;
            top: -6px;
        }
        .el-date-editor {
            ::-webkit-input-placeholder {
                /* WebKit browsers */
                color: #666;
                font-size: 16px;
            }

            ::-moz-placeholder {
                /* Mozilla Firefox 19+ */
                color: #666;
                font-size: 16px;
            }

            :-ms-input-placeholder {
                /* Internet Explorer 10+ */
                color: #666;
                font-size: 16px;
            }
            .el-input__prefix {
                display: none;
            }
            input {
                width: 304px;
                height: 34px;
                margin-bottom: 10px;
                display: block;
                position: relative;
                top: -2px;
                border-radius: 0;
                border: 1px solid #999;
                outline: none;
                padding-left: 0;
            }
        }
    }
}
</style>

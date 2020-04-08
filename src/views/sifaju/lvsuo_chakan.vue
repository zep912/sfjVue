<template>
    <div class="p_conright"
         ref="layerContainer">
        <div class="top_manalvs">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path:'mana_law',query:{type:1}}">律所管理</el-breadcrumb-item>
                <el-breadcrumb-item>{{name}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="mana_tab">
            <div :class="lvs==1?'lvshixiac':''"
                 @click="lvsuo(1)">基本信息</div>
            <div :class="lvs==2?'lvshixiac':''"
                 @click="lvsuo(2)">机构人员</div>
        </div>
        <div v-show="lvs==1">
            <div class="shenheone_text"
                 style="border: 0;">
                <div class="text_aa">
                    <div>
                        <div class="flex">
                            <span class="text_betten">律所名称<i></i></span>： {{data.orgName}}
                        </div>
                        <div class="flex">
                            <span class="text_betten">机构代码<i></i></span>： {{data.orgCode}}
                        </div>
                        <div class="flex">
                            <span class="text_betten">负责人<i></i></span>： {{data.orgPrincipal}}
                        </div>
                        <div class="flex">
                            <span class="text_betten">注册地址<i></i></span>： {{data.areaAddress}}
                        </div>
                        <div class="flex">
                            <span class="text_betten">执业状态<i></i></span>： {{data.orgStatus==1?'正常':'注销'}}
                        </div>

                    </div>
                    <div>
                        <div class="flex">
                            <span class="text_betten">律所类型<i></i></span>：{{data.lawOfficeTypeDesc}}
                        </div>
                        <div class="flex">
                            <span class="text_betten">成立时间<i></i></span>： {{data.establishTime}}
                        </div>
                        <div class="flex">
                            <span class="text_betten">联系电话<i></i></span>： {{data.orgTelephone}}
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <span class="text_betten">律所简介<i></i></span>：<div class="lvsuojianjie">{{data.orgDesc}}</div>
                </div>
                <div class="flex">
                    <span class="text_betten">照片<i></i></span>： <img v-for="(item,index) in data.imgList" :key='index' v-bind:src="item.fileUrl" alt="" />

                </div>
            </div>
        </div>
        <div v-show="lvs==2">
            <div class="content-con">
                <div class="topcon"
                     v-for="(item,index) in lvshidata"
                     :key="index">
                    <div>
                        <img :src="item.photoUrl"
                             class="left-image"
                             alt="">
                    </div>
                    <div class="lawyer_name">
                        <div><span class="lawyer_name_info">{{item.lawyerName}}律师 </span><span>（执业{{item.operationYears}}年）</span></div>
                        <div class="last2">
                            <div>电话<i></i></div>：<span>{{item.lawyerPhone}}</span>
                        </div>
                        <div class="last">
                            <div>擅长专业：</div>
                            <div>{{item.adeptSpecialtys}}</div>
                        </div>
                    </div>
                </div>
                <div class="fenyess">
                    <el-pagination @current-change="handleCurrentChange"
                                   :page-size="10"
                                   :current-page="pagination.pageNum"
                                   layout="total, prev, pager, next, jumper"
                                   :total="pagination.total">
                    </el-pagination>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import { getLawOfficeDetail, getLawyerListByOffice } from "../../http/api";
export default {
    data() {
        return {
            lvs: 1,
            data: "",
            name: "",
            lvshidata: [],
            detials: {
                token: sessionStorage.getItem("token"), //类型：String  必有字段  备注：token 用户身份标识
                lawOrgId: this.$route.query.id
            },
            pagination: {
                pageNum: 1,
                pageSize: 10,
                total: 0
            },
            lawOrgId: ""
        };
    },
    created() {
        this.name = this.$route.query.name;
        this.lawOrgId = this.$route.query.id;
        this.$nextTick(() => {
            let pageSize = 10;
            while (
                pageSize %
                    Math.floor(this.$refs.layerContainer.clientWidth / 325) !==
                0
            ) {
                pageSize = pageSize + 1;
            }
            this.pagination.pageSize = pageSize;
        });
        this.getLawOfficeDetail();
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        lvsuo(e) {
            this.lvs = e;
        },
        getLawOfficeDetail() {
            getLawOfficeDetail({
                lawOrgId: this.lawOrgId
            }).then(success => {
                if (success.code == "200") {
                    this.data = success.content;
                    this.getLawyerListByOffice();
                }
            });
        },
        getLawyerListByOffice() {
            let userType = sessionStorage.getItem("type");
            let params = {};
            if (userType === "3") {
                params = { ...this.pagination };
            } else {
                params = { ...this.pagination, lawOrgId: this.lawOrgId };
            }
            getLawyerListByOffice(params).then(success => {
                if (success.code == "200") {
                    this.lvshidata = success.content.dataList;
                    this.pagination.total = success.content.pageInfo.total;
                }
            });
        },
        handleCurrentChange(val) {
            this.pagination.pageNum = val;
            this.getLawyerListByOffice();
        }
    }
};
</script>

<style lang="scss">
.p_conright {
    width: 100%;
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
/* .right_select{
		margin-left: 40px;
	} */
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
.lvsuojianjie {
    width: 80%;
    padding: 10px;
    min-height: 80px;
    border: 1px solid #333;
    text-align: left;
    margin: 20px 0;
}
.content-con {
    width: 96%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 20px 2%;
}
.content-con > div {
    width: 325px;
    height: 163px;
    background: #fff;
    margin-top: 20px;
    margin-right: 1%;
    margin-left: 1%;
}
.topcon {
    width: 94%;
    padding: 10px 15px;
    border: 1px solid #ededed;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.left-image {
    width: 90px;
    height: 120px;
    margin-right: 10px;
}
.lawyer_name {
    text-align: left;
    width: 70%;
    .lawyer_name_info {
        font-size: 18px !important;
        color: #158ccb !important;
        // display: inline-block;
        // @include ellipsis(58%);
        span {
            vertical-align: middle;
        }
    }
}
.lawyer_name > div:nth-child(1) span {
    font-size: 14px;
    color: #333;
}
.lawyer_name > div:nth-child(2) {
    font-size: 14px;
    color: #158ccb;
}
.lawyer_name > div:nth-child(2),
.lawyer_name > div:nth-child(3) {
    font-size: 13px;
    color: #333;
    margin-top: 10px;
}
.last,
.last2 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.last > div:nth-child(1) {
    // width: 120px;
}
.last2 > div:nth-child(1) {
    width: 52px;
    display: inline-block;
    text-align: justify;
    margin-top: 10px;
}
.last2 > div:nth-child(1) i {
    display: inline-block;
    width: 100%;
}
.two_con {
    width: 94%;
    padding: 10px 3%;
    background: rgba(21, 140, 203, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.two_con > div {
    text-align: center;
}
.two_con > div div:nth-child(1) {
    font-size: 17px;
    color: #333;
    font-weight: 600;
}
.two_con > div div:nth-child(2) {
    font-size: 14px;
    color: #999;
}
.content-con .fenyess {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
</style>

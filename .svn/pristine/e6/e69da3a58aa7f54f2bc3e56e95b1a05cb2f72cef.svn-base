<template>
    <div class="gerens">
        <div class="geren_zixunf" style="background: #fff">
            <div>
                问题类型
                <el-select v-model="type_checked" style="width: 50%">
                    <el-option
                            v-for="item in prombleType"
                            :key="item.questionType"
                            :label="item.title"
                            :value="item.questionType">
                    </el-option>
                </el-select>
            </div>
            <div>
                状态
                <el-select v-model="stauts_checked" style="width: 50%">
                    <el-option
                            v-for="item in prombleStatus"
                            :key="item.consultStatus"
                            :label="item.title"
                            :value="item.consultStatus">
                    </el-option>
                </el-select>
            </div>
            <div class="mianfeisousuo">
                <input type="text"  placeholder="输入查找的关键字">
                <div>搜索</div>
            </div>

        </div>
        <div class="content_zwyou">
            <div class="toubu_jianbian"></div>

            <div class="zwyou_top">
                <div class="xuanzhong_biaoqian">法律援助预约</div>
                <div>共计：{{ownerLawAidList.pageInfo.total}}篇</div>
            </div>
            <div class="zwyou_content">
                <div class="zwyou_conlist" v-for="(item,index) in ownerLawAidList.dataList" :key="index">
                    <div class="zhengwugk">
                        <div class="biaodian"></div>
                        {{item.applyId}}
                    </div>
                    <div>{{item.applyStatus}}</div>
                    <div class="zhengwu_time">{{item.appointmentDate}} {{item.appointmentTime}}</div>
                </div>
            </div>
            <div class="kevheng_fenye">
                <el-pagination
                        @current-change="handleCurrentChange"
                        :current-page.sync="getOwnerLawAidContent.pageNum"
                        :page-size="getOwnerLawAidContent.pageSize"
                        layout="prev, pager, next, jumper"
                        :total="ownerLawAidList.pageInfo.total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import {getOwnerLawAidList} from '../../../http/api'
    export default {
        data(){
            return{
                //问题类型
                type_checked: -99,
                prombleType: [
                    {questionType: -99,title: '全部'},
                    {questionType: 1,title: '民事'},
                    {questionType: 2,title: '商事'},
                    {questionType: 3,title: '刑事律法'},
                    {questionType: 4,title: '保险'},
                    {questionType: 5,title: '劳动与社会保障'},
                ],
                //问题状态
                stauts_checked: -99,
                prombleStatus: [
                    {consultStatus: -99,title: '全部'},
                    {consultStatus: 1,title: '待确认'},
                    {consultStatus: 2,title: '解答中'},
                    {consultStatus: 3,title: '待评价'},
                    {consultStatus: 4,title: '已评价'},
                    {consultStatus: 5,title: '律师拒绝'},
                    {consultStatus: 6,title: '系统拒绝'},
                ],
                getOwnerLawAidContent: {
                    token: '',
                    pageSize: 10,
                    pageNum: 1
                },
                //咨询列表信息
                ownerLawAidList: {}
            }
        },
        mounted() {
            this.getOwnerLawAidList();
        },
        methods: {
            getOwnerLawAidList(){
                this.getOwnerLawAidContent.token = this.token;
                getOwnerLawAidList(this.getOwnerLawAidContent).then(success=>{
                    this.ownerLawAidList = success.content;
                    this.ownerLawAidList.pageInfo.total = Number(this.ownerLawAidList.pageInfo.total);
                })
            },
            // checkProType(id,check){
            //     if(check == 1){
            //         this.waithSearch.questionType = id;
            //     }else if(check == 2){
            //         this.waithSearch.consultStatus = id;
            //     }
            // },
            handleCurrentChange(pageNum){
                this.getOwnerLawAidContent.pageNum = pageNum;
                this.getOwnerLawAidList();
            }
        },
    }
</script>

<style lang="scss">
    .gerens{
        width: 100%;
    }
    .content_zwyou{
        width: 96%;
        position: relative;
        padding: 15px 2%;
        margin-top: 15px;
        background: #fff;
        .toubu_jianbian{
            width: 100%;
            height: 1px;
            background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
            position: absolute;
            top: 0;
            left: 0;
        }
    }
    .zwyou_top{
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 15px;
    }
    .xuanzhong_biaoqian{
        width: 100px;
        height: 40px;
        background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
    }
    .zwyou_content{
        width: 100%;

        .zwyou_conlist{
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px dashed #eee;
            height: 45px;
            font-size: 15px;
            .biaodian{
                width: 3px;
                height: 3px;
                background: #333;
                margin-right: 20px;
            }
            .zhengwugk{
                width: 80%;
                display: flex;
                align-items: center;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }

    }
    .zhengwu_time{
        color: #999;
        font-size: 12px;
    }
    .geren_zixunf{
        width: 98%;
        padding:15px 1%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .zixunf_fenlei{
            width: 18%;
            color: #333;
            background: #fff;
            padding: 15px 0;
            div{
                margin: 12px 0;
                font-size:15px;
            }
            .shuzi{
                font-size: 23px;
                color: #0077AA;
                font-weight: 600;
                margin: 0;
            }
        }
        .iconfont{
            font-size: 30px;
            color: #0077AA;
        }

    }
    .kevheng_fenye{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        margin-top: 20px;
    }
    .mianfeisousuo{
        display: flex;
        align-items: center;
        div{
            width: 80px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
            border-radius: 0 5px 5px 0;
        }
        input{
            border: 1px solid #eee;
            border-radius: 5px 0 0 5px;
            padding-left: 10px;
            height: 40px;
        }
    }
</style>
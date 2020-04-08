<template>
    <div class="gerens">
        <div class="geren_zixunf" style="background: #fff">
            <div>
                问题类型
                <el-select v-model="type_checked" placeholder="请选择" style="width: 50%" @change="checkProType(type_checked,1)">
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
                <el-select v-model="stauts_checked" placeholder="请选择" style="width: 50%" @change="checkProType(stauts_checked,2)">
                    <el-option
                        v-for="item in prombleStatus"
                        :key="item.consultStatus"
                        :label="item.title"
                        :value="item.consultStatus">
                    </el-option>
                </el-select>
            </div>
            <div class="mianfeisousuo">
                <input type="text"  placeholder="输入查找的关键字" v-model="waithSearch.questionTitle">
                <div @click="submitSearch">搜索</div>
            </div>

        </div>
        <div class="content_zwyou">
            <div class="toubu_jianbian"></div>

            <div class="zwyou_top">
                <div class="xuanzhong_biaoqian">免费咨询</div>
                <div>共计：{{ownerConsultList.pageInfo.total}}篇</div>
            </div>
            <div class="zwyou_content" v-for="(item,index) in ownerConsultList.dataList" :key="index">
                <div class="zwyou_conlist">
                    <div class="zhengwugk">
                        <div class="biaodian"></div>
                        {{item.questionTitle}}
                    </div>
                    <div>{{item.consultStatus}}</div>
                    <div class="zhengwu_time">{{item.createTime}}</div>
                </div>

            </div>
            <div class="kevheng_fenye">
                <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="getOwnerConsultContent.pageNum"
                    :page-size="getOwnerConsultContent.pageNum"
                    layout="prev, pager, next, jumper"
                    :total="ownerConsultList.pageInfo.total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import {getOwnerConsultList} from '../../../http/api';
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
                //待搜索内容
                waithSearch: {
                    questionType: '',
                    consultStatus: '',
                    questionTitle: ''
                },
                getOwnerConsultContent: {
                    token: '',
                    consultType: '1',
                    questionType: '',
                    consultStatus: '',
                    questionTitle: '',
                    createTime: '',
                    pageSize: 10,
                    pageNum: 1
                },
                //咨询列表信息
                ownerConsultList: {}
            }
        },
        mounted() {
            this.getOwnerConsultList();
        },
        methods: {
            getOwnerConsultList(){
                this.getOwnerConsultContent.token = this.token;
                getOwnerConsultList(this.getOwnerConsultContent).then(success=>{
                    this.ownerConsultList = success.content;
                    const arrayList = ['待确认','解答中','待评价','已评价','律师拒绝','系统拒绝'];
                    for( let item of this.ownerConsultList.dataList.entries()){
                        item[1].consultStatus = arrayList[item[1].consultStatus-1]
                    };
                    this.ownerConsultList.pageInfo.total = Number(this.ownerConsultList.pageInfo.total);
                })
            },
            checkProType(id,check){
                if(check == 1){
                    this.waithSearch.questionType = id;
                }else if(check == 2){
                    this.waithSearch.consultStatus = id;
                }
            },
            submitSearch(){
                this.getOwnerConsultContent.questionType = this.waithSearch.questionType;
                this.getOwnerConsultContent.consultStatus = this.waithSearch.consultStatus;
                this.getOwnerConsultContent.questionTitle = this.waithSearch.questionTitle;
                this.getOwnerConsultList();
            },
            handleCurrentChange(pageNum){
                this.getOwnerConsultContent.pageNum = pageNum;
                this.getOwnerConsultList();
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
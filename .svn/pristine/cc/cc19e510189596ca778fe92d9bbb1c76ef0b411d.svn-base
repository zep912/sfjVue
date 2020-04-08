<template>
    <div class="gerens">
        <div class="geren_zixunf">
            <div class="zixunf_fenlei">
                <span class="iconfont icon-zi_xun"></span>
                <div>免费咨询</div>
                <div class="shuzi">{{indexDataDetal.freeCount}}</div>
            </div>
            <div class="zixunf_fenlei">
                <span class="iconfont icon-zi_xun"></span>
                <div>针对性咨询</div>
                <div class="shuzi">{{indexDataDetal.assignCount}}</div>
            </div>
            <div class="zixunf_fenlei">
                <span class="iconfont icon-zi_xun"></span>
                <div>法律援助咨询</div>
                <div class="shuzi">{{indexDataDetal.lawCount}}</div>
            </div>
            <div class="zixunf_fenlei">
                <span class="iconfont icon-zi_xun"></span>
                <div>人民调解预约</div>
                <div class="shuzi">{{indexDataDetal.mediateCout}}</div>
            </div>
            <div class="zixunf_fenlei">
                <span class="iconfont icon-zi_xun"></span>
                <div>意见反馈</div>
                <div class="shuzi">{{indexDataDetal.feedbackCout}}</div>
            </div>
        </div>
        <div class="content_zwyou">
            <div class="toubu_jianbian"></div>

            <div class="zwyou_top">
                <div class="xuanzhong_biaoqian">近期咨询</div>
                <div>共计：{{recentlyContent.pageInfo.total}}篇</div>
            </div>
            <div class="zwyou_content">
                <div class="zwyou_conlist" v-for="(item,index) in recentlyContent.dataList" :key="index">
                    <div class="zhengwugk">
                        <div class="biaodian"></div>
                        {{item.consultType}}
                        <div class="space_content"></div>
                        {{item.consultTitle}}
                    </div>
                    <div class="zhengwu_time">{{item.consultDate}}</div>
                </div>
            </div>
            <div class="kevheng_fenye">
                <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="getRecentlyList.pageSize"
                    layout="prev, pager, next, jumper"
                    :total="recentlyContent.pageInfo.total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import {indexData,recentlyConsultList} from '../../../http/api';
    export default {
        data(){
            return{
                currentPage:1,
                indexDataDetal: {},
                getRecentlyList: {
                    token: '',
                    pageSize: 5,
                    pageNum: ''
                },
                recentlyContent: ''
            }
        },
        mounted() {
            this.getIndexData();
            this.getRecentlyData();
        },
        methods: {
            getIndexData(){
                indexData({token:this.token}).then(success=>{
                    this.indexDataDetal = success.content.countData;
                });
            },
            getRecentlyData(){
                this.getRecentlyList.token = this.token;
                recentlyConsultList(this.getRecentlyList).then(success=>{
                    this.recentlyContent = success.content;
                    this.recentlyContent.pageInfo.total = Number(this.recentlyContent.pageInfo.total)
                })
            },
            handleCurrentChange(val){
                this.getRecentlyList.pageNum = val;
                this.recentlyConsultList();
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
            .space_content{
                width: 30px;
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
        width: 100%;
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
</style>
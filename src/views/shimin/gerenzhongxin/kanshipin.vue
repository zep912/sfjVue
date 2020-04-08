<template>
    <div class="kanshipin">
        <div class="zhengwu_top">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>普法宣传</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="shipin_neirong1">
            <div>
                <div class="shipin_biaoti">
                    {{data.coursewareData.couName}}
                </div>
                <div>
                    <video :src="data.coursewareData.playUrl" autoplay loop controls></video>
                </div>
            </div>
            <div>
                <div class="shipin_xinxibt">课件信息</div>
                <div>知识范围：<span>{{data.coursewareData.knowledgeScope}}</span></div>
                <div>内容分类：<span>{{data.coursewareData.contentType}}</span></div>
                <div>视频时长：<span>{{data.coursewareData.videoDuration}}</span></div>
                <div>课程简介：</div>
                <div class="jianjie_neirong">
                    {{data.coursewareData.couDesc}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                data:''
            }
        },
        created(){
            this.init()
        },
        methods:{
            init(){
                this.$axios.post(`/api/train/getPlanStudyInfo`, {
                    "token": sessionStorage.getItem("token"), //类型：String  必有字段  备注：token 用户身份标识
                    "planId":"88b691be5243443ea113e6ccc0763f10"
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept-Charset': 'utf-8'
                    }
                }).then((respon) => {
                    if (respon) {
                        this.data = respon.data.content
                    }
                })
            },
            xuexijihua(){
                this.$emit('xuexi','4')
            }
        }
    };
</script>

<style lang="scss">
    .kanshipin{
        width: 100%;
    }
    .kanshipin_top{
        width: 95%;
        height: 70px;
        padding-left: 5%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
    }
    .shipin_neirong1{
        width: 100%;
        padding: 20px 0;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        background: #fff;
        margin-top: 20px;
    }
    .shipin_neirong1>div:nth-child(1){
        width: 65%;
        video{
            width: 100%;
        }
    }
    .shipin_neirong1>div:nth-child(2){
        width: 35%;
        margin-top: 43px;
        margin-left: 20px;
        text-align: left;
        height: 22vw;
        color: #c5c5c5;
        line-height: 23px;
        overflow: auto;
        span{
            color: #333;
        }
    }
    .shipin_neirong1>div:nth-child(2)::-webkit-scrollbar{
        display:none;
    }
    .shipin_dibu{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        color: #c5c5c5;
        text-align: left;
        padding: 10px 0;

    }
    .shipin_dibu span{
        color: #333;
    }
    .shipin_dibu>div>div:nth-child(2){
        margin-top: 10px;
    }
    .shipin_jindu{
        text-align: center;

    }
    .shipin_jindu>div:nth-child(1){
        font-size: 16px;
        color: #068FD4;
    }
    .shipin_biaoti{
        text-align: left;
        color: #333;
        font-size: 23px;
        font-weight: 600;
        margin-bottom: 20px;
        padding-left: 20px;
    }
    .shipin_xinxibt{
        font-size: 18px;
        color: #068FD4;
        font-weight: 600;
        line-height: 40px;
    }
    .jianjie_neirong{
        color: #666;
        padding: 10px;
    }
    .shipin_biaoge{
        width: 90%;
        padding: 25px 5%;
    }
</style>

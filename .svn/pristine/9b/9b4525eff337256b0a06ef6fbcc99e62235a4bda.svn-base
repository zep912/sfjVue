<template>
    <div class="zixun_pingjia">
        <div class="zixun_pingjiatop">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>个人中心</el-breadcrumb-item>
                <el-breadcrumb-item>我的咨询</el-breadcrumb-item>
                <el-breadcrumb-item>电信扎啤那将军拒绝看到女家</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="zixun_content">
            <div class="law_shenpi">
                <div>
                    <el-steps :active="2" align-center>
                        <el-step title="免费咨询" description="这是一段很长很长很长的描述性文字"></el-step>
                        <el-step title="律师解答" description="这是一段很长很长很长的描述性文字"></el-step>
                        <el-step title="服务评价" description="这是一段很长很长很长的描述性文字"></el-step>
                    </el-steps>
                </div>
                <div class="shenpi_create">
                    <div class="shenpi_one">
                        <div class="tab1">针对性咨询</div>
                    </div>
                    <div class="shenheone_text">
                        <div>
                            <div class="flex">
                                <span class="text_betten">标题<i></i></span>： 电信诈骗个人所得4万，抽成4万，一共8万,赃款已经被用完了，会判几年
                            </div>
                            <div class="flex">
                                <span class="text_betten">问题类型<i></i></span>： 债权债务
                            </div>
                            <div class="flex">
                                <span class="text_betten">问题描述<i></i></span>：<textarea name="" id="" v-model="text" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <div class="text_aa">
                            <div>
                                <div class="flex">
                                    <span class="text_betten">提问者<i></i></span>： 丁月红
                                </div>
                                <div class="flex">
                                    <span class="text_betten">手机号码<i></i></span>： 26734824826
                                </div>
                                <div class="flex">
                                    <span class="text_betten">照片<i></i></span>： <img src="../../../assets/image/u3264.png" alt="">
                                </div>
                            </div>
                            <div>
                                <div class="flex">
                                    <span class="text_betten">手机号码<i></i></span>：46545646546546565456
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shenpi_create">
                    <div class="shenpi_one">
                        <div class="tab1">律师确认</div>
                        <div class="tab1_right">
                            <span>超时：59分钟/23.9小时/1.9天</span>
                            <img src="../../../assets/image/u552.png" alt="">
                            <img src="../../../assets/image/u554.png" alt="">
                        </div>
                    </div>
                    <div class="shenheone_text">
                        <div>
                            <div class="flex">
                                <span class="text_betten">确认结果<i></i></span>：系统自动拒绝
                            </div>
                        </div>
                    </div>

                </div>
                <div class="shenpi_create">
                    <div class="shenpi_one">
                        <div class="tab1">选择咨询律师</div>
                        <div class="tab1_right">
                            <span>超时：59分钟/23.9小时/1.9天</span>
                            <img src="../../../assets/image/u552.png" alt="">
                            <img src="../../../assets/image/u554.png" alt="">
                        </div>
                    </div>
                    <div style="width: 96%;padding: 10px  2%;">
                        <div class="shaixuan">
                            <div>所属区域：
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div>擅长专业：
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div>关键字：
                                <el-input v-model="input" size="small" style="width: 195px;" placeholder="请输入内容"></el-input>
                            </div>
                            <div class="search2">搜索</div>
                        </div>
                        <div class="content_sifa">
                            <div class="contetn_left">
                                <div class="active">咨询量</div>
                                <div>满意度</div>
                                <div>接案率</div>
                                <div>结案率</div>
                            </div>
                            <div>
                                共计：123456789个
                            </div>
                        </div>
                        <div class="content-con">
                            <div v-for="(item,index) in 6" :key="index">
                                <div class="topcon">
                                    <div>
                                        <img src="../../../assets/image/u3264.png" class="left-image" alt="">
                                    </div>
                                    <div class="lawyer_name">
                                        <div>张明阳律师 	<span>（执业9年）</span></div>
                                        <div class="last2"><div>电话<i></i></div>：<span>138****1535</span></div>
                                        <div class="last">
                                            <div>擅长专业：</div>
                                            <div>知识产权、房产纠纷、劳动争议、债权债务、婚姻家庭</div>
                                        </div>
                                    </div>
                                    <div class="zhenduixingzx" @click="zhendui">
                                        针对性咨询
                                    </div>
                                </div>
                                <div class="two_con">
                                    <div style="width: 28%;">
                                        <div>321</div>
                                        <div>咨询量</div>
                                    </div>
                                    <div>|</div>
                                    <div style="width: 28%;">
                                        <div>321</div>
                                        <div>服务次数</div>
                                    </div>
                                    <div>|</div>
                                    <div style="width: 28%;">
                                        <div>321</div>
                                        <div>满意度</div>
                                    </div>
                                </div>
                            </div>
                            <div class="fenyess">
                                <el-pagination
                                        background
                                        layout="prev, pager, next"
                                        :total="1000">
                                </el-pagination>
                            </div>

                        </div>
                    </div>

                </div>
                <div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
                    <el-button type="success">追问律师</el-button>
                    <el-button type="primary">提交</el-button>
                    <el-button>取消</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "zixunpingjia"
    }
</script>

<style lang="scss">
    .zixun_pingjia{
        width: 100%;
    }
    .zixun_pingjiatop{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
    }
    .zixun_content{
        width: 100%;
        background: #fff;
    }
    .law_shenpi{
        width: 94%;
        padding: 20px 3%;
    }
    .shenpi_create{
        width: 100%;
    }
    .tab1{
        width: 200px;
        height: 35px;
        border-radius:10px 10px 0 0 ;
        background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }
    .shenpi_one{
        border-bottom: 3px solid #1a7cc3;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .flex{
        display: flex;
        align-items: center;
    }
    .flex img{
        width: 100px;
    }
    .flex .el-table th{
        background: #1884c7 !important;
        color: #fff;
    }
    .tab1_right{
        display: flex;
        align-items: center;
        color: #FF6034;
    }
    .tab1_right img{
        width: 35px;
        height: 30px;
        margin-left: 20px;
    }
    .tab1_right img:nth-child(2){
        width: 40px;
    }
    .flex textarea{
        width: 80%;
        height: 150px;
        padding: 10px;
        resize:none;
    }
    .shaixuan{
        width: 94%;
        padding: 0 3%;
        height: 80px;
        background: #fff;
        margin: 20px 0;
        border: 1px solid #0EA9D7;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    .search2{
        width: 80px;
        height: 40px;
        background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
    }
    input{
        height: 40px;
        line-height: 40px;
    }
    .content_sifa{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .contetn_left{
        display: flex;
        align-items: center;

    }
    .contetn_left>div{
        width: 90px;
        height: 42px;
        margin-right: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .contetn_left .active{
        background: #fff;
        color: #0EA9D7;
    }
    .content-con{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .content-con>div{
        width: 30%;
        border: 1px solid #eee;
        background: #fff;
        margin-top: 20px;
        position: relative;
    }
    .topcon{
        width: 94%;
        padding: 10px 3%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .left-image{
        width: 90px;
        height: 120px;
    }
    .lawyer_name{
        text-align: left;
        width: 70%;
    }
    .lawyer_name>div:nth-child(1){
        font-size: 18px;
        color: #158CCB;
    }
    .lawyer_name>div:nth-child(1) span{
        font-size: 14px;
        color: #333;
    }
    .lawyer_name>div:nth-child(2){
        font-size: 14px;
        color: #158CCB;
    }
    .lawyer_name>div:nth-child(2),.lawyer_name>div:nth-child(3){
        font-size: 13px;
        color: #333;
        margin-top: 10px;
    }
    .last,.last2{
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .last>div:nth-child(1){
        width: 120px;
    }
    .last2>div:nth-child(1){
        width: 52px;
        display: inline-block;
        text-align: justify;
        margin-top: 10px;
    }
    .last2>div:nth-child(1) i{
        display: inline-block;
        width: 100%;
    }
    .two_con{
        width: 94%;
        padding: 10px 3%;
        background: rgba(21,140,203,0.1);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .two_con>div{
        text-align: center;
    }
    .two_con>div div:nth-child(1){
        font-size: 17px;
        color: #333;
        font-weight: 600;
    }
    .two_con>div div:nth-child(2){
        font-size: 14px;
        color: #999;
    }
    .content-con .fenyess{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background: #f2f2f2;
    }
    .zhenduixingzx{
        width: 50px;
        height: 40px;
        position: absolute;
        top: 10px;
        right: 10px;
        background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2) ;
        color: #fff;
        text-align: center;
        font-size: 15px;
        border-radius: 5px;
        padding-top: 10px;
    }
</style>
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
                        <el-step title="针对性咨询" description="这是一段很长很长很长的描述性文字"></el-step>
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
                        <div class="tab1">律师解答</div>
                        <div class="tab1_right">
                            <span>超时：59分钟/23.9小时/1.9天</span>
                            <img src="../../../assets/image/u552.png" alt="">
                            <img src="../../../assets/image/u554.png" alt="">
                        </div>
                    </div>
                    <div class="shenheone_text">
                        <div>
                            <div class="flex">
                                <span class="text_betten">审核结果<i></i></span>：同意
                            </div>
                            <div class="flex">
                                <span class="text_betten">律师解答<i></i></span><span style="color: #ff0000;font-size: 30px;">*</span>
                                <textarea name="" id="" value="*******************" cols="30" rows="10"></textarea>
                            </div>
                            <div class="flex">
                                <span class="text_betten" style="opacity: 0;">审核结果：<i></i></span>
                                <div class="zhuiwen">
                                    <div>用户追问：</div>
                                    <div>还有就是男方的彩礼说的是七万，可是只拿了三万给女方的爸爸修房，而且修房的人就是男方和男方的爸爸给女方的爸爸修的，现在男方叫女方还钱，可是女方现在一无所有，请问律师这样的问题该怎么处理最妥当？</div>
                                </div>
                            </div>
                            <div class="flex">
                                <span class="text_betten" style="opacity: 0;">审核结果：<i></i></span>
                                <div class="zhuiwenhui">
                                    <div>律师回复：</div>
                                    <div>协商不成，可以走法律途径。如有需要可来电联系我详谈，我再帮你分析。</div>
                                </div>
                            </div>
                            <div class="flex">
                                <span class="text_betten" style="opacity: 0;">审核结果：<i></i></span>
                                <div class="zhuiwen">
                                    <div>用户追问：</div>
                                    <div>还有就是男方的彩礼说的是七万，可是只拿了三万给女方的爸爸修房，而且修房的人就是男方和男方的爸爸给女方的爸爸修的，现在男方叫女方还钱，可是女方现在一无所有，请问律师这样的问题该怎么处理最妥当？</div>
                                </div>
                            </div>
                            <div class="flex " style="margin-top: 20px;">
                                <span class="text_betten" style="opacity: 0;">审核结果：<i></i></span>
                                <textarea name="" id="" placeholder="请输入回复内容，回复后公众联系方式可见" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="shenpi_create">
                    <div class="shenpi_one">
                        <div class="tab1">服务评价</div>
                        <div class="tab1_right">
                            <span>超时：59分钟/23.9小时/1.9天</span>
                            <img src="../../../assets/image/u552.png" alt="">
                            <img src="../../../assets/image/u554.png" alt="">
                        </div>
                    </div>
                    <div class="shenheone_text">
                        <div>
                            <div class="flex">
                                <span class="text_betten">满意度<i></i></span><span style="color: #ff0000;font-size: 30px;">*</span>
                                <el-radio v-model="radio" label="1">非常满意</el-radio>
                                <el-radio v-model="radio" label="2">满意</el-radio>
                                <el-radio v-model="radio" label="3">一般</el-radio>
                                <el-radio v-model="radio" label="4">不满意</el-radio>
                                <el-radio v-model="radio" label="5">非常不满意</el-radio>
                            </div>
                            <div class="flex">

                                <span class="text_betten">意见建议<i></i></span><span style="color: #ff0000;font-size: 30px;">*</span>
                                <textarea name="" id="" value="*******************" cols="30" rows="10"></textarea>
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
</style>
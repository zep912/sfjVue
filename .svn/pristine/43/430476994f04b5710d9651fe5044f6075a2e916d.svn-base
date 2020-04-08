<template>
    <div class="p_conright">
        <div class="tightp_top">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">职责</el-breadcrumb-item>
                <el-breadcrumb-item>针对性咨询</el-breadcrumb-item>
                <el-breadcrumb-item>爸爸的朋友借了我家3万钱不还钱，利息2分的，已经四五年了.</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="law_shenpi">
            <div>
                <el-steps :active="2" align-center>
                    <el-step title="针对性咨询" description="这是一段很长很长很长的描述性文字"></el-step>
                    <el-step title="律师确认" description="这是一段很长很长很长的描述性文字"></el-step>
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
                                <span class="text_betten">意向律师<i></i></span>： 男
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
                    <div class="tab1">律师响应</div>
                    <div class="tab1_right">
                        <span>超时：59分钟/23.9小时/1.9天</span>
                        <img src="../../../assets/image/u552.png" alt="">
                        <img src="../../../assets/image/u554.png" alt="">
                    </div>
                </div>
                <div class="shenheone_text">
                    <div>
                        <div class="flex">
                            <span class="text_betten">咨询审核<i></i></span><span style="color: #ff0000;font-size: 30px;">*</span>
                            <el-radio v-model="radio" label="1">同意</el-radio>
                            <el-radio v-model="radio" label="2">不同意</el-radio>
                        </div>
                        <div class="flex">
                            <span class="text_betten">律师解答<i></i></span><span style="color: #ff0000;font-size: 30px;">*</span>
                            <textarea name="" id="" value="*******************" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </div>

            </div>
            <div class="shenpi_create">
                <div class="shenpi_one">
                    <div class="tab1">问题解答</div>
                    <div class="tab1_right">
                        <span>超时：59分钟/23.9小时/1.9天</span>
                        <img src="../../../assets/image/u552.png" alt="">
                        <img src="../../../assets/image/u554.png" alt="">
                    </div>
                </div>
                <div class="shenheone_text">
                    <div>
                        <div class="flex">
                            <span class="text_betten">确认结果<i></i></span><span style="color: #ff0000;font-size: 30px;">*</span>
                            <el-radio v-model="radio" label="1">同意</el-radio>
                            <el-radio v-model="radio" label="2">不同意</el-radio>
                        </div>
                        <div class="flex">
                            <span class="text_betten">律师解答<i></i></span><span style="color: #ff0000;font-size: 30px;">*</span>
                            <textarea name="" id="" value="*******************" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </div>

            </div>
            <div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
                <el-button type="primary">回复提问</el-button>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                radio: '1',
                text:'我爸在农村给别人种地现在欠我们五万元，现在他家还有好多人要账，但是只有我家是工资，他们都是买化肥，给被人担保欠的钱，现在粮食省的不够分的我家想做诉前财产保全，或者财产保全法院都不允许，说不够分的，粮被法院封了，现在这个我家只能诉讼了，给我们出了一个工资欠条，这个诉讼了有没有优先权啊'
            }
        }
    }
</script>

<style lang="scss">
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

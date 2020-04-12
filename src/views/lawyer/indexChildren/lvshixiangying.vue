<template>
    <div class="p_zixun_detail">
        <div class="tightp_top">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">职责</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/zaixianzixun' }">{{consultInfo.consultTypeDesc}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{consultInfo.questionTitle}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="law_shenpi">
            <div class="step_line">
                <div class="line"></div>
                <div class="step_item" v-for="(item, index) in flowAxis" :key="index">
                    <p class="step_title">{{item.taskName}}</p>
                    <img class="yuan" src="../../../assets/image/yuandian.png" />
                    <p class="step_name">{{item.disposeName}}</p>
                    <p class="step_time">{{item.disposeTime}}</p>
                </div>
            </div>
            <div class="scroll_container">
                <div class="shenpi_create">
                    <div class="shenpi_one"  style="margin-top: 0;">
                        <div class="tab1">{{consultInfo.consultTypeDesc}}</div>
                    </div>
                    <div class="shenheone_text">
                        <div>
                            <div class="flex">
                                <span class="text_betten">标题<i></i></span>： {{consultInfo.questionTitle}}
                            </div>
                            <div class="flex">
                                <span class="text_betten">问题类型<i></i></span>： {{consultInfo.consultTypeDesc}}
                            </div>
                            <div class="flex vertical_top">
                                <span class="text_betten">问题描述<i></i></span>：<textarea class="dis_textarea" disabled name="" id="" v-model="consultInfo.questionDesc" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <div class="text_aa">
                            <div>
                                <div class="flex">
                                    <span class="text_betten">提问者<i></i></span>：{{consultInfo.applyUser}}
                                </div>
                                <div class="flex">
                                    <span class="text_betten">住址<i></i></span>：{{consultInfo.applyUserAddr}}
                                </div>
                                <div class="flex">
                                    <span class="text_betten">意向律师<i></i></span>：{{consultInfo.lawyerName}}
                                </div>
                                <div class="flex">
                                    <span class="text_betten">照片<i></i></span>： <img v-for="(item, index) in consultInfo.imgList" :key="index" :src="item" />
                                </div>
                            </div>
                            <div>
                                <div class="flex">
                                    <span class="text_betten">手机号码<i></i></span>：{{consultInfo.personPhone}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shenpi_create">
                    <div class="shenpi_one">
                        <div class="tab1">律师响应</div>
                        <div class="tab1_right">
                            <span>{{consultAnswer.timeStatus}}</span>
                            <img src="../../../assets/image/u552.png" alt="">
                            <img src="../../../assets/image/u554.png" alt="">
                            <div v-if="consultAnswer.smsFlag == '2'" class="have_icon"></div>
                        </div>
                    </div>
                    <div class="shenheone_text">
                        <div>
                            <div class="flex">
                                <span class="text_betten">咨询审核<i></i></span><span class="star">*</span>
                                <el-radio v-model="consultAnswer.approveFlag" :label="1">同意</el-radio>
                                <el-radio v-model="consultAnswer.approveFlag" :label="2">不同意</el-radio>
                            </div>
                            <div class="flex vertical_top">
                                <span class="text_betten">律师解答<i></i></span><span class="star" style="margin-top:0px;">*</span>
                                <textarea name="" id="" v-model="consultAnswer.answerContent" cols="30" rows="10"></textarea>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="shenpi_create" v-if="status != '1' && msgRecordList.length > 0">
                    <div class="shenpi_one">
                        <div class="tab1">问题解答</div>
                        <div class="tab1_right">
                            <!-- <span>超时：59分钟/23.9小时/1.9天</span> -->
                            <!-- <img src="../../../assets/image/u552.png" alt=""> -->
                            <!-- <img src="../../../assets/image/u554.png" alt=""> -->
                        </div>
                    </div>
                    <div class="shenheone_text">
                        <div>
                            <div class="msg_list" v-for="(item, index) in msgRecordList" :key="index">
                                <div class="msgTime">{{item.msgTime}}</div>
                                <div class="yuandian">
                                    <div class="line"></div>
                                    <img src="../../../assets/image/yuandian.png" />
                                </div>
                                <div class="source">{{item.msgSourceDesc}}</div>
                                <div class="content">{{item.msgContent}}</div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
            <!-- 律师响应按钮 -->
            <div v-if="status == '1'" class="btn_box">
                <el-button class="sub_btn" @click="saveLawyerAnswer">提交</el-button>
                <el-button class="cal_btn">取消</el-button>
            </div>
            <!-- 律师回复按钮 -->
            <div v-if="status != '1'" class="btn_box">
                <el-button class="res_btn" type="primary" @click="dialogFormVisible = true">回复提问</el-button>
            </div>
           </div>
           <el-dialog custom-class="submit_msg_dialog" :visible.sync="dialogFormVisible">
            <textarea name="" id="" placeholder="回复群众提问" v-model="resContent" cols="30" rows="10"></textarea>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="saveInteractionLawyerMsg">提交</el-button>
            </div>
        </el-dialog>
    </div>

</template>

<script>
import {getConsultDetail, saveInteractionLawyerMsg, saveLawyerAnswer} from "../../../http/api";
    export default {
        data() {
            return {
                status: '', // 状态 1.响应 2.解答
                flowAxis:[], //流程时间轴
                consultInfo: {approveFlag: 1, answerContent: ''}, // 咨询信息
                consultAnswer: {}, // 律师响应结果
                msgRecordList: [], // 往来消息记录列表
                dialogFormVisible: false,
                resContent: '' // 律师回复内容
            }
        },
        methods: {
            getConsultDetail() {
                let params = {
                    token: sessionStorage.getItem("token"),
                    consultId: this.$route.query.consultId
                }
                getConsultDetail(params).then(res => {
                    if (res.code == 200) {
                        let {flowAxis, consultInfo, consultAnswer, msgRecordList} = res.content
                        if(this.status == '1') consultInfo.personPhone = consultInfo.personPhone.substr(0, 3) + '****' + consultInfo.personPhone.substr(7)
                        this.flowAxis = flowAxis
                        this.consultInfo = consultInfo
                        this.consultAnswer = consultAnswer
                        this.msgRecordList = msgRecordList.map(i => {
                            i.msgSourceDesc = i.msgSource == 1 ? '律师回复' : '群众提问'
                            return i
                        })
                    }
                })
            },
            // 律师响应提交
            saveLawyerAnswer() {
                let params = {
                    token: sessionStorage.getItem("token"),
                    consultId: this.$route.query.consultId,
                    taskId: this.consultInfo.instanceId,
                    instanceId: this.flowAxis[this.flowAxis.length -1].instanceId,
                    msgSource: '1',
                    msgType: '1',
                    answerContent: this.consultAnswer.answerContent,
                    approveFlag: this.consultAnswer.approveFlag
                }
                if(!params.approveFlag) {
                    // 内容为必填
                    this.$message({
                        message: '请选择确认结果',
                        type: "error",
                        offset: "50"
                    });
                    return
                }
                if(!params.answerContent) {
                    // 内容为必填
                    this.$message({
                        message: '请填写律师解答',
                        type: "error",
                        offset: "50"
                    });
                    return
                }
                saveLawyerAnswer(params).then(res => {
                    if (res.code == 200) {
                        console.log('提交成功')
                        this.$message({
                        message: '提交成功',
                        type: "success",
                        offset: "50"
                    })
                        this.getConsultDetail()
                    } else {
                        this.$message({
                            message: res.msg,
                            type: "error",
                            offset: "50"
                        })
                    }
                })
            },
            // 律师回复提交
            saveInteractionLawyerMsg() {
                let params = {
                    token: sessionStorage.getItem("token"),
                    consultId: this.$route.query.consultId,
                    taskId: this.consultInfo.instanceId,
                    msgContent: this.resContent,
                    msgSource: '1',
                    msgType: '1',
                }
                if (!params.msgContent) {
                    // 内容为必填
                    this.$message({
                        message: '请填写内容再提交',
                        type: "error",
                        offset: "50"
                    });
                    return
                }
                saveInteractionLawyerMsg(params).then(res => {
                    console.log(res)
                    if (res.code == 200) {
                        this.$message({
                            message: '提交成功',
                            type: "success",
                            offset: "50"
                        })
                        this.dialogFormVisible = false
                        this.resContent = ''
                        this.getConsultDetail()
                    } else {
                        this.$message({
                            message: res.msg,
                            type: "error",
                            offset: "50"
                        })
                    }
                })
            }
        },
        created() {
            this.status = this.$route.query.status
            this.getConsultDetail()
        }
    }
</script>

<style lang="scss">
.p_zixun_detail {
    width: 100%;
.law_shenpi{
        width: 94%;
        padding: 20px 3%;
    }
    .scroll_container {
        width: 100%;
        height: 580px;
        overflow: auto;
        overflow-x: hidden;
        border-width: 0;
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
        position: relative;
        img {
            width: 23px;
            height: 17px;
            margin-left: 10px;
            &:nth-child(2){
                width: 22px;
                height: 17px;
            }
        }
        .have_icon {
            width: 10px;
            height: 10px;
            background-color: #fff;
            border-radius: 50%;
            background-image: url('../../../assets/images/common/modal/u452.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100% 100%;
            position: absolute;
            right: 0;
            top: 6px;
        }
    }
    .flex textarea{
        width: 80%;
        height: 150px;
        padding: 10px;
        resize:none;
    }
    .dis_textarea:disabled {
        background: #fff;
        border: 1px solid #ddd;
    }
    .step_line {
        width: 100%;
        height: 110px;
        display: flex;
        position: relative;
        .line {
            position: absolute;
            width: 100%;
            height: 1px;
            background: #ddd;
            left: 0;
            top: 32px;
        }
        .step_item {
            padding: 0 20px;
            text-align: center;
            .step_title {
                height: 23px;
                font-size: 16px;
                vertical-align: top;
                color: #666666;
            }
            .yuan {
                display: block;
                width: 20px;
                height: 20px;
                margin-left: 50%;
                transform: translateX(-50%);
                background: #fff;
            }
            .step_name {
                font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
                font-weight: 700;
                font-style: normal;
                font-size: 16px;
                color: #666666;
                vertical-align: bottom;
                margin-top: 10px;
                margin-bottom: 4px;
            }
            .step_time {
                font-size: 12px;
                color: #666666;
            }
        }
    }
    .text_betten {
        width: 66px!important;
        margin-top: 15px!important;
    }
    .star {
        color: #ff0000;
        font-size: 30px;
        margin-right: 10px;
        margin-left: 4px;
        margin-top: 10px;
    }
    .flex.vertical_top {
        align-items:flex-start;
        margin-top: 10px;
        .text_betten {
            margin-top: 0!important;
        }
    }
    .btn_box {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        .sub_btn {
            width: 120px;
            height: 40px;
            color: #fff;
            border: none;
            border-radius: 3px;
            font-size: 16px;
            background: linear-gradient(135deg, rgba(0, 170, 204, 1) 0%, rgba(0, 170, 204, 1) 0%, rgba(0, 102, 204, 1) 100%, rgba(0, 102, 204, 1) 100%);
            &:hover {
                color: #fff;
            }
        }
        .cal_btn {
            width: 120px;
            height: 40px;
            font-size: 16px;
            color: #158CCB;
            background-color: rgba(255, 255, 255, 1);
            box-sizing: border-box;
            border-width: 1px;
            border-style: solid;
            box-shadow: none;
            border-color: rgba(204, 204, 204, 1);
            border-radius: 3px;
        }
        .res_btn {
            width: 120px;
            height: 40px;
            background-color: rgba(0, 153, 0, 1);
            border: none;
            border-radius: 3px;
            font-size: 16px;
            color: #FFFFFF;
        }
    }

    .text_aa div {
        width: 100%;
    }
    .msg_list {
        height: 50px;
        text-align: left;
        display: flex;
        align-items: center;
        position: relative;
        // div {
        //     // margin-right: 20px;
        // }
        .yuandian {
            width: 50px;
            height: 50px;
            position: relative;
            .line {
                width: 1px;
                height: 90px;
                position: absolute;
                left: 25px;
                top: -20px;
                background: #ddd;
            }
            img {
            width: 15px;
            height: 15px;
            margin-left: 50%;
            margin-top: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            }
        }
        .source {
            margin-right: 20px;
        }
        .content {
            color: #666;
        }
        
       .msgTime {
           width: 75px;
           font-size: 14px;
           color: #333333;
           text-align: center;
           margin-right: 0;
       }
    }
    .submit_msg_dialog {
        border-radius: 5px;
        width: 500px;
        .el-dialog__header {
            padding: 0;
            height: 50px;
            border-radius: 5px;
            border-bottom-right-radius: 0px;
            border-bottom-left-radius: 0px;
            background: linear-gradient(135deg, rgba(13, 169, 215, 1) 0%, rgba(13, 169, 215, 1) 0%, rgba(29, 115, 192, 1) 100%, rgba(29, 115, 192, 1) 100%);
            .el-dialog__headerbtn {
                width: 30px;
                height: 30px;
                top: 10px;
                right: 10px;
                background: url('../../../assets/images/common/modal/close-btn.png') no-repeat center;
                .el-dialog__close {
                    color: #1b78c2;
                }
            }
        }
        textarea {
            width: 460px;
            height: 200px;
            font-family: 'Arial Normal', 'Arial';
            font-weight: 400;
            font-style: normal;
            font-size: 16px;
            text-decoration: none;
            color: #333333;
            text-align: left;
        }
        .el-dialog__footer {
            .dialog-footer {
                text-align: center;
                .el-button {
                    width: 100px;
                    height: 40px;
                    background: linear-gradient(135deg, rgba(0, 170, 204, 1) 0%, rgba(0, 170, 204, 1) 0%, rgba(0, 102, 204, 1) 100%, rgba(0, 102, 204, 1) 100%);
                    font-size: 16px;
                    color: #FFFFFF;
                    border: none;
                }
            }
        }
    }
}
    
</style>

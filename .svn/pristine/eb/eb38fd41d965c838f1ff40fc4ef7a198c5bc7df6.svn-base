<template>
    <div class="gerenxinxi">
        <div class="gerenxinxijian"></div>
        <div class="xinxi_top">
            <el-button type="primary">意见反馈</el-button>
        </div>
        <div class="genren_content">
            <div class="add_lvshi">
                <div class="add_child">
                    <div class="flex">
                        <span class="text_betten">标题<i></i></span><span class="name_span" >*</span>
                        <el-input v-model="saveSuggestFeedContent.feeTitle" style="width: 60%;" placeholder="请输入内容" 
                            :class="{'waring_info_border':checkSize_type.feeTitle}" @blur="checkSize(saveSuggestFeedContent.feeTitle,'feeTitle')"></el-input>
                    </div>
                    <div class="flex">
                        <span class="text_betten">反馈内容<i></i></span><span class="name_span" >*</span>
                        <textarea name="" id="" v-model="saveSuggestFeedContent.feeContent" cols="30" rows="10"
                            :class="{'waring_info_border':checkSize_type.feeContent}" @blur="checkSize(saveSuggestFeedContent.feeContent,'feeContent')"></textarea>
                    </div>
                </div>
            </div>
            <div class="btnbtn">
                <el-button type="primary" @click="submitSuggestFeedback">提交</el-button>
                <el-button>取消</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {saveSuggestFeedback} from '../../../http/api';
    export default {
        data() {
            return {
                saveSuggestFeedContent:{
                    token: '',
                    feeTitle: '',
                    feeContent: '',
                    feeModel: '1'
                },
                checkSize_type: {
                    feeTitle: false,
                    feeContent: false,
                }
            }
        },
        methods: {
            submitSuggestFeedback(){
                if(this.saveSuggestFeedContent.feeTitle && this.saveSuggestFeedContent.feeContent){
                    saveSuggestFeedback(this.saveSuggestFeedContent).then(success=>{
                        if(success.code == 200){
                            this.$notify({
                                message: success.msg,
                                type: 'success'
                            });
                            setTimeout(()=>{
                                window.location.reload()
                            },1000)
                        }
                    })
                }else{
                    this.$notify.error({
                        message: '请填写相应内容信息'
                    })
                }
            },
            checkSize(size,dom){
                !size ?this.checkSize_type[dom] = true:this.checkSize_type[dom] = false;
            }
        }
    };
</script>

<style lang="scss">
    .gerenxinxi{
        width: 100%;
        background: #fff;
        position: relative;
    }
    .gerenxinxijian{
        width: 100%;
        height: 1px;
        position: absolute;
        top: 0;
        left: 0;
        background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
    }
    .xinxi_top{
        width: 96%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 2%;
    }
    .genren_content{
        width: 96%;
        padding: 15px 2%;
        .add_child{
            width:100%;
        }
    }
    .btnbtn{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin :20px 0;
    }
</style>
<template>
    <div class="zixun_pingjia">
        <div class="zixun_content">
            <div class="law_shenpi">
                <div>
                    <el-steps :active="1" align-center>
                        <el-step title="政治部科员1" description="2019-04-16 10:21"></el-step>
                    </el-steps>
                </div>
                <!-- 导入分数 -->
                <div class="shenpi_create">
                    <div class="shenpi_one">
                        <div class="tab1">导入任务分数</div>
                    </div>
                    <div class="shenheone_text taskData">
                        <div class="right_select">
                            <span class="title">月份：</span>
                            <el-select v-model="taskDataInfo.taskData" placeholder="请选择" class="withScreenSelect styleType">
                                <el-option v-for="item in taskDataInfo.options" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="right_select taskData">
                            <span class="title">任务分数导入：</span>
                            <el-input type="text" v-model="taskDataInfo.importData" placeholder="" class="taskImport styleType"></el-input>
                        </div>
                        <div class="settingTool">
                            <div class="confirmBtn">确认</div>
                            <div class="closeBtn">取消</div>
                        </div>
                    </div>
                </div>
                <!-- 纪律分数 -->
                <div class="shenpi_create">
                    <div class="shenpi_one">
                        <div class="tab1">纪律分数</div>
                    </div>
                    <div class="shenheone_text">
                        <div class="ditu_shuxing">
                            <el-tree
                                :data="data"
                                node-key="id"
                                default-expand-all
                                @node-click="handleNodeClick">
                                <span class="custom-tree-node" slot-scope="{ node }">
                                    <span>{{ node.label }}</span>
                                    <span>
                                    <el-button
                                        type="text"
                                        size="mini" style="">
                                        数量： <span>765</span>
                                    </el-button>
                                    </span>
                                </span>
                            </el-tree>
                        </div>
                    </div>
                </div>
                <div class="shenpi_create">
                    <div class="shenpi_one">
                        <div class="tab1">服务评价</div>
                        <div class="tab1_right">
                            <span>超时：59分钟/23.9小时/1.9天</span>
                            <img src="../../assets/image/u552.png" alt="">
                            <img src="../../assets/image/u554.png" alt="">
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
        data(){
            const data = [
					{
						id: 1,
						label: '辽阳市',
						children: [
							{
								id: 4,
								label: '宏伟区',
								children: [
									{ id: 9, label: '三级 1-1-1' }, 
									{ id: 10, label: '三级 1-1-2' }
								]
							},
							{
								id: 5,
								label: '文省区',
								children: [
									{ id: 9, label: '三级 1-1-1' }, 
									{ id: 10, label: '三级 1-1-2' }
								]
							}
						]
					}, 
				];
            return{
                taskDataInfo: {
                    taskData: '',
                    options: [{
                            value: '选项1',
                            label: '黄金糕'
                        }, {
                            value: '选项2',
                            label: '双皮奶'
                        }, {
                            value: '选项3',
                            label: '蚵仔煎'
                        }, {
                            value: '选项4',
                            label: '龙须面'
                        }, {
                            value: '选项5',
                            label: '北京烤鸭'
                        }],
                    importData: '',
                }
            }
        },
        methods:{
            handleNodeClick(data) {
                console.log(data);
            }
        }
        
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
    .right_select{
        text-align: left;
        margin-bottom: 13px;
        .taskImport{
            width: 20%;
        }
    }
    .taskData{
        .right_select{
            position: relative;
        }
        .title{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }
        .styleType{
            margin-left: 115px;
        }
    }
    .settingTool{
        text-align: left;
        div{
            padding: 15px 50px;
            border-radius: 5px;
            box-sizing: border-box;
            display: inline-block;
        }
        .confirmBtn{
            background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
            margin-right: 10px;
            color: white;
        }
        .closeBtn{
            border: 1px solid #eee;
        }
        
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
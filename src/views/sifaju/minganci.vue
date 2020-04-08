<template>
    <div class="minganci">
        <div class="mingancitop">敏感词管理</div>
        <div class="anniu">
            <el-button type="success" @click="xinzeng">新增敏感词</el-button>
            <el-button type="danger">删除</el-button>
        </div>
        <div class="biaoge">
            <el-table :data="data">
                <el-table-column type="selection"></el-table-column>
                <el-table-column fixed prop="date" label="日期"></el-table-column>
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column prop="province" label="省份"></el-table-column>
                <el-table-column prop="city" label="市区"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column prop="zip" label="邮编"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

        </div>
        <div class="dibu_fenye">
            <el-pagination
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
        <div class="xinzeng" v-if="minxian">
            <div class="xizengcon">
                <div class="xizengtop">
                    敏感词管理
                    <img src="../../assets/image/guanbi.png" @click="close" alt="">
                </div>
                <div class="minganc">
                    <div>敏感词 <span>*</span></div>
                    <div>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div class="minganc">
                    <div style="opacity: 0">敏感词 <span>*</span></div>
                    <div class="youcetoas" style="color: #ff6666">
                        可批量添加，一行一个敏感词
                    </div>
                </div>
                <div class="minganc">
                    <div>敏感等级 <span style="opacity: 0">*</span></div>
                    <div class="youcetoas">
                        <el-select v-model="value" placeholder="请选择" style="width: 100%">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="savebtn">
                    <el-button type="primary" @click="baocun">保存</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import {minganci,xinzengmingan} from '../../http/api.js'
    export default {
        data() {
            return {
                data:'',
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
                value: '',
                minxian:false,
				chuandata:{
					"token":sessionStorage.getItem("token"),                //类型：String  必有字段  备注：token 用户身份标识
					"wordType":"1"
				}
            }
        }, 
        created() {
			minganci(this.chuandata).then(res=>{
				if(res){
				    this.data=res.content
				}
			})
        },
        methods:{
            baocun(){
				xinzengmingan({
					"token":sessionStorage.getItem("token"),                //类型：String  必有字段  备注：token 用户身份标识
					"wordType":"2" 
				}).then(res=>{
					if(res){
					    this.data=res.content
					}
				})
            },
            xinzeng(){
                this.minxian = true
            },
            close(){
                this.minxian = false
            }
        }
    }
</script>

<style lang="scss">
    .minganci{
        width: 100%;
    }
    .mingancitop{
        width: 96%;
        padding: 20px 2%;
        background: #f7f7f7;
        font-size: 18px;
        text-align: left;
    }
    .anniu{
        margin: 20px 0;
        width: 100%;
        display: flex;
    }
    .dibu_fenye{
        width: 100%;
        padding: 20px 0;
        display: flex;
        justify-content: flex-end;
    }
    .xinzeng{
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
    }
    .xizengcon{
        width: 450px;

        border-radius: 5px;
        background: #fff;
        overflow: hidden;

    }
    .xizengtop{
        width: 100%;
        height: 40px;
        background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
        color: #fff;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
    }
    .xizengtop img{
        width: 25px;
        height: 25px;
        position: absolute;
        top: 8px;
        right: 25px;
    }
    .minganc{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        margin-top: 20px;
        span{
            display: inline-block;
            margin: 0 20px;
            color: #ff0000;
        }
        textarea{
            width: 280px;
            height: 160px;

        }
        .youcetoas{
            width: 280px;
            text-align: left;

        }

    }
    .savebtn{
        margin: 20px 0;
        margin-top: 35px;
    }
</style>
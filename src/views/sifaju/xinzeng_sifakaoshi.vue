<template>
    <div class="xinzeng_zhengwu">
        <div class="top_manalvs">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path:'/sifa_kaoshi'}">司法考试</el-breadcrumb-item>
                <el-breadcrumb-item>新增</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="formWrap">
            <el-form :model="form" :rules="rules" ref="form">
                <el-row :gutter="20" style="margin-top:20px;">
                    <el-col :span="24">
                        <el-form-item class="itemWrap"  prop="title">
                            <span class="textSpan">标题<i></i></span><span class="name_span" >*</span>
                            <el-input maxlength="100" v-model="form.title" placeholder="辽阳市司法局主要机构设置"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="0">
                    <el-col :span="10">
                        <el-form-item class="itemWrap"  prop="laiyuan">
                            <span class="textSpan">来源<i></i></span><span class="name_span" >*</span>
                            <el-input maxlength="100" v-model="form.laiyuan" placeholder="输入来源"></el-input>
                            <!-- <el-select v-model="form.laiyuan" placeholder="请选择" style="width: 100%;">
                                <el-option
                                    v-for="item in options"
                                    :key="item.dictDataCode"
                                    :label="item.dictDataName"
                                    :value="item.dictDataCode">
                                </el-option>
                                </el-select> -->
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="4">
                        <el-form-item class="itemWrap"  prop="auther">
                            <span class="textSpan">作者<i></i></span><span class="name_span" >*</span>
                            <el-input maxlength="100" v-model="form.auther" placeholder="作者"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="0" v-if="this.newsType=='1'">
                    <el-col :span="10">
                        <el-form-item class="itemWrap"  prop="newsClassify">
                            <span class="textSpan">分类<i></i></span><span class="name_span" >*</span>
                            <el-select v-model="form.newsClassify" placeholder="请选择" style="width: 100%;">
                                <el-option
                                        v-for="item in options"
                                        :key="item.dictDataCode"
                                        :label="item.dictDataName"
                                        :value="item.dictDataCode">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="0">
                    <el-col :span="10">
                        <el-form-item class="itemWrap"  prop="publishTime">
                            <span class="textSpan">发布时间<i></i></span><span class="name_span" >*</span>
                            <el-date-picker
                                    v-model="form.publishTime"
                                    type="datetime"
                                    placeholder="选择日期时间"
                                    format="yyyy-MM-dd HH:mm:ss"
                                    value-format="yyyy-MM-dd HH:mm:ss"
                                    style="width:100%;">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="0">
                    <el-col :span="24">
                        <el-form-item class="itemWrap"  prop="newsContent">
                            <span class="textSpan">文章内容<i></i></span><span class="name_span" >*</span>
                            <div id="wangeditor" style="width: 100%">
                                <wangeditor v-model="editorContent" :showEditorValidate="showEditorValidate"></wangeditor>
                            </div>
                        </el-form-item>
                    </el-col>
                </el-row>

                <div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;">
                    <el-button type="primary" @click="baocun">提交</el-button>
                    <el-button @click="quxiao">取消</el-button>
                </div>
            </el-form>
        </div>

    </div>
</template>

<script>
    import {xinzengzhengwu,getDictionaryListZwgkSelectList,zwgkSaveNews,zwgkGetNewsDetail} from '../../http/api.js';
    import {formatDate} from '../../utils/date.js';
    import wangeditor from '../../components/wangEditor';
    export default {
        data() {
            return {
                input: '',
                options: [],
                editId: '',
                form: {
                    title: '',
                    auther: '',
                    laiyuan: '',
                    publishTime: '',
                    newsClassify: '1',
                },
                showEditorValidate: false,
                rules: {
                    title: [
                        { required: true, message: '请输入标题', trigger: 'blur' }
                    ],
                    newsClassify: [
                        { required: true, message: '请选择分类', trigger: 'change' }
                    ],
                    laiyuan: [
                        { required: true, message: '请输入来源', trigger: 'blur' }
                    ],
                    auther: [
                        { required: true, message: '请输入作者', trigger: 'blur' }
                    ],
                    publishTime: [
                        { required: true, message: '请选择日期', trigger: 'change' }
                    ],
                },
                value: '',
                zixun_active:2,
                value1:'',
                gengduo:false,
                editor: null,
                editorContent: '',
                newsType: '',
                chuandata:{
                    token:sessionStorage.getItem("token"),
                    newsTitle:'',
                    laiyuan:'',
                    zuozhe:'',
                    // publishTime:'',
                    "newsId":"",               //类型：String  必有字段  备注：资讯标题
                    "newsContent":"资讯详情",                //类型：String  可有字段  备注：资讯详情
                    "newsType":this.$route.query.type,                //类型：String  必有字段  备注：资讯类型 1：组织机构；2：公示信息；3：通知公告；4：新闻资讯；5：办事指南；6：征求意见；7：政务公开
                    "publishTime":"2019-05-12 13:00",                //类型：String  可有字段  备注：发布时间
                    "publishStatus":"2",                //类型：String  可有字段  备注：发布状态 1：未发布；2：已发布；
                    "topFlag":"1"
                }
            }
        },
        // catchData是一个类似回调函数，来自父组件，当然也可以自己写一个函数，主要是用来获取富文本编辑器中的html内容用来传递给服务端
        props: ['catchData'], // 接收父组件的方法
        mounted() {
            this.newsType = '8';
            this.editId = this.$route.query.id;
            getDictionaryListZwgkSelectList({
                "userId":"123", //随便写
                "dictCode":"jigoufenlei" //字典编码
            }).then(res=> {
                if(res.code === '200') {
                    let arr = res.content.resultList;
                    // arr.unshift({
                    // 	dictDataCode: '0',
                    // 	dictDataName: '全部'
                    // });
                    this.options = arr;
                }else {
                    this.$message.error(res.msg);
                }
            });

            if(this.editId){
                zwgkGetNewsDetail({
                    newsId: this.editId
                }).then(res=> {
                    this.form.title = res.content.newsTitle;
                    this.form.newsClassify = res.content.newsClassify;
                    this.form.publishTime = res.content.publishTime;
                    this.form.laiyuan = res.content.newsSource;
                    this.form.auther = res.content.newsAuthor;
                    this.editorContent = res.content.newsContent;
                });
            }

        },
        methods:{
            baocun(){
                // this.token = sessionStorage.getItem('token');
                this.$refs['form'].validate((valid) => {
                    let bEditor = false;
                    if(this.editorContent==='<p><br></p>' || this.editorContent==='') {
                        this.showEditorValidate = true;
                    }else {
                        this.showEditorValidate = false;
                        bEditor = true;
                    }
                    if (valid&&bEditor) {
                        zwgkSaveNews({
                            "newsId": this.editId||'',
                            "newsTitle": this.form.title,                //类型：String  必有字段  备注：资讯标题
                            "newsContent": this.editorContent,              //类型：String  可有字段  备注：资讯详情
                            "newsType": this.newsType,                				//类型：String  必有字段  备注：资讯类型 1：组织机构；2：公示信息；3：通知公告；4：新闻资讯；5：办事指南；6：征求意见；7：政务公开
                            "newsClassify": this.form.newsClassify,                		//类型：String  可有字段  备注：组织机构分类(取字典jigoufenlei)
                            "publishTime": this.form.publishTime,                //类型：String  可有字段  备注：发布时间
                            // "publishStatus": this.editId?2:1,               //类型：String  可有字段  备注：发布状态 1：未发布；2：已发布；
                            "newsSource": this.form.laiyuan,                //类型：String  必有字段  备注：来源
                            "newsAuthor": this.form.auther,                //类型：String  必有字段  备注：作者
                        }).then(res=> {
                            if(res.code == 200) {
                                this.$message({
                                    message: '新增成功',
                                    type: 'success'
                                });
                                setTimeout(()=>{
                                    this.$router.go(-1)
                                },1500)
                            }
                        });
                    } else {
                        return false;
                    }
                });

            },
            quxiao(){
                this.$router.go(-1)
            },
            zixuntab(e){
                this.zixun_active=e;
            },
            qingjia(){
                this.gengduo = true;
            },
            close(){
                this.gengduo = false;
            },
            // 时间转换
            setTrainDate(name){
                const time = formatDate(this.chuandata[name], 'yyyy-MM-dd');
                this.chuandata[name] = time;
            },
            tijiao(){
                this.setTrainDate('publishTime');  //发布时间
                xinzengzhengwu(this.chuandata).then(res=>{
                    if(res.code==200){
                        this.$message({
                            message: '新增成功',
                            type: 'success'
                        });
                        setTimeout(()=>{
                            this.$router.go(-1)
                        },1500)
                    }else{
                        this.$message.error(res.msg);
                    }
                })
            }
        },
        components: {
            wangeditor
        }
    };
</script>

<style lang="scss">
    .xinzeng_zhengwu {
        .top_manalvs{
            width:96%;
            padding: 0 2%;
            height: 70px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #eee;
        }
        width: 100%;
        .formWrap {
            padding: 20px 2%;
            .itemWrap {
                >div {
                    display: flex;
                    align-items: center;
                    .textSpan {
                        font-size: 16px;
                        width: 70px;
                        flex: 0 0 70px;
                        display: inline-block;
                        text-align: justify;
                        line-height: 40px;
                        height: 40px;
                        i {
                            display: inline-block;
                            width: 100%;
                        }
                    }
                }
            }
            .el-form-item__error {
                color: #F56C6C;
                font-size: 12px;
                line-height: 1;
                padding-top: 4px;
                position: absolute;
                top: 100%;
                left: 115px;
            }
        }
    }
</style>

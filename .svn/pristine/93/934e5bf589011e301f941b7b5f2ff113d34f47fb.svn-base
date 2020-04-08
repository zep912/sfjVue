<template>
    <div class="complate-info-container">
        <!-- <headera></headera> -->
        <div class="wanshan_neirong">
            <div class="wanshan_ziliao">
                完善资料
            </div>
            <div class="neirong_wanshan">
              <el-form :model="addForm"
                         :rules="rules"
                         ref="addForm">
                <div class="wanshan_fenzhineir">
                    <div>
                        <div class="flex">
                            <span class="text_betten">姓名<i></i></span><span class="impor_icon">*</span>
                            <div class="right_flex">
                                <el-input v-model="addForm.lawyerName"
                                          style="width: 400px;outline-style: none;"
                                          placeholder="请输入内容" readonly="true"></el-input>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="text_betten">性别<i></i></span><span class="impor_icon"
                                  style="opacity: 1;">*</span>
                            <div class="right_flex">
                                <el-radio v-model="addForm.sex"
                                          label="1">男</el-radio>
                                <el-radio v-model="addForm.sex"
                                          label="2">女</el-radio>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex">
                            <span class="text_betten">执业证号<i></i></span><span class="impor_icon">*</span>
                            <div class="right_flex">
                                <el-input v-model="addForm.credentialCode"
                                          style="width: 400px;outline-style: none"
                                          placeholder="请输入内容" readonly="true"></el-input>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="text_betten">出生日期<i></i></span><span class="impor_icon"
                                  style="opacity: 1;">*</span>
                            <div class="right_flex">
                                <el-input v-model="addForm.birthday"
                                          style="width: 400px;outline-style: none"
                                          placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex"
                     style="align-items: flex-start;margin: 20px 0;">
                    <span class="text_betten">居住地址<i></i></span><span class="name_span"
                                                                      style="opacity: 0;"></span>
                    <div style="width: 83.5%;display: flex;align-items: center;justify-content: space-between;">
                        <el-select v-model="cityIdDetail"
                                   placeholder="请选择市"
                                   style="width: 19%;"
                                   @change="change()">
                            <el-option v-for="(item,index) in shi"
                                       :key="index"
                                       :label="item.areaName"
                                       :value="item.areaId">
                            </el-option>
                        </el-select>
                        <el-select v-model="addForm.areaRegionId"
                                   placeholder="请选择区"
                                   style="width: 19%;"
                                   @change="change1()">
                            <el-option v-for="(item,index) in qu"
                                       :key="index"
                                       :label="item.areaName"
                                       :value="item.areaId">
                            </el-option>
                        </el-select>
                        <el-select v-model="addForm.areaStreetId"
                                   placeholder="请选择街道"
                                   style="width: 19%;">
                            <el-option v-for="(item,index) in jie"
                                       :key="index"
                                       :label="item.areaName"
                                       :value="item.areaId">
                            </el-option>
                        </el-select>
                        <el-input v-model="addForm.areaAddress"
                                  style="width: 40%;"
                                  placeholder="请输入详细地址"></el-input>
                    </div>

                </div>
                <div class="wanshan_fenzhineir">
                    <div>
                        <el-form-item>
                        <div class="flex">
                            <span class="text_betten">政治面貌<i></i></span><span class="impor_icon">*</span>
                            <div class="right_flex">
                                <el-select v-model="addForm.politicsStatus"
                                           style="width: 400px;"
                                           placeholder="请选择">
                                    <el-option v-for="item in zhengzhimianmaoList"
                                               :key="item.dictDataCode"
                                               :label="item.dictDataName"
                                               :value="item.dictDataCode">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        </el-form-item>
                        <el-form-item>
                        <div class="flex">
                            <span class="text_betten">学历<i></i></span><span class="impor_icon">*</span>
                            <div class="right_flex">
                                <el-select v-model="addForm.educationCertification"
                                           style="width: 400px;"
                                           placeholder="请选择">
                                    <el-option v-for="item in xueliList"
                                               :key="item.dictDataCode"
                                               :label="item.dictDataName"
                                               :value="item.dictDataCode">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        </el-form-item>
                        <el-form-item>
                        <div class="flex">
                            <span class="text_betten">专业<i></i></span><span class="impor_icon">*</span>
                            <div class="right_flex">
                                <el-input maxlength="20"
                                          v-model="addForm.major"
                                          style="width: 400px;"
                                          placeholder="请输入专业"></el-input>
                            </div>
                        </div>
                        </el-form-item>
                        <el-form-item>
                        <div class="flex">
                            <span class="text_betten">手机号码<i></i></span><span class="impor_icon"
                                  style="opacity: 1;">*</span>
                            <div class="right_flex">
                                <el-input maxlength="11"
                                          minlength="11"
                                          v-model="addForm.lawyerPhone"
                                          style="width: 400px;outline-style: none;"
                                          placeholder="请输入手机号码" readonly="true"></el-input>
                            </div>
                        </div>
                        </el-form-item>
                        <el-form-item
                                      prop="certificationType">
                        <div class="flex">
                            <span class="text_betten">资格证类型<i></i></span><span class="impor_icon"
                                  style="opacity: 1;position: relative;right: 0px;">*</span>
                            <div class="right_flex">
                                <el-select v-model="addForm.certificationType"
                                           style="width: 400px;"
                                           placeholder="请选择">
                                    <el-option v-for="item in zigezhiList"
                                               :key="item.dictDataCode"
                                               :label="item.dictDataName"
                                               :value="item.dictDataCode">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        </el-form-item>
                        <el-form-item
                                prop="firstOperation">
                        <div class="flex">
                            <span class="text_betten">首次执业<i></i></span><span class="impor_icon"
                                  style="opacity: 1;">*</span>
                            <div class="right_flex">
                                <el-input v-model="addForm.firstOperation"
                                          style="width: 400px;"
                                          placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                        </el-form-item>
                        <el-form-item
                                prop="assessTime">
                        <div class="flex">
                            <span class="text_betten">评定时间<i></i></span><span class="impor_icon"
                                  style="opacity: 1;">*</span>
                            <div class="right_flex">
                                <el-input v-model="addForm.assessTime"
                                          style="width: 400px;"
                                          placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                        </el-form-item>
                        <el-form-item>
                        <div class="flex">
                            <span class="text_betten">进所时间<i></i></span><span class="impor_icon">*</span>
                            <div class="right_flex">
                                <el-input v-model="addForm.joinTime"
                                          style="width: 400px;outline-style: none;"
                                          placeholder="请输入内容" readonly="true"></el-input>
                            </div>
                        </div>
                        </el-form-item>
                        <el-form-item>
                        <div class="flex">
                            <span class="text_betten">人员类型<i></i></span><span class="impor_icon">*</span>
                            <div class="right_flex">
                                {{addForm.roleName}}
                            </div>
                        </div>
                        </el-form-item>
                    </div>
                    <div>
                        <el-form-item>
                        <div class="flex">
                            <span class="text_betten">民族<i></i></span><span class="impor_icon">*</span>
                            <div class="right_flex">
                                <el-select v-model="addForm.nationCode"
                                           style="width: 400px;"
                                           placeholder="请选择">
                                    <el-option v-for="item in minzuList"
                                               :key="item.dictDataCode"
                                               :label="item.dictDataName"
                                               :value="item.dictDataCode">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        </el-form-item>
                        <el-form-item>
                        <div class="flex">
                            <span class="text_betten">学位<i></i></span><span class="impor_icon">*</span>
                            <div class="right_flex">
                                <el-select v-model="addForm.degree"
                                           style="width: 400px;"
                                           placeholder="请选择">
                                    <el-option v-for="item in xueweiList"
                                               :key="item.dictDataCode"
                                               :label="item.dictDataName"
                                               :value="item.dictDataCode">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        </el-form-item>
                        <el-form-item>
                        <div class="flex">
                            <span class="text_betten">人事档案<i></i></span><span class="impor_icon">*</span>
                            <div class="right_flex">
                                <el-input v-model="addForm.lawyerRecord"
                                          style="width: 400px;"
                                          placeholder="请输入档案存放地点"></el-input>
                            </div>
                        </div>
                        </el-form-item>
                        <el-form-item
                                prop="professionType">
                        <div class="flex">
                            <span class="text_betten">执业类别<i></i></span><span class="impor_icon"
                                  style="opacity: 1;">*</span>
                            <div class="right_flex right_flex">
                                <el-select v-model="addForm.professionType"
                                           style="width: 400px;"
                                           placeholder="请选择">
                                    <el-option v-for="item in zhiyeleibieList"
                                               :key="item.dictDataCode"
                                               :label="item.dictDataName"
                                               :value="item.dictDataCode">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        </el-form-item>
                        <el-form-item
                                prop="certificationCode">
                        <div class="flex">
                            <span class="text_betten">资格证号<i></i></span><span class="impor_icon"
                                  style="opacity: 1;">*</span>
                            <div class="right_flex right_flex">
                                <el-input v-model="addForm.certificationCode"
                                          style="width: 400px;"
                                          placeholder="请输入资格证号"></el-input>
                            </div>
                        </div>
                        </el-form-item>
                        <el-form-item
                                prop="professionTitle">
                        <div class="flex">
                            <span class="text_betten">现职称<i></i></span><span class="impor_icon"
                                  style="opacity: 1;">*</span>
                            <div class="right_flex right_flex">
                                <el-select v-model="addForm.professionTitle"
                                           style="width: 400px;"
                                           placeholder="请选择">
                                    <el-option v-for="item in xianzhichengList"
                                               :key="item.dictDataCode"
                                               :label="item.dictDataName"
                                               :value="item.dictDataCode">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        </el-form-item>
                        <div class="flex">
                            <span class="text_betten">执业机构<i></i></span><span class="impor_icon"
                                  style="opacity: 1;">*</span>
                            <div class="right_flex right_flex">
                                <el-input v-model="addForm.orgName"
                                          style="width: 400px;outline-style: none;"
                                          readonly="true"></el-input>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="text_betten"><i></i></span><span class="impor_icon">*</span>
                            <div class="right_flex right_flex"></div>
                        </div>
                    </div>
                </div>
                <div class="flex" style="margin-top: 10px;">
                    <span class="text_betten">诚信信息<i></i></span><span class="impor_icon">*</span>
                    <div class="right_flex right_flexinput">
                        <el-input v-model="s_jigou"
                                  style="width: 200px;"
                                  placeholder="请输入授予机构"></el-input>
                        <el-input v-model="s_data"
                                  style="width: 200px;"
                                  placeholder="请输入授予日期"></el-input>
                        <el-input v-model="s_content"
                                  style="width: 200px;"
                                  placeholder="请输入授予内容"></el-input>
                        <el-input v-model="s_level"
                                  style="width: 200px;"
                                  placeholder="请输入表彰级别"></el-input>
                        <img src="../../assets/image/add2.png"
                             alt="" @click="add_sincerity">
                    </div>
                </div>
                <div class="flex" style="margin-top: 10px;" v-for="item in sincerityList"  :class="item.faithType == '2'?'hideStyle':''">
                    <span class="text_betten"><i></i></span><span class="impor_icon">*</span>
                    <div class="right_flex right_flexinput">
                        <el-input v-model="item.awardName"
                                  style="width: 200px;" readonly="true"></el-input>
                        <el-input v-model="item.awardDate"
                                  style="width: 200px;" readonly="true"></el-input>
                        <el-input v-model="item.awardContent"
                                  style="width: 200px;" readonly="true"></el-input>
                        <el-input v-model="item.commendLevel"
                                  style="width: 200px;" readonly="true"></el-input>
                        <img src="../../assets/image/jianhao.png"
                             alt="" @click="del_sincerity(item)">
                    </div>
                </div>
                <div class="flex" style="margin-top: 10px;">
                    <span class="text_betten">失信信息<i></i></span><span class="impor_icon">*</span>
                    <div class="right_flex right_flexinput">
                        <el-input v-model="c_jigou"
                                  style="width: 200px;"
                                  placeholder="请输入处罚机构"></el-input>
                        <el-input v-model="c_data"
                                  style="width: 200px;"
                                  placeholder="请输入处罚日期"></el-input>
                        <el-input v-model="c_shiyou"
                                  style="width: 200px;"
                                  placeholder="请输入处罚事由"></el-input>
                        <el-input v-model="c_jieguo"
                                  style="width: 200px;"
                                  placeholder="请输入处罚结果"></el-input>
                        <img src="../../assets/image/add2.png"
                             alt="" @click="add_breakFaith">
                    </div>
                </div>
                <div class="flex" style="margin-top: 10px;" v-for="item in sincerityList"  :class="item.faithType == '1'?'hideStyle':''">
                    <span class="text_betten"><i></i></span><span class="impor_icon">*</span>
                    <div class="right_flex right_flexinput">
                        <el-input v-model="item.awardName"
                                  style="width: 200px;" readonly="true"></el-input>
                        <el-input v-model="item.awardDate"
                                  style="width: 200px;" readonly="true"></el-input>
                        <el-input v-model="item.awardContent"
                                  style="width: 200px;" readonly="true"></el-input>
                        <el-input v-model="item.commendLevel"
                                  style="width: 200px;" readonly="true"></el-input>
                        <img src="../../assets/image/jianhao.png"
                             alt="" @click="del_sincerity(item)">
                    </div>
                </div>
                <div class="flex"
                     style="align-items: flex-start;">
                    <span class="text_betten">擅长专业<i></i></span><span class="impor_icon"
                          style="opacity: 1;">*</span>
                    <div class="right_flex right_flexinput right_zhuanye" style="margin-bottom: 25px">
                        <textarea
                                  v-model="beBoodAtName"
                                  cols="30"
                                  rows="10" readonly="true"></textarea>
                        <img @click="select_type"
                             src="../../assets/image/add2.png"
                             alt="">
                        <span v-show="zyShow" style="color:red;position: absolute;bottom: -20px;display: block;left: -10px">请选择擅长专业</span>
                    </div>
                </div>
                <div class="flex"
                     style="align-items: flex-start;">
                    <span class="text_betten">获得奖项<i></i></span><span class="impor_icon">*</span>
                    <div class="right_flex right_flexinput right_zhuanye">
                        <textarea v-model="addForm.awards"
                                  cols="30"
                                  rows="10"></textarea>
                    </div>
                </div>
                <el-form-item prop="photoId">
                <div class="flex"
                     style="align-items: flex-start;margin-top: 20px;">
                    <span class="text_betten">上传照片<i></i></span><span class="impor_icon"
                                                                      style="opacity: 1;">*</span>
                    <el-upload :class="{hide:hideUpload}"
                               :action="uploadUrl"
                               multiple
                               :data="{token:token}"
                               list-type="picture-card"
                               :file-list="fileList"
                               :on-change="uploadFileChange"
                               :on-success="successUpload_goodsAdmin"
                               :on-remove="removeFileList"
                               accept=".jpg,.jpeg,.png,.gif,.bmp"
                               :limit="1"
                               style="margin-left: 20px;"
                    >
                        <i class="el-icon-plus"></i>
                    </el-upload>
                </div>
                </el-form-item>
              </el-form>
            </div>
            <div>
                <div class="jinru" @click="getInto">进入平台</div>
            </div>
        </div>
        <div class="toast"
             v-if="shanchang">
            <div class="toast_con">
                <div class="con-toptoast">
                    擅长专业
                    <img src="../../assets/image/del.png"
                         @click="close"
                         alt="">
                </div>
                <div>
<!--                    <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>-->
<!--                    <div style="margin: 15px 0;"></div>-->
                    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                        <el-checkbox v-for="city in shanchangzhuanyeList" :label="city.dictDataName" :key="city.dictDataCode">{{city.dictDataName}}</el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="toast_save">
                    <div @click="prese">保存</div>
                    <div class="tishi_toast" v-if="tishi">
                        <img src="../../assets/image/jinggao.png"
                             alt="">
                        最多选择5项
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import header from "../layout/header_law.vue";
import {getAreaList, getOwnerLawyerInfo, getSelectDetail,saveOwnLawyerInfo} from "../../http/api";
export default {
    data() {
        return {
            baseInfoList:[],   //基础信息数据
            /****************执业类别相关参数******************/
            zhiyeleibieList:[],
            liebie:'',
           /********************学历相关参数****************/
            xueliList:[],
            /********************资格证类型相关参数****************/
            zigezhiList:[],
            /***************民族相关参数****************/
            minzuList:[],
            /******************学位相关参数**************/
            xueweiList:[],
            /*****************现职称***************/
            xianzhichengList:[],
            /************************政治面貌相关参数********/
            zhengzhimianmaoList:[],
            /***********************人员类型相关参数*********/
            roleName:'',
            /************************居住地址相关参数***************/
            cityIdDetail: "",
            shi: [],
            qu: [],
            jie: [],
            addForm: {
                lawyerName:'',   //姓名
                lawyerId:'',     //律师id
                areaRegionId: "",  //位置区域id
                areaStreetId: "",  //位置街道id
                areaAddress: "",   //具体地址
                credentialCode:'',   //执业证号
                birthday:'',    //生日
                sex:'1',      //性别
                identityCard:'',    //身份证号
                politicsStatus:'',  //政治面貌
                educationCertification:'',   //学历
                nationCode:'',   //民族
                degree:'',     //学位
                major:'',   //专业
                lawyerPhone:'',    //手机号码
                lawyerRecord:'',    //人事档案
                professionType:'',   //执业类别
                certificationType:'',   //资格证类型
                firstOperation:'',     //首次执业
                certificationCode:'',   //资格证号
                professionTitle:'',    //现职称
                assessTime:'',    //评定时间
                orgName:'',    //执业机构
                joinTime:'',    //进所时间
                roleType:'',    //人员类型
                infoFlag:'2',   //已完善资料
                remark:'',     //备注
                photoId:'',    //图片id
                lawyerIdentity:'',     //人员身份  1、律师 2、法律工作者
                awards:'',      //获得奖项
            },
            rules: {
                certificationType:[
                    {required: true, message: '请选择资格证类型', trigger: 'change'}
                ],
                firstOperation:[
                    {required: true, message: '请输入首次执业', trigger: 'blur'},
                ],
                assessTime:[
                    {required: true, message: '请输入评定时间', trigger: 'blur'},
                ],
                professionType:[
                    {required: true, message: '请选择执业类别', trigger: 'change'}
                ],
                certificationCode:[
                    {required: true, message: '请输入资格证号', trigger: 'blur'},
                ],
                professionTitle:[
                    {required: true, message: '请选择现职称', trigger: 'change'}
                ],
                photoId:[
                    {required: true, message: '请选择照片', trigger: 'change'}
                ]
            },
           /****************************************诚信信息相关参数*****************/
            s_jigou:'',   //授予机构
            s_data:'',    //授予日期
            s_content:'',   //授予内容
            s_level:'',     //授予表彰级别
            sincerityList:[],    //诚信信息数组
            sincerityList1:[],    //诚信信息数组
            sincerityList2:[],    //失信信息数组
           /***************************************失信信息相关参数*********************/
            c_jigou:'',     //处罚机构
            c_data:'',      //处罚日期
            c_shiyou:'',    //处罚事由
            c_jieguo:'',    //处罚结果
           /*******************************上传照片相关参数*************************/
            hideUpload: false,
            fileList:[],
            uploadUrl: "http://192.168.0.133:9001/jjkj/sfj/api/support/uploadFile",
            token: sessionStorage.getItem("token"),
          /****************************上传擅长专业相关参数*********************/
            shanchangzhuanyeList:[],
            checkedCities:[],
            beBoodAtName:[],
            shanchang: false,
            checkAll: false,
            tishi:false,
            zyShow:false,
            specialtyList:[],
        };
    },
    components: {
        headera: header
    },
    created() {
        let num =  0;
        this.getSelectDetailData();
        this.getOwnerLawyerInfo();
        this.getAreaDetailList();
    },
    methods: {
        //居住地址
        //获取省级联联动信息
        async getAreaDetailList() {
            let city = await getAreaList({ areaPid: "10" });
            // this.sheng = provice
            this.shi = city.content.dataList;
            if (this.$route.query.id) {
                this.cityIdDetail = this.shi[0].areaId;
                let flag = true;
                this.change(flag);
                this.change1(flag);
            }
        },
        async change(flag) {
            if (!flag) {
                this.addForm.areaRegionId = "";
            }
            let area = await getAreaList({ areaPid: this.cityIdDetail });
            this.qu = area.content.dataList;
        },
        async change1(flag) {
            if (!flag) {
                this.addForm.areaStreetId = "";
            }
            let street = await getAreaList({
                areaPid: this.addForm.areaRegionId
            });
            this.jie = street.content.dataList;
        },
        // 获取下拉列表数据
        async getSelectDetailData() {
            console.log('数据字典');
            //现职称
            let xianzhichengData = await getSelectDetail({
                dictCode: "xianzhicheng",
                userId: "111"
            });
            this.xianzhichengList = [...xianzhichengData.content.resultList];
            //资格证类型
            let zigezhengleixingData = await getSelectDetail({
                dictCode: "zigezhengleixing",
                userId: "111"
            });
            this.zigezhiList = [...zigezhengleixingData.content.resultList];
            //学位
            let xueweiData = await getSelectDetail({
                dictCode: "xuewei",
                userId: "111"
            });
            this.xueweiList = [...xueweiData.content.resultList];
            //民族
            let minzuData = await getSelectDetail({
                dictCode: "minzu",
                userId: "111"
            });
            this.minzuList = [...minzuData.content.resultList];
            //政治面貌
            let zhengzhimianmaoData = await getSelectDetail({
                dictCode: "zhengzhimianmao",
                userId: "111"
            });
            this.zhengzhimianmaoList = [...zhengzhimianmaoData.content.resultList];
            //职业类别
            let selectData = await getSelectDetail({
                dictCode: "zhiyeleibie",
                userId: "111"
            });
            this.zhiyeleibieList = [...selectData.content.resultList];
            //执业类别
            for(let i=0; i<this.zhiyeleibieList.length;i++){
                console.log('1111111111111111222222222222222222222');
                console.log(this.zhiyeleibieList[i].dictDataName);
                console.log(this.baseInfoList.professionTypeDesc);
                if(this.liebie == this.zhiyeleibieList[i].dictDataName){
                    this.addForm.professionType = this.zhiyeleibieList[i].dictDataCode;
                }
            }
            //学历
            let xueliData = await getSelectDetail({
                dictCode: "xueli",
                userId: "111"
            });
            this.xueliList =  [...xueliData.content.resultList];
            //擅长专业
            let shanchangzhuanyeData = await getSelectDetail({
                dictCode: "shanchangzhuanye",
                userId: "111"
            });
            this.shanchangzhuanyeList =  [...shanchangzhuanyeData.content.resultList];
            console.log(this.shanchangzhuanyeList);
        },
        getOwnerLawyerInfo(){
            let pram = {
                token:sessionStorage.getItem("token")
            }
            getOwnerLawyerInfo(pram).then(res => {
                console.log(res.content.baseInfo);
                this.baseInfoList = res.content.baseInfo;
                //执业类别
                this.liebie = this.baseInfoList.professionTypeDesc;
                //人员身份
                this.addForm.lawyerIdentity = this.baseInfoList.lawyerIdentity;
                //手机号码
                this.addForm.lawyerPhone = this.baseInfoList.lawyerPhone
                //姓名
                this.addForm.lawyerName = this.baseInfoList.lawyerName
                //律师id
                this.addForm.lawyerId = this.baseInfoList.lawyerId;
                //执业机构
                this.addForm.orgName = this.baseInfoList.orgName;
                ///执业证号
                this.addForm.credentialCode = this.baseInfoList.credentialCode;
                //身份证号
                this.addForm.identityCard = this.baseInfoList.identityCard;
                //生日
                this.getBirthdayFromIdCard(this.baseInfoList.identityCard);
                //进所时间
                this.addForm.joinTime = this.baseInfoList.joinTime;
                //人员类型
                this.addForm.roleType = this.baseInfoList.roleType;
                console.log(this.baseInfoList.roleType);
                if(this.baseInfoList.roleType == '1'){
                    this.roleName = '律所负责人';
                }else if(this.baseInfoList.roleType == '2'){
                    this.roleName = '律所合伙人';
                }else if(this.baseInfoList.roleType == '3'){
                    this.roleName = '派驻律师';
                }
                console.log('==========================基本数据');
                console.log(this.baseInfoList);
            });
        },
        //截取生日
        getBirthdayFromIdCard(idCard) {
            let luckyDay = '';
            if(idCard != null && idCard != ""){
                if(idCard.length == 15){
                    luckyDay = "19"+idCard.substr(6,6);
                } else if(idCard.length == 18){
                    luckyDay = idCard.substr(6,8);
                }

                this.addForm.birthday = luckyDay.replace(/(.{4})(.{2})/,"$1-$2-");
            }

        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
        tabclick(e) {
            console.log(11111);
            this.select = e;
        },
        select_type() {
            let _this = this;
            _this.shanchang = true;
        },
        //多选
        // handleCheckAllChange(val) {
        //     console.log(val);
        //     let arr = [];
        //     for(let i=0; i<this.shanchangzhuanyeList.length;i++){
        //         arr.push(this.shanchangzhuanyeList[i].dictDataName)
        //     }
        //     console.log('======================enter');
        //     console.log(arr);
        //     this.checkedCities = val ? arr : [];
        // },
        handleCheckedCitiesChange(value) {
            console.log(value);
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.shanchangzhuanyeList.length;
            console.log(this.checkedCities);
            // this.isIndeterminate = checkedCount > 0 && checkedCount < this.shanchangzhuanyeList.length;
        },
        //保存
        prese(){
            if(this.checkedCities.length > 5){
                this.tishi = true;
                return false;
            }
            for (let q=0;q<this.shanchangzhuanyeList.length;q++){
                for(let y=0;y<this.checkedCities.length;y++){
                    if(this.shanchangzhuanyeList[q].dictDataName === this.checkedCities[y]){
                        let id = {
                            adeptSpecialty:this.shanchangzhuanyeList[q].dictDataCode
                        }
                        this.specialtyList.push(id);
                    }
                }
            }
            console.log(this.specialtyList);
            this.shanchang = false;
            this.beBoodAtName = this.checkedCities;
        },
        //关闭弹框
        close() {
            this.shanchang = false;
        },
        //图片上传
        successUpload_goodsAdmin(success) {
            this.addForm.photoId = success.content.fileList[0].fileId;
            this.hideUpload = false;
        },
        removeFileList(file, fileList) {
            this.addForm.photoId = "";
            this.hideUpload = fileList.length >= 1;
        },
        uploadFileChange(file, fileList) {
            this.hideUpload = fileList.length >= 1;
        },
        //诚信信息添加
        add_sincerity(){
            console.log('添加');
            let sincerityFrom = {
                awardName:this.s_jigou,    //授予机构
                awardDate:this.s_data,     //授予日期
                awardContent:this.s_content,   //授予内容
                commendLevel:this.s_level,     //表彰级别
                faithType:'1'       //诚信信息
            }
            if(this.s_jigou != '' || this.s_data != '' || this.s_content || this.s_level != ''){
                this.sincerityList.push(sincerityFrom);
            }
            this.s_jigou = '';
            this.s_data = '';
            this.s_content = '';
            this.s_level = '';
            console.log(this.sincerityList);
        },
        //诚信删除
        del_sincerity(index){
            this.sincerityList.splice(index, 1);
        },
        //失信信息添加
        add_breakFaith(){
            console.log('添加');
            let breakFaithFrom = {
                awardName:this.c_jigou,    //授予机构
                awardDate:this.c_data,     //授予日期
                awardContent:this.c_shiyou,   //授予内容
                commendLevel:this.c_jieguo,     //表彰级别
                faithType:'2'       //诚信信息
            }
            if(this.c_jigou != '' || this.c_data != '' || this.c_shiyou || this.c_jieguo != ''){
                this.sincerityList.push(breakFaithFrom);
            }
            this.c_jigou = '';
            this.c_data = '';
            this.c_shiyou = '';
            this.c_jieguo = '';
            console.log(this.sincerityList);
        },
        //进入平台
        getInto(){
            if(this.beBoodAtName == []){
                this.zyShow = true;
                return false;
            }else if(this.sincerityList.length == 0){
                if(this.c_jigou != '' || this.c_data != '' || this.c_shiyou || this.c_jieguo != ''){
                    console.log('===============诚信信息');
                    let breakFaithFrom1 = {
                        awardName:this.c_jigou,    //授予机构
                        awardDate:this.c_data,     //授予日期
                        awardContent:this.c_shiyou,   //授予内容
                        commendLevel:this.c_jieguo,     //表彰级别
                        faithType:'2'       //失信信息
                    }
                    this.sincerityList1.push(breakFaithFrom1);
                }
                if(this.s_jigou != '' || this.s_data != '' || this.s_content || this.s_level != ''){
                    console.log('===============失信信息');
                    let sincerityFrom2 = {
                        awardName:this.s_jigou,    //授予机构
                        awardDate:this.s_data,     //授予日期
                        awardContent:this.s_content,   //授予内容
                        commendLevel:this.s_level,     //表彰级别
                        faithType:'1'       //诚信信息
                    }
                    this.sincerityList2.push(sincerityFrom2);
                }
            }
            let faithList = [];
            let sincerList = [];
            let duoList = [];
            if(this.sincerityList1.length != 0 && this.sincerityList2.length != 0 && this.sincerityList.length != 0){
                console.log('===============多条信息');
                let breakFaithFromcx1 = {
                    awardName:this.c_jigou,    //授予机构
                    awardDate:this.c_data,     //授予日期
                    awardContent:this.c_shiyou,   //授予内容
                    commendLevel:this.c_jieguo,     //表彰级别
                    faithType:'2'       //诚信信息
                }
                let sincerityFromsx1 = {
                    awardName:this.s_jigou,    //授予机构
                    awardDate:this.s_data,     //授予日期
                    awardContent:this.s_content,   //授予内容
                    commendLevel:this.s_level,     //表彰级别
                    faithType:'1'       //诚信信息
                }
                duoList = this.sincerityList;
                duoList.push(breakFaithFromcx1);
                duoList.push(sincerityFromsx1);
                faithList = duoList;
                this.s_jigou = '';
                this.s_data = '';
                this.s_content = '';
                this.s_level = '';
                this.c_jigou = '';
                this.c_data = '';
                this.c_shiyou = '';
                this.c_jieguo = '';
            }else if(this.sincerityList1.length != 0 && this.sincerityList2.length == 0 && this.sincerityList.length == 0){
                console.log('===============诚信多条信息');
                faithList = this.sincerityList1;
            }else if(this.sincerityList1.length == 0 && this.sincerityList2.length != 0 && this.sincerityList.length == 0){
                console.log('===============失信多条信息');
                faithList = this.sincerityList2;
            }else if(this.sincerityList1.length != 0 && this.sincerityList2.length != 0 && this.sincerityList.length == 0){
                console.log('===============11111111111111');
                let breakFaithFromcx = {
                    awardName:this.c_jigou,    //授予机构
                    awardDate:this.c_data,     //授予日期
                    awardContent:this.c_shiyou,   //授予内容
                    commendLevel:this.c_jieguo,     //表彰级别
                    faithType:'2'       //诚信信息
                }
                let sincerityFromsx = {
                    awardName:this.s_jigou,    //授予机构
                    awardDate:this.s_data,     //授予日期
                    awardContent:this.s_content,   //授予内容
                    commendLevel:this.s_level,     //表彰级别
                    faithType:'1'       //诚信信息
                }
                sincerList.push(breakFaithFromcx);
                sincerList.push(sincerityFromsx);
                faithList = sincerList;
            }
            this.$refs["addForm"].validate(valid => {
                if (valid) {
                    let pram = {
                        token:sessionStorage.getItem("token"),
                        baseInfo:this.addForm,
                        faithList:faithList,
                        specialtyList: this.specialtyList
                    }
                    console.log(pram);
                    saveOwnLawyerInfo(pram).then(res => {
                        if(res.code == '200'){
                            this.$message({
                                message: "填报成功",
                                type: "success"
                            });
                            this.$router.push({
                                path: "/lvshi"
                            });
                        }else if(res.code == '220'){
                            this.$message.error(res.msg);
                        }

                    });
                }
            })
        }
    }
};
</script>

<style lang="scss">
 .el-form-item {
         margin-bottom: 25px;
}
 .el-form-item__content {
      line-height: 0px;
     position: relative;
     font-size: 14px;
 }
 .el-form-item__error {
     left: 115px;
 }
.el-checkbox {
        width: 40%;
        color: #606266;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        margin-right: 0px !important;
        padding-top: 10px;
        padding-left: 20px;
        text-align: left;
}
.complate-info-container {
    width: 100%;
}
.wanshan_neirong {
    width: 100%;
}
.wanshan_ziliao {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background: #eee;
}
.neirong_wanshan {
    width: 1200px;
    margin: 20px auto;
}
.wanshan_fenzhineir {
    width: 100%;
    display: flex;
    /*align-items: center;*/
}
.wanshan_fenzhineir > div {
    width: 50%;
}
.impor_icon {
    color: #ff0000;
    font-size: 30px;
    opacity: 0;
    padding-top: 10px;
}
.right_flex {
    margin-left: 20px;
}
.wanshan_fenzhineir .flex {
    margin-top: 10px;
}
.right_flex_new {
    margin: 0;
}
.text_five {
    margin-right: 10px;
    position: relative;
    right: 7px;
}
.right_flexinput {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 83%;
    position: relative;
}
.right_flexinput img {
    position: absolute;
    right: -50px;
    width: 35px;
    height: 35px;
}
.right_zhuanye {
    align-items: flex-start;
    margin-top: 10px;
}
.right_border {
    width: 100px;
    height: 100px;
    border: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;
}
.right_border img {
    position: relative;
    left: 0;
}
.jinru {
    width: 120px;
    height: 40px;
    background: -webkit-linear-gradient(left, #0fa3d5, #1b79c2);
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 5px;
}
.hideStyle{
    display: none;
}
.hide .el-upload--picture-card {
    display: none;
}
</style>

<template>
    <div>
        <headera></headera>
        <div class="wanshan_neirong">
            <div class="wanshan_ziliao">
                完善资料
            </div>
            <div class="neirong_wanshan">
                <div class="wanshan_fenzhineir">
                    <div>
                        <div class="flex">
                            <span class="text_betten">姓名<i></i></span><span class="impor_icon">*</span>
                            <div class="right_flex">
                                <el-input v-model="input" style="width: 400px;" placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="text_betten">性别<i></i></span><span class="impor_icon" style="opacity: 1;">*</span>
                            <div class="right_flex">
                                <el-radio v-model="radio" label="1">男</el-radio>
                                <el-radio v-model="radio" label="2">女</el-radio>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex">
                            <span class="text_betten">执业证号<i></i></span><span class="impor_icon">*</span>
                            <div class="right_flex">
                                <el-input v-model="input" style="width: 400px;" placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="text_betten">出生日期<i></i></span><span class="impor_icon" style="opacity: 1;">*</span>
                            <div class="right_flex">
                                <el-input v-model="input" style="width: 400px;" placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <span class="text_betten">居住地址<i></i></span><span class="impor_icon">*</span>
                    <div class="right_flex">
                        <el-cascader
                                v-model="value"
                                :options="options"
                                :props="{ expandTrigger: 'hover' }"
                                @change="handleChange"
                                style="width: 670px;"
                        ></el-cascader>
                        <el-input v-model="input" style="width: 300px;margin-left: 30px;" placeholder="请输入详细地址"></el-input>
                    </div>
                </div>
                <div class="wanshan_fenzhineir">
                    <div>
                        <div class="flex">
                            <span class="text_betten">政治面貌<i></i></span><span class="impor_icon">*</span>
                            <div class="right_flex">
                                <el-select v-model="xz_neirong" style="width: 400px;" placeholder="请选择">
                                    <el-option
                                            v-for="item in xuanze"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"

                                    >
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="text_betten">学历<i></i></span><span class="impor_icon">*</span>
                            <div class="right_flex">
                                <el-select v-model="xz_neirong" style="width: 400px;" placeholder="请选择">
                                    <el-option
                                            v-for="item in xuanze"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"

                                    >
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="text_betten">专业<i></i></span><span class="impor_icon">*</span>
                            <div class="right_flex">
                                <el-input v-model="input" style="width: 400px;" placeholder="请输入专业"></el-input>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="text_betten">手机号码<i></i></span><span class="impor_icon" style="opacity: 1;">*</span>
                            <div class="right_flex">
                                <el-input v-model="input" style="width: 400px;" placeholder="请输入手机号码"></el-input>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="text_five">资格证类型<i></i></span><span class="impor_icon" style="opacity: 1;position: relative;right: 17px;">*</span>
                            <div class="right_flex right_flex_new">
                                <el-select v-model="xz_neirong" style="width: 400px;" placeholder="请选择">
                                    <el-option
                                            v-for="item in xuanze"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"

                                    >
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="text_betten">首次执业<i></i></span><span class="impor_icon" style="opacity: 1;">*</span>
                            <div class="right_flex">
                                <el-input v-model="input" style="width: 400px;" placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="text_betten">评定时间<i></i></span><span class="impor_icon" style="opacity: 1;">*</span>
                            <div class="right_flex">
                                <el-input v-model="input" style="width: 400px;" placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="text_betten">进所时间<i></i></span><span class="impor_icon">*</span>
                            <div class="right_flex">
                                <el-input v-model="input" style="width: 400px;" placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="text_betten">人员类型<i></i></span><span class="impor_icon" >*</span>
                            <div class="right_flex">
                                <el-select v-model="xz_neirong" style="width: 400px;" placeholder="请选择">
                                    <el-option
                                            v-for="item in xuanze"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"

                                    >
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex">
                            <span class="text_betten">民族<i></i></span><span class="impor_icon" >*</span>
                            <div class="right_flex">
                                <el-select v-model="xz_neirong" style="width: 400px;" placeholder="请选择">
                                    <el-option
                                            v-for="item in xuanze"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"

                                    >
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="text_betten">学位<i></i></span><span class="impor_icon">*</span>
                            <div class="right_flex">
                                <el-select v-model="xz_neirong" style="width: 400px;" placeholder="请选择">
                                    <el-option
                                            v-for="item in xuanze"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"

                                    >
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="text_betten">人事档案<i></i></span><span class="impor_icon">*</span>
                            <div class="right_flex">
                                <el-input v-model="input" style="width: 400px;" placeholder="请输入档案存放地点"></el-input>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="text_betten">执业类别<i></i></span><span class="impor_icon" style="opacity: 1;">*</span>
                            <div class="right_flex right_flex">
                                <el-select v-model="xz_neirong" style="width: 400px;" placeholder="请选择">
                                    <el-option
                                            v-for="item in xuanze"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"

                                    >
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="text_betten">资格证号<i></i></span><span class="impor_icon" style="opacity: 1;">*</span>
                            <div class="right_flex right_flex">
                                <el-select v-model="xz_neirong" style="width: 400px;" placeholder="请选择">
                                    <el-option
                                            v-for="item in xuanze"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"

                                    >
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="text_betten">现职称<i></i></span><span class="impor_icon" style="opacity: 1;">*</span>
                            <div class="right_flex right_flex">
                                <el-select v-model="xz_neirong" style="width: 400px;" placeholder="请选择">
                                    <el-option
                                            v-for="item in xuanze"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"

                                    >
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="text_betten">执业机构<i></i></span><span class="impor_icon" style="opacity: 1;">*</span>
                            <div class="right_flex right_flex">
                                <el-select v-model="xz_neirong" style="width: 400px;" placeholder="请选择">
                                    <el-option
                                            v-for="item in xuanze"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"

                                    >
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <span class="text_betten">诚信信息<i></i></span><span class="impor_icon">*</span>
                    <div class="right_flex right_flexinput">
                        <el-input v-model="input" style="width: 200px;" placeholder="请输入档案存放地点"></el-input>
                        <el-input v-model="input" style="width: 200px;" placeholder="请输入档案存放地点"></el-input>
                        <el-input v-model="input" style="width: 200px;" placeholder="请输入档案存放地点"></el-input>
                        <el-input v-model="input" style="width: 200px;" placeholder="请输入档案存放地点"></el-input>
                        <img src="../../assets/image/add2.png" alt="">
                    </div>
                </div>
                <div class="flex">
                    <span class="text_betten">失信信息<i></i></span><span class="impor_icon">*</span>
                    <div class="right_flex right_flexinput">
                        <el-input v-model="input" style="width: 200px;" placeholder="请输入档案存放地点"></el-input>
                        <el-input v-model="input" style="width: 200px;" placeholder="请输入档案存放地点"></el-input>
                        <el-input v-model="input" style="width: 200px;" placeholder="请输入档案存放地点"></el-input>
                        <el-input v-model="input" style="width: 200px;" placeholder="请输入档案存放地点"></el-input>
                        <img src="../../assets/image/add2.png" alt="">
                    </div>
                </div>
                <div class="flex" style="align-items: flex-start;">
                    <span class="text_betten">擅长专业<i></i></span><span class="impor_icon" style="opacity: 1;">*</span>
                    <div class="right_flex right_flexinput right_zhuanye">
                        <textarea name="" id="" value="*******************" cols="30" rows="10"></textarea>
                        <img @click="select_type" src="../../assets/image/add2.png" alt="">
                    </div>
                </div>
                <div class="flex" style="align-items: flex-start;">
                    <span class="text_betten">获得奖项<i></i></span><span class="impor_icon">*</span>
                    <div class="right_flex right_flexinput right_zhuanye">
                        <textarea name="" id="" value="*******************" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div class="flex" style="align-items: flex-start;">
                    <span class="text_betten">上传照片<i></i></span><span class="impor_icon" style="opacity: 1;">*</span>
                    <div class="right_flex right_flexinput right_zhuanye right_border">
                        <img src="../../assets/image/add.png" alt="">
                    </div>
                </div>
            </div>
            <div>
                <div class="jinru">进入平台</div>
            </div>
        </div>
        <div class="toast" v-if="shanchang">
            <div class="toast_con">
                <div class="con-toptoast">
                    擅长专业
                    <img src="../../assets/image/del.png" @click="close" alt="">
                </div>
                <div>
                    <el-tree
                            :data="data"
                            show-checkbox
                            node-key="id"
                            :default-expanded-keys="[2, 3]"
                            :default-checked-keys="[5]"
                            :props="defaultProps">
                    </el-tree>
                </div>
                <div class="toast_save">
                    <div>保存</div>
                    <div class="tishi_toast">
                        <img src="../../assets/image/jinggao.png" alt="">
                        最多选择5项
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import header from '../layout/header_law.vue'
    export default {
        data() {
            return {
                input: '',
                value: [],
                options: [{
                    value: 'zhinan',
                    label: '指南',
                    children: [{
                        value: 'shejiyuanze',
                        label: '设计原则',
                        children: [{
                            value: 'yizhi',
                            label: '一致'
                        }, {
                            value: 'fankui',
                            label: '反馈'
                        }, {
                            value: 'xiaolv',
                            label: '效率'
                        }, {
                            value: 'kekong',
                            label: '可控'
                        }]
                    }, {
                        value: 'daohang',
                        label: '导航',
                        children: [{
                            value: 'cexiangdaohang',
                            label: '侧向导航'
                        }, {
                            value: 'dingbudaohang',
                            label: '顶部导航'
                        }]
                    }]
                }, {
                    value: 'zujian',
                    label: '组件',
                    children: [{
                        value: 'basic',
                        label: 'Basic',
                        children: [{
                            value: 'layout',
                            label: 'Layout 布局'
                        }, {
                            value: 'color',
                            label: 'Color 色彩'
                        }, {
                            value: 'typography',
                            label: 'Typography 字体'
                        }, {
                            value: 'icon',
                            label: 'Icon 图标'
                        }, {
                            value: 'button',
                            label: 'Button 按钮'
                        }]
                    }, {
                        value: 'form',
                        label: 'Form',
                        children: [{
                            value: 'radio',
                            label: 'Radio 单选框'
                        }, {
                            value: 'checkbox',
                            label: 'Checkbox 多选框'
                        }, {
                            value: 'input',
                            label: 'Input 输入框'
                        }, {
                            value: 'input-number',
                            label: 'InputNumber 计数器'
                        }, {
                            value: 'select',
                            label: 'Select 选择器'
                        }, {
                            value: 'cascader',
                            label: 'Cascader 级联选择器'
                        }, {
                            value: 'switch',
                            label: 'Switch 开关'
                        }, {
                            value: 'slider',
                            label: 'Slider 滑块'
                        }, {
                            value: 'time-picker',
                            label: 'TimePicker 时间选择器'
                        }, {
                            value: 'date-picker',
                            label: 'DatePicker 日期选择器'
                        }, {
                            value: 'datetime-picker',
                            label: 'DateTimePicker 日期时间选择器'
                        }, {
                            value: 'upload',
                            label: 'Upload 上传'
                        }, {
                            value: 'rate',
                            label: 'Rate 评分'
                        }, {
                            value: 'form',
                            label: 'Form 表单'
                        }]
                    }, {
                        value: 'data',
                        label: 'Data',
                        children: [{
                            value: 'table',
                            label: 'Table 表格'
                        }, {
                            value: 'tag',
                            label: 'Tag 标签'
                        }, {
                            value: 'progress',
                            label: 'Progress 进度条'
                        }, {
                            value: 'tree',
                            label: 'Tree 树形控件'
                        }, {
                            value: 'pagination',
                            label: 'Pagination 分页'
                        }, {
                            value: 'badge',
                            label: 'Badge 标记'
                        }]
                    }, {
                        value: 'notice',
                        label: 'Notice',
                        children: [{
                            value: 'alert',
                            label: 'Alert 警告'
                        }, {
                            value: 'loading',
                            label: 'Loading 加载'
                        }, {
                            value: 'message',
                            label: 'Message 消息提示'
                        }, {
                            value: 'message-box',
                            label: 'MessageBox 弹框'
                        }, {
                            value: 'notification',
                            label: 'Notification 通知'
                        }]
                    }, {
                        value: 'navigation',
                        label: 'Navigation',
                        children: [{
                            value: 'menu',
                            label: 'NavMenu 导航菜单'
                        }, {
                            value: 'tabs',
                            label: 'Tabs 标签页'
                        }, {
                            value: 'breadcrumb',
                            label: 'Breadcrumb 面包屑'
                        }, {
                            value: 'dropdown',
                            label: 'Dropdown 下拉菜单'
                        }, {
                            value: 'steps',
                            label: 'Steps 步骤条'
                        }]
                    }, {
                        value: 'others',
                        label: 'Others',
                        children: [{
                            value: 'dialog',
                            label: 'Dialog 对话框'
                        }, {
                            value: 'tooltip',
                            label: 'Tooltip 文字提示'
                        }, {
                            value: 'popover',
                            label: 'Popover 弹出框'
                        }, {
                            value: 'card',
                            label: 'Card 卡片'
                        }, {
                            value: 'carousel',
                            label: 'Carousel 走马灯'
                        }, {
                            value: 'collapse',
                            label: 'Collapse 折叠面板'
                        }]
                    }]
                }, {
                    value: 'ziyuan',
                    label: '资源',
                    children: [{
                        value: 'axure',
                        label: 'Axure Components'
                    }, {
                        value: 'sketch',
                        label: 'Sketch Templates'
                    }, {
                        value: 'jiaohu',
                        label: '组件交互文档'
                    }]
                }],
                xuanze: [{
                    value: '选项1',
                    label: '中共党员'
                }, {
                    value: '选项2',
                    label: '中共预备党员'
                }, {
                    value: '选项3',
                    label: '共青团员'
                }, {
                    value: '选项4',
                    label: '民革党员'
                }, {
                    value: '选项5',
                    label: '民盟盟员'
                }],
                xz_neirong: '',
                data: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                shanchang:false
            }
        },
        components:{
            'headera':header
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            tabclick(e){
                console.log(11111)
                this.select=e
            },
            select_type(){
                this.shanchang=true
            },
            close(){
                this.shanchang=false
            }
        }
    }
</script>

<style lang="scss">
    .wanshan_neirong{
        width: 100vw;
    }
    .wanshan_ziliao{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        background: #eee;
    }
    .neirong_wanshan{
        width: 1200px;
        margin: 20px auto;
    }
    .wanshan_fenzhineir{
        width: 100%;
        display: flex;
        align-items: center;

    }
    .wanshan_fenzhineir>div{
        width: 50%;
    }
    .impor_icon{
        color: #ff0000;font-size: 30px;
        opacity: 0;
    }
    .right_flex{
        margin-left: 20px;
    }
    .wanshan_fenzhineir .flex{
        margin-top: 10px;
    }
    .right_flex_new{
        margin: 0;
    }
    .text_five{
        margin-right: 10px;
        position: relative;
        right: 7px;
    }
    .right_flexinput{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 83%;
        position: relative;
    }
    .right_flexinput img{
        position: absolute;
        right: -50px;
        width: 35px;
        height: 35px;
    }
    .right_zhuanye{
        align-items: flex-start;
        margin-top: 10px;
    }
    .right_border{
        width: 100px;
        height: 100px;
        border: 1px solid #eee;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .right_border img{
        position: relative;
        left: 0;
    }
    .jinru{
        width: 120px;
        height: 40px;
        background: -webkit-linear-gradient(left,#0fa3d5, #1b79c2);
        margin: 20px auto;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        border-radius: 5px;
    }
</style>

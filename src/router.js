import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/layout/main.vue';
import publica from './views/layout/pub.vue';
import law_detail from './views/lawyer/lawyer_detail.vue';
import law_pub from './views/lawyar_ruzhu/publice.vue';
import law_shenpi from './views/lawyar_ruzhu/law_shenpi.vue';
import zhendui from './views/lawyer/zhenduixing.vue';
import zhiban from './views/lawyer/zhiban_law.vue';
import wangjimima from './views/login/wangjimima.vue';
import xinmima from './views/login/shezhixinmima.vue';

// import law_wanshan from './views/lawyer/wanshan.vue';
import law_index from './views/lawyer/index.vue';
// import getPageTitle from '@/utils/get-page-title';
import shimin_shouye from './views/shimin/index.vue';
import sifaju_index from './views/sifaju/index.vue';
import lvsuoindex from './views/lvsuo/index.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {
                x: 0,
                y: 0
            };
        }
    },
    routes: [{
            path: '/main',
            component: Main,
            name: 'main',
            redirect: 'demoPage',
            children: [{
                path: '/demoPage',
                name: 'demoPage',
                component: () =>
                    import ('./views/demo-page.vue'),
                meta: {
                    title: 'demo页面',
                    author: true,
                    keepAlive: false
                }
            }]
        },
        {
            path: '/detail',
            component: law_detail,
            name: 'detial'
        },
        {
            path: '/wangjimima',
            component: wangjimima,
            name: 'wangjimima'
        },
        {
            path: '/xinmima',
            component: xinmima,
            name: 'xinmima'
        },
        //律师入住
        {
            path: '/law_pub',
            component: law_pub,
            name: 'law_pub'
        },
        //律所首页
        {
            path: '/lvsuoindex',
            component: lvsuoindex,
            name: 'lvsuoindex',
            children: [{
                    path: '/lvshiguan',
                    name: 'lvshiguan',
                    component: () =>
                        import ('./views/lvsuo/law_mana.vue'),
                    meta: {
                        title: '律师管理',
                        author: true,
                        keepAlive: false
                    },
                },
                {
                    path: '/addlvshi',
                    name: 'xinzneglvshi',
                    component: () =>
                        import ('./views/lvsuo/addlvshi.vue'),
                    meta: {
                        title: '新增律师',
                        author: true,
                        keepAlive: false
                    },
				},
                {
                    path: '/lvsuo_zixun',
                    name: 'lvsuo_zixun',
                    component: () =>
                        import ('./views/lvsuo/lvsuo_zixun.vue'),
                    meta: {
                        title: '针对性咨询',
                        author: true,
                        keepAlive: false
                    }
                },
				{
                    path: '/readlvshi',
                    name: 'readlvshi',
                    component: () =>
                        import ('./views/lvsuo/chakan_lvshi'),
                    meta: {
                        title: '查看律师',
                        author: true,
                        keepAlive: false
                    },
                },
                {
                    path: '/',
                    name: 'sifa_sy',
                    component: () =>
                        import ('./views/lvsuo/shouye.vue'),
                    meta: {
                        title: '职责',
                        author: true,
                        keepAlive: false
                    },
                    children: [{
                        path: '/',
                        name: 'zhizhel',
                        component: () =>
                            import ('./views/lvsuo/zhize.vue'),
                        meta: {
                            title: '职责',
                            author: true,
                            keepAlive: false
                        }
                    }, ]
                },
            ]

        },
        //司法局首页
        {
            path: '/sifaju',
            component: sifaju_index,
            name: 'sifaju_index',
            children: [{
                    path: '/',
                    name: 'sifa_sy',
                    component: () =>
                        import ('./views/sifaju/sifashouye.vue'),
                    meta: {
                        title: '职责',
                        author: true,
                        keepAlive: false
                    },
                    children: [{
                            path: '/',
                            name: 'zhizhe',
                            component: () =>
                                import ('./views/sifaju/zhizhe.vue'),
                            meta: {
                                title: '职责',
                                author: true,
                                keepAlive: false
                            }
                        },
                        {
                            path: '/daichuli',
                            name: 'daichuli',
                            component: () =>
                                import ('./views/sifaju/daichuli.vue'),
                            meta: {
                                title: '待处理',
                                author: true,
                                keepAlive: false
                            }
                        }
                    ]

                },
                {
                    path: '/qingjia',
                    name: 'qingjia',
                    component: () =>
                        import ('./views/sifaju/qingjia.vue'),
                    meta: {
                        title: '请假',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/mana_law',
                    name: 'mana_law',
                    component: () =>
                        import ('./views/sifaju/mana_law.vue'),
                    meta: {
                        title: '律师管理',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/falvzixun',
                    name: 'falvzixun',
                    component: () =>
                        import ('./views/sifaju/falvzixun.vue'),
                    meta: {
                        title: '法律咨询',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/zixun_dengji',
                    name: 'zixun_dengji',
                    component: () =>
                        import ('./views/sifaju/zixun_dengji.vue'),
                    meta: {
                        title: '现场咨询登记',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/zhibanshezhi',
                    name: 'zhibanshezhi',
                    component: () =>
                        import ('./views/sifaju/zhibanshezhi.vue'),
                    meta: {
                        title: '值班设置',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/xinzengzhiban',
                    name: 'xinzengzhiban',
                    component: () =>
                        import ('./views/sifaju/xinzengzhiban.vue'),
                    meta: {
                        title: '新增',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/zhibanbiao',
                    name: 'zhibanbiao',
                    component: () =>
                        import ('./views/sifaju/zhibanbiao.vue'),
                    meta: {
                        title: '值班表',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/lvshizbbiao',
                    name: 'lvshizbbiao',
                    component: () =>
                        import ('./views/sifaju/lvshizbbiao.vue'),
                    meta: {
                        title: '律师值班表',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/zaixianyuyue',
                    name: 'zaixianyuyue',
                    component: () =>
                        import ('./views/sifaju/zaixianyuyue.vue'),
                    meta: {
                        title: '在线预约',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/zhengwugongkai',
                    name: 'zhengwugongkai',
                    component: () =>
                        import ('./views/sifaju/zhengwugongkai.vue'),
                    meta: {
                        title: '政务公开',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/manapeixun',
                    name: 'manapeixun',
                    component: () =>
                        import ('./views/sifaju/manapeixun.vue'),
                    meta: {
                        title: '培训管理',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/n_pxplan',
                    name: 'n_pxplan',
                    component: () =>
                        import ('./views/sifaju/n_pxplan.vue'),
                    meta: {
                        title: '制定培训计划',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/manakejianku',
                    name: 'manakejianku',
                    component: () =>
                        import ('./views/sifaju/manakejianku.vue'),
                    meta: {
                        title: '课件库管理',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/nxinzeng_kejian',
                    name: 'nxinzeng_kejian',
                    component: () =>
                        import ('./views/sifaju/nxinzeng_kejian.vue'),
                    meta: {
                        title: '新增课件',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/fileOne',
                    name: 'fileOne',
                    component: () =>
                        import ('./views/sifaju/fileOne.vue'),
                    meta: {
                        title: '文件预览',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/nadd_kejian',
                    name: 'nadd_kejian',
                    component: () =>
                        import ('./views/sifaju/nadd_kejian.vue'),
                    meta: {
                        title: '新增课件',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/npeixun_jihua',
                    name: 'npeixun_jihua',
                    component: () =>
                        import ('./views/sifaju/npeixun_jihua.vue'),
                    meta: {
                        title: '培训计划查看',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/n_gongcheguanli',
                    name: 'n_gongcheguanli',
                    component: () =>
                        import ('./views/sifaju/n_gongcheguanli.vue'),
                    meta: {
                        title: '公车管理',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/nchel_dengji',
                    name: 'nchel_dengji',
                    component: () =>
                        import ('./views/sifaju/nchel_dengji.vue'),
                    meta: {
                        title: '车辆登记',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/ncar_xinxiyul',
                    name: 'ncar_xinxiyul',
                    component: () =>
                        import ('./views/sifaju/ncar_xinxiyul.vue'),
                    meta: {
                        title: '查看车辆信息',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/n_xinzsiji',
                    name: 'n_xinzsiji',
                    component: () =>
                        import ('./views/sifaju/n_xinzsiji.vue'),
                    meta: {
                        title: '新增司机',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/nsiji_yulan',
                    name: 'nsiji_yulan',
                    component: () =>
                        import ('./views/sifaju/nsiji_yulan.vue'),
                    meta: {
                        title: '司机详情',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/nyongcheshenqing',
                    name: 'nyongcheshenqing',
                    component: () =>
                        import ('./views/sifaju/nyongcheshenqing.vue'),
                    meta: {
                        title: '用车申请',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/nyongche_houbu',
                    name: 'nyongche_houbu',
                    component: () =>
                        import ('./views/sifaju/nyongche_houbu.vue'),
                    meta: {
                        title: '用车后补',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/nyongcheshenpi',
                    name: 'nyongcheshenpi',
                    component: () =>
                        import ('./views/sifaju/nyongcheshenpi.vue'),
                    meta: {
                        title: '用车审批',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/n_qingjia',
                    name: 'n_qingjia',
                    component: () =>
                        import ('./views/sifaju/n_qingjia.vue'),
                    meta: {
                        title: '请假申请',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/nbingjia_shenpi',
                    name: 'nbingjia_shenpi',
                    component: () =>
                        import ('./views/sifaju/nbingjia_shenpi.vue'),
                    meta: {
                        title: '请假审批',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/ngongchu_shenqing',
                    name: 'ngongchu_shenqing',
                    component: () =>
                        import ('./views/sifaju/ngongchu_shenqing.vue'),
                    meta: {
                        title: '公出申请',
                        author: true,
                        keepAlive: false
                    }
                }, {
                    path: '/ngongwen_qicao',
                    name: 'ngongwen_qicao',
                    component: () =>
                        import ('./views/sifaju/ngongwen_qicao.vue'),
                    meta: {
                        title: '公文起草',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/ngongchu_shenpi',
                    name: 'ngongchu_shenpi',
                    component: () =>
                        import ('./views/sifaju/ngongchu_shenpi.vue'),
                    meta: {
                        title: '公出审批',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/nshouwen_dj',
                    name: 'nshouwen_dj',
                    component: () =>
                        import ('./views/sifaju/nshouwen_dj.vue'),
                    meta: {
                        title: '收文登记',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/nkaoqin_paim',
                    name: 'nkaoqin_paim',
                    component: () =>
                        import ('./views/sifaju/nkaoqin_paim.vue'),
                    meta: {
                        title: '考勤排名',
                        author: true,
                        keepAlive: false
                    }
                },
                // {
                // 	path: '/ntongji_baobiao',
                // 	name: 'ntongji_baobiao',
                // 	component: () =>
                // 			import ('./views/sifaju/ntongji_baobiao.vue'),
                // 	meta: {
                // 		title: '考勤统计报表',
                // 		author: true,
                // 		keepAlive: false
                // 	}
                // },
                // {
                // 	path: '/nkaoqin_yc',
                // 	name: 'nkaoqin_yc',
                // 	component: () =>
                // 			import ('./views/sifaju/nkaoqin_yc.vue'),
                // 	meta: {
                // 		title: '考勤异常说明',
                // 		author: true,
                // 		keepAlive: false
                // 	}
                // },
                // {
                // 	path: '/nkaoqin_ycsp',
                // 	name: 'nkaoqin_ycsp',
                // 	component: () =>
                // 			import ('./views/sifaju/nkaoqin_ycsp.vue'),
                // 	meta: {
                // 		title: '考勤异常审批',
                // 		author: true,
                // 		keepAlive: false
                // 	}
                // },
                // {
                // 	path: '/ntongji_lishi',
                // 	name: 'ntongji_lishi',
                // 	component: () =>
                // 			import ('./views/sifaju/ntongji_lishi.vue'),
                // 	meta: {
                // 		title: '人员考勤历史',
                // 		author: true,
                // 		keepAlive: false
                // 	}
                // },
                // {
                // 	path: '/n_tongshi',
                // 	name: 'n_tongshi',
                // 	component: () =>
                // 			import ('./views/sifaju/n_tongshi.vue'),
                // 	meta: {
                // 		title: '我的同事',
                // 		author: true,
                // 		keepAlive: false
                // 	}
                // },
                // {
                // 	path: '/nbangongshi_hgao',
                // 	name: 'nbangongshi_hgao',
                // 	component: () =>
                // 			import ('./views/sifaju/nbangongshi_hgao.vue'),
                // 	meta: {
                // 		title: '办公室核稿',
                // 		author: true,
                // 		keepAlive: false
                // 	}
                // },
                // {
                // 	path: '/nwenshu_gengxin',
                // 	name: 'nwenshu_gengxin',
                // 	component: () =>
                // 			import ('./views/sifaju/nwenshu_gengxin.vue'),
                // 	meta: {
                // 		title: '文书更新文件',
                // 		author: true,
                // 		keepAlive: false
                // 	}
                // },
                // {
                // 	path: '/ngongwen_fenfa',
                // 	name: 'ngongwen_fenfa',
                // 	component: () =>
                // 			import ('./views/sifaju/ngongwen_fenfa.vue'),
                // 	meta: {
                // 		title: '公文分发',
                // 		author: true,
                // 		keepAlive: false
                // 	}
                // },
                // {
                // 	path: '/nniban_yijian',
                // 	name: 'nniban_yijian',
                // 	component: () =>
                // 			import ('./views/sifaju/nniban_yijian.vue'),
                // 	meta: {
                // 		title: '拟办意见',
                // 		author: true,
                // 		keepAlive: false
                // 	}
                // },
                {
                    path: '/task_eva',
                    name: 'task_eva',
                    component: () =>
                        import ('./views/sifaju/evaluateTask.vue'),
                    meta: {
                        title: '任务评分',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/discipline_eva',
                    name: 'discipline_eva',
                    component: () =>
                        import ('./views/sifaju/evaluateDiscipline.vue'),
                    meta: {
                        title: '纪律评分',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/sifa_ditu',
                    name: 'sifa_ditu',
                    component: () =>
                        import ('./views/sifaju/sifa_ditu.vue'),
                    meta: {
                        title: '司法地图',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/sifa_guanli',
                    name: 'sifa_guanli',
                    component: () =>
                        import ('./views/sifaju/sifa_guanli.vue'),
                    meta: {
                        title: '司法地图管理',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/tupianfabu',
                    name: 'tupianfabu',
                    component: () =>
                        import ('./views/sifaju/tupianfabu.vue'),
                    meta: {
                        title: '图片发布',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/upload_img',
                    name: 'upload_img',
                    component: () =>
                        import ('./views/sifaju/upload_img.vue'),
                    meta: {
                        title: '图片发布',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/sifa_kaoshi',
                    name: 'sifa_kaoshi',
                    component: () =>
                        import ('./views/sifaju/sifa_kaoshi.vue'),
                    meta: {
                        title: '司法考试',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/add_lvsuo',
                    name: 'add_lvsuo',
                    component: () =>
                        import ('./views/sifaju/add_lvsuo.vue'),
                    meta: {
                        title: '新增律所',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/lvsuo_chakan',
                    name: 'lvsuo_chakan',
                    component: () =>
                        import ('./views/sifaju/lvsuo_chakan.vue'),
                    meta: {
                        title: '律所信息查看',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/lvshi_shenhe',
                    name: 'lvshi_shenhe',
                    component: () =>
                        import ('./views/sifaju/lvshi_shenhe.vue'),
                    meta: {
                        title: '律师资料审核',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/xianchang_chakan',
                    name: 'xianchang_chakan',
                    component: () =>
                        import ('./views/sifaju/xianchang_chakan.vue'),
                    meta: {
                        title: '现场咨询查看',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/lvshi_jieda',
                    name: 'lvshi_jieda',
                    component: () =>
                        import ('./views/sifaju/lvshi_jieda.vue'),
                    meta: {
                        title: '律师解答',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/lvshi_xiangying',
                    name: 'lvshi_xiangying',
                    component: () =>
                        import ('./views/sifaju/lvshi_xiangying.vue'),
                    meta: {
                        title: '律师响应',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/diaoweihui_xiangying',
                    name: 'diaoweihui_xiangying',
                    component: () =>
                        import ('./views/sifaju/diaoweihui_xiangying.vue'),
                    meta: {
                        title: '调委会响应',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/xinzeng_zhengwu',
                    name: 'xinzeng_zhengwu',
                    component: () =>
                        import ('./views/sifaju/xinzeng_zhengwu.vue'),
                    meta: {
                        title: '新增政务公开内容',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/chakan_zhengwu',
                    name: 'chakan_zhengwu',
                    component: () =>
                        import ('./views/sifaju/chakan_zhengwu.vue'),
                    meta: {
                        title: '新增政务公开内容',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/falv_liebiao',
                    name: 'falv_liebiao',
                    component: () =>
                        import ('./views/sifaju/falv_liebiao.vue'),
                    meta: {
                        title: '法律列表',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/yulan',
                    name: 'yulan',
                    component: () =>
                        import ('./views/sifaju/yulan.vue'),
                    meta: {
                        title: '法律预览',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/xizeng_falvfagui',
                    name: 'xizeng_falvfagui',
                    component: () =>
                        import ('./views/sifaju/xizeng_falvfagui.vue'),
                    meta: {
                        title: '新增法律法规',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/falvfagui_xinxi',
                    name: 'falvfagui_xinxi',
                    component: () =>
                        import ('./views/sifaju/falvfagui_xinxi.vue'),
                    meta: {
                        title: '法律法规信息预览',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/xinzeng_jigou',
                    name: 'xinzeng_jigou',
                    component: () =>
                        import ('./views/sifaju/xinzeng_jigou.vue'),
                    meta: {
                        title: '新增机构',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/xinzeng_sifakaoshi',
                    name: 'xinzeng_sifakaoshi',
                    component: () =>
                        import ('./views/sifaju/xinzeng_sifakaoshi.vue'),
                    meta: {
                        title: '新增',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/xiaoxitongzhi',
                    name: 'xiaoxitongzhi',
                    component: () =>
                        import ('./views/sifaju/xiaoxitongzhi.vue'),
                    meta: {
                        title: '消息通知',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/xitongshezhi',
                    name: 'xitongshezhi',
                    component: () =>
                        import ('./views/sifaju/xitongshezhi.vue'),
                    meta: {
                        title: '系统设置',
                        author: true,
                        keepAlive: false
                    },
                    children: [{
                        path: '/',
                        name: 'minganci',
                        component: () =>
                            import ('./views/sifaju/minganci.vue'),
                        meta: {
                            title: '敏感词管理',
                            author: true,
                            keepAlive: false
                        }
                    }]
                }
            ]
        },
        //律师审批
        {
            path: '/law_shenpi',
            component: law_shenpi,
            name: 'law_shenpi'
        },
        //市民首页
        {
            path: '/shimin',
            component: shimin_shouye,
            name: 'shimin_shouye',
            children: [{
                    path: '/',
                    name: 'shouye_neirong',
                    component: () =>
                        import ('./views/shimin/shouye_neirong.vue'),
                    meta: {
                        title: '市民首页',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/kshipin',
                    name: 'shipin',
                    component: () =>
                        import ('./views/shimin/gerenzhongxin/kanshipin.vue'),
                    meta: {
                        title: '看视频',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/zhuce',
                    name: 'zhuce',
                    component: () =>
                        import ('./views/shimin/zhuce.vue'),
                    meta: {
                        title: '账号注册',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/yianshifa_xiangqing',
                    name: 'yianshifa_xiangqing',
                    component: () =>
                        import ('./views/shimin/yianshifa_xiangqing.vue'),
                    meta: {
                        title: '以案释法详情',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/lvshixiangqing',
                    name: 'lvshixiangqing',
                    component: () =>
                        import ('./views/shimin/lvshi_xiangqing.vue'),
                    meta: {
                        title: '律师详情',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/zhengwu',
                    name: 'zhengwu_gongkai',
                    component: () =>
                        import ('./views/shimin/zhengwugongkai.vue'),
                    meta: {
                        title: '政务公开',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/lvshilist',
                    name: 'lvshilist',
                    component: () =>
                        import ('./views/shimin/lawyer_list.vue'),
                    meta: {
                        title: '律师列表',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/pufa_xc',
                    name: 'pufa_xc',
                    component: () =>
                        import ('./views/shimin/pufa_xuanchuan.vue'),
                    meta: {
                        title: '普法宣传',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/sifa_ditusm',
                    name: 'sifa_ditusm',
                    component: () =>
                        import ('./views/shimin/sifa_ditu.vue'),
                    meta: {
                        title: '司法地图',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/juzhang_xinxiang',
                    name: 'juzhang_xinxiang',
                    component: () =>
                        import ('./views/shimin/juzhang_xinxiang.vue'),
                    meta: {
                        title: '局长信箱',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/zixunpingjia',
                    name: 'zixun_pingjia',
                    component: () =>
                        import ('./views/shimin/gerenzhongxin/zixunpingjia.vue'),
                    meta: {
                        title: '咨询评价',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/jishidafu',
                    name: 'jishidafu',
                    component: () =>
                        import ('./views/shimin/gerenzhongxin/jishidafu.vue'),
                    meta: {
                        title: '针对咨询-既时答复',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/yuyueshijian',
                    name: 'yuyueshijian',
                    component: () =>
                        import ('./views/shimin/gerenzhongxin/yuyueshijian.vue'),
                    meta: {
                        title: '针对咨询-预约时间',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/lvshijujue',
                    name: 'lvshijujue',
                    component: () =>
                        import ('./views/shimin/gerenzhongxin/lvshijujue.vue'),
                    meta: {
                        title: '针对咨询-律师拒绝',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/fuwupingjia',
                    name: 'fuwupingjia',
                    component: () =>
                        import ('./views/shimin/gerenzhongxin/fuwupingjia.vue'),
                    meta: {
                        title: '针对咨询-服务评价',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/yuyuejieda',
                    name: 'yuyuejieda',
                    component: () =>
                        import ('./views/shimin/gerenzhongxin/yuyuejieda.vue'),
                    meta: {
                        title: '针对咨询-预约解答',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/gerenzhongxin',
                    name: 'geren_zhongxin',
                    component: () =>
                        import ('./views/shimin/gerenzhongxin/geren_zhongxin.vue'),
                    meta: {
                        title: '个人中心',
                        author: true,
                        keepAlive: false
                    },
                    children: [{
                            path: '/',
                            name: 'geren_zhu',
                            component: () =>
                                import ('./views/shimin/gerenzhongxin/geren_zhu.vue'),
                            meta: {
                                title: '个人主页',
                                author: true,
                                keepAlive: false
                            }
                        },
                        {
                            path: '/mianfeizixun',
                            name: 'mianfeizixun',
                            component: () =>
                                import ('./views/shimin/gerenzhongxin/mianfeizixun.vue'),
                            meta: {
                                title: '免费咨询',
                                author: true,
                                keepAlive: false
                            }
                        },
                        {
                            path: '/gerenxinxi',
                            name: 'gerenxinxi',
                            component: () =>
                                import ('./views/shimin/gerenzhongxin/gerenxinxi.vue'),
                            meta: {
                                title: '个人信息',
                                author: true,
                                keepAlive: false
                            }
                        },
                        {
                            path: '/yijianfankui',
                            name: 'yijianfankui',
                            component: () =>
                                import ('./views/shimin/gerenzhongxin/yijianfankui.vue'),
                            meta: {
                                title: '意见反馈',
                                author: true,
                                keepAlive: false
                            }
                        },
                        {
                            path: '/zhenduixing',
                            name: 'zhenduixing',
                            component: () =>
                                import ('./views/shimin/gerenzhongxin/zhenduixing.vue'),
                            meta: {
                                title: '针对性咨询',
                                author: true,
                                keepAlive: false
                            }
                        },
                        {
                            path: '/falvyuanzhu',
                            name: 'falvyuanzhu',
                            component: () =>
                                import ('./views/shimin/gerenzhongxin/falvyuanzhu.vue'),
                            meta: {
                                title: '法律援助预约',
                                author: true,
                                keepAlive: false
                            }
                        },
                        {
                            path: '/renmintiaojie',
                            name: 'renmintiaojie',
                            component: () =>
                                import ('./views/shimin/gerenzhongxin/renmintiaojie.vue'),
                            meta: {
                                title: '人民调解预约',
                                author: true,
                                keepAlive: false
                            }
                        },
                    ]
                },
                {
                    path: '/falvfuwu',
                    name: 'falvfuwu',
                    component: () =>
                        import ('./views/shimin/falvfuwu.vue'),
                    meta: {
                        title: '法律服务',
                        author: true,
                        keepAlive: false
                    },
                    children: [{
                            path: '/',
                            name: 'zaixianzixun',
                            component: () =>
                                import ('./views/shimin/falv_fuwu/zaixian_zixun.vue'),
                            meta: {
                                title: '在线咨询',
                                author: true,
                                keepAlive: false
                            }
                        },
                        {
                            path: '/yuyue',
                            name: 'zaixianyuyue',
                            component: () =>
                                import ('./views/shimin/falv_fuwu/zaixian_yuyue.vue'),
                            meta: {
                                title: '在线预约',
                                author: true,
                                keepAlive: false
                            }
                        },
                        {
                            path: '/kaoshi',
                            name: 'sifakaoshi',
                            component: () =>
                                import ('./views/shimin/falv_fuwu/sifa_kaoshi.vue'),
                            meta: {
                                title: '司法考试',
                                author: true,
                                keepAlive: false
                            }
                        },
                        {
                            path: '/qunzhong',
                            name: 'qzyijian',
                            component: () =>
                                import ('./views/shimin/falv_fuwu/qunzhong_yijian.vue'),
                            meta: {
                                title: '司法考试',
                                author: true,
                                keepAlive: false
                            }
                        }
                    ]
                }
            ]
        },
        //值班律师表
        {
            path: '/zhiban',
            component: zhiban,
            name: 'zhiban'
        },
        //针对性
        {
            path: '/zhendui ',
            component: zhendui,
            name: 'zhendui'
        },
        //律师首页
        {
            path: '/lvshi',
            component: law_index,
            name: 'law_index',
            children: [{
                    path: '/',
                    name: 'law_jindu',
                    component: () =>
                        import ('./views/lawyer/zuo_zujian/jindu.vue'),
                    meta: {
                        title: '律师首页',
                        author: true,
                        keepAlive: false
                    },
                    children: [{
                            path: '/',
                            name: 'daichuli',
                            component: () =>
                                import ('./views/lawyer/indexChildren/daichuli.vue'),
                            meta: {
                                title: '待处理',
                                author: true,
                                keepAlive: false
                            }
                        },
                        {
                            path: '/zhize',
                            name: 'zhize',
                            component: () =>
                                import ('./views/lawyer/indexChildren/zhize.vue'),
                            meta: {
                                title: '职责',
                                author: true,
                                keepAlive: false
                            }
                        },
                        {
                            path: '/wodefaqi',
                            name: 'wodefaqi',
                            component: () =>
                                import ('./views/lawyer/indexChildren/wodefaqi.vue'),
                            meta: {
                                title: '我的发起',
                                author: true,
                                keepAlive: false
                            }
                        },
                        {
                            path: '/xuexijihua',
                            name: 'xuexijihua',
                            component: () =>
                                import ('./views/lawyer/indexChildren/xuexijihua.vue'),
                            meta: {
                                title: '课件学习计划',
                                author: true,
                                keepAlive: false
                            }
                        }
                    ]
                },
                {
                    path: '/wanshan',
                    name: 'law_wanshan',
                    component: () =>
                        import ('./views/lawyer/wanshan.vue'),
                    meta: {
                        title: '完善资料',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/zaixianzixun',
                    name: 'zaixianzixun',
                    component: () =>
                        import ('./views/lawyer/indexChildren/zaixianzixun.vue'),
                    meta: {
                        title: '在线咨询',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/ditu',
                    name: 'ditu',
                    component: () =>
                        import ('./views/shimin/sifa_ditu.vue'),
                    meta: {
                        title: '司法地图',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/sifa_peixun',
                    name: 'sifa_peixun',
                    component: () =>
                        import ('./views/lawyer/indexChildren/sifa_peixun.vue'),
                    meta: {
                        title: '司法培训',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/pufaxuanchuan',
                    name: 'pufaxuanchuan',
                    component: () =>
                        import ('./views/lawyer/indexChildren/pufaxuanchuan.vue'),
                    meta: {
                        title: '普法宣传',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/zhiban_law',
                    name: 'zhiban_law',
                    component: () =>
                        import ('./views/lawyer/zhiban_law.vue'),
                    meta: {
                        title: '律师值班表',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/lvshixiangying',
                    name: 'lvshixiangying',
                    component: () =>
                        import ('./views/lawyer/zhenduixing.vue'),
                    meta: {
                        title: '律师值班表',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/xiaoxi',
                    name: 'xiaoxi',
                    component: () =>
                        import ('./views/lawyer/indexChildren/xiaoxi.vue'),
                    meta: {
                        title: '我的消息',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/gerenziliao',
                    name: 'gerenziliao',
                    component: () =>
                        import ('./views/lawyer/indexChildren/gerenziliao.vue'),
                    meta: {
                        title: '职责',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/kanshipin',
                    name: 'kanshipin',
                    component: () =>
                        import ('./views/lawyer/indexChildren/kanshipin.vue'),
                    meta: {
                        title: '视频',
                        author: true,
                        keepAlive: false
                    }
                },
                {
                    path: '/lvshijieda',
                    name: 'lvshijieda',
                    component: () =>
                        import ('./views/lawyer/indexChildren/lvshijieda.vue'),
                    meta: {
                        title: '律师解答',
                        author: true,
                        keepAlive: false
                    }
                },
            ]
        },
        //公共部分
        {
            path: '/punlica',
            component: publica,
            name: 'publica'
        },
        {
            path: '/',
            name: 'login',
            component: () =>
                import ('./views/login/login.vue'),
            meta: {
                title: 'login',
                author: false,
                keepAlive: false
            }
        },
        {
            path: '*',
            name: 'error',
            component: () =>
                import ('./views/error.vue'),
            meta: {
                title: 'error',
                author: false,
                keepAlive: false
            }
        }
    ]
});

export default router;

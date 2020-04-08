<template>
    <div style="height: 100%;overflow: hidden;flex-direction: column" class="flex" >
        <!--<app-breadcrumb  [navList]="navList"></app-breadcrumb>-->
        <breadcrumb :list="navList" :map="mapLocation"></breadcrumb>
        <div style="flex:1;overflow-y: auto;position: relative" class="flex">
            <!--@list="getMap($event)" @outId="getOutId($event)"-->
            <leftPanel v-if="isShow" @setShow="getPanelState" :selOptions="selOptions" @list="getMap($event)" @outId="getOutId($event)"></leftPanel>
            <filtrate v-if="!isShow" @setShow="getPanelState" @selOptions="getOptions($event)" :areaList="areaList" :areaName="areaName"></filtrate>
            <mapComponent v-if="mapShow" style="flex:1;" :mapLocation="mapLocation" v-on:childByValue="childByValue" :areaList="areaList" :areaName="areaName" :hazardMapList="hazardMapList" :riskMapList="riskMapList" :outId="outId"></mapComponent>
            <!--<mapComponent></mapComponent>-->
<!--            <u3d v-if="!mapShow" style="flex:1;"></u3d>-->
            <el-button class="blue m5" style="position: absolute;right: 15px;top: 9px;"  v-if="!mapShow" @click="map_baidu">百度地图</el-button>
        </div>
    </div>
</template>

<script>
    import breadcrumb from '../charts/breadcrumb/breadcrumb'
    import leftPanel from '../charts/summary/leftPanel/leftPanel'
    import filtrate from '../charts/summary/filtrate/filtrate'
    import mapComponent from '../charts/summary/map/mapComponent'
    // import U3d from "../../u3d/u3d";

    export default {
        name: "summaryComponent",
        components:{
            breadcrumb,leftPanel,filtrate,mapComponent},
        data(){
            return{
                navList:[
                    { title:'职责',
                        url:'/zhize'},
                    // { title:'企业安全生产信息管理平台',
                    //   url:'/home/main/infobaseList' },
                    { url:'',
                        title:'司法地图'}
                ],
                isShow :true,
                mapShow:true,
                selOptions:{},
                areaList:[],
                areaName: '',
                hazardMapList:[],
                riskMapList:[],
                outId:'',
                token:sessionStorage.getItem("token"),
                mapLocation:'',
            }
        },

        mounted:function() {
            this.getAreaList();
        },
        methods:{
            //JJ3D切换
            childByValue: function (childValue) {
                // childValue就是子组件传过来的值
                this.mapLocation = childValue;
                this.mapShow = false;
            },
            //返回百度地图
            map_baidu(){
                // alert(this.mapLocation);
                this.mapShow = true;
            },
            // 获取面板显示隐藏
            getPanelState(state){
                this.isShow = state;
            },

            //获取选中的id
            getOptions(event){
                this.selOptions = event;
                this.isShow = true;
            },
            //获取地图展示数据
            getMap(event){
                //重大危险源
                if(event.hazardMapList&&event.hazardMapList.length>0){
                    this.hazardMapList = event.hazardMapList;
                    console.log(this.hazardMapList );
                }
                //企业风险等级
                if(event.riskMapList&&event.riskMapList.length>0){
                    this.riskMapList = event.riskMapList;
                    console.log(this.riskMapList );
                }
            },
            //获取区域
            getAreaList(){
                // const obj:any=getUserInfo();
                // let _this=this;
                // const obj={
                //     /*token:_this.token,                //类型：String  必有字段  备注：登录id
                //     areaId:"z9d9ed0d99c3433a9b09218e599df521",                //类型：String  必有字段  备注：区域id
                //     areaName:"辽阳市",                //类型：String  必有字段  备注：区域名称
                //     areaLevel:"1",                //类型：String  必有字段  备注：区域级别
                //     pageNum:0,                //类型：Number  必有字段  备注：页码
                //     pageSize:10,                //类型：Number  必有字段  备注：每页条数
                //     type:"0"                //类型：String  必有字段  备注：查询部门0向下级1向上级（他不是空的时候 areaId 字段一定要传）*/
                //     id:"z9d9ed0d99c3433a9b09218e599df521"
                // }; //      'area/getAreaList'   summary
                // this.httpPost('/api/area/getAreaTree',obj,function(res){
                //     console.log(res);
                //     _this.areaList = [];
                //     if(res['code']==0){
                //         let dataList = res['data'].rows;
                //         dataList.forEach(item => {
                //             if(item.areaLevel == 1){
                //                 _this.areaName=item.areaName;
                //             }else{
                //                 _this.areaList.push(item);
                //             }
                //         })
                //
                //     }
                // })
            },
            //获取当前选中项id
            getOutId(event){
                this.outId=event;
            }
        }

    }
</script>

<style scoped lang="scss">
    @import "../../assets/css/common";

</style>

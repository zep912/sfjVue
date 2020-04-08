<!--<template>-->
<!--  <div id="map">-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  import BMap from 'BMap'-->
<!--  export default {-->
<!--    // name: 'Map',-->
<!--    data () {-->
<!--      return {-->
<!--      }-->
<!--    },-->
<!--    methods: {-->
<!--      createMap () {-->
<!--        /* eslint-disable */-->
<!--        // 创建Map实例-->
<!--        var map = new BMap.Map("map")-->
<!--        // 初始化地图,设置中心点坐标和地图级别-->
<!--        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11)-->
<!--        //添加地图类型控件-->
<!--        map.addControl(new BMap.MapTypeControl({-->
<!--          mapTypes:[BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]-->
<!--        }))-->
<!--        // 设置地图显示的城市 此项是必须设置的-->
<!--        map.setCurrentCity("北京")-->
<!--        //开启鼠标滚轮缩放-->
<!--        map.enableScrollWheelZoom(true)-->
<!--        /* eslint-enable */-->
<!--      }-->
<!--    },-->
<!--    mounted () {-->
<!--      this.createMap()-->
<!--    }-->
<!--  }-->
<!--</script>-->
<!--<style scoped lang="stylus">-->
<!--  #map-->
<!--    min-height 100vh-->
<!--</style>-->

<!--<template>-->
<!--  <div>-->
<!--    <div class="map-area" id="map-area">-->
<!--      <div id="container"></div>-->
<!--      &lt;!&ndash;搜索面板&ndash;&gt;-->
<!--      <div id="r-result">-->
<!--        &lt;!&ndash;<p>-->
<!--          <el-input id="suggestId" v-model="searchContent"  placeholder="请输入内容" style="width:100%;"></el-input>-->
<!--        </p>&ndash;&gt;-->
<!--        <div class="search">-->
<!--          <input type="text" id="suggestId" class="expName" v-model="searchContent"  placeholder="请输入内容"/>-->
<!--          <button class="seachBtn"><img src="../../../../assets/images/common/u15.png" style="width: 30%"/></button>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="bottom_div">-->
<!--        &lt;!&ndash;当前坐标:&ndash;&gt;-->
<!--        <el-input v-model="mapLocation"  style="width:300px;"></el-input>-->
<!--        <el-button type="primary" style="width:120px;" @click="openU3d()">三维地理图</el-button>-->
<!--      </div>-->
<!--      &lt;!&ndash;<div>&ndash;&gt;-->
<!--      &lt;!&ndash;<button style="position: absolute;top: 57px;right: 13px;">3D</button>&ndash;&gt;-->
<!--      &lt;!&ndash;</div>&ndash;&gt;-->

<!--      &lt;!&ndash;指针&ndash;&gt;-->
<!--      &lt;!&ndash;<div id="map-operate" style="position: absolute;right: 0px;bottom: 60px;">&ndash;&gt;-->
<!--      &lt;!&ndash;<div class="operate">&ndash;&gt;-->
<!--      &lt;!&ndash;<div class="button">&ndash;&gt;-->
<!--      &lt;!&ndash;<button class="rotLeft" id="rotLeft" title="逆时针转动" @click="rot($event)" style="background-color: yellow">left</button>&ndash;&gt;-->
<!--      &lt;!&ndash;<img class="rotImg" id="rotImg" src="../../../../assets/images/map/map_zhizhen.png" style="width: 30px"/>&ndash;&gt;-->
<!--      &lt;!&ndash;<button class="rotRight" id="rotRight" title="顺时针转动" @click="rot($event)">right</button>&ndash;&gt;-->
<!--      &lt;!&ndash;</div>&ndash;&gt;-->
<!--      &lt;!&ndash;</div>&ndash;&gt;-->
<!--      &lt;!&ndash;</div>&ndash;&gt;-->



<!--      &lt;!&ndash;左下方面板&ndash;&gt;-->
<!--      <div class="map-panel" style="display: none " id="map-panel">-->
<!--&lt;!&ndash;        <div v-if="isHazard">&ndash;&gt;-->
<!--&lt;!&ndash;          <p class="flex header">&ndash;&gt;-->
<!--&lt;!&ndash;        <span>&ndash;&gt;-->
<!--&lt;!&ndash;            <img src="assets/images/hazardDetail.hazardLevel.png" alt="" width="30">&ndash;&gt;-->
<!--&lt;!&ndash;             <span class="title">{{hazardDetail.hazardName}}</span>&ndash;&gt;-->
<!--&lt;!&ndash;        </span>&ndash;&gt;-->
<!--&lt;!&ndash;            <span>&ndash;&gt;-->
<!--&lt;!&ndash;          &lt;!&ndash;<img src="assets/images/u214.png" alt="" style="margin-right:20px" @click="setPosition()">&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;        <img src="../../../../assets/images/u84.png" alt="" @click="close()" style="cursor:pointer">&ndash;&gt;-->
<!--&lt;!&ndash;        </span>&ndash;&gt;-->
<!--&lt;!&ndash;          </p>&ndash;&gt;-->
<!--&lt;!&ndash;          <div class="panel-body" id="panel-body">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="flex" id="baseInfo" style="padding:10px;">&ndash;&gt;-->
<!--&lt;!&ndash;              <img src="../../../../assets/images/u230.png" alt="" width="90" height="120" style="padding:25px 10px;background: #fff;margin-right:10px;" v-if="!hazardDetail.image">&ndash;&gt;-->
<!--&lt;!&ndash;              <img :src="hazardDetail.image" alt="" width="90" height="120" style="margin-right:10px;" v-if="hazardDetail.image">&ndash;&gt;-->
<!--&lt;!&ndash;              <ul class="items-list">&ndash;&gt;-->
<!--&lt;!&ndash;                <li>&ndash;&gt;-->
<!--&lt;!&ndash;                  责任单位：{{hazardDetail.dutyUnit}}&ndash;&gt;-->
<!--&lt;!&ndash;                </li>&ndash;&gt;-->
<!--&lt;!&ndash;                <li>&ndash;&gt;-->
<!--&lt;!&ndash;                  危险级别：{{hazardDetail.hazardLevel}}&ndash;&gt;-->
<!--&lt;!&ndash;                </li>&ndash;&gt;-->
<!--&lt;!&ndash;                <li>&ndash;&gt;-->
<!--&lt;!&ndash;                  所在区域：{{hazardDetail.regionName}}&ndash;&gt;-->
<!--&lt;!&ndash;                </li>&ndash;&gt;-->
<!--&lt;!&ndash;                <li>&ndash;&gt;-->
<!--&lt;!&ndash;                  辨识方法：{{hazardDetail.identifyType}}&ndash;&gt;-->
<!--&lt;!&ndash;                </li>&ndash;&gt;-->
<!--&lt;!&ndash;                <li>&ndash;&gt;-->
<!--&lt;!&ndash;                  评估单位：{{hazardDetail.assessUnit}}&ndash;&gt;-->
<!--&lt;!&ndash;                </li>&ndash;&gt;-->
<!--&lt;!&ndash;                <li>&ndash;&gt;-->
<!--&lt;!&ndash;                  登记时间：{{hazardDetail.registrationTime}}&ndash;&gt;-->
<!--&lt;!&ndash;                </li>&ndash;&gt;-->
<!--&lt;!&ndash;              </ul>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            <img src="../../../../assets/images/u261.png" alt="" style="width:100%;height:100%;display: none" id="video">&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;          <div class="panel-bottom">&ndash;&gt;-->
<!--&lt;!&ndash;            <ul class="flex">&ndash;&gt;-->
<!--&lt;!&ndash;              <li class="active" @click="selOptions($event.target,'#baseInfo')">基本信息</li>&ndash;&gt;-->
<!--&lt;!&ndash;              <li @click="selOptions($event.target,'#video')">视频监控</li>&ndash;&gt;-->
<!--&lt;!&ndash;            </ul>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div v-if="!isHazard">&ndash;&gt;-->
<!--&lt;!&ndash;          <p class="flex header">&ndash;&gt;-->
<!--&lt;!&ndash;        <span>&ndash;&gt;-->
<!--&lt;!&ndash;             <img :src=enterpriseDetail.enterpriseImg alt="" width="30">&ndash;&gt;-->
<!--&lt;!&ndash;             <span class="title">{{enterpriseDetail.enterpriseName}}</span>&ndash;&gt;-->
<!--&lt;!&ndash;        </span>&ndash;&gt;-->
<!--&lt;!&ndash;            <span>&ndash;&gt;-->
<!--&lt;!&ndash;          &lt;!&ndash;<img src="assets/images/u214.png" alt="" style="margin-right:20px" @click="setPosition()">&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;        <img src="../../../../assets/images/u84.png" alt="" @click="close()" style="cursor:pointer">&ndash;&gt;-->
<!--&lt;!&ndash;        </span>&ndash;&gt;-->
<!--&lt;!&ndash;          </p>&ndash;&gt;-->
<!--&lt;!&ndash;          <div class="panel-body" id="panel-body">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="flex" id="baseInfo" style="padding:10px;">&ndash;&gt;-->
<!--&lt;!&ndash;              <div>&ndash;&gt;-->
<!--&lt;!&ndash;                <img src="../../../../assets/images/u230.png" alt="" width="90" height="120" style="padding:25px 10px;background: #fff;margin-right:10px;" v-if="!enterpriseDetail.infoImage">&ndash;&gt;-->
<!--&lt;!&ndash;                <img :src="enterpriseDetail.infoImage" alt="" width="90" height="120" style="margin-right:10px;" v-if="enterpriseDetail.infoImage">&ndash;&gt;-->
<!--&lt;!&ndash;                <p class="btn" @click="getAllDetail()">所有信息</p>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--&lt;!&ndash;              <ul class="items-list">&ndash;&gt;-->
<!--&lt;!&ndash;                <li>&ndash;&gt;-->
<!--&lt;!&ndash;                  法人代表：{{enterpriseDetail.legalPersonName}}&ndash;&gt;-->
<!--&lt;!&ndash;                </li>&ndash;&gt;-->
<!--&lt;!&ndash;                <li>&ndash;&gt;-->
<!--&lt;!&ndash;                  法人电话：{{enterpriseDetail.legalPhone}}&ndash;&gt;-->
<!--&lt;!&ndash;                </li>&ndash;&gt;-->
<!--&lt;!&ndash;                <li>&ndash;&gt;-->
<!--&lt;!&ndash;                  注册地址：{{enterpriseDetail.enterpriseAddress}}&ndash;&gt;-->
<!--&lt;!&ndash;                </li>&ndash;&gt;-->
<!--&lt;!&ndash;                <li class="flex">&ndash;&gt;-->
<!--&lt;!&ndash;                  <label style="white-space: nowrap"> 行业领域：</label>&ndash;&gt;-->
<!--&lt;!&ndash;                  <span style="line-height: 19px;margin-top: 6px;">{{enterpriseDetail.business}}</span>&ndash;&gt;-->
<!--&lt;!&ndash;                </li>&ndash;&gt;-->
<!--&lt;!&ndash;                <li>&ndash;&gt;-->
<!--&lt;!&ndash;                  风险等级：{{enterpriseDetail.riskLevel}}&ndash;&gt;-->
<!--&lt;!&ndash;                </li>&ndash;&gt;-->
<!--&lt;!&ndash;              </ul>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            <div  id="whp" style="padding-left: 10px;padding-top: 10px;display: none">&ndash;&gt;-->
<!--&lt;!&ndash;              <div class="flex" style="padding-right: 25px;">&ndash;&gt;-->
<!--&lt;!&ndash;                <input type="text" class="whp-input" v-model="key"  placeholder="请输入危化品名称">&ndash;&gt;-->
<!--&lt;!&ndash;                <span class="whp-btn" @click="getChemicalInfo()">搜索</span>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--&lt;!&ndash;              <ul class="whp-list">&ndash;&gt;-->
<!--&lt;!&ndash;                <li v-for="item in chemicalArr" @click="getchemicalDetail($event.target,item.dictionaryId)">{{item.dictionaryName}}</li>&ndash;&gt;-->
<!--&lt;!&ndash;              </ul>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;          <div class="panel-bottom">&ndash;&gt;-->
<!--&lt;!&ndash;            <ul class="flex">&ndash;&gt;-->
<!--&lt;!&ndash;              <li class="active" @click="selOptions($event.target,'#baseInfo')">基本信息</li>&ndash;&gt;-->
<!--&lt;!&ndash;              <li @click="selOptions($event.target,'#whp')">危化品信息</li>&ndash;&gt;-->
<!--&lt;!&ndash;            </ul>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--      </div>-->
<!--    </div>-->
<!--&lt;!&ndash;    &lt;!&ndash;危化品信息&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <hazardousChemicalDetail :visible.sync="visible" :id="chemicalId"></hazardousChemicalDetail>&ndash;&gt;-->
<!--&lt;!&ndash;    &lt;!&ndash;企业所有信息&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    &lt;!&ndash;<enterpriseAllDetail :showAll.sync="visibleAll"  :id="enterpriseId" ></enterpriseAllDetail>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <el-dialog title="企业所有信息" :visible.sync="visibleAll">&ndash;&gt;-->
<!--&lt;!&ndash;      <quanbuxinxi :enterId="enterpriseId"></quanbuxinxi>&ndash;&gt;-->
<!--&lt;!&ndash;    </el-dialog>&ndash;&gt;-->

<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  import BMap from 'BMap'-->
<!--  // import hazardousChemicalDetail from '../../hazardousChemicalDetail/hazardousChemicalDetail'-->
<!--  // import enterpriseAllDetail from  '../../enterpriseAllDetail/enterpriseAllDetail'-->
<!--  // import {getSessionData,getStorageData} from '../../../../util/storage'-->
<!--  // import Quanbuxinxi from "../../../anjiangang/qiyeanquan/fengxianxinxi/quanbuxinxi";-->
<!--  export default {-->
<!--    name: "mapComponent",-->
<!--    data(){-->
<!--      return{-->
<!--        map:"",-->
<!--        hazardDetail:{},-->
<!--        enterpriseDetail:{},-->
<!--        chemicalList:[],-->
<!--        chemicalArr:[],-->
<!--        markList:[],-->
<!--        isHazard:false,-->
<!--        list :[],-->
<!--        key:'',-->
<!--        enterpriseId:'',-->
<!--        chemicalId:'',-->
<!--        visible:false,-->
<!--        visibleAll:false,-->
<!--        // token:getSessionData("userInfo").userId,-->
<!--        searchContent:'',   //搜索-->
<!--        local:'',-->
<!--        ac:'',-->
<!--        mapLocation:'',-->
<!--      }-->
<!--    },-->
<!--    props:['areaList','areaName','hazardMapList','riskMapList','outId','mapLocation'],-->
<!--    // components:{-->
<!--    //   Quanbuxinxi,-->
<!--    //   hazardousChemicalDetail,enterpriseAllDetail},-->
<!--    mounted(){-->
<!--      this.mapLocation = this.mapLocation-->
<!--      this.initMap();-->
<!--    },-->
<!--    watch:{-->
<!--      areaList:function(newVal,oldval){-->
<!--        if(newVal){-->
<!--          this.drawLine();-->
<!--        }-->
<!--      },-->
<!--      hazardMapList:function(newVal,oldval){-->
<!--        console.log("aaa");-->
<!--        if(newVal.length>0){-->
<!--          console.log(newVal);-->
<!--          this.isHazard=true;-->
<!--          this.clearMark();-->
<!--          this.mark(newVal);-->
<!--        }-->
<!--      },-->
<!--      riskMapList:function(newVal,oldval){-->
<!--        if(newVal.length>0){-->
<!--          this.isHazard=false;-->
<!--          this.clearMark();-->
<!--          this.mark(this.riskMapList);-->
<!--          this.$emit('outClick',this.isHazard);-->
<!--        }-->
<!--      },-->
<!--      outId:function(newVal,oldval){-->
<!--        if(newVal){-->
<!--          this.clearMark();-->
<!--          for(let val of this.list){-->
<!--            if(val.id==newVal){-->
<!--              val.isActive=true;-->
<!--            } else {-->
<!--              val.isActive=false;-->
<!--            }-->
<!--          }-->
<!--          this.mark(this.list);-->
<!--          if($('#map-panel:visible').length==0){-->
<!--            $('#map-panel').show();-->
<!--            if(this.isHazard){-->
<!--              this.getHazardDetail(newVal);-->
<!--            } else {-->
<!--              this.enterpriseId=newVal;-->
<!--              this.getEnterpriseInfo(this.enterpriseId);-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--      }-->

<!--    },-->
<!--    /*updated(changes){//changes:SimpleChanges-->
<!--      if(changes['areaList'] && changes['areaList'].currentValue){-->
<!--        this.drawLine();-->
<!--      }-->
<!--      if(this.riskMapList.length>0){-->
<!--        this.isHazard=false;-->
<!--        this.clearMark();-->
<!--        this.mark(this.riskMapList);-->
<!--        this.$emit('outClick',this.isHazard);-->
<!--      }-->
<!--      // if(this.hazardMapList.length>0){-->
<!--      //   this.isHazard=true;-->
<!--      //   this.clearMark();-->
<!--      //   this.mark(this.hazardMapList);-->
<!--      // }-->
<!--      if(this.outId){-->
<!--        this.clearMark();-->
<!--        for(let val of this.list){-->
<!--          if(val.id==this.outId){-->
<!--            val.isActive=true;-->
<!--          } else {-->
<!--            val.isActive=false;-->
<!--          }-->
<!--        }-->
<!--        this.mark(this.list);-->
<!--        if($('#map-panel:visible').length==0){-->
<!--          $('#map-panel').show();-->
<!--          this.getHazardDetail(this.outId);-->
<!--        }-->
<!--      }-->
<!--    },*/-->

<!--    methods:{-->
<!--      //添加跳转-->
<!--      jump(url,params){-->
<!--        this.$router.push({-->
<!--          path:url,-->
<!--          query: params-->
<!--        });-->
<!--      },-->
<!--      //跳转u3d-->
<!--      openU3d(){-->
<!--        // this.$router.push({path: '/u3d'});-->
<!--        if(this.mapLocation != undefined && this.mapLocation != ''){-->
<!--          this.$emit('childByValue', this.mapLocation)-->
<!--        }else{-->
<!--          this.$alert('<div class="modal-content"><p class="warnImg"></p><p class="help-text">请选择坐标点！</p></div>', '', {-->
<!--            dangerouslyUseHTMLString: true,-->
<!--          });-->
<!--        }-->

<!--      },-->
<!--      //初始化百度地图-->
<!--      initMap(){-->
<!--        console.log("init enter start=============")-->
<!--        const _this=this;-->
<!--        // 百度地图API功能-->
<!--        this.map = new BMap.Map("container");//123.172451205,41.2733392656-->
<!--        this.map.centerAndZoom(new BMap.Point(123.43279092,41.80864478), 15);-->
<!--        this.map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用-->
<!--        this.map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用-->
<!--        var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT});// 左上角，添加比例尺-->
<!--        this.map.addControl(top_left_control);-->
<!--        // 添加带有定位的导航控件-->
<!--        // var navigationControl = new BMap.NavigationControl({-->
<!--        //   // 靠左上角位置-->
<!--        //   anchor: BMAP_ANCHOR_TOP_LEFT,-->
<!--        //   // LARGE类型-->
<!--        //   type: BMAP_NAVIGATION_CONTROL_LARGE,-->
<!--        // });-->
<!--        // this.map.addControl(navigationControl);-->
<!--        var opts = {type: BMAP_NAVIGATION_CONTROL_ZOOM}-->
<!--        this.map.addControl(new BMap.NavigationControl(opts));-->
<!--        //添加地图类型控件-->
<!--        this.map.addControl(new BMap.MapTypeControl({-->
<!--          mapTypes:[-->
<!--            BMAP_NORMAL_MAP,-->
<!--            BMAP_HYBRID_MAP-->
<!--          ]}));-->
<!--        // 鼠标滚动缩放-->
<!--        this.map.addEventListener("zoomend", function(e){-->
<!--          //alert("地图缩放至：" + this.getZoom() + "级");-->
<!--          var level = this.getZoom();-->
<!--          if(level==19){-->
<!--            //alert('已到达最大缩放级别，请选取点坐标点跳汪u3d');-->
<!--          }-->
<!--        });-->
<!--        this.ac = new BMap.Autocomplete(    //建立一个自动完成的对象-->
<!--                {"input" : "suggestId"-->
<!--                  ,"location" : this.map-->
<!--                });-->

<!--        //鼠标点击下拉列表后的事件-->
<!--        this.ac.addEventListener("onconfirm", function(e) {-->
<!--          var _value = e.item.value;-->
<!--          console.log(_value);-->
<!--          _this.myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;-->
<!--          _this.searchContent = _this.myValue;-->
<!--          _this.setPlace();-->
<!--        });-->
<!--        // //3d模式-->
<!--        // this.ac.addEventListener("click", function(e) {-->
<!--        //   var _value = e.item.value;-->
<!--        //   console.log(_value);-->
<!--        //   this.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放-->
<!--        //   this.map.setHeading(64.5);-->
<!--        //   this.map.setTilt(73);-->
<!--        // });-->
<!--        // 获取经纬度-->
<!--        this.map.addEventListener("click", function(e){-->
<!--          // _this.map.clearOverlays();-->
<!--          _this.mapLocation = e.point.lng + "," + e.point.lat;-->
<!--          //   _this.map.centerAndZoom(new BMap.Point( e.point.lng, e.point.lat), 13);-->
<!--          //   _this.map.addOverlay(new BMap.Marker(new BMap.Point(e.point.lng,e.point.lat)));    //添加标注-->
<!--          // //   /* console.log(e.point.lng + ", " + e.point.lat);-->
<!--          // //     alert(e.point.lng + ", " + e.point.lat);*/-->
<!--          // //   console.log(e.point.lng + "," + e.point.lat);-->
<!--        });-->
<!--        // console.log("init enter end=============");-->


<!--      },-->
<!--      //搜索-->
<!--      myFun(){-->
<!--        var pp = this.local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果-->
<!--        this.map.centerAndZoom(pp, 18);-->
<!--        this.map.addOverlay(new BMap.Marker(pp));    //添加标注-->
<!--        this.mapLocation = '';-->
<!--      },-->

<!--      setPlace(){-->
<!--        this.map.clearOverlays();    //清除地图上所有覆盖物-->
<!--        this.local = new BMap.LocalSearch(this.map, { //智能搜索-->
<!--          onSearchComplete: this.myFun-->
<!--        });-->
<!--        this.local.search(this.myValue);-->
<!--      },-->
<!--      /************************************绘制轮廓************************************/-->
<!--      // 画边界-->
<!--      getBoundary(str,color){-->
<!--        console.log("1");-->
<!--        console.log(str + "  " + color);-->
<!--        var bdary = new BMap.Boundary();-->
<!--        const _this=this;-->
<!--        bdary.get(str, function(rs){       //获取行政区域-->
<!--          console.log(rs.boundaries);-->
<!--          // map.clearOverlays();        //清除地图覆盖物-->
<!--          var count = rs.boundaries.length; //行政区域的点有多少个-->
<!--          for(var i = 0; i < count; i++){-->
<!--            var ply = new BMap.Polygon(rs.boundaries[i],-->
<!--                    {strokeWeight: 2, //设置多边形边线线粗-->
<!--                      strokeOpacity: 1, //设置多边形边线透明度0-1-->
<!--                      strokeStyle: "dashed", //设置多边形边线样式为实线或虚线，取值 solid 或 dashed-->
<!--                      strokeColor: "#DF767B", //设置多边形边线颜色-->
<!--                      fillColor:color,-->
<!--                      // fillOpacity:0.2-->
<!--                    }); //建立多边形覆盖物-->
<!--            console.log(ply);-->
<!--            _this.map.addOverlay(ply);  //添加覆盖物-->
<!--            if(str===_this.areaName){-->
<!--              _this.map.setViewport(ply.getPath());    //调整视野-->
<!--            }-->
<!--          }-->
<!--        });-->
<!--      },-->
<!--      //划线-->
<!--      drawLine(){-->
<!--        const arr=['rgba(43,251,43,0.3)','rgba(14,14,247,0.3)','rgba(255,0,255,0.3)','rgba(136,136,24,0.3)','rgba(0,247,247,0.3)','rgba(254,254,0,0.4)','rgba(255,0,0,0.4)'];-->
<!--        console.log("2");-->
<!--        for(let key in this.areaList){-->
<!--          this.getBoundary(this.areaList[key].areaName,arr[key]);-->
<!--        }-->
<!--        this.getBoundary(this.areaName,'transparent');-->
<!--      },-->
<!--      /************************************添加覆盖物************************************/-->
<!--      //获取标识-->
<!--      mark(list){-->
<!--        console.log('3');-->
<!--        console.log(list);-->
<!--        this.markList = [];-->
<!--        this.list=list;-->
<!--        for(let key in list){-->
<!--          const val=list[key];-->
<!--          console.log(val);-->
<!--          //当前选中-->
<!--          console.log(val.isActive);-->
<!--          if(val.isActive){-->
<!--            // var myIcon = new BMap.Icon('../../../../assets/images/map/map_big'+val.level+'.png', new BMap.Size(60,90), {-->
<!--            // offset: new BMap.Size(48, 48), // 指定定位位置-->
<!--            // imageOffset: new BMap.Size(0, 0 - 48 * 48) // 设置图片偏移-->
<!--            // });-->
<!--            var ismyIcon=require("../../../../assets/images/map/map_big"+val.level+".png")-->
<!--            var myIcon = new BMap.Icon(ismyIcon,new BMap.Size(60,90));// 视窗大小-->
<!--            //-->
<!--          } else {-->
<!--            // alert(21);-->
<!--            var isAcivemyIcon = require("../../../../assets/images/map/map_"+val.level+".png")-->
<!--            // var myIcon = new BMap.Icon(require("../../../../assets/images/map/map_"+val.level+".png"), new BMap.Size(21,31), {-->
<!--            // offset: new BMap.Size(48, 48), // 指定定位位置-->
<!--            // imageOffset: new BMap.Size(0, 0 - 48 * 48) // 设置图片偏移-->
<!--            // });-->
<!--            var myIcon = new BMap.Icon(isAcivemyIcon,new BMap.Size(21,31));// 视窗大小-->
<!--            // ../../../../assets/百度图片-->
<!--          }-->
<!--          var pt = new BMap.Point(val.x,val.y);-->
<!--          console.log(val.x,val.y);-->
<!--          // this.map.centerAndZoom(new BMap.Point(val.x,val.y), 17);-->
<!--          var marker = new BMap.Marker(pt,{icon:myIcon});  // 创建标注-->
<!--          //var marker = new BMap.Marker();-->
<!--          this.markList.push(marker);-->
<!--          this.map.addOverlay(marker);               // 将标注添加到地图中-->
<!--          this.addClickHandler(val,marker,key);-->
<!--          // return icon;-->
<!--        }-->
<!--      },-->
<!--      //点击图标-->
<!--      addClickHandler(val,marker,key){-->
<!--        console.log(marker);-->
<!--        console.log('揍你...................................');-->
<!--        console.log(val);-->
<!--        const _this=this;-->
<!--        marker.addEventListener("click",function(e) {-->
<!--          _this.clearOneMark();-->
<!--          _this.list[key].isActive=true;-->
<!--          _this.mark(_this.list);-->
<!--          if($('#map-panel:visible').length==0){-->
<!--            $('#map-panel').show();-->
<!--          }-->
<!--          // 面板显示在非基础信息tab-->
<!--          if($('#baseInfo:visible').length==0){-->
<!--            $('#baseInfo').show().siblings().hide();-->
<!--          }-->
<!--          _this.key='';-->
<!--          _this.move();-->
<!--          if(_this.isHazard){-->
<!--            _this.getHazardDetail(val.id);-->
<!--          } else {-->
<!--            _this.enterpriseId=val.id;-->
<!--            _this.getEnterpriseInfo(_this.enterpriseId);-->
<!--            //_this.getChemicalInfo();-->
<!--          }-->
<!--        });-->
<!--      },-->
<!--      //获取企业详情-->
<!--      getEnterpriseInfo(id){-->
<!--        let _this = this;-->
<!--        /*/base/getEnterpriseById*/-->
<!--        // _this.httpPost('/api/riskProductLevel/getChemicalChartEnterpriseInfo',{enterpriseId:id,tokenId:_this.token},function(res){-->
<!--        //   console.log(res);-->
<!--        //   if(res['code']==0){-->
<!--        //     console.log(res['data']);-->
<!--        //     let mapLocation = res['data'].mapLocation;-->
<!--        //     _this.enterpriseDetail=res['data'];-->
<!--        //     _this.chemicalList = res['data'].chemicalList;-->
<!--        //     _this.chemicalArr = res['data'].chemicalList;-->
<!--        //     let x = mapLocation.split(',');-->
<!--        //     console.log(x[0]);-->
<!--        //     console.log(x[1]);-->
<!--        //     _this.map.centerAndZoom(new BMap.Point(x[0],x[1]), 17);-->
<!--        //     _this.mapLocation = x[0] + "," + x[1];-->
<!--        //     _this.enterpriseId = id;-->
<!--        //     console.log(_this.enterpriseId);-->
<!--        //   }-->
<!--        // })-->
<!--      },-->
<!--      //获取危化品信息-->
<!--      getChemicalInfo(){-->
<!--        this.chemicalArr = this.chemicalList;-->
<!--        /*let _this = this;-->
<!--        _this.httpPost('/api/chemicalInfo/getChemicalInfoList',{enterpriseId:_this.enterpriseId,title:_this.key,pageNum:0,pageSize:1000},function(res){-->
<!--          console.log(res);-->
<!--          if(res['code']==0){-->
<!--            console.log(res['data']);-->
<!--            _this.chemicalList=res['data'].resultList;-->
<!--          }-->
<!--        })*/-->
<!--        let list = this.chemicalArr;-->
<!--        let title = this.key;-->
<!--        var len = list.length;-->
<!--        var arr = [];-->
<!--        for(var i=0;i<len;i++){-->
<!--          //如果字符串中不包含目标字符会返回-1-->
<!--          if(list[i].dictionaryName.indexOf(title)>=0){-->
<!--            arr.push(list[i]);-->
<!--          }-->
<!--        }-->
<!--        this.chemicalArr = arr;-->
<!--      },-->
<!--      //获取危险源详情-->
<!--      getHazardDetail(id){-->
<!--        let _this = this;-->
<!--        // _this.httpPost('/api/hazard/getHazardInfoById',{hazardId:id, isGreatHazard: "0"},function(res){-->
<!--        //   console.log(res);-->
<!--        //   if(res['code']==0){-->
<!--        //     console.log(res['data']);-->
<!--        //     _this.hazardDetail=res['data'];-->
<!--        //   }-->
<!--        // })-->
<!--      },-->
<!--      //切换窗口选项-->
<!--      selOptions(target,id){-->
<!--        $(target).addClass('active').siblings().removeClass('active');-->
<!--        $(id).show().siblings().hide();-->
<!--      },-->
<!--      //关闭窗口-->
<!--      close(){-->
<!--        $('#map-panel').hide();-->
<!--      },-->
<!--      //清除所有标识物-->
<!--      clearMark(){-->
<!--        for(var key in this.markList){-->
<!--          this.map.removeOverlay(this.markList[key]);-->
<!--        }-->
<!--      },-->
<!--      //清除所有标识物，恢复未激活状态-->
<!--      clearOneMark(){-->
<!--        this.clearMark();-->
<!--        for(let val of this.list){-->
<!--          if(val.isActive){-->
<!--            val.isActive=false;-->
<!--            break;-->
<!--          }-->
<!--        }-->
<!--      },-->
<!--      //窗口拖拽-->
<!--      move(){-->
<!--        var drag=document.getElementById("map-panel");-->
<!--        var container=document.getElementById("map-area");-->
<!--        var dragX=drag.offsetWidth; //拖拽元素盒子宽度-->
<!--        var dragY=drag.offsetHeight; //拖拽元素盒子高度-->
<!--        var containerX=container.offsetWidth; //拖拽元素父级盒子宽度-->
<!--        var containerY=container.offsetHeight; //拖拽元素父级盒子高度-->
<!--        var initX; //当前元素X-->
<!--        var initY; //当前元素Y-->
<!--        var offsetX;-->
<!--        var offsetY;-->
<!--        var operated=false;-->
<!--        drag.onmousedown=function (e) {-->
<!--          offsetX=drag.offsetLeft; //当前元素相对父盒子的X-->
<!--          offsetY=drag.offsetTop; //当前元素相对父盒子的Y-->
<!--          operated=!operated;-->
<!--          initX = e.clientX;-->
<!--          initY = e.clientY;-->
<!--          // console.log(offsetX)-->
<!--          // console.log("initX:"+initX);-->
<!--          // console.log("initY:"+initY);-->
<!--        };-->
<!--        drag.touchstart=function (e) {-->
<!--          offsetX=drag.offsetLeft; //当前元素相对父盒子的X-->
<!--          offsetY=drag.offsetTop; //当前元素相对父盒子的Y-->
<!--          operated=!operated;-->
<!--          initX = e.clientX;-->
<!--          initY = e.clientY;-->
<!--          // console.log(offsetX)-->
<!--          // console.log("initX:"+initX);-->
<!--          // console.log("initY:"+initY);-->
<!--        }-->
<!--        drag.onmousemove=function (e) {-->

<!--          e=e||window.event;-->
<!--          var moveX=e.clientX-initX;-->
<!--          var moveY=e.clientY-initY;-->
<!--          // console.log("e.clientX:"+e.clientX); //clientX鼠标移动中实时相对于浏览器的X-->
<!--          // console.log("e.clientY:"+e.clientY);//clientY鼠标移动中实时相对于浏览器的Y-->

<!--          if(operated){-->
<!--            var disX=moveX+offsetX;-->
<!--            var disY=moveY+offsetY;-->
<!--            if(disX<0){-->
<!--              disX=0-->
<!--            }else if((dragX+disX)>containerX){-->
<!--              disX=containerX-dragX;-->
<!--            }-->
<!--            if(disY<0){-->
<!--              disY=0-->
<!--            }else if((dragY+disY)>containerY){-->
<!--              disY=containerY-dragY;-->
<!--            }-->
<!--            drag.style.left=disX+'px';-->
<!--            drag.style.top=disY+'px';-->

<!--          }-->

<!--        }-->
<!--        drag.touchmove=function (e) {-->

<!--          e=e||window.event;-->
<!--          var moveX=e.clientX-initX;-->
<!--          var moveY=e.clientY-initY;-->
<!--          // console.log("e.clientX:"+e.clientX); //clientX鼠标移动中实时相对于浏览器的X-->
<!--          // console.log("e.clientY:"+e.clientY);//clientY鼠标移动中实时相对于浏览器的Y-->

<!--          if(operated){-->
<!--            var disX=moveX+offsetX;-->
<!--            var disY=moveY+offsetY;-->
<!--            if(disX<0){-->
<!--              disX=0-->
<!--            }else if((dragX+disX)>containerX){-->
<!--              disX=containerX-dragX;-->
<!--            }-->
<!--            if(disY<0){-->
<!--              disY=0-->
<!--            }else if((dragY+disY)>containerY){-->
<!--              disY=containerY-dragY;-->
<!--            }-->
<!--            drag.style.left=disX+'px';-->
<!--            drag.style.top=disY+'px';-->

<!--          }-->

<!--        }-->
<!--        drag.touchend=function (){-->
<!--          operated=!operated;-->
<!--        };-->
<!--        drag.onmouseup=function (){-->
<!--          operated=!operated;-->
<!--        };-->
<!--      },-->
<!--      //危化品详情-->
<!--      getchemicalDetail(target,id){-->
<!--        $(target).addClass('active').siblings().removeClass('active');-->
<!--        this.visible=true;-->
<!--        this.chemicalId=id;-->
<!--      },-->
<!--      //所有信息-->
<!--      getAllDetail(){-->
<!--        $('#map-panel').hide();-->
<!--        this.visibleAll=true;-->
<!--      }-->
<!--    }-->

<!--  }-->
<!--</script>-->

<!--<style scoped lang="scss">-->
<!--  @import "../../../../assets/css/common";-->
<!--  #r-result{-->
<!--    position: fixed;-->
<!--    left: 620px;-->
<!--    top: 173px;-->
<!--    overflow: hidden;-->
<!--    //z-index: 1;-->
<!--    /*background: #fff;-->
<!--    width: 500px;-->
<!--    height: 500px;*/-->

<!--  }-->
<!--  .bottom_div{-->
<!--    width: 100%;-->
<!--    height: 80px;-->
<!--    position: fixed;-->
<!--    bottom: 0px;-->
<!--    /*background-color: white;*/-->
<!--    z-index: 999;-->
<!--    display: flex;-->
<!--    justify-content: center;-->
<!--    align-items: center;-->
<!--  }-->

<!--  /*************搜索框************/-->
<!--  .search {-->
<!--    float: right;-->
<!--    @extend .flex;-->
<!--    .expName{-->
<!--      width: 300px;-->
<!--      height: 40px;-->
<!--      border: 1px solid #ccc;-->
<!--      outline: none;-->
<!--      font-size: 16px;-->
<!--    }-->
<!--    .seachBtn{-->
<!--      @include themeBg;-->
<!--      width: 80px;-->
<!--      height: 40px;-->
<!--      text-align: center;-->
<!--      border: none;-->
<!--      outline: none;-->
<!--      border-radius: 0 5px 5px 0;-->
<!--    }-->
<!--  }-->
<!--  .map-area{-->
<!--    height:100%;-->
<!--    position:relative;-->
<!--    .map-panel{-->
<!--      position:absolute;-->
<!--      //position:fixed;-->
<!--      //top:0;-->
<!--      bottom:0;-->
<!--      z-index:10000;-->
<!--      width:400px;-->
<!--      height:350px;-->
<!--      background: rgba(0,0,0,0.5);-->
<!--      color:#fff;-->
<!--      font-size:16px;-->
<!--      -moz-user-select: none; /*火狐*/-->
<!--      -webkit-user-select: none; /*webkit浏览器*/-->
<!--      -ms-user-select: none; /*IE10*/-->
<!--      -khtml-user-select: none; /*早期浏览器*/-->
<!--      user-select: none;-->
<!--      .header{-->
<!--        height:50px;-->
<!--        justify-content: space-between;-->
<!--        align-items: center;-->
<!--        background: rgba(0,0,0,0.5);-->
<!--        padding:0 10px;-->
<!--        .title{-->
<!--          font-size: 20px;-->
<!--          color: #FFFFFF;-->
<!--        }-->
<!--      }-->
<!--      .panel-body{-->
<!--        height:250px;-->
<!--        .items-list{-->
<!--          li{-->
<!--            line-height:32px;-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--      .panel-bottom{-->
<!--        height:50px;-->
<!--        ul{-->
<!--          height:100%;-->
<!--          background: rgba(0,0,0,0.5);-->
<!--          li{-->
<!--            width:100px;-->
<!--            text-align: center;-->
<!--            color: #33CCFF;-->
<!--            line-height:50px;-->
<!--            cursor: pointer;-->
<!--          }-->
<!--          li.active{-->
<!--            color:#fff;-->
<!--            background: #808080;-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--    .map-panel:hover{-->
<!--      cursor: move;-->
<!--    }-->
<!--    #container{-->
<!--      height:100%;-->
<!--      -moz-user-select: none; /*火狐*/-->
<!--      -webkit-user-select: none; /*webkit浏览器*/-->
<!--      -ms-user-select: none; /*IE10*/-->
<!--      -khtml-user-select: none; /*早期浏览器*/-->
<!--    }-->
<!--  }-->
<!--  .btn{-->
<!--    width:90px;-->
<!--    text-align: center;-->
<!--    height:40px;-->
<!--    line-height:40px;-->
<!--    color: #33CCFF;-->
<!--    background: rgba(0,0,0,0.5);-->
<!--    border-radius: 5px;-->
<!--    margin-top:10px;-->
<!--  }-->
<!--  .whp-input{-->
<!--    flex:1;-->
<!--    height:40px;-->
<!--    background: #fff;-->
<!--    color:#333;-->
<!--  }-->
<!--  .whp-btn{-->
<!--    height:40px;-->
<!--    line-height:40px;-->
<!--    width:50px;-->
<!--    text-align: center;-->
<!--    background: rgba(0,0,0,0.5);-->
<!--    border-radius: 0 5px 5px 0;-->
<!--    color: #33CCFF;-->
<!--    cursor: pointer;-->
<!--  }-->
<!--  .whp-list{-->
<!--    padding-top:10px;-->
<!--    height: 198px;-->
<!--    overflow-y: auto;-->
<!--    li{-->
<!--      display: inline-block;-->
<!--      width: 118px;-->
<!--      text-align: center;-->
<!--      height:40px;-->
<!--      line-height:40px;-->
<!--      color: #C9C9C9;-->
<!--      background: rgba(0,0,0,0.5);-->
<!--      border-radius: 5px;-->
<!--      margin-bottom:10px;-->
<!--      margin-right: 5px;-->
<!--    }-->
<!--    li.active{-->
<!--      color:#fff;-->
<!--      background:#33CCFF;-->
<!--    }-->
<!--  }-->

<!--</style>-->

<template>
  <div class="map">
    <div class="header-top">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/sifaju' }">职责</el-breadcrumb-item>
        <el-breadcrumb-item>司法地图</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button size="small" v-if="!boxShow || !organShow" @click="back" class="btn-fr">返回上一级</el-button>
    </div>
    <div class="mapbox">
      <el-row>
        <el-col :span="8" v-show="boxShow" style="position:relative;padding-bottom:40px">
          <el-input
                  placeholder="请输入想要搜索机构名称"
                  v-model="form.orgName"
                  prefix-icon="el-icon-search"
                  style="width:75%"
          ></el-input>
          <el-button type="primary" class="mapBtn" @click="search">搜索</el-button>
          <div class="maparea">
            <el-dropdown @command="handleAreaCommand">
              <span class="el-dropdown-link">
                所属区域
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                        v-for="item in areaRegionList"
                        :key="item.areaId"
                        :command="item.areaId"
                >{{item.areaName}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                机构类别
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                        v-for="(item,index) in orgList"
                        :key="index"
                        :command="item.dictDataCode"
                >{{item.dictDataName}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span class="maparea-arrow">
              <i class="el-icon-arrow-up"></i>
            </span>
          </div>
          <ul class="mapUl">
            <li v-for="(item,index) in organList" :key="index">
              <div
                      :class="{active:active==index}"
                      @click="orgListClick(index)"
              >{{item.orgCount||item.orgCunt}}</div>
              <span>{{item.allOrg||item.orgName}}</span>
            </li>
          </ul>
          <!-- 树形 -->
          <div class="mapTree">
            <div class="mapTreeMain">
              <span>
                <img src="../../assets/image/tree1.png" alt />
                {{treeHeader}}
              </span>
              <span>
                数量:
                <span>{{treeHeaderNum}}</span>
              </span>
            </div>
            <!-- 具体律所 -->
            <ul v-show="!organShow" class="organUl">
              <li
                      v-for="(item,index) in lawOrgList"
                      :key="index"
                      @click="organClick(item.lawOrgId)"
              >
                <span>{{item.orgName}}</span>
                <i class="el-icon-arrow-right" style="line-height:48px"></i>
              </li>
            </ul>
            <!-- 地区 -->
            <ul v-show="organShow" class="organUl">
              <li
                      v-for="(item,index) in organArr"
                      :key="index"
                      @click="orgClick(item.areaRegionId,item.areaRegionName)"
              >
                <span>
                  <img src="../../assets/image/tree2.png" alt />
                  {{item.areaRegionName?item.areaRegionName:''}}
                </span>
                <span>
                  数量:
                  <span>{{item.areaOrgCount}}</span>
                </span>
              </li>
            </ul>
            <!-- 分页 -->
          </div>
          <div class="organDivList">
            <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pageform.pageNum"
                    :page-size="pageform.pageSize"
                    layout="total, prev, pager, next"
                    :total="pageform.total"
                    v-show="!organShow"
            >></el-pagination>
          </div>
        </el-col>
        <el-col :span="8" v-show="!boxShow">
          <el-form :model="formItem">
            <el-form-item label="律所名称:">{{formItem.orgName}}</el-form-item>
            <el-form-item label="机构代码:">{{formItem.orgCode}}</el-form-item>
            <el-form-item label="成立时间:">{{formItem.year}}</el-form-item>
            <el-form-item label="负责人:">{{formItem.orgPrincipalName}}</el-form-item>
            <el-form-item label="注册地址:">{{formItem.orgFullAddress}}</el-form-item>
            <el-form-item label="手机号码:">{{formItem.orgTelephone}}</el-form-item>
            <el-form-item label="律师人数:">{{formItem.personTotal}}</el-form-item>
            <el-form-item label="律所简介:">{{formItem.orgDesc}}</el-form-item>
            <el-form-item label="照片:">
              <img
                      :src="item"
                      alt
                      v-for="(item,index) in formItem.orgImgList"
                      :key="index"
                      class="orgImgDsc"
              />
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="16" style="position:relative">
          <baidu-map
                  class="bm-view"
                  ak="ATzSBaYhEgFctcVGgoyWG7pZhFK1gRBs"
                  :center="center"
                  :zoom="zoom"
                  @ready="handler"
                  mapType="BMAP_NORMAL_MAP"
                  anchor="BMAP_ANCHOR_TOP_RIGHT"
                  :scroll-wheel-zoom="true"
                  :double-click-zoom="false"
          >
            <my-overlay
                    :position="{lng: item.lng, lat: item.lat}"
                    :text="item.areaRegionName+'('+item.areaOrgCount+')'"
                    :active="active"
                    :info="item"
                    :lawMsg="item.lawMsg"
                    @mouseover.native="actives = true"
                    @mouseleave.native="actives = false"
                    v-for="(item,index) in mapList"
                    :key="index"
                    v-show="orgListShow"
            ></my-overlay>
            <my-overlay
                    :position="{lng: item.lng, lat: item.lat}"
                    :text="item.areaRegionName"
                    :active="active"
                    :info="item"
                    :lawMsg="item.lawMsg"
                    @mouseover.native="actives = true"
                    @mouseleave.native="actives = false"
                    v-for="(item,index) in mapList"
                    :key="'info'+index"
                    v-show="lawOrgListShow"
            ></my-overlay>

            <div class="mapDiv" style="position:absolute;left:0;bottom:0;" v-show="labelBoxShow">
              <h3>{{centerForm.areaRegionName}}</h3>
              <div class="mapDivBox">
                <img :src="centerForm.orgImg" alt />
                <div class="mapOrg">
                  <p>执业证号：{{centerForm.credentialCode}}</p>
                  <p>手机号码：{{centerForm.orgTelephone}}</p>
                  <p>执政律师：{{centerForm.year?centerForm.year:''}}</p>
                  <p>注册地址：{{centerForm.orgFullAddress}}</p>
                </div>
              </div>
            </div>
          </baidu-map>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import MyOverlay from "@/components/myOverlay";//根据api文档，这是自定义覆盖物的方法
  export default {
    components: {
      MyOverlay
    },
    data() {
      return {
        treeHeader:'',
        treeHeaderNum:'',
        centerForm: {
          areaRegionName: "",
          orgImg: "",
          credentialCode: "",
          year: "",
          orgFullAddress: ""
        },
        labelBoxShow: false,
        baseMapShow: true,
        organBaiShow: false,
        orgListShow: true,
        lawOrgListShow: false,
        formItem: {
          orgName: "",
          orgCode: "",
          year: "",
          orgPrincipalName: "",
          orgFullAddress: "",
          orgTelephone: "",
          personTotal: "",
          orgDesc: ""
        },
        mapList: [],
        active: 0,
        form: {
          orgName: "",
          orgType: "",
          areaRegionId: ""
        },
        boxShow: true,
        organShow: true,
        input1: "",
        main: "辽阳市",
        treeNum: 100,
        orgList: [],
        mapTreeList: [],
        organArr: [],
        organList: [],
        lawCommand: "",
        pageform: {
          pageSize: 10,
          pageNum: 1,
          total: 0
        },
        areaRegionList: [],
        lawOrgList: [],
        center: {
          lng: "123.17",
          lat: "41.27"
        },
        zoom: 3,
        show: false
      };
    },
    mounted() {
      this.getOrgList();
      this.getAreaList();
      this.getFaYuan();
      // let timer = this.$nextTick(() => {
      //   setTimeout(() => {
      //     this.getMap();
      //   }, 500);
      // });
    },
    methods: {
      draw({ el, BMap, map }) {
        const pixel = map.pointToOverlayPixel(new BMap.Point(116.404, 39.915));
        el.style.left = pixel.x - 60 + "px";
        el.style.top = pixel.y - 20 + "px";
      },
      // 分页操作，改变pagesize时触发
      handleSizeChange(val) {
        this.pageform.pageNum = val;
        this.getLawList();
      },
      // 分页操作，改变每个页码触发
      handleCurrentChange(val) {
        this.pageform.pageNum = val;
        this.active = this.proIndex;
        this.getLawList();
      },
      // 获取所有法院机构的列表
      getFaYuan() {
        let obj = {
          dictCode: "fayuanjigou",
          parentDictDataCode: "",
          userId: "111"
        };
        this.$http.post("/support/getDictionaryList", obj).then(res => {
          this.orgList = res.content.resultList;
        });
      },
      // 地图初始化时的中心点和地图层级
      handler() {
        // console.log(BMap, map);
        this.center.lng = 123.17;
        this.center.lat = 41.27;
        this.zoom = 10;
      },
      // 点击所有的机构列表的时间。全部，法律援助等，也会触发请求机构事件3
      orgListClick(index) {
        this.form.orgType = index + '' || "";
        this.active = index;
        this.getOrgList();
      },
      search() {
        this.getOrgList();
      },
      orgClick(id,item) {
        this.treeHeader = item;
        this.form.areaRegionId = id;
        this.organShow = !this.organShow;
        this.getLawList();
      },
      // 机构类别下拉菜单的点击事件
      handleCommand(n) {
        this.form.orgType = n;
        this.getOrgList();
      },
      //地址下拉菜单的点击事件
      handleAreaCommand(id) {
        this.form.areaRegionId = id;
        this.getOrgList();
      },
      // 点击具体律所。
      // 律所信息需要重新组装数据结构，获取律所信息，是为了方便在显示的时候能直接显示。
      // 并且点击具体律所，要将地图的经纬度换成律所所在的经纬度
      organClick(id) {
        this.mapList = [];
        this.boxShow = !this.boxShow;
        let obj = {
          token: sessionStorage.getItem("token"),
          lawOrgId: id
        };
        this.$http.post("/lawOrg/getLawOrgInfo", obj).then(res => {
          this.formItem = res.content;
          let obj = {};
          obj.areaRegionName = this.formItem.orgName;
          obj.lng = this.formItem.areaX;
          obj.lat = this.formItem.areaY;
          obj.credentialCode = this.formItem.credentialCode;
          obj.orgTelephone = this.formItem.orgTelephone;
          obj.orgFullAddress = this.formItem.orgFullAddress;
          obj.orgImg = this.formItem.orgImgList[0];
          obj.lawMsg = false;
          obj.infoMsg = true;
          this.centerForm = obj;
          this.baseMapShow = false;//结构上，左侧是需要点击几次才到达的。控制其显示隐藏
          this.labelBoxShow = true;
          this.mapList.push(obj);

          this.center = {
            lng: this.mapList[0].lng,
            lat: this.mapList[0].lat
          };
          this.zoom = 18;
        });
      },
      // 点击某区获取区内的律所
      // 所获取的数据需要重新组装成新的数据结构方便显示
      getLawList() {
        if(this.orgListShow){
          this.orgListShow = false;
          this.lawOrgListShow = true;
        }
        let obj = {
          token: sessionStorage.getItem("token"),
          ...this.form,
          areaStreetId: "", //类型：String  可有字段  备注：所属街道ID
          pageNum: this.pageform.pageNum,
          pageSize: this.pageform.pageSize
        };
        this.$http.post("/lawOrg/getLawOrgList", obj).then(res => {
          this.lawOrgList = res.content.dataList;
          this.pageform.total = res.content.pageInfo.total;
          if (res.content.dataList && res.content.dataList.length !== 0) {
            this.mapList = [];
            // 地图上所有点的信息都是通过mapList这个数组来显示
            // 在每次切换的时候，分页切换也会相应的改变数组数据，改变地图数据。因此需要等页面加载完成之后替换
            // 在这里使用了$nextTick方法,重新改变了数组数据，不保留上一次的数据，使用$nextTick
            // 如果不使用，bug表现就是切换了分页，但地图上依然显示了上一页的数据。或者切换了左侧数据，但地图上没有改变。
            this.$nextTick(() => {
              this.mapList = res.content.dataList.map(el => {
                const {areaX, areaY, orgName} = el;
                return {lng: areaX, lat: areaY, areaRegionName: orgName, lawMsg: false, infoMsg: false};
              });
              this.center = {
                lng: this.mapList[0].lng,
                lat: this.mapList[0].lat
              };
              this.zoom = 16;
            });
            this.treeHeaderNum = this.pageform.total
          }
        });
      },
      // 初始化的时候获取下面所有区的数据。需要重新组装数据
      // 通过mapList这个数组来统一管理 notInit表示判断不是初始状态，即不是第一次加载
      getOrgList(notInit) {
        let obj = {
          token: sessionStorage.getItem("token"),
          ...this.form
        };
        this.$http.post("/lawOrg/getOrgCollectData", obj).then(res => {
          this.organList = res.content.collectData.orgList;
          this.mapTreeList = res.content.areaOrgList;
          this.organArr = this.mapTreeList.slice(0);
          this.organArr = this.organArr.slice(1);
          // 切换分页，点击第二层都要将mapList置空，
          // 为了避免在加载过程中出现重复现象，使用$nextTick方法保持数组的纯粹性
          this.mapList = [];
          this.$nextTick(() => {
            this.mapList = this.organArr.map(el => {
              el.lng = el.areaCoordinate.split(",")[0];
              el.lat = el.areaCoordinate.split(",")[1];
              el.lawMsg = true;
              el.infoMsg = false;
              return el
            });
            notInit && this.handler();
          });
          this.treeHeader = this.mapTreeList[0].areaRegionName;
          this.treeHeaderNum = this.mapTreeList[0].areaOrgCount
        });
      },
      // 获取地址的list
      getAreaList() {
        this.$http.post("/support/getAreaList", { areaLevel: "3" }).then(
            ( data ) => {
              if (data.code === 200) {
                this.areaRegionList = [{ areaId: "", areaName: "全部" }].concat(
                    data.content.dataList.reduce((res, item) => {
                      if (!res.some(val => val.areaId === item.areaId)) {
                        item.leaf = item.areaLevel === "4";
                        res.push(item);
                      }
                      return res;
                    }, [])
                );
              }
            }
        );
      },
      // 返回上一级，当查看区或者律师列表时显示，此时才可点击
      back() {
        if (!this.boxShow) {
          this.boxShow = !this.boxShow;
          this.labelBoxShow = false;
          this.getLawList();
          return
        }
        if (!this.organShow) {
          this.organShow = !this.organShow;
          this.form.areaRegionId = '';
          this.getOrgList(true);
        }
      }
    }
  };
</script>

<style lang='scss'>
  .mapDiv {
    position: absolute;
    left: 10px;
    bottom: 40px;
    width: 438px;
    height: 290px;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    h3 {
      height: 40px;
      background: rgba(0, 0, 0, 0.6);
      font-size: 18px;
      line-height: 40px;
      box-sizing: border-box;
      padding-left: 5%;
    }
    .mapDivBox {
      overflow: hidden;
      margin-left: 20px;
      display: flex;
      margin-top: 10px;
      img {
        width: 100px;
        height: 130px;
        margin-right: 20px;
      }
      .mapOrg {
        line-height: 24px;
      }
    }
  }
  #container {
    width: 100%;
    height: 800px;
  }
  .organDivList {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    text-align: right;
  }
  .mapTree {
    margin-top: 20px;
    margin-bottom: 10px;
    position: relative;

    .mapTreeMain {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      height: 48px;
      line-height: 48px;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding-left: 3px;
      padding-right: 10px;
      img {
        vertical-align: middle;
        margin-right: 8px;
      }
      span:nth-of-type(1) {
        color: #158ccb;
      }
      span:nth-of-type(2) {
        span {
          margin-left: 20px;
          color: #158ccb;
          font-weight: 600;
        }
      }
    }
    .organUl {
      li {
        height: 48px;
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
        padding-left: 20px;
        padding-right: 10px;
        line-height: 48px;
        display: flex;
        justify-content: space-between;
        span:nth-of-type(1) {
          color: #158ccb;
        }
        span:nth-of-type(2) {
          span {
            margin-left: 20px;
            color: #158ccb;
            font-weight: 600;
          }
        }
      }
    }
  }
  .mapbox {
    background: #fff;
    box-sizing: border-box;
  }
  .mapBtn {
    margin-left: 10px;
    background: linear-gradient(to right, #109ed3, #1a7fc5);
  }
  .mapUl {
    overflow: hidden;
    .active {
      background: linear-gradient(to right, #109ed3, #1a7fc5);
      color: #fff;
    }
    li:last-of-type {
      margin-right: 0;
    }
    li {
      width: 19%;
      float: left;
      // margin-right: 5px;
      text-align: center;
      margin-top: 10px;
      div {
        width: 60px;
        height: 60px;
        background: #e9eef3;
        text-align: center;
        line-height: 60px;
        font-size: 18px;
        margin: 0 auto;
        color: #158ccb;
        font-weight: 600;
        border-radius: 5px;
        margin-bottom: 5px;
      }
      span {
        font-size: 12px;
      }
    }
  }
  .map {
    width: 100%;
    margin: 0 20px;
    position: relative;
    .header-top {
      padding: 20px 0;
    }
    .btn-fr {
      position: absolute;
      top: 10px;
      right: 0;
    }
  }
  .bm-view {
    width: 100%;
    height: 800px;
  }
  .maparea {
    margin-top: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    .el-dropdown {
      width: 42%;
      text-align: center;
      box-sizing: border-box;
    }
    .el-dropdown:nth-of-type(1),
    .el-dropdown:nth-of-type(2) {
      border-right: 1px solid #ccc;
    }
    .maparea-arrow {
      display: inline-block;
      width: 10%;
      text-align: center;
    }
  }
  .orgImgDsc {
    width: 130px;
    height: 170px;
    float: left;
    margin-right: 15px;
  }
  .el-form-item {
    text-align: left;
  }
</style>

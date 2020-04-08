<template>
  <div class="left-panel">
    <div class="search-area flex">
      <input type="text" class="key" placeholder="请输入企业名称" v-model="searchName">
      <span class="search-btn" @click="search()">搜索</span>
    </div>
    <ul class="options flex">
      <li @click="filtrate" >筛选</li>
      <li class="js-click">
        <span>{{levelName}}</span>
        <div class="panel">
          <img src="assets/images/sanjiao.png" alt="" style="margin-bottom: -6px;">
          <ol class="panel-list">
            <li v-for="(item,index) in levelList" :key="index" @click="getLevel(index+1)" :class="{active:selectLevel==index+1}">{{item.dictionaryName}}</li>
          </ol>
        </div>
      </li>
      <li class="js-click checkType">
        <span>查看</span>
        <div class="panel">
          <img src="assets/images/sanjiao.png" alt="" style="margin-bottom: -6px;">
          <ol class="panel-list">
            <li @click="selectCheckType('0','企业风险分级')"  :class="{active:checkType==0}">企业风险分级</li>
            <li @click="selectCheckType('1','重大危险源')" :class="{active:checkType==1}">重大危险源</li>
          </ol>
        </div>
      </li>
    </ul>
    <div>
      <p class="item-title">{{title}}</p>
      <div class="flex item-list">
        <dl v-for="(item ,index) in upList" :key="index" @click="getLevel(index,true)">
          <dt :class="{'red':index===1,'orange':index===2,'yellow':index===3,'active':index==squreLevel}">{{item.num}}</dt>
          <dd>{{item.title}}</dd>
        </dl>
      </div>
    </div>
    <ul class="result-list">
      <li v-for="(item ,index) in resultList" :key="index" >
        <div class="flex top-item">
          <div @click="upAndDown(index,item)">
            <img src="../../../../assets/images/lb_24.png" alt="" style="margin-right:20px;" v-if="index===0">
            <img src="../../../../assets/images/lb_29.png" alt=""  style="margin-right:15px;" v-if="index>0">
            <span class="li-title">{{item.titleName}}</span>
          </div>
          <b @click="showItemList($event.target)" :class="{'red':selectLevel2==1,'orange':selectLevel2==2,'yellow':selectLevel2==3}">
            {{item.num}}
          </b>
        </div>
        <ol class="bt-item">
          <li class="flex"  v-for="subitem in item.itemList" @click="setPosition(subitem.id)">
            <span class="name" v-if="subitem.itemTitle">{{subitem.itemTitle}}</span>
            <span class="company">{{subitem.company}}</span>
            <span class="content" :class="{'red':subitem.level==1,'orange':subitem.level==2,'yellow':subitem.level==3}">{{subitem.content}}</span>
          </li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script>
  import filtrate from  '../../summary/filtrate/filtrate';
    export default {
      name: "leftPanel",
      data(){
          return{
            levelName : '风险等级',
            title:'企业风险分级',
            selectLevel:'0',
            squreLevel : '0',
            selectLevel2:'0',
            checkType:'0',
            levelList : [
              {dictionaryName:'重大风险'},
              {dictionaryName:'较大风险'},
              {dictionaryName:'一般风险'},
              {dictionaryName:'低风险'}
            ],
            upList:[],
            resultList : [],
            searchName:'',
            id:'',
            token:sessionStorage.getItem("token")
          }
      },
      props:['selOptions'],
      components:{filtrate},
     /* created() {
        this.search();
        this.clickLastLevel();
      },*/
      mounted(){
        this.search();
        this.clickLastLevel();
        this.togglePanel();
      },
    methods:{
        //查看、等级弹出菜单
        togglePanel(){
          $('.js-click').click(function(){
            $(this).find('.panel').toggle();
            $(this).toggleClass('active');
          });
        },
        //选择查看方式
        selectCheckType(val,title){
          this.checkType=val;
          //企业风险分级
          if(val==='0'){
            this.levelName= '风险等级';
            this.levelList=[{dictionaryName:'重大风险'},{dictionaryName:'较大风险'},{dictionaryName:'一般风险'},{dictionaryName:'低风险'}];
          } else {
            this.levelName= '等级';
            this.levelList=[{dictionaryName:'一级'},{dictionaryName:'二级'},{dictionaryName:'三级'},{dictionaryName:'四级'}];
          }
          this.title=title;
          this.selectLevel = '0';
          this.search();
        },
        //选择等级
        getLevel(val,isSquare){
          /*//结果中查询
          if(isSquare){
            this.selectLevel=String(val);
            this.squreLevel=this.selectLevel;
            //条件查询
          } else {
            this.selectLevel=String(val);
            this.squreLevel=this.selectLevel;
          }*/
          this.selectLevel=String(val);
          this.squreLevel=this.selectLevel;
          this.search();
        },
        //筛选
        filtrate() {
          this.$emit('setShow', false);
        },

        //显示地区下子项
        showItemList(target){
          $(target).parent().next().toggle();
        },
        //上下翻
        upAndDown(i,item){
          //上翻
          if(i===0&&item.pid){
            this.id=item.pid;
            //下翻
          } else if(i>0&&item.isUnderline==0){
            this.id=item.id;
          }
          this.search();
        },

        //结果查询
        search(){
          // let _this=this;
          // let params={
          //   /*key: _this.key,
          //   areaCode: _this.selOptions.areaCode,
          //   industryCode: _this.selOptions.industryCode,
          //   checkType: _this.checkType,
          //   selectLevel: _this.selectLevel,*/
          //   id:_this.id,
          //   tokenId:_this.token,                //类型：String  必有字段  备注：当前登录人id
          //   key:_this.searchName,                //类型：String  必有字段  备注：关键字
          //   areaCode:_this.selOptions.areaCode ? _this.selOptions.areaCode : '',                //类型：String  必有字段  备注：所属区域id，多个逗号隔开
          //   industryCode:_this.selOptions.industryCode ? _this.selOptions.industryCode : '',                //类型：String  必有字段  备注：行业类型id，多个逗号隔开
          //   checkType:_this.checkType,                //类型：String  必有字段  备注：查看 0.企业风险分级 1、重大危险源
          //   selectLevel:_this.selectLevel,                //类型：String  必有字段  备注：选择等级 1. checkType=0时0总数1.重大风险 2. 较大风险 3. 一般风险 4. 低风险 2.checkType=1时0总数1.一级 2. 二级 3. 三级 4. 四级
          //   squreLevel:_this.squreLevel                //类型：String  必有字段  备注：选择小方块中分类 1. checkType=0时0.总数1.重大风险 2. 较大风险 3. 一般风险 4. 低风险 2.checkType=1时0.总数1.一级 2. 二级 3. 三级 4. 四级
          // };
          // _this.httpPost('/api/riskProductLevel/summary ',params,function(res){
          //   console.log(res);
          //   if(res['code']==0){
          //     const data=res['data'];
          //     _this.upList=data.upList;
          //     _this.resultList=data.resultList;
          //     _this.selectLevel2=data.selectLevel;
          //     if(_this.checkType == 0){
          //       /*data.riskMapList = [ //123.189363,41.279933    123.428428,41.193485
          //         {level: "R", x: "123.428428", y: "41.193485", company: "lll", id: "3149", content: "危化品行业"},
          //         /!*{level: "Y", x: "123.325247", y: "41.279131", company: "有多久科技11", id: "3149", content: "危化品行业"},
          //         {level: "O", x: "122.927405", y: "41.272191", company: "有多久科技22", id: "3149", content: "危化品行业"},
          //         {level: "B", x: "123.069984", y: "41.253103", company: "有多久科技33", id: "3149", content: "危化品行业"}*!/
          //       ]*/
          //     }else{
          //       data.hazardMapList = [
          //         {level: "O", x: "123.316048", y: "40.893721", company: "辽宁淡远印刷广告传播有限公司", id: "7", content: "燃气生产和供应业",itemTitle: "测试十二"}
          //       ]
          //     }
          //
          //     _this.$emit('list', {hazardMapList:data.hazardMapList,riskMapList:data.riskMapList});
          //   }
          // })
        },
        //点击单条数据
        setPosition(id){
          this.$emit("outId",id);
        },
        //点击查询结果最下层级
        clickLastLevel(){
          $('.result-list').on('click','.bt-item li',function(){
            $(this).parents('.result-list').find('.bt-item li.active').removeClass('active');
            $(this).addClass('active');
          })
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../../assets/css/common";

  .left-panel{
    width:400px;
    border-right:1px solid #ccc;
    font-size:16px;
    font-family: 'Arial Normal', 'Arial';
    height:100%;
    .search-area{
      padding:5px 8px;
      .key{
        flex:1;
        height:32px;
        border:1px solid #999;
        border-radius:5px;
        background:url('../../../../assets/images/u1996.png') no-repeat 5px center;
        background-size: 7%;
        padding-left: 33px;
      }
      .search-btn{
        width:53px;
        text-align:center;
        height:32px;
        border-radius:3px;
        line-height:32px;
        background:#158CCB;
        color:#fff;
        margin-left:5px;
      }
    }
    .options{
      padding:10px 0;
      border-top:1px solid #E6E6E6;
      border-bottom:1px solid #E6E6E6;
      >li{
        flex:1;
        height:30px;
        line-height:30px;
        text-align:center;
        background:url('../../../../assets/images/u1983.png') no-repeat 90% center;
        background-size: 7%;
        position:relative;
        cursor: pointer;
        .panel{
          position:absolute;
          z-index:1000;
          width:130px;
          text-align:center;
          display: none;
          .panel-list{
            border-radius:5px 5px 5px 5px;
            background:#fff;
            border-top:1px solid #ccc;
            border-left:1px solid #ccc;
            margin-top: -5px;
            li{
              border-bottom:1px solid #ccc;
              border-right:1px solid #ccc;
              height:35px;
              line-height:35px;
              cursor: pointer;
            }
            li:last-child{
              border-radius:0 0 5px 5px;
            }
            li:first-child{
              border-radius:5px 5px 0 0;
            }
            li:hover,li.active{
              background:#158CCB;
              color:#fff;
            }
          }
        }
      }
      >li.active{
        background:url('../../../../assets/images/u1984.png') no-repeat 90% center;
        background-size: 7%;
      }
      li+li{
        border-left:1px solid #E6E6E6;
      }
    }
    .item-title{
      font-size: 18px;
      color: #158CCB;
      font-family: 'Arial Negreta', 'Arial';
      font-weight: 700;
      padding:5px 10px;
    }
    .item-list{
      padding:6px 13px;
      border-bottom:1px solid #ccc;
      margin-left: 3px;
      dl{
        text-align:center;
        cursor: pointer;
        dt{
          margin-left:15px;
          width:59px;
          background:#E9EEF3;
          color:#28A1DB;
          height:59px;
          line-height:59px;
          border-radius:3px;
          font-size:18px;
          position: relative;
          left: -3px;
        }
        .active{
          color:#E9EEF3;
          background:#28A1DB;
        }
        .red{
          color:#FF6060;
        }
        .orange{
          color:#FF9966;
        }
        .yellow{
          color:#DCE101
        }


        .red.active{
          color:#E9EEF3;
          background:#FF6060;
        }
        .orange.active{
          color:#E9EEF3;
          background:#FF9966;
        }
        .yellow.active{
          color:#E9EEF3;
          background:#DCE101
        }
        dd{
          color: #666666;
          margin:5px 0 0 10px;
        }
      }
    }
    .result-list{
      >li{
        .top-item{
          height:50px;
          align-items:center;
          justify-content:space-between;
          border-bottom:1px solid #ccc;
          padding:0 15px 0 10px;
          .li-title{
            font-size: 18px;
            color: #158CCB;
          }
          >b{
            width: 59px;
            text-align:center;
            height: 23px;
            line-height:23px;
            background-color: #158CCB;
            border-radius: 3px;
            color: #E9EEF3;
            cursor: pointer;
          }
          >b.red{
            color:#E9EEF3;
            background:#FF6060;
          }
          >b.orange{
            color:#E9EEF3;
            background:#FF9966;
          }
          >b.yellow{
            color:#E9EEF3;
            background:#DCE101
          }
          img{
            vertical-align:middle;
          }
        }
        .bt-item{
          border-bottom:1px solid #ccc;
          display: none;
          max-height:145px;
          overflow-y:auto;
          li{
            height:36px;
            align-items:center;
            justify-content:space-between;
            padding:0 15px;
            cursor: pointer;
            .name,.company{
              color: #333333;
            }
            .content{
              color:#FFFFFF;
              font-size: 14px;
              background:#158CCB;
            }
            .red.content{
              background:#FF6060;
            }
            .orange.content{
              background:#FF9966;
            }
            .yellow.content{
              background:#DCE101
            }
          }
          li.active{
            .name,.company{
              color: #158CCB;
            }
          }
        }
      }
    }
  }

</style>

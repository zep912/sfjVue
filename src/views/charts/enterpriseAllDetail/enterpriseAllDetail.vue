<template>
  <!--企业所有详情模态框-->
  <el-dialog :visible.sync="isVisible" :showAll="showAll" title="" width="1150" footer="null" @close="$emit('update:showAll', false)">
    <div class="all-detail">
      <div class="header">
        <img src="assets/images/u5165.png" alt="">
        <span>辽阳市石油化工有限</span>
      </div>
      <div class="flex">
        <ul class="left-menu">
          <li @click="toggleMenu($event.target,'baseInfo')">企业基本信息</li>
          <li @click="toggleMenu($event.target,'chemical')">危险化学品</li>
          <li @click="toggleMenu($event.target,'proccess')">生产工艺</li>
          <li @click="toggleMenu($event.target,'tankarea')">危险化学品罐区</li>
          <li @click="toggleMenu($event.target,'hazard')">重大危险源</li>
          <li @click="toggleMenu($event.target,'baseInfo')">应急处置措施</li>
          <li @click="toggleMenu($event.target,'baseInfo')">风险分级登记</li>
          <li @click="toggleMenu($event.target,'baseInfo')">风险管控清单</li>
          <li @click="toggleMenu($event.target,'baseInfo')">安全管理制度</li>
          <li @click="toggleMenu($event.target,'baseInfo')">安全管理人员</li>
          <li @click="toggleMenu($event.target,'baseInfo')">安全设施设备</li>
          <li @click="toggleMenu($event.target,'baseInfo')">特种设备</li>
          <li @click="toggleMenu($event.target,'baseInfo')">应急预案</li>
          <li @click="toggleMenu($event.target,'baseInfo')">自查自报信息</li>
          <li @click="toggleMenu($event.target,'baseInfo')">执法日志</li>
        </ul>
        <div style="flex:1;height:750px;overflow:auto">
          <!--企业基本信息-->
          <emergencyCommandBaseInfoView v-if="type == 'baseInfo'" :ids="id"></emergencyCommandBaseInfoView>
          <!--危险化学品-->
          <produceBaseChemicalView v-if="type == 'chemical'" :id="id"></produceBaseChemicalView>
          <!--生产工艺-->
          <enterpriseProduceProcessView v-if="type == 'proccess'" :id="id"></enterpriseProduceProcessView>
          <!--危险化学品罐区-->
          <produceBaseChemicalTankareaView v-if="type == 'tankarea'" :id="id"></produceBaseChemicalTankareaView>
          <!--重大危险源-->
          <hazardNormalView v-if="type == 'hazard'"></hazardNormalView>
        </div>
      </div>
    </div>
  </el-dialog>

</template>

<script>

    export default {
        name: "enterpriseAllDetail",
      data(){
          return{
            isVisible: this.showAll,// 模态框显示状态
            type : 'baseInfo'
          }

      },
      props:["showAll","id"],
      /*ngOnInit() {
      },*/
      watch:{
        showAll:function() {
          this.isVisible = this.showAll;
        },
      },
      methods:{
        //切换菜单
        toggleMenu(target,type){
          $(target).addClass('active').siblings().removeClass('active');
          this.type=type;
        }
      }
    }
</script>

<style scoped lang="scss">
@import "../../../assets/css/common";
/*::v-deep{
  .ant-modal-body{
    padding:0;
  }
}*/
.all-detail{
  font-family: 'Arial Normal', 'Arial';
  font-size:16px;
  .header{
    height:87px;
    line-height:78px;
    font-size: 28px;
    color: #FFFFFF;
    background: #169BD5;
    img{
      margin:0 40px;
    }
  }
  .left-menu{
    width:140px;
    li{
      height:50px;
      line-height:50px;
      text-align: center;
      color:#666;
      background: #ccc;
      cursor: pointer;
      border-bottom:2px solid #fff;
    }
    li:hover,li.active{
      background: #169BD5;
      color:#fff;
      font-weight:700;
    }
  }
}

</style>

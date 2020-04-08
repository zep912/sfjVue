<template>
  <div class="infoView">
    <div class="flex comm-row">
      <div class="flex">
        <span>企业名称：</span>
        <p>{{infoData.enterpriseName}}</p>
      </div>
      <div class="flex">
        <span>组织机构代码：</span>
        <p>{{infoData.orgCode}}</p>
      </div>
    </div>

    <div class="flex comm-row">
      <div class="flex">
        <span>工商注册号：</span>
        <p>{{infoData.registerNumber}}</p>
      </div>
      <div class="flex">
        <span>统一社会信用代码：</span>
        <p>{{infoData.socialCode}}</p>
      </div>
    </div>

    <!--<div class="flex">-->
    <div class="flex">
      <span>注册地址：</span>
      <p style="position: relative;padding-right: 20px;max-width: 80%;">
        {{infoData.registerProvince}}{{infoData.registerTown}}{{infoData.registerRegion}}{{infoData.registerStreet}}
        <img src="assets/images/page/enterprise/u236.png" width="30" height="30" style="cursor: pointer;position: absolute;right: -30px;top: 5px;"/>
      </p>
    </div>
    <!--</div>-->

    <div class="flex comm-row">
      <div class="flex">
        <span>法人代表：</span>
        <p>{{infoData.legalRepresent}}</p>
      </div>
      <div class="flex">
        <span>身份证号：</span>
        <p>{{infoData.IDCode}}</p>
      </div>
    </div>

    <div class="flex comm-row">
      <div class="flex">
        <span>法人电话：</span>
        <p>{{infoData.legaTelephone}}</p>
      </div>
      <div class="flex">
        <span>电子邮箱：</span>
        <p>{{infoData.email}}</p>
      </div>
    </div>

    <div class="flex comm-row">
      <div class="flex">
        <span>注册资金：</span>
        <p>{{infoData.regCost}}万元</p>
      </div>
      <div class="flex">
        <span>成立日期：</span>
        <p>{{infoData.establishDate}}</p>
      </div>
    </div>

    <div class="flex comm-row">
      <div class="flex">
        <span>占地面积：</span>
        <p>{{infoData.floorSpace}}平方米</p>
      </div>
      <div class="flex">
        <span>用地类型：</span>
        <p>{{infoData.spaceType}}</p>
      </div>
    </div>

    <div class="flex comm-row">
      <div class="flex">
        <span>企业类型：</span>
        <p>{{infoData.enterpriseType}}</p>
      </div>
      <div class="flex">
        <span>企业规模：</span>
        <p>{{infoData.enterpriseStyle}}</p>
      </div>
    </div>

    <div class="flex comm-row">
      <div class="flex">
        <span>从业人数：</span>
        <p>{{infoData.peopleNumber}}人</p>
      </div>
      <div class="flex">
        <span>现有员工：</span>
        <p>{{infoData.existingPeople}}人</p>
      </div>
    </div>

    <div class="flex comm-row">
      <div class="flex">
        <span>安全管理人员：</span>
        <p>{{infoData.securityPeople}}人</p>
      </div>
      <div class="flex">
        <span>年产值：</span>
        <p>{{infoData.outputValue}}万元</p>
      </div>
    </div>

    <div class="flex comm-row">
      <div class="flex">
        <span>年产量：</span>
        <p>{{infoData.produceion}}</p>
      </div>
      <div class="flex">
        <span>生产车间：</span>
        <p>{{infoData.produceDept}}座</p>
      </div>
    </div>

    <div class="flex">
      <span>成品库：</span>
      <p>{{infoData.produceLibrary}}座</p>
    </div>

    <!--<div class="flex comm-row">-->
    <div class="flex" style="width: 100%;">
      <span>行业领域：</span>
      <div class="area-content flex1">{{infoData.industryField}}</div>
    </div>
    <!--</div>-->

    <div class="flex" style="width: 100%;">
      <span>企业简介：</span>
      <div class="area-content flex1">{{infoData.profile}}</div>
    </div>

    <div class="flex comm-row">
      <div class="flex" style="width: 100%;">
        <span Required>生产经营环境：</span>
        <app-img-upload imgLists="environmentList" isShow="false"></app-img-upload>
      </div>
    </div>

    <div class="flex comm-row">
      <div class="flex" style="width: 100%;">
        <span nzRequired>总平面布置图：</span>
        <app-img-upload imgLists="generalLayoutList" isShow="false"></app-img-upload>
      </div>
    </div>

    <div class="flex comm-row">
      <div class="flex" style="width: 100%;">
        <span nzRequired>企业照片：</span>
        <app-img-upload imgLists="enterpriseImgList" isShow="false"></app-img-upload>
      </div>
    </div>

  </div>

</template>

<script>

    export default {
        name: "emergencyCommandBaseInfoView",
      data(){
          return{
            ids : '',
            infoData: {},
            environmentList : [],
            generalLayoutList : [],
            enterpriseImgList : []
          }

      },
      props:[ids],
      updated(){
        if(this.ids){
          this.getInfo();
        }
      },
      methods:{

        // 查询
        getInfo(){
          this.baseInfoService.getBaseInfo({ enterpriseId: this.ids}).subscribe( res => {
            console.log(res);
            let data = JSON.parse(JSON.stringify(res));
            if(data.code == '0'){
              this.infoData = data.data;
              this.environmentList = getInfoImgList(data.data.environmentId, data.data.environment);
              this.generalLayoutList = getInfoImgList(data.data.generalLayoutId, data.data.generalLayout);
              this.enterpriseImgList = getInfoImgList(data.data.enterpriseImgId, data.data.enterpriseImg);
            }
          });
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../../../assets/css/common";
  .infoView{
    padding: 20px;
    font-size: 16px;
    color: #333;
    .comm-row{
      div{
        width: 50%;
      }
    }
    span{
      display: inline-block;
      width: 145px;
      height: 40px;
      line-height: 40px;
      text-align: right;
      margin-right: 10px;
    }
    p{
      color: #666;
      max-width: 85%;
      padding-top: 9px;
      height: auto;
      -ms-word-break: break-all;
      word-break: break-all;
    }
    .area-content{
      height: 120px;
      padding: 5px 6px;
      color: #666;
      border: 1px solid #ccc;
      margin: 10px 0;
    }

  }

  :host ::ng-deep i {
    font-size: 32px;
    color: #999;
  }
  :host ::ng-deep .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
  //上传图片删除按钮
  :host ::ng-deep {
    .ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-delete{
      display: none;
    }
  }

</style>

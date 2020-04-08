<template>
  <!--危化品详情模态框-->
  <nz-modal [(nzVisible)]="visible" nzTitle="" [nzWidth]="1200" [nzFooter]="null" (nzOnCancel)="close()">
    <div class="alarm-container" >
      <ul class="tab">
        <li class="tabItem active" @click="toggleTab($event.target,'#tab1')">重大危险源信息</li>
        <li class="tabItem"  @click="toggleTab($event.target,'#tab2')">应急预案</li>
        <li class="tabItem"  @click="toggleTab($event.target,'#tab3')">视频监控</li>
      </ul>
      <div class="alarmCon" style="position: relative;">
        <div class="content" style="height: 100%;overflow-y: auto;overflow-x: hidden;">
          <div class="trainView" id="tab1" style="display: block">
            <div class="hazardView">
              <div class="hazardViewBottom">
                <div class="viewCommon">
                  <div class="comm-container">
                    <div class="flex comm-row">
                      <div class="flex ">
                        <span>危险源名称：</span>
                        <p>{{hazardInfo.hazardName}}</p>
                      </div>
                      <div class="flex">
                        <span>分&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类：</span>
                        <p>{{hazardInfo.hazardType}}</p>
                      </div>
                    </div>

                    <div class="flex comm-row">
                      <div class="flex ">
                        <span>所在区域：</span>
                        <p>{{hazardInfo.regionName}}</p>
                      </div>
                      <div class="flex" style="position:relative">
                        <span>位置标注：</span>
                        <p>x:{{hazardInfo.locationX}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y:{{hazardInfo.locationY}}</p>
                        <img src="assets/images/page/enterprise/u236.png" width="30" height="30" style="cursor: pointer;position: absolute;right: 15px;top: 5px;"/>
                      </div>
                    </div>

                    <div class="flex comm-row">
                      <div class="flex">
                        <span>责任单位：</span>
                        <p>{{hazardInfo.dutyUnit}}</p>
                      </div>
                      <div class="flex">
                        <span>责&nbsp;任&nbsp;人：</span>
                        <p>{{hazardInfo.dutyUser}}</p>
                      </div>
                    </div>

                    <div class="flex comm-row">
                      <div class="flex">
                        <span>辨识方法：</span>
                        <p>{{hazardInfo.identifyType}}</p>
                      </div>
                      <div class="flex">
                        <span>危险源级别：</span>
                        <p>{{hazardInfo.hazardRank}}</p>
                      </div>
                    </div>

                    <div class="flex comm-row" style="width: 100%;">
                      <div class="flex" style="width: 100%;">
                        <span></span>
                        <div class="area-content" v-if="hazardInfo.identifyTypeId === '1'">
                          <div class="flex" style="width: 100%;">
                            <span class="area-row-item">危险源发生可能性（L）：</span>
                            <p>{{hazardInfo.lecL}}</p>
                          </div>
                          <div class="flex" style="width: 100%;">
                            <span class="area-row-item">危险环境的频率（E）：</span>
                            <p>{{hazardInfo.lecE}}</p>
                          </div>
                          <div class="flex" style="width: 100%;">
                            <span class="area-row-item">危险严重程度（C）：</span>
                            <p>{{hazardInfo.lecC}}</p>
                          </div>
                        </div>
                        <div class="area-content" v-if="hazardInfo.identifyTypeId === '2'">
                          <div class="flex" style="width: 100%;">
                            <span class="area-row-item">控制措施的状态（M）：</span>
                            <p>{{hazardInfo.mesM}}</p>
                          </div>
                          <div class="flex" style="width: 100%;">
                            <span class="area-row-item">暴露的频繁程度（E）：</span>
                            <p>{{hazardInfo.mesE}}</p>
                          </div>
                          <div class="flex" style="width: 100%;">
                            <span class="area-row-item">事故的可能后果（S）：</span>
                            <p>{{hazardInfo.mesS}}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="flex">
                      <span style="margin-right: 10px;">危险因素：</span>
                      <nz-table #matterTab
                                [nzData]="hazardInfo.matterList" [nzShowPagination]="false" [nzFrontPagination]="false"
                                [nzBordered]="true"
                                [ngStyle]="{'width':'100%'}"
                      >
                        <thead>
                        <tr>
                          <th [width]="60">序号</th>
                          <th>物质类别</th>
                          <th>物质名称</th>
                          <th>最大数量（吨）</th>
                          <th>临界量（吨）</th>
                          <th>辨识指标AQR</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr *ngFor="let data of matterTab.data;let i = index;">
                          <td>{{i+1}}</td>
                          <td>{{data.matterType}}</td>
                          <td>{{data.matterName}}</td>
                          <td>{{data.maxValue}}</td>
                          <td>{{data.criticalValue}}</td>
                          <td>{{data.indexs}}</td>
                        </tr>
                        </tbody>
                      </nz-table>
                    </div>

                    <div class="flex comm-row">
                      <div class="flex">
                        <span>危险源识别：</span>
                        <p>{{hazardInfo.isGreatHazard}}</p>
                      </div>
                      <div class="flex">
                        <!-- <span>视频监控：</span> -->
                        <!-- <p>{{hazardInfo.eduBackground}}</p> -->
                      </div>
                    </div>

                    <div class="flex comm-row">
                      <div class="flex">
                        <span>评估单位：</span>
                        <p>{{hazardInfo.assessUnit}}</p>
                      </div>
                    </div>

                    <div class="flex comm-row">
                      <div class="flex" style="width: 100%;">
                        <span>原因说明：</span>
                        <div class="area-content" style="height: 120px;">{{hazardInfo.causeExplain}}</div>
                      </div>
                    </div>

                    <div class="flex comm-row">
                      <div class="flex ">
                        <span>预案类型：</span>
                        <p>{{hazardInfo.planType}}</p>
                      </div>
                      <div class="flex">
                        <span>预案级别：</span>
                        <p>{{hazardInfo.planLevel}}</p>
                      </div>
                    </div>

                    <div class="flex comm-row">
                      <div class="flex ">
                        <span>发布单位：</span>
                        <p>{{hazardInfo.issueUnit}}</p>
                      </div>
                      <div class="flex">
                        <span>发布时间：</span>
                        <p>{{hazardInfo.issueTime}}</p>
                      </div>
                    </div>

                    <div class="flex comm-row">
                      <div class="flex">
                        <span>是否备案：</span>
                        <p>{{hazardInfo.isRecords}}</p>
                      </div>
                      <div class="flex">
                        <span>备案机关：</span>
                        <p>{{hazardInfo.recordsUnit}}</p>
                      </div>
                    </div>

                    <div class="flex comm-row">
                      <div class="flex">
                        <span>备案时间：</span>
                        <p>{{hazardInfo.recordsTime}}</p>
                      </div>
                    </div>

                    <div class="flex comm-row">
                      <div class="flex" style="width: 100%;">
                        <span nzRequired>危险源图像：</span>
                        <app-img-upload [imgLists]="imgsList" [isShow]="false"></app-img-upload>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="trainView" style="display: none;padding-top:0" id="tab2">
            <app-emergency-plan-view [id]="planId"></app-emergency-plan-view>
          </div>
          <div class="trainView" style="display: none;padding-top:0" id="tab3">
            暂未开发
          </div>
        </div>
      </div>
    </div>
  </nz-modal>




</template>

<script>
    export default {
        name: "hazardNormalDetailView",
      data(){
          return{
            hazardInfo:{},
            imgsList : []
          }
      },
      /*@Output()
      output=new EventEmitter();*/
      props:[visible,planId,hazardId],

      updated(){
        if(this.hazardId){
          this.getHazardInfo();
        }
      },
      methods:{

        //切换tab
        toggleTab(target, id) {
          $(target).addClass('active').siblings().removeClass('active');
          $(id).show().siblings().hide();
        },
        //查看危险源详情
        getHazardInfo() {
          let params = {
            hazardId: this.hazardId,
            isGreatHazard: '0'
          };
          this.hazardNormalService.post('hazard/getHazardInfoById', params).subscribe((res: Response) => {
            let data = JSON.parse(JSON.stringify(res));
            console.log(data);
            if (data.code == 0) {
              this.hazardInfo = data.data;
              if (this.hazardInfo['matterList'] == null) {
                this.hazardInfo['matterList'] = [];
              }
              this.hazardInfo['issueTime'].substr(0, 11);
              this.hazardInfo['recordsTime'].substr(0, 11);
              this.imgsList = getInfoImgList(data.data.imageId, data.data.imageId);
            }
          })
        },
        //关闭摸态框
        close(){
          this.visible = false;
          this.output.emit()
        }
      }
    }
</script>

<style scoped lang="scss">
@import "../../../../assets/css/common";
  .alarm-container {
    font-size: 16px;
    color: #333;
    padding-top: 10px;
    margin-top: -25px;
    .tab {
      height: 60px;
      padding: 0 20px;
      position: relative;
      li.tabItem {
        float: left;
        text-decoration: none;
        line-height: 58px;
        font-size: 16px;
        padding: 0px 20px;
        color: #666666;
        cursor: pointer;
      }
      li.active {
        border-bottom: 2px solid $color;
        color: $color;
      }
    }
  }
  .trainView{
    //padding: 20px 90px 20px 20px;
    font-size: 16px;
    color: #333;
    .comm-row{
      div{
        width: 50%;
      }
    }
    span{
      display: inline-block;
      width: 180px;
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
      //width: 90%!important;
      //height: 120px;
      padding: 5px 6px;
      color: #666;
      border: 1px solid #ccc;
      margin: 10px 0;
    }

  }
  tr td{
    padding:0 10px!important;
  }
  ::ng-deep{
    .ant-checkbox-disabled + span {
      color: #666!important;
    }
    .ant-checkbox-group .ant-checkbox-wrapper {
      min-width: 12% !important;
    }
  }
  .hazardView{
    padding: 20px 20px 20px 25px;
    font-size: 16px;
    color: #333;
    .viewCommon{
      margin-bottom: 15px;
      // .tagBg{
      //   width: 100%;
      //   background: url(../../../../../assets/images/page/enterprise/u22.png) repeat-x bottom;
      //   height: 38px;
      //   background-size: contain;
      //   .tag{
      //     width: 176px;
      //     //@include radius($radius:10px);
      //     border-top-left-radius: 10px;
      //     border-top-right-radius: 10px;
      //     @include themeBg;
      //     color: #fff;
      //     text-align: center;
      //     line-height: 36px;
      //   }
      // }
      .comm-container{
        // border: 1px solid #ccc;
        // border-top: 0;
        padding: 10px 100px 10px 25px;
        margin-top: -2px;
        .comm-row{
          div{
            width: 50%;
          }
        }
        span{
          display: inline-block;
          width: 120px;
          height: 40px;
          line-height: 40px;
          text-align: right;
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
          width: 90%!important;
          padding: 12px 6px;
          color: #666;
          border: 1px solid #ccc;
          margin: 10px 0;
        }
        .area-row-item {
          width: 230px
        }
      }
    }

    .btnSubmit {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      text-align: center;
      background: #fff;
      padding: 15px 0;
      button{
        @include radius($radius:3px);
        margin: 0 15px;
        font-size: 16px;
        width: 120px;
        height: 40px;
        line-height: 40px;
      }
      .submit {
        @include themeBg;
        color: white;
      }
      .noRemon{
        color: white;
        background: $orange;
      }
      .cancels {
        color: $color;
        background: #fff;
        border: 1px solid #ccc;
      }
    }
    .hazardViewBottom {
      margin-bottom: 70px;
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
  //擅长工作类型
  :host ::ng-deep {
    .ant-checkbox-disabled + span{
      font-size: 16px;
      color: #333;
    }
    .ant-checkbox-group{
      width: 100%;
    }
  }
</style>

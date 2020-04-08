<template>
    <div>
      <div class="hazList">
        <div class="list-top">
          <div class="list-select">
            <ng-container>
              <label class="pr8" for="hazardLv">危险级别</label>
              <nz-select id="hazardLv" style="width: 180px;" [(ngModel)]="hazLv" nzAllowClear="false"  (ngModelChange)="getOptionsList()">
                <nz-option nzValue="" nzLabel="全部"></nz-option>
                <nz-option v-for=" item in hazardLevelList" nzValue="{{item.dictionaryCode}}" nzLabel="{{item.dictionaryName}}"></nz-option>
              </nz-select>
              <!-- <label class="pr8" style="margin-left: 18px" for="vedioSurveillance">视频监控</label>
              <nz-select id="vedioSurveillance" style="width: 180px;" [ngModel]="vedioSur">
                <nz-option nzValue="" nzLabel="全部"></nz-option>
                <nz-option v-for=" item in vedioSurveillanceList" nzValue="{{item.dictionaryId}}" nzLabel="{{item.dictionaryName}}"></nz-option>
              </nz-select> -->
              <label class="pr8" style="margin-left: 18px" for="recordStatus">备案状态</label>
              <nz-select id="recordStatus" style="width: 180px;" [(ngModel)]="recordSta"  (ngModelChange)="getOptionsList()">
                <nz-option nzValue="" nzLabel="全部"></nz-option>
                <nz-option v-for=" item in recordStatusList" nzValue="{{item.dictionaryId}}" nzLabel="{{item.dictionaryName}}"></nz-option>
              </nz-select>
            </ng-container>
          </div>
          <div class="search">
            <input type="text" class="hazName" placeholder="请输入危险源名称查询" [(ngModel)]="hazName"/>
            <button class="seachBtn" @click="getHazardList()"><img src="assets/images/page/enterprise/u15.png"/></button>
          </div>
        </div>
        <div class="newsTab">
          <nz-table #hazardTab
                    [nzData]="dataSet" [nzShowPagination]="true" [nzFrontPagination]="false" [nzTotal]="total"
                    [(nzPageIndex)]="pageIndex" [nzLoading]="loadings"
                    [nzShowQuickJumper]="true" [nzPageSize]="10" [nzBordered]="true"
                    (nzPageIndexChange)="getHazardList()"
          >
            <thead>
            <tr>
              <th>序号</th>
              <th>重大危险源名称</th>
              <th>所在区域</th>
              <th>危险级别</th>
              <th>评估单位</th>
              <th>应急预案</th>
              <th>视频监控</th>
              <th>备案状态</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let data of hazardTab.data;let i = index;">
              <td>{{i+1+(pageIndex-1)*10}}</td>
              <td>{{data.hazardName}}</td>
              <td>{{data.belongrRegion}}</td>
              <td>{{data.hazardRank}}</td>
              <td>{{data.assessUnit}}</td>
              <td class="blue point" @click="checkPlan(data.planId)">查看</td>
              <td>查看</td>
              <td [class.orange]="data.isRecords=='未备案'">{{data.isRecords}}</td>
              <td>
                <span class="blue point" @click="checkDetail(data.hazardId,data.planId)">查看</span>
              </td>
            </tr>
            </tbody>
          </nz-table>
        </div>
      </div>
      <!--操作查看-->
      <app-hazard-normal-detail-view [visible]="visible" [hazardId]="hazardId" [planId]="planId" (output)="visible=false"></app-hazard-normal-detail-view>
      <!--应急预案查看-->
      <app-emergency-plan-model-view [visible]="visible1" [planId]="planId" (output)="visible1=false"></app-emergency-plan-model-view>

    </div>
</template>

<script>
    export default {
        name: "hazardNormalView",
      data(){
          return{
            hazLv : '', // 危险级别
        hazardLevelList : [],
        // vedioSur : '', // 视频监控
        // vedioSurveillanceList : [],
        recordSta: '', //备案状态
        recordStatusList : [],
        hazName : '',

        // /* table参数设定 */
        total : 1,
        pageIndex : 1,
        dataSet : [],
        indeterminate : false,
        loadings : false,
        // /* table参数设定完成 */

        regionList : [],

        regionId : '', //区域ID

        visible:false,
        hazardId,
        planId:'bba4febe79d1490ebd2dba06cd0258c0',
        visible1:false
          }
      },

      /*constructor(
        private router: Router,
      private hazardNormalService: HazardNormalService,
    ) { }*/
      methods:{
        ngOnInit() {
          // this.vedioSurveillanceList = [
          //   { dictionaryId: 1, dictionaryName: '化学性' },
          //   { dictionaryId: 2, dictionaryName: '物理性' },
          //   { dictionaryId: 3, dictionaryName: '心理性' },
          //   { dictionaryId: 4, dictionaryName: '生物性' },
          //   { dictionaryId: 5, dictionaryName: '行为性' }
          // ];
          this.hazardLevelList = getStorageData('dicStr').rankCode;
          this.recordStatusList = [
            { dictionaryId: 0, dictionaryName: '未备案' },
            { dictionaryId: 1, dictionaryName: '已备案' },
          ];
          this.getHazardList();
        },
        getOptionsList(){
          this.pageIndex=1;
          this.getHazardList();
        },
        //获取table列表
        getHazardList() {
          this.loadings = true;
          let params = {
            textSearch: this.hazName,
            regionId: this.regionId,
            rankCode: this.hazLv,
            isRecords: this.recordSta,
            isGreat: '0',
            pageNum: this.pageIndex - 1,
            pageSize: 10,
            loginType: getUserInfo().loginType,
          };
          this.hazardNormalService.post('hazard/getHazardList', params).subscribe((res: Response) => {
            let data = JSON.parse(JSON.stringify(res));
            console.log(data);
            this.dataSet = [];
            this.total = 0;
            if (data.code == 0) {
              this.loadings = false;
              this.dataSet = data.data.rows;
              this.total = data.data.total;
            }
          })
        },
        //操作详情
        checkDetail(id1,id2){
          this.visible=true;
          this.hazardId=id1;
          this.planId=id2;
        },
        //预案详情
        checkPlan(id){
          this.visible1=true;
          this.planId=id;
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../../../assets/css/common";
  .pr8 {
    padding-right: 8px;
  }
  .hazList {
    padding: 20px 30px;
    background: #fff;
    font-size: 16px;
    color: #333;
    .list-top{
      @extend .flex;
      width: 100%;
      justify-content: space-between;
      .list-select{
        @extend .flex;
        align-items: center;
      }
    }
    .search {
      float: right;
      @extend .flex;
      .hazName{
        width: 270px;
        height: 40px;
        border: 1px solid #ccc;
        padding: 1px 0px;
        outline: none;
      }
      .seachBtn{
        @include themeBg;
        width: 80px;
        height: 40px;
        text-align: center;
        border: none;
        outline: none;
        border-radius: 5px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
      }
    }
    .oper-btn {
      margin: 20px 0;
      width: 100%;
      button{
        @include radius($radius:3px);
        display: inline-block;
        color: #fff;
        width: 100px;
        height: 40px;
        border: none;
        outline: none;
        margin-right: 10px;
        font-size: 16px;
      }
    }
    .orgBtn{
      width: 70px;
      height: 30px;
      background: rgba(255, 153, 51, 1);
      border: none;
      @include radius($radius: 3px);
      outline: none;
      color: #fff;
      font-size: 16px;
    }

  }


  .newsTab{
    margin-top: 15px;
    box-sizing: border-box;
  }
  .newTabCon{
    width: 100%;
    border: 1px solid rgba(204, 204, 204, 1);
  }
  .newTabCon tr th{
    height: 40px;
    font-size: 16px;
    color: #FFFFFF;
    font-weight: 400;
    font-style: normal;
    text-align: center;
    line-height: normal;
    background: #158CCB;
    border-right: 1px solid rgba(204, 204, 204, 1);
    border-bottom: 1px solid rgba(204, 204, 204, 1);
  }
  .newTabCon tr td{
    height: 40px;
    font-size: 16px;
    color: #333333;
    text-align: center;
    line-height: normal;
    border-right: 1px solid rgba(204, 204, 204, 1);
    border-bottom: 1px solid rgba(204, 204, 204, 1);
    word-wrap: break-word;
    padding: 0 10px;
  }
  .borderCheck{
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border: 1px solid rgba(204, 204, 204, 1);
    border-radius: 0px;
    margin-top: 5px;
  }
  .borderCheck ::after{
    content: '';
    display: block;
    overflow: hidden;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .trBorder{
    background: #158CCB;
    border: 1px solid rgba(255, 255, 255, 1);
  }
  .addTrue{
    background: url("../../../../assets/images/u317.png") no-repeat center;
  }
  .trAddTrue{
    background: url("../../../../assets/images/u323.png") no-repeat center;
  }

</style>

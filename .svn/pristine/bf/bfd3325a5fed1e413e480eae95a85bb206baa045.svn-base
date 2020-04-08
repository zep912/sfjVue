<template>
    <div>
      <div class="main">
        <ng-container>
          <label class="labelTitle" for="storageType">储罐类型</label>
          <nz-select id="storageType" style="width: 200px;" [(ngModel)]="storageType" (ngModelChange)="getOptionsList()"
                     nzAllowClear="false">
            <nz-option nzValue="" nzLabel="全部"></nz-option>
            <nz-option *ngFor="let item of storageTypeList" [nzValue]="item.dictionaryId" [nzLabel]="item.dictionaryName"></nz-option>
          </nz-select>
          <div class="search">
            <input type="text" class="search-input" placeholder="请输入储存品种查询" [(ngModel)]="chemicalName" (ngModelChange)="pageIndex=1"/>
            <button class="seachBtn" @click="getDataList()"><img src="assets/images/page/enterprise/u15.png" /></button>
          </div>
        </ng-container>
        <nz-table #dataTab [nzData]="dataSet" [nzShowPagination]="true" [nzFrontPagination]="false" [nzTotal]="total"
                  [(nzPageIndex)]="pageIndex" [nzLoading]="loadings" [nzShowQuickJumper]="true" [nzPageSize]="10" [nzBordered]="true"
                  (nzPageIndexChange)="getDataList()" >
          <thead>
          <tr>
            <th>序号</th>
            <th>储存品种</th>
            <th>储罐类型</th>
            <th>罐体数量</th>
            <th>单罐容积（m³）</th>
            <th>最大储量（吨）</th>
            <th>现有储量（吨）</th>
            <th>投入使用时间</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr *ngFor="let data of dataTab.data;let i = index;">
            <td>{{i+1+(pageIndex-1)*10}}</td>
            <td>{{data.chemicalName}}</td>
            <td>{{data.storageTypeName}}</td>
            <td>3</td>
            <td>{{data.singleVolume}}</td>
            <td>{{data.maximumStock}}</td>
            <td>{{data.existStock}}</td>
            <td>{{data.inputTime}}</td>
            <td>
              <span @click="itemDetail(data.id)" class="blue point">查看</span>
            </td>
          </tr>
          </tbody>
        </nz-table>
      </div>
      <!-- 查看 -->
      <app-produce-base-chemical-tankarea-preview [(isVisible)]="preIsVisible" [detailId]="preId"></app-produce-base-chemical-tankarea-preview>



    </div>
</template>

<script>
    export default {
        name: "produceBaseChemicalTankareaView",
      data(){
          return{
            // 储罐类型
            storageType : '',
            storageTypeList : [],

            // 搜索标题
            chemicalName : '',

            // 查看id
            preId : '',
            detailId : '',
            preIsVisible : false,

            // table参数设定
            total : 1,
            pageIndex : 1,
            dataSet : [],
            indeterminate : false,
            loadings : false
          }
      },
      props:[id],
      methods:{
        ngOnInit() {
          this.storageTypeList = getStorageData('dicStr').storageType;
          this.getDataList();
        },
        //条件查询
        getOptionsList(){
          this.pageIndex=1;
          this.getDataList();
        },
        //查询列表
        getDataList() {
          const params: Object = {
            enterpriseId: this.id,
            storageType: this.storageType,
            chemicalName: this.chemicalName,
            pageNum: this.pageIndex - 1,
            pageSize: 10
          };
          this.produceService.post('chemicalTankarea/getChemicalTankareaList', params).subscribe(res => {
            let data = JSON.parse(JSON.stringify(res));
            console.log(data);
            this.dataSet = [];
            this.total = data.data.resultList.total;
            if (data.code == 0) {
              this.loadings = false;
              // this.sendMessage(data.data.pointMap);
              this.dataSet = data.data.resultList;
              this.total = data.data.total;
            }
          });
        },
        //查看详情
        itemDetail(preId) {
          this.preId = preId;
          this.preIsVisible = true;
        }
      }
    }
</script>

<style scoped lang="scss">
@import "../../../../assets/css/common";
.main {
  padding: 20px;
  background: #fff;
  .list-top{
    @extend .flex;
    width: 100%;
    justify-content: space-between;
    .list-select{
      @extend .flex;
      align-items: center;
    }
  }

  .labelTitle {
    padding-right: 10px;
  }
  .search {
    float: right;
    @extend .flex;
    margin-bottom: 20px;
    .search-input {
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
  .red {
    color: $red;
  }
}

.btnGroup {
  padding: 20px 0px;
  .add,
  .del {
    width: 100px;
    height: 40px;
    color: white;
    outline: none;
    border: none;
    border-radius: 4px;
    margin-left: 10px;
    font-size: 16px;
  }
  .del {
    background: $red;
  }
  .add {
    background: $green;
  }
}

:host ::ng-deep {
  .ant-btn-primary {
    @include themeBg;
  }
}

</style>

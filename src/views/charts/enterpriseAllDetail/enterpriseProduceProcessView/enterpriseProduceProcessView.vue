<template>
  <div>
  <div class="main">
    <div class="flex" style="justify-content: space-between;align-items: center;margin-bottom: 20px">
      <ng-container>
        <div>
          <label class="labelTitle" for="proClassify">工艺分类</label>
          <nz-select id="proClassify" style="width: 200px;" [(ngModel)]="proClassify" [nzAllowClear]="false" nzPlaceHolder="Choose" (ngModelChange)="getOptionsList()">
            <nz-option nzValue="全部" nzLabel="全部"></nz-option>
            <nz-option v-for=" item in artTypeList" nzValue="{{item.dictionaryCode}}" nzLabel="{{item.dictionaryName}}"></nz-option>
          </nz-select>
        </div>
      </ng-container>
      <div class="search">
        <nz-input-group nzSearch [nzSuffix]="suffixIconButton">
          <input v-model="searchArtName" type="text" nz-input placeholder="请输入生产工艺名称查询" v-modelChange="pageIndex=1">
        </nz-input-group>
        <ng-template #suffixIconButton>
          <button nz-button nzType="primary" @click="getProduceArtList()" nzSearch>
            <i class="anticon anticon-search"></i>
          </button>
        </ng-template>
      </div>
    </div>
    <nz-table #rowSelectionTable
              [nzShowPagination]="true"
              [nzData]="dataSet"
              [nzFrontPagination]="false"
              [nzTotal]="total"
              [(nzPageIndex)]="pageIndex"
              [nzShowQuickJumper]="true"
              [nzPageSize]="10"
              [nzBordered]="true"
              (nzPageIndexChange)="getProduceArtList()"
    >

      <thead>
      <tr>
        <th [nzWidth]="100">序号</th>
        <th>生产工艺名称</th>
        <th>生产工艺分类</th>
        <th>生产工艺环节</th>
        <th>主要危险部位和环节</th>
        <th>重大重点工艺</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let data of rowSelectionTable.data;let i = index;">
        <td>{{ i+1+(pageIndex-1)*10}}</td>
        <td>{{data.artName}}</td>
        <td>{{data.artType}}</td>
        <td>
        <span class="blue point" @click="getIinkInfoList(data.artId)">
          {{data.linkInfo || ''}}
        </span>
        </td>
        <td>{{data.harmLink || ''}}</td>
        <td>{{data.keyPoint || ''}}</td>
        <td>
          <span class="blue point" @click="detail(data.artId)">查看</span>
        </td>
      </tr>
      </tbody>
    </nz-table>
  </div>
  <!--生产工艺环节-->
  <nz-modal [nzWidth]="700" [nzFooter]="null" [(nzVisible)]="isVisible" nzTitle="生产工艺环节" (nzOnCancel)="handleCancelModel()">
    <div style="padding:20px 15px 10px">
      <nz-table
        #rowTable [nzData]="dataModelSet"
        [nzShowPagination]="true"
        [nzFrontPagination]="false"
        [nzTotal]="modelTotal"
        ([nzPageIndex])="pageModelIndex"
        [nzShowQuickJumper]="true"
        [nzPageSize]="10"
        [nzBordered]="true"
        [nzLoading] = "loading">
        <thead>
        <tr>
          <th>环节编号</th>
          <th>环节名称</th>
          <th>部位</th>
          <th style="width: 200px;">作业内容</th>
          <th>重大重点环节</th>
          <th>危险环节</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let data of rowTable.data;let i = index;">
          <td>{{data.linkNo}}</td>
          <td>{{data.linkName}}</td>
          <td>{{data.location}}</td>
          <td>{{data.linkContent}}</td>
          <td>{{data.keyPointLink}}</td>
          <td>{{data.harmLink}}</td>
        </tr>
        </tbody>
      </nz-table>
    </div>
  </nz-modal>
  <!--操作查看-->
  <nz-modal [nzWidth]="1000" [nzFooter]="null" [(nzVisible)]="isVisible1" nzTitle="" (nzOnCancel)="isVisible1=false">
    <div class="content">
      <div class="flex comm-row">
        <div class="flex">
          <span>生产工艺名称：</span>
          <p>{{artName}}</p>
        </div>
        <div class="flex">
          <span>生产工艺分类：</span>
          <p>{{artType}}</p>
        </div>
      </div>

      <div class="flex comm-row">
        <div class="flex" style="width: 100%;">
          <span nzRequired>工艺流程图：</span>
          <app-img-upload [imgLists]="artFlowImgList" [isShow]="false"></app-img-upload>
        </div>
      </div>

      <div class="flex">
        <span>生产工艺环节：</span>
        <nz-table #basicTable [nzData]="dataSet1" [nzShowPagination]="false" [nzBordered]="true" [ngStyle]="{'width':'100%'}">
          <thead>
          <tr>
            <th>环节编号</th>
            <th>环节名称</th>
            <th>部位</th>
            <th style="width: 300px;">作业内容</th>
            <th>重大重点环节</th>
            <th>危险环节</th>
          </tr>
          </thead>
          <tbody>
          <tr *ngFor="let data of dataSet1">
            <td>{{data.linkNo}}</td>
            <td>{{data.linkName}}</td>
            <td>{{data.location}}</td>
            <td>
              {{data.linkContent}}
            </td>
            <td>
              {{data.keyPointLink ? data.keyPointLink == '0' ? '是':'否':null}}
            </td>
            <td>{{data.harmLink ? data.harmLink == '0' ? '是':'否':null}}</td>
          </tr>
          </tbody>
        </nz-table>
      </div>
    </div>
  </nz-modal>
  </div>
</template>

<script>
    export default {
        name: "enterpriseProduceProcessView",
      data(){
          return{
        proClassify: '全部',
        dataSet : [],
        pageIndex : 1,
        total : 1,
        searchArtName : '',
        allChecked : false,
        indeterminate : false,
        artTypeList : [],

        title : '工艺分类',


        isVisible : false,
        dataModelSet : [],
        pageModelIndex : 1,
        modelTotal : 1,
        loading : false,
        artId : '',
        //详情
        isVisible1:false,
        artName : "",
        artType : "",
        dataSet1 : [],
        artFlowImgList : []
          }
      },

      props:[id],
     /* constructor(
        private router: Router,
      private enterpriseProduceMainService: EnterpriseProduceMainService,
    ) { }*/
      methods:{
        ngOnInit() {
          this.getDictionaryList();
          // alert(this.id);
          this.getProduceArtList();
        },
        //查看工艺
        detail(id) {
          this.isVisible1=true;
          this.getProduceArtById(id);
        },
        //条件查询
        getOptionsList(){
          this.pageIndex=1;
          this.getProduceArtList();
        },
        //获取工艺列表
        getProduceArtList() {
          let params = {
            pageNum: this.pageIndex - 1,
            pageSize: 10,
            tokenId: '111',
            tokenName: '刘一',
            // artType:this.proClassify,
            // searchArtName:this.searchArtName,
          };
          this.enterpriseProduceMainService.post('produceArt/getProduceArtList', params).subscribe((res: Response) => {
            let data = JSON.parse(JSON.stringify(res));
            console.log(data);
            this.dataSet = [];
            this.total = 0;
            if (data.code == 0) {
              this.dataSet = data.data.rows;
              this.total = data.data.total;
              console.log(this.total);
            }
          })
        },
        //查看环节列表
        getIinkInfoList(artId) {
          this.artId = artId;
          this.isVisible = true;
          this.loading = true;
          let params = {
            pageNum: this.pageModelIndex - 1,
            pageSize: 10,
            artId: this.artId
          };
          this.enterpriseProduceMainService.post('produceArt/getLinkByArtId', params).subscribe((res: Response) => {
            let data = JSON.parse(JSON.stringify(res));
            this.dataModelSet = [];
            this.modelTotal = 0;
            if (data.code == 0) {
              this.dataModelSet = data.data.rows;
              this.modelTotal = data.data.total;
              this.loading = false;
            }
          })

        },
        //获取数据字典数据
        getDictionaryList() {
          this.artTypeList = getStorageData('dicStr').artType;
        },
        //模态框关闭
        handleCancelModel() {
          this.isVisible = false;
        },
        // 获取详情
        getProduceArtById(id){
          this.enterpriseProduceMainService.post('produceArt/getProduceArtById', { artId: id }).subscribe(res => {
            let data = JSON.parse(JSON.stringify(res));
            console.log(data);
            if (data.code == '0') {
              this.artName = data.data.artName;
              this.artType = data.data.artType;
              this.dataSet1 = data.data.linkList;
              this.artFlowImgList = getInfoImgList(data.data.artFlowImgId, data.data.artFlowImg);
            }
          })
        }
      }
    }
</script>

<style scoped lang="scss">
@import "../../../../../assets/css/common";
.main{
  padding: 20px;
  background: #fff;
  font-size: 16px;
  .labelTitle{
    padding-right: 10px;
  }
  .search{
    float: right;
    width: 300px;
  }
  .btnGroup{
    padding: 20px 0px;
    .add,
    .del{
      width: 100px;
      height: 40px;
      color: white;
      outline: none;
      border: none;
      border-radius: 4px;
      margin-left: 10px;
      font-size: 16px;
    }
    .del{
      background: $green;
    }
    .add{
      background:$red;
    }
  }
}
:host ::ng-deep{
  .ant-btn-primary{
    @include themeBg;
  }
  .ant-input-search > .ant-input-suffix > .ant-input-search-button > .anticon-search{
    font-size: 24px;
  }
  .ant-modal-body{
    padding: 24px;
  }
}


.content{
  padding: 40px;
  font-size: 16px;
  color: #333;
  .comm-row{
    div{
      width: 50%;
    }
  }
  span{
    display: inline-block;
    width: 150px;
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
  .addProProcess{
    width: 100%;
    outline: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #ffffff;
    border: 1px solid #e8e8e8;
    color: $color;
    height: 40px;
    i{
      padding-right: 20px;
    }
  }
  .btnGroup{
    text-align: center;
    margin-top: 200px;
  }
  .cancel,
  .submit{
    width: 120px;
    height: 40px;
  }
  .submit{
    @include themeBg;
  }
  .cancel{
    color: $color;
    border: 1px solid #d9d9d9;
  }
  .del{
    color: $red;
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"]{
  -moz-appearance: textfield;
}

:host ::ng-deep {
  .ant-table-placeholder{
    border-left: 1px solid #e8e8e8;
    border-right: 1px solid #e8e8e8;
    border-bottom: none;
  }
  .ant-col-sm-3{
    padding-right: 4px !important;
  }
}

</style>

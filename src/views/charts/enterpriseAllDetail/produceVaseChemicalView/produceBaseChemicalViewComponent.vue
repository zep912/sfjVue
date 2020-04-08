<template>
    <div>
      <div class="main">
        <!-- 企业岗头部 -->
        <el-container>
          <label class="labelTitle" for="majorDanger">危化品类型</label>
          <el-select id="majorDanger" style="width: 200px;" v-model="chemicalType" v-modelChange="getOptionsList()"
                     AllowClear="false">
            <el-option Value="" Label="全部"></el-option>
            <el-option v-for="law in chemicalTypeList" Value="law.dictionaryId" Label="law.dictionaryName"></el-option>
          </el-select>
          <div class="search">
            <input type="text" class="search-input" placeholder="请输入危化品名称查询" v-model="chemicalName" v-modelChange="pageIndex=1"/>
            <button class="seachBtn" @click="getSystemList()"><img src="assets/images/page/enterprise/u15.pel" /></button>
          </div>
        </el-container>
        <el-table #systemTab Data="dataSet" ShowPagination="true" FrontPagination="false" Total="total"
                  PageIndex="pageIndex" Loading="loadings" ShowQuickJumper="true" PageSize="10" Bordered="true"
                  PageIndexChange="getSystemList()" >
          <thead>
          <tr>
            <th>序号</th>
            <th>名称</th>
            <th>类型</th>
            <th>危害</th>
            <th>年产量（吨）</th>
            <th>年使用量（吨）</th>
            <th>最大存量（吨）</th>
            <th>现有储量（吨）</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="data in systemTab.data;" :key = "index;">
            <td>{{i+1+(pageIndex-1)*10}}</td>
            <td>{{data.chemicalName}}</td>
            <td>{{data.chemicalTypeName}}</td>
            <td>{{data.physicalBehavior}}</td>
            <td>{{data.annualOutput}}</td>
            <td>{{data.annualUsage}}</td>
            <td>{{data.maximumStock}}</td>
            <td>{{data.existStock}}</td>
            <td>
              <span class="blue point" @click="checkDetail(data.id)">查看</span>
            </td>
          </tr>
          </tbody>
        </el-table>
      </div>
      <!--危化品信息-->
      <app-hazardous-chemical-detail [visible]="visible" [id]="chemicalId" (output)="visible=false"></app-hazardous-chemical-detail>

    </div>
</template>

<script>

    export default {
        name: "produceBaseChemicalViewComponent",
      data(){
          return{
            // 危化品类型
            chemicalType : '',
            chemicalTypeList : [],
            // 搜索标题
            chemicalName : '',
            // table参数设定
            total : 1,
            pageIndex : 1,
            dataSet : [],
            indeterminate : false,
            loadings : false,

            visible:false,
            chemicalId:""
          }
      },
      props:[id],
      created() {
        this.chemicalTypeList = getStorageData('dicStr').chemicalType;
      },
      updated(){
        if(this.id){
          this.getSystemList();
        }
      },
      methods:{
        //条件查询
        getOptionsList(){
          this.pageIndex=1;
          this.getSystemList();
        },
        // 查询列表
        getSystemList() {
          const params: Object = {
            enterpriseId: this.id,
            chemicalType: this.chemicalType,
            industry: '',
            title: this.chemicalName,
            pageNum: this.pageIndex - 1,
            pageSize: 10
          };
          this.produceService.post('chemicalInfo/getChemicalInfoList', params).subscribe(res => {
            let data = JSON.parse(JSON.stringify(res));
            console.log(data);
            this.dataSet = [];
            this.total = data.data.resultList.total;
            if (data.code == 0) {
              this.loadings = false;
              this.dataSet = data.data.resultList;
              this.total = data.data.total;
            }
          });
        },
        //查看危险化学品详情
        checkDetail(id) {
          this.visible=true;
          this.chemicalId=id;
        }

      }
    }
</script>

<style scoped lang="scss">
@import "../../../../assets/css/common";
.main {
  padding: 20px;
  background: #fff;
  .labelTitle {
    padding-right: 10px;
  }
  .list-top {
    @extend .flex;
    width: 100%;
    justify-content: space-between;
    .list-select {
      @extend .flex;
      align-items: center;
    }
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
    .seachBtn {
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

<template>
  <v-modal [nzWidth]="520" [nzMask]="true" [nzMaskClosable]="false" [(nzVisible)]="isVisible" nzTitle="危险化学品罐区信息"
            [nzFooter]="null" (nzOnCancel)="handleCancel()">
    <div class="costContent" style="min-height: 500px">
      <div class="perInfo">
        <p>储存品种：<span>{{dataList.chemicalName}}</span></p>
      </div>

      <div class="flex perInfo">
        <p>储罐类型：<span>{{dataList.storageTypeName}}</span></p>
      </div>
      <div class="flex perInfo">
        <p>位置：<span>{{dataList.location}}</span></p>
      </div>

      <div class="flex perInfo">
        <p>单罐容积：<span>{{dataList.singleVolume}}m³</span></p>
      </div>

      <div class="flex perInfo">
        <p>最大储量：<span>{{dataList.maximumStock}}吨</span></p>
      </div>

      <div class="flex perInfo">
        <p>现有储量：<span>{{dataList.existStock}}吨</span></p>
      </div>

      <div class="flex perInfo">
        <p>投入时间：<span>{{dataList.inputTime}}</span></p>
      </div>

      <div class="flex perInfo">
        <p>储罐照片：</p>
        <div class="perImg">
          <app-img-upload [imgLists]="imgList" [isShow]="false"></app-img-upload>
        </div>
      </div>

    </div>

  </v-modal>

</template>

<script>
    export default {
        name: "produceBaseChemicalTankareaPreview",
      data(){
          return{
            roleType : false,
            dataList: {},
            imgList :[]
          }
      },
      updated() {
        if(this.detailId){
          this.getDetail();
        }
      },
      props:[isVisible,detailId],
     // @Output() isVisibleChange = new EventEmitter();   //dialog显示状态改变事件
      methods:{

        handleCancel() {
          this.isVisibleChange.emit(false);
        },
        // 查询详情
        getDetail() {
          if (this.detailId != '') {
            let params = {
              id: this.detailId,
            };
            this.produceService.post('chemicalTankarea/getChemicalTankareaById', params).subscribe((res: Response) => {
              let data = JSON.parse(JSON.stringify(res));
              console.log(data);
              if (data.code == 0) {
                let data = JSON.parse(JSON.stringify(res));
                console.log(data);
                this.dataList = data.data;
                this.imgList = getInfoImgList(data.data.fileId, data.data.img);
              }
            })
          }
        }
      }
    }
</script>

<style scoped lang="scss">
@import "../../../../assets/css/common";
.costContent{
  padding: 25px 40px 70px;
  font-size: 16px;
  color: #333;
  .perInfo{
    width: 100%;
    p{
      //width: 70%;
      height: 40px;
      line-height: 40px;
      padding-right: 10px;
      color: #666;
    }
    span{
      display: inline-block;
      color: #333;
      margin-left: 5px;
    }
    .perImg{
      min-width: 120px;
      width: 120px;
      height: 160px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }

}

::ng-deep{
  .ant-modal-body{
    padding: 0;
  }
}
</style>

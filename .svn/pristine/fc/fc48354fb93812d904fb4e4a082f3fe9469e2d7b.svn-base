<template>
    <div>
      <div class="flex">
        <div class="flex" style="flex-wrap: wrap;float: left;">
          <div class="imgBox" style="margin-bottom: 10px;margin-right: 20px;" v-for="(imgSrc,index) in imgLists;" :key="index;">
            <div class="delBox" @click="delImgData(imgSrc)" v-if="isShow">
              <img src="assets/images/common/modal/u342.png"/>
            </div>
            <img :src="imgSrc.url" style="width: 100%;height: 100%;" @click="showImgModal(imgSrc)"/>
          </div>
          <div class="imgBox" style="margin-bottom: 10px;" v-if="isShow">
            <img src="assets/images/common/modal/u335.png" style="padding: 40px;border: 1px solid #ccc;float: left;" hidden="isShowNum" @click="getImg()"/>
          </div>
        </div>
      </div>

      <input type="file" v-if="isMoreUpload" :id="inputIds" @change="upImgs($event)" multiple="multiple" accept="image/*" hidden="true" />
      <input type="file" v-if="!isMoreUpload" :id="inputIds" @change="upImgs($event)" accept="image/*" hidden="true" />

      <v-modal visible="previewVisible" footer="null" @Cancel="handleCancel()">
        <img :src="previewImage" :Style="{ 'width': '100%' }" />
        <!--<div class="clearfix flexPreSee">-->
        <!--<div class="fo"><img src="assets/images/zuo.png" alt="" class="prePic" @click="preClick()" /></div>-->
        <!--<div class="fo picBox picSwiper" style="background: #fff;">-->
        <!--<ul class="imgList">-->
        <!--<li v-for=" item in imgLists index as i;">-->

        <!--<div style="overflow-y: auto; width: 100%;height: 400px;">-->
        <!--<img [src]="item.imgUrl" width="968" height="1266" >-->
        <!--</div>-->
        <!--</li>-->
        <!--</ul>-->
        <!--</div>-->
        <!--<div class="fo"><img src="assets/images/you.png" alt="" class="nextPic" @click="nextClick()"/></div>-->
        <!--</div>-->
      </v-modal>
    </div>
</template>

<script>
  // import panel from '../../components/common/panel'
    export default {
        name: "imgUploadComponent",
      props:[counts,inputIds,'isMoreUpload',imgLists,isShow],
      data(){
          return{
            fileNum:0,
            isShowNum:false,
            submitIds:'',
            submitUrls:'',
            previewVisible: false,
            previewImage:''
          }
      },

  // @Input() counts: number; // 触发ngOnChanges事件
  // @Input() inputIds: string; // 传入的id
  // @Input() isMoreUpload: boolean = true; // 是否可以多选
  // @Input() imgLists: any = []; // 传入的图片列表
  // @Input() isShow: boolean = true; // 是否是查看页面
  // @Output() sendFormImgId = new EventEmitter(); // 成功发送数据事件
  // @Output() sendFormImgUrl = new EventEmitter(); // 成功发送数据事件
      updated() {
        if(isMoreUpload){
          if(this.imgLists.length>8){
            this.isShowNum = true;
          } else {
            this.isShowNum = false;
          }
        } else {
          if(this.imgLists.length>0){
            this.isShowNum = true;
          } else {
            this.isShowNum = false;
          }
        }

      },
      methods:{
        getImg(){
          document.getElementById(this.inputIds).click();
        },

        /******************************************上传文件**********************************/
        upImgs(event){
          const e = event.target;

          // this.imgShow = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(fileList[i]));
          // const reader = new FileReader();
          // reader.readAsDataURL(fileList[i]);
          // // console.log(3333333);
          // reader.onload = function (e) {
          //   // 向父组件输出图片base64
          //   self.imgUpObj = {fileBase64: this.result, file: fileList[i],imgurl:self.imgShow};
          // };
          const files = e.files;
          const self = this;
          this.fileNum = 0;
          console.log(files);
          const fileList = [];
          const formData = new FormData();
          for (const file of files) {
            if (!/image\/\w+/.test(file.type)) {
              const modal = this.modalService.success({
                nzWidth: '260',
                nzContent: '<img class="modIcon" src="../../../../assets/images/common/modal/suss.png"/><b>请确保文件为图像类型!</b>',
                nzOnOk: () => {
                  modal.destroy();
                  return;
                }
              });
              window.setTimeout(() => modal.destroy(), 5000);
              return false;
            }
            fileList.push(file);
          }
          console.log(fileList);
          if(this.isMoreUpload){
            if(fileList.length > 8){
              this.fileNum = 9;
              this.isShowNum = true;
            } else {
              this.fileNum = fileList.length;
              this.isShowNum = false;
            }
          } else{
            this.fileNum = 1;
            this.isShowNum = true;
          }

          for (let i = 0; i < this.fileNum; i++) {
            formData.append('files', fileList[i]);
          }
          const showList = [];
          $.ajax({
            url: `http://60.18.207.49:9001/jjkj/aj/platform/file/uploadFile`,
            type: 'POST',
            processData: false,
            contentType: false,
            data: formData,
            success: function (data) {
              let obj = {};
              console.log(data);
              // 返回图片链接集合
              // if(data.data.indexOf(',') != -1){
              //
              // }
              const idList = data.data.id.split(',');
              const imgList = data.data.img.split(',');
              self.submitIds = data.data.id;
              self.submitUrls = data.data.img;
              for (let i = 0; i < imgList.length; i++) {
                obj = {
                  uid: idList[i],
                  url: imgList[i],
                };
                showList.push(obj);
              }
              self.imgLists = showList;
              console.log(self.imgLists);
              self.sendFormImgId.emit(self.submitIds);
              self.sendFormImgUrl.emit(self.submitUrls);
              return;
            },
            error: function (data) {
              console.log(data);
            }
          });
        },

        // 删除相应的数据
        delImgData(data){
          //removeItemFromArray(this.imgLists, data);
          //remove(this.imgLists, data);
          this.removeItemFromArray();
          if(this.isMoreUpload){
            if(this.imgLists.length < 9){
              this.isShowNum = false;
            }
          } else {
            this.isShowNum = false;
          }
          let imgIds = '';
          let imgUrls = '';
          this.imgLists.forEach(element => {
            imgIds += element.uid + ',';
            imgUrls += element.url + ',';
          });
          imgIds = imgIds.substr(0, imgIds.length - 1);
          this.sendFormImgId.emit(imgIds);
          this.sendFormImgUrl.emit(imgUrls);
        },

        // 展示图片
        showImgModal(data){
          this.previewVisible = true;
          this.previewImage = data.url;
          // this.imgLen = data.length;
        },

        // 取消
        handleCancel(){
          this.previewVisible = false;
          this.previewImage = '';
        }


        // /********************************************************预览左右切换********************************************************/
        // // 点击向左图标根据cur进行上一个图片处理
        // preClick() {
        //   //   this.picCur = this.picCur > 0 ? (--this.picCur) : (this.imgLen - 1); // 图片流转至最终
        //   this.picCur = this.picCur > 0 ? (--this.picCur) : 0;
        //   this.changeTo( this.picCur );
        //   // });
        // }
        // // 点击向右图标根据cur进行上一个图片处理
        // nextClick() {
        //   // this.picCur = this.picCur < ( this.imgLen - 1 ) ? (++this.picCur) : 0; // 图片流转至最初
        //   this.picCur = this.picCur < ( this.imgLen - 1 ) ? (++this.picCur) : this.imgLen - 1;
        //   this.changeTo( this.picCur );
        // }
        // // 图片切换函数
        // changeTo( num ) {
        //   const go = num * 968;
        //   $('.imgList').animate({ 'left' : -go }, 500);
        //   // $(".dollList").find("li").removeClass("sec").eq(num).addClass("sec");
        // }

      }
    }
</script>

<style scoped lang="scss">
@import "../../../assets/css/common";
.imgBox{
  min-width: 120px;
  max-width: 120px;
  min-height: 120px;
  max-height: 120px;
  position: relative;
  .delBox{
    width: 20px;
    height: 20px;
    background: rgba(255, 96, 96, 1);
    @include radius($radius: 50%);
    position: absolute;
    right: -6px;
    top: -6px;
    img{
      position: absolute;
      left: 4px;
      top: 4px;
    }
  }
  /*::ng-deep{*/
    /*.ant-modal-body{*/
      /*padding: 24px;*/
    /*}*/
  /*}*/
}

</style>

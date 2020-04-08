<template>
  <div style="display:flex;flexDirection:row;alignItems: center;">
    <!-- 上传文件 -->
    <!--<el-form-item class="item_one_style">-->
    <!--<el-input class="input_style"  v-model="fileName" style="width:500px" :disabled=false></el-input>-->
    <!--</el-form-item>-->
    <!--    action="http://192.168.0.133:9001/jjkj/sfj/api/support/uploadFile"-->
    <el-upload
            class="upload-demo"
            action="http://192.168.0.133:9001/jjkj/sfj/api/support/uploadVideoFile"
            accept=".mp4"
            :on-preview="handlePreview" :on-remove="handleRemove" :on-success="handleSuccess" :on-error="handleError"
            :before-remove="beforeRemove" multiple
            :on-exceed="handleExceed" :file-list="fileList" :data="dataFrom"  @change="upImgs($event)"
            name="file"
    >
      <!--:before-upload="beforeUpload"-->
      <!--      <div v-if="show == false">-->
      <!--        <el-input style="width:700px;" v-model="fileName" :disabled="isDisabled"></el-input>-->
      <!--        <el-button type="primary" style="width:100px;font-size:14px;height:40px">浏览</el-button>-->
      <!--      </div>-->

      <!--      <div v-if="show == true">-->
      <!--        <el-input style="width:350px;" v-model="fileName" :disabled="isDisabled"></el-input>-->
      <!--        <el-button type="primary" style="width:100px;font-size:14px;height:40px">上传附件</el-button>-->
      <!--      </div>-->
      <div slot="tip" class="el-upload__tip"></div>
    </el-upload>
    <!--<el-input style="width:700px;" :disabled="isDisabled"></el-input>-->
    <!--<el-button class="el-upload__text">浏览</el-button>-->
  </div>
</template>

<script>
  // import {setSessionData} from "../../util/storage";
  export default {
    name: "shipin-upload",
    props:['getfileList'],
    data() {
//这里存放数据
      return {
        isDisabled:true,//是否可编辑
        fileName:'',
        fileList: [],
        fileNameArr:[],
        fileId:'',                //类型：String  可有字段  备注：附件id
        dataFrom:{
          "token":sessionStorage.getItem("token"),
        },
        imgId:'',
        fileSize:'',
      };
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      console.log("stort:"+ this.stort);
      console.log("cabshy"+this.getfileList);
      // this.show = false;
      // console.log(this.fileList);
    },
    switch:{

    },
    methods: {
      handleRemove(file, fileList) {
        console.log('handleRemove');
        console.log(file, fileList);
        this.fileName = '';
      },
      // beforeUpload(file, fileList){
      // return this.$confirm(`文件大小不超过100M`);
      // },
      handlePreview(file) {
        console.log('handlePreview');
        console.log(file);
      },
      handleExceed(files, fileList) {
        console.log('handleExceed');
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        console.log('beforeRemove');
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handleSuccess(response, file, fileList){
        this.fileList = file.raw;
        console.log(this.fileList);
        console.log('handleSuccess');
        if(res.code == 200){
          console.log(res.content.fileList)
          for(let i=0;i<res.content.fileList.length;i++){
            this.imgId = res.content.fileList[i].fileId
            this.fileSize = res.content.fileList[i].fileSize
          }
        }
        // let res = JSON.parse(JSON.stringify(response));
        // console.log(res);
        // if(res.code == 200){
        //   this.fileList.push(res.data.id);
        //   this.fileNameArr.push(file.name);
        // }
        // // this.ruleForm['fileId'] = this.fileList.toString();
        // this.fileName = this.fileNameArr.toString();
        // sessionStorage.setItem(
        //         "fileName",
        //         this.fileName
        // );
        // // setSessionData('fileName',this.fileName);
        // // console.log(this.ruleForm['fileId']);
        // // console.log(this.fileName);
        //
        // console.log(res.data.id);
        this.$emit('submitInshipinformchild',this.imgId,file.raw.name,this.fileSize);
      },
      handleError(){
        return this.$confirm(`上传失败`);
      }
    }
  }
</script>
<style scoped lang="scss">
  .el-upload-list__item:first-child {
    margin-top: -47px !important;
  }
  .el-upload-dragger {
    background-color: #fff;
    border: none !important;
    width: 0px !important;
    height: 0px !important;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
</style>

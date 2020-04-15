<template>
    <div class="yulanfv">
        <div class="top_manalvs yulantop">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">职责</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/falv_liebiao' }">普法宣传</el-breadcrumb-item>
                <el-breadcrumb-item>法律法规信息预览</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="read-falvfagui">
            <h1>{{lawTitle}}</h1>
            <ul>
              <li>
                <strong>颁布单位：</strong>
                <span>{{enactOrg}}</span>
              </li>
              <li>
                <strong>执行日期：</strong>
                <span>{{execDate}}</span>
              </li>
              <li>
                <strong>颁布日期：</strong>
                <span>{{enactDate}}</span>
              </li>
              <li>
                <strong>效力级别：</strong>
                <span>{{scopeLevel}}</span>
              </li>
              <li>
                <strong>时效性：</strong>
                <span>{{lawTimeliness}}</span>
              </li>
            </ul>
            <div class="iframe-docx">
              <iframe name="iframedocx" :src="docUrl" frameborder="0"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
import {pfxcXjflfgRead, getSelectDetail} from '../../http/api.js'
export default {
    data() {
        return {
          id: '',
          lawTitle: '',
          scopeLevel: '',
          enactOrg: '',
          lawTimeliness: '',
          enactDate: '',
          execDate: '',
          docUrl: '',
        }
    },
    mounted() {
      this.id = this.$route.query.id;
      if(this.id) {
        pfxcXjflfgRead({
          lawId: this.id
        }).then(res=> {
          let da = res.content;
          if(res.code === 200) {
            this.lawTitle = da.lawTitle;
            this.scopeLevel = da.scopeLevel;
            this.enactOrg = da.enactOrg;
            this.lawTimeliness = da.lawTimeliness;
            this.enactDate = da.enactDate;
            this.execDate = da.execDate;
            this.docUrl = da.docUrl;
            // 获取下拉数据
            this.getSelectData();
            // this.setIframeHeight();
          }
        })
      };
    },
    methods:{
      //获取select下拉数据
      async getSelectData(){
        let obj = {};
        const type = ['xiaolijibie','shixiaoxing'];
        const domData = ['lvSelectList','timeDataList'];
        for(let dataInfo = 0; dataInfo<type.length;dataInfo++){
          let dataInfoData = await getSelectDetail({ dictCode:type[dataInfo],userId:'111' });
          this[domData[dataInfo]] = dataInfoData.content.resultList;
          obj[domData[dataInfo]] = dataInfoData.content.resultList;;
        }
        obj.lvSelectList.forEach(element => {
          if(element.dictDataCode === this.scopeLevel) {
            this.scopeLevel = element.dictDataName;
          }
        });
        obj.timeDataList.forEach(element => {
          if(element.dictDataCode === this.lawTimeliness) {
            this.scopeLevel = element.dictDataName;
          }
        });
      },
      // 处理iframe高度
      // setIframeHeight() {
      //   let nIframe = document.querySelector('.iframe-docx iframe');
      //   nIframe.onload = function() {
      //     let h = nIframe.offsetHeight;
      //     // nIframe.style.height = h + nIframe.scrollHeight + 'px';
      //     let childBody = window.frames['iframedocx'].document.body;
      //     let ifm = nIframe.contentDocument;
      //     nIframe.style.height = 'auto';//关键这一句，先取消掉之前iframe设置的高度
      //     nIframe.style.height = ifm.body.scrollHeight+50+'px';
      //     // console.log(ifm.body.getElementsByTagName('*'),998);
      //     // document.getElementsByTagName('*')
      //   }
      // }
    }
}
</script>

<style lang="scss">
.yulanfv{
  width: 100%;
  height: 100%;
  .yulantop{
    width: 96%;
    padding: 0 2%;
    height: 70px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
  }
  .read-falvfagui {
    height: calc(100% - 70px);
    h1 {
      margin: 15px 0;
      font-size: 30px;
    }
    ul {
      background-color: #f6f6f6;
      padding: 20px 10%;
      overflow: hidden;
      li {
        float: left;
        width: 50%;
        text-align: left;
        line-height: 40px;
      }
    }
    .iframe-docx {
      height: calc(100% - 260px);
      iframe {
        width: 100%;
        height: 100%;
      }
    }
  }
}

</style>

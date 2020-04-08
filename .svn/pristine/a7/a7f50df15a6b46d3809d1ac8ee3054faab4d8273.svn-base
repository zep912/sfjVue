<template>
  <div class="bread" style="display: none">
    <el-breadcrumb class="breadcrumb" Separator=">">
      <el-breadcrumb-item @click="infoRoute()">
        <a>职责</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item @click="infoRoute()" v-if="title">
        <a>{{title}}</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in navList" :key="index" @click="go(item.url)">
        {{item.title}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
    export default {
        name: "breadcrumb",
        data(){
          return{

          }
        },
      props:['navList','title'],

      methods:{
        // 页面跳转
        go(url){
          // 点击倒数第2级路由
          if(url){
            this.router.navigate([url]);
          }
        },

        infoRoute(){
          this.router.navigate(['infobase']);
        }
      }
    }
</script>

<style scoped lang="scss">
@import "../../../assets/css/common";
  .bread {
    height: 60px;
    border-bottom: 1px solid #ccc;
    .ant-breadcrumb {
      padding-top: 18px;
      font-size: 16px;
      padding-left: 20px;
      font-weight: 400;
    }
  }

    .ant-breadcrumb {
      color: $color;
      a{
        color: $color;
      }
    }
</style>

<template>
  <div class="left-panel flex" style="flex-direction: column">
    <div class="top">
      <p @click="goBack()">返回</p>
    </div>
    <div style="padding-left:10px;flex:1;position:relative" id="options">
      <div>
        <p class="option-title">所属区域</p>
        <p style="margin-bottom:10px;">
          <label>
            <input type="checkbox" name="area"  @change="changeCheck($event.target)" id="area">
            <i class="checkbox-icon"></i>{{areaName}}
          </label>
        </p>
        <ul class="options flex" id="areaList">
          <li v-for="item in areaList" :id="item.areaId" :title="item.areaName">{{item.areaName}}</li>
        </ul>
      </div>
      <div id="industry-list">
        <p class="option-title">行业类型</p>
        <p style="margin-bottom:10px;">
          <label>
            <input type="checkbox" name="industry"  id="industry" @change="changeCheck($event.target)">
            <i class="checkbox-icon"></i>全部
          </label>
        </p>
        <div class="flex industry-items" v-for="item in industryList">
          <p :title="item.label">{{item.label}}</p>
          <ul class="options flex industry">
            <li v-for="subitem in item.children" :id="subitem.id" :title="subitem.label">{{subitem.label}}</li>
          </ul>
        </div>
      </div>
      <div class="btn-group flex">
        <span @click="goBack()">取消</span>
        <span @click="confirm()">确认</span>
      </div>
    </div>
  </div>
</template>

<script>
  // import {getSessionData,getStorageData} from '../../../../util/storage'
  import {treeDataFromArr} from '../../../../utils/array'
    export default {
        name: "filtrate",
        data(){
            return{
              industryList:[]
            }
        },
        props:['areaList','areaName'],
        mounted(){
          this.getIndustryType();
        },
        updated(){
          this.clickIndustryType();
        },
        methods:{
          //返回
          goBack(){
            this.$emit('setShow', true);
          },
          //获取行业类型   industryType   industryCode   summary
          getIndustryType(){
            // console.log(getStorageData("dicStr").ajIndustryType)
            // this.industryList=treeDataFromArr(getStorageData("dicStr").ajIndustryType,'0','industry');
          },
          //点击行业类型或区域
          clickIndustryType(){
            $('#options').on('click','.options li',function(){
              console.log("click it !!!!");
              $(this).toggleClass('active');
              //选中状态
              const ps = $(this).parent();
              if($(this).hasClass('active')){
                //全部选中
                if( ps.find('li.active').length === ps.find('li').length){
                  //行业类型
                  if(ps.hasClass('industry')){
                    const p=ps.prev();
                    p.addClass('active');
                    //全部选中
                    if( $('#industry-list .industry-items p').length === $('#industry-list .industry-items p.active').length){
                      $('#industry').prop('checked',true);
                    }
                  } else {
                    $('#area').prop('checked',true);
                  }
                }
              } else {
                //行业类型
                if(ps.hasClass('industry')){
                  const p=ps.prev();
                  p.removeClass('active');
                  $('#industry').prop('checked',false);
                } else {
                  $('#area').prop('checked',false);
                }
              }
            });
            $('#options').on('click','.industry-items p',function(){
              $(this).toggleClass('active');
              const lis =$(this).next().find('li');
              if($(this).hasClass('active')){
                lis.addClass('active');
                //全部选中
                if( $('#industry-list .industry-items p').length === $('#industry-list .industry-items p.active').length){
                  $('#industry').prop('checked',true);
                }
              } else {
                $('#industry').prop('checked',false);
                lis.removeClass('active');
              }
            })
          },
          //点击复选框
          changeCheck(target){
            const lip =$(target).parent().parent().siblings('.industry-items,.options').find('li,p');
            if(target.checked){
              lip.addClass('active');
            } else {
              lip.removeClass('active');
            }
          },
          //获取选中的行业、区域
          confirm(){
            this.$emit('selOptions',{areaCode:this.getIds('areaList'),industryCode:this.getIds('industry-list')})
          },
          //获取id
          getIds(id){
            const arr=[];
            $('#'+id+' li.active').each(function(){
              arr.push(this.id);
            });
            return String(arr);
          }
        }
    }
</script>

<style scoped lang="scss">
  @import "../../../../assets/css/common";

  .left-panel{
    width:400px;
    border-right:1px solid #ccc;
    font-size:16px;
    font-family: 'Arial Normal', 'Arial';
    height:100%;
    .top{
      height:50px;
      border-bottom:1px solid #ccc;
      padding-top:9px;
      p{
        width: 80px;
        text-align:center;
        height: 32px;
        line-height:32px;
        background:url('../../../../assets/images/u2873.png') no-repeat 0 0;
        color: #FFFFFF;
        cursor: pointer;
      }
    }
    .option-title{
      color: #158CCB;
      padding:10px 0;
    }
    .options{
      flex-wrap:wrap;
      li{
        width:92px;
        text-align:center;
        height:32px;
        line-height:32px;
        margin-bottom:10px;
        //border:1px solid #ccc;
        margin-right:5px;
        cursor: pointer;
        white-space: nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
      }
      li.active{
        border:1px solid #158CCB;
        background:url('../../../../assets/images/more_sel.png') no-repeat right bottom;
      }
    }
    .industry-items{
      >p{
        width:117px;
        text-align: center;
        height:32px;
        line-height:32px;
        //border:1px solid #ccc;
        margin-right:5px;
        cursor: pointer;
        white-space: nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
      }
      >p.active{
        border:1px solid #158CCB;
        background:url('../../../../assets/images/more_sel.png') no-repeat right bottom;
      }
      .options.industry{
        width:370px;
        li{
          font-size: 14px;
          color: #666666;
          text-align: center;
          cursor: pointer;
        }
      }
    }
    .btn-group{
      position:absolute;
      width:100%;
      bottom:0;
      left:0;
      >span{
        flex:1;
        text-align:center;
        height:48px;
        line-height:48px;
        font-size: 18px;
        color: #0DA9D7;
        border:1px solid #ccc;
        cursor: pointer;
      }
      >span+span{
        color:#fff;
        background:#197EC4;
        border:1px solid #197EC4;
      }
    }
  }

  input[type='checkbox']{
    display: none;
  }
  input[type='checkbox']+i.checkbox-icon{
    display: inline-block;
    width: 20px;
    height: 20px;
    position: relative;
    top: 3px;
    border:1px solid #ccc;
    margin-right:10px;
  }
  input[type='checkbox']:checked+i.checkbox-icon{
    background:#fff url('../../../../assets/images/u2817.png') no-repeat center center;
    background-size:80%;
  }

</style>

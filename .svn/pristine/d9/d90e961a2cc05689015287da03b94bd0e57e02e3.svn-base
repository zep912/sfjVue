<template>
  <div class="plan-content flex">
    <div class="left-area">
      <p class="plan-title">{{detail.reservePlanName}}</p>
      <div class="top-main flex">
        <div>
          <span>应急预案编号：</span>
          <span>{{detail.reservePlanCode}}</span>
        </div>
        <div>
          <span>预案所属企业：</span>
          <span>{{detail.unit}}</span>
        </div>
        <div>
          <span>应急预案类型：</span>
          <span>{{detail.reservePlanType}}</span>
        </div>
        <div>
          <span>预案所属行业：</span>
          <span>{{detail.business}}</span>
        </div>
        <div>
          <span>预案发布时间：</span>
          <span>{{detail.releaseDate}}</span>
        </div>
        <div>
          <span>预案备案时间：</span>
          <span>{{detail.recordDate}}</span>
        </div>
        <div>
          <span>预案发布单位：</span>
          <span>{{detail.printUnit}}</span>
        </div>
        <div>
          <span>预案备案单位：</span>
          <span>{{detail.recordUnit}}</span>
        </div>
        <!--<div>-->
        <!--<span>预案相关附件：</span>-->
        <!--<span>-->
        <!--<a [href]="detail.riskAnalyzeId">{{detail.riskAnalyze}}</a>-->
        <!--</span>-->
        <!--</div>-->
      </div>
      <iframe #frame [src]="detail.content" [style.width.px]="containerWidth" [style.height.px]="containerHeight" height="100%"
              width="100%" frameborder="0" marginheight="0" marginwidth="0"></iframe>
    </div>
    <div class="right-area">
      <ul class="menu" v-for=" item in detail.catalogList">
        <li>
          {{item.content}}
          <ul class="menu two-menu" v-for=" subitem in item.itemList">
            <li>{{subitem.content}}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
    export default {
        name: "emergencyPlanView",
      data(){
          return{
            detail :{},

            @ViewChild("frame") frameElement: ElementRef,
            containerMinWidth: number = 0,
        containerMinHeight: number = 0,
        containerWidth: number = this.containerMinWidth,
        containerHeight: number = this.containerMinHeight
          }
      },
      /*@Input()
      id;
    detail :any= {};

    @ViewChild("frame") frameElement: ElementRef;
    containerMinWidth: number = 0;
    containerMinHeight: number = 0;
    containerWidth: number = this.containerMinWidth;
    containerHeight: number = this.containerMinHeight;
    constructor(
      private commonService: CommonService,
      private routeInfo: ActivatedRoute,
      private sanitizer: DomSanitizer,
    ) { }*/
      props:[id],
      updated(){
        if(this.id){
          this.getDetail();
        }
      },
      methods:{
        ngOnInit() {
          // alert(this.id);
        },

        // 查询详情
        getDetail(){
          this.httpPost('/api/reservePlan/getReservePlanDetail', {reservePlanId:this.id},function( res: Response) {
            console.log(res);
            if (res['code'] == 0) {
              this.detail = res['data'];
              this.detail.content  = this.sanitizer.bypassSecurityTrustResourceUrl(this.detail.content );
            }
          });
        },
        @HostListener("window:resize", ["$event.target.innerWidth", "$event.target.innerHeight"])
        onResize(width: number, height: number): void {
          let top = this.frameElement.nativeElement.offsetTop;
          let left = this.frameElement.nativeElement.offsetLeft;
          // this.containerWidth = Math.max(width - left, this.containerMinWidth) - 360;
          this.containerWidth = 1200-360;
          this.containerHeight = Math.max(height - top, this.containerMinHeight);
        }
      }

    }
</script>

<style scoped lang="scss">
  @import "../../../../../assets/css/common";
  .plan-content{
    padding-top:20px;
    min-height:100%;
    .left-area{
      flex:1;
      p{
        font-size: 28px;
        text-align: center;
        color: #333333;
        margin-bottom:20px;
      }
      .top-main{
        //background: #f2f2f2;
        flex-wrap: wrap;
        padding:10px 20px;
        div{
          width:50%;
          font-size: 14px;
          line-height: 24px;
          color:#666;
        }
      }
    }
    .right-area{
      width:360px;
      border-left:1px solid #ccc;
      border-bottom:1px solid #ccc;
      .menu{
        margin-left:25px;
        li{
          line-height: 36px;
          font-size:16px;
        }
      }
      .two-menu.menu{
        li{
          font-size:14px;
        }
      }
    }
  }

</style>

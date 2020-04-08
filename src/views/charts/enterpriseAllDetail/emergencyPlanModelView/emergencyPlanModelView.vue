<template>
  <v-modal [(nzVisible)]="visible" nzTitle="" [nzWidth]="1200" [nzFooter]="null" (nzOnCancel)="close()">
    <div style="padding-top:30px;">
      <app-emergency-plan-view :id="planId"></app-emergency-plan-view>
    </div>
  </v-modal>
</template>

<script>
    export default {
        name: "emergencyPlanModelView",
      data(){
          return{

          }
      },
      props:[planId,visible],

    // @Output()
     // output=new EventEmitter();

      methods:{
        ngOnInit() {
        },
        //关闭摸态框
        close(){
          this.visible=false;
          this.output.emit();
        }
      }
    }
</script>

<style scoped lang="scss">
@import "../../../../assets/css/common";

</style>

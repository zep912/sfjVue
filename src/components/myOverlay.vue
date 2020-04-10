<template>
  <bm-overlay ref="customOverlay" :class="{sample: true, active}" pane="floatPane" @draw="draw">
    <div @click="handleClick">
      <img src="../assets/image/u3356.png" alt style="width:20px;" />
      {{text}}
    </div>
    <bm-info-window
      :show="show"
      @close="infoWindowClose"
      @open="infoWindowOpen"
      style="font-size: 14px"
      :position="{lng: info.lng, lat: info.lat}"
      :title="info.areaRegionName"
    >
      <p v-show="info.lawMsg">法律咨询：{{ info.areaOrgCount }}</p>
      <p v-show="info.lawMsg">人民调解：{{ info.lawCount }}</p>
      <p v-show="info.lawMsg">法律援助：{{info.lawCount}}</p>
      <p v-show="info.lawMsg">满意度：{{info.satisfactionDegree}}</p>

      <!-- <div class="infoBox" v-show="info.infoMsg">
        <div class="infoContent">
          <div>
            <img :src="info.orgImg||''" alt />
          </div>

          <div class="infoContentRight">
            <p>执业证号:{{info.credentialCode}}</p>
            <p>手机号码:{{info.orgTelephone}}</p>
            <p>执政律师:{{info.credentialCode}}</p>
            <p>注册地址:{{info.orgFullAddress}}</p>
          </div>
        </div>
      </div> -->
    </bm-info-window>
  </bm-overlay>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  props: ["text", "position", "active", "info"],
  watch: {
    position: {
      handler() {
        this.$refs.customOverlay.reload();
      },
      deep: true
    }
  },
  methods: {
    infoWindowClose(marker) {
      marker.show = false;
    },
    infoWindowOpen(marker) {
      marker.show = true;
    },
    handleClick() {
      this.show = !this.show;
    },
    draw({ el, BMap, map }) {
      const { lng, lat } = this.position;
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat));
      el.style.left = pixel.x - 60 + "px";
      el.style.top = pixel.y - 20 + "px";
    }
  }
};
</script>

<style>
.anchorBL{display:none}
.sample {
  width: 174px;
  /* height: 30px; */
  line-height: 30px;
  /* background: rgba(0,0,0,0.1); */
  overflow: hidden;
  /* box-shadow: 0 0 5px #000; */
  color: #000;
  padding-left: 20px;
  position: absolute;
}
.sample img {
  vertical-align: middle;
}
.sample .active {
  background: rgba(0, 0, 0, 0.75);
  color: #000;
}
.sample div {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
}
.BMap_pop div {
  /* background: rgba(0,0,0,0.1) !important; */
  color: #000;
}
.BMap_bubble_content {
  line-height: 24px;
}
.infoContent img {
  width: 100px;
  height: 130px;
  margin-right: 10px;
}
</style>

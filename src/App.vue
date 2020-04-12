<template>
  <div id="app">
     <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .AMapManager {
    width: 100%;
    height: 100%;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.el-picker-panel,.el-select-dropdown{
	z-index: 99999 !important;
}
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
	color: #1b79c2 !important;
}
.el-upload--picture-card{
	width: 130px !important;
	height: 130px !important;
}
</style>

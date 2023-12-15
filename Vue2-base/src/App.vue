<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from '@/views/layout'
export default {
  components:{
    Layout
  }
}
</script>

<style lang="scss">
body,
html {
  height: 100%;
  font-family: "PingFangSC-ExtraLight", "PingFang SC ExtraLight", "PingFang SC",
    sans-serif !important;
  user-select: none !important;
  background-color: #fff;
}
#app {
  width: 100%;
  height: 100%;
}
</style>

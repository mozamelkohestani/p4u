<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>

import Header from "@/components/Header.vue";

export default {
  name: 'app',
  data() {
    return {
      shiftContent : false
    }
  },
  components: {
    Header,
  }
}
</script>

<style lang="less">

</style>

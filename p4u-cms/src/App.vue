<template>
  <div id="app" v-bind:class="{'shiftContent': shiftContent }">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      shiftContent : false
    }
  },
  components: {
 
  }
}
</script>

<style lang="less">

</style>

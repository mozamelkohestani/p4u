<template>
  <div id="content" class="shiftContent">
    <Header />
    <Sidebar />
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Sidebar
  }
}
</script>

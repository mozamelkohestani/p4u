<template>
  <div id="content" class="shiftContent">
    <Header />
    <Sidebar />
    <div>
      <b-table striped hover :items="places"></b-table>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";

import { placelist } from "../manager/networkManager";

export default {
  props : {
    places : Object
  },
  data() {
    return {
    };
  },
  computed : {
  },
  methode: {
    
  },
  mounted() {
    placelist().then((response) => {
      console.log(response);
      return this.places = response.data;
    }).catch(error => {
      console.log(error.response)
    });
  },
  components: {
    Header,
    Sidebar,
  },
};
</script>
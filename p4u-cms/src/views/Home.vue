<template>
  <div id="content" class="container">
    <div class="col-12 p-b-30 m-t-20 clearfix">
      <h1>Places</h1>
      <b-button href="/places/create/" variant="primary">Create</b-button>
    </div>
    <div class="col-12 p-b-30 clearfix">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="row">
      <div v-for="(place, idx) in places" :key="idx" class="col-md-4 col-6 my-1">
        <b-card
          v-bind:title="place.title"
          v-bind:img-src="place.image"
          v-bind:img-alt="place.title"
          img-top
          tag="div"
          class="mb-2"
        >
          <b-card-text>{{place.description}}</b-card-text>

          <div class="buttons">
            <a @click.prevent="remove(place.id)" href>
              <b-icon icon="trash"></b-icon>
            </a>
            <router-link
              :to="{ path: '/places/edit/' + place.id , params: {id: place.id } }"
              variant="info"
            >
              <b-icon icon="pencil"></b-icon>
            </router-link>
            <router-link
              :to="{ path: '/places/'+ place.id + '/events', params: {id: place.id } }"
              variant="info"
            >
              <b-icon icon="eye"></b-icon>
            </router-link>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { placelist } from "../manager/networkManager";
import { placeRemove } from "../manager/networkManager";

export default {
  data() {
    return {
      places: [],
    };
  },
  computed: {},
  methods: {
    async remove(id) {
      try {
        await placeRemove(id);
        location.reload();
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    placelist()
      .then((response) => {
        return (this.places = response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
  components: {},
};
</script>

<style scoped>
.buttons {
  display: flex;
  justify-content: space-around;
}
h1 {
  float: left;
}
.btn {
  float: right;
}
</style>
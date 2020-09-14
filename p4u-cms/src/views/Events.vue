<template>
  <div id="content" class="container">
    <div class="col-12 p-b-30 m-t-20 clearfix">
      <h1>Events</h1>
      <b-button variant="primary">
        <router-link
          :to="{ path: '/events/create/' + path[3], params: {placeId: path[3] } }"
          variant="info"
        >Create</router-link>
      </b-button>
    </div>
    <div class="col-12 p-b-30">
      <div v-for="(event, idx) in events" :key="idx" class="col-md-4 col-6 my-1">
        <b-card
          v-bind:title="event.title"
          v-bind:img-src="event.image"
          v-bind:img-alt="event.title"
          img-top
          tag="div"
          class="mb-2"
        >
          <b-card-text>{{event.description}}</b-card-text>

          <div class="buttons">
            <a @click.prevent="removeEvent(path[3], event.id)" href>
              <b-icon icon="trash"></b-icon>
            </a>
            <router-link
              :to="{ path: '/events/edit/' + event.id , params: {id: event.id } }"
              variant="info"
            >
              <b-icon icon="pencil"></b-icon>
            </router-link>
            <router-link
              :to="{ path: '/places/'+ event.id + '/events/', params: {id: event.id } }"
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
import { eventlist } from "../manager/networkManager";
import { eventRemove } from "../manager/networkManager";

export default {
  data() {
    return {
      events: [],
      path: window.location.pathname.split("/"),
    };
  },
  computed: {},
  methode: {
    async removeEvent(placeId, eventId) {
      try {
        await eventRemove(placeId, eventId);
        location.reload();
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    eventlist(this.path[3])
      .then((response) => {
        console.log(response);
        return (this.events = response.data);
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
button a {
  color: #ffffff !important;
}
h1 {
  float: left;
}
.btn {
  float: right;
}
</style>
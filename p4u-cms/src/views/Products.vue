<template>
  <div id="content" class="container">
    <div class="col-12 p-b-30 m-t-20 clearfix">
      <h1>Products available in "{{event.title}}" event</h1>
      <b-button variant="primary">
        <router-link
          :to="{ path: '/events/'+ placeId +'/product/' + eventId + '/create', params: {placeId: placeId, eventId: eventId } }"
          variant="info"
        >Create</router-link>
      </b-button>
      <b-button variant="primary" class="m-r-20">
        <router-link :to="{ path: '/places/'+ placeId + '/events', params: {id: placeId } }" variant="primary" >Back</router-link>
      </b-button>
    </div>
    <div class="col-12 p-b-30">
      <div v-for="(product, idx) in products" :key="idx" class="col-md-4 col-6 my-1">
        <b-card
          v-bind:title="product.title"
          v-bind:img-src="product.image"
          v-bind:img-alt="product.title"
          img-top
          tag="div"
          class="mb-2"
        >
          <b-card-text>{{product.description}}</b-card-text>

          <div class="buttons">
            <a @click.prevent="removeProduct(product.id)" href>
              <b-icon icon="trash"></b-icon>
            </a>
            <router-link
              :to="{ path: '/events/'+ placeId +'/product/' + eventId + '/edit/' +product.id , params: {placeId: placeId, eventId: eventId } }"
              variant="info"
            >
              <b-icon icon="pencil"></b-icon>
            </router-link>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { productlist } from "../manager/networkManager";
import { removeProduct } from "../manager/networkManager";
import { eventGet } from "../manager/networkManager";

export default {
  props: {
    placeId: {
      type: String,
    },
    eventId: {
      type: String,
    },
  },
  data() {
    return {
      products: [],
      event: {}
    };
  },
  computed: {},
  methods: {
    async removeProduct(productId) {
      try {
        await removeProduct(this.placeId, this.eventId, productId);
        location.reload();
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    productlist(this.placeId, this.eventId)
      .then((response) => {
        console.log(response);
        return (this.products = response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });

    if (this.placeId && this.eventId) {
      eventGet(this.placeId, this.eventId)
        .then((response) => {
          console.log(response);
          return (this.event = response.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
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
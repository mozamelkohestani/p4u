<template>
  <div id="content" class="container m-t-20">
    <div class="col-12 p-b-30 m-t-20 clearfix">
      <h1 v-if="this.edit">Edit: "{{form.title}}"</h1>
      <h1 v-else>Create a new Place</h1>

      <b-button href="/" variant="primary">Back</b-button>
    </div>
    <div class="col-12 p-b-30 clearfix">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Title:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="text"
          required
          placeholder="Title"
          value="place.title"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Description:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.description" required placeholder="Description"></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Image link:"
        label-for="input-3"
        description="ex: https://picsum.photos/200"
      >
        <b-form-input id="input-3" v-model="form.image" placeholder="Image link" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger" class="m-r-20">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { placeCreate } from "../manager/networkManager";
import { placeGet } from "../manager/networkManager";
import { placeUpdate } from "../manager/networkManager";

export default {
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      form: {
        title: "",
        description: "",
        image: "",
      },
      show: true,
      edit: false,
    };
  },
  mounted() {
    if (this.id) {
      placeGet(this.id)
        .then((response) => {
          console.log(response);
          this.edit = true;
          return (this.form = response.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  },
  methods: {
    onSubmit(e) {
      if (this.edit) {
        this.update(e);
      } else {
        this.create(e);
      }
    },
    async create(e) {
      e.preventDefault();
      try {
        const result = await placeCreate(
          this.form.title,
          this.form.description,
          this.form.image
        );
        console.log(result);
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    },
    async update(e) {
      e.preventDefault();
      try {
        const result = await placeUpdate(
          this.id,
          this.form.title,
          this.form.description,
          this.form.image
        );
        console.log(result);
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.title = "";
      this.form.description = "";
      this.form.image = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style scoped>
h1 {
  float: left;
}
.btn {
  float: right;
}
</style>
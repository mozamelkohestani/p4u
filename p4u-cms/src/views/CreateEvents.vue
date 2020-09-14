<template>
  <div id="content" class="container m-t-20">
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

      <b-form-group id="input-group-3" label="Image link:" label-for="input-3">
        <b-form-input id="input-3" v-model="form.image" placeholder="Image link" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Image link:" label-for="input-4">
        <b-form-datepicker id="input-4" v-model="form.date" placeholder="Date" required></b-form-datepicker>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { eventCreate } from "../manager/networkManager";

export default {
  data() {
    return {
      form: {
        title: "",
        description: "",
        image: "",
        date: "",
      },
      show: true,
      placeId: window.location.pathname.split("/").pop(),
      edit: false,
    };
  },
  mounted() {},
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
        const result = await eventCreate(
          this.placeId,
          this.form.title,
          this.form.description,
          this.form.image
        );
        console.log(result);
        this.$router.push("/places/" + this.placeId + "/events");
      } catch (e) {
        console.log(e);
      }
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.title = "";
      this.form.description = "";
      this.form.image = "";
      this.form.date = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Nom</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="order.username"
          name="name"
        />
      </div>


      <div class="form-group">
        <label for="tomato">Tomate</label>
        <input type="checkbox" id="tomato" v-model="order.tomato" />
      </div>
      <div class="form-group">
        <label for="onion">Oignion</label>
        <input type="checkbox" id="onion" v-model="order.onion" />
      </div>
      <div class="form-group">
        <label for="salad">Salade</label>
        <input type="checkbox" id="salad" v-model="order.salad" />
      </div>
      <div class="form-group">
        <label for="sauce1">Sauce 1</label>
        <input type="checkbox" id="salad" v-model="order.sauce1" />
      </div>
      <div class="form-group">
        <label for="sauce2">Sauce 2</label>
        <input type="checkbox" id="salad" v-model="order.sauce2" />
      </div>
      <div class="form-group">
        <label for="sauce3">Sauce 3</label>
        <input type="checkbox" id="salad" v-model="order.sauce3" />
      </div>

      <button @click="saveOrder" class="btn btn-success">
        Passer la commande
      </button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
    </div>
  </div>
</template>

<script>
import OrderDataService from "../services/OrderDataService";
export default {
  name: "add-order",
  data() {
    return {
      order: {
        id: null,
        username: "",
        tomato: false,
        onion: false,
        salad: false,
        sauce1: false,
        sauce2: false,
        sauce3: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveOrder() {
      var data = {
        username: this.order.username,
        tomato: this.order.tomato,
        onion: this.order.onion,
        salad: this.order.salad,
        sauce1: this.order.sauce1,
        sauce2: this.order.sauce2,
        sauce3: this.order.sauce3,
      };
      OrderDataService.create(data)
        .then((response) => {
          this.order.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newOrder() {
      this.submitted = false;
      this.order = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>

<template>
  <div v-if="currentOrder" class="edit-form">
    <h4>Commande</h4>
    <form>
      <div class="form-group">
        <label for="name">Username</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="currentOrder.username"
        />
      </div>
      <div class="form-group">
        <label for="tomato">Tomate</label>
        <input type="checkbox" id="tomato" v-model="currentOrder.tomato" />
      </div>
      <div class="form-group">
        <label for="onion">Oignion</label>
        <input type="checkbox" id="onion" v-model="currentOrder.onion" />
      </div>
      <div class="form-group">
        <label for="salad">Salade</label>
        <input type="checkbox" id="salad" v-model="currentOrder.salad" />
      </div>
      <div class="form-group">
        <label for="sauce1">Sauce 1</label>
        <input type="checkbox" id="salad" v-model="currentOrder.sauce1" />
      </div>
      <div class="form-group">
        <label for="sauce2">Sauce 2</label>
        <input type="checkbox" id="salad" v-model="currentOrder.sauce2" />
      </div>
      <div class="form-group">
        <label for="sauce3">Sauce 3</label>
        <input type="checkbox" id="salad" v-model="currentOrder.sauce3" />
      </div>
    </form>

    <button @click="deleteOrder">
      Delete
    </button>

    <button type="submit" @click="updateOrder">
      Update
    </button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import OrderDataService from "../services/OrderDataService";
export default {
  name: "order",
  data() {
    return {
      currentOrder: null,
      message: "",
    };
  },
  methods: {
    getOrder(id) {
      OrderDataService.get(id)
        .then((response) => {
          this.currentOrder = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateOrder() {
      OrderDataService.update(this.currentOrder.id, this.currentOrder)
        .then((response) => {
          console.log(response.data);
          this.message = "The order was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteOrder() {
      OrderDataService.delete(this.currentOrder.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "orders" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getOrder(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>

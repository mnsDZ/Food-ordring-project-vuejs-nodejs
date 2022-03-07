<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Liste des commandes</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(order, index) in orders"
          :key="index"
        >
          <strong> Kebab </strong>
          <div>
            <label><strong>Username:</strong></label> {{ order.username }}
          </div>
          <div>
            <label v-if="order.tomato">Tomate</label>
          </div>
          <div><label v-if="order.onion">Oignion</label></div>
          <div><label v-if="order.salad">Salade</label></div>
          <div><label v-if="order.sauce1">Sauce 1</label></div>
          <div><label v-if="order.sauce2">Sauce 2</label></div>
          <div>
            <label v-if="order.sauce3">Sauce 3</label>
          </div>

          <router-link :to="'/orders/' + order.id"
            >Modifier</router-link>
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentOrder">
        <h4>Commande</h4>
        <div>
          <label><strong>Nom:</strong></label> {{ currentOrder.username }}
        </div>
        <div>
          <label><strong>Titre:</strong></label> {{ currentOrder.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderDataService from "../services/OrderDataService";
export default {
  name: "OrdersList",
  data() {
    return {
      orders: [],
      currentOrder: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveOrders() {
      OrderDataService.getAll()
        .then((response) => {
          this.orders = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveOrders();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>

module.exports = app => {
    const orders = require("../controllers/order.controller");
    var router = require("express").Router();
    // Create a new orders
    router.post("/", orders.create);
    // Retrieve all orders
    router.get("/", orders.findAll);
    // Retrieve all published orders
    router.get("/:id", orders.findOne);
    // Update a order with id
    router.put("/:id", orders.update);
    // Delete a order with id
    router.delete("/:id", orders.delete);
    app.use('/api/orders', router);
  };
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");

var corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200, // For legacy browser support
  methods: "GET, PUT, DELETE",
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

require("./app/routes/order.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

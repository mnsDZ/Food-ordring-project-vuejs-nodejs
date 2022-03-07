module.exports = (sequelize, Sequelize) => {
  const Orders = sequelize.define("order", {
    username: {
      type: Sequelize.STRING,
    },
    tomato: {
      type: Sequelize.BOOLEAN,
    },
    onion: {
      type: Sequelize.BOOLEAN,
    },
    salad: {
      type: Sequelize.BOOLEAN,
    },
    sauce1: {
      type: Sequelize.BOOLEAN,
    },
    sauce2: {
      type: Sequelize.BOOLEAN,
    },
    sauce3: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Orders;
};

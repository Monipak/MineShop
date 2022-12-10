module.exports = (sequelize, Sequelize) => {
  const Reviews = sequelize.define("reviews", {
    user: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    message: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    rate: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
  return Reviews;
};

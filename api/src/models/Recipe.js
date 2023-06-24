const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "recipe",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { notEmpty: true },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "https://i.postimg.cc/sfQJ0WQD/default.jpg",
        validate: { isUrl: true },
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      healthScore: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        validate: { min: 0, max: 100 },
      },
      steps: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: {},
      },
      source: {
        type: DataTypes.STRING,
        defaultValue: "db",
      },
    },
    { timestamps: false }
  );
};

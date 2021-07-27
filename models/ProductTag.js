const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true,
    },

    productID: {
      type:DataTypes.INTEGER,
      references:{
        Key:"id",
        model:"product",
      },

    tagID: {
      type:DataTypes.INTEGER,
      references:{
        key: "id",
        model:"tag",
      }
    }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;

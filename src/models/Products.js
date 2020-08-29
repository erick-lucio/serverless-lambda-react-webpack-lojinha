const { Model, DataTypes } = require("sequelize");

class Products extends Model {
  static init(sequelize) {
    super.init(
      {
        name_: DataTypes.STRING,
        img_name: DataTypes.STRING,
        

      },
      {
        sequelize,
        modelName: "products",
        freezeTableName: true,
      }
    );
  }
}

module.exports = Products;

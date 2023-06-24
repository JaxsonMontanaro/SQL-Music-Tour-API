'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meetGreet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  meetGreet.init({

    meet_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    meet_end_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    meet_greet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
  }, {
    sequelize,
    modelName: 'meetGreet',
    tableName: 'meetGreet',
    timestamps: false
  })

  return meetGreet;
};
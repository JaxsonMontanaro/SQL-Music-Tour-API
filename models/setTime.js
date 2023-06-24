'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class setTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  setTime.init({
    set_time_id: {
      type: DataTypes.SMALLINT,
      primaryKey: false,
      autoIncrement: true
    },
    stage_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    band_id: {
        type: DataTypes.SMALLINT,
        primaryKey: false,
      },
    start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    set_time_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
  }, {
    sequelize,
    modelName: 'setTime',
    tableName: 'setTime',
    timestamps: false
  })

  return setTime;
};
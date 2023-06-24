'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stageEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stageEvent.init({
    stage_events_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    stage_id: {
      type: DataTypes.SMALLINT,
      primaryKey: false,
    },
    event_id: {
      type: DataTypes.SMALLINT,
      primaryKey: false,
    },
  }, {
    sequelize,
    modelName: 'stageEvent',
    tableName: 'stageEvent',
    timestamps: false
  })

  return stageEvent;
};
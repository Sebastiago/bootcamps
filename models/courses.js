'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: {
          args: true,
          msg: 'title solo debe tener letras'
        },
        notEmpty: {
          args: true,
          msg: 'title no debe quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'title no debe quedar vacio'
        },
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: {
          args: true,
          msg: 'desc solo debe tener letras'
        },
        notEmpty: {
          args: true,
          msg: 'desc no debe quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'desc no debe quedar vacio'
        },
      }
    },
    weeks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        isInt: {
          args: true,
          msg: 'weeks solo caracteres enteros'
        },
        notEmpty: {
          args: true,
          msg: 'weeks no debe quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'weeks no debe quedar vacio'
        },
      }
    },
    enroll_cost: DataTypes.REAL,
    minimun_skill: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: {
          args: true,
          msg: 'skill solo debe tener letras'
        },
        notEmpty: {
          args: true,
          msg: 'skill no debe quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'skill no debe quedar vacio'
        },
      }
    },
    bootcamp_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        isInt: {
          args: true,
          msg: 'bid solo debe ser de caracter entero'
        },
        notEmpty: {
          args: true,
          msg: 'bid no debe quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'bid no debe quedar vacio'
        },
      }
    },
  }, {
    sequelize,
    modelName: 'Courses',
    timestamps: false
  });
  return Courses;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reviews.init({
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
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: {
          args: true,
          msg: 'text solo debe tener letras'
        },
        notEmpty: {
          args: true,
          msg: 'text no debe quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'text no debe quedar vacio'
        },
      }
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: true,
      validate: {
        isFloat: {
          args: true,
          msg: 'rating solo debe tener letras'
        },
        notEmpty: {
          args: true,
          msg: 'rating no debe quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'rating no debe quedar vacio'
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        isInt: {
          args: true,
          msg: 'uid solo debe ser de caracter entero'
        },
        notEmpty: {
          args: true,
          msg: 'uid no debe quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'uid no debe quedar vacio'
        },
      }
    },
  }, {
    sequelize,
    modelName: 'Reviews',
    timestamps: false
  });
  return Reviews;
};
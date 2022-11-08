'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: {
          args: true,
          msg: 'Name solo debe tener letras'
        },
        notEmpty: {
          args: true,
          msg: 'Name no debe quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'Name no debe quedar vacio'
        },
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email no cumple los requisitos'
        },
        notEmpty: {
          args: true,
          msg: 'Email no debe quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'Name no debe quedar vacio'
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [2,10],
          msj: "Password solo permite de 2 a 10 caracteres"
        },
        notEmpty: {
          args: true,
          msg: 'Password no debe quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'Password no debe quedar vacio'
        },
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};

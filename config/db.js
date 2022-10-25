const sequelize = require('./seq')
//dependencia a la funcion para crear modelo
const UserModel = require('../models/user')
//dependencia a DataTypes
const { DataTypes } = require('sequelize')
const user = require('../models/user')
const colors = require('colors')

//crear el modelo
const User = UserModel(sequelize, DataTypes)

//crear una fuincion asyncrona para conexion
const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('conexion establecida exitosamente'.bgMagenta.gray)
        //seleccionar los users:
        const users = await User.findAll()
        console.log(users)
        /*// Create a new user
        const jane = await User.create({ name: "Jane", email: "jane123@gmail.com", password: "JaneDoe2" });
        console.log("Jane's auto-generated ID:", jane.id);
        //actualizar 
        await User.update({ email: "noc@gmail.com" }, {
            where: {
              email: "jane123@gmail.com"
            }
          });*/
    }
    catch (error) {
        console.error(error)
    }
}

//ejecutar la funcion
module.exports = connectDB
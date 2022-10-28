const sequelize = require('../config/seq')
const { DataTypes } = require('sequelize')
const UserModel = require('../models/user')

const User = UserModel(sequelize, DataTypes)


//get: obtener datos R
exports.traerUsers = async(req, res)=>{
    const users = await User.findAll()
    res.status(200).json(
        {
            "success" : true,
            "data" : users
        }
    )
}

exports.traerUserPorId = async (req, res)=>{
    const userId = await User.findByPk(req.params.id)
    res.status(200).json(
        {
            "success" : true,
            "data" : userId
        }
    )
}

//post: crear un nuevo recurso
exports.crearUser =async (req, res)=>{
    const newUser = await User.create(req.body);
    res.status(201).json(
        {
            "success" : true,
            "data" : newUser
        }
    )
}

//put-patch: actualizar un recurso
exports.ActualizarUser = async (req, res)=>{
    await User.update(req.body, {
        where:{
            id: req.params.id
        }
    })
    const upUser = await User.findByPk(req.params.id)
    res.status(200).json(
        {
            "succes" : true,
            "data" : upUser
        }
    )
}

//delete: borrar un recurso
exports.borrarUser =async (req, res)=>{
    await User.destroy({
        where: {
            id: req.params.id
        }
      });
    const borrar = await User.findByPk(req.params.id)
    res.status(200).json(
        {
            "succes" : true,
            "data" : borrar
        }
    )
}
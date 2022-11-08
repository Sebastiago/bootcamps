const sequelize = require('../config/seq')
const { DataTypes, ValidationError } = require('sequelize')
const UserModel = require('../models/user')

const User = UserModel(sequelize, DataTypes)


//get: obtener datos R
exports.traerUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json(
            {
                "success": true,
                "data": users
            }
        )
    } catch (error) {
        res.status(422).json(
            {
                "success": false,
                "errors": "error de servidor"
            }
        )
    }


}

exports.traerUserPorId = async (req, res) => {
    try {
        const userId = await User.findByPk(req.params.id)
        //si usuario no existe
        if (!userId) {
            res.status(422).json(
                {
                    "success": true,
                    "errors": ['user no existe']
                }
            )
        }
        res.status(200).json(
            {
                "success": true,
                "data": userId
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                "success": false,
                "errors": "error de servidor"
            }
        )
    }

}

//post: crear un nuevo recurso
exports.crearUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).json(
            {
                "success": true,
                "data": newUser
            }
        )
    } catch (error) {

        if (error instanceof ValidationError) {
            //llevar errores a response
            //mensajes de error unicamente
            const errores = error.errors.map((e) => e.message)
            res.status(422).json(
                {
                    "success": false,
                    "errors": errores
                }
            )
        } else {
            //errores de servidor
            res.status(422).json(
                {
                    "success": false,
                    "errors": "error de servidor"
                }
            )
        }
    }
}

//put-patch: actualizar un recurso
exports.ActualizarUser = async (req, res) => {
    try {
        const upUser = await User.findByPk(req.params.id)
        if (!upUser) {
            res.status(422).json(
                {
                    "success": true,
                    "errors": ['user no existe']
                }
            )
        }
        else {
            await User.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            //seleccionar usuario actualizado
            const userAct = await User.findByPk(req.params.id)
            //enviar response cin usuario actualizado
            res.status(200).json(
                {
                    "success": true,
                    "data": userAct
                }
            )
        }
    }
    catch (error) {
        res.status(422).json(
            {
                "success": false,
                "errors": "error de servidor"
            }
        )
    }
}

//delete: borrar un recurso
exports.borrarUser = async (req, res) => {
    const borrar = await User.findByPk(req.params.id)
    await User.destroy({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(
        {
            "succes": true,
            "data": borrar
        }
    )
}
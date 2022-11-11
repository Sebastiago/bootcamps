const sequelize = require('../config/seq')
const { DataTypes, ValidationError } = require('sequelize')
const BootcampModel = require('../models/Bootcamp')
const bootcamp = require('../models/bootcamp')

const Bootcamp = BootcampModel(sequelize, DataTypes)


//get: obtener datos R
exports.traerBootcamps = async (req, res) => {
    try {
        const boorcamps = await Bootcamp.findAll()
        res.status(200).json(
            {
                "success": true,
                "data": boorcamps
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

exports.traerBootcampPorId = async (req, res) => {
    try {
        const boorcampId = await Bootcamp.findByPk(req.params.id)
        //si usuario no existe
        if (!boorcampId) {
            res.status(422).json(
                {
                    "success": true,
                    "errors": ['Bootcamp no existe']
                }
            )
        }
        res.status(200).json(
            {
                "success": true,
                "data": boorcampId
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
exports.crearBootcamp = async (req, res) => {
    try {
        const newBootcamp = await Bootcamp.create(req.body);
        res.status(200).json(
            {
                "success": true,
                "data": newBootcamp
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
exports.ActualizarBootcamp = async (req, res) => {
    try {
        const upBootcamp = await Bootcamp.findByPk(req.params.id)
        if (!upBootcamp) {
            res.status(422).json(
                {
                    "success": true,
                    "errors": ['Bootcamp no existe']
                }
            )
        }
        else {
            await Bootcamp.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            //seleccionar usuario actualizado
            const boorcampAct = await Bootcamp.findByPk(req.params.id)
            //enviar response cin usuario actualizado
            res.status(200).json(
                {
                    "success": true,
                    "data": boorcampAct
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
exports.borrarBootcamp = async (req, res) => {
    const borrar = await Bootcamp.findByPk(req.params.id)
    await Bootcamp.destroy({
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
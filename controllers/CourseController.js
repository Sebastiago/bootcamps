const sequelize = require('../config/seq')
const { DataTypes, ValidationError } = require('sequelize')
const CourseModel = require('../models/courses')

const Course = CourseModel(sequelize, DataTypes)


//get: obtener datos R
exports.traerCourses = async (req, res) => {
    try {
        const courses = await Course.findAll()
        res.status(200).json(
            {
                "success": true,
                "data": courses
            }
        )
    } catch (error) {
        res.status(422).json(
            {
                "success": false,
                "errors": error
            }
        )
    }


}

exports.traerCoursePorId = async (req, res) => {
    try {
        const courseId = await Course.findByPk(req.params.id)
        //si usuario no existe
        if (!courseId) {
            res.status(422).json(
                {
                    "success": true,
                    "errors": ['course no existe']
                }
            )
        }
        res.status(200).json(
            {
                "success": true,
                "data": courseId
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
exports.crearCourse = async (req, res) => {
    try {
        const newCourse = await Course.create(req.body);
        res.status(200).json(
            {
                "success": true,
                "data": newCourse
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
                    "errors": error
                }
            )
        }
    }
}

//put-patch: actualizar un recurso
exports.ActualizarCourse = async (req, res) => {
    try {
        const upcourse = await Course.findByPk(req.params.id)
        if (!upcourse) {
            res.status(422).json(
                {
                    "success": true,
                    "errors": ['course no existe']
                }
            )
        }
        else {
            await Course.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            //seleccionar usuario actualizado
            const courseAct = await Course.findByPk(req.params.id)
            //enviar response cin usuario actualizado
            res.status(200).json(
                {
                    "success": true,
                    "data": courseAct
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
exports.borrarCourse = async (req, res) => {
    const borrar = await Course.findByPk(req.params.id)
    await Course.destroy({
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
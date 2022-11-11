const sequelize = require('../config/seq')
const { DataTypes, ValidationError } = require('sequelize')
const ReviewModel = require('../models/reviews')

const Review = ReviewModel(sequelize, DataTypes)


//get: obtener datos R
exports.traerReviews = async (req, res) => {
    try {
        const reviews = await Review.findAll()
        res.status(200).json(
            {
                "success": true,
                "data": reviews
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

exports.traerReviewPorId = async (req, res) => {
    try {
        const reviewId = await Review.findByPk(req.params.id)
        //si usuario no existe
        if (!reviewId) {
            res.status(422).json(
                {
                    "success": true,
                    "errors": ['Review no existe']
                }
            )
        }
        res.status(200).json(
            {
                "success": true,
                "data": reviewId
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
exports.crearReview = async (req, res) => {
    try {
        const newReview = await Review.create(req.body);
        res.status(200).json(
            {
                "success": true,
                "data": newReview
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
exports.ActualizarReview = async (req, res) => {
    try {
        const upReview = await Review.findByPk(req.params.id)
        if (!upReview) {
            res.status(422).json(
                {
                    "success": true,
                    "errors": ['Review no existe']
                }
            )
        }
        else {
            await Review.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            //seleccionar usuario actualizado
            const ReviewAct = await Review.findByPk(req.params.id)
            //enviar response cin usuario actualizado
            res.status(200).json(
                {
                    "success": true,
                    "data": ReviewAct
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
exports.borrarReview = async (req, res) => {
    const borrar = await Review.findByPk(req.params.id)
    await Review.destroy({
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
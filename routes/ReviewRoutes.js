const express = require('express')
const {crearReview,
       traerReviewPorId,
       traerReviews, 
       borrarReview,
       ActualizarReview } = require('../controllers/ReviewController')

const router = express.Router()

router.route('/')
            .get(traerReviews)
            .post(crearReview)
router.route('/:id')
            .get(traerReviewPorId)
            .delete(borrarReview)
            .put(ActualizarReview)

module.exports = router
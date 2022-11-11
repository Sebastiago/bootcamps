const express = require('express')
const {crearBootcamp,
       traerBootcampPorId,
       traerBootcamps, 
       borrarBootcamp,
       ActualizarBootcamp } = require('../controllers/BootcampController')

const router = express.Router()

router.route('/')
            .get(traerBootcamps)
            .post(crearBootcamp)
router.route('/:id')
            .get(traerBootcampPorId)
            .delete(borrarBootcamp)
            .put(ActualizarBootcamp)

module.exports = router
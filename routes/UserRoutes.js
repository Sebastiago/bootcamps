const express = require('express')
const {crearUser,
       traerUserPorId,
       traerUsers, 
       borrarUser,
       ActualizarUser } = require('../controllers/UserController')

const router = express.Router()

router.route('/')
            .get(traerUsers)
            .post(crearUser)
router.route('/:id')
            .get(traerUserPorId)
            .delete(borrarUser)
            .put(ActualizarUser)

module.exports = router
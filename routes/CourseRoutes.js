const express = require('express')
const {crearCourse,
       traerCoursePorId,
       traerCourses, 
       borrarCourse,
       ActualizarCourse } = require('../controllers/CourseController')

const router = express.Router()

router.route('/')
            .get(traerCourses)
            .post(crearCourse)
router.route('/:id')
            .get(traerCoursePorId)
            .delete(borrarCourse)
            .put(ActualizarCourse)

module.exports = router

const express = require('express')

const router = express.Router()


//crear rutas(endpoint, uri) para los bootcamps
//get: obtener datos R
router.get('/', (req, res)=>{
    res.status(200).json(
        {
            "message" : "Aqui se van a mostrar todos los bootcamps"
        }
    )
})

router.get('/:id', (req, res)=>{
    res.status(200).json(
        {
            "message" : `Aqui va a mostrarse el bootcamps cuyo id es ${req.params.id}`
        }
    )
})

//post: crear un nuevo recurso
router.post('/', (req, res)=>{
    res.status(201).json(
        {
            "message" : "Aqui se va a crear un bootcamp"
        }
    )
})

//put-patch: actualizar un recurso
router.put('/:id', (req, res)=>{
    res.status(200).json(
        {
            "message" : `Aqui se va a actualizar el bootcamp ${req.params.id}`
        }
    )
})

//delete: borrar un recurso
router.delete('/:id', (req, res)=>{
    res.status(200).json(
        {
            "message" : `Aqui se va a borrar el bootcamp ${req.params.id}`
        }
    )
})

module.exports = router
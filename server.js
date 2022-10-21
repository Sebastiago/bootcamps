const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

//dependencias a las rutas
const bootcampRoutes = require('./routes/BootcampRoutes')

//establecer el archivo de configuracion
// con variables de entorno del proyecto
dotenv.config({
    path: './config_env/config.env'
})

//1 crear el ojeto aplicacion
const app = express()

app.use('/api/v1/bootcamps', bootcampRoutes)


//2 crear una ruta de prueba
/*app.get('/' , (req,res)=>{
    res.send('Ruta funcional, epa la arepa')
})*/

//crear rutas(endpoint, uri) para los bootcamps
//get: obtener datos R
app.get('/api/v1/bootcamps', (req, res)=>{
    res.status(200).json(
        {
            "message" : "Aqui se van a mostrar todos los bootcamps"
        }
    )
})

app.get('/api/v1/bootcamps/:id', (req, res)=>{
    res.status(200).json(
        {
            "message" : `Aqui va a mostrarse el bootcamps cuyo id es ${req.params.id}`
        }
    )
})

//post: crear un nuevo recurso
app.post('/api/v1/bootcamps', (req, res)=>{
    res.status(201).json(
        {
            "message" : "Aqui se va a crear un bootcamp"
        }
    )
})

//put-patch: actualizar un recurso
app.put('/api/v1/bootcamps/:id', (req, res)=>{
    res.status(200).json(
        {
            "message" : `Aqui se va a actualizar el bootcamp ${req.params.id}`
        }
    )
})

//delete: borrar un recurso
app.delete('/api/v1/bootcamps/:id', (req, res)=>{
    res.status(200).json(
        {
            "message" : `Aqui se va a borrar el bootcamp ${req.params.id}`
        }
    )
})

//3 ejecutar servidor de desarrollo express
app.listen(process.env.PORT ,  ()=>{
    console.log(`Servidor iniciado en puerto: ${process.env.PORT}`.bgGreen.cyan)    
})
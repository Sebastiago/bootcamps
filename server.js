const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const listEndpoint = require('express-list-endpoints')
//dependencia a la conexion de bd
const connectDB = require('./config/db')

//dependencias a las rutas
const bootcampRoutes = require('./routes/BootcampRoutes')
const userRoutes = require('./routes/UserRoutes')
const listEndpoints = require('express-list-endpoints')

//establecer el archivo de configuracion
// con variables de entorno del proyecto
dotenv.config({
    path: './config_env/config.env'
})

//1 crear el ojeto aplicacion
const app = express()
app.use(express.json())

//ejecutar la conexion a bd
connectDB()

app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/users', userRoutes)

//2 crear una ruta de prueba
/*app.get('/' , (req,res)=>{
    res.send('Ruta funcional, epa la arepa')
})*/

//crear rutas(endpoint, uri) para los bootcamps
//get: obtener datos R
/*app.get('/api/v1/bootcamps', (req, res)=>{
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
})*/

console.log(listEndpoint(app))

//3 ejecutar servidor de desarrollo express
app.listen(process.env.PORT ,  ()=>{
    console.log(`Servidor iniciado en puerto: ${process.env.PORT}`.bgGreen.cyan)    
})


/*//***********************

app.get('/api/v1/users', (req, res)=>{
    res.status(200).json(
        {
            "message" : "Aqui se van a mostrar todos los users"
        }
    )
})

app.get('/api/v1/users/:id', (req, res)=>{
    res.status(200).json(
        {
            "message" : `Aqui va a mostrarse el user cuyo id es ${req.params.id}`
        }
    )
})

app.post('/api/v1/users', (req, res)=>{
    res.status(201).json(
        {
            "message" : "Aqui se va a crear un user"
        }
    )
})

app.put('/api/v1/users/:id', (req, res)=>{
    res.status(200).json(
        {
            "message" : `Aqui se va a actualizar el user ${req.params.id}`
        }
    )
})

app.delete('/api/v1/users/:id', (req, res)=>{
    res.status(200).json(
        {
            "message" : `Aqui se va a borrar el user ${req.params.id}`
        }
    )
})*/
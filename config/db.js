const sequelize = require('./seq')
const colors = require('colors')

//crear una fuincion asyncrona para conexion
const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('conexion establecida exitosamente'.bgMagenta.gray)
        //seleccionar los users:
        //const users = await User.findAll()
        //console.log(users)
        /*// Create a new user
        const jane = await User.create({ name: "Jane", email: "jane123@gmail.com", password: "JaneDoe2" });
        console.log("Jane's auto-generated ID:", jane.id);
        //actualizar 
        await User.update({ email: "noc@gmail.com" }, {
            where: {
              email: "jane123@gmail.com"
            }
          });*/
    }
    catch (error) {
        console.error(error)
    }
}

//ejecutar la funcion
module.exports = connectDB
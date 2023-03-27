const express = require('express')
const Usuarios = require('./users')

function escucha(app){
    const router = express.Router()
    app.use('/api',router)
    const misUsuarios = new Usuarios()

    router.get('/data', async function(req, res, next){
        console.log('recibio peticion get en /api/datos ')
        console.log('parametros: ',req.params)
        console.log('query',req.query)//http://localhost:9090/api/data?nombre=angel&edad=26
        try{
            const users = await misUsuarios.getUsuarios(req.query)
            res.status(200).json({
                'usuarios':users            
            })
        }catch(error){
            console.log(error)
        }
    })
    router.post('/data', async function(req, res, next){
        console.log('recibio peticion post en /api/datos ')
        console.log('parametros: ',req.params)
        console.log('body: ',req.body)
        console.log('query',req.query)
        try{
            const user = await misUsuarios.insertUsuario(req.body)
            res.status(200).json({
                'Peticion post ':'Satisfactoria',
                'insertado':user
            })
        }catch(error){
            console.log(error)
        }
    })
}

module.exports = escucha
const Mongo = require('./mongo')

class Usuarios{
    constructor(){
        this.collection = 'users'
        this.mongoDB = new Mongo()
    }
    async getUsuarios(query){
        const usuarios = await this.mongoDB.getAll(this.collection, query)
        return usuarios || {}
    }
    async getUsuario(){

    }
    async insertUsuario(usuario){
        const insertResult = this.mongoDB.insert(this.collection, usuario)
        return insertResult
    }
    async updateUsuario(usuarioOld, usuarioNew){

    }
}

module.exports = Usuarios
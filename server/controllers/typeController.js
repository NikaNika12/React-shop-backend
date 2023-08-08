const { Type } = require("../models/models")
const ApiError = require("../error/ApiError")

class TypeController { //метод пост в постман http://localhost:5000/api/type body row json "name":"Acrylic"
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) { //метод гет в постман 
        const types = await Type.findAll()
        return res.json(types)
    }

    async delete(req, res) {
        const {id} = req.params
        const types = await Type.destroy(
            {
                where: Number({id}),
            },
        )
        return res.json(types)
    }

}

module.exports = new TypeController()
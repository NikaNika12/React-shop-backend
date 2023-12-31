const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt') //хеширование данных
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
        
    }

    async check(req, res, next) {
        // res.json("asdsa")
        // res.json({massage: "All right!"})
        const token = generateJwt(req.user.id, req.user.email, req.user.role) //перезаписывается для одного пользователя
        return res.json({token})
        // const {id} = req.query //как работают запросы http://localhost:5000/api/user/auth?id=5&massage=fsadfas
        // if(!id) {
        //     return next(ApiError.badRequest("ID is not set up"))
        // }
        // res.json(id) // (query)
    }
}

module.exports = new UserController()
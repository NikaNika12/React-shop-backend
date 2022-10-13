require('dotenv').config()

const express =require ("express");
const sequelize = require ('./db')
const models = require ("./models/models") //простройка таблиц
const cors = require ("cors")
const fileUpload = require ("express-fileupload")
const router = require ("./routes/index")
const errorHandler = require ("./middleware/ErrorHandingMiddleware")
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use("/api",router)


//обработка ощибок, последний Middleware
app.use(errorHandler)

// app.get("/", (req, res) => { проверка работы приложения через постман
//     res.status(200).json({message:"Working!"})
// })

const start = async () => {
    try {
        await sequelize.authenticate()//database access
        await sequelize.sync()//check database with cheme of database
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch(e){
        console.log(e)
    }
}

start()
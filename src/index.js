//importar dependencias
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const connection = require("./db/connection")
require("dotenv").config()

//incicializar express
const app = express()

const PORT = process.env.PORT
//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan("combined"))
connection()
//rutas
app.use(require('./routes/user.routes'))
app.use(require('./routes/task.routes'))

//definir puerto
app.listen(PORT, console.log(`Servidor iniciado en http://localhost:${PORT}`))
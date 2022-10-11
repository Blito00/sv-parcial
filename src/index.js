//importar dependencias
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const connection = require("./db/connection")
require("dotenv").config()

//incicializar express
const app = express()
//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan("combined"))
connection()
//rutas


//definir puerto
app.listen(process.env.PORT)
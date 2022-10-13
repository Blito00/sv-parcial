const {login} = require('../controllers/auth.controllers')

const router = require('express').Router()
// router.get("/login", (req, res) => {
//     return res.json({
//         msg: "Ingrese su usuario y controseña"
//     })
// })

router.post("/login", login)

module.exports = router
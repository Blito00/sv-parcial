const router = require("express").Router()
const validarJWT = require("../middlewares/validarJWT")
const {getUser,postUser, putUser, deleteUser} = require('../controllers/user.controller')

router.get("/user", getUser)
router.post("/register", postUser)
router.put("/user/:userId", putUser)
router.delete("/delete/:id", deleteUser )

module.exports = router


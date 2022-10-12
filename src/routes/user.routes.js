const router = require("express").Router()
const {getUser, postUser, putUser, deleteUser} = require('../controllers/user.controller')

router.get("/login", getUser)
router.post("/register", postUser)
router.put("/user:/id", putUser)
router.delete("/delete/:id", deleteUser )

module.exports = router


const router = require("express").Router()
const {getTask,postTask} = require('../controllers/task.controller')
const validarJWT = require("../middlewares/validarJWT")


router.get("/task",getTask)
router.post("/task",[validarJWT],postTask)

module.exports = router
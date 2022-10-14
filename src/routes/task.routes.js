const router = require("express").Router()
const {getTask,postTask, getTask_idUser, deleteTask} = require('../controllers/task.controller')
const validarJWT = require("../middlewares/validarJWT")


router.get("/task",getTask)
router.post("/task",[validarJWT],postTask)
router.get("/taskID/:id",[validarJWT], getTask_idUser)
router.delete("/taskDelete/:id", [validarJWT], deleteTask)

module.exports = router
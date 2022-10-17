const router = require("express").Router()
const {getTask,postTask, getTask_idUser, deleteTask, updateTask} = require('../controllers/task.controller')
const validarJWT = require("../middlewares/validarJWT")


router.get("/taskAll",getTask)
router.post("/task",[validarJWT],postTask)
router.get("/taskID",[validarJWT], getTask_idUser)
router.put("/taskUpdate/:id",[validarJWT], updateTask)
router.delete("/taskDelete/:id", [validarJWT], deleteTask)

module.exports = router
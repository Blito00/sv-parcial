const router = require("express").Router()
const {
    getTask,
    postTask
} = require('../controllers/task.controller')

router.get("/task",getTask)
router.post("/task",postTask)

module.exports = router
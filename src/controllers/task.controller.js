const Model = require("../models/task.models")

const CtrlTask = {}

CtrlTask.getTask = async (req, res) =>{
try {
    const tarea = await Model.find()
    
        res.json(tarea)
    
    
} catch (error) {
    return res.json({
        msg:`Se ha encontrado un ${error}`
    })
}
} 
CtrlTask.postTask = async (req, res) =>{
    try {
        const {title, description} = req.body
        const newTask = new Model({title, description})
        const task = await newTask.save()
        return res.status(200).json({
            msg: "La tarea se creo correctamente."
        })
    } catch (error) {
        res.json({
            msg: `Se ha encontrado un ${error}`
        })
    }
}




module.exports=CtrlTask
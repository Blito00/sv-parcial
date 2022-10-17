const Model = require("../models/task.models")

const CtrlTask = {}
//Obtener tarea
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
//Obtener tarea por id
CtrlTask.getTask_idUser = async (req, res) => {
    try {
        const userId = req.user._id;
        const Tasks = await Model.find({$and:[{userId},{isActive: true}]})
        .populate('userId',['username', 'email'])
        if(!Tasks.length){
            return res.status(404).json({
                message: 'No se encontraron tareas con ese usuario.'
            });
        }
        return res.json({Tasks})
    } catch (error) {
        return res.status(500).json(
            {
                msg: 'No se pudo obtener las tareas.',
                errorBody: error.message
            }
        )
    }
};
//Crear tarea
CtrlTask.postTask = async (req, res) =>{
    try {
    
        const {title, description} = req.body
        const newTask = new Model({title, description, userId: req.user})
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
//Actualizar tarea
CtrlTask.updateTask = async (req, res) => {
    const id=req.params.id
    try { 
        const {title , description} = req.body;
        await Model.findByIdAndUpdate(id, {title, description})
        return res.status(200).json({
            msg: "Se actualizo correctamente la tarea."
        })
    } catch (error) {
        return res.json({
            msg: `Se ha encontrado un ${error}`
        })
        
    }
}
//Borrar tarea
CtrlTask.deleteTask = async (req, res) => {
    const id=req.params.id
    try {
        await Model.findByIdAndUpdate(id, {isActive: false})
        return res.status(200).json({
            msg: "Se borro correctamente la tarea."
        })
    } catch (error) {
        return res.json({
            msg: `Se ha encontrado un ${error}`
        })
        
    }
}

module.exports = CtrlTask
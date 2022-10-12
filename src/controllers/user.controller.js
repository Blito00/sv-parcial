const UserModel = require('../models/user.models.js');
const ctrl = {}


ctrl.getUser = async (req, res) =>{
    const Users = await UserModel.find()
    return res.json(Users)
    
}

ctrl.postUser = async (req, res) => {
        try {
            const {nombre, apellido, email, password} = req.body
            const newUser = new UserModel({nombre,apellido,email,password})
            const saveUser = await newUser.save()
            return res.status(200).json({
                msg: "El usuario se creó correctamente." + newUser
            })
        } catch (error) {
            res.json({
                msg: `Se ha encontrado un ${error}`
            })
        }
    }

ctrl.putUser = async (req, res) => {
    try {
        const idUser=req.params.idUser
        const {nombre, apellido, email, password} = req.body
        const user = await UserModel.findById(idUser)
        await user.updateOne({nombre, apellido, email, password})
        return res.status(200).json({
            msg: "Se actualizo correctamente el usuario."
        })
    } catch (error) {
        return res.json({
            msg: `Se ha encontrado un ${error}`
        })
        
    }
}

ctrl.deleteUser = async (req, res) => {
    const id=req.params.id
    try {
        
        await UserModel.findByIdAndDelete(id, {isActive: false})
        return res.json({
            msg: "Se elimino correctamente el usuario."
        })
    } catch (error) {
        return res.json({
            msg: `Se ha encontrado un ${error}`
        })
        
    }
}


module.exports = ctrl;
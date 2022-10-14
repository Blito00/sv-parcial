const UserModel = require('../models/user.models.js');
const bcrypt = require("bcrypt")
const ctrl = {}


ctrl.getUser = async (req, res) =>{
    const Users = await UserModel.find()
    return res.json(Users)
    
}

ctrl.postUser = async (req, res) => {
        try {
            const {username, email, password} = req.body 
            const passCrypt = bcrypt.hashSync(password, 10)
            const newUser = new UserModel({username,email,password: passCrypt}) 
            const saveUser = await newUser.save()
            return res.status(200).json({
                msg: "El usuario se creó correctamente."
            })
        } catch (error) {
            console.log(error)
            res.json({
                
                msg: `Se ha encontrado un ${error}`
            })
        }
    }

ctrl.putUser = async (req, res) => {
    try {
        const userId=req.params.userId
        const {username, email, password} = req.body
        const user = await UserModel.findById(userId)
        await UserModel.findByIdAndUpdate(user._id, {username, email, password})
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


module.exports = ctrl
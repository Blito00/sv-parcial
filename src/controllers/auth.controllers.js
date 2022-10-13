const userM = require('../models/user.models')

const generarJWT = require('../helpers/generarJWT')
const bcrypt = require('bcrypt')
const ctrlAuth = {}

ctrlAuth.login = async (req, res) => {
    const {username, password} = req.body
    try {   
        const USER = await userM.findOne({username})
        if (!USER) {
            return res.status(400).json({
                    ok:false,
                    msg:"Error al autenticarse - Usuario no encontrado."
            })
        }
        if(!USER.isActive) {
            return res.status(400).json({
                    ok:false,
                    msg:"Error al autenticarse - Usuario inactivo"
            })
        }
        const validPassword = bcrypt.compareSync(password, USER.password)
        if(!validPassword) {
            return res.status(400).json({
                ok:false,
                msg:"Error al comprobar - Contraseña Incorrecta"
            })
        }
        const token = await generarJWT({uid: USER._id})
        
        return res.json({token});
        
    } catch (error) {
        return res.status(500).json({message:'Error al iniciar sesión',error: error.message || error })/
    }
}

module.exports = ctrlAuth
const userM = require('../models/user.models')

const generarJWT = require('../helpers/generarJWT')
const bcrypt = require('bcrypt')
const ctrlAuth = {}

ctrlAuth.login = async (req, res, next) => {
    try {
        const {username, password} = req.body
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
        }//En caso de que encuentre el usuario y su estado esté en false
        //Verificacion de la contrseña
        const validPassword = bcrypt.compareSync(password, USER.password)
        if(!validPassword) {
            return res.status(400).json({
                ok:false,
                msg:"Error al comprobar - Contraseña Incorrecta"
            })
        }//En caso de que la contraseña no coincida
        const token = await generarJWT({uid: USER._id})//genera el token apartir de la informacion del usuario ._id
        
        return res.json({token});//Retorno exitoso del token
        
    } catch (error) {
        return res.status(500).json({message:'Error al iniciar sesión',error: error.message || error })//Error cuando no pudo iniciar la sesión porque no pudo crearse el token
    }
}

module.exports = ctrlAuth
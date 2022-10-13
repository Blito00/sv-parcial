const jwt = require('jsonwebtoken')
const userModels = require('../models/user.models')

const validarJWT = async (req, res, next) => {
    let token = req.headers.authorization
    if(!token){
        return res.status(401).json({
            msg: 'Error de autenticación  - No hay token en la petición'
        })
    }
try {
    const {userID} = await jwt.verify(token, process.env.SECRET)
    const user = await userModels.findById(userID)

    if (!user){
        return res.status(401).json({
            error: 'Token no válido - El usuario no existe en la DB'
        })
    }
if (!user.isActive) {
    return res.status(401).json({
        msg: 'Token no válido - El usuario no está activo.'
    })
}
req.user = user
next()
} catch (error) {
    console.log(error.msg)
    res.status(401).json({
        msg: 'Error de autenticación - Token no vaido.'
    })
}

}

module.exports = validarJWT


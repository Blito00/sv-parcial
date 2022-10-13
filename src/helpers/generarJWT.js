const jwt = require('jsonwebtoken')

const generarJWT = (uid) => {
    return new Promise((resolve, reject) =>{
        jwt.sign(uid, process.env.SECRET, {
            expiresIn: 60*60
        }, (err, token) => {
            if (err){
                reject ('No se pudo generar el token.')
            }
            resolve(token)
        })
    })
}

module.exports = generarJWT
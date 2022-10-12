const {Schema, model} = require("mongoose")

const newUser = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isActive:{
        type: Boolean,
        default:true
    }
},{
    versionKey:false,
    timestamps:true
})

module.exports = model("user",newUser)
const {Schema, model} = require("mongoose")

const newUser = new Schema({
    username: {
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
newUser.methods.toJSON = function () {
    const { password, _id, ...user} = this.toObject()
    user.uid = _id
    return user
}
module.exports = model("user",newUser)
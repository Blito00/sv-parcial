const{Schema,model} = require("mongoose")
const newTask = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = model("task",newTask)
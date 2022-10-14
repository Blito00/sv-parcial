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
        default: false
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'user'
    },
    isActive: {
        type:Boolean,
        default: true
    }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = model("task",newTask)
const { Schema, model } = require('mongoose')

const taskSchema = new Schema(
    {
        description: {
            type: String,
            required: [true, "Description is required"]
        },
        isCompleted: {
            type: Boolean,
            default: false
        },
        list: [
            {
                type: Schema.Types.ObjectId,
                ref: 'List',
                required: true
            }
        ],
    },
    {
        timestamps: true,
    }

)

const Task = model("Task", taskSchema)
module.exports = Task
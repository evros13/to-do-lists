const { Schema, model } = require('mongoose')

const listSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"]
        },
        author: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true
            }
        ],
    },
    {
        timestamps: true,
    }

)

const List = model("List", listSchema)
module.exports = List
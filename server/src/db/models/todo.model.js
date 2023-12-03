const mongoose = require('mongoose');
const {Schema} = mongoose

const TodoSchema = new Schema({
    task:{
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
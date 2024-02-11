
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vedanshm2001:getmongo%405@cluster0.ygcobcc.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);  
module.exports = {
    todo
}
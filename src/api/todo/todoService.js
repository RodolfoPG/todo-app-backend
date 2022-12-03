const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delet'])
Todo.updateOptions({ new: true, runValidators: true })

module.exports = Todo

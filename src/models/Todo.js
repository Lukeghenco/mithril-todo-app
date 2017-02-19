import m from 'mithril'

let id = 1;

let Todo = {
    list: [
        {
            activity: 'Go Shopping',
            id: id++,
        },
        {
            activity: 'Pick up trash',
            id: id++,
        }
    ],

    current: {},

    newTodo: {},

    load: (id) => {

        Todo.current = Todo.list.find(todo => todo.id === id)
    },

    create: () => {

        Todo.list = Todo.list.concat(Object.assign({}, Todo.newTodo, { id: id++ }))
    },

    update: (currentTodo) => {

        const index = Todo.list.findIndex(todo => todo.id === currentTodo.id)
        Todo.list = [
            ...Todo.list.slice(0, index),
            currentTodo, 
            ...Todo.list.slice(index + 1)
        ]
    },

    delete: (id) => {

        const index = Todo.list.findIndex(todo => todo.id === id)
        Todo.list = [
            ...Todo.list.slice(0, index),
            ...Todo.list.slice(index + 1)
        ]
    },

}

export default Todo

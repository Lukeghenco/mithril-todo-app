import m from 'mithril'
import Todo from '../models/Todo'
import AddTodo from './AddTodo'

export default {
    
    oninit() {
        Todo.loadList
    },

    handleClick(id) {
        Todo.delete(id)
    },

    view() {
        return (
            <div className="todo-list">
                <AddTodo />
                {Todo.list.map((todo) => 
                    <div className="todo-list-item">
                        <a 
                            href={`/edit/${todo.id}`}
                            oncreate={m.route.link}>
                            {todo.activity}
                        </a>
                        <span onclick={() => this.handleClick(todo.id)}> X </span>
                    </div>
                )}
            </div>
        )
    }
}




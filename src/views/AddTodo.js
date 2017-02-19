import m from 'mithril'
import Todo from '../models/Todo'

export default {

    handleActivityChange(event) {
        Todo.newTodo.activity = event.target.value
    },

    handleClick(event) {
      Todo.create()
      Todo.newTodo.activity = ''
    },

    view() {
        return (
            <form>
                <label className="label">New Todo:</label>
                <input
                    className="input" 
                    type="text"
                    value={Todo.newTodo.activity}
                    placeholder="Activity"
                    oninput={this.handleActivityChange} />
                <button 
                    type="submit"
                    className="button"
                    onclick={this.handleClick}>
                    +
                </button>
            </form>
        )
    }
}

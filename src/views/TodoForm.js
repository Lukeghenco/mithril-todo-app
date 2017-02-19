import m from 'mithril'
import Todo from '../models/Todo'

export default {

    oninit(vnode) {
        Todo.load(+vnode.attrs.id)
    },

    handleActivityChange(event) {
        Todo.current.activity = event.target.value
    },

    handleClick() {
        Todo.update(Todo.current)
    },

    view() {
        return (
            <form>
                <label className="label">Activity</label>
                <input 
                    className="input" 
                    type="text" 
                    value={Todo.current.activity}
                    placeholder="Activity"
                    oninput={this.handleActivityChange} />
                <button 
                    type="submit"
                    className="button"
                    onclick={this.handleClick}>
                    Save
                </button>
            </form>
        )
    }
}
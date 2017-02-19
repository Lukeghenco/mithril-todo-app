import m from 'mithril'
import TodoList from './views/TodoList'
import TodoForm from './views/TodoForm'
import Layout from './views/Layout'

m.route(
    document.getElementById('app'),
    "/list", {
        "/list": {
            render: () => {
                return m(Layout, <TodoList />)
            }
        },
        "/edit/:id": {
            render: (vnode) => {
                return m(Layout, <TodoForm id={vnode.attrs.id} />)
            }
        },
    } 
)

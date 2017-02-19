import m from 'mithril'

export default {

    view(vnode) {
        return (
            <main className="layout">
                <nav className="menu">
                    <a 
                        href="/list"
                        oncreate={m.route.link}>
                        Todos
                    </a>
                </nav>
                <section className="main-content">{vnode.children}</section>
            </main>
        )
    }
}
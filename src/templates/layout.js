import * as React from 'react';
import '../assets/styles/layout.scss';
import Nav from '../components/nav/nav.js';

const Layout = props => {
    const {
        pageTitle,
        children
    } = props,
    pages = ['home', 'analysis', 'result'];

    return (
        <React.Fragment>
            <title>{pageTitle}</title>
                <Nav pages={pages} />
            <main>
                <section>
                    {children}
                </section>
            </main>
        </React.Fragment>
    )
};

export default Layout;

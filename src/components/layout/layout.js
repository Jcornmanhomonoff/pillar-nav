import * as React from 'react';
import { Link } from 'gatsby';
import './layout.scss';
import Nav from '../nav/nav.js';

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

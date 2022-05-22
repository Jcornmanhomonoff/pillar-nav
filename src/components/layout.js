import * as React from 'react';
import { Link } from 'gatsby';
import './layout.scss';

const Layout = props => {
    const {
        pageTitle,
        children
    } = props;

    return (
        <div>
            <title>{pageTitle}</title>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
};

export default Layout;

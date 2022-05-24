import * as React from 'react';
import { Link } from 'gatsby';
import { toUpperCase } from '../../assets/scripts/helpers';
import './nav.scss';
import { useRecoilState, RecoilRoot } from 'recoil';

const Nav = props => {
    const {
        pages
    } = props;

    return (
        <nav
            role="navigation"
            className="navbar"
        >
            <ul>
                <li className="logo">
                    <Link to="/">
                        <img src="pillar-logo.png"
                            alt="Pillar Biosciences Logo"
                            height="43"
                            width="125"
                        />
                    </Link>
                </li>
                {pages.map((page, i) => {
                    return (
                        <li key={i}>
                            <Link
                                to={page === "home" ? "/" : `/${page}`}
                                className={window.location.pathname.substring(1) === page ? "active" : (window.location.pathname === "/" && page === "home") ? "active" : null}
                            >
                                {toUpperCase(page)}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
};

export default Nav;

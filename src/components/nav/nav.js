import * as React from 'react';
import { Link } from 'gatsby';
import { toUpperCase } from '../../assets/scripts/helpers';
import './nav.scss';
import { useRecoilValue } from 'recoil';
import {
    selectedOptionState
} from '../../state/state';

const Nav = props => {
    const {
        pages
    } = props;

    const selectedOption = useRecoilValue(selectedOptionState);

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
                                className={`${selectedOption === '' && (page === "analysis" || page === "result") ? 'disabled ' : ''}${window.location.pathname.substring(1) === page ? "active" : (window.location.pathname === "/" && page === "home") ? "active" : ''}`}
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

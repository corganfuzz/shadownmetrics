import { Component, type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import '@cds/core/icon/register.js';
import {
    ClarityIcons,
    vmBugIcon,
    cogIcon,
    idBadgeIcon,
    bookIcon,
    layersIcon,
    codeIcon,
    pluginIcon,
    helpIcon,
    angleDoubleIcon,
} from '@cds/core/icon';

ClarityIcons.addIcons(
    vmBugIcon,
    cogIcon,
    idBadgeIcon,
    bookIcon,
    layersIcon,
    codeIcon,
    pluginIcon,
    helpIcon,
    angleDoubleIcon,
);

interface HomeProps {
    children?: ReactNode;
}

interface HomeState {
    collapsed: boolean;
}

const NAV_LINKS = [
    { to: '/link1', icon: 'id-badge', label: 'Link 1' },
    { to: '/link2', icon: 'book', label: 'Link 2' },
    { to: '/link3', icon: 'layers', label: 'Link 3' },
    { to: '/link4', icon: 'code', label: 'Link 4' },
    { to: '/link5', icon: 'plugin', label: 'Link 5' },
    { to: '/link6', icon: 'help', label: 'Link 6' },
];

export class Home extends Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = { collapsed: false };
    }

    toggle = () => this.setState(prev => ({ collapsed: !prev.collapsed }));

    render() {
        const { collapsed } = this.state;

        return (
            <div className="main-container">

                {/* ── Header ───────────────────────────────────────────── */}
                <header className="header header-6">
                    <div className="branding">
                        <a href="#" className="nav-link">
                            <cds-icon shape="vm-bug"></cds-icon>
                            <span className="title">Project Clarity</span>
                        </a>
                    </div>
                    <form className="search">
                        <label htmlFor="search-input">
                            <input id="search-input" type="text" placeholder="Search for keywords..." />
                        </label>
                    </form>
                    <div className="settings">
                        <a href="#" className="nav-link nav-icon">
                            <cds-icon shape="cog"></cds-icon>
                        </a>
                    </div>
                </header>

                {/* ── Subnav ───────────────────────────────────────────── */}
                <nav className="subnav">
                    <ul className="nav">
                        <li className="nav-item"><a className="nav-link active" href="#">Subnav Link 1</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Subnav Link 2</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Subnav Link 3</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Subnav Link 4</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Subnav Link 5</a></li>
                    </ul>
                </nav>

                {/* ── Content container ────────────────────────────────── */}
                <div className="content-container">

                    {/*
            .clr-vertical-nav          — the nav root (from @clr/ui CSS)
            .is-collapsed              — toggles collapsed state (icons only)
            .has-icons                 — tells CSS that icons are present so
                                         collapsed state shows icon stubs

            .nav-trigger               — the collapse/expand button at the top
              cds-icon shape="angle-double"  — the «« / »» chevron icon

            .nav-content               — wraps all nav links
              .nav-link                — each navigation link
                .nav-icon              — the cds-icon inside the link
                .nav-text              — the label text
          */}
                    <nav className={`clr-vertical-nav has-icons${collapsed ? ' is-collapsed' : ''}`}>

                        {/* Collapse / expand trigger button */}
                        <button
                            type="button"
                            className="nav-trigger"
                            onClick={this.toggle}
                            aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
                        >
                            <cds-icon
                                shape="angle-double"
                                className="nav-trigger-icon"
                                direction={collapsed ? 'right' : 'left'}
                            ></cds-icon>
                        </button>

                        {/* Nav links */}
                        <div className="nav-content">
                            {NAV_LINKS.map(link => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `nav-link${isActive ? ' active' : ''}`
                                    }
                                >
                                    <cds-icon
                                        shape={link.icon}
                                        className="nav-icon"
                                        aria-hidden="true"
                                    ></cds-icon>
                                    <span className="nav-text">{link.label}</span>
                                </NavLink>
                            ))}
                        </div>

                    </nav>

                    {/* ── Page content ───────────────────────────────────── */}
                    <div className="content-area">
                        {this.props.children}
                    </div>

                </div>
            </div>
        );
    }
}
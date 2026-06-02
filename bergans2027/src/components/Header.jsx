import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const PAGES = [
    { path: '/', label: 'Home' },
    { path: '/bach', label: 'Bach Party' },
    { path: '/weddingparty', label: 'Wedding Party' },
    { path: '/wedding', label: 'Wedding Weekend' },
    { path: '/links', label: 'Links' },
]

export default function Header() {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)
    const location = useLocation()

    useEffect(() => {
        function onDoc(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', onDoc)
        return () => document.removeEventListener('mousedown', onDoc)
    }, [])

    return (
        <div className="header-wrapper">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark glass-header">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        The Bergans
                    </Link>

                    <div className="ms-auto position-relative" ref={ref}>
                        <button
                            className="btn btn-outline-light"
                            onClick={() => setOpen(v => !v)}
                        >
                            Menu
                        </button>

                        {open && (
                            <ul
                                className="dropdown-menu show"
                                style={{ position: 'absolute', right: 0 }}
                            >
                                {PAGES.map(page => (
                                    <li key={page.path}>
                                        <Link
                                            to={page.path}
                                            className={`dropdown-item ${location.pathname === page.path
                                                ? 'active'
                                                : ''
                                                }`}
                                            onClick={() => setOpen(false)}
                                        >
                                            {page.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    )
}
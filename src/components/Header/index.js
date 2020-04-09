import React from "react"
import "../Header/style.css"


function Header() {
    return (
        <section id="container">
            <section className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="index.html">Trion Bailey</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <nav className="navbar-toggler-icon"></nav>
                    </button>
                    <nav className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="about.html">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="portfolio.html">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">contact</a>
                            </li>
                        </ul>
                    </nav>
                </nav>
            </section>
        </section>
    );
}

export default Header;
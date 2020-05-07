import React from 'react';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand rounded" href="/" id="logo">Jayson Duff</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item rounded">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
            <li className="nav-item rounded">
              <a className="nav-link" href="/portfolio">Portfolio</a>
            </li>
            <li className="nav-item active rounded">
              <a className="nav-link" href="/about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
};

export default Nav;
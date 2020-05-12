import React from 'react';
import {Link} from 'react-router-dom';
import './footerstyle.css';

function Header(){


    return(
        <div >
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/">Dashboard</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/Aboutus">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
          <div className="intro-heading text-uppercase">Car Rental Services</div>
            <div className="intro-lead-in">It's Nice To Meet You</div>
            <Link className="btn btn-primary btn-xl  text-uppercase js-scroll-trigger" to="/home">See Available Cars</Link>
          </div>
        </div>
      </header>
        </div>
    )
}

export default Header;
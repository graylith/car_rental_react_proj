import React from 'react';
import './footerstyle.css';

function Footer(){
    return(
        <footer id="footer">
        <div className="container">
            <div class="copyright">
                &copy; Copyright <strong>Brand Name</strong>. All Rights Reserved
            </div>
            <div class="credits">
                Designed by ABC
            </div>
        </div>
        </footer>
    )
}

export default Footer;
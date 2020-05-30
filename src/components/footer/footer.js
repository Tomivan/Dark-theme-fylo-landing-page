import React from 'react';
import './footer.css';

function Footer() {
    return(
<footer>
   <div className="footer">
   <img src={require('../../assets/images/logo.svg')} alt="The fylo logo" className="logo"/>
     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
         dolore magna aliqua</p>
   </div>
   <div className="footer">
     <p>+1-543-123-4567</p>
     <p>example@fylo.com</p>
   </div>
   <div className="footer">
     <p>About Us</p>
     <p>Jobs</p>
     <p>Press</p>
     <p>Blog</p>
   </div>
   <div className="footer">
     <p>Contact Us</p>
     <p>Terms</p>
     <p>Privacy</p>
   </div>
</footer>
    );
};

export default Footer
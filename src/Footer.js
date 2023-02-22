import React from "react";
import instagram from "./images/instagram.png"
import facebook from "./images/facebook.png"
import pinterest from "./images/social.png"

const Footer = () => (
  <div className="footer">
<div className="footerPosition">  
<div> <div> <p> NOTRE SERVICE</p> </div>
<div> <p>À PROPOS</p></div>
<div>  <p> Nous contacter </p></div>
</div>
    <div >
     <div> <p className="footerP"> SUIVEZ-NOUS:</p> </div>
    <div className="footerDiv">  
    <div className="white"><img src={instagram} width='40px' height='40px'/> </div>
    <div className="white"> <img src={facebook} width='40px' height='40px'/> </div>
    <div className="white"> <img src={pinterest} width='40px' height='40px'/> </div>
    </div>
    </div>
    </div>


    
  </div>
);

export default Footer;

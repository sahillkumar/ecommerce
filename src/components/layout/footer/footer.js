import React from 'react'
import { FaYoutube,FaFacebookSquare,FaInstagram,FaTwitter,FaLinkedin} from 'react-icons/fa';
import './footer.css'


function Footer() {

     return (
         <footer className="footer">
               <div>
                    <span >Follow us on</span>
                    <nav className="nav">
                         <ul className="social">
                              <li className="footer-icon">
                                   <a href="#"><FaYoutube/></a> 
                              </li>
                              <li className="footer-icon">
                                   <a href="#"><FaFacebookSquare/></a> 
                              </li>
                              <li className="footer-icon">
                                   <a href="#"><FaInstagram/></a> 
                              </li>
                    
                              <li className="footer-icon">
                                   <a href="#"> <FaTwitter/></a> 
                              </li>
                              <li className="footer-icon">
                              <a><FaLinkedin/></a> 
                              </li>
                         </ul>
                    </nav>
                    <hr/>
                    <div>
                         <img src="./images/tree.svg"  className="footer-logo"/>
                    </div>
               </div>
          </footer>
     )
}

export default Footer

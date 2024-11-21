import React from "react";
import "./Footer.css"; // Link to the CSS file

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <h4>Product</h4>
          <ul>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Solutions <span>New</span></a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Releases</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Media kit</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Help centre</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div>
          <h4>Use cases</h4>
          <ul>
            <li><a href="#">Startups</a></li>
            <li><a href="#">Enterprise</a></li>
            <li><a href="#">Government</a></li>
            <li><a href="#">SaaS centre</a></li>
            <li><a href="#">Marketplaces</a></li>
            <li><a href="#">Ecommerce</a></li>
          </ul>
        </div>
        <div>
          <h4>Social</h4>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">AngelList</a></li>
            <li><a href="#">Dribbble</a></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Licenses</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2077 Untitled UI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

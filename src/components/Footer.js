import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Footer = () => {
  return (
    <footer className="bg-white text-black">
    <div className="container">
      <div className="row">
        {/* Column 1 */}
        <div className="col-md-4">
             {/* Image */}
             <img
            src="https://via.placeholder.com/500x200?text=Image"
            alt="Image"
            className="img-fluid"
          />
        </div>
        {/* Column 2 */}
        <div className="col-md-4">
        <div className="text-center">
              <h4>Sitemap</h4>
            </div>
          <div className="row">
            <div className="col-4">
              <p>Text 1</p>
              <p>Text 2</p>
              <p>Text 3</p>
            </div>
            <div className="col-4">
            <p>Text 1</p>
              <p>Text 2</p>
              <p>Text 3</p>
            </div>
            <div className="col-4">
            <p>Text 1</p>
              <p>Text 2</p>
              <p>Text 3</p>
            </div>
          </div>
        </div>
        {/* Column 3 */}
        <div className="col-md-4">
          <h4>Business Address</h4>
          <p>Address Line 1</p>
          <p>Email: example@example.com</p>
          <p>Tel: +123456789</p>
        </div>
      </div>
      
    </div>
     {/* White Line */}
     <div className="container">
        <div className="row">
          <div className="col">
            <hr style={{ backgroundColor: 'white', height: '20px' }} />
          </div>
        </div>
      </div>
    
    {/* Bottom Links */}
    <div className="container">
        <div className="row">
          <div className="col text-center p-3">
            <p>&copy; {new Date().getFullYear()} TEDxARISTIDE Website</p>
          </div>
          <div className="col text-center p-3">
            <a href="#">Cookie Policy</a>
            <span className="mx-2">|</span>
            <a href="#">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#">Terms &amp; Conditions</a>
          </div>
          <div className="col text-center p-3">
            <p>Follow us:</p>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

        
          
  </footer>
  );
};

export default Footer;

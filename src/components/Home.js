// src/components/Home.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './cssCustom/customStyles.css';


function Home () {
  return (
    
    <div>
    

    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://via.placeholder.com/800x400?text=Image+1"
              alt="Image 1"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://via.placeholder.com/800x400?text=Image+2"
              alt="Image 2"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://via.placeholder.com/800x400?text=Image+3"
              alt="Image 3"
              className="d-block w-100"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">

      
      {/* White Line (CSS Background) */}
      <div className="row">
        <div className="col">
          <div
            style={{
              backgroundColor: 'white',
              height: '20px',
              width: '100%',
            }}
          />
        </div>
      </div>
    
      {/* Big Title */}
      <div className="row">
      <div className="col text-center col-md-6">
          <h2></h2>
        </div>
        <div className="col text-center col-md-6">
          <h2>Big Title</h2>
        </div>
      </div>

        {/* White Line (CSS Background) */}
        <div className="row">
        <div className="col">
          <div
            style={{
              backgroundColor: 'white',
              height: '20px',
              width: '100%',
            }}
          />
        </div>
      </div>
      

      

      {/* Main Content */}
      <div className="row">
        <div className="col-md-6">
          {/* Image */}
          <img
            src="https://via.placeholder.com/800x600?text=Image"
            alt="Image"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 col-md-6 d-flex flex-column justify-content-center">
          {/* Right content */}
          <div>
          <h3>Subtitle</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum, urna in tincidunt facilisis, ex mauris tristique urna,
            a congue arcu purus ac nisi.
          </p>
          <p>
            Nulla facilisi. Sed at tortor tristique, eleifend nisi id, dictum
            ligula. Nullam nec sapien arcu. Aliquam quis lectus vitae elit
            fringilla lacinia nec at elit.
          </p>
          {/* Learn More Button */}
          <div className="text-center mt-3">
            <button className="btn custom-button">Learn More</button>
          </div>
          </div>
        </div>
      </div>
    </div>

     {/* White Space */}
     <div style={{ height: '50px' }}></div>
   {/* Responsive Block */}
   <div className="container-fluid bg-black text-white d-flex align-items-center justify-content-center p-0" style={{ height: '307px', margin: '0 -15px' }}>
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-left p-4">
            <h2 className="text-center" style={{ fontSize: '15px', lineHeight: '1.5', marginBottom: '15px' }}>
              COUNTER TILL TEDxARISTIDE DEMETRIADE Event
            </h2>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-right p-4">
            <button className="btn custom-button">Buy Now</button>
          </div>
        </div>
      </div>


              {/* New Section */}
      <div className="container-fluid bg-white text-black d-flex align-items-center justify-content-center p-0" style={{ height: '307px', margin: '0 -15px' }}>
        <div className="row">
          <div className="col-lg-12 d-flex flex-column justify-content-center p-4">
            <h2 className="text-center" style={{ fontSize: '24px', marginBottom: '15px' }}>
              ABONAȚI-VĂ LA NEWSLETTER
            </h2>
            <div className="text-center">
              <input type="email" placeholder="Insert email address..." className="form-control text-center" style={{ backgroundColor: '#D9D9D9' }} />
              
            </div>
          </div>
        </div>
      </div>


      
    </div>

    

    
  

  );
};

export default Home;

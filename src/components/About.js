// src/components/About.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function About () {
  return (
    <><div className="container py-5">
      <div className="row">
        <div className="col text-center py-5">
          <h1>About Us</h1>
          <p>
            We are a passionate group of individuals committed to creating impactful presentations
            for our audience. Replace this with information about your organization or event.
          </p>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            <div className="mb-4">
              <h1>Section 1</h1>
              <p>
                This is the first section's description. Replace with your content.
              </p>
            </div>
            <div className="mb-4">
              <h1>Section 2</h1>
              <p>
                This is the second section's description. Replace with your content.
              </p>
            </div>
            <div>
              <h1>Section 3</h1>
              <p>
                This is the third section's description. Replace with your content.
              </p>
            </div>
          </div>
          {/* Right Column */}
          <div className="col-md-6">
            <img src="https://via.placeholder.com/820x560" alt="Empty Image" className="img-fluid" />
          </div>
        </div>
      </div>
   

    </div>
    
     
       {/* Responsive Block */}
    <div className="container-fluid bg-black text-white d-flex align-items-center justify-content-center p-0 py-5" style={{ height: '307px', margin: '0 -15px' }}>
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
      {/* White Space */}
     <div style={{ height: '100px' }}></div>
      
   {/* Testimonials */}
   <div className="text-center my-5">
        <h1>Testimonials</h1>
          {/* White Space */}
     <div style={{ height: '100px' }}></div>
        <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Placeholder Testimonials */}
            {[...Array(10)].map((_, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="d-flex justify-content-around">
                  {[0, 1, 2].map(subIndex => (
                    <div className="text-center" key={subIndex}>
                      <img src="https://via.placeholder.com/108x108" alt={`Testimonial ${index + 1}`} />
                      <h2>Testimonial {index + 1}</h2>
                      <p>
                        This is a testimonial from a satisfied customer. Replace with your content.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
        {/* White Space */}
     <div style={{ height: '100px' }}></div>
    
     </>
     
      
    
  );
};

export default About;

// src/components/Speakers.js
import React from 'react';

function Speakers  () {
  return (
    
      <div className="container py-5 my-5"> {/* Add my-5 class for vertical margin */}
        <div className="row">
          {/* Left Column - Speaker 1 */}
          <div className="col-md-6">
            <div className="text-center mb-4">
              <h1>Speaker 1</h1>
            </div>
            <div>
              <h2>Subheading</h2>
              <p>
                This is a description about Speaker 1. Replace with your content.
              </p>
            </div>
          </div>
          
          {/* Right Column - Speaker 1 Image */}
          <div className="col-md-6">
            <img src="https://via.placeholder.com/748x593" alt="Speaker Placeholder" className="img-fluid" />
          </div>
        </div>
  
        <hr className="my-5" />
  
        <div className="row">
          {/* Left Column - Speaker 2 Image */}
          <div className="col-md-6">
            <img src="https://via.placeholder.com/748x593" alt="Speaker Placeholder" className="img-fluid" />
          </div>
          
          {/* Right Column - Speaker 2 */}
          <div className="col-md-6">
            <div className="text-center mb-4">
              <h1>Speaker 2</h1>
            </div>
            <div>
              <h2>Subheading</h2>
              <p>
                This is a description about Speaker 2. Replace with your content.
              </p>
            </div>
          </div>
        </div>
  
        <hr className="my-5" />
  
        <div className="row">
          {/* Left Column - Speaker 3 */}
          <div className="col-md-6">
            <div className="text-center mb-4">
              <h1>Speaker 3</h1>
            </div>
            <div>
              <h2>Subheading</h2>
              <p>
                This is a description about Speaker 3. Replace with your content.
              </p>
            </div>
          </div>
          
          {/* Right Column - Speaker 3 Image */}
          <div className="col-md-6">
            <img src="https://via.placeholder.com/748x593" alt="Speaker Placeholder" className="img-fluid" />
          </div>
        </div>
      </div>
  );
};

export default Speakers;

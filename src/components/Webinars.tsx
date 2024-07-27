import React from "react";
<link rel='stylesheet' href='src\app\globals.css'></link>

const Webinars = () => {
  return (
    <section className="webinars-section">
      <div className="webinars-content">
        <h2 className="webinars-title">Upcoming Events</h2>
        <div className="webinars-grid">
          <div className="webinar-card">
            <img
              src="./photos/Webinar1.jpg"
              className="webinar-image"
              alt="Webinar 1"
            />
           
          </div>
          <div className="webinar-card">
            <img
              src="./photos/Webinar2.jpg"
              className="webinar-image"
              alt="Webinar 2"
            />
            
          </div>
          {/* Add more webinar cards as needed */}
        </div>
      </div>
    </section>
  );
};
export default Webinars;

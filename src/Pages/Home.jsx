import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import img from '../assets/hero.jpg';

const Home = () => {
  return (
    <section className="py-5 bg-light d-flex align-items-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="fw-bold display-4 mb-3">
              Welcome to <span className="text-primary">YourCompany</span>
            </h1>
            <p className="lead text-muted mb-4">
              We deliver high-quality web & mobile solutions to help your business grow.  
              Build, scale, and succeed with us.
            </p>
            <div>
              <a href="#services" className="btn btn-primary btn-lg me-3">
                <i className="bi bi-lightning-charge-fill me-2"></i> Get Started
              </a>
              <a href="#contact" className="btn btn-outline-primary btn-lg">
                <i className="bi bi-envelope-fill me-2"></i> Contact Us
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center mt-5 mt-md-0">
            <img
              src={img}
              alt="Hero illustration"
              className="img-fluid rounded-4 shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

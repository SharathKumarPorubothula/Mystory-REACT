import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Services = () => {
  const services = [
    {
      icon: 'bi-code-slash',
      title: 'Web Development',
      description: 'Building fast, responsive, and dynamic websites using the latest technologies.',
    },
    {
      icon: 'bi-phone',
      title: 'Mobile Apps',
      description: 'Creating user-friendly and robust mobile applications for Android and iOS.',
    },
    {
      icon: 'bi-cloud-upload',
      title: 'Cloud Deployment',
      description: 'Deploying and scaling your projects securely on the cloud with best practices.',
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Services</h2>
          <p className="text-muted">We provide high-quality solutions tailored to your needs.</p>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="card p-4 text-center service-card h-100 shadow-sm">
                <div className="mb-3">
                  <i className={`${service.icon} service-icon`} style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
                </div>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-file-contract',
      title: 'Legal Advice and Pleadings',
      description: 'Detailed legal advice and comprehensive pleadings preparation for civil cases.'
    },
    {
      icon: 'fas fa-gavel',
      title: 'Court Appearances',
      description: 'Expert advocacy in trial courts, High Court, and Supreme Court of India.'
    },
    {
      icon: 'fas fa-balance-scale',
      title: 'Appeals and SLPs',
      description: 'Specialized drafting and filing of appeals, revisions, and special leave petitions.'
    }
  ];

  return (
    <section id="practice" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Scope of Services</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

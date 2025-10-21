import React from 'react';
import './SpecializedServices.css';

const SpecializedServices = () => {
  const specializedServices = [
    {
      title: 'Legal Bonds & Agreements',
      items: [
        'Indemnity bonds',
        'Partnership deeds',
        'Mortgages and trust deeds'
      ]
    },
    {
      title: 'Property Documents',
      items: [
        'General Power of Attorneys',
        'Special Power of Attorneys',
        'Property transfer deeds'
      ]
    },
    {
      title: 'Organizational Documents',
      items: [
        'MOUs and MOAs',
        'NGO constitutions',
        'Tender notices'
      ]
    },
    {
      title: 'Wills & Deeds',
      items: [
        'Legally sound wills',
        'Sale agreements',
        'Settlement deeds'
      ]
    }
  ];

  return (
    <section className="specialized-services">
      <div className="container">
        <div className="section-header">
          <h2>Specialized Drafting Services</h2>
        </div>
        <div className="specialized-grid">
          {specializedServices.map((service, index) => (
            <div key={index} className="specialized-item">
              <h4>{service.title}</h4>
              <ul>
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedServices;

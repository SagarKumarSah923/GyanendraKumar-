import React from 'react';
import './PracticeAreas.css';

const PracticeAreas = () => {
  const practiceAreas = [
    {
      icon: 'fas fa-money-bill-wave',
      title: 'Money Recovery & Property',
      description: 'Debt recovery, estate management, and property conflicts'
    },
    {
      icon: 'fas fa-home',
      title: 'Partition & Injunction',
      description: 'Property division and injunction matters'
    },
    {
      icon: 'fas fa-child',
      title: 'Guardianship & Custody',
      description: 'Guardian and Wards Act matters'
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Succession Matters',
      description: 'Probate, succession certificates, and letters of administration'
    },
    {
      icon: 'fas fa-vote-yea',
      title: 'Election Disputes',
      description: 'Election disputes and MACT claims'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Service Law',
      description: 'CAT matters and employment disputes'
    }
  ];

  return (
    <section id="proficiency" className="practice-areas">
      <div className="container">
        <div className="section-header">
          <h2>Types of Civil Suits and Proceedings</h2>
        </div>
        <div className="practice-grid">
          {practiceAreas.map((area, index) => (
            <div key={index} className="practice-item">
              <i className={area.icon}></i>
              <h4>{area.title}</h4>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;

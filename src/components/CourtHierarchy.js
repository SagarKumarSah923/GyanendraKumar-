import React from 'react';
import './CourtHierarchy.css';

const CourtHierarchy = () => {
  const courtLevels = [
    {
      icon: 'fas fa-gavel',
      title: 'Supreme Court',
      description: 'Highest appellate authority'
    },
    {
      icon: 'fas fa-balance-scale',
      title: 'High Court',
      description: 'Writ petitions & oversight'
    },
    {
      icon: 'fas fa-building',
      title: 'District Courts',
      description: "Civil Judge's Court"
    },
    {
      icon: 'fas fa-home',
      title: 'Small Causes',
      description: 'Initial proceedings'
    }
  ];

  return (
    <section className="court-hierarchy">
      <div className="container">
        <div className="section-header">
          <h2>Court Hierarchy and Jurisdiction</h2>
        </div>
        <div className="hierarchy-content">
          <div className="hierarchy-text">
            <h3>Court Structure in Delhi</h3>
            <p>
              Civil cases in Delhi follow a structured hierarchy, progressing from lower courts 
              to higher appellate forums. The journey typically begins at the Court of Small Causes, 
              followed by the Civil Judge's Court and District Courts.
            </p>
            <p>
              From there, cases may proceed to the Delhi High Court and, ultimately, to the Supreme 
              Court of India if appeals are required.
            </p>
          </div>
          <div className="court-levels">
            {courtLevels.map((level, index) => (
              <div key={index} className="court-level">
                <i className={level.icon}></i>
                <h4>{level.title}</h4>
                <p>{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourtHierarchy;

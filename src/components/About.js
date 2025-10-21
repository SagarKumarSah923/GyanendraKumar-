import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const counters = document.querySelectorAll('.stat h3');
    
    counters.forEach(counter => {
      const target = parseInt(counter.textContent.replace(/\D/g, ''));
      const increment = target / 100;
      let current = 0;
      
      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.textContent = Math.ceil(current) + (counter.textContent.includes('%') ? '%' : '+');
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + (counter.textContent.includes('%') ? '%' : '+');
        }
      };
      
      updateCounter();
    });
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Advocate Gayendra Kumar</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <div className="about-image">
              <img 
                src="/images/advocate-gayendra-kumar.jpg" 
                alt="Advocate Gayendra Kumar - Civil Lawyer in Delhi"
                className="advocate-photo"
              />
            </div>
            <p>
              With years of experience, the firm handles both original and appellate cases, 
              often dealing with complex and high-stakes litigation. Their proficiency extends 
              to managing cases that necessitate the engagement of senior advocates for strategic 
              legal representation.
            </p>
            <p>
              The firm is known for its meticulous approach to litigation, its expertise in law, 
              and its ability to navigate the intricacies of India's judicial system.
            </p>
          </div>
          <div className="about-stats" ref={statsRef}>
            <div className="stat">
              <h3>500+</h3>
              <p>Cases Won</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

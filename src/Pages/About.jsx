import React from 'react';
import './About.css';

function About() {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          {/* Card 1: Introduction with margin-top */}
          <div className="col-12 mb-4 mt-5">
            <div className="card shadow-sm">
              <div className="card-body bg-light">
                {/* Image with circular shape */}
                <div className="text-center mb-3">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfAIAm5Cj8PjSgMY3yZGLu-KR647QL7DsJPgwJt1SMj0HAc0aLvK0gF8xiCA&s" 
                    alt="Krishna Dua" 
                    className="img-fluid rounded-circle" 
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
                  />
                </div>
                <h5 className="card-title text-primary">Hi, I'm Krishna Dua</h5>
                <p className="card-text text-muted">
                  I am a multifaceted developer with a strong foundation in Python. My expertise spans across full-stack development, data science, data analysis, and Flutter app development. I constantly strive to expand my knowledge and skills in the field. Always eager to tackle new challenges, I seek opportunities to apply my expertise effectively and make significant contributions to the tech industry.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: About Me */}
          <div className="col-12 mb-4">
            <div className="card shadow-sm">
              <div className="card-body bg-light">
                <h5 className="card-title text-success">About Me</h5>
                <p className="card-text text-dark">
                  Krishna Dua, a college student at St. Andrews Institute of Technology and Management, is currently pursuing a BCA (Bachelor of Computer Applications) degree.
                </p>
                <ul className="list-unstyled">
                  <li><strong>Current Semester Percentage:</strong> 80%</li>
                  <li><strong>Course Duration:</strong> 2022 - 2025</li>
                  <li><strong>Roles:</strong> Python Developer, Software Developer, Web Developer, App Developer, Data Analyst, ML Enthusiast</li>
                </ul>
                <p className="text-dark">
                  I have a strong passion for technology and continuously strive to expand my knowledge and skills in the field. I am always looking for new challenges and opportunities to apply my expertise and make meaningful contributions.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Description */}
          <div className="col-12 mb-4">
            <div className="card shadow-sm">
              <div className="card-body bg-light">
                <h5 className="card-title text-info">Description</h5>
                <p className="card-text text-dark">
                  Hi, I'm Krishna Dua. I am a multifaceted developer with a strong foundation in Python. My expertise spans across full-stack development, data science, data analysis, and Flutter app development.
                </p>
                <p className="card-text text-dark">
                  Krishna constantly strives to expand knowledge and skills in the field. Always eager to tackle new challenges, Krishna seeks opportunities to apply expertise effectively and make significant contributions to the tech industry.
                </p>
                <p className="card-text text-dark">
                  Krishna's professional journey encompasses versatile roles in software development, particularly in Python and web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

import React from 'react'
import './laboralexperience.css'

function LaboralExperience() {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex flex-column align-items-center col-12 col-lg-12 mb-3">
          <h2 className="mt-5 mt-md-3 pt-md-3 mt-lg-5 pt-lg-5">Experience</h2>
          <div className="timeline">
            <ul>
              <li>
                <div className="timeline-card">
                    <h2>ROLLING CODE SCHOOL </h2>
                    <h4>Tucumán, Argentina | 2021 - Actually</h4>
                    <p>Tutor - Stack MERN</p>
                  </div>
              </li>
              <li>
                <div className="timeline-card">
                  <h2>ROLLING CODE STUDIO</h2>
                  <h4>Tucumán, Argentina | 2021 - Actually</h4>
                  <p>Developer</p>
                </div>
              </li>
              <li>
                <div className="timeline-card">
                  <h2>TODO1 SERVICES INC.</h2>
                  <h4>Colombia | 2021 - Actually</h4>
                  <p>Frontend Developer</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LaboralExperience

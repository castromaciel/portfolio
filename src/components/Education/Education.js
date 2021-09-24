import React from 'react'
import './education.css'

function Education() {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex flex-column align-items-center col-12 col-lg-12">
          <h2 className="mt-5 mt-md-3 pt-md-3 mt-lg-5 pt-lg-5">Education</h2>
          <div className="timeline">
            <ul>
              <li>
                <div className="timeline-card">
                  <h2>Escuela Secundaria</h2>
                  <h3>Jujuy, Argentina | 2013 - 2018</h3>
                  <p>Técnico Electrónico</p>
                </div>
              </li>
              <li>
                <div className="timeline-card">
                  <h2>Universidad Nacional de Tucumán</h2>
                  <h3>Tucumán, Argentina | 2019 - Actually</h3>
                  <p>Ingeniería Biomédica</p>
                </div>
              </li>
              <li>
                <div className="timeline-card">
                  <h2>Rolling Code School</h2>
                  <h3>Tucumán, Argentina | 2021 - Actually</h3>
                  <p>Fullstack Developer</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Experiencia laboral */}
        {/* <div className="d-flex flex-column align-items-center col-12 col-lg-6">
          <h2 className="mt-md-3 pt-md-3 mt-lg-4 pt-lg-5">Experience</h2>
          <div className="timeline">
            <ul>
              <li>
                <div className="timeline-card">
                  <h2>Facebook</h2>
                  <h3>Miami, USA | 2018 - Presente</h3>
                  <p>Web developer</p>
                </div>
              </li>
              <li>
                <div className="timeline-card">
                  <h2>Tesla</h2>
                  <h3>California, USA | 2019 - Presente</h3>
                  <p>Scrum Master</p>
                </div>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Education

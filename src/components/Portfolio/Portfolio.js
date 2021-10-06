import React from 'react'
import './portfolio.css'
import p1hlc from '../../assets/img/p1hlc.jpeg'
import p2ug from '../../assets/img/p2ug.jpeg'
import html from '../../assets/img/html5.png'
import css from '../../assets/img/css3.png'
import bootstrap from '../../assets/img/bootstrap.png'
import javascript from '../../assets/img/js2.png'


function Portfolio() {
  return (
    <div className="container">
      <h2 className="mt-5 pt-4 pt-md-5 mb-3 title">Portfolio</h2>
      <div className="row mb-3">
        <div className="col-12 col-md-12 col-lg-6 col-xl-6 px-3 mt-3">
          <div className="card pb-3">
            <img src={p1hlc} className="card-img-top" width="100" alt="Hotel Las carreras" />
            <div className="card-body">
              <h4 className="card-title">Hotel Las Carreras </h4>
            </div>
            <ul className="d-flex justify-content-evenly align-items-center list-unstyled my-0">
              <li>
                <a href="https://github.com/castromaciel/hotel-las-carreras" target="_blank" rel="noreferrer" className="btn-portfolio text-uppercase text-decoration-none text-dark"><i className="me-1 bi bi-github"></i>Github</a>
              </li>
              <li>
                <a href="https://hotel-las-carreras.netlify.app/" target="_blank" rel="noreferrer" className="btn-portfolio text-uppercase text-decoration-none text-dark"><i className="me-1 bi bi-eye-fill"></i>View Page</a>
              </li>
              <li className=" accordion" id="accordionExample">
                <h2 class="accordion-header" id="headingOne">
                  <button className="btn-portfolio-more accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  </button>
                </h2>
              </li>
            </ul>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body ">
                <p className="m-0 p-0">Website of the 'Hotel Las Carreras'. It was designed and developed by me and a group of students from 'Rolling Code School'.</p>
                <div className="row justify-content-center mt-3">
                  <img src={html} className="col-2" alt="HTML5"/>
                  <img src={css} className="col-2" alt="CSS3"/>
                  <img src={bootstrap} className="col-2" alt="BOOTSTRAP"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6 col-xl-6 px-3 mt-3">
          <div className="card pb-3">
            <img src={p2ug} className="card-img-top" width="100" alt="Undefined Games" />
            <div className="card-body">
              <h4 className="card-title">Undefined Games</h4>
            </div>
            <ul className="d-flex justify-content-evenly align-items-center list-unstyled my-0">
              <li>
                <a href="https://github.com/castromaciel/undefined" target="_blank" rel="noreferrer" className="btn-portfolio text-uppercase text-decoration-none text-dark"><i className="me-1 bi bi-github"></i>Github</a>
              </li>
              <li title="Coming soon">
                <a href="/" target="_blank" rel="noreferrer" className="btn-portfolio disabled text-uppercase text-decoration-none text-dark" aria-disabled="true">
                  <i className="me-1 bi bi-eye-fill"></i>View Page</a>
              </li>
              <li className="accordion" id="accordionExample">
                <h2 class="accordion-header" id="headTwo">
                  <button className="btn-portfolio-more accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  </button>
                </h2>
              </li>
            </ul>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body ">
                <p className="m-0 p-0">'Undefined Games' is a video game website. It was made for the presentation of the 2nd project of 'Rolling Code School'.</p>
                <div className="row justify-content-center mt-3">
                  <img src={html} className="col-2" alt="HTML5"/>
                  <img src={css} className="col-2" alt="CSS3"/>
                  <img src={bootstrap} className="col-2" alt="BOOTSTRAP"/>
                  <img src={javascript} className="col-2" alt="Javascript"/>

                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="col-12 col-md-12 col-lg-6 col-xl-6 px-3 mt-3"></div>
        <div className="col-12 col-md-12 col-lg-6 col-xl-6 px-3 mt-3"></div>
      </div>
    </div>
  )
}

export default Portfolio

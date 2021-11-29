import React from 'react'
import './portfolio.css'
import p1hlc from '../../assets/images/p1hlc.jpeg'
import p3pa from '../../assets/images/p3pa.jpeg'
import p2ug from '../../assets/images/p2ug.jpeg'
import p4pcm from '../../assets/images/p4pcm.jpeg'
import html from '../../assets/images/html5.png'
import css from '../../assets/images/css3.png'
import bootstrap from '../../assets/images/bootstrap.png'
import javascript from '../../assets/images/js2.png'
import reactjs from '../../assets/images/react.png'
import pokeapi from '../../assets/images/poke-api.png'
import emailjs from '../../assets/images/emailjs.png'
import rhf from '../../assets/images/react-hook-form.jpg'

function Portfolio() {
  return (
    <div className="container">
      <h2 className="mt-5 pt-4 pt-md-5 mb-3 title">Portfolio</h2>
      <div className="row mb-3">
        {/* p1hlc */}
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
        {/* p2ug */}
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
        {/* p3pa */}
        <div className="col-12 col-md-12 col-lg-6 col-xl-6 px-3 mt-3">
          <div className="card pb-3">
            <img src={p3pa} className="card-img-top" width="100" alt="Pokemon" />
            <div className="card-body">
              <h4 className="card-title">Pokémon</h4>
            </div>
            <ul className="d-flex justify-content-evenly align-items-center list-unstyled my-0">
              <li>
                <a href="https://github.com/castromaciel/pokedex" target="_blank" rel="noreferrer" className="btn-portfolio text-uppercase text-decoration-none text-dark"><i className="me-1 bi bi-github"></i>Github</a>
              </li>
              <li>
                <a href="https://pokedex-cmlr.netlify.app/" target="_blank" rel="noreferrer" className="btn-portfolio text-uppercase text-decoration-none text-dark" aria-disabled="true">
                  <i className="me-1 bi bi-eye-fill"></i>View Page</a>
              </li>
              <li className="accordion" id="accordionExample">
                <h2 class="accordion-header" id="headFour">
                  <button className="btn-portfolio-more accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  </button>
                </h2>
              </li>
            </ul>
            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headFour" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body ">
                <p className="m-0 p-0">Web page that shows the pokemons from the api 'pokeapi.co'. This page was designed to practice Fetch and API consumption.</p>
                <div className="row justify-content-center mt-3">
                  <img src={reactjs} className="col-2" alt="Reactjs"/>
                  <img src={pokeapi} className="col-4" alt="Poke Api"/>
                  <img src={bootstrap} className="col-2" alt="BOOTSTRAP"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* p4pcm */}
        <div className="col-12 col-md-12 col-lg-6 col-xl-6 px-3 mt-3">
          <div className="card pb-3">
            <img src={p4pcm} className="card-img-top" width="100" alt='Portfolio' />
            <div className="card-body">
              <h4 className="card-title">Portfolio Web</h4>
            </div>
            <ul className="d-flex justify-content-evenly align-items-center list-unstyled my-0">
              <li>
                <a href="https://github.com/castromaciel/portfolio" target="_blank" rel="noreferrer" className="btn-portfolio text-uppercase text-decoration-none text-dark"><i className="me-1 bi bi-github"></i>Github</a>
              </li>
              <li>
                <a href="https://castromaciellr.netlify.app/" target="_blank" rel="noreferrer" className="btn-portfolio text-uppercase text-decoration-none text-dark">
                  <i className="me-1 bi bi-eye-fill"></i>View Page</a>
              </li>
              <li className="accordion" id="accordionExample">
                <h2 class="accordion-header" id="headThree">
                  <button className="btn-portfolio-more accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  </button>
                </h2>
              </li>
            </ul>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body ">
                <p className="m-0 p-0">My current portfolio made with ReactJs and Bootstrap. Also I used react-hook-form and emailjs for 'Contact me' section.</p>
                <div className="row justify-content-center mt-3">
                  <img src={reactjs} className="col-2" alt="React"/>
                  <img src={bootstrap} className="col-2" alt="Bootstrap"/>
                  <img src={rhf} className="col-2" alt="React-Hook-Form"/>
                  <img src={emailjs} className="col-2" alt="EmailJS"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
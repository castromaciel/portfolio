import React from 'react'
import './about.css'
import curriculum from '../../assets/static/Castromaciel-CV.pdf'
import btsSkill from '../../assets/images/bootstrap.png'
import cssSkill from '../../assets/images/css3.png'
import gitSkill from '../../assets/images/git.png'
import htmlSkill from '../../assets/images/html5.png'
import jnSkill from '../../assets/images/jupyter-notebook.png'
import jsSkill from '../../assets/images/js2.png'
import pySkill from '../../assets/images/python.png'
import nodeSkill from '../../assets/images/nodejs2.png'
import photoMe from '../../assets/images/Me.JPG'
import reactSkill from '../../assets/images/react.png'
import mongodbSkill from '../../assets/images/mongodb.png'

function About() {
  return (
    <div className="container">
      <div className="row">
        {/* About Me */}
        <div className="d-flex flex-column align-items-center col-12 col-lg-6">
          <h2 className="mt-5 pt-4 pt-md-5 mb-3 title">About me</h2>
          <img src={photoMe} alt="Maciel" width="256" className="photoAbout mt-2 "/>
          <p className="fs-4 p-3">My name is Castro Maciel and I'm 21 years old. I'm a student of Biomedical Engineering at Universidad Nacional de Tucumán and Fullstack Student at Rolling Code School.</p>
          <a href={curriculum} className="align-self-end m-3 fs-4 btn bi bi-file-earmark-pdf" download="Castromaciel-CV" title="Castromaciel-CV.pdf">Download Cv</a>
        </div>
        {/* Skills */}
        <div className="d-flex flex-column align-items-center col-12 col-lg-6">
          <h2 className="mt-3 mt-md-3 pt-md-3 mt-lg-5 pt-lg-5 mb-3 title">Skills</h2>
          {/* Iconos */}
          <div className="w-100 p-3 bgSkills">
            <div className="row">
              <div className="col-4">
                <div className="d-flex flex-column align-items-center box m-1">
                  <img src={htmlSkill} alt="html" className="mt-2" width="80"/>
                  <h5 className="mt-1 text-center">HTML5</h5>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column align-items-center box m-1 ">
                  <img src={cssSkill} alt="CSS3" className="mt-2" width="80"/>
                  <h5 className="mt-1 text-center">CSS3</h5>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column align-items-center box m-1">
                  <img src={jsSkill} alt="Javascript" className="mt-2" width="80"/>
                  <h5 className="mt-1 text-center">Javascript</h5>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column align-items-center box m-1">
                  <img src={btsSkill} alt="Bootstrap" className="mt-2" width="80"/>
                  <h5 className="mt-1 text-center">Bootstrap</h5>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column align-items-center box m-1">
                  <img src={reactSkill} alt="ReactJs" className="mt-2" width="80"/>
                  <h5 className="mt-1 text-center">ReactJs</h5>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column align-items-center box m-1">
                  <img src={nodeSkill} alt="NodeJs" className="mt-2" width="80"/>
                  <h5 className="mt-1 text-center">NodeJs</h5>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column align-items-center box m-1">
                  <img src={mongodbSkill} alt="Mongodb" className="mt-2" width="80"/>
                  <h5 className="mt-1 text-center">MongoDB</h5>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column align-items-center box m-1">
                  <img src={pySkill} alt="python" className="mt-2" width="80"/>
                  <h5 className="mt-1 text-center">Python</h5>
                </div>
              </div>
              <div className="col-4">
                <div className=" d-flex flex-column align-items-center box m-1">
                  <img src={jnSkill} alt="jupyter notebook" className="mt-2" width="80"/>
                  <h5 className="mt-1 text-center ">Jupyter Notebook</h5>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column align-items-center box m-1">
                  <img src={gitSkill} alt="github" className="mt-2" width="80"/>
                  <h5 className="mt-1 text-center">Github</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

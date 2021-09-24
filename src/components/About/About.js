import React from 'react'
import './about.css'
import btsSkill from '../../assets/img/bootstrap.png'
import cssSkill from '../../assets/img/css3.png'
import gitSkill from '../../assets/img/git.png'
import htmlSkill from '../../assets/img/html5.png'
import jnSkill from '../../assets/img/jupyter-notebook.png'
import jsSkill from '../../assets/img/js2.png'
import pySkill from '../../assets/img/python.png'
import nodeSkill from '../../assets/img/nodejs2.png'
import photoMe from '../../assets/img/Me.JPG'
import reactSkill from '../../assets/img/react.png'
import mongodbSkill from '../../assets/img/mongodb.png'

function About() {
  return (
    <div className="container">
      <div className="row">
        {/* About Me */}
        <div className="d-flex flex-column align-items-center col-12 col-lg-6">
          <h2 className="mt-5 pt-4 pt-md-5 mb-3 title">About me</h2>
          <img src={photoMe} alt="Maciel" width="256" className="photoAbout mt-2 "/>
          <p className="fs-4 p-3">My name is Castro Maciel and I'm 21 years old. I'm a student of Biomedical Engineering at Universidad Nacional de Tucumán and Fullstack Student at Rolling Code School.</p>
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

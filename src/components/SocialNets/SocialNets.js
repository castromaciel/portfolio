import React from 'react'
import './socialNets.css'
import { Link } from 'react-router-dom'


function SocialNets() {
  return (
    <div className="heroNets">
      <ul className="d-flex justify-content-lg-end justify-content-center socialNet">
        <li className="mt-2 pt-1 me-4 mx-4">
            <Link to="/contact" title="Send email"><i className="bi bi-envelope-fill"></i></Link>
          </li>
        <li className="mt-2 pt-1 mx-4">
          <a href="https://www.linkedin.com/in/castromaciel-00/" title="/in/castromaciel-00" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
        <li className="mt-2 pt-1 mx-4">
          <a href="https://github.com/castromaciel" title="/castromaciel" target="_blank" rel="noreferrer">
            <i className="bi bi-github"></i>
          </a>
        </li>
        <li className="mt-2 pt-1 mx-4">
          <a href="https://www.instagram.com/castromaciellr/" title="/castromaciellr" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
        </li>
      </ul>
      <div className="mx-4 text-white d-flex flex-column align-items-center">
        <hr className="my-1 w-100"/>
        <p className="mb-2 p-0 text-center">Developed and designed by Castro Maciel ©2021. All rights reserved.</p>
      </div>
    </div>
  )
}

export default SocialNets

import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className='bgFooter'>
        <ul className="d-flex justify-content-lg-end justify-content-center socialNet">
          <li className="mt-1 pt-1 mx-4 align-self-start">
            <Link to="/contact" title="Send email"><i className="bi bi-envelope-fill"></i></Link>
          </li>
          <li className="mt-1 pt-1 mx-4">
            <a href="https://www.linkedin.com/in/castromaciel-00/" target="_blank" rel="noreferrer" title="/castromaciel-00">
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
          <li className="mt-1 pt-1 mx-4">
            <a href="https://github.com/castromaciel" target="_blank" rel="noreferrer" title="/castromaciel">
              <i className="bi bi-github"></i>
            </a>
          </li>
          <li className="mt-1 pt-1 mx-4">
            <a href="https://www.instagram.com/castromaciellr/" target="_blank" rel="noreferrer" title="/castromaciellr">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
        </ul>
        <div className="mx-4 text-white d-flex flex-column align-items-center">
          <hr className="my-1 w-100"/>
          <p className="mb-2 p-0 text-center">Developed and designed by Castro Maciel ©2021. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import { NavLink } from 'react-router-dom'
import './error404.css'
function Error404() {
  return (
    <div className=''>
      <div className="error404">
        <div className="card-error d-flex flex-column justify-content-center align-items-center">
          <h4>Sorry, page not found</h4>
          <div>
            <h1>Error 404.</h1>
            <hr className="pt-1 w-100"/>
          </div>
          <NavLink exact to='/' className="fs-4">Back to HomePage</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Error404

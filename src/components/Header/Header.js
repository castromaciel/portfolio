import React from 'react'
import { Link } from 'react-router-dom'
import './fallingLeaves.css'
import './header.css'

import leave1 from '../../assets/imgLeaves/leaves1.png'
import leave2 from '../../assets/imgLeaves/leaves2.png'
import leave3 from '../../assets/imgLeaves/leaves3.png'
import leave4 from '../../assets/imgLeaves/leaves4.png'

function Header() {

  let leave = document.getAnimations();
  let setLeaves = document.getElementsByClassName('set');
  let bgLeaves = document.getElementsByClassName('bgFallingLeaves')
  // console.log(bgLeaves[0])
  function startLeaves(){
    bgLeaves[0].classList.add('bgSize')
    for(let i = 0; i<setLeaves.length; i++){
      setLeaves[i].classList.remove('noDiv');
    }
    leave.forEach(element => element.play());
    setTimeout(stopLeaves, 14000);
  } 
  function stopLeaves(){
    for(let i = 0; i<setLeaves.length; i++){
      setLeaves[i].classList.add('noDiv');
      bgLeaves[0].classList.remove('bgSize')

    }
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bgDark justify-content-between fixed-top">
        <div className="ms-4">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <ul className="navbar-nav fs-3">
              <li className="nav-item py-3 py-lg-0 py-xl-0">
                <Link to="/" className="navLink">Home</Link>
              </li>
              <li className="nav-item py-3 py-lg-0 py-xl-0">
                <Link to='/about' className="navLink">About </Link>
              </li>
              <li className="nav-item py-3 py-lg-0 py-xl-0">
                <Link to='/portfolio' className="navLink">Portfolio </Link>
              </li>
              <li className="nav-item py-3 py-lg-0 py-xl-0">
                <Link to='/contact' className="navLink">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="me-4 align-self-start">
          <i className="navIcon fs-1 bi bi-dice-3" onClick={startLeaves}></i>
        </div>
      </nav>
      <div className="bgFallingLeaves">
        <div className="set noDiv">
          <div><img src={leave1} alt="leaves"/></div>
          <div><img src={leave2} alt="leaves"/></div>
          <div><img src={leave3} alt="leaves"/></div>
          <div><img src={leave4} alt="leaves"/></div>
          <div><img src={leave1} alt="leaves"/></div>
          <div><img src={leave2} alt="leaves"/></div>
          <div><img src={leave3} alt="leaves"/></div>
          <div><img src={leave4} alt="leaves"/></div>
        </div>
        <div className="set set2 noDiv">
          <div><img src={leave1} alt="leaves"/></div>
          <div><img src={leave2} alt="leaves"/></div>
          <div><img src={leave3} alt="leaves"/></div>
          <div><img src={leave4} alt="leaves"/></div>
          <div><img src={leave1} alt="leaves"/></div>
          <div><img src={leave2} alt="leaves"/></div>
          <div><img src={leave3} alt="leaves"/></div>
          <div><img src={leave4} alt="leaves"/></div>
        </div>
        <div className="set set3 noDiv ">
          <div><img src={leave1} alt="leaves"/></div>
          <div><img src={leave2} alt="leaves"/></div>
          <div><img src={leave3} alt="leaves"/></div>
          <div><img src={leave4} alt="leaves"/></div>
          <div><img src={leave1} alt="leaves"/></div>
          <div><img src={leave2} alt="leaves"/></div>
          <div><img src={leave3} alt="leaves"/></div>
          <div><img src={leave4} alt="leaves"/></div>
        </div>
      </div>
    </div>
  )
}

export default Header

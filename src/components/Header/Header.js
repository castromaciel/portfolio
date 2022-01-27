import React from 'react'
import { NavLink } from 'react-router-dom'
import './fallingLeaves.css'
import './header.css'
import leave1 from '../../assets/images/leaves1.png'
import leave2 from '../../assets/images/leaves2.png'
import leave3 from '../../assets/images/leaves3.png'
import leave4 from '../../assets/images/leaves4.png'

function Header() {

  const leave = document.getAnimations();
  const setLeaves = document.getElementsByClassName('set');
  const bgLeaves = document.getElementsByClassName('bgFallingLeaves')
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
                <NavLink exact to="/" className="navLink" activeClassName="navLinkActive">Home</NavLink>
              </li>
              <li className="nav-item py-3 py-lg-0 py-xl-0">
                <NavLink exact to='/about' className="navLink" activeClassName="navLinkActive">About </NavLink>
              </li>
              <li className="nav-item py-3 py-lg-0 py-xl-0">
                <NavLink exact to='/portfolio' className="navLink" activeClassName="navLinkActive">Portfolio </NavLink>
              </li>
              <li className="nav-item py-3 py-lg-0 py-xl-0">
                <NavLink exact to='/contact' className="navLink" activeClassName="navLinkActive">Contact Me</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="me-4 align-self-start">
          <i className="navIcon fs-1 bi bi-dice-3" onClick={startLeaves} title="Show Effect"></i>
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

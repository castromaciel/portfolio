import React from 'react'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Education from '../components/Education/Education'
import Footer from '../components/Footer/Footer'
import LaboralExperience from '../components/LaboralExperience/LaboralExperience'

function AboutPage() {
  return (
    <div>
      <Header />
      <About />
      <div className='container d-flex flex-xl-row flex-column'>
        <LaboralExperience />
        <Education />
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage

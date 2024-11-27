import React from 'react'
import Navbar from './Navbar'
import "../css/work.css"
import Allproject from './Allproject'
import Footer from './Footer'
const Work = () => {
  return (
    <div style={{color:"#F1DADA"}}> 
      <Navbar/>
      <div className="mt-sm-5 pt-sm-2">
      <h1 className='work text-center mb-0'>selected Work</h1>
      <h1 className='work-name text-center mt-2 mb-2'>Explore my creative expertise</h1>
      <p className='text-center worknames' style={{textTransform:"uppercase"}}>Check out some of my projects by area of expertise</p>
      <div className="line-container mb-5 mt-5 pt-5 ">
            <div className="line"></div>
          </div>
      </div>
      <Allproject />
      <Footer/>
    </div>
  )
}

export default Work

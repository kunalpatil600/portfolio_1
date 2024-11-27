import React from 'react'
import "../css/About.css"
import Navbar from './Navbar'
import bgvideo from "../image/vbg.mp4"
import Footer from './Footer'
const About = () => {
  return (
    <div className="">
      <Navbar />
      <div style={{ backgroundColor: "#0E080D" }}>
        <div className="" >
         
          <video src="https://jorisbrianti.fr/_astro/videos/about.webm" loop muted autoPlay className='video-name2 d-lg-none d-sm-block  '></video>
          <h1 className='title-name text-center  ' style={{color:"#F1DADA"}}>FULL-STACK DEVLOPER </h1>
          <video src="https://jorisbrianti.fr/_astro/videos/about.webm" loop muted autoPlay className='video-name d-none d-sm-none d-lg-block'></video>
        
          <div className="line-container mb-5 mt-5 ">
            <div className="line"></div>
          </div>
          <div className="d-xl-flex d-sm-block ">
            <div className="col-xl-5  col-sm-12 ">
              <video src={bgvideo} loop muted autoPlay width={400} className='m-auto video-circle d-sm-block '></video>
            </div>
            <div className="col-xl-6 col-sm-12 ms-sm-5 mt-sm-5 mb-5 " style={{color:"#F1DADA"}}>
              <h1 className='about-name ps-4 mt-3 mt-sm-0 ps-sm-0 col-sm-8 col-md-10 mb-5'  >
                I craft digital
                experiences combining
               <b> design, motion &
                development </b></h1>
                <h1 className='about-all p-2 p-sm-0 col-sm-10'>I'm Patil Kunal, a fresh full-stack developer ready to embark on a full-time role. My journey began with a fascination for digital solutions and hands-on projects in web development, which equipped me with a solid foundation in both front-end and back-end technologies. Though new to the field, I'm committed to applying my skills and continually learning to deliver effective, dynamic solutions.</h1>
          
            </div>
          </div>
          <button href="#" class="button btn-about mb-5 mt-5 ms-sm-4  fs-3 d-block m-xl-auto d-flex"  >
  <span class="button__icon-wrapper ">
    <svg
      viewBox="0 0 14 15"
      fill="none"
      className="button__icon-svg"
      width="10"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      ></path>
    </svg>

    <svg
      viewBox="0 0 14 15"
      fill="none"
      width="10"
      className="button__icon-svg button__icon-svg--copy"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      ></path>
    </svg>
  </span>
 Download CV
</button>
<div className="d-flex col-11 m-auto">
       <p style={{color:"#978788"}} className='fs-5 ms-3'>About</p> <hr className='col-sm-9 col-8 col-lg-10 col-xl-11 ms-5' />
     </div>
     <div className="d-xl-flex d-sm-block col-11 mt-5 mb-5 m-auto">
      <div className="col-5">
        <h1 className='about-name mb-sm-4 ms-sm-3'>Skills</h1>
      </div>
      <div className="col-xl-6 d-xl-flex">
        <ul className='col-xl-7  about-dev'>
        <h1 className='about-skill'>Web Development</h1>
          <li><p>Front-end Devlopment</p></li>
          <li><p>Back-end Devlopment</p></li>
        </ul>
        <ul className=' about-dev'>
        <h1 className='about-skill'>VFX</h1>
          <li><p>Blender</p></li>
        
        </ul>
        
      </div>
     </div>
     <div className="d-flex col-11 m-auto">
       <p style={{color:"#978788"}} className='fs-5 ms-3'>About</p> <hr className='col-sm-9 col-8 col-lg-10 col-xl-11 ms-5' />
     </div>
     <div className="d-xl-flex d-sm-block  col-lg-11 m-auto">
      <div className="col-xl-5 pt-5">
      <h1 className='about-name mt-5 ms-5 ms-sm-5 ms-lg-0 mb-sm-4 pt-5'>Front-end</h1>
      </div>
     <div className="mt-4 mb-4">
     <div className="d-flex d-sm-block ">
      <div className="d-sm-flex ms-4 ms-sm-0  justify-content-evenly" style={{alignContent:"center"}}>
      <div className="col-sm-2 col-12  back-image">
      <img className='col-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"  alt="" />
     <p className='front-name mt-2'>HTML</p>
      </div>
      <div className="col-sm-2 col-12 back-image">
      <img className='col-12 p-2' src="https://cdn-icons-png.flaticon.com/512/919/919826.png"  alt="" />
     <p className='front-name mt-2'>CSS</p>
      </div>
  <div className="col-sm-2 col-12 back-image">
      <img className='col-12 '  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png"  alt="" />
      <p className='front-name mt-2'>BOOTSTRAP</p>
      </div>
     <div className="col-sm-2 col-12 back-image">
        <img className='col-12 p-3'  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png"  alt="" />
      <p className='front-name mt-2'>JAVASCRIPT</p>
        </div>
      </div>
      <div className="d-sm-flex col-9 ms-5  ms-sm-0 ps-sm-0 justify-content-evenly">
       <div className="col-sm-3  col-5 back-image">
          <img className='col-12  p-3' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png"  alt="" />
       <p className='front-name mt-2'>REACT-JS</p>
          </div>
   <div className="col-sm-3 col-5 back-image">
    <img className='col-12 p-3' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/sass-icon.png" alt=""  />
    <p className='front-name mt-2'>SASS</p>
    </div>
    <div className="col-sm-3 col-5 back-image">
     <img className='col-12 p-3 ' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/jquery-icon.png"  alt="" />
    <p className='front-name mt-2'>JQAERY</p>
     </div>
     </div>
      </div>
     </div>

     </div>
     <div className="d-flex col-11 m-auto">
       <p style={{color:"#978788"}} className='fs-5 ms-3'>About</p> <hr className='col-sm-9 col-8  col-lg-10 col-xl-11 ms-5' />
     </div>
     <div className="col-lg-11 mt-4 pb-4  d-xl-flex m-auto">
        <div className="col-xl-5">
           <div className="about-name ms-5   ms-sm-5 ms-lg-0   mt-3">Back-end </div>
        </div>
        <div className="col-xl-7 mt-4  mt-sm-4 d-sm-flex justify-content-evenly">
          <div className="col-sm-3 col-5 m-auto m-sm-0 back-image">
            <img className='col-12' src="https://cdn.prod.website-files.com/63d926b37ec0d886c2d5d538/66bb673f2d17ee2c722ee3fb_6696448f8bfa2543df965973_nodejs.jpeg" alt="" />
            <p className='front-name mt-2'>NODE.JS</p>
          </div>
          <div className="col-sm-3 col-5 m-auto m-sm-0 back-image ms-sm-5">
            <img className='col-12  mt-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3VWywmkgJvIvcyqaBB801oP9osRVn-wYd7KDn2npuPOWbGbNWFpmf-yt3lS7pd_BmxQ&usqp=CAU" alt="" />
            <p className='front-name mt-4'>EXPRESS.JS</p>
          </div>
          <div className="col-sm-3 col-5 m-auto m-sm-0 back-image">
            <img className='col-8  d-block m-auto' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mongodb-icon.png" alt="" />
            <p className='front-name '>MONGODB</p>
          </div>
        </div>
     </div>
     <div className="d-flex col-11 m-auto">
       <p style={{color:"#978788"}} className='fs-5 ms-3'>About</p> <hr className='col-sm-9 col-8  col-lg-10 col-xl-11 ms-5' />
     </div>
     <div className="col-11 mt-4 pb-4 d-xl-flex m-auto">
        <div className="col-5">
           <div className="about-name ms-4 ms-sm-4 mt-3">Tools </div>
        </div>
        <div className="col-xl-7 mt-4  mt-sm-4 d-sm-flex justify-content-evenly">
          <div className="col-sm-3 col-5 m-auto m-sm-0 back-image">
            <img className='col-8  m-auto d-block ' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png" alt="" />
            <p className='front-name mt-2'>VS CODE</p>
          </div>
          <div className="col-sm-3 col-5 m-auto m-sm-0 back-image ">
            <img className='col-8 d-block m-auto ' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/git-icon.png" alt="" />
            <p className='front-name mt-2'>GIT</p>
          </div>
          <div className="col-sm-3 col-5 m-auto m-sm-0 back-image ">
            <img className='col-8 bg-white d-block m-auto' style={{borderRadius:"50%"}} src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png" alt="" />
            <p className='front-name mt-2'>GITHUB</p>
          </div>
        </div>
     </div>
        </div>
      </div>
      <div className="d-flex col-11 m-auto">
       <p style={{color:"#978788"}} className='fs-5 ms-3'>About</p> <hr className='col-sm-9 col-8  col-lg-10 col-xl-11 ms-5' />
     </div>
      <Footer/>
    </div>
  )
}

export default About

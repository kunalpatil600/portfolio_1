import React, { useEffect } from 'react';
import Navbar from './Navbar';
import '../css/home.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import men from '../image/men.png';
import dot from '../image/dot.png';
import bgvideo from "../image/vbg.mp4"
import Footer from './Footer';
import Allproject from './Allproject';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    const splitWords = (selector) => {
      const element = document.querySelector(selector);
      if (element) {
        const words = element.textContent.split(' ');
        element.innerHTML = words
          .map((word) => `<span style="display:inline-block">${word}</span>`)
          .join(' ');
      }
    };

    splitWords('.info-text');
    gsap.fromTo(
      '.info-text span',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.001,
        ease: 'power3.out',

        stagger: 0.1,
        scrollTrigger: {
          trigger: '.info-text',
          start: 'top 85%',
          end: 'top 50%',
          scrub: true,
        },
      }
    );

    // GSAP animations for each word
    // gsap.fromTo(
    //   '.name ',
    //   { y: 100, opacity: 0 },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     duration: 1,
    //     ease: 'power3.out',
    //     stagger: 0.1,
    //     scrollTrigger: {
    //       trigger: '.name',
    //       start: 'top 80%',
    //       end: 'top 50%',
    //       scrub: true,
    //     },
    //   }
    // );

    // gsap.fromTo(
    //   '.text-center ',
    //   { y: 100, opacity: 0 },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     duration: 1.2,
    //     ease: 'power3.out',
    //     stagger: 0.1,
    //     scrollTrigger: {
    //       trigger: '.text-center',
    //       start: 'top 85%',
    //       end: 'top 60%',
    //       scrub: true,
    //     },
    //   }
    // );


  }, []);

  return (
    <div>
      <Navbar/>
      <div className="mt-5 pt-5 pt-md-0 col-11 m-auto">
        <div className="mt-xxl-5 pt-xxl-5 mt-sm-0 pt-sm-0 d-xxl-flex  d-sm-block ">
          <div className='mt-xxl-5 pt-xxl-5' style={{color:"#F1DADA"}}>
            <h1 className="name mb-0 home-name text-sm-center mt-xxl-5 pt-xxl-5 mt-sm-0" >KUNAL PATIL</h1>
            <p className="text-center ms-xxl-5 ps-xxl-5 ms-sm-0 ps-sm-0 mb-0">Based in Surat, Gujarat</p>
            <p className="text-center ms-xxl-5 ms-sm-0 "><i class="available"></i> Available for a full-time position</p>
          </div>
          <video src={bgvideo} loop muted autoPlay  className=' video-user d-block '></video>
        
          <div className="col-xxl-3 mt-xxl-5 pt-xxl-5 col-sm-12  text-sm-center " style={{color:"#F1DADA"}}>
            <h1 className="name home-name mt-5">FULL-STACK  DEVLOPER</h1>
          </div>
        </div>
      </div>
      <div>
        <h5 className="info-text fs-1 mt-3 p-sm-2 mt-xxl-3 mt-sm-5 pt-sm-5 col-11 m-auto m-sm-0 col-sm-10 m-sm-auto" style={{color:"#F1DADA"}}>
        I’m Patil Kunal, a passionate full-stack developer with a deep interest in creating dynamic, user-focused digital experiences. With a strong foundation in both front-end and back-end development, I specialize in building seamless web applications.I am currently available for a full-time position and eager to bring my skills to exciting new projects.
        </h5>

      </div>
      <div className="mt-5 pt-5 " style={{color:"#F1DADA"}}>
    
        <h1 className='text-center  col-sm-12 m-auto mt-sm-5 pt-sm-5 '> Discover my creative expertise</h1>
    
             <p className='text-center col-11 col-sm-12 m-auto m-sm-0'>Check out some of my projects by area of expertise</p>
      </div>
      <div className="">
    
    <Allproject/>
  
      </div>
      <Footer/>
    </div>
  );
};

export default Home;

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dot from '../image/dot.png';
import { Link } from 'react-router-dom';

const Allproject = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create a reusable function to handle the animations
    const animateScrollingText = (id, duration) => {
      let tlLoop = gsap.timeline();
      tlLoop.to(id, {
        x: "50vw", // Adjusted to prevent excessive movement
        duration: duration,
        repeat: -1,
        ease: 'power1.inOut', // Smooth easing for smooth animation
      });

      let tlScroll = gsap.timeline({
        scrollTrigger: {
          trigger: id,
          scrub: 1,
        },
      });
      tlScroll.to(id, {
        xPercent: 15,
      });
    };
   

    // Apply animation to each scrolling text element
    animateScrollingText('#scrollingText', 40);
    animateScrollingText('#scrollingText2', 60);
    animateScrollingText('#scrollingText3', 40);
    animateScrollingText('#scrollingText4', 120);
  }, []);

  return (
    <div>
      <div className="mt-5">
        <section className="spacer">
          <h1 id="scrollingText" >
            Boostrap Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
            Boostrap Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
            Boostrap Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
            Boostrap Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
            Boostrap Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
            Boostrap Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
          </h1>
        </section>
        <Link target="_blank" className="videohover1" to="https://phoenix-kunal.netlify.app/">
          <video src="https://jorisbrianti.fr/_astro/videos/product-design-360x360.webm" autoPlay loop muted></video>
        </Link>
        <hr />
      </div>

      <div className="mt-5">
        <section className="spacer">
          <h1 id="scrollingText2">
            JavaScript Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
            JavaScript Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
            JavaScript Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
            JavaScript Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
            JavaScript Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
            JavaScript Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
          </h1>
        </section>
        <Link target="_blank" className="videohover1" to="https://jsproject-alpha.vercel.app/">
          <video src="https://jorisbrianti.fr/_astro/videos/brand-design-360x360.webm" autoPlay loop muted></video>
        </Link>
        <hr />
      </div>

      <div className="mt-5">
        <section className="spacer">
          <h1 id="scrollingText3">
            Boostrap Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
            Boostrap Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
            Boostrap Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
            Boostrap Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
            Boostrap Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
            Boostrap Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
          </h1>
        </section>
        <Link target="_blank" className="videohover1">
        <video src="https://jorisbrianti.fr/_astro/videos/motion-design-360x360.webm" autoPlay loop muted></video>
       </Link>
        <hr />
      </div>

      <div className="mt-5">
        <section className="spacer">
          <h1 id="scrollingText4">
            JavaScript Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
            JavaScript Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
            JavaScript Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
            JavaScript Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
            JavaScript Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
            JavaScript Project &nbsp;&nbsp;<img src={dot} alt="" className="dot" />&nbsp;&nbsp;
          </h1>
        </section>
        <Link target="_blank" className="videohover1">
        <video src="https://jorisbrianti.fr/_astro/videos/web-development-360x360.webm"  autoPlay loop muted></video>
     </Link>
        <hr className='pb-5' />
      </div>
    </div>
  );
};

export default Allproject;

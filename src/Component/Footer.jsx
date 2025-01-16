import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('kkpatil800@gmail.com');
    alert('Email copied to clipboard!');
  };

  return (
    <div>
        <div className="col-11  namebox  text-center pb-lg-5 pb-sm-3 mt-md-5 pt-md-3 mb-md-5 pb-md-5 pb-xxl-0 pt-lg-5 pt-sm-1 " >
        <p className='mt-5  mail-name pt-5  fw-bold mb-xl-3 mb-sm-4 ' style={{color:"#F1DADA"}}> LOOKING FOR A NEW TELENT?</p>
       <h1 className='mail mb-5' onClick={copyEmailToClipboard}>kkpatil800@gmail.com</h1>
   <Link target='_black' to={"https://www.linkedin.com/in/kunal-patil-03b2222b0/"}>    <button href="#" class="button" style={{color:"#F1DADA"}}>
  <span class="button__icon-wrapper">
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
  Linkdin
</button>
</Link> 
<Link to={"https://acrobat.adobe.com/id/urn:aaid:sc:ap:b7bfdaeb-b666-41c6-bbc9-3735184aee4e"}>
<button href="#" class="button mb-5 "  style={{color:"#F1DADA"}}>
  <span class="button__icon-wrapper">
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
</Link>
      </div>
      <div className="d-sm-flex text-center col-11 m-auto mt-5 pb-3 justify-content-between" style={{color:"#F1DADA"}}>
    <p>  ©2024 Kunal p.</p>
      <p> <i class="available"></i> Available for a full-time position</p>
      <p className='d-sm-none d-md-block'>Made by Kunal p.</p>
      </div>
    </div>
  )
}

export default Footer

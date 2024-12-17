import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbarc.css'
import Container from 'react-bootstrap/Container';

const Navbar = () => {
  
  return (
    <div className="">  
    <div className='d-md-flex d-sm-block  justify-content-between col-xxl-11 col-sm-12 m-auto pt-4 navbar-all'>
      <Link className='text-white d-sm-block col-sm-12 col-md-4 me-xxl-5 col-xxl-7' to={"/"}><button class="btn">
        <span class="btn-text-one fs-3 fw-bold">KUNAL P.</span>
        <span class="btn-text-two  fs-3 fw-bold">KUNAL P.</span>
      </button>
      </Link>
      <div className="col-xxl-5 ps-xxl-5 ms-xxl-5  ">
      <Link className='text-white' to={"/"}><button class="btn">
        <span class="btn-text-one fs-5 fs-sm-6 fw-bold">Home</span>
        <span class="btn-text-two fs-5 fs-sm-6 fw-bold">Home</span>
      </button>
      </Link>
      <Link className='text-white' to={"/work"}><button class="btn">
        <span class="btn-text-one fs-5 fw-bold">Work</span>
        <span class="btn-text-two fs-5 fw-bold">Work</span>
      </button>
      </Link>
      <Link className='text-white' to={"/about"} ><button class="btn">
        <span class="btn-text-one fs-5 fw-bold">About</span>
        <span class="btn-text-two fs-5 fw-bold">About</span>
      </button>
      </Link>
      </div>
    </div>
   
    </div>
  )
}

export default Navbar

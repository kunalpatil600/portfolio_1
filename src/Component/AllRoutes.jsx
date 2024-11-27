import React, { useRef, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Work from './Work';
const AllRoutes = () => {
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);
  const videoRef = useRef(null);

  // Trigger the transition when video ends
  const handleVideoEnd = () => {
    setIsVideoPlayed(true);
  };
  return (
    
        <Routes>
            <Route path='/' element={  <Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Work' element={<Work/>} />
        </Routes>
       
  )
}

export default AllRoutes

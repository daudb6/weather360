import "./Navbar.css";
import setting from "../images/cog-regular-24 (1).png";
import mic from "../images/microphone-regular-24 (1).png";
import search from "../images/search.png";
import arrow from "../images/arrow-circle-left.svg"
import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { fetchWeather } from "../Report/reportSlice";
import { useState } from "react";

export const Navbar = () => {
  const iconRef = useRef(null);
  const location = useLocation();
  const dispatch = useDispatch()
  const [value,setValue] = useState('')

  useEffect(() => {
    const currentPath = location.pathname;
    updateIcon(currentPath);
  }, [location]);
  const handleIconClick = () => {
    if (location.pathname === '/Cloud' || location.pathname === '/Report') {
      window.location.href = '/'
    }
  };
  const updateIcon = (path) => {
    if (path === '/') {
      iconRef.current.src = setting;
    }
    else if (path === '/Cloud') {
      iconRef.current.src = arrow; 
    } else if (path === '/cloud') {
      iconRef.current.src = "arrow";
    }
  };

  return (
    <div className='navbar'>
      <nav>
        <div className='set-img'>
          <img ref={iconRef}  src={setting} alt='img'  onClick={handleIconClick} ></img>
        </div>
        <h1>Weather360</h1>
        <div className='search'>
          <div className='s-bar'>
            <input onChange={(e)=> setValue(e.target.value)} type='text' placeholder='search' />
            <img onClick={()=> dispatch(fetchWeather(value)) } src={search} alt='search'></img>
          </div>
          <img src={mic} alt='mic'></img>
        </div>
      </nav>
    </div>
  );
};

import React, { useEffect } from 'react'
import "./Report.css"
import Single from './single';
import { fetchWeather } from './reportSlice';
import { useDispatch, useSelector } from 'react-redux';
import  clear from '../../assets/clear.png'
import cloud from '../../assets/cloud.png'
import clouds from '../../assets/clouds.png'
import drizzle from '../../assets/drizzle.png'
import dust from '../../assets/dust.png'
import fog from '../../assets/fog.png'
import haze from '../../assets/haze.png'
import smoke from '../../assets/smoke.png'
import mist from '../../assets/mist.png'
import snow from '../../assets/snow.png'
import rain from '../../assets/rain.png'




export const Report = () => {
  let imagePath;
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchWeather())
  },[])
  
  const wData = useSelector((state) => state.weatherReducer.report)

  const weatherIcons = {
    Clear: clear,
    Clouds: clouds,
    Cloud: cloud,
    Drizzle: drizzle,
    Dust: dust,
    Fog: fog,
    Haze: haze,
    Smoke: smoke,
    Mist: mist,
    Snow:snow,
    Rain:rain
  };
  return (
    <div className='report-section'>
<div className='report'>
<div className='report-heading'>
          <h2>Popular-Cities</h2>
        </div>
        <div className='flex'>
          
        {wData && wData.map((report) => (

        <Single
           
          name={report.name}
          value={report.main.temp}
          imgSrc={weatherIcons[report.weather[0].main] || null}
          forecast= {report.weather[0].main}
          report = {report}
        />
        ))}
        </div>
      </div>
    </div>
  )
}




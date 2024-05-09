import React from 'react'
import setting from "../images/setting.png"
import "./Cloud.css"
import { Cloudover } from './Cloudover'
import { useSelector } from 'react-redux'



export const Cloud = () => {
  const dat = useSelector((state)=> state.weatherReducer.cloud )
  console.log(dat)
  return (
    <div className='cloud-section'>
      <div className='cloud'>
        <div className='cloud-heading'>
          <span>{dat.name},{dat.sys.country}</span>
          <div className='cloud-dat'>
             <span>{dat.main.temp}</span>
             <img src="https://shimmering-heliotrope-f0efd9.netlify.app/static/media/clear.063145c60a96e8911a84.png"></img>
          </div>
          <h3>broken clouds</h3>
        </div>
       
<div className='c-data'>
       
          <Cloudover
          
name = {"humidity"}
value = {dat.main.humidity}

/>
          <Cloudover
name = {"Pressure"}
value = {dat.main.pressure}

/>
          <Cloudover
name = {"Wind"}
value = {dat.wind.speed}

/>
          <Cloudover
name = {"visibility"}
value = {dat.visibility}

/>
      

</div>
       


      </div>
    </div>
  )
}

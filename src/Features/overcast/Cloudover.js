import React from 'react'
import { useSelector } from 'react-redux'

export const Cloudover = ({image,name,value}) => {
  
  return (

    <div className='clouds-info'>
          <div className='humidity'>
            <div className='h-info'>
              <img src={image}></img>
              <h2>{name}</h2>
            </div>
            <span>{value}%</span>
          </div>
        </div>
  )
}

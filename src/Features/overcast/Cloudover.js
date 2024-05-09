import React from 'react'
export const Cloudover = ({image,name,value}) => {
  
  return (

    <div className='clouds-info'>
          <div className='humidity'>
            <div className='h-info'>
              <img src={image} alt={name}></img>
              <h2>{name}</h2>
            </div>
            <span>{value}%</span>
          </div>
        </div>
  )
}

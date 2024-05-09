import React from 'react';
import './single.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addData } from './reportSlice';
 
const Single = ({ value, name, city, imgSrc,forecast,report }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = ()=> {
    dispatch(addData(report))
    navigate('/Cloud')
  }
  return (
    <>
      
        <div  onClick={() => handleClick() } className='report-details'>
          <div className='report-info'>
            <div className='data'>
              <div className='report-img'>
                <img src={imgSrc} alt="hy" />
              </div>
              <div className='report-data'>
                <span>{value}</span>
                <p>{forecast}</p>
              </div>
            </div>
            <div className='text'>
              <h3>{name}</h3>
            </div>
          </div>
        </div>
    
    </>
  );
};

export default Single;


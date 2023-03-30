import React from 'react'
import arrow from '../assets/arrow-right (1).svg';

const SecondaryBtn = ({ label }) => {
  return (
    <button className="secondary-btn">{label}<img src={arrow} alt="" /></button>
    )
}

export default SecondaryBtn
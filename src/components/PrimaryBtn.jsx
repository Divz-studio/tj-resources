import React from 'react'
import arrow from '../assets/arrow-right.svg';

const PrimaryBtn = ({ label }) => {
  return (
    <button className="primary-btn">{label}<img src={arrow} alt="" /></button>
    )
}

export default PrimaryBtn
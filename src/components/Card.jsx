import React from 'react'

const Card = ({ id, head, body, active, handleClick }) => {

  return (
    <div className={active === id ? 'card active': 'card'} onClick={handleClick}>
        <div className="num">{ id }</div>
        <h4>{ head }</h4>
        <p className="small">{ body }</p>
    </div>
  )
}

export default Card
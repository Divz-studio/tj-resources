import React, { useState } from 'react'
import { servicesData } from '../constants'
import Card from './Card'

const Cards = () => {
  const [services, setServices] = useState(servicesData)
  const [active, setActive] = useState(1)

  const selectCard = (id) => {
    setActive(id)
  }

  return (
    <div className="cards">
        { services.map(service => {
            return <Card key={service.id} id={service.id} head={service.head} body={service.body} active={active} handleClick={() => selectCard(service.id)} />
        }) }
    </div>
  )
}

export default Cards
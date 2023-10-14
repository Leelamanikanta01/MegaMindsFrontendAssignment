// Write your code here
import React, {useEffect, useState} from 'react'

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('/api/services')
      .then(response => response.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div>
      <h2>Services</h2>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Services

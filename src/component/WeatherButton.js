import React from 'react'
import { Button } from 'react-bootstrap';


const WeatherButton = ({ cities, setCity }) => {
  return (
    <div>
        <div>
            <Button variant="light">현재 위치</Button>
            {cities.map((item, index) => (
                <Button variant="light" key={index} onClick={()=>setCity(item)}>{item}</Button>
            ))}
        </div>
    </div>
  )
}

export default WeatherButton
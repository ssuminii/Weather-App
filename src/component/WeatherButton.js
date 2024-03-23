import React from 'react'
import { Button } from 'react-bootstrap';


const WeatherButton = () => {
  return (
    <div>
        <div>
        <Button variant="light">현재위치</Button>{' '}
        <Button variant="light">NewYork</Button>{' '}
        <Button variant="light">LA</Button>{' '}
        <Button variant="light">Paris</Button>{' '}
        <Button variant="light">Singapore</Button>{' '}
        </div>
    </div>
  )
}

export default WeatherButton
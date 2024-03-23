import React from 'react'

const WeatherBox = ({ weather }) => {
    console.log('weather------>', weather);
  return (
    <div>
        <div className='weather-box'>
            {/* useState=(null)로 되어있기 때문에 null로 출력돼서 error */}
            {/* weather가 있으면? name 가져오기 */}
            <span>{weather?.name}</span>
            <h2>{weather?.main.temp}°C / {(weather?.main.temp)*1.8 + 32}°F</h2>
            <h3>{weather?.weather[0].description}</h3>
        </div>
    </div>
  )
}

export default WeatherBox
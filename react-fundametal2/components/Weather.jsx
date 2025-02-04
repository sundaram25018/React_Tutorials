import React from 'react'

const Weather = () => {
  let temp = 25;

  if(temp < 12){
    return <h1>It's Cold outside</h1>
  }
  else if(temp >= 12 && temp <= 25){
    return <h1>It's nice outside</h1>
  }
  else{
      return <h1>It's hot day outside</h1>
  }
}

export default Weather

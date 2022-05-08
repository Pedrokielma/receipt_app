import React from 'react'
import './Location.css'

function Location() {
  return (
    <div>
    <div className='text-map'>
        <h2>LOCATION</h2>
        <div> 
        <p>
        12 Upper St. Martin’s Lane WC2H 9FB, London
        </p>
        </div>
       
    </div>
    
    <iframe className='map' src="https://my.atlistmaps.com/map/28948e58-71ae-4ca7-bb9f-ccdb2fd26163?share=true" allow="geolocation" width="100%" height="500px" frameborder="0" scrolling="no"></iframe>
    </div>
  )
}

export default Location
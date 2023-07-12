import React from 'react'
import homee from './homee.PNG'
import building from './building.png'
import people from './people.PNG'

const InsideImage = () => {
  return (
    <div className='container' id="overview1">
    <div className='insideimage-width'>
        <div>
        <img src={homee}  width={400}></img>
        </div>
        <div>
        <img src={building}width={400} ></img> 
        </div>
        <div>
        <img src={people} width={400}></img> 
        </div>
     
    </div>
    </div>
  )
}

export default InsideImage
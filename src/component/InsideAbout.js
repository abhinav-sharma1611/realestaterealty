import React,{useState} from 'react'
import Data from './InsideAboutData'

const InsideAbout = () => {
    const [showmore, setShowMore] = useState(false);
    const text= Data;
  return (
    <div className="container">
    <div className='inside-about'>
        <h6> About this home</h6>

        <p>
        {showmore ? text : `${text.substring(0, 250)}`}
        <button className="btn btn-primary" onClick={() => setShowMore(!showmore)}>
        {showmore ? "Show less" : "Show more"}
        </button>
        </p>
        <p>
        Listed by Maria Bello• REDCO, Inc.</p>
       <p>Listed by Guadalupe Bucio• Redco, Inc.
        </p>
    </div>
    </div>
  )
}

export default InsideAbout
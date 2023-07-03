import React from 'react'
import agent from './agent.PNG'
import './InsideAsk.css';
import './InsideHome.css'

const InsideAsk = () => {
  return (
    <div className='block-ask table1'>
        <div className='block-ask-heading'>
        <h3>Ask Redfin agent Daniel a question</h3>
        </div>
        <div className='block-image-info'>
        <div className='block-image'>
            <img src={agent}></img>
        </div>
        <div className='block-info'>
            <h3 className='block-info-name'>
                Baniel Clusk
            </h3>
            <p>Chicago Redfin Agent</p>
            <p>Daniel Csuk typically replies in about 9 minutes</p>
             
        </div>
        </div>
        <div className='block-textarea'>
        <textarea class="form-control" rows="8" id="comment">

           
        </textarea>
        <div className='block-button'>
        <div>
            <button type="button" class="btn btn-outline-info">Info</button>
            </div>
            <div>
            <button type="button" class="btn btn-outline-info">Info</button>
            </div>
            <div>
            <button type="button" class="btn btn-outline-info">Info</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default InsideAsk
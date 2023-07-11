import React from 'react'
import InsideAbout from './InsideAbout'
import InsideHome from './InsideHome'
import InsideInsights from './InsideInsights';
import './InsideHome.css'
import InsideAsk from './InsideAsk';

const InsideData = () => {
  return (
    <div className="container">
    <div className='main-page-data'>
        <div>
        <div>
        <div className='insidedata-width'>
            <div > <b>For Sale - Active </b></div>
            <div > <b> 1632 N Tripp Ave, </b>Chicago, IL 60639</div>
            <div className='insidedata-2'>
                <div>
            <div className=''> <b>  $425,000 </b></div>
            <div>Est. $2,769/mo      <a>    Get pre-approved </a></div>
            </div>
            <div className='section bed-section'>
                <span>7 Beds</span>

            </div>
            <div className=' section bath-section'>
            <span>3 Baths</span>
            </div>
            <div className=' section sqft-section'>
                <span>-  sqft</span>
        </div>
            </div>
        </div>
        </div>
        <hr/>
         <div className='container'>
        <InsideAbout/>
        </div>
        <InsideHome/>
        <InsideInsights/>
        <InsideAsk/>
        </div>

       <div className='data-col-2'>
        <div className='data-heading'>
            <h3>Go tour this home</h3>
        </div>
        <div className='data-button'>
        <button type="button" class="btn btn-outline-primary">Tour in person</button>
        <button type="button" class="btn btn-outline-primary">Tour via Video Chat</button>
        </div>
        <div  className='data-button'>
            <button type="button" class="btn btn-danger btn-width">Danger</button>
        </div>
        <div className='data-button' >
            <p>It's free, with no obligation — cancel anytime.</p>
        </div>

        <div className='or'>
            <h3><b>OR</b></h3>
        </div>

        <div>
        <button type="button" class="btn btn-dark btn-width">Start an Offer</button>
        </div>
        <hr/>
        <div className='links'>
            <a href='#' className='link2'>Ask a question</a>
            <vr/>
            <a href='#' className='link2'>(312) 728-8725</a>

        </div>
        <hr/>
       </div>
     
    </div>
    </div>
  )
}

export default InsideData
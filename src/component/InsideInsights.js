import React from 'react'
import './InsideHome.css'

const InsideInsights = () => {
  return (
    <div className='table1'>
    <h4><b> Price Insights </b></h4>
    <div className='table-home'>
      <div className='table-home-col-1'>
          <div className='table-home-row-1'>
              <div className='span-row'>
              <div className='table-label'> List Price</div>
              <div className='table-value'>4,75,000</div>
              </div>
          </div>
          <hr/>
          <div className='table-home-row-2'>
          <div className='span-row'>
              <div className='table-label'>Estimated Mo. Payment</div>
              <div className='table-value'>$3326</div>
              </div>
          </div>

      </div>

      <div className='table-home-col-2'>
          <div className='table-home-row-11'>
              <div className='span-row'>
              <div className='table-label'> Agent Commission</div>
              <div className='table-value'>2.5%</div>
              </div>
          </div>
          <hr/>
         

      </div>
    </div>
  </div>
  )
}

export default InsideInsights
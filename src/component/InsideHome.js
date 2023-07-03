import React from 'react';
import './InsideHome.css'

const InsideHome = () => {
  return (
    <div className='table1'>
      <h4><b> Home Facts </b></h4>
      <div className='table-home'>
        <div className='table-home-col-1'>
            <div className='table-home-row-1'>
                <div className='span-row'>
                <div className='table-label'> Time on Redfin</div>
                <div className='table-value'>13days</div>
                </div>
            </div>
            <hr/>
            <div className='table-home-row-2'>
            <div className='span-row'>
                <div className='table-label'>Property type</div>
                <div className='table-value'>Multi Family</div>
                </div>
            </div>
            <hr/>
            <div className='table-home-row-3'>
            <div className='span-row'>
                <div className='table-label'>Year Built</div>
                <div className='table-value'>1912</div>
                </div>
            </div>

        </div>

        <div className='table-home-col-2'>
            <div className='table-home-row-11'>
                <div className='span-row'>
                <div className='table-label'> Style</div>
                <div className='table-value'>traditional</div>
                </div>
            </div>
            <hr/>
            <div className='table-home-row-22'>
                <div className='span-row'>
                <div className='table-label'> Community</div>
                <div className='table-value'>CHI HUmbold park</div>
                </div>
            </div>
            <hr/>
            <div className='table-home-row-33'>
            <div className='span-row'>
                <div className='table-label'> Lot Size</div>
                <div className='table-value'>3,1234 sq ft</div>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default InsideHome
import React, {useState} from 'react'
import School from './component/Schools';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';



const Tax = () => {

    const[isShown, setIsShown] = useState(false);
    const[value, setValue] = useState("see all property history")

    const handleClick = ()=>{
        setIsShown(current => !current);


    var value = document.getElementById("btn1");
    if(value.innerText=="see all property history"){
       value.innerText="see less";
      }
    else{
      value.innerText="see all property history";
      }
    };
  return ( 
       <Timeline
    sx={{
      [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
      },
    }}
  >
    <div className="container">
    <h3>Sale and tax history for 440 E 117th St Unit 1B</h3>
    <div className='container trip'>
    <div className='Tax-History'>
    <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
      
    <div className='date-wise'>
    <TimelineContent>
        <h3>Today</h3>
        <div className='Tax-1'>
            <div className='Tax-11'>
                <div className='date-1'>
                    <h5>Feb 8, 2013 </h5>
                    <p>Date</p>

                </div>
                <div className='description'>
                    <h5>Sold (MLS) (Closed Sale)</h5>
                    <p>MRED #08169777</p>
                </div>
                <div className='price'>
                    <h4>$176,15</h4>
                    <p>price</p>

                </div>

            </div>
            <div className='Tax-11'>
            <div className='date-1'>
            <h5>Oct 29, 2012</h5>
            <p>Date</p>

            </div>
            <div className='description'>
            <h5>Contingent</h5>
                    <p>MRED #08169777</p>
            </div>
            <div className='price'>
            <h4>---</h4>
            <p>price</p>
            </div>

            </div>
            <div className='Tax-11'>
            <div className='date-1'>
            <h5>Sep 29, 2012</h5>
            <p>Date</p>

            </div>
            <div className='description'>
            <h5>Listed (New)</h5>
                    <p>MRED #08169777</p>
            </div>
            <div className='price'>
            <h4>$164,500</h4>
            <p>price</p>
            </div>
           
            </div>
        </div>
       
        <div>
            <p>HUGE BRICK 2 FLAT on extra WIDE LOT WITH BEAUTIFUL YARD. 2nd floor 3-BEDROOM/ 2 BATHROOM. 1st floor 3/2 with duplex down to finished bsmnt w/ 2 extra beds and addict bath. All Beds, kitch and livingrms are VERY large. 2 car garage & addict 2 space prig pad.</p>
           </div>
           </TimelineContent>
        </div>
        </TimelineItem>
        


        <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
      
    <div className='date-wise'>
    <TimelineContent>
        <h3>Sep 17, 2013</h3>
        <div className='Tax-1'>
            <div className='Tax-11'>
                <div className='date-1'>
                    <h5>Feb 23, 2012 </h5>
                    <p>Date</p>

                </div>
                <div className='description'>
                    <h5>Sold (MLS) (Closed Sale)</h5>
                    <p>MRED #08169777</p>
                </div>
                <div className='price'>
                    <h4>$176,15</h4>
                    <p>price</p>

                </div>

            </div>
            <div className='Tax-11'>
            <div className='date-1'>
            <h5>Oct 29, 2012</h5>
            <p>Date</p>

            </div>
            <div className='description'>
            <h5>Contingent</h5>
                    <p>MRED #08169777</p>
            </div>
            <div className='price'>
            <h4>---</h4>
            <p>price</p>
            </div>

            </div>
            <div className='Tax-11'>
            <div className='date-1'>
            <h5>Sep 29, 2012</h5>
            <p>Date</p>

            </div>
            <div className='description'>
            <h5>Listed (New)</h5>
                    <p>MRED #08169777</p>
            </div>
            <div className='price'>
            <h4>$164,500</h4>
            <p>price</p>
            </div>
           
            </div>
        </div>
       
        <div>
            <p>HUGE BRICK 2 FLAT on extra WIDE LOT WITH BEAUTIFUL YARD. 2nd floor 3-BEDROOM/ 2 BATHROOM. 1st floor 3/2 with duplex down to finished bsmnt w/ 2 extra beds and addict bath. All Beds, kitch and livingrms are VERY large. 2 car garage & addict 2 space prig pad.</p>
           </div>
           </TimelineContent>
        </div>
        </TimelineItem>
        </div>
        {isShown && <School/>}
   <button className='btn-primary' onClick={handleClick} id='btn1'>{value} </button>
   
    </div>
    </div>
  </Timeline>
  )
}

export default Tax
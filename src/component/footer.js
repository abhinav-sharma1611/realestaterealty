
import React from 'react';
import store from './store.PNG'
import twitter from './twitter.PNG'
import countries from './countries.PNG'
import home_logo from './home_logo.PNG'

const Footer = () => {
  return (
    <div  className='content2'>
        <div className='column1' >
            <h5>Join Us</h5>
             <div>
                <a role='button'>Become a agent</a>
             </div>
             <div>
                <a role='button'>Get Referrals </a>
             </div>
             <div>
                <a role='button'>Careers</a>
             </div>

             <img src={store}></img>
        </div>
       
{/*
    <div className='column3'> */}
            {/* <h5>About Us</h5>
             <div>
                <a role='button'>Why Redfin?</a>
             </div> */}
             {/* <div>
                <a role='button'>Community Impact </a>
             </div>
             <div>
                <a role='button'>Diversity & Inclusion</a>
             </div>
             <div>
                <a role='button'>Life at Redfin</a>
             </div>
             <div>
                <a role='button'>Ports</a>
             </div> */}
         
           
      {/* </div> */}

      <div className='column3'>
            <h5>About Us</h5>
             <div>
                <a role='button'>Why Redfin?</a>
             </div>
             <div>
                <a role='button'>Community Impact </a>
             </div>
             <div>
                <a role='button'>Diversity & Inclusion</a>
             </div>
             
           
             <div>
             <a role='button'>Life at Redfin</a>
             </div>
             <div>
             <a role='button'>Press</a>
             </div>
             <div>
             <a role='button'>Investor</a>
             </div>
             <div>
             <a role='button'>Blog</a>
             </div>
             <div className='visible'>
             <img src={countries} ></img>
             </div>
      </div>

      <div className='column3'>
            <h5>Find Us</h5>
             <div>
                <a role='button'>Redfin App</a>
             </div>
             <div>
                <a role='button'>Contact Us  </a>
             </div>
             <div>
                <a role='button'>Help Center</a>
             </div>
             <div>
             <img src={twitter}></img>
             </div>
           
             <div>
                <h5> Countries </h5>
             </div>
             <div>
             <img src={countries}></img>
             </div>
      </div>

      <div className='column4'>
         
             <div>
               <p>Copyright: © 2023 Redfin. All rights reserved.</p>
             </div>
             <div>
                <p>Updated January 2023: By searching, you agree to the Terms of Use, and Privacy Policy.</p>
             </div>
             <div>
                <a role='button' color='blue'>Do not sell or share my personal information.</a>
             </div>
             <div>
             <p>REDFIN and all REDFIN variants, TITLE FORWARD, WALK SCORE, and the R logos, are trademarks of Redfin Corporation, registered or pending in the USPTO.</p>
             </div>
             <div>
             <p>California DRE #01521930</p>
             </div>
             <div>
                <a role='button' color='blue'>NY Standard Operating Procedures</a>
             </div>
             <div>
                <a role='button' color='blue'>TREC: Info About Brokerage Services, Consumer Protection Notice</a>
             </div>
             <div>
                <p>If you are using a screen reader, or having trouble reading this website, please call Redfin Customer Support for help at 1-844-759-7732.</p>
             </div>
             <div className='content1'>
             <img src={home_logo}></img>
             <p>REDFIN IS COMMITTED TO AND ABIDES BY THE FAIR HOUSING ACT AND EQUAL OPPORTUNITY ACT.
                 READ REDFIN'S FAIR HOUSING POLICY AND THE NEW YORK STATE FAIR HOUSING NOTICE.</p>
             </div>
      </div>
    </div>
   
  )
}

export default Footer
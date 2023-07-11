import React,{useState} from 'react'

export const NavUseState = () => {
 
let rent = ["Local Rentals",
 <br/>,
 "at your fingertips"];

 let buy = ["Search with Redfin.",
<br/>, 
"tour with redfin agent"];

let sell = ["1% listing fee",
 <br/>,
 "when you buy + sell"];

 let mortgage = ["compare lenders",
 <br/>,
 "and find a low rate"];

 let home = ["see your home's",
 <br/>,
 "Redfin Estimate"];
const[info, setInfo] = useState(buy)
// const[info2,setInfo2] = useState('Tour with Redfin Agent.')
  return (
    <div className='container'>
    <div   className='inner-div'>
    <h3> {info}</h3>
    {/* <h3>{info2}</h3>   */}
     </div>
    <div   className='down-nav'>
    <nav class="navbar navbar-expand-lg bg-body-tertiary  new-nav">
     <div class="collapse navbar-collapse" id="navbarText">
       <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <a class="navbar-brand" href="#"   onClick={()=> setInfo(buy)}>Buy</a>
      </li>
      <li class="nav-item ">
      <a class="navbar-brand" href="#"   onClick={()=>setInfo(rent)}>Rent</a>
      </li>
      <li class="nav-item">
      <a class="navbar-brand" href="#" onClick={()=>setInfo(sell)}>Sell</a>
      </li>
      <li class="nav-item active">
      <a class="navbar-brand" href="#" onClick={()=>setInfo(mortgage)}>Mottage</a>
      </li>
      <li class="nav-item active">
      <a class="navbar-brand" href="#" onClick={()=>setInfo(home)}>Home Estimate</a>
      </li>
    </ul>
  </div>
</nav>
</div>
    </div>
  )
}


export default NavUseState

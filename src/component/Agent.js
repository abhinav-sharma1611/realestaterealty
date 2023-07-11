import React from 'react'

export const Agent = () => {
  return (
    <div className='container'>
    <div className='agent'>
        <div className='container mg'>
            <h2 > Talk to a redfin agent</h2>
            <p>Whether you’re searching for houses, apartments,
             or condos, it's easy to find a place you'll love.</p>
             </div>
             <div>
        <h4  className='head'>Where are you searching for homes?</h4>
        
    <form  className='d-flex' >

<input

  type="text"  placeholder="Search"



//   onChange={handleInputChange}

  className="searchbar"

/>

<button type="submit" className="btn btn-primary">Search</button>

</form>
    </div>
    </div>

    
    </div>
  )
}
export default Agent
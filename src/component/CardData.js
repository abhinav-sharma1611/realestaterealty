import React from 'react'
import card1 from './card1.png'
import { Link } from "react-router-dom";

export const CardData = ({menuData}) => {
  return (
   <div className='container'>
   <div  className='property'>
   <h6> Recomended</h6>
   <h5> Properties near you</h5>
   </div>
   <div className='flx'>
   {
    menuData.map((curelement)=>{
     return(
        <>
         <div>
        <div className="c1 "  key={curelement.id}>
            {/* < className="c2"> */}
            <Link className="c2"  to="/newpage" >
                <div className="c3">
                    <img src={curelement.image} className='c4'/>
                    <div className="container c5">
                    <p className='www'>{curelement.price}</p>
                    <p className='www'>{curelement.size}</p>
                    <p className='www'>{curelement.place}</p>
                    <p className='www'>{curelement.name}</p>
                    </div>
                </div>
                </Link>
            
        </div>

    
        </div> 
        {/* <div className="cards">
            <div className="card">
                <img src={curelement.image} alt="" className='card__img'/>
                <div className="card__info">
                    <span className="card__category">{curelement.price}</span>
                    <h3 className="card__title">{curelement.size}</h3>
                </div>
            </div>
        </div> */}

        </>
     )
    })
   }
   </div>
        
   </div>
  )
}


export default CardData;
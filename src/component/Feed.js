import React, {useState} from 'react'
import './card_style.css'
import Cards from './cardAPI'
import CardData  from './CardData'

export const Feed = () => {

    const[menuData,setMenuData] = useState(Cards)
  return (
    
    <>
        <CardData  menuData={menuData}/>
    </>
  )
}

export default Feed
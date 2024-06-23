import React,{useContext} from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'

import NewsLetter from '../Components/NewsLetter/NewsLetter'
import NewCollection from '../Components/NewCollections/NewCollection'



const Shop = ({products}) => {
 
  
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection product={products}/>
      <NewsLetter/>
    </div>
  )
}

export default Shop

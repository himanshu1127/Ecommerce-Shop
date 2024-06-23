import React from 'react'
import './NewCollection.css'
import Item from '../Item/Item'




const NewCollection = (props) => {


  
  return (
    <div className='new-collection'>
       <h1>New Arrivals</h1>
      <hr />
      <div className="collection">
        {!props.product&& <p>products unavailable</p>}
          {props.product&&props.product.map((item,i)=>{
          
              return <Item key={i} id={item.id} name={item.title} image={item.image} new_price={item.price} old_price={1}/>
         })} 
      </div> 
    </div>
  )
}

export default NewCollection

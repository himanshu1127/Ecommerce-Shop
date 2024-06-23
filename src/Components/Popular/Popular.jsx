import React from 'react'
import './Popular.css'
import Item from '../Item/Item'
const productdata=[{name:"Black Kurta",id:1,image:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10842022/2024/3/1/c98eb85c-2bd0-46ab-9ae0-d74309fb6e6d1709270745673-Libas-Black-Embroidered-Ethnic-Motifs-A-Line-Dress-130170927-6.jpg", new_price:60,old_price:120}
    ,{name:"Black Kurta",id:2,image:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10842022/2024/3/1/c98eb85c-2bd0-46ab-9ae0-d74309fb6e6d1709270745673-Libas-Black-Embroidered-Ethnic-Motifs-A-Line-Dress-130170927-6.jpg", new_price:60,old_price:120},
    {name:"Black Kurta",id:3,image:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10842022/2024/3/1/c98eb85c-2bd0-46ab-9ae0-d74309fb6e6d1709270745673-Libas-Black-Embroidered-Ethnic-Motifs-A-Line-Dress-130170927-6.jpg", new_price:60,old_price:120},
    {name:"Black Kurta",id:4,image:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10842022/2024/3/1/c98eb85c-2bd0-46ab-9ae0-d74309fb6e6d1709270745673-Libas-Black-Embroidered-Ethnic-Motifs-A-Line-Dress-130170927-6.jpg", new_price:60,old_price:120}
]


const Popular = () => {
  return (
    <div className='popular'>
      <h1>Womens's Bestseller</h1>
      <hr />
      <div className="popular-item">
        {productdata.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular

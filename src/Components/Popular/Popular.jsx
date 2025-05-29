import React from 'react'
import { Flame } from 'lucide-react'
import Item from '../Item/Item'

const productdata = [
  {
    name: "Embroidered A-Line Dress",
    id: 1,
    image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10842022/2024/3/1/c98eb85c-2bd0-46ab-9ae0-d74309fb6e6d1709270745673-Libas-Black-Embroidered-Ethnic-Motifs-A-Line-Dress-130170927-6.jpg",
    new_price: 60,
    old_price: 120
  },
  {
    name: "Designer Ethnic Kurta",
    id: 2,
    image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10842022/2024/3/1/c98eb85c-2bd0-46ab-9ae0-d74309fb6e6d1709270745673-Libas-Black-Embroidered-Ethnic-Motifs-A-Line-Dress-130170927-6.jpg",
    new_price: 75,
    old_price: 150
  },
  {
    name: "Premium Cotton Dress",
    id: 3,
    image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10842022/2024/3/1/c98eb85c-2bd0-46ab-9ae0-d74309fb6e6d1709270745673-Libas-Black-Embroidered-Ethnic-Motifs-A-Line-Dress-130170927-6.jpg",
    new_price: 85,
    old_price: 160
  },
  {
    name: "Stylish Black Kurta",
    id: 4,
    image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10842022/2024/3/1/c98eb85c-2bd0-46ab-9ae0-d74309fb6e6d1709270745673-Libas-Black-Embroidered-Ethnic-Motifs-A-Line-Dress-130170927-6.jpg",
    new_price: 90,
    old_price: 180
  }
]

const Popular = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 rounded-full text-red-600 font-medium text-sm mb-4">
            <Flame size={16} className="mr-2" />
            Trending Now
          </div>
          
          <h2 className="section-title">
            Women's Bestsellers
          </h2>
          
          <p className="section-subtitle">
            Discover our most loved pieces that are flying off the shelves. 
            These customer favorites combine style, comfort, and unbeatable value.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {productdata.map((item, i) => (
            <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <Item 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price}
                product={item}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            View All Bestsellers
          </button>
        </div>
      </div>
    </section>
  )
}

export default Popular

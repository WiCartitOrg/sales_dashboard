import React from 'react'
import MostOrdered from '../data/MostOrderPruducts'
import {useState,useEffect} from 'react'

function MustOrderedList() {
const [MostOrderedProducts, setMostOrderedProducts] = useState([]);
 
useEffect(() => {
 setMostOrderedProducts(MostOrdered)
}, []);

const productList=MostOrderedProducts.map((data)=>{
  return(
    <div class="ordered-product-row">
    <img src={data.image} alt="" class="item-odered-img"/>
    <div class="img-info">
      <h1 class="item-soled-name">{data.name}</h1>
      <h3 class="no-of-item">{data.number} times</h3>
    </div>
  </div>
  )
})

  return (
    <div class="frame-four right-move-three">
    <h1>Most ordered products</h1>
 <div className="minscroll">
<div className="min-cont">
{productList}
</div>
 </div>
  </div>
  )
}

export default MustOrderedList
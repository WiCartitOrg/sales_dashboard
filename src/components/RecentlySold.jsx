import React from 'react'
import {useState,useEffect} from 'react'
import ItemData from '../data/RecentlySoldData'

function RecentlySold() {
    
  const [Productes, setProductes] = useState([]);
  useEffect(() => {
   setProductes(ItemData)
  }, []);

const productList=Productes.map((data)=>{
  return(
    <div class="recent-row">
    <div class="first-lent first-content">
      <img src={data.image} alt="" class="recently-sonld-product-small"/>
      <div class="small-item-info">
        <span class="small-item-name">{data.name}</span>
        <span class="small-item-price">{data.price}</span>
      </div>
    </div>
    <div class="lent"><span><h1>{data.qty}</h1></span></div>
    <div class="lent"><span><h1>{data.date}</h1></span></div>
    <div class="lent"><span><h1>{data.time}</h1></span></div>
    <div class="lent"><span><button class={data.statues}>{data.statues}</button></span></div>
  </div>

  )
})

  return (
    <div class="recently-sold ">
                        <h1>Recently Sold</h1>
                        <div class="recent-row line">
                          <div class="first-lent"><span>Product Name</span></div>
                          <div class="lent"><span>Quantity</span></div>
                          <div class="lent"><span>Date</span></div>
                          <div class="lent"><span>Time</span></div>
                          <div class="lent"><span>Status</span></div>
                        </div>
        
        
                   {productList}    
        
                   
        
                     </div>
  )
}

export default RecentlySold
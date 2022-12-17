import React from 'react'
import {useState,useEffect} from 'react'
import OrderedItems from '../data/orders'
import OrderSinFrame from './OrderSinFrame';
function OrderList() {
  
   
   const [OrderedProducts, setOrderedProducts] = useState([]);


   useEffect(() => {
       setOrderedProducts(OrderedItems)

   }, []);

   const  orderlist =OrderedProducts.map((data)=>{
     return(
      <OrderSinFrame 
       props= {data}
      />
   )
   })



  return (
   <div>
    <div class="oders-frame" >
                    <h1>Orders</h1>
                    <div class="row div">
                      <span>product Name</span>
                      <span>Quantity</span>
                      <span>price</span>
                      <span>Status</span>
                      <span></span>
                    </div>

                    {orderlist}
    </div>
   </div>
  )
}

export default OrderList
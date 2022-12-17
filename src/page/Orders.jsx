import React from 'react'
import MustOrderedList from '../components/MustOrderedList'
import OrderList from '../components/OrderList'



function Orders() {
  return (
    <section className='main-dash grid'>
      <section className='scrollable-dash'>
      <div className="right">
     
       <OrderList/>

      </div>



      <div className="left">
      

      <div class="frame-two ">
        <div class="current-row">
          <span><h1>Current order</h1> <h3>daily</h3></span>
          <aside><span><h3>Today' Order</h3></span></aside>
        </div>
        <div class="current-row">
          <span><h2>#587,346</h2></span>
          <aside><h4 class="orders">3,500</h4><h4>Orders</h4></aside>
        </div>
         <div class="current-order-chart">
        
               
        
        </div>
     </div>



     <div class="frame-three right-move-two">
      <div class="current-row">
         <span><h5>Order Chart</h5> <h3>daily</h3></span>
       </div>
      <div class="piechat">
        
                 {/* <!---  order chart pie chat should be placed here---> */}
        
      </div>
     </div>

     <MustOrderedList/>

    
      </div>
      </section>
    </section>
  )
}

export default Orders

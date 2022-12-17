import React from 'react'
import BestSellingProducts from '../components/BestSellingProducts'
import ProductSlider from '../components/ProductSlider'
import RecentlySold from '../components/RecentlySold'

function Products() {
  return (
    <section className="main-dash gri">
      <section className="scrollable-dash">
        <div className="right">
        <ProductSlider/>
        <RecentlySold/>
        </div>
        <div className="left">
        <div class="frame-two ">
           <div class="current-row">
             <span><h1>Product</h1> <h3>daily</h3></span>
             <aside><span><h3>Today' Order</h3></span></aside>
            </div>
            <div class="current-row">
              <span><h2>#587,346</h2></span>
              <aside><h4 class="orders">3,500</h4><h4>Orders</h4></aside>
            </div>
            <div class="current-order-chart">
        
               {/* <!-- current order graph is to be placed here--> */}
        
            </div>



           
        </div>



        <div class="frame-three ">
              <div class="current-row">
                <span><h5>Product Chart</h5> <h3>daily</h3></span>
              </div>
              <div class="piechat">
        
               {/* <!---  order chart pie chat should be placed here---> */}
        
              </div>
            </div>


            <BestSellingProducts/>
        </div>
      </section>
    </section>
  )
}

export default Products

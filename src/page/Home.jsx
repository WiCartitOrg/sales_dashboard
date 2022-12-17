import React from 'react'
import {Link} from 'react-router-dom'
import Item1Sub1 from '../image/sales products.png'
import Item1Sub2 from '../image/product in store.png'
import Item1Sub3 from '../image/returned product.png'
import InfoIcon from '../image/info.png'
import WalletIcon from '../image/wallet.png'
function Home() {
  return (
    <section className='main-dash grid'>
      <section className='scrollable-dash'>
      <div className="right">
       <div className="top">
        <div className="sub-top">
          <div className="top">
          <img src={Item1Sub1} alt="" />
          
         <h1>
         Sales products
         </h1>

          </div>


          <span>
            <h1>
                  Total
            </h1>
            <h1>
              <b>
                  1,200
              </b>
            </h1>
          </span>


          <span>
            <h1>
                  Cost
            </h1>
            <h1>
              <b>
                  #324,000
              </b>
            </h1>
          </span>



        </div>
        <div className="sub-top">
        <div className="top">
          <img src={Item1Sub2} alt="" />

          <h1>
          Ordered products
          </h1>
          </div>



          <span>
            <h1>
                  Total
            </h1>
            <h1>
              <b>
                  1,200
              </b>
            </h1>
          </span>


          <span>
            <h1>
                  Cost
            </h1>
            <h1>
              <b>
                  #324,000
              </b>
            </h1>
          </span>




        </div>
        <div className="sub-top">
          <div className="top">
          <img src={Item1Sub3} alt="" />

          <h1>
          Returned products
          </h1>
          </div> 


          <span>
            <h1>
                  Total
            </h1>
            <h1>
              <b>
                  1,200
              </b>
            </h1>
          </span>


          <span>
            <h1>
                  Cost
            </h1>
            <h1>
              <b>
                  #324,000
              </b>
            </h1>
          </span>



        </div>
       </div>
       <div className="mid">
       <div class="info">
          <div class="area-chart-dic">
              <h4>Sales</h4>
              <span class="sale-output">
                  #587,346
              </span>
              <p>
                  From the beginning of the month
              </p>
          </div>
          <img src={InfoIcon} alt=""/>
        </div>
       </div>
       <div className="last">

       </div>
      </div>



      <din className="left">
       <div className="top">
          <div class="row space">
                <img src={WalletIcon} alt=""/>
             <div class="wallet-span">
                <h1>Wallet</h1>
                <Link to="/wallet details">
                Details 
                </Link>
             </div>
          </div>
          <div class="wallet-comp">
            <p>Balance</p>
            <h1>#587,346</h1>
          </div>
       </div>
       <div className="mid">
       <div class="top">
         <span><h1>Product Chart</h1> <h2>Monthly</h2></span>
       </div>
       <div class="product-pie-chart">
        
        
      {/* <!---product pie chart should be placed here --> */}
        
        
       </div>

       <div class="bom">
         <span class="product-uploaded">12,000</span>
         <h2>Product uploaded</h2>
       </div>
       </div>
       <div className="last">
        
       </div>
      </din>
      </section>
    </section>
  )
}

export default Home

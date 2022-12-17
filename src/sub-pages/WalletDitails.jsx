import React from 'react'
import { Link } from 'react-router-dom'
import Item1Sub1 from '../image/sales products.png'
import Item1Sub2 from '../image/home-pay (2).png'
import Item1Sub3 from '../image/wallet.png'

function WalletDitails() {
  return (
    <section className='main-dash'>
      <div className="scrollable-dash">
       <div className="right">


       <div class="cashe-his ">
         <div class="cash-dit">
          <h1>move cash to your <br /> Account</h1>
          <span class="row">
            <p>Your Earning this Month:</p>
            <h1>#587,346</h1>
          </span>
         </div>
         <div class="walet-pay-cont row">
            <img src={Item1Sub1} alt=""/>
            <div class="walet-pay-dit colum">
              <p>Earnings</p>
              <h2>#546,670</h2>
            </div>
        </div>
        <div class="walet-pay-cont row">
            <img src={Item1Sub2} alt=""/>
            <div class="walet-pay-dit colum">
            <p>Store</p>
              <h2>3,500</h2>
           </div>
        </div>
       </div>      
          
       <div class="oders-frame  ">
        <h1>Orders</h1>
        <div class="row div">
          <span>Amount</span>
          <span>Account</span>
          <span>date</span>
          <span>Status</span>
        </div>
        <div class="row">
          <span><h1>10,000</h1></span>
          <span><h2>2134345616</h2></span>
          <span><h2>2m</h2></span>
          <span><button class="sent">completed</button></span>
        </div>
        <div class="row">
          <span><h1>25,000</h1></span>
          <span><h2>2345618764</h2></span>
          <span><h2>1h</h2></span>
          <span><button class="not-sent">incompleted</button></span>
        </div>
        <div class="row">
          <span><h1>30,0000</h1></span>
          <span><h2>2525252526</h2></span>
          <span><h2>5h</h2></span>
          <span><button class="pending">Pending!</button></span>
         </div> 
       </div>
       </div>


       <div className="left">
       <div class="frame-two right-move-one waltet-top">
         <div class="to">
           <div class="row space">
             <img src={Item1Sub3} alt=""/>
             <div class="wallet-span">
              <h1>Wallet</h1>
                           
             </div>
           </div>
                       
           <div class="wallet-comp">
             <p>Balance</p>
             <h1>#587,346</h1>
           </div>
           <div>
            
           </div>
            <Link to="/cash/enter account number">
          <button class="withrow" id="withrow">
           Withdraw
         </button>
                </Link>          
         </div>
      
        </div> 


        <div class="frame-three">
          <div class="row space">
             <img src={Item1Sub3} alt=""/>
             <div class="wallet-span">
              <h1>Transactions</h1>
              <div class="wallet-comp">
               <p>Monthly</p>
              </div>
              
             </div>
          </div>
                     
          <div class="trans-comp">
            <h1>Transactions</h1>
            <p>25 Transactions</p>
          </div>
        </div> 
       </div>
      </div>
    </section>
  )
}

export default WalletDitails

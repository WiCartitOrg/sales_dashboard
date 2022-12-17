import React from 'react'
import {Link,useLocation } from 'react-router-dom';
function CashOutStep() {
  const pathname = useLocation().pathname;

  if(pathname==="/cash/enter account number"){
    console.log("yes");
    return(
    
  <div className='cash-out-back'>
          <section class="steps colum">
      <h1>
          Please provide the recipient account number 
      </h1>
      <form action="" class="pay-form">
          <input type="text" name="account" placeholder="Account number" id="account-no"/>
          <input type="text" name="amount" placeholder="amount" id="amount"/>
          <label for="transfar" id="transfar-all">
              <input type="radio" name="transfar" id="transfar" class="trans-radio"/>
              <div class="radio-box"></div>
              Transfer-all
          </label>
      </form>
      <div class="yes-btn row">
        <Link to="/">
              <button class="no">Back</button>
        </Link>
      
      <Link to="/cash/verify">
          <button class="yes">proceed</button>
      </Link>
       
      </div>
  </section>
  </div>
    )
  }else if(pathname=== "/cash/verify"){
    return(
    
      <div className='cash-out-back'>
          <section class="steps colum">
            <h1 class="setit">Are you sure you want to transfer <b>#320,000</b>To
            <b>yusuf muhyideen ?</b>
            </h1>
            <div class="yes-btn row">
                <Link to="/">
                    <button class="no">No</button>
                </Link>
                <Link to="/cash/put pin">
                    <button class="yes">Yes</button>
                </Link>
               
            </div>
        </section>
      </div>
        )
  }else if(pathname=== "/cash/put pin"){
    return(
    
      <div className='cash-out-back'>
          <section class="steps colum">
            <form action="" class="step3">

                <label for="">
                    Input Pin
                </label>
                <input type="password" name="pin" placeholder="PIN" id="pin" class="pin"/>
            </form>
            
            <div class="yes-btn row">
            <Link to="/">
                    <button class="no">Cancel</button>
                </Link>
                <Link to="/cash/Thanks">
                    <button class="yes">Proceed</button>
                </Link>
               
            </div>
        </section>
      </div>
        )
      }else{
        return(
        
          <div className='cash-out-back'>
           <section class="steps colum">
    <h2>Thank you for doing business with us!</h2>
    <h1 class="mide">
        Transaction is processing, you will be notified shortly.
    </h1>
    <div class="yes-btn">
        
    <div class="yes-btn">
                
                <Link to="/">
                    <button class="back-home">Back home</button>
                </Link>
               
            </div>
    </div>
</section>
          </div>
            )
      
  }
 
}

export default CashOutStep
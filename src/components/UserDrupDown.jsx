import React from 'react'


import user from '../image/user.png'


function UserDrupDown(props) {
  return (
  
      <div className={props.state?"user-dit":"user-dit user-dit-out"} >
              <div className="boder-dawn" >
              <img src={user} alt="" />
                <span className="preferred-dit-store-name">
                  <h1>Harry maguire</h1>
                  <p>53,453sale</p>
                </span>
              
              
              </div>
              <span className="dit-row">
               
                 <p>
                  My profile            
                 </p>
                
              </span>
              <span className="dit-row">
                
                 <p>
                  favorite
                 </p>
              </span>
              <span className="dit-row">
                
                 <p>
                  Message Buyer
                 </p>
              </span>
              <span className="dit-row">
             
                 <p>
                  settings
                 </p>
              </span>
              <span className="dit-row">
                 
                 <p>
                  logout
                 </p>
              </span>
            </div>
 
  )
}

export default UserDrupDown

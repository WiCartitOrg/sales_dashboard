import React from 'react'
import {useState} from 'react'
import {useLocation } from 'react-router-dom';

// images start from here

import searchIcon from '../image/Search Icon.png'
import calendal from '../image/calinda.png'
import lightTheme from '../image/day.png' 
import darkTheme from '../image/night.png'
import alarm from '../image/alarm.png'
import UserDrupDown from './UserDrupDown'
import user from '../image/user.png'



function TopNav(props) {
  const pathname = useLocation().pathname;
    const [ToggleCal, setToggleCal] = useState(true);
    const [ToggleUser, setToggleUser] = useState(true);
  return (
<>
{(pathname === "/cash/enter account number")||(pathname === "/cash/verify")||(pathname === "/cash/put pin")||(pathname === "/cash/Thanks")?"":
    <div className='cont'>
              <nav>
           <ul>
            <button className="time btn-act"><li>Daily</li></button>
            <button className="time"><li>weekly</li></button>
            <button className="time"><li>Annual</li></button>
           </ul> 


           <div className="calinda" onClick={()=>{
            setToggleCal(item=>!item)
           }}>
             <img src={calendal} alt="" className="calinda-logo"></img>
             <h1>Mar 2022</h1>
           </div>
               
              <section className={ToggleCal?"calinder-maine-cont":"calinder-maine-cont calinder-show "} >
           <div className="calinda-layout">
            <div className="yars-mount row">
             <button className="mount row">
              <h1>April</h1>
             
             </button>
             <button className="year row">
              <h1>2022</h1>
             
             </button>
            </div>
              <div className="weekdays row">
                <div>mon</div>
                <div>tue</div>
                <div>wed</div>
                <div>thu</div>
                <div>fri</div>
                <div>sat</div>
                <div>sun</div>
              </div>
              <div className="weekday-no">
                <div className="priv-weekday-no">29</div>
                <div className="priv-weekday-no">30</div>
                <div className="priv-weekday-no">31</div>
                <div className="day">1</div>
                <div className="day">2</div>
                <div className="day">3</div>
                <div className="day">4</div>
                <div className="day">5</div>
                <div className="day">6</div>
                <div className="day">7</div>
                <div className="day">8</div>
                <div className="day">9</div>
                <div className="day">10</div>
                <div className="day">11</div>
                <div className="day">12</div>
                <div className="day">13</div>
                <div className="day">14</div>
                <div className="day">15</div>
                <div className="day">16</div>
                <div className="day">17</div>
                <div className="day">18</div>
                <div className="day">19</div>
                <div className="day">20</div>
                <div className="day">21</div>
                <div className="day">22</div>
                <div className="day-rang day">23</div>
                <div className="day-btw day">24</div>
                <div className="day-btw day">25</div>
                <div className="day-btw day">26</div>
                <div className="day-btw day">27</div>
                <div className="day-rang day">28</div>
                <div className="day">29</div>
                <div className="day">30</div>
                <div className="next-week-day-no">1</div>
                <div className="next-week-day-no">2</div>
                <div className="next-week-day-no">3</div>
                <div className="next-week-day-no">4</div>
                <div className="next-week-day-no">5</div>
                <div className="next-week-day-no">6</div>
                <div className="next-week-day-no">7</div>
                <div className="next-week-day-no">8</div>
                <div className="next-week-day-no">9</div>
              </div>
           </div>
          </section>
        


           <div className="search">
            <input type="text" placeholder='search' />
            <img src={searchIcon} alt="" className="search-icon"/>
            <button className="theme" onClick={()=>
            {
                props.theme(item=>!item) 
                }
                }> <div className={props.condition?"before":"before atare"} ></div>
           <img src={lightTheme} alt="" />
           <img src={darkTheme} alt="" />
            </button>
            <img src={alarm} alt="" className="alarm" />
           </div>
           <div className="user" >
         <div onClick={()=>{
            setToggleUser(item=>!item)
            console.log("done");
         }} className='user' >
            <img src={user} alt="" />
            <span className="preferred-store-name">Harry Maguire</span>
         </div>
          
            <UserDrupDown 
            state={ToggleUser}
            />
           </div>         
        </nav>
    </div>
 }
</>
  )
}

export default TopNav

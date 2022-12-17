import React from 'react'
import logo from '../image/logo.png'
import dawn from '../image/dawn.png'
import { useState } from 'react';
import { Link ,useLocation } from 'react-router-dom';
function RightNav() {
    const [DropDawn, setDropDawn] = useState(true);
    const pathname = useLocation().pathname;
  return (
         <>
         {(pathname === "/cash/enter account number")||(pathname === "/cash/verify")||(pathname === "/cash/put pin")||(pathname === "/cash/Thanks")?"":
         <section className="navegation">
         
     
        <div className="logo">
            <img src={logo} alt="" />
        </div>
       <div className="nav">
        <nav>
            <ul>
                <Link to="/">
                <li className={pathname==="/"?"list active":"list"}>
                 <button id="home" className="button">Home</button>
                </li>
                </Link>
                <Link to="/orders">
                <li className={pathname==="/orders"?"list active":"list"}>
                    <button id="order" className="button">Orders</button> 
                </li>
                </Link>
                <Link to="/products"> 
                <li className={pathname==="/products"?"list active":"list"}>
                <button id="product" className="button">Products</button>
                
                <img src={dawn} alt="" className={DropDawn?"list-img-nav":"list-img-nav sub-active"} onClick={()=>{
                    setDropDawn(item => !item)
                }}/>    
            
                </li>


                <div className={DropDawn?"sub":"sub sub-out"}>
                    <Link to="/Create Store">
                        <li className={pathname==="/Create Store"?"list":"list"}>
                <button id="product" className={pathname==="/Create Store"?"butt active-nav-blue":"butt "}>
                <div className="list-sub-svg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 21C11.3284 21 12 20.3284 12 19.5C12 18.6716 11.3284 18 10.5 18C9.67157 18 9 18.6716 9 19.5C9 20.3284 9.67157 21 10.5 21Z" fill="black"/>
                    <path d="M17.5 21C18.3284 21 19 20.3284 19 19.5C19 18.6716 18.3284 18 17.5 18C16.6716 18 16 18.6716 16 19.5C16 20.3284 16.6716 21 17.5 21Z" fill="black"/>
                    <path d="M12.9998 13.0012H14.9998V10.0113H17.9898V8.01125H14.9998V5.03125H12.9998V8.01125H10.0098V10.0113H12.9998V13.0012Z" fill="black"/>
                    <path d="M10 17H18C18.2014 16.9994 18.398 16.938 18.564 16.8238C18.7299 16.7096 18.8575 16.5479 18.93 16.36L21.76 9H19.62L17.31 15H10.67L6.18 4.23C6.02776 3.86507 5.77077 3.55344 5.44149 3.33452C5.11221 3.11559 4.72542 2.99918 4.33 3H2V5H4.33L9.08 16.38C9.15502 16.5626 9.28242 16.719 9.44614 16.8293C9.60986 16.9396 9.80257 16.999 10 17Z" fill="black"/>
                    </svg>

                    </div>
                    Create Store</button> 
                </li>
                    </Link>
                <Link to="/ProductList" >
                <li className={pathname==="/ProductList"?"list ":"list"}>
                    <button id="ProductList" className={pathname==="/ProductList"?"butt active-nav-blue":"butt "}>
                    <div className="list-sub-svg">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.375 0.5H5.6875C5.58437 0.5 5.5 0.584375 5.5 0.6875V2C5.5 2.10313 5.58437 2.1875 5.6875 2.1875H19.375C19.4781 2.1875 19.5625 2.10313 19.5625 2V0.6875C19.5625 0.584375 19.4781 0.5 19.375 0.5ZM19.375 7.15625H5.6875C5.58437 7.15625 5.5 7.24062 5.5 7.34375V8.65625C5.5 8.75937 5.58437 8.84375 5.6875 8.84375H19.375C19.4781 8.84375 19.5625 8.75937 19.5625 8.65625V7.34375C19.5625 7.24062 19.4781 7.15625 19.375 7.15625ZM19.375 13.8125H5.6875C5.58437 13.8125 5.5 13.8969 5.5 14V15.3125C5.5 15.4156 5.58437 15.5 5.6875 15.5H19.375C19.4781 15.5 19.5625 15.4156 19.5625 15.3125V14C19.5625 13.8969 19.4781 13.8125 19.375 13.8125ZM0.4375 1.34375C0.4375 1.51611 0.471449 1.68678 0.537408 1.84602C0.603367 2.00526 0.700046 2.14995 0.821922 2.27183C0.943799 2.3937 1.08849 2.49038 1.24773 2.55634C1.40697 2.6223 1.57764 2.65625 1.75 2.65625C1.92236 2.65625 2.09303 2.6223 2.25227 2.55634C2.41151 2.49038 2.5562 2.3937 2.67808 2.27183C2.79995 2.14995 2.89663 2.00526 2.96259 1.84602C3.02855 1.68678 3.0625 1.51611 3.0625 1.34375C3.0625 1.17139 3.02855 1.00072 2.96259 0.841478C2.89663 0.682238 2.79995 0.537549 2.67808 0.415672C2.5562 0.293796 2.41151 0.197117 2.25227 0.131158C2.09303 0.0651987 1.92236 0.03125 1.75 0.03125C1.57764 0.03125 1.40697 0.0651987 1.24773 0.131158C1.08849 0.197117 0.943799 0.293796 0.821922 0.415672C0.700046 0.537549 0.603367 0.682238 0.537408 0.841478C0.471449 1.00072 0.4375 1.17139 0.4375 1.34375ZM0.4375 8C0.4375 8.17236 0.471449 8.34303 0.537408 8.50227C0.603367 8.66151 0.700046 8.8062 0.821922 8.92808C0.943799 9.04995 1.08849 9.14663 1.24773 9.21259C1.40697 9.27855 1.57764 9.3125 1.75 9.3125C1.92236 9.3125 2.09303 9.27855 2.25227 9.21259C2.41151 9.14663 2.5562 9.04995 2.67808 8.92808C2.79995 8.8062 2.89663 8.66151 2.96259 8.50227C3.02855 8.34303 3.0625 8.17236 3.0625 8C3.0625 7.82764 3.02855 7.65697 2.96259 7.49773C2.89663 7.33849 2.79995 7.1938 2.67808 7.07192C2.5562 6.95005 2.41151 6.85337 2.25227 6.78741C2.09303 6.72145 1.92236 6.6875 1.75 6.6875C1.57764 6.6875 1.40697 6.72145 1.24773 6.78741C1.08849 6.85337 0.943799 6.95005 0.821922 7.07192C0.700046 7.1938 0.603367 7.33849 0.537408 7.49773C0.471449 7.65697 0.4375 7.82764 0.4375 8ZM0.4375 14.6562C0.4375 14.8286 0.471449 14.9993 0.537408 15.1585C0.603367 15.3178 0.700046 15.4625 0.821922 15.5843C0.943799 15.7062 1.08849 15.8029 1.24773 15.8688C1.40697 15.9348 1.57764 15.9688 1.75 15.9688C1.92236 15.9688 2.09303 15.9348 2.25227 15.8688C2.41151 15.8029 2.5562 15.7062 2.67808 15.5843C2.79995 15.4625 2.89663 15.3178 2.96259 15.1585C3.02855 14.9993 3.0625 14.8286 3.0625 14.6562C3.0625 14.4839 3.02855 14.3132 2.96259 14.154C2.89663 13.9947 2.79995 13.85 2.67808 13.7282C2.5562 13.6063 2.41151 13.5096 2.25227 13.4437C2.09303 13.3777 1.92236 13.3438 1.75 13.3438C1.57764 13.3438 1.40697 13.3777 1.24773 13.4437C1.08849 13.5096 0.943799 13.6063 0.821922 13.7282C0.700046 13.85 0.603367 13.9947 0.537408 14.154C0.471449 14.3132 0.4375 14.4839 0.4375 14.6562Z" fill="#1C00FF"/>
</svg>


                    </div>
                Product List
                    </button> 
                </li>
                 </Link>
                </div>



                </Link>
                <Link to="/messages">
                <li className={pathname==="/messages"?"list active":"list"}>
                    <button id="message" className="button">Messages<span id="no-message">12</span></button>
                </li>
                </Link>
                <Link to="/settings">
                <li className={pathname==="/settings"?"list active":"list"}>
                  <button id="setting" className="button">Settings</button> 
                </li>
                </Link>
                <Link to="/supports">
                <li className={pathname==="/supports"?"list active":"list"}>
                <button id="support" className="button">Support</button> 
                </li>
                </Link>
            </ul>
        </nav>
        <div className="nav-des">
            <img src={logo} alt="logo" className="nav-des-logo" />
            <h2>Promote your sales</h2>
            <p>Get 10 time of your current profit at the end of the month</p>
        </div>
       </div>
    </section>
}
    </>
  )
}

export default RightNav
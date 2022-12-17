import React from 'react'
import {useState,useEffect} from 'react'
import move from '../image/nav.png'
import add from '../image/add-more.png'
import ItemData from '../data/product'
function ProductSlider() {

   const [Products, setProducts] = useState([]);
   useEffect(() => {
   setProducts(ItemData)
   }, []);

   const productList = Products.map((data)=>{
    return(
        <div class="product-frame">
        <div class="contect">
        <div class="product-img-div shak-img">
          <img src={data.image} alt="" class="product-in-stoke-quantety" />
        </div>
        <span><h1>{data.name}</h1><h1>#{data.price}</h1></span>
        <span><h2>{data.speck}</h2><h2 class="no-of-product-item-remain">{data.quantity}</h2></span>
      </div>
       </div>
    )
   })
  return (
    <div class="top tops top-move">
                      <div class="slide-nav">
                          <img src={move} alt="" id="move-right"/>
                          <img src={move} alt="" id="move-left"/>
                      </div>
                      <div class="product-slide">
                             <div class="product-conts-slide product-slide">
        
                            {productList}
        
                            </div>
                            
                      </div>
                      <a href="./products - add-page.html">
                        <div className='see-more'>
                      see more
                      <div class="add-more">
                       <img src={add} alt=""/>
                      </div>
                        </div>
                      </a>
                     </div>
  )
}

export default ProductSlider
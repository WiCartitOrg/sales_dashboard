import React from 'react'
import ProductList from '../data/productListData'
import {useState,UseEffect}  from 'react'
import MoreOpptions from './MoreOpptions';
function ProductListBoard() {

    const [productList, setproductList] = useState(ProductList);
    const [SetPopup, setSetPopup] = useState(true);
    
    // UseEffect(() => {
    
    //    setproductList(ProductList)

    // }, []);


const newList =productList.map((data)=>{
    return(
        <div className="row">
        <span>
           <img src={data.url} alt="" /> 
            {data.name}
        </span>
        <span>{data.inStock}</span>
        <span>{data.date}</span>
        <span>{data.price}</span>
        <span>{data.category}</span>
      <MoreOpptions
      props={data}
      set={setSetPopup}
      />
        
     </div>
    )
})


  return (
    <div class="oders-frame">

    <h1>
    Product list
    </h1>
   <div className="row div">
      <span>Product Name</span>
      <span>In Stock</span>
      <span>Date</span>
      <span>Price</span>
      <span>Category</span>
      <span></span>
      
   </div>

 
    {newList}


    <section className={SetPopup?"more-popup":"more-popup popup-more"}>
     <h1>
     Are you sure you want to delete this product?
     </h1>
     <p>
     Deleting this product will erase its data from your stock and will not be visible to custimers again
     </p>
     <div>
      <button onClick={()=>{
        setSetPopup(item=>!item)
      }}>
        Cancle
      </button>

      
      <button  onClick={()=>{
        setSetPopup(item=>!item)
      }}>
         Delete
      </button>
     </div>
    </section>
    </div>
  )
}

export default ProductListBoard

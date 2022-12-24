import React from 'react'
import ProductList from '../data/productListData'
import {useState,UseEffect}  from 'react'
import MoreOpptions from './MoreOpptions';
function ProductListBoard() {

    const [productList, setproductList] = useState(ProductList);
    
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


    </div>
  )
}

export default ProductListBoard

import React from 'react'
import {useState,useEffect} from 'react'
import OrderedItems from '../data/ColorOrder'



function OrderSinFrame(prop) {
  const [DetailsOn, setDetailsOn] = useState(prop.props.detailCondition);
  const [SetId, setSetId] = useState();
  const [ColorContent, setColorContent] = useState([]);
 
  useEffect(() => {
    console.log(SetId);
    for (let i = 0; i < OrderedItems.length; i++) {
      const element = OrderedItems[i]
      if(element.key === SetId){
        setColorContent(item=>[...item,element])
      }
    }
    
  }, [SetId]);
  console.log(ColorContent);

const colorList = ColorContent.map(data=>{
  return(
    <div className='row'>
    <span>{data.color}</span>
    <span>{data.quintets}</span>
    <span>{data.size}</span>
    <span>{data.price}</span>
   </div>
  )
})
  // console.log(OrderedItems);
  return (
    <div>
       <div class="row">
       
      <span><h1>{prop.props.name}</h1></span>
      <span><h2>{prop.props.quintets}</h2></span>
      <span><h2>#{prop.props.price}</h2></span>
      <span><button className={prop.props.status}>{prop.props.status}</button></span>
      <span onClick={()=>{
        setDetailsOn(item=>!item)
        setSetId(prop.props.id)
      }}>details</span>
      <div className={DetailsOn?"details":"details details-out"}>
           <div className="lit">
           <h1>Product Name: {prop.props.name}</h1>
           <div className="row"><h1>Date: {prop.props.dateoforder}</h1><h1>{prop.props.quintets}</h1></div>
           </div>
          <div className='dit'>
          <div className='row'>
            <span>color</span>
            <span>Quantity</span>
            <span>size</span>
            <span>price</span>
           </div>
        
          {colorList}

          </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSinFrame

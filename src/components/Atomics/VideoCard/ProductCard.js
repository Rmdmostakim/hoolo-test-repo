 


const ProductCard = (props) => {
 
     
   const { id,product_name,store_id,slug,product_detail,category_id,product_tags,price,offer_price,tax,tax_rate,thumbnail, images,name,regular_price,permalink}=props.product



 
 

  return (
     
    <>
   

       <div className="card-category-items mt-0 mb-0  " >
     <a href={`https://shop.hoolo.live/products/${id}/${slug}`}>
    <div style={{backgroundColor:"#ede4e4",margin:'0 3px', borderRadius:'10px'}}>
 
      <div >
 
       <img className="img-fluid  " style={{background:'none',marginTop:'5px',borderRadius:'25px'}} src={`https://shop.hoolo.live/images/simple_products/${thumbnail}`} alt={product_name} />
       </div>
       <div   className="p-3">
 
 
       
       <h5 style={{fontSize:'12px'}}>{
     offer_price==0?<span>{ `৳ ${price}`}  </span>:<span> <strong> { `৳ ${ offer_price} `} </strong> <strong style={{textDecoration:'line-through'}}> { `৳ ${price}`}</strong> </span>    
     
   }</h5>
        
       
       </div>
   
      
      </div> 
      </a>
   </div>
    
 
    
        
    
          
         
    </>
  );
};




export default ProductCard;

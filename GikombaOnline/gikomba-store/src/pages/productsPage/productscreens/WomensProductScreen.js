import React from 'react'
import {Link} from 'react-router-dom'
import {MDBIcon} from 'mdbreact'
import WomensWearData from '../Data/WomensWearData';


function ProductScreen(props) {
      console.log(props.match.params.id);
      const product = WomensWearData.products.find(x => x._id === props.match.params.id);
       return(
       <div>
       <div className="back-to-result"> 
               <Link to="/">Back to result</Link>
           </div>
            (
                <div className="details">
               <div className="details-image">
                   <img src={product.images} alt="product"/>
               </div>
               <div className="details-info">
                 <ul>
                     <li>
                         <h4>{product.name}</h4>
                     </li>
                     <li>
                         {product.rating} Stars ({product.numReviews} Reviews)
                     </li>
                     <li>
                       Price:<b>Ksh.{product.price}</b>
                     </li>
                     <li>
                         Description:
                         <div>
                             {product.description}
                         </div>
                     </li>
                 </ul>
               </div>
           <div className="details-action">
               <ul>
                   <li>
                       price: {product.price}
                   </li>
                   <li>
                       status: {product.status}
                   </li>
                   <li>
                       Qty:<select>
                           <option>1</option>
                           <option>2</option>
                           <option>3</option>
                           <option>4</option>
                           <option>5</option>
                       </select>
                   </li>
                   <li>
                       <button className="button">Add to cart <MDBIcon icon="cart-plus"/></button>
                   </li>
               </ul>
           </div>
           </div>
        )
        
</div>
           
 )   
}

export default ProductScreen

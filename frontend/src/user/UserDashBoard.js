import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
const ManageUserOrders = () => {
  return (
    <div style={{backgroundColor:"#abeff5"}}>

    <Base
      title="Your Profile"
      description="Change your password and Email here!"
      className="container bg-white p-4 rounded"
    >
      {
        <Link to="/user/password-reset" className="btn btn-info rounded mb-3">
          
          Change Password
        </Link>
         
      }    
    
      <br></br>
      {
         <Link to="/user/email-reset" className="btn btn-info rounded mb-3">
         Change Email
       </Link>
      }  
      <div className="row col-12">
      <div class="card"  style={{width: 18 +'rem'}} >
  <img src="https://images.randomhouse.com/cover/9780385742511" className="card-img-top" alt="..." height="360"/>
  <div class="card-body">
    <h5 class="card-title">Books</h5>
    <p class="card-text">Explore Books.</p>
    <a href="http://localhost:3000/ourproducts" class="btn btn-primary">Explore</a>
  </div>
</div>
<div class="card mx-3"  style={{width: 18 +'rem'}} >
  <img src="https://cdn.shopify.com/s/files/1/1816/6561/products/b_grande.jpg?v=1571440376" className="card-img-top" alt="..." height="360"/>
  <div class="card-body">
    <h5 class="card-title">Trendy Tops</h5>
    <p class="card-text">Explore Fashion.</p>
    <a href="http://localhost:3000/ourproducts" class="btn btn-primary">Explore</a>
  </div>
</div>
<div class="card mx-3"  style={{width: 18 +'rem'}} >
  <img src="https://i.pinimg.com/originals/70/65/de/7065de99a2dbc482a05f3db99558325d.jpg" className="card-img-top" alt="..." height="360"/>
  <div class="card-body">
    <h5 class="card-title">Cute Bags</h5>
    <p class="card-text">Wide variety of bags!!.</p>
    <a href="http://localhost:3000/ourproducts" class="btn btn-primary">Explore</a>
  </div>
</div>

</div>

     </Base>
     </div>
  );
};

export default ManageUserOrders;

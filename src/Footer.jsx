import React from 'react'
import {Link} from "react-router-dom"

function Footer() {
  return (
    <footer
    className="text-center text-lg-start text-white"
   
    >
      <hr/>
 
 
 
 
 
 <section className="">
 <div className=" text-center text-md-start mt-5">
  
  <div className="row mt-3">
   
    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
    
      <h6 className="text-uppercase fw-bold">NFTs</h6>
      <hr
          className="mb-4 mt-0 d-inline-block mx-auto"
          style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
          />
      <p>
      Go Paperless!. Simple And Easy-to-use Online Invoicing Software for Small Business Owners & Firms
      </p>
    </div>
 
 
  
    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
    
      <h6 className="text-uppercase fw-bold">Links</h6>
      <hr
          className="mb-4 mt-0 d-inline-block mx-auto"
          style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
          />
     
      <p>
     <Link to="" style={{color:'white',textDecoration:'none'}}> Home</Link>
      </p>
      <p>About Us</p>
       <p>
       <Link to="/login" style={{color:'white',textDecoration:'none'}}>Login</Link>
      </p>
      <p>
      <Link to="/signup" style={{color:'white',textDecoration:'none'}}>Sign up</Link></p>
      
    </div>
   
    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
     
     
     
    
    </div>
    
    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
     
      <h6 className="text-uppercase fw-bold">Contact</h6>
      <hr
          className="mb-4 mt-0 d-inline-block mx-auto"
          style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
          />
      <p><i  className="fas fa-home mr-3"></i>Akure, Ondo state, NG</p>
      <p><i  className="fas fa-envelope mr-3"></i> hikay123@gmail.com</p>
      <p><i  className="fas fa-phone mr-3"></i> +234 9057772744</p>
      <p><i  className="fas fa-print mr-3"></i> +234 8148837221</p>
      <div>
        <input type="text"/>
      </div>
      <br/>
    </div>
    
  
  </div>
 
 </div>
 </section>
 
 
 
 <div
   className="text-center p-3"
   style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
   >
 © 2020 Copyright : O'invoice | Go Paperless!!
 
 </div>
 
 
 </footer>
  )
}

export default Footer
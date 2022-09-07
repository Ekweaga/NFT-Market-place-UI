import React from "react";
import { useState,useEffect } from 'react';



const Modal = () => {
  const [inputNo,setInputNo] = useState('')
  const [inputQty,setInputQty] = useState('')
  const [showmodal,setshowmodal] =useState(false)
  const [success,setsuccess] = useState('')
  const [error,seterror] = useState('')

  const modalShow = () =>{
   document.getElementById("modal").style.display="none"
  }

  const handlesubmit = ()=>{
    if(inputNo === "" || inputQty === ""){
      seterror("Errors input fields")
      setsuccess(null)
    }
    else{
      seterror(null)
      setsuccess("Received your Bid, reach via email")
      setTimeout(()=>{
          modalShow();
      },1000)
    }
  }
  return (
    <>
    
    <div className="modal__wrapper" id="modal">
      
      <div className="single__modal">
        <span className="close__modal">
          <b class="ri-close-line" onClick={modalShow}>X</b>
        </span>
        <h6 className="text-center text-light">Place a Bid</h6>
        <p className="text-center text-light">
          You must bid at least <span className="money">5.89 ETH</span>
        </p>

        <div className="input__item mb-4">
          <input type="number" placeholder="00 : 00 ETH" onChange={(e)=>setInputNo(e.target.value)}/>
        </div>
        <div><p style={{color:'red'}}>{error ? error :null}</p></div>

        <div className="input__item mb-3">
          <h6>Enter Quantity</h6>
          <input type="number" placeholder="Enter quantity" required onChange={(e)=>setInputQty(e.target.value)}/>
        </div>
        <div><p style={{color:'red'}}>{error ? error :null}</p></div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>You must bid at least</p>
          <span className="money">5.89 ETH</span>
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>Service Fee</p>
          <span className="money">0.89 ETH</span>
        </div>

        <div><p style={{color:'green'}}>{success ? success :null}</p></div>

        <button className="place__bid-btn" style={{width:'100%'}} onClick={handlesubmit}>Place a Bid</button>
      </div>
    </div>
    </>
  );
};

export default Modal;

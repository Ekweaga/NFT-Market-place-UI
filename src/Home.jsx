import React from 'react'
import hero from "./images/hero.jpg"
import { useState,useEffect } from 'react';
import avatar1 from "./images/ava-01.png"
import avatar2 from "./images/ava-02.png"
import avatar3 from "./images/ava-03.png"
import avatar4 from "./images/ava-04.png"
import {NFT__DATA} from "./data.js"
import {Link} from "react-router-dom"
import {BiPencil} from "react-icons/bi"
import {MdOutlineExplore} from "react-icons/md"
import Modal from './Modal';
import bg from "./images/blurbg.png"
import blurbg from "./images/blureffect.png"
import heroimg from "./images/Hero.png"
import binance from "./images/binance 1.png"
import bitmex from "./images/bitmex 1.png"
import vector from "./images/Vector.png"
import ellipse from "./images/Ellipse.png"
import aut1 from "./images/aut1.png"
import aut2 from "./images/aut2.png"
import aut3 from "./images/aut3.png"
import arrbtn from "./images/arrbtn.png"
import blurr from "./images/Blurr.png"
import autbg from "./images/autbg.png"
import view from "./images/view.png"
import step1 from "./images/Step1.png"
import step2 from "./images/Step2.png"
import step3 from "./images/Step3.png"
import step4 from "./images/Step4.png"
import arrflow from "./images/workflow.png"
import proround from "./images/pround.png"
import p1 from "./images/p1.png"
import p2 from "./images/p2.png"
import p3 from "./images/p3.png"
import bid1 from "./images/Bid1.png"
import bid2 from "./images/Bid2.png"
import bid3 from "./images/Bid3.png"
import creator1 from "./images/1.png"
import creator2 from "./images/2.png"
import creator3 from "./images/3.png"
import bgg from "./images/Pattern.png"
import explore from "./images/Button.png"
import createbtn from "./images/createbtn.png"
import scroll from "./images/Scroll.png"
import rec from "./images/Rectangle.png"

function Home() {
  const [showmodal,setshowmodal] =useState(false)

  const modalShow = () =>{
    setshowmodal(!showmodal)
  }

 

  return (
  <> 
  <div style={{background:`url(${bg})`}}>
  <div  className='flex flex-col md:flex-row items-center justify-center mb-[100px] md:w-[90%] mx-auto'>
    <div className="flex flex-col md:w-[550px] mt-[50px] p-3">
      <h1 className="md:text-6xl text-5xl font-bold md:leading-[80px]">Explore,Buy and Sell the <span className='text-[#FFCE4E]'>Best NFTs!</span></h1>
      <div className="mt-[30px] flex items-center gap-[20px] justify-center w-[290px]"><img src={explore} className="w-[120px]"/> <img src={createbtn} className="w-[120px]"/></div>
      <div className="mt-[30px] flex items-center gap-[80px]">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold text-3xl">400+</h2>
          <p className='text-sm'>Artworks</p>
        </div>
        <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-3xl">40+</h2>
          <p className='text-sm'>Auctions</p>
        </div>
        <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-3xl">10+</h2>
          <p className='text-sm'>Creators</p>
        </div>
      </div>
    </div>
    <div className='p-5 z-50  relative' style={{background:`url(${bg})`}}>
      <img src={scroll} className="absolute -left-[80px] -bottom-[80px] w-[150px] hidden md:block"/>

    <img src={heroimg} className="w-[400px] -z-10 mt-[30px]"/>

    </div>
  </div>
  </div> 

  <div className="grid md:grid-cols-4 grid-cols-2 mt-[50px] w-[90%] mx-auto gap-[20px] items-center ">
    <img src={binance} className="w-[200px]"/>
    <img src={bitmex} className="w-[200px]"/>
    <img src={vector} className="w-[200px]"/>
    <img src={binance} className="w-[200px]"/>
  </div>

  <div className="auctionsContainer mt-[50px] relative md:p-[50px] md:h-[750px] flex flex-col items-center justify-center" style={{background:`url(${autbg})`}}>
    <img src={blurr} className="absolute left-0 md:-top-[350px] -top[350px]"/>
 
    <div className='md:w-[40%] mx-auto flex items-center justify-center bg-transparent relative'>
   
     <img src={ellipse} className="w-[60px] z-10 -mr-[40px] "/> <h1 className="text-center text-3xl z-40 bg-transparent font-bold">Live Auctions</h1>
    </div>

    <div className=" md:w-[88%] relative ">
      <img src={arrbtn} className="absolute right-0 top-8 w-[80px] hidden md:block"/>
      <div className="auctions flex flex-col md:flex-row items-center md:justify-around md:w-[88%] mx-auto  mt-[100px] gap-[20px]">
      <img src={aut1} className="h-[400px]  w-[350px]"/>
    <img src={aut2} className="h-[400px]  w-[350px]"/>
    <img src={aut2} className="h-[400px]  w-[350px]"/>
    <img src={aut2} className="h-[400px]  w-[350px]"/>
      </div>
   
    </div>

    <div><img src={view} className="w-[150px] mt-[50px] bg-transparent"/></div>
  </div>

  <div className='WorksFlow mt-[50px] relative '>
    <img src={blurbg} className="absolute -top-[500px] left-[50px]"/>

    <h1 className="text-center text-3xl font-bold">How It Works</h1>
    <div className="works flex md:w-[70%] mx-auto mt-[40px] flex-col md:flex-row gap-[80px] md:gap-0">
      <div className="flex items-center justify-center flex-col md:flex-row ">
        <img src={step1} className="w-[120px]"/>
        <img src={arrflow} className="w-[100px] h-[10px] rotate-90 md:rotate-0 mt-[60px] md:mt-0"/>

      </div>
      <div className="flex items-center justify-center flex-col md:flex-row">
        <img src={step2} className="w-[120px]"/>
        <img src={arrflow} className="w-[100px] h-[10px] rotate-90 md:rotate-0 mt-[60px] md:mt-0"/>

      </div>
      <div className="flex items-center justify-center flex-col md:flex-row">
        <img src={step3} className="w-[120px]"/>
        <img src={arrflow} className="w-[100px] h-[10px] rotate-90 md:rotate-0 mt-[60px] md:mt-0"/>

      </div>
      <div className="flex items-center justify-center flex-col md:flex-row">
        <img src={step1} className="w-[120px]"/>
        <img src={arrflow} className="w-[100px]  h-[10px] rotate-90 md:rotate-0 mt-[60px] md:mt-0"/>

       

      </div>
      <div className="flex items-center justify-center">
        <img src={step4} className="w-[120px]"/>
       

      </div>

    </div>
  </div>

  <div className="popularCategories mt-[90px] relative md:p-[50px] md:h-[600px] flex flex-col items-center justify-center" >
    <img src={rec} className="absolute -top-[500px] left-[50px]"/>
 
 <div className='md:w-[40%] mx-auto flex items-center justify-center bg-transparent relative'>

  <img src={proround} className="w-[60px] z-10 -mr-[40px] "/> <h1 className="text-center text-3xl z-40 bg-transparent font-bold">Popular Collections</h1>
 </div>

 <div className=" md:w-[88%] relative ">
   <img src={arrbtn} className="absolute right-0 top-8 w-[80px] hidden md:block"/>
   <div className="auctions flex flex-col md:flex-row items-center justify-around md:w-[88%] mx-auto  mt-[100px] gap-[20px]">
   <img src={p1} className="h-[300px] w-[350px]"/>
 <img src={p2} className="h-[300px] w-[350px]"/>
 <img src={p3} className="h-[300px] w-[350px]"/>
 <img src={p1} className="h-[300px] w-[350px]"/>
   </div>

 </div>

 <div><img src={view} className="w-[150px] mt-[50px] bg-transparent"/></div>
</div>




<div className="auctionsContainer mt-[50px] relative md:p-[50px] md:h-[800px] flex flex-col items-center justify-center" style={{background:`url(${autbg})`}}>
<img src={blurbg} className="absolute -top-[300px] left-[50px]"/>
    <div className='md:w-[40%] mx-auto flex items-center justify-center bg-transparent relative'>
   
     <img src={ellipse} className="w-[60px] z-10 -mr-[40px] "/> <h1 className="text-center text-3xl z-40 bg-transparent font-bold">Explore By Categories</h1>
    </div>

    <div className=" md:w-[88%] relative ">
      <img src={arrbtn} className="absolute right-0 top-8 w-[80px] hidden md:block"/>
      <div className="auctions flex flex-col md:flex-row items-center justify-around md:w-[88%] mx-auto  mt-[100px] gap-[20px]">
      <img src={bid1} className="h-[350px] w-[350px]"/>
    <img src={bid2} className="h-[350px] w-[350px]"/>
    <img src={bid3} className="h-[350px] w-[350px]"/>
    <img src={bid2} className="h-[350px] w-[350px]"/>
      </div>
   
    </div>

    <div><img src={view} className="w-[150px] mt-[50px] bg-transparent"/></div>
  </div>


  <div className="creatorsContainer">
  <div className='md:w-[40%] mx-auto flex items-center justify-center bg-transparent relative mt-[50px]'>

<img src={proround} className="w-[60px] z-10 -mr-[40px] "/> <h1 className="text-center text-3xl z-40 bg-transparent font-bold">Top Creators</h1>
</div>
    <div className="creators grid grid-cols-1 md:grid-cols-2 gap-[10px] md:w-[80%] mx-auto mt-[50px] mb-[50px]">

      <img src={creator1} className="w-[380px]"/>
        <img src={creator2} className="w-[380px]"/>
        <img src={creator3} className="w-[380px]"/>
          <img src={creator1} className="w-[380px]"/>

    </div>

  </div>

  <div className="subscribeContainer w-[100%] h-[300px] flex items-center justify-center" style={{background:`url(${bgg})`,backgroundSize:'cover',backgroundRepeat:'none'}}>
    <div className="subscribe flex flex-col items-center justify-center relative">
    <img src={blurr} className="absolute left-[200px] -top-[150px]  rounded-full"/>
      <h1 className="md:text-3xl text-2xl font-bold m-[20px]">Ready for Next NFT Drop</h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <input type="text" placeholder="info@gmail.com" className="border-1 border-[#E7B226] bg-transparent p-2 w-[250px]"/><button className="bg-[#E7B226] w-[250px] md:w-[150px] mt-[20px] md:mt-0  h-[42px] text-black">Subscribe</button>
      </div>
    </div>
  </div>
  
    {
        showmodal && <Modal modalShow={modalShow}/>
      }
    </>
  )
}

export default Home
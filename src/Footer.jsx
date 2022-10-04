import React from 'react'
import {Link} from "react-router-dom"
import logo from "./images/logonft.png"
import icons from "./images/icons.png"

function Footer() {
  return (
    <footer className=" flex flex-col items-center justify-center gap-[20px] p-3">
      <div className="footer  grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex">
          <img src={logo} className="w-[100px]"/>
          <div className="w-[400px]"><p>ndjdfndfbfdjf edfdkfneidkdnf fnccbdhksmckieenfn cnjedkejefb</p></div>
        </div>
        <div className="flex items-center justify-around">
          <ul className="text-sm flex flex-col gap-[20px]">
            <li>Home</li>
            <li>Explore</li>
            <li>Live Auctions</li>
            <li>NFT Blog</li>
          </ul>
          <ul className="text-sm flex flex-col gap-[20px]">
          <li>Home</li> <li>Item Details</li> <li>Author Profile</li> <li>Home</li>
          </ul>
        </div>
      </div>

      <div>
        <img src={icons} className="w-[150px]"/>
      </div>
  
 </footer>
  )
}

export default Footer
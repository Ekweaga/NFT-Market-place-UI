import React, { useRef, useEffect } from "react";

import {FaBars} from "react-icons/fa"
import logo from "./images/logonft.png"
import btn from "./images/hbtn.png"

import { NavLink, Link } from "react-router-dom";

const NAV__LINKS = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Explore",
    url: "/market",
  },
  {
    display: "Creators",
    url: "/create",
  },
  {
    display: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

   
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="-z-10 text-sm" ref={headerRef}>
     
        <div className="flex justify-between p-2">
          <div className="ml-[30px]">
          
             <img src={logo} className="w-[60px]"/>
            
          </div>

          <div className="flex justify-between items-center mr-[150px] gap-[20px]"  onClick={toggleMenu}>
            <ul className="flex items-center gap-[25px]">
              {NAV__LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.url}
                    className={(navClass) =>
                      navClass.isActive ? "active" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div><img src={btn} className="w-[100px] cursor-pointer"/></div>
          </div>

        
        </div>
      
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import {FiSearch} from "react-icons/fi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faXmark} from '@fortawesome/free-solid-svg-icons'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {Badge} from "@mui/material"
import { Link } from "react-router-dom";




function Header() {
    const[a, Seta]=useState(false)
    const[b, Setb]=useState(false)
    const[icon, Seticon]=useState(faMagnifyingGlass)
    const [menu, Setmenu]=useState("collection-menu-hidden")
    const [search, Setsearch]=useState("searchbar-hidden")
    const [user,Setuser]=useState("user-drop-hide")


    const closeusermenu=()=>{
        Setuser("user-drop-hide");
    }

    const openmenu = ()=>{

        Setmenu("collection-menu")
        Setsearch("searchbar-hidden")
            Seticon(faMagnifyingGlass)
            Seta(false);
            Setuser("user-drop-hide")
            Setb(false);

    }

    const closemenu = ()=>{

        Setmenu("collection-menu-hidden")

    }

    const opensearch = ()=>{
        
        if(a===false){
            Setsearch("searchbar")
            Seticon(faXmark)
            Seta(true);
            Setuser("user-drop-hide")
            Setb(false);
        }
        else{
            Setsearch("searchbar-hidden")
            Seticon(faMagnifyingGlass)
            Seta(false);
        }
        
    }

    const openuser= ()=>{

        if(b===false){
            Setuser("user-drop")
            Setb(true);
            Setsearch("searchbar-hidden")
            Seticon(faMagnifyingGlass)
            Seta(false);
        }
        else{
            Setuser("user-drop-hide")
            Setb(false);
        }

    }

  return (
    <>
      <div className="navbar">
        <div>
          <Link onClick={closeusermenu} to={"/"}><img className="logo" src={logo} alt=""></img></Link>
        </div>
        <div className="navs" onMouseOver={openmenu}>Collection</div>
        <div className="navs"  onMouseOver={closemenu}>For Him</div>
        <div className="navs">For Her</div>
        <div className="navs">About us</div>
        <div className="navs">
          <FontAwesomeIcon className="searchicon" icon={icon} onClick={opensearch} />
          
        </div>
        <div className="navs">
            <Badge badgeContent={"0"} color="secondary">
                <LocalMallOutlinedIcon color="action" />
            </Badge>
        </div>
        <div className="navs">
          <PersonOutlineOutlinedIcon onClick={openuser} sx={{ fontSize: 30 }} color="action"/>
        </div>
      </div>
      <div className={menu} onMouseOver={openmenu} onMouseLeave={closemenu}>
        <div className="column">
            <div><div className="menu-head">BY BRAND</div>
                    <div>
                        <div className="menu-items">brands</div>
                        <div className="menu-items">brands</div>
                        <div className="menu-items">brands</div>
                        <div className="menu-items">brands</div>
                    </div>
                </div>
            </div>

        <div className="column">
            <div><div className="menu-head">BY GENDER</div>
                <div>
                    <div className="menu-items">Watches For Men</div>
                    <div className="menu-items">Watches For Women</div>
                    <div className="menu-items">Unisex Watches</div>
                    <div className="menu-items">Couple Watches</div>
                </div>
            </div>

            <div><div className="menu-head">BY PRICE</div>
                <div>
                    <div className="menu-items">₹ 2,500 - ₹ 5,000</div>
                    <div className="menu-items">₹ 5,000 - ₹ 10,000</div>
                    <div className="menu-items">₹ 10,000 - ₹ 50,000</div>
                    <div className="menu-items">₹ 50,000 - ₹ 100,000</div>
                </div>
            </div>
            
        </div>
        
        <div className="column">
        <div><div className="menu-head">MATERIAL</div>
                    <div>
                        <div className="menu-items">Ceramic Watches</div>
                        <div className="menu-items">Gold Watches</div>
                        <div className="menu-items">Leather Strap Watches</div>
                        <div className="menu-items">Rose Gold Watches</div>
                        <div className="menu-items">Rubber Strap Watches</div>
                        <div className="menu-items">Titanium Watches</div>
                    </div>
            </div>

            <div><div className="menu-head">FEATURES</div>
                    <div>
                        <div className="menu-items">Automatic Watches</div>
                        <div className="menu-items">Mechanical Watches</div>
                        <div className="menu-items">Quartz Watches</div>
                        <div className="menu-items">Tourbillon Watches</div>
                        <div className="menu-items">World Time Watches</div>
                        <div className="menu-items">Chronograph Watches</div>
                        <div className="menu-items">Perpetual Calendar Watches</div>
                    </div>
            </div>
        </div>
      </div>
      
      <div className={search}>
        <input className="searchinput" type="text" placeholder="Search"></input><FiSearch/>
      </div>

      <div className={user}>
            <div className="triangle"></div>
            <div className="block">
                <Link onClick={closeusermenu} className="block-comp" to={"/login"}>Login</Link>
                <Link onClick={closeusermenu} className="block-comp" to={"/signup"}>Register</Link>
            </div>
      </div>
      
    </>
  );
}

export default Header;

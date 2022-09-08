import React, { useState} from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Badge} from "@mui/material"
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



function Header() {
    const navigate = useNavigate()
    const cartQuantity = useSelector(state=>state.cart.quantity)
    const[b, Setb]=useState(false)
    const [menu, Setmenu]=useState("collection-menu-hidden")
    const [search, Setsearch]=useState("searchbar-hidden")
    const [user,Setuser]=useState("user-drop-hide")
    const[searchquery,Setsearchquery]=useState("")

    const closeusermenu=()=>{
        Setuser("user-drop-hide");
    }

    const logoutfuc =()=>{

        Setuser("user-drop-hide");
    }

    const openmenu = ()=>{

        Setmenu("collection-menu")
        Setsearch("searchbar-hidden")
            Setuser("user-drop-hide")
            Setb(false);

    }

    const closemenu = ()=>{

        Setmenu("collection-menu-hidden")

    }

    const opensearch = ()=>{  
        
        if(search==="searchbar-hidden"){
            Setsearch("searchbar")
            Setuser("user-drop-hide")
            Setb(false);
        }
        else{
            Setsearch("searchbar-hidden")
        }
        
    }

    const openuser= ()=>{

        if(b===false){
            Setuser("user-drop")
            Setb(true);
            Setsearch("searchbar-hidden")
        }
        else{
            Setuser("user-drop-hide")
            Setb(false);
        }
    }

    const searchFunc=()=>{
        if(searchquery===""){
            alert("Please enter something before searching")
        }
        else{
            Setsearchquery("")
            Setsearch("searchbar-hidden")
            navigate(`/watches?search=${searchquery}`)
        }
    }

    const searchFuncOnKey=(e)=>{
        if(e.key==='Enter'){
        if(searchquery===""){
            alert("Please enter something before searching")
        }
        else{
            Setsearchquery("")
            Setsearch("searchbar-hidden")
            navigate(`/watches?search=${searchquery}`)
        }} 
    }

  return (
    <>
      <div className="navbar">
        <div>
          <Link className="logo-main" onClick={closeusermenu} to={"/"}><img className="logo" src={logo} alt=""></img><div>Folex</div></Link>
        </div>
        <div className="navs" onMouseOver={openmenu}>Collection</div>
        <div className="navs"  onMouseOver={closemenu}><Link className="link" to={"/watches"}>For Him</Link></div>
        <div className="navs"><Link className="link" to={"/watches"}>For Her</Link></div>
        <div className="navs"><Link className="link" to={"/about"}>About us</Link></div>
        <div className="navs" onClick={opensearch}>
          {search==="searchbar-hidden"?<SearchOutlinedIcon color="action"/>:<CloseOutlinedIcon color="action"/>}
          
        </div>
        <div className="navs">
            <Badge badgeContent={cartQuantity} color="secondary">
                <Link to={"/cart"}><LocalMallOutlinedIcon color="action" /></Link>
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
        <input className="searchinput" value={searchquery} onChange={e=>Setsearchquery(e.target.value)} onKeyDown={searchFuncOnKey} type="text" placeholder="Search"></input>
        <SearchOutlinedIcon className="searchicon" color="action" onClick={searchFunc}/>
      </div>

      <div className={user}>
            <div className="triangle"></div>
            <div className="block">
                <Link onClick={closeusermenu} className="block-comp" to={"/login"}>Login</Link>
                <Link onClick={closeusermenu} className="block-comp" to={"/signup"}>Register</Link>
                <Link onClick={closeusermenu} className="block-comp" to={"/account"}>Account</Link>
                <Link onClick={logoutfuc} className="block-comp" to={"/"}>Logout</Link>
            </div>
      </div>
      
    </>
  );
}

export default Header;

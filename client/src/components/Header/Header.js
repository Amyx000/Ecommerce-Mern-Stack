import React, { useEffect, useState} from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Badge} from "@mui/material"
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";



function Header() {
    const navigate = useNavigate()
    const cartQuantity = useSelector(state=>state.cart.quantity)
    const[b, Setb]=useState(false)
    const [menu, Setmenu]=useState("collection-menu-hidden")
    const [search, Setsearch]=useState("searchbar-hidden")
    const [user,Setuser]=useState("user-drop-hide")
    const[searchquery,Setsearchquery]=useState("")
    const[isAuth,SetisAuth]=useState(false)

    useEffect(() => {
        async function authenticated(){
          const res = await axios.get("http://localhost:5000/account/isauth",{withCredentials: true,})
          if(res.data===false){
           SetisAuth(false)
          }
          else{
            SetisAuth(true)}
        }
        
        authenticated()

    }, [user, navigate])

    const closeusermenu=()=>{
        Setuser("user-drop-hide");
    }

    const logoutfuc = async()=>{
        Setuser("user-drop-hide");
       try {
        await axios.get("http://localhost:5000/account/logout",{withCredentials:true})

       } catch (error) {
        console.log(error.code)
       }

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
          <Link className="logo-main" onClick={closeusermenu} to={"/"}><img className="logo" src={logo} alt=""></img><div className="logo-txt">Folex</div></Link>
        </div>
        <div className="navs" onMouseOver={openmenu} onMouseDown={openmenu} onMouseLeave={closemenu}>Collection</div>
        <div className="navs" onClick={closeusermenu}><Link className="link" to={"/watches"}>For Him</Link></div>
        <div className="navs" onClick={closeusermenu}><Link className="link" to={"/watches?gender=Female"}>For Her</Link></div>
        <div className="navs" onClick={closeusermenu}><Link className="link" to={"/about"}>About us</Link></div>
        <div className="navs">
          {search==="searchbar-hidden"?<SearchOutlinedIcon color="action" onClick={opensearch}/>:<CloseOutlinedIcon color="action" onClick={opensearch}/>}
          
        </div>
        <div className="navs">
            <Badge badgeContent={cartQuantity} color="secondary">
                <Link to={"/cart"}><LocalMallOutlinedIcon color="action" onClick={closeusermenu} /></Link>
            </Badge>
        </div>
        <div className="navs">
          <PersonOutlineOutlinedIcon onClick={openuser} sx={{ fontSize: 30 }} color="action"/>
        </div>
      </div>
      <div className="header-hidden-contain">
      <div className={menu} onMouseOver={openmenu} onMouseLeave={closemenu}>
        <div className="column">
            <div><div className="menu-head">TOP BRAND</div>
                    <div>
                        <Link to={`/watches?brand=${"Omega"}`} className="link"><div className="menu-items">Omega</div></Link>
                        <Link to={`/watches?brand=${"Hublot"}`} className="link"><div className="menu-items">Hublot</div></Link>
                        <Link to={`/watches?brand=${"Rado"}`} className="link"><div className="menu-items">Rado</div></Link>
                        <Link to={`/watches?brand=${"Panerai"}`} className="link"><div className="menu-items">Panerai</div></Link>
                        <Link to={`/watches?brand=${"Breitling"}`} className="link"><div className="menu-items">Breitling</div></Link>
                        <Link to={`/watches?brand=${"Seiko"}`} className="link"><div className="menu-items">Seiko</div></Link>
                        <Link to={`/watches?brand=${"Tag Heuer"}`} className="link"><div className="menu-items">Tag Heuer</div></Link>
                        <Link to={`/watches?brand=${"Tissot"}`} className="link"><div className="menu-items">Tissot</div></Link>
                    </div>
                </div>
            </div>

        <div className="column">
            <div><div className="menu-head">BY GENDER</div>
                <div>
                <Link to={`/watches?gender=${"Male"}`} className="link"><div className="menu-items">Watches For Men</div></Link>
                <Link to={`/watches?brand=${"Female"}`} className="link"><div className="menu-items">Watches For Women</div></Link>
                </div>
            </div>

            <div><div className="menu-head">BY PRICE</div>
                <div>
                    <Link to={`/watches?price=${"0-50000"}`} className="link"><div className="menu-items">₹ 0 - ₹ 50,000</div></Link>
                    <Link to={`/watches?price=${"50000-100000"}`} className="link"><div className="menu-items">₹ 50,000 - ₹ 100,000</div></Link>
                    <Link to={`/watches?price=${"100000-500000"}`} className="link"><div className="menu-items">₹ 100,000 - ₹ 500,000</div></Link>
                    <Link to={`/watches?price=${"500000-2000000"}`} className="link"><div className="menu-items">Above ₹ 500,000</div></Link>
                </div>
            </div>
            
        </div>
        
        <div className="column">
        <div><div className="menu-head">SPECIAL EDITION</div>
                    <div>
                        <div className="menu-items">Omega Speedmaster</div>
                        <div className="menu-items">Rado Captain Cook</div>
                        <div className="menu-items">Tag Heuer Formula 1</div>        
                        <div className="menu-items">Seiko Prospex</div>        
                    </div>
            </div>

            <div><div className="menu-head">FEATURES</div>
                    <div>
                        <div className="menu-items">Automatic Watches</div>
                        <div className="menu-items">Mechanical Watches</div>
                        <div className="menu-items">Quartz Watches</div>
                        <div className="menu-items">Tourbillon Watches</div>
                        <div className="menu-items">World Time Watches</div>
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
                {isAuth===false?
                <>
                <Link onClick={closeusermenu} className="block-comp" to={"/login"}>Login</Link>
                <Link onClick={closeusermenu} className="block-comp" to={"/signup"}>Register</Link>
                </>
                :<>
                <Link onClick={closeusermenu} className="block-comp" to={"/account"}>Account</Link>
                <Link onClick={logoutfuc} className="block-comp" to={"/"}>Logout</Link>
                </>}
            </div>
      </div>
    </div>
    </>
  );
}

export default Header;

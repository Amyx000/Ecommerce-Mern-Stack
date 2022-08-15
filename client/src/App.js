import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./app.css"
import Account from "./components/Account/Account";
import Filterpage from "./components/Filter Page/Filterpage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Product from "./components/Product Page/Product";
import Login from "./components/Signup page/Login";
import Signup from "./components/Signup page/Signup";

function App() {

  return (
    <>
     
     <BrowserRouter>
     <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/watches/productid" element={<Product/>}/>
            <Route path="/watches" element={<Filterpage/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/account" element={<Account/>}/>
        </Routes> 
     </BrowserRouter>
     
     <Footer/>
    </>
  );
}

export default App;

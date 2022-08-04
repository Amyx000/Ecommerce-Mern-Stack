import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./app.css"
import Filterpage from "./components/Filter Page/Filterpage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Product from "./components/Product Page/Product";

function App() {

  return (
    <>
     <Header/>
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/watches/productid" element={<Product/>}/>
            <Route path="/watches" element={<Filterpage/>}/>
        </Routes> 
     </BrowserRouter>
     
     <Footer/>
    </>
  );
}

export default App;

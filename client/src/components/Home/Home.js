import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import ClockLoader from "react-spinners/ClockLoader"


function Home() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  
  const loader = ()=>{
    setLoading(true)
        setTimeout(()=>{
          setLoading(false)
    },1000)
  }

  useEffect(() => {
    loader()
  }, [navigate])
  

  return (
    <>
    {loading?<ClockLoader className='clockloader' color={"#8C6B20"} loading={loading} size={150} speedMultiplier={2} />:
      <>
      <div className="topsection">
        <img
          className="bannerimg"
          src="https://www.omegawatches.com/media/wysiwyg/push-SP-Moonwatch-gold-cal3861-home-large.jpg"
          alt=""
        ></img>

        <div className="home-container">
          <h1 className="contain-head">SPEEDMASTER MOONWATCH PROFESSIONAL</h1>
          <div className="contain-para">
            Take your first steps into our latest Moonwatch update, with a
            design inspired by the famous 4th generation style worn by Apollo 11
            astronauts.
          </div>
          <Link to={"/watches"}><button className="contain-btn">DISCOVER THE COLLECTION</button></Link>
        </div>
      </div>
      <div className="section1">
        <img className="bannerimg2" src="https://www.rado.com/media/sgecom_contentsystem/homepage/homepage_banners/Hrithik_portrait_desktop_5000x2500.jpg?im=Resize=(1800,655),aspect=fill;Crop=(0,0,1800,655),gravity=Center" alt=""></img>
        <div className="section1-head">CAPTAIN COOK HRITHIK ROSHAN SPECIAL EDITION</div>
      </div>
      <div className="section2">
        <button className="contain-btn2">Discover now</button>
        <div>Our featured collections</div>
        <div>Browse our most iconic collections of Swiss-Made timepieces.</div>
        <div>-</div>
        <button className="contain-btn2">Browse all collections</button>
      </div>

      </>}
    </>
  );
}

export default Home;

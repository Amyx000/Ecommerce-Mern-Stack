import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import ClockLoader from "react-spinners/ClockLoader"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Home() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);

  const slideData = {
    images:[
      "https://www.freepnglogos.com/uploads/rolex-png-logo/rolex-png-logo-0.png",
      "https://upload.wikimedia.org/wikipedia/commons/f/fb/Omega_Logo.svg",
      "https://1000logos.net/wp-content/uploads/2018/10/TAG-Heuer-Logo.png",
      "https://1000logos.net/wp-content/uploads/2018/10/Tissot-Logo.png",
      "https://1000logos.net/wp-content/uploads/2020/10/Rado_logo_PNG1.png",
      "https://1000logos.net/wp-content/uploads/2018/10/Hublot-logo.png"
  ],
    brand:["Rolex", "Omega", "Tag Heuer", "Tissot", "Rado", "Hublot"]
  }

  const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
      breakpoint: 300,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1
      }
  }
];
  
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
          <Link to={"watches?search=Speedmaster%20Moonwatch"}><button className="contain-btn">DISCOVER THE COLLECTION</button></Link>
        </div>
      </div>
      <div className="section1">
        <img className="bannerimg2" src="https://www.rado.com/media/sgecom_contentsystem/homepage/homepage_banners/Hrithik_portrait_desktop_5000x2500.jpg?im=Resize=(1800,655),aspect=fill;Crop=(0,0,1800,655),gravity=Center" alt=""></img>
        <div className="section1-head">CAPTAIN COOK HRITHIK ROSHAN SPECIAL EDITION</div>
      </div>
      <div className="section2">
        <Link to={"/watches?search=Hrithik%20Roshan%20Edition"} className="link"><button className="contain-btn2">Discover now</button></Link>
        <div>Our featured collections</div>
        <div>Browse our most iconic collections of Swiss-Made timepieces.</div>
        <div>-</div>
        <Link to={"/watches?search=captain%20cook"} className="link"><button className="contain-btn2">Browse all collections</button></Link>
      </div>
      <div className="section3">
        <Slide slidesToScroll={1} slidesToShow={3} indicators={true} canSwipe={true} responsive={responsiveSettings}>
            {slideData.images.map((v,i)=>{
              return(
                <div className="each-slide-effect" key={i}>
                  <Link to={`/watches?brand=${slideData.brand[i]}`} className="link linkslider"><img src={v} alt="" className="image-slider-img"></img></Link>
                </div>
              )
            })}
        </Slide>
      </div>
      </>}
    </>
  );
}

export default Home;

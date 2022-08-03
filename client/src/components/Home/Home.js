import React from "react";
import "./Home.css";

function Home() {
  return (
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
          <button className="contain-btn">DISCOVER THE COLLECTION</button>
        </div>

      </div>
    </>
  );
}

export default Home;

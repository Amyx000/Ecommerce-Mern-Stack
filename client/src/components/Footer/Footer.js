import React from "react";
import "./Footer.css";
import { BsGithub, BsStackOverflow, BsTwitter } from "react-icons/bs";
import { GoMailRead } from "react-icons/go";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
            <div className="footer-main">
            <div>
                <div className="foot-head">LUXURY BRANDS</div>
                <div className="foot-contain">Rolex</div>
                <div className="foot-contain">Panerai</div>
                <div className="foot-contain">Omega</div>
                <div className="foot-contain">Rado</div>
            </div>

            <div>
                <div className="foot-head">CATEGORIES</div>
                <Link className="link" to={"/watches?gender=Male"}><div className="foot-contain">Watches for Men</div></Link>
                <Link className="link" to={"/watches?gender=Female"}><div className="foot-contain">Watches for Women</div></Link>
                <div className="foot-contain">Premium Brands</div>
                <div className="foot-contain">Watches Online</div>
            </div>

            <div>
                <div className="foot-head">COMPANY</div>
                <Link className="link" to={"/about"}><div className="foot-contain">About us </div></Link>
            </div>
            <div>
                <div className="newsletter">
                    <div className="mailicon">
                        <GoMailRead />
                    </div>
                    <div className="news-des">
                        <div className="foot-head">SUBSCRIBE TO OUR NEWSLETTER</div>
                        Be the first to hear about new arrivals, by-invitation-only
                        sales and special events
                    </div>
                </div>
                <div>
                    <input
                        className="subcribe-input"
                        type="text"
                        placeholder="Enter your email id..."
                    ></input>
                    <button className="subcribe-btn">SUBCRIBE</button>
                </div>
            </div>
            </div>

            <div className="social">
                <div>FOllOW US</div>
                <a href="https://twitter.com/Armankazi111" target="_black" rel="noreferrer"><BsTwitter className="social-logo1" /></a>
                <a href="https://github.com/Amyx000" target="_black" rel="noreferrer"><BsGithub className="social-logo2" /></a>
                <a href="https://stackoverflow.com/users/9728909/arman-kazi" target="_black" rel="noreferrer"><BsStackOverflow className="social-logo3" /></a>
            </div>

            <div className="copyright">
                <div className="policy">Terms of Use</div>
                <div className="policy">Privacy Notice</div>
                <div className="policy">Cookie Notice</div>
                <div className="note">© 2022 Arman Kazi. For Learning Purpose.</div>
            </div>
      </div>
    </>
  );
}

export default Footer;

import React from "react";
import "./Footer.css";
import { BsGithub, BsStackOverflow, BsTwitter } from "react-icons/bs";
import { GoMailRead } from "react-icons/go";

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
                <div className="foot-contain">Watches for Men</div>
                <div className="foot-contain">Watches for Women</div>
                <div className="foot-contain">Premium Brands</div>
                <div className="foot-contain">Watches Online</div>
            </div>

            <div>
                <div className="foot-head">COMPANY</div>
                <div className="foot-contain">About us </div>
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
                <BsTwitter className="social-logo1" />
                <BsGithub className="social-logo2" />
                <BsStackOverflow className="social-logo3" />
            </div>

            <div className="copyright">
                <div className="policy">Terms of Use</div>
                <div className="policy">Privacy Notice</div>
                <div className="policy">Cookie Notice</div>
                <div className="note">© 2022 Arman Kazi. All rights reserved.</div>
            </div>
      </div>
    </>
  );
}

export default Footer;

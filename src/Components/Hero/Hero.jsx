import React from "react";
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png'
const Hero = () => {
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hand-hand-icon">
                <p>new </p>
                <img src={hand_icon} alt="hand icon" />
            </div>
        </div>
      </div>
      <div className="hero-right"></div>
    </div>
}

export default Hero;
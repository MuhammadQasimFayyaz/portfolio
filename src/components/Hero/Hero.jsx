import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
    <div id="home" className="hero">
      <img src="" alt="profile image" />
      <h1>
        <span className="im">I`m Muhammad Qasim Fayyaz, </span>
        <span className="type">
          <TypeAnimation
            sequence={[
              "frontend developer",
              2000,
              "freelancer",
              2000,
              "Designer",
            ]}
            speed={250}
            repeat={Infinity}
          />
        </span>{" "}
      </h1>
      <p>
        I`m a frontend web developer from Pakistan with 3+ years of experience
      </p>
      <div className="hero-action">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          <div className="hero-connect">Connect with me</div>
        </AnchorLink>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;

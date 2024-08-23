import "./Hero.css";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="hero">
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
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;

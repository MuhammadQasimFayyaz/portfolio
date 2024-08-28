// import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
    <div id="home" className="hero flex flex-col items-center gap-[35px]">
      <img src="" alt="profile image" className="mt-[150px] md:mt-[120px] md:w-[260px]" />
      <h1 className="text-center w-[70%] text-[60px] font-semibold md:w-[90%] md:text-[50px] md:mt-[50px]">
        <span className="bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
          I`m Muhammad Qasim Fayyaz,
        </span>
        <span className="block">
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
        </span>
      </h1>
      <p className="w-[50%] text-center text-[24px] leading-[40px] md:w-[60%] md:text-[18px] md:leading-[32px] md:my-[10px]">
        I`m a frontend web developer from Pakistan with 3+ years of experience
      </p>
      <div className="hero-action flex items-center gap-[25px] text-[24px] font-medium mb-[50px] md:gap-[16px] md:text-[18px] md:mb-[50px]">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          <div className="hero-connect py-[25px] px-[45px] rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] cursor-pointer border-2 border-transparent transition duration-500 hover:border-white md:py-[20px] md:px-[30px] md:rounded-full">
            Connect with me
          </div>
        </AnchorLink>
        <div className="hero-resume py-[25px] px-[75px] rounded-full border-2 border-white cursor-pointer transition duration-500 hover:border-[#b415ff] md:py-[20px] md:px-[50px] md:rounded-full">
          My Resume
        </div>
      </div>
    </div>
  )
}

export default Hero;

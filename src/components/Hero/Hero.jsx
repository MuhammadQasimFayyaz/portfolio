// import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
    <div id="home" className="flex flex-col items-center gap-[35px]">
      <img src="" alt="profile image" className="mt-[150px]" />
      <h1 className="text-center w-[70%] text-[60px] font-semibold">
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
      <p className="w-[50%] text-center text-[24px] leading-[40px]">
        I`m a frontend web developer from Pakistan with 3+ years of experience
      </p>
      <div className="flex items-center gap-[25px] text-[24px] font-medium mb-[50px]">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          <div className="py-[25px] px-[45px] rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] cursor-pointer border-2 border-transparent transition duration-500 hover:border-white">
            Connect with me
          </div>
        </AnchorLink>
        <div className="py-[25px] px-[75px] rounded-full border-2 border-white cursor-pointer transition duration-500 hover:border-[#b415ff]">
          My Resume
        </div>
      </div>
    </div>
  )
}

export default Hero;

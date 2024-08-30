// import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { RiDownload2Fill } from 'react-icons/ri'
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import image from '../../assets/image.png'

function Hero() {

  const PDF_FILE_URL = "../../../public/Resume.pdf"
  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop()
    const aTag = document.createElement("a")
    aTag.href = url
    aTag.setAttribute("download", fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  return (
    <div id="home" className="hero flex flex-col items-center gap-[20px] sm:gap-[25px] md:gap-[30px] lg:gap-[35px]">
      <img src={image} alt="profile image" className="mt-[20px] sm:mt-[20px] md:mt-[30px] lg:mt-[50px] w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-auto rounded-[50%]" />
      <h1 className="text-center w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] text-[36px] sm:text-[48px] md:text-[54px] lg:text-[60px] font-semibold">
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
      <p className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-[50%] text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px]">
        I`m a frontend web developer from Pakistan with 3+ years of experience
      </p>
      <div className="fixed  left-0 flex-col top-[50%] translate-y-[-50%] flex justify-center text-[20px] gap-y-6 w-max px-3 h-40 rounded-r-xl z-10 bg-gradient-to-b from-[#df8908] to-[#b415ff]">
        <a
          href="https://www.facebook.com/profile.php?id=100008404149002"
          target="blank"
        >
          <FaFacebook />
        </a>
        <a href="https://github.com/MuhammadQasimFiaz" target="blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-qasim-fayyaz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="hero-action flex flex-col sm:flex-row items-center gap-[15px] sm:gap-[20px] md:gap-[25px] text-[16px] sm:text-[22px] md:text-[24px] font-medium mb-[30px] sm:mb-[40px] md:mb-[50px]">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          <div className="hero-connect py-[15px] sm:py-[22px] md:py-[25px] px-[20px] sm:px-[40px] md:px-[45px] rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] cursor-pointer border-2 border-transparent transition duration-500 hover:border-white">
            Connect with me
          </div>
        </AnchorLink>
        <button onClick={() => {downloadFileAtURL(PDF_FILE_URL)}} className="hero-resume flex items-center py-[15px] sm:py-[22px] md:py-[25px] px-[20px] sm:px-[55px] md:px-[70px] rounded-full border-2 border-white cursor-pointer transition duration-500 hover:border-[#b415ff]">
          My Resume <RiDownload2Fill className="text-white ml-2" />
        </button>
      </div>
    </div>
  )
}

export default Hero;

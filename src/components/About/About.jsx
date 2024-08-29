// import './About.css'
import design from '../../assets/design.svg'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

function About() {

  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <div id='about' ref={ref} className='about flex flex-col items-center justify-center gap-[50px] sm:gap-[60px] md:gap-[70px] lg:gap-[80px] mx-[20px] sm:mx-[50px] md:mx-[100px] lg:mx-[170px] my-[50px] sm:my-[60px] md:my-[70px] lg:my-[80px]'>
      <div className="about-title relative text-center">
        <h1 className="relative px-[20px] sm:px-[25px] md:px-[30px] text-[40px] sm:text-[60px] md:text-[70px] lg:text-[80px] font-semibold">About me</h1>
        <img src={design} alt="" className="absolute bottom-[-10px] right-0 z-[-1] w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px]" />
      </div>
      <div className="about-sections flex flex-col lg:flex-row gap-[40px] sm:gap-[50px] md:gap-[60px] lg:gap-[80px]">
        <div className="about-left">
          <img src="" alt="" className="w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-auto" />
        </div>
        <div className="about-right flex flex-col gap-[40px] sm:gap-[50px] md:gap-[60px] lg:gap-[80px]">
          <div className="about-para flex flex-col gap-[15px] sm:gap-[20px] text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-normal">
            <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
            <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
          </div>
          <div className="about-skills flex flex-col gap-[15px] sm:gap-[20px] md:gap-[25px] lg:gap-[30px]">
            <div className="about-skill flex gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[50px] items-center transition-transform duration-300 hover:scale-[1.05]">
              <p className="min-w-[100px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[150px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium">HTML & CSS</p>
              <hr className="w-[60%] sm:w-[70%] md:w-[75%] lg:w-[80%] outline-none border-none h-[6px] sm:h-[7px] md:h-[8px] rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff]" />
            </div>
            <div className="about-skill flex gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[50px] items-center transition-transform duration-300 hover:scale-[1.05]">
              <p className="min-w-[100px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[150px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium">JavaScript</p>
              <hr className="w-[50%] sm:w-[60%] md:w-[65%] lg:w-[70%] outline-none border-none h-[6px] sm:h-[7px] md:h-[8px] rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff]" />
            </div>
            <div className="about-skill flex gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[50px] items-center transition-transform duration-300 hover:scale-[1.05]">
              <p className="min-w-[100px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[150px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium">ReactJS</p>
              <hr className="w-[45%] sm:w-[55%] md:w-[60%] lg:w-[65%] outline-none border-none h-[6px] sm:h-[7px] md:h-[8px] rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff]" />
            </div>
            <div className="about-skill flex gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[50px] items-center transition-transform duration-300 hover:scale-[1.05]">
              <p className="min-w-[100px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[150px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium">WordPress</p>
              <hr className="w-[50%] sm:w-[60%] md:w-[65%] lg:w-[70%] outline-none border-none h-[6px] sm:h-[7px] md:h-[8px] rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff]" />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements flex flex-col md:flex-row w-full justify-between items-center gap-[40px] sm:gap-[50px] md:gap-[60px] lg:gap-[80px] mb-[50px] sm:mb-[60px] md:mb-[70px] lg:mb-[80px]">
        <div className="about-achievement flex flex-col items-center gap-[5px] sm:gap-[8px] md:gap-[10px] transition-transform duration-500 group">
          <h1 className="text-[40px] sm:text-[50px] md:text-[55px] lg:text-[60px] font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
            {inView ? <CountUp start={0} end={10} duration={5}/> : null}+
          </h1>
          <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] font-medium uppercase text-center group-hover:text-[#b415ff] transition-colors duration-300">Years of experience</p>
        </div>
        <hr className="hidden md:block w-px h-[60px] sm:h-[70px] md:h-[80px] bg-gray-300" />
        <div className="about-achievement flex flex-col items-center gap-[5px] sm:gap-[8px] md:gap-[10px] transition-transform duration-500 group">
          <h1 className="text-[40px] sm:text-[50px] md:text-[55px] lg:text-[60px] font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
            {inView ? <CountUp start={0} end={90} duration={5}/> : null}+
          </h1>
          <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] font-medium uppercase text-center group-hover:text-[#b415ff] transition-colors duration-300">Projects completed</p>
        </div>
        <hr className="hidden md:block w-px h-[60px] sm:h-[70px] md:h-[80px] bg-gray-300" />
        <div className="about-achievement flex flex-col items-center gap-[5px] sm:gap-[8px] md:gap-[10px] transition-transform duration-500 group">
          <h1 className="text-[40px] sm:text-[50px] md:text-[55px] lg:text-[60px] font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
            {inView ? <CountUp start={0} end={15} duration={5}/> : null}+
          </h1>
          <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] font-medium uppercase text-center group-hover:text-[#b415ff] transition-colors duration-300">Happy clients</p>
        </div>
      </div>
    </div>
  )
}

export default About

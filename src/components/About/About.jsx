// import './About.css'
import design from '../../assets/design.svg'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

function About() {

  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <div id='about' ref={ref} className='about flex flex-col items-center justify-center gap-[80px] mx-[170px] my-[80px] md:gap-[80px] md:mx-[6%] md:my-[50px] md:items-start'>
      <div className="about-title relative">
        <h1 className="relative px-[30px] text-[80px] font-semibold md:text-[50px] md:p-0">About me</h1>
        <img src={design} alt="" className="absolute bottom-0 right-0 z-[-1] md:w-[130px] md:right-[-20px]" />
      </div>
      <div className="about-sections flex gap-[80px] md:flex-col">
        <div className="about-left md:hidden">
          <img src="" alt="" />
        </div>
        <div className="about-right flex flex-col gap-[80px]">
          <div className="about-para flex flex-col gap-[20px] text-[26px] font-normal md:text-[18px] md:leading-[32px]">
            <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
            <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
          </div>
          <div className="about-skills flex flex-col gap-[20px]">
            <div className="about-skill flex gap-[50px] items-center transition-transform duration-300 hover:scale-[1.05] md:gap-[20px] md:items-center">
              <p className="min-w-[150px] text-[24px] font-medium md:text-[20px]">HTML & CSS</p>
              <hr className="w-[80%] outline-none border-none h-[8px] rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] md:h-[6px]" />
            </div>
            <div className="about-skill flex gap-[50px] items-center transition-transform duration-300 hover:scale-[1.05] md:gap-[20px] md:items-center">
              <p className="min-w-[150px] text-[24px] font-medium md:text-[20px]">JavaScript</p>
              <hr className="w-[70%] outline-none border-none h-[8px] rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] md:h-[6px]" />
            </div>
            <div className="about-skill flex gap-[50px] items-center transition-transform duration-300 hover:scale-[1.05] md:gap-[20px] md:items-center">
              <p className="min-w-[150px] text-[24px] font-medium md:text-[20px]">ReactJS</p>
              <hr className="w-[60%] outline-none border-none h-[8px] rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] md:h-[6px]" />
            </div>
            <div className="about-skill flex gap-[50px] items-center transition-transform duration-300 hover:scale-[1.05] md:gap-[20px] md:items-center">
              <p className="min-w-[150px] text-[24px] font-medium md:text-[20px]">WordPress</p>
              <hr className="w-[70%] outline-none border-none h-[8px] rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] md:h-[6px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements flex w-full justify-around mb-[80px] md:justify-between">
        <div className="about-achievement flex flex-col items-center gap-[10px] transition-transform duration-500 hover:scale-[1.12] md:gap-[10px]">
          <h1 className="text-[60px] font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent md:text-[34px]">
          {inView ? <CountUp start={0} end={10} duration={5}/> : null}+
          </h1>
          <p className="text-[22px] font-medium uppercase md:text-[16px] text-center">Years of experience</p>
        </div>
        <hr className="w-px h-[80px] bg-gray-300 md:hidden" />
        <div className="about-achievement flex flex-col items-center gap-[10px] transition-transform duration-500 hover:scale-[1.12] md:gap-[10px]">
          <h1 className="text-[60px] font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent md:text-[34px]">
          {inView ? <CountUp start={0} end={90} duration={5}/> : null}+
          </h1>
          <p className="text-[22px] font-medium uppercase md:text-[16px] text-center">Projects completed</p>
        </div>
        <hr className="w-px h-[80px] bg-gray-300 md:hidden" />
        <div className="about-achievement flex flex-col items-center gap-[10px] transition-transform duration-500 hover:scale-[1.12] md:gap-[10px]">
          <h1 className="text-[60px] font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent md:text-[34px]">
          {inView ? <CountUp start={0} end={15} duration={5}/> : null}+
          </h1>
          <p className="text-[22px] font-medium uppercase md:text-[16px] text-center">Happy clients</p>
        </div>
      </div>
    </div>
  )
}

export default About

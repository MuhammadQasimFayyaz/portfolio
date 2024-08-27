// import './About.css'
import design from '../../assets/design.svg'

function About() {
  return (
    <div id='about' className='flex flex-col items-center justify-center gap-[80px] mx-[170px] my-[80px]'>
      <div className="relative">
        <h1 className="relative px-[30px] text-[80px] font-semibold">About me</h1>
        <img src={design} alt="" className="absolute bottom-0 right-0 z-[-1]" />
      </div>
      <div className="flex gap-[80px]">
        <div className="about-left">
          <img src="" alt="" />
        </div>
        <div className="flex flex-col gap-[80px]">
          <div className="flex flex-col gap-[20px] text-[26px] font-normal">
            <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
            <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex gap-[50px] items-center transition-transform duration-300 hover:scale-[1.05]">
              <p className="min-w-[150px] text-[24px] font-medium">HTML & CSS</p>
              <hr className="w-[80%] outline-none border-none h-[8px] rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff]" />
            </div>
            <div className="flex gap-[50px] items-center transition-transform duration-300 hover:scale-[1.05]">
              <p className="min-w-[150px] text-[24px] font-medium">JavaScript</p>
              <hr className="w-[70%] outline-none border-none h-[8px] rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff]" />
            </div>
            <div className="flex gap-[50px] items-center transition-transform duration-300 hover:scale-[1.05]">
              <p className="min-w-[150px] text-[24px] font-medium">ReactJS</p>
              <hr className="w-[60%] outline-none border-none h-[8px] rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff]" />
            </div>
            <div className="flex gap-[50px] items-center transition-transform duration-300 hover:scale-[1.05]">
              <p className="min-w-[150px] text-[24px] font-medium">WordPress</p>
              <hr className="w-[70%] outline-none border-none h-[8px] rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-around mb-[80px]">
        <div className="flex flex-col items-center gap-[10px] transition-transform duration-500 hover:scale-[1.12]">
          <h1 className="text-[60px] font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">10+</h1>
          <p className="text-[22px] font-medium uppercase">Years of experience</p>
        </div>
        <hr className="w-px h-[80px] bg-gray-300" />
        <div className="flex flex-col items-center gap-[10px] transition-transform duration-500 hover:scale-[1.12]">
          <h1 className="text-[60px] font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">90+</h1>
          <p className="text-[22px] font-medium uppercase">Projects completed</p>
        </div>
        <hr className="w-px h-[80px] bg-gray-300" />
        <div className="flex flex-col items-center gap-[10px] transition-transform duration-500 hover:scale-[1.12]">
          <h1 className="text-[60px] font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">15+</h1>
          <p className="text-[22px] font-medium uppercase">Happy clients</p>
        </div>
      </div>
    </div>
  )
}

export default About

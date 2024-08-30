import Marquee from "react-fast-marquee"
import Skills_data from "./Skills_data"
import design from '../../assets/design.svg'

function Skills() {
  return (
    <div
      id="skills"
      className="skills flex flex-col items-center justify-center gap-[50px] sm:gap-[60px] md:gap-[70px] lg:gap-[80px] mx-[20px] sm:mx-[50px] md:mx-[100px] lg:mx-[170px] my-[50px] sm:my-[60px] md:my-[70px] lg:my-[80px]"
    >

      <div className="skills-title relative text-center">
        <h1 className="relative px-[20px] sm:px-[25px] md:px-[30px] text-[40px] sm:text-[60px] md:text-[70px] lg:text-[80px] font-semibold">My Skills</h1>
        <img src={design} alt="" className="absolute bottom-[-10px] right-0 z-[-1] w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px]" />
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {Skills_data.map((skill, id) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-gradient-to-r from-[#da7c25] to-[#b923e1] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">{skill.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default Skills

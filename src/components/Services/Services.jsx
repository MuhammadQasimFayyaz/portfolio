// import './Services.css'
import design from '../../assets/design.svg'
import services_data from '../../assets/Services_data'
import right_arrow from '../../assets/right_arrow.svg'

function Services() {
  return (
    <div id='services' className="services flex flex-col items-center justify-center gap-[50px] sm:gap-[60px] md:gap-[70px] lg:gap-[80px] mx-[20px] sm:mx-[50px] md:mx-[100px] lg:mx-[170px] my-[50px] sm:my-[60px] md:my-[70px] lg:my-[80px]">
      <div className="services-title relative text-center">
        <h1 className="relative px-[20px] sm:px-[25px] md:px-[30px] text-[40px] sm:text-[60px] md:text-[70px] lg:text-[80px] font-semibold">My Services</h1>
        <img src={design} alt="" className="absolute bottom-[-10px] right-0 z-[-1] w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px]" />
      </div>
      <div className="services-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[15px] sm:gap-[20px] md:gap-[30px] lg:gap-[40px] mb-[50px] sm:mb-[60px] md:mb-[70px] lg:mb-[80px]">
        {services_data.map((service, index) => {
          return (
            <div
              key={index}
              className="services-format flex flex-col justify-center gap-[20px] sm:gap-[25px] md:gap-[30px] px-[20px] sm:px-[25px] md:px-[30px] py-[40px] sm:py-[50px] md:py-[60px] rounded-[10px] border-2 border-white transition-all duration-400 cursor-pointer hover:border-[#ff00ff] hover:bg-gradient-to-br from-[#3f0028] to-[#582300] transform"
            >
              <h3 className="text-[24px] sm:text-[26px] md:text-[28px] font-semibold">{service.s_no}</h3>
              <h2 className="text-[30px] sm:text-[34px] md:text-[38px] font-extrabold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
                {service.s_name}
              </h2>
              <p className="text-[#d4d4d4] text-[18px] sm:text-[20px] md:text-[24px] leading-[28px] sm:leading-[32px] md:leading-[36px] max-w-[250px] sm:max-w-[275px] md:max-w-[300px]">
                {service.s_desc}
              </p>
              <div className="services-readmore flex gap-[10px] sm:gap-[15px] md:gap-[20px] items-center mt-[15px] sm:mt-[18px] md:mt-[20px]">
                <p className='text-[14px] sm:text-[15px] md:text-[16px]'>Read More</p>
                <img src={right_arrow} alt="" className="w-[16px] sm:w-[18px] md:w-[20px]" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services

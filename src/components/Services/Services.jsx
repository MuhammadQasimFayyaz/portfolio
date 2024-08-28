// import './Services.css'
import design from '../../assets/design.svg'
import services_data from '../../assets/Services_data'
import right_arrow from '../../assets/right_arrow.svg'

function Services() {
  return (
    <div id='services' className="services flex flex-col items-center justify-center gap-[80px] mx-[170px] my-[80px] md:items-start md:gap-[70px] md:mx-[70px] md:my-[20px]">
      <div className="services-title relative">
        <h1 className="relative px-[30px] text-[80px] font-semibold md:text-[50px] md:p-0">My Services</h1>
        <img src={design} alt="" className="absolute bottom-0 right-0 z-[-1] md:w-[130px] md:mr-[-20px]" />
      </div>
      <div className="services-container grid grid-cols-1 md:grid-cols-2 gap-[40px] mb-[80px] md:gap-[30px]">
        {services_data.map((service, index) => {
          return (
            <div
              key={index}
              className="services-format flex flex-col justify-center gap-[20px] px-[30px] py-[60px] rounded-[10px] border-2 border-white transition-all duration-400 cursor-pointer hover:border-[#ff00ff] hover:bg-gradient-to-br from-[#3f0028] to-[#582300] transform hover:scale-[1.05] md:gap-[10px] md:p-[20px]"
            >
              <h3 className="text-[28px] font-semibold">{service.s_no}</h3>
              <h2 className="text-[38px] font-extrabold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent md:text-[20px]">
                {service.s_name}
              </h2>
              <p className="text-[#d4d4d4] text-[24px] leading-[40px] max-w-[300px] md:text-[16px] md:leading-[26px]">
                {service.s_desc}
              </p>
              <div className="services-readmore flex gap-[20px] items-center mt-[20px]">
                <p className='md:text-[16px]'>Read More</p>
                <img src={right_arrow} alt="" className="md:w-[20px]" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services

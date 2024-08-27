// import './Services.css'
import design from '../../assets/design.svg'
import services_data from '../../assets/Services_data'
import right_arrow from '../../assets/right_arrow.svg'

function Services() {
  return (
    <div id='services' className="flex flex-col items-center justify-center gap-[80px] mx-[170px] my-[80px]">
      <div className="relative">
        <h1 className="relative px-[30px] text-[80px] font-semibold">My Services</h1>
        <img src={design} alt="" className="absolute bottom-0 right-0 z-[-1]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] mb-[80px]">
        {services_data.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center gap-[20px] px-[30px] py-[60px] rounded-[10px] border-2 border-white transition-all duration-400 cursor-pointer hover:border-[#ff00ff] hover:bg-gradient-to-br from-[#3f0028] to-[#582300] transform hover:scale-[1.05]"
            >
              <h3 className="text-[28px] font-semibold">{service.s_no}</h3>
              <h2 className="text-[38px] font-extrabold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
                {service.s_name}
              </h2>
              <p className="text-[#d4d4d4] text-[24px] leading-[40px] max-w-[300px]">
                {service.s_desc}
              </p>
              <div className="flex gap-[20px] items-center mt-[20px]">
                <p>Read More</p>
                <img src={right_arrow} alt="" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services

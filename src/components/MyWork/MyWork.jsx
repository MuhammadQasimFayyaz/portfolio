// import './MyWork.css'
import design from '../../assets/design.svg'
import mywork_data from './mywork_data'
import right_arrow from '../../assets/right_arrow.svg'

function MyWork() {
  return (
    <div id='work' className="mywork flex flex-col items-center justify-center gap-[50px] sm:gap-[60px] md:gap-[70px] lg:gap-[80px] mx-[20px] sm:mx-[50px] md:mx-[100px] lg:mx-[170px] my-[50px] sm:my-[60px] md:my-[70px] lg:my-[80px]">
      <div className="mywork-title relative text-center">
        <h1 className="relative px-[20px] sm:px-[25px] md:px-[30px] text-[40px] sm:text-[60px] md:text-[70px] lg:text-[80px] font-semibold">My latest work</h1>
        <img src={design} alt="" className="absolute bottom-[-10px] right-0 z-[-1] w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px]" />
      </div>
      <div className="mywork-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[50px]">
        {mywork_data.map((work, index) => {
          return (
            <img
              key={index}
              src={work.w_img}
              alt=""
              className="transition-transform duration-300 cursor-pointer border-2 border-transparent hover:border-2 hover:border-[#ff00ff] hover:rounded-[10px] w-full h-full object-cover"
            />
          )
        })}
      </div>
      <div className="mywork-showmore flex items-center justify-center gap-[10px] sm:gap-[12px] md:gap-[15px] rounded-full border-2 dark:border-white border-[#161513] py-[15px] sm:py-[20px] md:py-[30px] px-[30px] sm:px-[40px] md:px-[60px] text-[18px] sm:text-[20px] md:text-[22px] font-medium mb-[50px] sm:mb-[60px] md:mb-[70px] lg:mb-[80px] transition-all duration-600 cursor-pointer capitalize hover:gap-[20px]">
        <p>Show more</p>
        <img src={right_arrow} alt="" className="w-[16px] sm:w-[18px] md:w-[20px] filter invert dark:invert-0" />
      </div>
    </div>
  )
}

export default MyWork

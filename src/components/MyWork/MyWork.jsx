import './MyWork.css'
import design from '../../assets/design.svg'
import mywork_data from '../../assets/mywork_data'
import right_arrow from '../../assets/right_arrow.svg'

function MyWork() {
  return (
    <div id='work' className="mywork flex flex-col items-center justify-center gap-[80px] mx-[170px] my-[80px]">
      <div className="mywork-title relative">
        <h1 className="relative px-[30px] text-[80px] font-semibold">My latest work</h1>
        <img src={design} alt="" className="absolute bottom-0 right-0 z-[-1]" />
      </div>
      <div className="mywork-container grid grid-cols-3 gap-[40px]">
        {mywork_data.map((work, index) => {
          return (
            <img
              key={index}
              src={work.w_img}
              alt=""
              className="transition-transform duration-300 cursor-pointer hover:scale-[1.10] hover:border-2 hover:border-[#ff00ff] hover:rounded-[10px] w-full h-full"
            />
          )
        })}
      </div>
      <div className="mywork-showmore flex gap-[15px] rounded-full border-2 border-white py-[30px] px-[60px] text-[22px] font-medium mb-[80px] transition-all duration-600 cursor-pointer capitalize hover:gap-[30px]">
        <p>Show more</p>
        <img src={right_arrow} alt="" />
      </div>
    </div>
  )
}

export default MyWork

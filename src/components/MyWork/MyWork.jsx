import './MyWork.css'
import design from '../../assets/design.svg'
import myword_data from '../../assets/mywork_data'
import right_arrow from '../../assets/right_arrow.svg'

function MyWork() {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={design} alt="" />
      </div>
      <div className="mywork-container">
        {myword_data.map( (work, index) => {
          return <img key={index} src={work.w_img} alt='' />
        } )}
      </div>
      <div className="mywork_showmore">
        <p>Show more</p>
        <img src={right_arrow} alt="" />
      </div>
    </div>
  )
}

export default MyWork

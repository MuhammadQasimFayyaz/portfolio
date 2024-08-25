import './Services.css'
import design from '../../assets/design.svg'
import services_data from '../../assets/Services_data'
import right_arrow from '../../assets/right_arrow.svg'

function Services() {
  return (
    <div className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={design} alt="" />
      </div>
      <div className="services-container">
        {services_data.map( (service, index) => {
          return <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
              <p>Read More</p>
              <img src={right_arrow} alt="" />
            </div>
          </div>
        } )}
      </div>
    </div>
  )
}

export default Services

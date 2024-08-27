import './Contact.css'
import design from '../../assets/design.svg'
import mail from '../../assets/mail.svg'
import phone from '../../assets/phone.svg'
import location from '../../assets/location.svg'

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "871a738d-73da-4297-82d5-1b61d58e17c3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };


  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={design} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let`s talk</h1>
          <p>I`m currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="" />
              <p>qasim.dev404@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phone} alt="" />
              <p>+92 3351748254</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="" />
              <p>Pakistan</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">your name</label>
          <input type="text" name="name" id="name" placeholder='Enter your name' required />
          <label htmlFor="email">your email</label>
          <input type="email" name="email" id="email" placeholder='Enter your email' required />
          <label htmlFor="mess">Write your message here</label>
          <textarea name="message" id="mess" rows='8' placeholder='Enter your message' required></textarea>
          <button className='contact-submit' type='submit'>submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

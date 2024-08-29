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
    <div id='contact' className="contact flex flex-col items-center justify-center gap-[80px] mx-[170px] my-[80px]">
      <div className="contact-title relative">
        <h1 className="relative px-[30px] text-[80px] font-semibold">Get in Touch</h1>
        <img src={design} alt="" className="absolute bottom-0 right-0 z-[-1]" />
      </div>
      <div className="contact-section flex gap-[150px]">
        <div className="contact-left flex flex-col gap-[30px]">
          <h1 className="text-[80px] font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">Let`s talk</h1>
          <p className="max-w-[550px] text-[#d8d8d8] text-[20px] leading-[35px]">
            I`m currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.
          </p>
          <div className="contact-details flex flex-col gap-[30px] text-[#d8d8d8] text-[22px]">
            <div className="contact-detail flex items-center gap-[20px]">
              <img src={mail} alt="" className="" />
              <a href="mailto:qasim.dev404@gmail.com">qasim.dev404@gmail.com</a>
            </div>
            <div className="contact-detail flex items-center gap-[20px]">
              <img src={phone} alt="" className="" />
              <a href="tel:+923351748254">+92 3351748254</a>
            </div>
            <div className="contact-detail flex items-center gap-[20px]">
              <img src={location} alt="" className="" />
              <p>Pakistan</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right flex flex-col items-start gap-[30px]">
          <label htmlFor="name" className="text-[#d8d8d8] text-[22px] font-medium capitalize">your name</label>
          <input type="text" name="name" id="name" placeholder='Enter your name' required className="w-[700px] h-[78px] pl-[20px] rounded-[4px] bg-[#32323c] text-[#a0a0a0] text-[20px] border-none" />
          <label htmlFor="email" className="text-[#d8d8d8] text-[22px] font-medium capitalize">your email</label>
          <input type="email" name="email" id="email" placeholder='Enter your email' required className="w-[700px] h-[78px] pl-[20px] rounded-[4px] bg-[#32323c] text-[#a0a0a0] text-[20px] border-none" />
          <label htmlFor="mess" className="text-[#d8d8d8] text-[22px] font-medium capitalize">Write your message here</label>
          <textarea name="message" id="mess" rows='8' placeholder='Enter your message' required className="w-[650px] h-auto p-[25px] rounded-[4px] bg-[#32323c] text-[#a0a0a0] text-[20px] border-none"></textarea>
          <button type='submit' className="contact-submit border-none text-white rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] text-[22px] py-[20px] px-[60px] mb-[50px] cursor-pointer capitalize transition-transform duration-300 hover:scale-[1.1]">
            submit now
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact

// import './Contact.css'
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
    <div id='contact' className="contact flex flex-col items-center justify-center gap-[50px] sm:gap-[60px] md:gap-[70px] lg:gap-[80px] mx-[20px] sm:mx-[50px] md:mx-[100px] lg:mx-[170px] my-[50px] sm:my-[60px] md:my-[70px] lg:my-[80px]">
      <div className="contact-title relative text-center">
        <h1 className="relative px-[20px] sm:px-[25px] md:px-[30px] text-[40px] sm:text-[60px] md:text-[70px] lg:text-[80px] font-semibold">Get in Touch</h1>
        <img src={design} alt="" className="absolute bottom-[-10px] right-0 z-[-1] w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px]" />
      </div>
      <div className="contact-section flex flex-col lg:flex-row gap-[40px] sm:gap-[50px] md:gap-[60px] lg:gap-[100px] md:w-full">
        <div className="contact-left flex flex-col gap-[20px] sm:gap-[25px] md:gap-[30px] sm:w-[45%]">
          <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">Let`s talk</h1>
          <p className="max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] text-[#d8d8d8] text-[16px] sm:text-[18px] md:text-[20px] leading-[30px] sm:leading-[32px] md:leading-[35px]">
            I`m currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.
          </p>
          <div className="contact-details flex flex-col gap-[20px] sm:gap-[25px] md:gap-[30px] text-[#d8d8d8] text-[18px] sm:text-[20px] md:text-[22px]">
            <div className="contact-detail flex items-center gap-[15px] sm:gap-[18px] md:gap-[20px]">
              <img src={mail} alt="" className='w-[8%] md:w-[10%] lg:w-[10%]' />
              <a href="mailto:qasim.dev404@gmail.com" className="break-words">qasim.dev404@gmail.com</a>
            </div>
            <div className="contact-detail flex items-center gap-[15px] sm:gap-[18px] md:gap-[20px]">
              <img src={phone} alt="" className='w-[8%] md:w-[10%] lg:w-[10%]' />
              <a href="tel:+923351748254">+92 3351748254</a>
            </div>
            <div className="contact-detail flex items-center gap-[15px] sm:gap-[18px] md:gap-[20px]">
              <img src={location} alt="" className='w-[8%] md:w-[10%] lg:w-[10%]' />
              <p>Pakistan</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right flex flex-col items-start gap-[20px] sm:gap-[25px] md:gap-[30px] sm:w-[45%]">
          <label htmlFor="name" className="text-[#d8d8d8] text-[18px] sm:text-[20px] md:text-[22px] font-medium capitalize">your name</label>
          <input type="text" name="name" id="name" placeholder='Enter your name' required className="w-[300px] sm:w-[450px] md:w-[550px] lg:w-[100%] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[78px] pl-[15px] rounded-[4px] bg-[#32323c] text-[#a0a0a0] text-[16px] sm:text-[18px] md:text-[20px] border-none" />
          <label htmlFor="email" className="text-[#d8d8d8] text-[18px] sm:text-[20px] md:text-[22px] font-medium capitalize">your email</label>
          <input type="email" name="email" id="email" placeholder='Enter your email' required className="w-[300px] sm:w-[450px] md:w-[550px] lg:w-[100%] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[78px] pl-[15px] rounded-[4px] bg-[#32323c] text-[#a0a0a0] text-[16px] sm:text-[18px] md:text-[20px] border-none" />
          <label htmlFor="mess" className="text-[#d8d8d8] text-[18px] sm:text-[20px] md:text-[22px] font-medium capitalize">Write your message here</label>
          <textarea name="message" id="mess" rows='8' placeholder='Enter your message' required className="w-[300px] sm:w-[400px] md:w-[550px] lg:w-[100%] h-auto p-[20px] sm:p-[22px] md:p-[25px] rounded-[4px] bg-[#32323c] text-[#a0a0a0] text-[16px] sm:text-[18px] md:text-[20px] border-none"></textarea>
          <button type='submit' className="contact-submit border-none text-white rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] text-[18px] sm:text-[20px] md:text-[22px] py-[15px] sm:py-[18px] md:py-[20px] px-[40px] sm:px-[50px] md:px-[60px] lg:px-[80px] mb-[50px] cursor-pointer capitalize transition-transform duration-300 hover:scale-[1.1]">
            submit now
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact

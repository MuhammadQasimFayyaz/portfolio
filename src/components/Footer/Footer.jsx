// import './Footer.css'

function Footer() {
  const currentyear = new Date().getFullYear()
  return (
    <div className="footer mx-[20px] sm:mx-[40px] md:mx-[70px]">
      <hr className="border-gray-300" />
      <div className="footer-bottom text-center text-[14px] sm:text-[16px] md:text-[18px] py-[10px] sm:py-[15px] md:py-[20px]">
        <p className="footer-bottom-mid">
          &copy; {currentyear} Muhammad Qasim Fayyaz. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer

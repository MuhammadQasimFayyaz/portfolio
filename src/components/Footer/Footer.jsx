// import './Footer.css'

function Footer() {
  const currentyear = new Date().getFullYear()
  return (
    <div className="">
      <hr />
      <div className="text-center text-[18px] py-[20px]">
        <p className="footer-bottom-mid">
          &copy; {currentyear} Muhammad Qasim Fayyaz. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer

import './Footer.css'

function Footer() {
  const currentyear = new Date().getFullYear()
  return (
    <div className='footer'>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-mid">
          &copy; {currentyear} Muhammad Qasim Fayyaz. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer

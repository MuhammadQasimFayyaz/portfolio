import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <a href="/">Portfolio</a>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">
        Connect with me
      </div>
    </div>
  )
}

export default Navbar

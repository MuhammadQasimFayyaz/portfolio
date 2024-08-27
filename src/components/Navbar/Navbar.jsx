import { useState } from 'react'
import './Navbar.css'
import underline from '../../assets/underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar() {

  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
      <a href="/">Muhammad Qasim Fayyaz</a>
      <ul className='nav-menu'>
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt="" /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About me</p></AnchorLink>{menu === "about" ? <img src={underline} alt="" /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} alt="" /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink>{menu === "work" ? <img src={underline} alt="" /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt="" /> : <></>}</li>
      </ul>
      <AnchorLink className='anchor-link' offset={50} href='#contact'>
        <div className="nav-connect">Connect with me</div>
      </AnchorLink>
    </div>
  )
}

export default Navbar

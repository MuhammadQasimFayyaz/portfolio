import { useRef, useState } from 'react'
import './Navbar.css'
import underline from '../../assets/underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_bar from '../../assets/menu.svg'
import close from '../../assets/close.svg'

function Navbar() {

  const [menu, setMenu] = useState("home")
  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.right = '0'
  }
  const closeMenu = () => {
    menuRef.current.style.right = '-350px'
  }

  return (
    <div className='navbar flex items-center justify-between mx-[170px] my-[20px]'>
    <a href="/" className="text-white text-[20px] no-underline">Muhammad Qasim Fayyaz</a>
    <img src={menu_bar} alt="menu bar" className='nav-mob-open hidden fixed right-[30px]' onClick={openMenu} />
    <ul ref={menuRef} className='nav-menu flex items-center list-none gap-[60px] text-[20px]'>
      <img className='nav-mob-close hidden relative top-[30px] left-[120px] w-[30px]' src={close} alt="" onClick={closeMenu} />
      <li className='flex flex-col gap-[5px] cursor-pointer'>
        <AnchorLink className='anchor-link no-underline text-white' href='#home'>
          <p onClick={() => setMenu("home")}>Home</p>
        </AnchorLink>
        {menu === "home" ? <img src={underline} alt="" className="flex mx-auto" /> : <></>}
      </li>
      <li className='flex flex-col gap-[5px] cursor-pointer'>
        <AnchorLink className='anchor-link no-underline text-white' offset={50} href='#about'>
          <p onClick={() => setMenu("about")}>About me</p>
        </AnchorLink>
        {menu === "about" ? <img src={underline} alt="" className="flex mx-auto" /> : <></>}
      </li>
      <li className='flex flex-col gap-[5px] cursor-pointer'>
        <AnchorLink className='anchor-link no-underline text-white' offset={50} href='#services'>
          <p onClick={() => setMenu("services")}>Services</p>
        </AnchorLink>
        {menu === "services" ? <img src={underline} alt="" className="flex mx-auto" /> : <></>}
      </li>
      <li className='flex flex-col gap-[5px] cursor-pointer'>
        <AnchorLink className='anchor-link no-underline text-white' offset={50} href='#work'>
          <p onClick={() => setMenu("work")}>Portfolio</p>
        </AnchorLink>
        {menu === "work" ? <img src={underline} alt="" className="flex mx-auto" /> : <></>}
      </li>
      <li className='flex flex-col gap-[5px] cursor-pointer'>
        <AnchorLink className='anchor-link no-underline text-white' offset={50} href='#contact'>
          <p onClick={() => setMenu("contact")}>Contact</p>
        </AnchorLink>
        {menu === "contact" ? <img src={underline} alt="" className="flex mx-auto" /> : <></>}
      </li>
    </ul>
    <AnchorLink className='anchor-link no-underline text-white' offset={50} href='#contact'>
      <div className="nav-connect py-[20px] px-[40px] rounded-full bg-gradient-to-r from-[#da7c25] to-[#b923e1] text-[22px] cursor-pointer transition-transform duration-500 hover:scale-105">
        Connect with me
      </div>
    </AnchorLink>
  </div>
  )
}

export default Navbar

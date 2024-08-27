import { useState } from 'react'
// import './Navbar.css'
import underline from '../../assets/underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar() {

  const [menu, setMenu] = useState("home")

  return (
    <div className='flex items-center justify-between mx-[170px] my-[20px]'>
      <a href="/" className="text-white text-[20px] no-underline">Muhammad Qasim Fayyaz</a>
      <ul className='flex items-center list-none gap-[60px] text-[20px]'>
        <li className='flex flex-col gap-[5px] cursor-pointer'>
          <AnchorLink className='no-underline text-white' href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" className="flex mx-auto" /> : <></>}
        </li>
        <li className='flex flex-col gap-[5px] cursor-pointer'>
          <AnchorLink className='no-underline text-white' offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" className="flex mx-auto" /> : <></>}
        </li>
        <li className='flex flex-col gap-[5px] cursor-pointer'>
          <AnchorLink className='no-underline text-white' offset={50} href='#services'>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="" className="flex mx-auto" /> : <></>}
        </li>
        <li className='flex flex-col gap-[5px] cursor-pointer'>
          <AnchorLink className='no-underline text-white' offset={50} href='#work'>
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="" className="flex mx-auto" /> : <></>}
        </li>
        <li className='flex flex-col gap-[5px] cursor-pointer'>
          <AnchorLink className='no-underline text-white' offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" className="flex mx-auto" /> : <></>}
        </li>
      </ul>
      <AnchorLink className='no-underline text-white' offset={50} href='#contact'>
        <div className="py-[20px] px-[40px] rounded-full bg-gradient-to-r from-[#da7c25] to-[#b923e1] text-[22px] cursor-pointer transition-transform duration-500 hover:scale-105">
          Connect with me
        </div>
      </AnchorLink>
    </div>
  )
}

export default Navbar

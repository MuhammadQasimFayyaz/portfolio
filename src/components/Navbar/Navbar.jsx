import { useRef, useState } from 'react'
// import './Navbar.css'
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
    <div className='navbar flex items-center justify-between px-[20px] sm:px-[30px] md:px-[50px] lg:px-[80px] my-[20px] gap-[10px]'>
      <a href='/' className='text-white text-[20px] sm:text-[24px] no-underline'>
        MQF
      </a>
      <img
        src={menu_bar}
        alt='menu bar'
        className='nav-mob-open block md:hidden absolute right-[20px] sm:right-[30px]'
        onClick={openMenu}
      />
      <ul
        ref={menuRef}
        className='nav-menu flex flex-col md:flex-row md:items-center list-none gap-[20px] sm:gap-[30px] md:gap-[40px] text-[18px] sm:text-[20px] bg-[#1e0016] md:bg-transparent fixed md:relative top-0 right-[-350px] md:right-0 h-full md:h-auto w-[300px] sm:w-[350px] md:w-auto z-10 transition-transform duration-500'>
        <img
          className='nav-mob-close block md:hidden relative top-[30px] left-[250px] sm:left-[290px] w-[30px]'
          src={close}
          alt=''
          onClick={closeMenu}
        />
        <li className='flex flex-col md:flex-row lg:flex-col gap-[5px] cursor-pointer items-center'>
          <AnchorLink
            className='anchor-link no-underline text-white'
            href='#home'>
            <p onClick={() => setMenu('home')}>Home</p>
          </AnchorLink>
          {menu === 'home' && <img src={underline} alt='' className='flex mx-auto' />}
        </li>
        <li className='flex flex-col md:flex-row lg:flex-col gap-[5px] cursor-pointer items-center'>
          <AnchorLink
            className='anchor-link no-underline text-white'
            offset={50}
            href='#about'>
            <p onClick={() => setMenu('about')}>About me</p>
          </AnchorLink>
          {menu === 'about' && <img src={underline} alt='' className='flex mx-auto' />}
        </li>
        <li className='flex flex-col md:flex-row lg:flex-col gap-[5px] cursor-pointer items-center'>
          <AnchorLink
            className='anchor-link no-underline text-white'
            offset={50}
            href='#services'>
            <p onClick={() => setMenu('services')}>Services</p>
          </AnchorLink>
          {menu === 'services' && <img src={underline} alt='' className='flex mx-auto' />}
        </li>
        <li className='flex flex-col md:flex-row lg:flex-col gap-[5px] cursor-pointer items-center'>
          <AnchorLink
            className='anchor-link no-underline text-white'
            offset={50}
            href='#work'>
            <p onClick={() => setMenu('work')}>Portfolio</p>
          </AnchorLink>
          {menu === 'work' && <img src={underline} alt='' className='flex mx-auto' />}
        </li>
        <li className='flex flex-col md:flex-row lg:flex-col gap-[5px] cursor-pointer items-center'>
          <AnchorLink
            className='anchor-link no-underline text-white'
            offset={50}
            href='#contact'>
            <p onClick={() => setMenu('contact')}>Contact</p>
          </AnchorLink>
          {menu === 'contact' && <img src={underline} alt='' className='flex mx-auto' />}
        </li>
      </ul>
      <AnchorLink
        className='anchor-link no-underline text-white hidden md:block'
        offset={50}
        href='#contact'>
        <div className='nav-connect py-[15px] sm:py-[15px] px-[10px] sm:px-[40px] rounded-full bg-gradient-to-r from-[#da7c25] to-[#b923e1] text-[20px] sm:text-[22px] cursor-pointer transition-transform duration-500 hover:scale-105'>
          Connect with me
        </div>
      </AnchorLink>
    </div>
  )
}

export default Navbar

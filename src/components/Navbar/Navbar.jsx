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

  const handleNavItemClick = () => {
    // setMenu(section);
    if (window.innerWidth < 768 && menuRef.current) {
      menuRef.current.style.right = '-350px';
    }
  }

  return (
    <div className='navbar flex items-center justify-between px-[20px] sm:px-[30px] md:px-[40px] lg:px-[80px] my-[20px] gap-[10px]'>
      <a href='/' className='text-[20px] sm:text-[24px] no-underline'>
        MQF
      </a>
      <img
        src={menu_bar}
        alt='menu bar'
        className='nav-mob-open block md:hidden absolute right-[20px] sm:right-[30px] filter invert dark:invert-0'
        onClick={openMenu}
      />
      <ul
        ref={menuRef}
        className='nav-menu flex flex-col md:flex-row md:items-center list-none gap-[20px] sm:gap-[30px] md:gap-[40px] text-[18px] sm:text-[20px] bg-[#1e0016] dark:bg-[#161513] md:bg-transparent fixed md:relative top-0 right-[-350px] md:right-0 h-full md:h-auto w-[300px] sm:w-[350px] md:w-auto z-10 transition-transform duration-500 pt-1 md:pt-0'>
        <img
          className='nav-mob-close block md:hidden relative top-[15px] left-[250px] sm:left-[290px] w-[30px] mb-10 filter invert dark:invert-0'
          src={close}
          alt=''
          onClick={closeMenu}
        />
        <li className='flex flex-col md:flex-col lg:flex-col gap-[5px] cursor-pointer items-center'>
          <AnchorLink
            className='anchor-link no-underline dark:text-white'
            href='#home' onClick={() => handleNavItemClick()}>
            <p onClick={() => setMenu('home')}>Home</p>
          </AnchorLink>
          {menu === 'home' && <img src={underline} alt='' className='flex mx-auto' />}
        </li>
        <li className='flex flex-col md:flex-col lg:flex-col gap-[5px] cursor-pointer items-center'>
          <AnchorLink
            className='anchor-link no-underline dark:text-white'
            offset={50}
            href='#about' onClick={() => handleNavItemClick()}>
            <p onClick={() => setMenu('about')}>About me</p>
          </AnchorLink>
          {menu === 'about' && <img src={underline} alt='' className='flex mx-auto' />}
        </li>
        <li className='flex flex-col md:flex-col lg:flex-col gap-[5px] cursor-pointer items-center'>
          <AnchorLink
            className='anchor-link no-underline dark:text-white'
            offset={50}
            href='#services' onClick={() => handleNavItemClick()}>
            <p onClick={() => setMenu('services')}>Services</p>
          </AnchorLink>
          {menu === 'services' && <img src={underline} alt='' className='flex mx-auto' />}
        </li>
        <li className='flex flex-col md:flex-col lg:flex-col gap-[5px] cursor-pointer items-center'>
          <AnchorLink
            className='anchor-link no-underline dark:text-white'
            offset={50}
            href='#skills' onClick={() => handleNavItemClick()}>
            <p onClick={() => setMenu('skills')}>Skills</p>
          </AnchorLink>
          {menu === 'skills' && <img src={underline} alt='' className='flex mx-auto' />}
        </li>
        <li className='flex flex-col md:flex-col lg:flex-col gap-[5px] cursor-pointer items-center'>
          <AnchorLink
            className='anchor-link no-underline dark:text-white'
            offset={50}
            href='#work' onClick={() => handleNavItemClick()}>
            <p onClick={() => setMenu('work')}>Portfolio</p>
          </AnchorLink>
          {menu === 'work' && <img src={underline} alt='' className='flex mx-auto' />}
        </li>
        <li className='flex flex-col md:flex-col lg:flex-col gap-[5px] cursor-pointer items-center'>
          <AnchorLink
            className='anchor-link no-underline dark:text-white'
            offset={50}
            href='#contact' onClick={() => handleNavItemClick()}>
            <p onClick={() => setMenu('contact')}>Contact</p>
          </AnchorLink>
          {menu === 'contact' && <img src={underline} alt='' className='flex mx-auto' />}
        </li>
      </ul>
      <AnchorLink
        className='anchor-link no-underline hidden md:block'
        offset={50}
        href='#contact' onClick={() => handleNavItemClick()}>
        <div className='nav-connect py-[15px] sm:py-[15px] px-[10px] sm:px-[40px] rounded-full bg-gradient-to-r from-[#da7c25] to-[#b923e1] text-[20px] sm:text-[22px] cursor-pointer transition-transform duration-500 hover:bg-gradient-to-r hover:to-[#da7c25] hover:from-[#b923e1]'>
          Connect with me
        </div>
      </AnchorLink>
    </div>
  )
}

export default Navbar

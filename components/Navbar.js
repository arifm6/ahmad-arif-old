import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { ThemeContext } from '../pages/_app'
import { useContext } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faBitcoin  } from '@fortawesome/free-brands-svg-icons'
import { faLink, faSquareFull } from '@fortawesome/free-solid-svg-icons'
//https://stackoverflow.com/questions/53262263/target-active-link-when-the-route-is-active-in-next-js
//https://dev.to/yuridevat/how-to-add-styling-to-an-active-link-in-nextjs-593e
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const theme = useContext(ThemeContext)
  const router = useRouter();
  function toggleMenu() {
    setMenuOpen(prevMenuState => !prevMenuState)
  }
  return (
    <>
      {/**THIS BUTTON IS FOR THE CLOSE/OPEN MENU */}
      <button className='fixed top-[1rem] right-[1rem] z-[100] xl:hidden' aria-label='hamburger menu' onClick={toggleMenu}>
        {menuOpen ?

          <svg className='w-[3rem] h-[3rem] text-[#FFF] bg-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill='currentColor'>
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
          </svg> :
          <svg className='w-[3rem] h-[3rem] text-[#FFF] bg-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='currentColor'>
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>


        }
      </button>
      {/**xl:static is for testing purposes only.. */}
      <nav className={`flex flex-col justify-between w-[100vw] h-[100vh] fixed top-0 xl:fixed xl:w-[10rem] ${theme === "dark" ? "bg-[#212121]" : "bg-[#E3AFBC]"} ${menuOpen ? "" : "hidden"} xl:flex nav-transition `}>
        {/**section for my logo and title */}
        <div className={`flex flex-col items-center ${theme === "dark" ? "bg-[#000000]" : "bg-[#fff]"} pt-[4rem] xl:pt-[2rem] nav-transition`} >
          {/**put logo size here as a class (in the span) ?? MAYBE NOT */}
          <img className='bg-red-400/95' src="/vercel.svg" ></img>
          <h1 className='text-[2rem]'>Ahmad</h1>
          <p>Web Developer</p>
        </div>
        {/*section for page links*/}
        <div className={`mask flex flex-col text-center flex-1 [&>a]:border-t-[0.5px] ${theme === 'dark' && "[&>a]:border-[#C5C6C7]"} ${theme === 'light' && "[&>a]:border-[#9A1750]"} [&>a]:p-4 justify-center`}>
          <a className='' href=''>About Me</a>
          <a href=''>My Skills</a>
          <a href=''>Work</a>
          <a href=''>Contact</a>
          <a className='border-b-[0.5px]' href=''>Blog?</a>
        </div>
        {/**section for external links ie github, linkedin, email  */}
        <div className='flex justify-evenly flex-[0.5] [&>a]:h-[2rem] [&>a]:w-[2rem] [&>a]:flex [&>a]:items-center [&>a]:justify-center'>
        <a href='' ><FontAwesomeIcon className="fa-mask fa-custom" icon={faLinkedin} mask={faSquareFull } inverse /></a>
        <a href=''> <FontAwesomeIcon className="fa-mask fa-custom" icon={faGithub}  mask={faSquareFull } inverse /></a>
        <a href=''> <FontAwesomeIcon className="fa-mask fa-custom" icon={faBitcoin}  mask={faSquareFull } inverse /></a>

        </div>
      </nav>
    </>
  )
}

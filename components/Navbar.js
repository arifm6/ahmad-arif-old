import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { ThemeContext } from '../pages/_app'
import { useContext } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const theme = useContext(ThemeContext)

  function toggleMenu(){
    setMenuOpen(prevMenuState => !prevMenuState)
  }
  return (
    <>
    {/**THIS BUTTON IS FOR THE CLOSE/OPEN MENU */}
    <button className='fixed top-[1rem] right-[1rem] z-[100] xl:hidden' onClick={toggleMenu}>
        {menuOpen ? 

        <svg className='w-[3rem] h-[3rem] text-[#FFF] bg-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill='currentColor'>
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
        </svg>:
        <svg className='w-[3rem] h-[3rem] text-[#FFF] bg-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='currentColor'>
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
        </svg> 
    
    
        }
    </button>
    <nav className={`flex flex-col w-[100vw] h-[100vh] fixed top-0 xl:static xl:w-[13rem] ${theme === "dark" ? "bg-[#15232d]" : "bg-[#FFF]"} ${menuOpen ? "" : "hidden"} xl:block nav-transition`}>
        {/**section for my logo and title */}
        <div className='pt-[4rem] flex flex-col items-center' title="YOU MOUSED OVER THIS" >
            {/**put logo size here as a class (in the span) ?? MAYBE NOT */}
            <img className='' src="/vercel.svg" ></img>
            <h1 className='text-[2rem]'>RICK ROSS</h1>
            <p>Web Developer</p>
        </div>
        {/*section for page links*/}
        <ul></ul>
        {/**section for external links ie github, linkedin, email  */}

    </nav>
    </>
  )
}

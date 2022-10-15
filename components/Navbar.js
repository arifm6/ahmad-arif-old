import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { ThemeContext } from '../pages/_app'
import { useContext } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
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
        <ul className={`flex flex-col text-center flex-1 [&>a]:border-t-[0.5px] ${theme === 'dark' && "[&>a]:border-[#C5C6C7]"} ${theme === 'light' && "[&>a]:border-[#9A1750]"} [&>a]:p-4 justify-center`}>
          <a className='' href=''>About Me</a>
          <a href=''>My Skills</a>
          <a href=''>Work</a>
          <a href=''>Contact</a>
          <a className='border-b-[0.5px]' href=''>Blog?</a>
        </ul>
        {/**section for external links ie github, linkedin, email  */}
        <ul className='flex justify-center [&>a]:mx-[1rem] items-center text-center flex-[0.5] [&>a:hover]:text-[#66FCF1]'>
          <a className='' href=''>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 448 512" fill='currentColor'><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
          </a>
          <a className='' href=''>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 496 512" fill='currentColor'>
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
          <a className='' href=''>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 512 512" fill='currentColor'>
              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z" />
            </svg>
          </a>

        </ul>
      </nav>
    </>
  )
}

import React from 'react'
import Image from 'next/image'
import heroImageDark from '../public/home-hero-image.png'
import { useContext } from 'react'
import { ThemeContext } from '../pages/_app'
import heroImageLight from '../public/home-hero-light.webp'

export default function HomeSection() {
  const theme = useContext(ThemeContext)
  return (
    //add transition to this
    <div className='h-[100vh] w-[100%] relative -z-[50]'>
        <Image 
          src={theme === 'dark' ? heroImageDark : heroImageLight} 
          alt={theme === 'dark' ? 'Cyber City' : 'Junkyard'}
          layout='fill'

          className='object-cover'
          placeholder='blur'
          />
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import {useSelector, useDispatch} from 'react-redux'
import { useContext } from 'react'
import { ThemeContext } from './_app'
import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection'
import Link from 'next/link'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
FontAwesomeIcon
export default function Home(props) {
  const theme = useContext(ThemeContext)

  return (
    
    <>
      <Head>
        <title>Ahmad Arif&apos;s Website</title>
        <link rel="icon" href="/ahmad-arif-temp-logo.jpeg" />
        <meta name="description" content="Generated by create next app" />
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <main>
        <HomeSection />
      </main>
      <footer >
        <Link
          href="/test1"
          target="_blank"
          rel="noopener noreferrer"
        >
                      <h1> Footer Tag Button</h1>

        </Link>
      </footer>
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}



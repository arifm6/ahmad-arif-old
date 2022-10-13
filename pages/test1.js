import Head from 'next/head'
import Image from 'next/image'
import {useSelector, useDispatch} from 'react-redux'
import { useContext } from 'react'
import { ThemeContext } from './_app'
import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection'
import Link from 'next/link'

export default function test1(props) {
  const theme = useContext(ThemeContext)

  return (
    
    <>
fdsfnasdjfs 
<Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>Footer Tag Button</h1>
        </Link>   </>
  )
}

export async function getServerSideProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }
  
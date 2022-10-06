import '../styles/globals.css'
import ThemeButton from '../components/ThemeButton'
import { useState, createContext, useEffect } from 'react'
import { setCookie, getCookie, getCookies, deleteCookie } from 'cookies-next';
import Navbar from '../components/Navbar';
export const ThemeContext = createContext();

export default function App(props) {
  // YOU NEED TO LEARN THE BELOW SYNTAX!!!
  const { Component, pageProps } = props;
  //load initial theme from site cookie
  //some code is redundant because used for ssg but will leave because still not sure what ot use.
  const [theme, setTheme] = useState(props.siteTheme || "light")
  useEffect(function () {
    setCookie('siteTheme', theme)
    document.body.dataset.theme = theme;
  }, [theme])

  function toggleTheme() {
    setTheme(prevTheme => {
      return prevTheme === "dark" ? "light" : "dark"
    })
  }


  return (
    <ThemeContext.Provider value={theme}>
      <ThemeButton handleClick={toggleTheme} />
      <Navbar />
      {/**this padding is to adjust for the navbar */}
      <div className='xl:pl-[10rem]'>
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  )
}

//remove below to switch to SSG
App.getInitialProps = ({ ctx }) => ({
  siteTheme: getCookie("siteTheme", ctx)
})

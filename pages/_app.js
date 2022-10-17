import '../styles/globals.css'
import '../styles/toggle-theme.css'
import ThemeButton from '../components/ThemeButton'
import { useState, createContext, useEffect } from 'react'
import { setCookie, getCookie, getCookies, deleteCookie } from 'cookies-next';
import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustomCursor';
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
      <div className="xl:ml-[10rem] w-[100%] xl:w-[calc(100%-10rem)]">
        <CustomCursor />

        <Component {...pageProps} />
      </div>
      {/**this padding is to adjust for the navbar */}

      <ThemeButton handleClick={toggleTheme} />
      <Navbar />
    </ThemeContext.Provider>
    
  )
}

//remove below to switch to SSG
App.getInitialProps = ({ ctx }) => ({
  
  siteTheme: getCookie("siteTheme", ctx)
})

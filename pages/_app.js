import '../styles/globals.css'
import ThemeButton from '../components/ThemeButton'
import {useState, createContext, useEffect} from 'react'
import { setCookie, getCookie, getCookies, deleteCookie } from 'cookies-next';
export const ThemeContext = createContext();

export default function App(props ) {
  // YOU NEED TO LEARN THE BELOW SYNTAX!!!
  const {Component, pageProps} = props;
  //load initial theme from site cookie

  const [theme, setTheme] = useState(props.siteTheme)
  useEffect(function(){
    setCookie('siteTheme', theme)
    document.body.dataset.theme = theme;
  }, [theme])

  function toggleTheme(){
    setTheme(prevTheme => {
      return prevTheme === "dark" ? "light" : "dark"
    })
  }
  

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeButton handleClick={toggleTheme}/>
      <Component {...pageProps} />
    </ThemeContext.Provider>  
  )
}
App.getInitialProps = ({ctx}) => ({
  siteTheme: getCookie("siteTheme", ctx) || "dark"
})
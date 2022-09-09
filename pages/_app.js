import '../styles/globals.css'
import { store } from '../store'
import { Provider } from 'react-redux'
import ThemeButton from '../components/ThemeButton'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeButton />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

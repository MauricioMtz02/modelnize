import { ModelnizeProvider } from '../context/ModelnizeProvider'
import 'aos/dist/aos.css';
import '../styles/bootstrap.css'
import '../styles/globals.css'
import '../styles/utilities.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <ModelnizeProvider>
        {getLayout(<Component {...pageProps} />)}
    </ModelnizeProvider>
  )
}

export default MyApp
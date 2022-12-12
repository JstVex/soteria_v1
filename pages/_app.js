import '../styles/globals.css'
import Navbar from '../components/Navbar'
import 'mapbox-gl/dist/mapbox-gl.css';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Sidenavbar from '../components/Sidenavbar'
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <Navbar handleToggle={handleToggle} />
      <div className="wrapper">
        <Sidenavbar toggle={toggle} />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp

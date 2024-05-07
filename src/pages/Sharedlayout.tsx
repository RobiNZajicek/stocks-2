
import Footer from '../components/Footer/Footer'
import {NavbarSearch} from '../components/NavbarSearch/NavbarSearch'
import { Outlet } from 'react-router-dom'
const SharedLayout = () => {
  return <section>
    <div style={{display:'flex',flexDirection:'row'}}>
    <NavbarSearch/>
    <Outlet/>
    </div>
    <Footer/>
  </section>
}

export default SharedLayout
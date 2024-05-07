
import '@mantine/core/styles.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core';
import Home from './pages/Home/Home'
import SharedLayout from './pages/Sharedlayout';
import Profile from './pages/Profile/Profile'
import Stocks from './pages/Stocks/Stocks';
import Portfolio from './pages/Portfolio/Portfolio'
import Tools from './pages/Tools/Tools';
import Events from './pages/Events/Events';
import Shop from './pages/Shop/Shop';
import Achievements from './pages/Achievements/Achievements';
const App = () => {
  
  return (

      <BrowserRouter>
            <Routes>

              <Route path='/' element={<SharedLayout/>}>
              <Route index element={<Home/>}/>
              <Route path='Stocks'element={<Stocks/>}/>
              <Route path='Profile'element={<Profile/>}/>
              <Route path='Tools'element={<Tools/>}/>
              <Route path='Achievements'element={<Achievements/>}/>
              <Route path='Shop'element={<Shop/>}/>
              <Route path='Events'element={<Events/>}/>
              <Route path='Portfolio'element={<Portfolio/>}/>
              </Route>
              
            </Routes>
  </BrowserRouter>
      
  )
}

export default App
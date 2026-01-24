import {Route, Routes} from 'react-router-dom'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Home from './Pages/Home'
const App = () => {
  return (
    <div>
      <nav className='p-2 text-center'>This is Navbar</nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/page1' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/page3' element={<Page3 />} />
      </Routes>
    </div>
  )
}

export default App
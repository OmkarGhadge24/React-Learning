import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Courses from './Pages/Courses'
import Contact from './Pages/Contact'
import CourseDetail from './Pages/CourseDetail'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-gray-950 text-white flex flex-col'>
      <Navbar />
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:id' element={<CourseDetail />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
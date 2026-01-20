import { useState } from 'react'
import Form from './Form'
import NotesSection from './NotesSection'
import Sidebar from './Sidebar'

const MainPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formData, setFormData] = useState([])

  const openForm = () => setIsFormOpen(true)
  const closeForm = () => setIsFormOpen(false)

  return (
    <div className='bg-[#FEFCFF] text-[#1A1A1A] flex w-full h-screen absolute'>
        <Sidebar onAddClick={openForm} />
        <NotesSection cards={formData} />
        {isFormOpen && <Form setData={setFormData} onClose={closeForm} />}
    </div>
  )
}

export default MainPage
import { CornerDownRight } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-10 py-4'>
      <h4 className='bg-black text-white px-5 py-2 rounded-full uppercase text-sm'>Target Audience</h4>
      <button className='bg-gray-200 px-5 py-2 rounded-full uppercase tracking-widest text-sm flex gap-1 items-center' >
        <CornerDownRight size={16} />
        Digital Banking Platform
      </button>
    </div>
  )
}

export default Navbar
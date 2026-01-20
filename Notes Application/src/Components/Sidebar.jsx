import { IoAdd } from "react-icons/io5";

const Sidebar = ({ onAddClick }) => {
  return (
    <div className="h-full p-6 flex flex-col gap-14 items-center border-r-2 border-[#dadada]">
      <h2 className="text-lg font-semibold">Docket</h2>
      <button 
        onClick={onAddClick}
        className="bg-zinc-900 text-[#FEFCFF] p-2 rounded-full cursor-pointer hover:bg-zinc-800 transition-colors"
      >
        <IoAdd size={24} />
      </button>
    </div>
  )
}

export default Sidebar
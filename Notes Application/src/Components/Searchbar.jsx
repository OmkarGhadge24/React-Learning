import { IoSearch } from "react-icons/io5";

const Searchbar = () => {
  return (
    <div className="flex w-[90%] rounded-lg bg-zinc-100 px-3 py-2 items-center justify-center gap-2">
        <IoSearch color="#878787" />
        <input className="outline-none w-full h-full" type="text" placeholder="Search" />
    </div>
  )
}

export default Searchbar
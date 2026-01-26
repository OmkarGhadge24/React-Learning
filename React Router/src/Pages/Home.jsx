import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-orange-300 h-screen text-black p-6 text-2xl font-bold flex flex-col gap-4">
      Home Page

      <div className="bg-orange-700 px-4 py-2 rounded-md w-max">
        <Link to="/page1" className="underline-none">Go to Page 1</Link>
      </div>
    </div>
  )
}

export default Home
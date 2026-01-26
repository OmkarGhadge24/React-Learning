import { Link } from 'react-router-dom'

const Page2 = () => {
  return (
    <div className="bg-blue-300 h-screen text-black p-6 text-2xl font-bold flex flex-col gap-4">
      Page2
      <div className="bg-blue-700 px-4 py-2 rounded-md w-max">
        <Link to="/page3" className="underline-none">
          Go to Page 3
        </Link>
      </div>
    </div>
  )
}

export default Page2
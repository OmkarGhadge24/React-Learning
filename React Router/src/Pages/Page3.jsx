import { Link } from 'react-router-dom'

const Page3 = () => {
  return (
    <div className="bg-purple-300 h-screen text-black p-6 text-2xl font-bold flex flex-col gap-4">
      Page3
      <div className="bg-purple-700 px-4 py-2 rounded-md w-max">
        <Link to="/" className="underline-none">
          Go to Home
        </Link>
      </div>
    </div>
  )
}

export default Page3
import { Link } from 'react-router-dom'

const Page1 = () => {
  return (
    <div className="bg-green-300 h-screen text-black p-6 text-2xl flex flex-col gap-4 font-bold">
      Page1
      <div className="bg-green-700 px-4 py-2 rounded-md w-max">
        <Link to="/page2" className="underline-none">
          Go to Page 2
        </Link>
      </div>
    </div>
  );
};

export default Page1;

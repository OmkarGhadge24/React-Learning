import axios from "axios";
import { useEffect, useState } from "react";

const Main = () => {
    const [userData, setUserData] = useState([]);
    const [index, setIndex] = useState(1);

    async function getData() {
        const res = await axios.get(
            `https://picsum.photos/v2/list?page=${index}&limit=10`,
        );
        setUserData(res.data);
    }

    useEffect(
        function () {
            getData();
        },
        [index],
    );

    return (
        <div>
            <div className="flex flex-wrap gap-6 mt-4">
                {userData.map((user) => (
                    <a target="_blank" href={user.url} key={user.id} className="w-64">
                        <img
                            src={user.download_url}
                            alt={user.author}
                            className="w-full h-56 object-cover rounded-lg"
                        />
                        <p className="mt-2 text-md font-semibold text-center text-gray-800">
                            {user.author}
                        </p>
                    </a>
                ))}
            </div>

            <div className="flex justify-center mt-6">
                <button
                    onClick={() => {
                        if (index > 1) setIndex(index - 1);
                    }}
                    className="bg-green-600 cursor-pointer active:scale-95 text-white px-4 py-2 rounded-lg mr-2"
                >
                    Prev
                </button>
                <button
                    onClick={() => {
                        setIndex(index + 1);
                    }}
                    className="bg-green-600 cursor-pointer active:scale-95 text-white px-4 py-2 rounded-lg"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Main;

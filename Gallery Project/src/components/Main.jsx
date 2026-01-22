import axios from "axios";
import { useState } from "react";

const Main = () => {
    const [userData, setUserData] = useState([]);

    async function getData() {
        const res = await axios.get(
            "https://picsum.photos/v2/list?page=1&limit=100",
        );
        console.log(res.data);
        setUserData(res.data);
    }
    return (
        <div>
            <button
                onClick={() => {
                    getData();
                }}
                className="bg-zinc-700 text-white px-4 py-2 rounded-lg"
            >
                Get Data
            </button>

            <div>
                <div className="grid grid-cols-4 gap-4 mt-4"></div>
                {userData.map((user) => (
                    <div key={user.id}>
                        <img src={user.download_url} alt={user.author} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;

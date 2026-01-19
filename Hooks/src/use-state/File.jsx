import { useState } from "react";

const File = () => {
    const [num, setNum] = useState(0);

    function increaseNum(number) {
        number++;
        setNum(number);
    }
    function decreaseNum(number) {
        if (number > 0) {
            number--;
            setNum(number);
        }
    }
    return (
        <div className="p-4 flex flex-col gap-8">
            <h2 className="w-34 h-34 bg-zinc-600 rounded-xl flex justify-center items-center font-bold text-2xl">
                {num}
            </h2>
            <div className="flex gap-6">
                <button onClick={()=>{
                    increaseNum(num)
                }} className="bg-zinc-700 px-4 py-2 rounded-md">Increase</button>
                <button onClick={()=>{
                    decreaseNum(num)
                }} className="bg-zinc-700 px-4 py-2 rounded-md">Decrease</button>
            </div>
        </div>
    );
};

export default File;

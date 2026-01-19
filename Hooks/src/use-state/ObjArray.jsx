import { useState } from "react";

const ObjArray = () => {
    
    // Object
    const [val, setVal] = useState({ user: "Omkar", age: 22 });
    const { user, age } = val;
    // const btnClicked = () => {
    //     const newVal = { ...val };
    //     newVal.user = "Rahul";
    //     setVal(newVal);
    // };

    const btnClicked = () => {
        setVal(prev => ({...prev,age:69}))
        setVal(prev => ({...prev,user:'Joe'}))
    };

    // Array
    // const[num,setNum] = useState([10,20,30])
    // const btnClicked = () =>{
    //     const newNum = [...num]
    //     newNum.push(40)
    //     setNum(newNum)
    // }

    return (
        <div className="p-6">
            {/* <h1>{JSON.stringify(val)}</h1> */}
            <h2>{user}</h2>
            <h3>{age}</h3>
            {/* <h1>{num}</h1> */}
            <button onClick={btnClicked} className="bg-zinc-600 px-4 py-2 rounded-md">
                Click
            </button>
        </div>
    );
};

export default ObjArray;

import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const submitHandler = (elem) => {
        elem.preventDefault();
        console.log(name, age);
        setName('')
        setAge('')
    };
    return (
        <div>
            <form
                className="flex gap-4"
                onSubmit={(e) => {
                    submitHandler(e);
                }}
                action=""
            >
                <input
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    className="outline-none bg-zinc-700 p-2 border"
                    placeholder="Enter name"
                    type="text"
                />
                <input
                    value={age}
                    onChange={(e) => {
                        setAge(e.target.value);
                    }}
                    className="outline-none bg-zinc-700 p-2 border"
                    placeholder="Enter age"
                    type="text"
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Form;

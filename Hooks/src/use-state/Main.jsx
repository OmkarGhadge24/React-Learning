import { useState } from "react";

const Main = () => {
  const [value, setValue] = useState(0);
  function changeValue(val) {
    val++;
    setValue(val);
  }
  return (
    <div className="p-4">
      <h1 className="mb-4">Value of click count is {value}</h1>
      <button
        onClick={() => {
          changeValue(value);
        }}
        className="bg-zinc-600 px-4 py-2 rounded-md"
      >
        Click Here
      </button>
    </div>
  );
};

export default Main;

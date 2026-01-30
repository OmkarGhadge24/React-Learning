import { useContext } from "react";
import Navbar from "./components/Navbar";
import { ThemeData } from "./context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeData);

  return (
    <div
      className={`w-full h-screen 
      ${theme === "light" ? "bg-zinc-100" : "bg-zinc-800"}`}
    >
      <Navbar />
    </div>
  );
};

export default App;

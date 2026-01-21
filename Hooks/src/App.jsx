import Advance from "./use-state/Advance"
import File from "./use-state/File"
import Files from "./use-effect/Files"
import Main from "./use-state/Main"
import ObjArray from "./use-state/ObjArray"

const App = () => {
  return (
    <div className="p-4">
      {/* useState basic Section */}
      {/* <Main /> */}
      {/* <File /> */}
      {/* useState advanced Section */}
      {/* <Advance /> */}
      {/* <ObjArray /> */}

      {/* useEffect Section */}
      <Files />
    </div>
  )
}

export default App
import LeftTopPart from "./LeftTopPart";
import LeftBottomPart from "./LeftBottomPart";

const LeftContent = () => {
  return <div className="w-[58%] h-full flex flex-col">
    <LeftTopPart />
    <LeftBottomPart />
  </div>;
};

export default LeftContent;

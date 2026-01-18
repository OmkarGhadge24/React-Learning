import { ArrowUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className="h-full flex flex-col w-1/3 justify-between">
      <div className="p-5 pt-18">
        <h3 className="text-6xl font-medium mb-6">
          Prospective <br />
          customer<br />
          segmentation
        </h3>
        <p className="text-xl w-[70%]">Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups</p>
      </div>
      <div>
        <ArrowUpRight color="#000" size={80} />
      </div>
    </div>
  );
};

export default LeftContent;

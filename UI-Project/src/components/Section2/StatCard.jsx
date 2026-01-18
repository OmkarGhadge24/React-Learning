import { ArrowUpRight } from "lucide-react";
const StatCard = ({ value, description, bgColor, textColor }) => {
  return (
    <div className="relative">
      <div
        id="statCard"
        className={`${bgColor} ${textColor} w-72 h-64 p-8 pt-28 rounded-3xl rounded-tr-3xl overflow-hidden flex flex-col justify-between`}
      >
        <div>
          <h2 className="text-5xl font-bold mb-4">{value}</h2>
          <p className="text-base font-medium leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="absolute -top-3 -right-3 w-24 h-24 bg-white bg-opacity-30 p-6 rounded-full">
        <div className="border w-full h-full rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-50 transition-all">
          <ArrowUpRight size={36} color="black" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;

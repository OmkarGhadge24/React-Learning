import StatCard from "./StatCard";

const LeftBottomPart = () => {
  return (
    <div className="w-full h-1/2 flex gap-6 p-10">
      <StatCard
        value="26.7%"
        description="Expected annual growth of eCom market size"
        bgColor="bg-blue-500"
        textColor="text-white"
      />

      <StatCard
        value="25%"
        description="E-com share of the organized retail in 2020"
        bgColor="bg-lime-300"
        textColor="text-black"
      />
    </div>
  );
};

export default LeftBottomPart;

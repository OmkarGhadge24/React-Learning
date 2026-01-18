import { Sparkles } from 'lucide-react';

const LeftTopPart = () => {
  return (
    <div className="w-full h-1/2 p-8 pt-20 flex flex-col gap-6">
      <h3 className="text-5xl font-semibold leading-none">
        E-com market is expected <br />
        to exceed $300B in 2027
      </h3>
      <div className="text-xl font-normal flex gap-6">
        <span className='mt-3'>
            <Sparkles color='#576AEC' />
        </span>
        In india MSME contribution to eTailing sales
        <br /> is expected to grow between 60-70%
        <br /> annually to reach USD50Bn by FY 2027
      </div>
    </div>
  );
};

export default LeftTopPart;

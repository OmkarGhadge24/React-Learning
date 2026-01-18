import { ArrowRight } from "lucide-react";

const CustomerCard = ({ number, image, text, status, color, textColor }) => {
  return (
    <div className="relative h-full rounded-2xl w-74 overflow-hidden shrink-0">
      {/* Number Badge */}
      <div className="absolute top-4 left-4 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-semibold text-black">
        {number}
      </div>

      {/* Background Image */}
      <img src={image} alt="Customer" className="h-full w-full object-cover" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/80 z-10" />

      {/* Content */}
      <div className="absolute bottom-5 left-5 right-5 z-20 text-white">
        <p className="text-sm leading-relaxed mb-4">{text}</p>
        <div className="flex justify-between items-center">
          <button
            className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition"
            style={{ backgroundColor: color, color: textColor }}
          >
            {status}
          </button>
          <button
            className="flex items-center justify-center px-3 py-2 rounded-full"
            style={{ backgroundColor: color}}
          >
            <ArrowRight size={12} color={textColor} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;

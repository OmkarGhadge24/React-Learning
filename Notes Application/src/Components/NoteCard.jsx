import { IoPencilOutline } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

const NoteCard = ({ data }) => {
    function formatDateFromData(dateValue) {
        if (!dateValue) return "";
        const dateObj = new Date(dateValue);
        const months = [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];

        const month = months[dateObj.getMonth()];
        const day = String(dateObj.getDate()).padStart(2, "0");
        const year = dateObj.getFullYear();

        return `${month} ${day}, ${year}`;
    }

    return (
        <div
            className="w-64 h-72 rounded-3xl p-6 flex flex-col justify-between"
            style={{ backgroundColor: data.color }}
        >
            <div className="flex justify-between items-start">
                <h4 className="text-md w-[85%] font-semibold leading-relaxed text-gray-800">
                    {data.title}
                </h4>
                {data.priority === "important" ? (
                    <div className="bg-gray-900 rounded-full p-2 cursor-pointer hover:bg-gray-800">
                        <IoStarOutline size={18} className="text-white" />
                    </div>
                ) : null}
            </div>
            <div className="flex justify-between items-end">
                <h6 className="text-sm text-gray-700">{formatDateFromData(data.date)}</h6>
                <div className="bg-gray-900 rounded-full p-2 cursor-pointer hover:bg-gray-800">
                    <IoPencilOutline size={18} className="text-white" />
                </div>
            </div>
        </div>
    );
};

export default NoteCard;

import { useState } from "react";
import { MdCancel } from "react-icons/md";

const colors = ["#FBBF24", "#F87171", "#A78BFA", "#86EFAC", "#67E8F9"];

const Form = ({ setData, onClose }) => {
    const [text, setText] = useState("");
    const [date, setDate] = useState("");
    const [color, setColor] = useState(colors[0]);
    const [priority, setPriority] = useState("normal");

    function handleSubmit(e) {
        e.preventDefault();
        setData((prevData) => [
            ...prevData,
            {
                title: text,
                date: date,
                color: color,
                priority: priority,
            },
        ]);
    }

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">Add Note</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <MdCancel size={28} />
                    </button>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Note Title
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your note..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="w-full px-4 py-3 bg-white/70 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-zinc-400 transition-colors backdrop-blur-sm"
                        />
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Date
                        </label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-4 py-3 bg-white/70 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-zinc-400 transition-colors backdrop-blur-sm"
                        />
                    </div>

                    {/* Color Selection */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Select Color
                        </label>
                        <div className="flex gap-4">
                            {colors.map((c) => (
                                <button
                                    key={c}
                                    type="button"
                                    onClick={() => setColor(c)}
                                    className={`w-10 h-10 rounded-full border-3 transition-all transform ${color === c
                                            ? "border-gray-800 scale-110 shadow-lg"
                                            : "border-gray-300 hover:border-gray-400"
                                        }`}
                                    style={{ backgroundColor: c }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Priority Selection */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Priority Level
                        </label>
                        <div className="flex gap-6">
                            <label className="flex items-center cursor-pointer group">
                                <input
                                    type="radio"
                                    name="priority"
                                    value="normal"
                                    checked={priority === "normal"}
                                    onChange={(e) => setPriority(e.target.value)}
                                    className="w-4 h-4"
                                />
                                <span className="ml-2 text-gray-700 group-hover:text-gray-900 transition-colors">
                                    Normal
                                </span>
                            </label>

                            <label className="flex items-center cursor-pointer group">
                                <input
                                    type="radio"
                                    name="priority"
                                    value="important"
                                    checked={priority === "important"}
                                    onChange={(e) => setPriority(e.target.value)}
                                    className="w-4 h-4"
                                />
                                <span className="ml-2 text-gray-700 group-hover:text-gray-900 transition-colors">
                                    Important
                                </span>
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-zinc-200 text-gray-900 font-semibold rounded-lg mt-6"
                    >
                        Create Note
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;

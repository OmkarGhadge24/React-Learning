import Searchbar from "./Searchbar";
import NoteCard from "./NoteCard";

const NotesSection = ({ cards }) => {
  return (
    <div className="h-full flex flex-col items-center py-4 w-full overflow-x-auto">
      <Searchbar />
      <div className="flex flex-wrap px-6 py-8 gap-4">
        {cards.map((data) => (
          <NoteCard key={data.date} data={data} />
        ))}
      </div>
    </div>
  );
};

export default NotesSection;

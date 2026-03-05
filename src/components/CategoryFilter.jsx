import { useSelector } from "react-redux";

const staticCategories = [
  "All",
  "Philosophical",
  "Fantasy",
  "Sci-Fi",
  "History",
  "Poetry",
];


const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const addedBooks = useSelector((state) => state.books.addedBooks);

  const addedCategories = addedBooks.map((b) => capitalize(b.category));

  const allCategories = [...new Set([...staticCategories, ...addedCategories])];

  return (
    <div className="flex flex-wrap gap-2">
      {allCategories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 
            ${
              selectedCategory === cat
                ? "bg-amber-500 text-amber-950 border-amber-500 shadow-md shadow-amber-500/30"
                : "bg-transparent text-amber-300 border-amber-700 hover:border-amber-500 hover:text-amber-400"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default CategoryFilter;